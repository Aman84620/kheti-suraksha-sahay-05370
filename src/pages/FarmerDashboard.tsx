import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Download,
  Bell,
  Settings,
  Eye,
  Phone,
  Zap,
  Target,
  Thermometer,
  Droplets,
  Wind,
  Sun,
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const FarmerDashboard = () => {
  const [language, setLanguage] = useState("en");
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [liveData, setLiveData] = useState({
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    rainfall: 0,
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate live weather data updates
    const weatherInterval = setInterval(() => {
      setLiveData(prev => ({
        temperature: Math.round(prev.temperature + (Math.random() - 0.5) * 2),
        humidity: Math.round(Math.max(40, Math.min(90, prev.humidity + (Math.random() - 0.5) * 5))),
        windSpeed: Math.round(Math.max(5, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 3))),
        rainfall: Math.random() > 0.9 ? Math.random() * 5 : 0,
      }));
    }, 5000);

    return () => clearInterval(weatherInterval);
  }, []);

  const content = {
    en: {
      title: "Farmer Dashboard",
      subtitle: "Real-time Farm Monitoring & Analytics",
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
      weatherConditions: "Live Weather",
      diseaseOutbreaks: "Disease Alerts",
    },
    hi: {
      title: "किसान डैशबोर्ड",
      subtitle: "रियल-टाइम फार्म निगरानी और विश्लेषण",
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
      weatherConditions: "लाइव मौसम",
      diseaseOutbreaks: "रोग अलर्ट",
    }
  };

  const t = content[language];

  const stats = [
    {
      title: t.riskScore,
      value: "35",
      subValue: "/100",
      change: "-12%",
      trend: "down",
      icon: Shield,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: language === "en" ? "Excellent" : "उत्कृष्ट"
    },
    {
      title: t.totalAlerts,
      value: "3",
      subValue: "active",
      change: "+2",
      trend: "up",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: language === "en" ? "Review needed" : "समीक्षा आवश्यक"
    },
    {
      title: t.farmsProtected,
      value: "24",
      subValue: "farms",
      change: "+5",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: language === "en" ? "Growing network" : "बढ़ता नेटवर्क"
    },
    {
      title: t.complianceRate,
      value: "92",
      subValue: "%",
      change: "+3%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: language === "en" ? "On track" : "सही दिशा में"
    }
  ];

  const recentActivities = [
    {
      action: language === "en" ? "Risk assessment completed for Wheat Field #2" : "गेहूं खेत #2 के लिए जोखिम मूल्यांकन पूरा",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      action: language === "en" ? "High-risk disease alert: Rust detected 5km away" : "उच्च जोखिम रोग अलर्ट: 5 किमी दूर रस्ट का पता चला",
      time: "5 hours ago",
      icon: AlertTriangle,
      color: "text-orange-600",
    },
    {
      action: language === "en" ? "Training: Pest Management Module completed" : "प्रशिक्षण: कीट प्रबंधन मॉड्यूल पूरा",
      time: "1 day ago",
      icon: Award,
      color: "text-blue-600",
    },
    {
      action: language === "en" ? "Shared best practices with 12 farmers nearby" : "आस-पास के 12 किसानों के साथ सर्वोत्तम अभ्यास साझा किए",
      time: "2 days ago",
      icon: Users,
      color: "text-purple-600",
    }
  ];

  const riskTrendData = [
    { week: "W1", score: 45, incidents: 8 },
    { week: "W2", score: 42, incidents: 6 },
    { week: "W3", score: 38, incidents: 4 },
    { week: "W4", score: 35, incidents: 3 }
  ];

  const diseaseData = [
    { name: language === "en" ? "Wheat Rust" : "गेहूं की रस्ट", value: 35, color: "#ef4444" },
    { name: language === "en" ? "Blight" : "ब्लाइट", value: 25, color: "#f97316" },
    { name: language === "en" ? "Mildew" : "मिल्ड्यू", value: 20, color: "#eab308" },
    { name: language === "en" ? "Others" : "अन्य", value: 20, color: "#22c55e" }
  ];

  const quickActions = [
    {
      icon: Target,
      label: language === "en" ? "Run Risk Assessment" : "जोखिम मूल्यांकन करें",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Eye,
      label: language === "en" ? "View My Farm" : "मेरा फार्म देखें",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Phone,
      label: language === "en" ? "Call Expert (24/7)" : "विशेषज्ञ को कॉल करें",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      icon: Download,
      label: language === "en" ? "Export Report" : "रिपोर्ट डाउनलोड करें",
      color: "bg-purple-500 hover:bg-purple-600",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500 animate-pulse" />
              {t.subtitle}
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="hover:scale-105 transition-transform"
            >
              {language === "en" ? "हिं" : "EN"}
            </Button>
            <Button variant="outline" className="hover:scale-105 transition-transform">
              <Bell className="h-4 w-4 mr-2" />
              3
            </Button>
            <Button variant="outline" className="hover:scale-105 transition-transform">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Live Weather Banner */}
        <Card className={`mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Sun className="h-6 w-6" />
                <span className="font-bold text-lg">{t.weatherConditions}</span>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{liveData.temperature}°C</div>
                    <div className="text-xs opacity-80">Temperature</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{liveData.humidity}%</div>
                    <div className="text-xs opacity-80">Humidity</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{liveData.windSpeed} km/h</div>
                    <div className="text-xs opacity-80">Wind Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              className={`transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-2 ${
                activeCard === idx ? 'border-blue-500 scale-105 shadow-blue-200' : 'border-transparent'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${idx * 150}ms`
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-xl ${stat.bgColor} transition-all duration-300 ${activeCard === idx ? 'scale-110 rotate-6' : ''}`}>
                    <stat.icon className={`h-7 w-7 ${stat.color}`} />
                  </div>
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="flex items-center gap-1">
                    {stat.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 mb-2">{stat.title}</p>
                <div className="flex items-baseline gap-1">
                  <p className={`text-4xl font-bold transition-all duration-300 ${activeCard === idx ? 'scale-110' : ''}`}>
                    {stat.value}
                  </p>
                  <p className="text-xl text-slate-500">{stat.subValue}</p>
                </div>
                <p className="text-xs text-slate-500 mt-1">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 border-2 border-blue-100">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              {t.quickActions}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, idx) => (
                <Button
                  key={idx}
                  className={`${action.color} text-white h-auto py-4 flex flex-col items-center gap-2 transition-all hover:scale-105`}
                >
                  <action.icon className="h-6 w-6" />
                  <span className="text-sm text-center">{action.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Biosecurity Score */}
          <Card className="border-2 border-emerald-100">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-600 animate-pulse" />
                  {t.biosecurityScore}
                </h3>
                <Badge className="bg-emerald-100 text-emerald-700">Excellent</Badge>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-40 h-40">
                  <svg className="transform -rotate-90 w-40 h-40">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="transparent"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#10b981"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 70}`}
                      strokeDashoffset={`${2 * Math.PI * 70 * (1 - 0.85)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-emerald-600">85</span>
                    <span className="text-sm text-slate-500">/ 100</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: language === "en" ? "Prevention" : "रोकथाम", value: 90, color: "bg-emerald-500" },
                  { label: language === "en" ? "Monitoring" : "निगरानी", value: 82, color: "bg-blue-500" },
                  { label: language === "en" ? "Response" : "प्रतिक्रिया", value: 78, color: "bg-purple-500" }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{item.label}</span>
                      <span className="font-bold">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-1000`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Training Progress */}
          <Card className="border-2 border-blue-100">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sprout className="h-5 w-5 text-blue-600 animate-pulse" />
                {t.trainingProgress}
              </h3>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-blue-600">12</span>
                  <span className="text-2xl text-slate-400">/</span>
                  <span className="text-3xl text-slate-600">20</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  {language === "en" ? "Modules Completed" : "मॉड्यूल पूर्ण"}
                </p>
              </div>

              <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000" style={{ width: '60%' }} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <Award className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-xs text-slate-600">{language === "en" ? "Badges Earned" : "बैज अर्जित"}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <Activity className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-2xl font-bold">450</p>
                  <p className="text-xs text-slate-600">{language === "en" ? "Total Points" : "कुल अंक"}</p>
                </div>
              </div>

              <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                {language === "en" ? "Continue Learning" : "सीखना जारी रखें"}
              </Button>
            </div>
          </Card>

          {/* Community Rank */}
          <Card className="border-2 border-purple-100">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600 animate-pulse" />
                {t.communityRank}
              </h3>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white text-5xl font-bold mb-4 shadow-2xl">
                  #24
                </div>
                <p className="text-sm text-slate-500">
                  {language === "en" ? "Out of 2,500 farmers in your region" : "आपके क्षेत्र में 2,500 किसानों में से"}
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: language === "en" ? "District Rank" : "जिला रैंक", value: "#8", icon: MapPin, color: "text-blue-600" },
                  { label: language === "en" ? "State Rank" : "राज्य रैंक", value: "#156", icon: Target, color: "text-purple-600" },
                  { label: language === "en" ? "National Rank" : "राष्ट्रीय रैंक", value: "#892", icon: Award, color: "text-orange-600" }
                ].map((rank, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-2">
                      <rank.icon className={`h-4 w-4 ${rank.color}`} />
                      <span className="text-sm font-medium">{rank.label}</span>
                    </div>
                    <Badge variant="secondary" className="font-bold">{rank.value}</Badge>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                {language === "en" ? "View Leaderboard" : "लीडरबोर्ड देखें"}
              </Button>
            </div>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Risk Trends Chart */}
          <Card className="border-2 border-slate-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  {t.riskTrends}
                </h3>
                <Badge className="bg-green-100 text-green-700">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -22% {language === "en" ? "vs last month" : "पिछले महीने की तुलना में"}
                </Badge>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={riskTrendData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    labelStyle={{ fontWeight: 'bold' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorScore)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Disease Distribution */}
          <Card className="border-2 border-slate-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  {t.diseaseOutbreaks}
                </h3>
                <Badge variant="secondary">{language === "en" ? "Last 30 Days" : "पिछले 30 दिन"}</Badge>
              </div>

              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={diseaseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {diseaseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                {diseaseData.map((disease, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: disease.color }} />
                    <span className="text-slate-600">{disease.name}</span>
                    <span className="font-bold ml-auto">{disease.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-2 border-slate-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600 animate-pulse" />
                {t.recentActivity}
              </h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 pb-3 border-b last:border-0 transition-all duration-300 hover:bg-slate-50 p-2 rounded-lg cursor-pointer"
                >
                  <div className="p-2 rounded-full bg-slate-100">
                    <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FarmerDashboard;