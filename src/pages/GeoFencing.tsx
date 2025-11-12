import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  MapPin,
  AlertCircle,
  Users,
  Bell,
  Save,
  Layers,
  Plus,
  Radio,
  ZoomIn,
  ZoomOut,
  Maximize,
  Target,
  Activity,
  TrendingUp,
  Shield,
  X,
  Check,
  MapPinned,
  Trash2
} from "lucide-react";
import { ExampleNearbyZonesMap } from "@/components/Map";

export default function GeoFencing() {
  const [zones, setZones] = useState([
    {
      id: "1",
      name: "Zone A - Village Center",
      nameHi: "क्षेत्र ए - गांव केंद्र",
      risk: "low",
      radius: 1000,
      farmers: 45,
      center: { lat: 23.2599, lng: 77.4126 }, // Bhopal coords
      color: "#10b981"
    },
    {
      id: "2",
      name: "Zone B - North Farms",
      nameHi: "क्षेत्र बी - उत्तरी खेत",
      risk: "medium",
      radius: 1500,
      farmers: 78,
      center: { lat: 23.27, lng: 77.42 },
      color: "#f59e0b"
    },
    {
      id: "3",
      name: "Zone C - Outbreak Area",
      nameHi: "क्षेत्र सी - प्रकोप क्षेत्र",
      risk: "high",
      radius: 800,
      farmers: 23,
      center: { lat: 23.25, lng: 77.40 },
      color: "#ef4444"
    },
  ]);

  const [selectedZone, setSelectedZone] = useState(null);
  const [isCreatingZone, setIsCreatingZone] = useState(false);
  const [newZoneName, setNewZoneName] = useState("");
  const [newZoneRadius, setNewZoneRadius] = useState([1000]);
  const [newZoneRisk, setNewZoneRisk] = useState("medium");
  const [mapCenter, setMapCenter] = useState({ lat: 23.2599, lng: 77.4126 });
  const [zoomLevel, setZoomLevel] = useState(12);
  const [selectedChannels, setSelectedChannels] = useState(["SMS", "Push"]);
  const mapRef = useRef(null);

  const radiusPresets = [500, 1000, 2000, 5000];

  const toggleChannel = (channel) => {
    setSelectedChannels(prev => 
      prev.includes(channel) 
        ? prev.filter(c => c !== channel)
        : [...prev, channel]
    );
  };

  const createNewZone = () => {
    const newZone = {
      id: String(zones.length + 1),
      name: newZoneName || `Zone ${String.fromCharCode(65 + zones.length)}`,
      nameHi: `क्षेत्र ${String.fromCharCode(65 + zones.length)}`,
      risk: newZoneRisk,
      radius: newZoneRadius[0],
      farmers: Math.floor(Math.random() * 100) + 20,
      center: mapCenter,
      color: newZoneRisk === "low" ? "#10b981" : newZoneRisk === "medium" ? "#f59e0b" : "#ef4444"
    };
    setZones([...zones, newZone]);
    setIsCreatingZone(false);
    setNewZoneName("");
    setNewZoneRadius([1000]);
  };

  const deleteZone = (zoneId) => {
    setZones(zones.filter(z => z.id !== zoneId));
    setSelectedZone(null);
  };

  const getRiskColor = (risk) => {
    switch(risk) {
      case "low": return "bg-green-500";
      case "medium": return "bg-yellow-500";
      case "high": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getRiskBorderColor = (risk) => {
    switch(risk) {
      case "low": return "border-green-500";
      case "medium": return "border-yellow-500";
      case "high": return "border-red-500";
      default: return "border-gray-500";
    }
  };

  const sendAlert = (zone) => {
    alert(`Alert sent to ${zone.farmers} farmers in ${zone.name} via ${selectedChannels.join(", ")}`);
  };

  const stats = [
    { 
      label: "Total Zones", 
      labelHi: "कुल क्षेत्र",
      value: zones.length, 
      icon: MapPinned, 
      color: "text-blue-500" 
    },
    { 
      label: "Protected Farmers", 
      labelHi: "सुरक्षित किसान",
      value: zones.reduce((sum, z) => sum + z.farmers, 0), 
      icon: Users, 
      color: "text-green-500" 
    },
    { 
      label: "High Risk Zones", 
      labelHi: "उच्च जोखिम क्षेत्र",
      value: zones.filter(z => z.risk === "high").length, 
      icon: AlertCircle, 
      color: "text-red-500" 
    },
    { 
      label: "Active Alerts", 
      labelHi: "सक्रिय अलर्ट",
      value: 5, 
      icon: Activity, 
      color: "text-orange-500" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-blue-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Geo-Fencing Control
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Create protection zones and notify farmers instantly
          </p>
          <p className="text-md text-muted-foreground">
            सुरक्षा क्षेत्र बनाएं और किसानों को तुरंत सूचित करें
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-4 border-2 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.labelHi}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-0 h-[700px] overflow-hidden border-2 shadow-2xl">
              <ExampleNearbyZonesMap />
            </Card>
          </div>

          <div className="space-y-6">
            {isCreatingZone ? (
              <Card className="p-6 border-2 shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Plus className="h-6 w-6 text-primary" />
                  Create New Zone
                </h3>
                <p className="text-sm text-muted-foreground mb-6">नया क्षेत्र बनाएं</p>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Zone Name / क्षेत्र का नाम
                    </label>
                    <Input
                      placeholder="e.g., Village Center"
                      value={newZoneName}
                      onChange={(e) => setNewZoneName(e.target.value)}
                      className="border-2"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Radius / त्रिज्या: {newZoneRadius[0]}m
                    </label>
                    <Slider
                      value={newZoneRadius}
                      onValueChange={setNewZoneRadius}
                      min={100}
                      max={10000}
                      step={100}
                      className="mb-3"
                    />
                    <div className="grid grid-cols-4 gap-2">
                      {radiusPresets.map((preset) => (
                        <Button
                          key={preset}
                          variant="outline"
                          size="sm"
                          onClick={() => setNewZoneRadius([preset])}
                          className={`text-xs border-2 ${newZoneRadius[0] === preset ? 'border-primary bg-primary/10' : ''}`}
                        >
                          {preset}m
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Risk Level / जोखिम स्तर
                    </label>
                    <Select value={newZoneRisk} onValueChange={setNewZoneRisk}>
                      <SelectTrigger className="border-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">🟢 Low / कम</SelectItem>
                        <SelectItem value="medium">🟡 Medium / मध्यम</SelectItem>
                        <SelectItem value="high">🔴 High / उच्च</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Notify Via / सूचना माध्यम
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["SMS", "IVR Voice", "Push", "WhatsApp"].map((channel) => (
                        <label
                          key={channel}
                          className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedChannels.includes(channel)
                              ? 'border-primary bg-primary/10'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="rounded"
                            checked={selectedChannels.includes(channel)}
                            onChange={() => toggleChannel(channel)}
                          />
                          <span className="text-sm font-medium">{channel}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-bold">Estimated Impact</span>
                    </div>
                    <div className="text-3xl font-black text-blue-600">
                      ~{Math.floor((newZoneRadius[0] / 10) * 1.5)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      farmers within {newZoneRadius[0]}m radius
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="default" 
                      className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                      onClick={createNewZone}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Zone
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsCreatingZone(false)}
                      className="border-2"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            ) : selectedZone ? (
              <Card className="p-6 border-2 shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{selectedZone.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedZone.nameHi}</p>
                  </div>
                  <Badge className={`${getRiskColor(selectedZone.risk)} text-white`}>
                    {selectedZone.risk.toUpperCase()}
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border-2 border-blue-200">
                    <div className="flex items-center gap-3">
                      <Radio className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-semibold">Radius</span>
                    </div>
                    <span className="font-bold text-lg">{selectedZone.radius}m</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border-2 border-green-200">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-semibold">Protected Farmers</span>
                    </div>
                    <span className="font-bold text-lg">{selectedZone.farmers}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border-2 border-purple-200">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-semibold">Alert Status</span>
                    </div>
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      <Activity className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant="default" 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    onClick={() => sendAlert(selectedZone)}
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Send Emergency Alert / आपातकालीन अलर्ट भेजें
                  </Button>

                  <Button variant="outline" className="w-full border-2">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    View SOPs / एसओपी देखें
                  </Button>

                  <Button 
                    variant="destructive" 
                    className="w-full"
                    onClick={() => deleteZone(selectedZone.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Zone / क्षेत्र हटाएं
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setSelectedZone(null)}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Close
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-6 border-2 shadow-xl">
                <h3 className="text-xl font-bold mb-2">Active Zones</h3>
                <p className="text-sm text-muted-foreground mb-4">सक्रिय क्षेत्र</p>
                <div className="space-y-3">
                  {zones.map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all text-left bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="font-bold text-sm block">{zone.name}</span>
                          <span className="text-xs text-muted-foreground">{zone.nameHi}</span>
                        </div>
                        <Badge
                          className={`${getRiskColor(zone.risk)} text-white`}
                        >
                          {zone.risk}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Radio className="h-3 w-3" />
                          {zone.radius}m
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {zone.farmers} farmers
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}