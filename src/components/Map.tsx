// components/NearbyZonesMap.tsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export interface Zone {
  id: string;
  center: [number, number]; // [lat, lng]
  radius: number; // in meters
  name: string;
  type: "service" | "delivery" | "coverage";
}

interface NearbyZonesMapProps {
  userLocation: [number, number]; // [lat, lng]
  zones: Zone[];
  radius?: number; // Default radius to show around user
  className?: string;
  style?: React.CSSProperties;
}

// Component to handle map view adjustments - FIXED VERSION
const MapController: React.FC<{
  userLocation: [number, number];
  zones: Zone[];
}> = ({ userLocation, zones }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return; // Safety check

    try {
      if (zones.length > 0) {
        // Create a simple bounds calculation without using layerPointToLatLng
        const bounds = L.latLngBounds([userLocation]);

        // Extend bounds to include all zones
        zones.forEach((zone) => {
          bounds.extend(zone.center);
          // Also include the circle edges for better fit
          const north = zone.center[0] + zone.radius / 111320; // approx meters to degrees
          const south = zone.center[0] - zone.radius / 111320;
          const east =
            zone.center[1] +
            zone.radius / (111320 * Math.cos((zone.center[0] * Math.PI) / 180));
          const west =
            zone.center[1] -
            zone.radius / (111320 * Math.cos((zone.center[0] * Math.PI) / 180));
          bounds.extend([north, east]);
          bounds.extend([south, west]);
        });

        map.fitBounds(bounds.pad(0.1));
      } else {
        // If no zones, just center on user location
        map.setView(userLocation, 13);
      }
    } catch (error) {
      console.error("Map bounds error:", error);
      // Fallback: just center on user location
      map.setView(userLocation, 13);
    }
  }, [userLocation, zones, map]);

  return null;
};

const NearbyZonesMap: React.FC<NearbyZonesMapProps> = ({
  userLocation,
  zones,
  radius = 5000, // 5km default radius
  className = "",
  style = { height: "400px", width: "100%" },
}) => {
  const [isClient, setIsClient] = useState(false);
  const [mapKey, setMapKey] = useState(0); // Key to force re-render

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Reset map when userLocation changes significantly
  useEffect(() => {
    setMapKey((prev) => prev + 1);
  }, [userLocation[0], userLocation[1]]);

  const getZoneColor = (type: Zone["type"]): string => {
    switch (type) {
      case "service":
        return "blue";
      case "delivery":
        return "green";
      case "coverage":
        return "orange";
      default:
        return "gray";
    }
  };

  const getZoneOpacity = (type: Zone["type"]): number => {
    switch (type) {
      case "service":
        return 0.2;
      case "delivery":
        return 0.3;
      case "coverage":
        return 0.15;
      default:
        return 0.2;
    }
  };

  if (!isClient) {
    return (
      <div style={style} className="bg-gray-200 animate-pulse rounded-lg" />
    );
  }

  return (
    <div className={`nearby-zones-map ${className}`}>
      <MapContainer
        key={mapKey} // Force re-render on location change
        center={userLocation}
        zoom={13}
        style={style}
        scrollWheelZoom={true}
        className="rounded-lg"
      >
        <MapController userLocation={userLocation} zones={zones} />

        {/* Base map layer */}
        <TileLayer
          attribution='&copy;'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User location marker */}
        <Circle
          center={userLocation}
          radius={100}
          color="red"
          fillColor="red"
          fillOpacity={0.8}
          weight={2}
        />

        {/* User radius circle */}
        <Circle
          center={userLocation}
          radius={radius}
          color="red"
          fillColor="red"
          fillOpacity={0.1}
          weight={1}
          dashArray="5, 5"
        />

        {/* Nearby zones */}
        {zones.map((zone) => (
          <Circle
            key={zone.id}
            center={zone.center}
            radius={zone.radius}
            color={getZoneColor(zone.type)}
            fillColor={getZoneColor(zone.type)}
            fillOpacity={getZoneOpacity(zone.type)}
            weight={2}
          />
        ))}
      </MapContainer>

      {/* Simple legend */}
      <div className="mt-2 flex flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>Your Location</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full opacity-50"></div>
          <span>Service</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded-full opacity-50"></div>
          <span>Delivery</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-orange-500 rounded-full opacity-50"></div>
          <span>Coverage</span>
        </div>
      </div>
    </div>
  );
};

// Example usage with mock data
export const ExampleNearbyZonesMap: React.FC = () => {
  // Example user location (New York)
   const userLocation: [number, number] = [23.2599, 77.4126];

  // Example nearby zones
  const zones: Zone[] = [
    {
      id: "1",
      center: [23.2599 + 0.01, 77.4126 + 0.01], // South-East area
      radius: 1500,
      name: "MP Nagar Service",
      type: "service",
    },
    {
      id: "2",
      center: [23.2599 - 0.008, 77.4126 + 0.005], // North-East area
      radius: 2000,
      name: "Arera Colony Delivery",
      type: "delivery",
    },
    {
      id: "3",
      center: [23.2599 + 0.005, 77.4126 - 0.012], // South-West area
      radius: 1800,
      name: "New Market Coverage",
      type: "coverage",
    },
    {
      id: "6",
      center: [23.2599 - 0.005, 77.4126], // North area
      radius: 1400,
      name: "TT Nagar Coverage",
      type: "coverage",
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto z-0">
      <h2 className="text-lg font-semibold mb-2">Nearby Service Zones</h2>
      <p className="text-sm text-gray-600 mb-4">
        Showing {zones.length} zones near your location
      </p>

      <NearbyZonesMap
        userLocation={userLocation}
        zones={zones}
        radius={0}
        style={{ height: "500px", width: "100%" }}
        className="border rounded-lg shadow-sm"
      />
    </div>
  );
};

export default NearbyZonesMap;
