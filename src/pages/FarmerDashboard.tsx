import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  MapPin, 
  Award,
  Activity,
  Shield,
  Sprout,
  BarChart3,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FarmerDashboard = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const content = {
    en: {
      title: "Farmer Dashboard",
      subtitle: "Your Farm Performance Overview",
      riskScore: "Current Risk Score",
      totalAlerts: "Active Alerts",
      farmsProtected: "Farms in Network",
      complianceRate: "Compliance Rate",
      recentActivity: "Recent Activity",
      riskTrends: "Risk Trends (30 Days)",
      biosecurityScore: "Biosecurity Score",
      trainingProgress: "Training Progress",
      communityRank: "Community Rank",
      quickActions: "Quick Actions",
      viewDetails: "View Details",
      lowRisk: "Low Risk",
      mediumRisk: "Medium Risk",
      highRisk: "High Risk",
      completed: "Completed",
      pending: "Pending",
      thisMonth: "This Month",
      vsLastMonth: "vs last month",
    },
    hi: {
      title: "किसान डैशबोर्ड",
      subtitle: "आपके फार्म के प्रदर्शन का सारांश",
      riskScore: "वर्तमान जोखिम स्कोर",
      totalAlerts: "सक्रिय अलर्ट",
      farmsProtected: "नेटवर्क में फार्म",
      complianceRate: "अनुपालन दर",
      recentActivity: "हाल की गतिविधि",
      riskTrends: "जोखिम रुझान (30 दिन)",
      biosecurityScore: "जैव सुरक्षा स्कोर",
      trainingProgress: "प्रशिक्षण प्रगति",
      communityRank: "समुदाय रैंक",
      quickActions: "त्वरित क्रियाएं",
      viewDetails: "विवरण देखें",
      lowRisk: "कम जोखिम",
      mediumRisk: "मध्यम जोखिम",
      highRisk: "उच्च जोखिम",
      completed: "पूर्ण",
      pending: "लंबित",
      thisMonth: "इस महीने",
      vsLastMonth: "पिछले महीने की तुलना में",
    }
  };

  const t = content[language];

  const stats = [
    {
      title: t.riskScore,
      value: "35",
      change: "-12%",
      trend: "down",
      icon: Shield,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: t.totalAlerts,
      value: "3",
      change: "+2",
      trend: "up",
      icon: AlertTriangle,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      title: t.farmsProtected,
      value: "24",
      change: "+5",
      trend: "up",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: t.complianceRate,
      value: "92%",
      change: "+3%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  const recentActivities = [
    { 
      action: language === "en" ? "Risk assessment completed" : "जोखिम मूल्यांकन पूरा",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-600 dark:text-green-400"
    },
    { 
      action: language === "en" ? "High-risk alert received" : "उच्च जोखिम अलर्ट प्राप्त",
      time: "5 hours ago",
      icon: AlertTriangle,
      color: "text-orange-600 dark:text-orange-400"
    },
    { 
      action: language === "en" ? "Training module completed" : "प्रशिक्षण मॉड्यूल पूरा",
      time: "1 day ago",
      icon: Award,
      color: "text-primary"
    },
    { 
      action: language === "en" ? "Community post shared" : "समुदाय पोस्ट साझा",
      time: "2 days ago",
      icon: Users,
      color: "text-secondary"
    }
  ];

  const riskData = [
    { month: "Week 1", score: 45 },
    { month: "Week 2", score: 42 },
    { month: "Week 3", score: 38 },
    { month: "Week 4", score: 35 }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-lg text-muted-foreground">{t.subtitle}</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
          >
            {language === "en" ? "हिं" : "EN"}
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="flex items-center gap-1">
                    {stat.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Biosecurity Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {t.biosecurityScore}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.85)}`}
                        className="text-primary"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">85%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{language === "en" ? "Prevention" : "रोकथाम"}</span>
                    <span className="font-medium">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>{language === "en" ? "Monitoring" : "निगरानी"}</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>{language === "en" ? "Response" : "प्रतिक्रिया"}</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Training Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sprout className="h-5 w-5" />
                {t.trainingProgress}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">12/20</p>
                  <p className="text-sm text-muted-foreground">{language === "en" ? "Modules Completed" : "मॉड्यूल पूर्ण"}</p>
                </div>
                <Progress value={60} className="h-3" />
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">8</p>
                    <p className="text-xs text-muted-foreground">{language === "en" ? "Badges" : "बैज"}</p>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <Activity className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <p className="text-sm font-medium">450</p>
                    <p className="text-xs text-muted-foreground">{language === "en" ? "Points" : "अंक"}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Rank */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                {t.communityRank}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-hero text-primary-foreground text-3xl font-bold mb-2">
                    #24
                  </div>
                  <p className="text-sm text-muted-foreground">{language === "en" ? "Out of 2,500 farmers" : "2,500 किसानों में से"}</p>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">{language === "en" ? "District Rank" : "जिला रैंक"}</span>
                    <Badge variant="secondary">#8</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">{language === "en" ? "State Rank" : "राज्य रैंक"}</span>
                    <Badge variant="secondary">#156</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Risk Trends */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                {t.recentActivity}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                    <activity.icon className={`h-5 w-5 mt-0.5 ${activity.color}`} />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                {t.riskTrends}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskData.map((data, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{data.month}</span>
                      <span className="font-medium">{data.score}</span>
                    </div>
                    <Progress 
                      value={100 - data.score} 
                      className="h-3"
                    />
                  </div>
                ))}
                <div className="pt-4 text-center">
                  <Badge className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    {language === "en" ? "Risk Decreasing" : "जोखिम कम हो रहा है"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;