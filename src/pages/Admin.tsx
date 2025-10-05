import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Users,
  AlertTriangle,
  TrendingDown,
  Activity,
  FileText,
  Download,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Admin() {
  const districtStats = [
    { district: "Indore", zones: 12, farmers: 1245, highRisk: 2, alerts: 45 },
    { district: "Bhopal", zones: 8, farmers: 876, highRisk: 1, alerts: 23 },
    { district: "Jabalpur", zones: 15, farmers: 1567, highRisk: 3, alerts: 67 },
    { district: "Gwalior", zones: 10, farmers: 1089, highRisk: 1, alerts: 34 },
  ];

  const recentAlerts = [
    {
      id: 1,
      time: "2 hours ago",
      district: "Indore",
      type: "High Risk",
      message: "Unusual mortality pattern detected in Zone A-3",
      status: "pending",
    },
    {
      id: 2,
      time: "5 hours ago",
      district: "Jabalpur",
      type: "Medium Risk",
      message: "Symptoms reported in 12 farms, vaccination recommended",
      status: "in-progress",
    },
    {
      id: 3,
      time: "1 day ago",
      district: "Bhopal",
      type: "Resolved",
      message: "Outbreak contained, all affected farms under quarantine",
      status: "resolved",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Admin Dashboard / प्रशासनिक डैशबोर्ड
          </h1>
          <p className="text-muted-foreground">
            Monitor biosecurity status across districts and manage alerts
          </p>
          <p className="text-sm text-muted-foreground">
            जिलों में जैव सुरक्षा स्थिति की निगरानी करें और अलर्ट प्रबंधित करें
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">45</div>
                <div className="text-xs text-muted-foreground">Active Zones</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">4,777</div>
                <div className="text-xs text-muted-foreground">Protected Farmers</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-lg bg-risk-high/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-risk-high" />
              </div>
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-xs text-muted-foreground">High Risk Zones</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">₹2.5Cr</div>
                <div className="text-xs text-muted-foreground">Loss Prevented</div>
              </div>
            </div>
          </Card>
        </div>

        {/* District Heatmap & Alerts */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Heatmap */}
          <div className="lg:col-span-2">
            <Card className="p-6 animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">District Heatmap / जिला हीटमैप</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Activity className="h-4 w-4 mr-2" />
                    Live View
                  </Button>
                </div>
              </div>

              {/* Mock Heatmap */}
              <div className="h-96 bg-muted/30 rounded-lg relative overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto text-primary mb-3" />
                    <p className="text-muted-foreground">
                      Interactive district heatmap with risk indicators
                    </p>
                  </div>
                </div>

                {/* District markers */}
                {districtStats.map((stat, idx) => (
                  <div
                    key={stat.district}
                    className={`absolute w-24 h-24 rounded-full cursor-pointer transition-all hover:scale-110 ${
                      stat.highRisk > 2
                        ? "bg-risk-high/30 border-4 border-risk-high"
                        : stat.highRisk > 0
                        ? "bg-risk-medium/30 border-4 border-risk-medium"
                        : "bg-risk-low/30 border-4 border-risk-low"
                    }`}
                    style={{
                      top: `${20 + idx * 80}px`,
                      left: `${100 + idx * 120}px`,
                    }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background px-2 py-1 rounded shadow-md text-xs font-semibold whitespace-nowrap">
                      {stat.district}
                    </div>
                  </div>
                ))}
              </div>

              {/* District Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-sm font-semibold">District</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold">Zones</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold">Farmers</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold">High Risk</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold">Alerts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {districtStats.map((stat) => (
                      <tr key={stat.district} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium">{stat.district}</td>
                        <td className="text-center py-3 px-2">{stat.zones}</td>
                        <td className="text-center py-3 px-2">{stat.farmers}</td>
                        <td className="text-center py-3 px-2">
                          <Badge
                            variant="outline"
                            className={
                              stat.highRisk > 0
                                ? "border-risk-high text-risk-high"
                                : "border-risk-low text-risk-low"
                            }
                          >
                            {stat.highRisk}
                          </Badge>
                        </td>
                        <td className="text-center py-3 px-2">{stat.alerts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Recent Alerts */}
          <div>
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "100ms" }}>
              <h2 className="text-xl font-bold mb-6">Recent Alerts / हाल के अलर्ट</h2>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <Card key={alert.id} className="p-4 border-l-4 border-l-primary">
                    <div className="flex items-start justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={
                          alert.type === "High Risk"
                            ? "border-risk-high text-risk-high"
                            : alert.type === "Medium Risk"
                            ? "border-risk-medium text-risk-medium"
                            : "border-risk-low text-risk-low"
                        }
                      >
                        {alert.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    <div className="font-semibold text-sm mb-1">{alert.district}</div>
                    <p className="text-sm text-muted-foreground mb-3">{alert.message}</p>
                    <div className="flex items-center gap-2">
                      {alert.status === "pending" && (
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          Pending
                        </Badge>
                      )}
                      {alert.status === "in-progress" && (
                        <Badge variant="outline" className="text-xs border-accent text-accent">
                          <Activity className="h-3 w-3 mr-1" />
                          In Progress
                        </Badge>
                      )}
                      {alert.status === "resolved" && (
                        <Badge variant="outline" className="text-xs border-risk-low text-risk-low">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Resolved
                        </Badge>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                View All Alerts / सभी अलर्ट देखें
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 mt-6 animate-scale-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-bold mb-4">Admin Actions</h3>
              <div className="space-y-2">
                <Button variant="default" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Approve SOP
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  Audit Logs
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
