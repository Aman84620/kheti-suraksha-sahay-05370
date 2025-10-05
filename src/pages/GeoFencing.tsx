import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

interface GeoZone {
  id: string;
  name: string;
  risk: "low" | "medium" | "high";
  radius: number;
  farmers: number;
  center: { lat: number; lng: number };
}

export default function GeoFencing() {
  const [zones, setZones] = useState<GeoZone[]>([
    {
      id: "1",
      name: "Zone A - Village Center",
      risk: "low",
      radius: 1000,
      farmers: 45,
      center: { lat: 28.6139, lng: 77.209 },
    },
    {
      id: "2",
      name: "Zone B - North Farms",
      risk: "medium",
      radius: 1500,
      farmers: 78,
      center: { lat: 28.62, lng: 77.22 },
    },
    {
      id: "3",
      name: "Zone C - Outbreak Area",
      risk: "high",
      radius: 500,
      farmers: 23,
      center: { lat: 28.61, lng: 77.19 },
    },
  ]);

  const [selectedZone, setSelectedZone] = useState<GeoZone | null>(null);
  const [isCreatingZone, setIsCreatingZone] = useState(false);
  const [newZoneRadius, setNewZoneRadius] = useState([1000]);
  const [newZoneRisk, setNewZoneRisk] = useState<"low" | "medium" | "high">("medium");

  const radiusPresets = [500, 1000, 2000, 5000];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Geo-Fencing / भू-बाड़ प्रणाली
          </h1>
          <p className="text-muted-foreground">
            Create protection zones and notify farmers in affected areas
          </p>
          <p className="text-sm text-muted-foreground">
            सुरक्षा क्षेत्र बनाएं और प्रभावित क्षेत्रों में किसानों को सूचित करें
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="p-6 h-[600px] relative overflow-hidden animate-scale-in">
              {/* Mock Map */}
              <div className="absolute inset-0 bg-muted/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 mx-auto text-primary" />
                    <div className="text-lg font-semibold">Interactive Map</div>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      In production, this would display an interactive map with geo-zones,
                      cluster markers, and drawing tools
                    </p>
                  </div>
                </div>

                {/* Zone indicators */}
                {zones.map((zone, idx) => (
                  <div
                    key={zone.id}
                    className={`absolute rounded-full border-4 cursor-pointer transition-all hover:scale-110 ${
                      zone.risk === "low"
                        ? "border-risk-low bg-risk-low/20"
                        : zone.risk === "medium"
                        ? "border-risk-medium bg-risk-medium/20"
                        : "border-risk-high bg-risk-high/20"
                    }`}
                    style={{
                      width: `${zone.radius / 10}px`,
                      height: `${zone.radius / 10}px`,
                      top: `${20 + idx * 180}px`,
                      left: `${100 + idx * 150}px`,
                    }}
                    onClick={() => setSelectedZone(zone)}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background px-2 py-1 rounded shadow-md text-xs font-semibold whitespace-nowrap">
                      {zone.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 left-4 space-y-2 z-10">
                <Button
                  variant={isCreatingZone ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsCreatingZone(!isCreatingZone)}
                  className="shadow-lg"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Zone / क्षेत्र बनाएं
                </Button>
                <Button variant="outline" size="sm" className="shadow-lg w-full">
                  <Layers className="h-4 w-4 mr-2" />
                  Layers
                </Button>
              </div>

              {/* Zone Legend */}
              <div className="absolute bottom-4 right-4 bg-card p-3 rounded-lg shadow-lg border-2 border-border z-10">
                <div className="text-xs font-semibold mb-2">Risk Levels</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-risk-low border-2 border-risk-low" />
                    <span>Low / कम</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-risk-medium border-2 border-risk-medium" />
                    <span>Medium / मध्यम</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-risk-high border-2 border-risk-high" />
                    <span>High / उच्च</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            {isCreatingZone ? (
              <Card className="p-6 animate-slide-in">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Create New Zone / नया क्षेत्र बनाएं
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Radius / त्रिज्या
                    </label>
                    <Slider
                      value={newZoneRadius}
                      onValueChange={setNewZoneRadius}
                      min={100}
                      max={10000}
                      step={100}
                      className="mb-2"
                    />
                    <div className="text-sm text-muted-foreground text-center">
                      {newZoneRadius[0]}m
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-3">
                      {radiusPresets.map((preset) => (
                        <Button
                          key={preset}
                          variant="outline"
                          size="sm"
                          onClick={() => setNewZoneRadius([preset])}
                          className="text-xs"
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
                    <Select value={newZoneRisk} onValueChange={(v: any) => setNewZoneRisk(v)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low / कम</SelectItem>
                        <SelectItem value="medium">Medium / मध्यम</SelectItem>
                        <SelectItem value="high">High / उच्च</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Notify Via / के माध्यम से सूचित करें
                    </label>
                    <div className="space-y-2">
                      {["SMS", "IVR Voice", "Push", "WhatsApp"].map((channel) => (
                        <label
                          key={channel}
                          className="flex items-center gap-2 p-2 rounded border hover:border-primary cursor-pointer"
                        >
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span className="text-sm">{channel}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">Affected Farmers</span>
                    </div>
                    <div className="text-2xl font-bold">~125</div>
                    <div className="text-xs text-muted-foreground">
                      within {newZoneRadius[0]}m radius
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Save Zone
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsCreatingZone(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            ) : selectedZone ? (
              <Card className="p-6 animate-scale-in">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold">{selectedZone.name}</h3>
                  <Badge
                    className={
                      selectedZone.risk === "low"
                        ? "bg-risk-low"
                        : selectedZone.risk === "medium"
                        ? "bg-risk-medium"
                        : "bg-risk-high"
                    }
                  >
                    {selectedZone.risk.toUpperCase()}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Radio className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Radius</span>
                    </div>
                    <span className="font-semibold">{selectedZone.radius}m</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Farmers</span>
                    </div>
                    <span className="font-semibold">{selectedZone.farmers}</span>
                  </div>

                  <Button variant="default" className="w-full">
                    <Bell className="h-4 w-4 mr-2" />
                    Send Alert / अलर्ट भेजें
                  </Button>

                  <Button variant="outline" className="w-full">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    View SOPs / एसओपी देखें
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => setSelectedZone(null)}
                  >
                    Close
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-6 animate-fade-in">
                <h3 className="text-lg font-bold mb-4">Active Zones / सक्रिय क्षेत्र</h3>
                <div className="space-y-3">
                  {zones.map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className="w-full p-4 rounded-lg border-2 border-border hover:border-primary transition-colors text-left"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-semibold text-sm">{zone.name}</span>
                        <Badge
                          variant="outline"
                          className={
                            zone.risk === "low"
                              ? "border-risk-low text-risk-low"
                              : zone.risk === "medium"
                              ? "border-risk-medium text-risk-medium"
                              : "border-risk-high text-risk-high"
                          }
                        >
                          {zone.risk}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{zone.radius}m</span>
                        <span>•</span>
                        <span>{zone.farmers} farmers</span>
                      </div>
                    </button>
                  ))}
                </div>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="p-6">
              <h4 className="font-semibold mb-3 text-sm">Quick Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Zones</span>
                  <span className="font-semibold">{zones.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Protected Farmers</span>
                  <span className="font-semibold">
                    {zones.reduce((sum, z) => sum + z.farmers, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">High Risk Zones</span>
                  <span className="font-semibold text-risk-high">
                    {zones.filter((z) => z.risk === "high").length}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
