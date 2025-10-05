import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Award, FileText, Users, Phone, MapPin, Calendar, Camera } from "lucide-react";

const FarmerProfile = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const content = {
    en: {
      title: "Farmer Profile",
      overview: "Overview",
      alerts: "My Alerts",
      assessments: "Risk Assessments",
      community: "Community",
      contact: "Contact Information",
      farmDetails: "Farm Details",
      badges: "Achievements",
      recentActivity: "Recent Activity",
      viewAll: "View All",
      noAlerts: "No active alerts",
      phone: "Phone",
      location: "Location",
      language: "Preferred Language",
      joined: "Member Since",
      farmType: "Farm Type",
      farmSize: "Farm Size",
      lastAssessment: "Last Risk Assessment"
    },
    hi: {
      title: "किसान प्रोफ़ाइल",
      overview: "सारांश",
      alerts: "मेरी अलर्ट",
      assessments: "जोखिम मूल्यांकन",
      community: "समुदाय",
      contact: "संपर्क जानकारी",
      farmDetails: "खेत विवरण",
      badges: "उपलब्धियां",
      recentActivity: "हाल की गतिविधि",
      viewAll: "सभी देखें",
      noAlerts: "कोई सक्रिय अलर्ट नहीं",
      phone: "फ़ोन",
      location: "स्थान",
      language: "पसंदीदा भाषा",
      joined: "सदस्य बने",
      farmType: "खेत का प्रकार",
      farmSize: "खेत का आकार",
      lastAssessment: "अंतिम जोखिम मूल्यांकन"
    }
  };

  const t = content[language];

  const mockProfile = {
    name: "राज कुमार / Raj Kumar",
    phone: "+91 98765 43210",
    location: "Barabanki, Uttar Pradesh",
    language: "Hindi / हिंदी",
    joined: "March 2024",
    farmType: "Mixed (Poultry + Pond)",
    farmSize: "2.5 acres",
    lastAssessment: "2 days ago"
  };

  const achievements = [
    { icon: Award, label: language === "en" ? "Early Adopter" : "शुरुआती अपनाने वाला", color: "bg-primary/10 text-primary" },
    { icon: Bell, label: language === "en" ? "Alert Champion" : "अलर्ट चैंपियन", color: "bg-accent/10 text-accent" },
    { icon: Users, label: language === "en" ? "Community Helper" : "समुदाय सहायक", color: "bg-secondary/10 text-secondary" }
  ];

  const recentActivities = [
    { type: "assessment", text: language === "en" ? "Completed risk assessment" : "जोखिम मूल्यांकन पूरा किया", date: "2 days ago" },
    { type: "alert", text: language === "en" ? "Received high-risk alert" : "उच्च जोखिम अलर्ट प्राप्त", date: "5 days ago" },
    { type: "community", text: language === "en" ? "Helped neighbor with biosecurity" : "पड़ोसी को जैव सुरक्षा में मदद की", date: "1 week ago" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-lg text-muted-foreground">{mockProfile.name}</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
          >
            {language === "en" ? "हिं" : "EN"}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {t.contact}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t.phone}</p>
                  <p className="font-medium">{mockProfile.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                  <p className="font-medium flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {mockProfile.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.language}</p>
                  <p className="font-medium">{mockProfile.language}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.joined}</p>
                  <p className="font-medium flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {mockProfile.joined}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.farmDetails}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t.farmType}</p>
                  <p className="font-medium">{mockProfile.farmType}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.farmSize}</p>
                  <p className="font-medium">{mockProfile.farmSize}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.lastAssessment}</p>
                  <p className="font-medium">{mockProfile.lastAssessment}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {t.badges}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, i) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={i} className={`p-3 rounded-lg ${achievement.color} flex items-center gap-2`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{achievement.label}</span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Tabs */}
          <div className="md:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">{t.overview}</TabsTrigger>
                <TabsTrigger value="alerts">{t.alerts}</TabsTrigger>
                <TabsTrigger value="assessments">{t.assessments}</TabsTrigger>
                <TabsTrigger value="community">{t.community}</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.recentActivity}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div className="flex-1">
                          <p className="font-medium">{activity.text}</p>
                          <p className="text-sm text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">{t.viewAll}</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="alerts" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      {t.alerts}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-4 border border-destructive/50 bg-destructive/10 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="destructive">High Risk</Badge>
                          <span className="text-sm text-muted-foreground">5 days ago</span>
                        </div>
                        <p className="font-medium mb-1">
                          {language === "en" ? "Avian Flu Alert - 2km radius" : "एवियन फ्लू अलर्ट - 2 किमी त्रिज्या"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "en" ? "Immediate action recommended" : "तत्काल कार्रवाई की सिफारिश"}
                        </p>
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <Badge>Medium Risk</Badge>
                          <span className="text-sm text-muted-foreground">2 weeks ago</span>
                        </div>
                        <p className="font-medium mb-1">
                          {language === "en" ? "Vaccination reminder" : "टीकाकरण अनुस्मारक"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "en" ? "Completed" : "पूर्ण"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assessments" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      {t.assessments}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-medium">Risk Assessment #0342</p>
                          <p className="text-sm text-muted-foreground">2 days ago</p>
                        </div>
                        <Badge>Score: 35</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {language === "en" ? "2 photos uploaded" : "2 फोटो अपलोड"}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        {language === "en" ? "View Report" : "रिपोर्ट देखें"}
                      </Button>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-medium">Risk Assessment #0301</p>
                          <p className="text-sm text-muted-foreground">1 month ago</p>
                        </div>
                        <Badge variant="secondary">Score: 18</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        {language === "en" ? "View Report" : "रिपोर्ट देखें"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="community" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      {t.community}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-primary/10 rounded-lg text-center">
                        <p className="text-3xl font-bold text-primary">12</p>
                        <p className="text-sm text-muted-foreground">
                          {language === "en" ? "Connections" : "कनेक्शन"}
                        </p>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg text-center">
                        <p className="text-3xl font-bold text-accent">8</p>
                        <p className="text-sm text-muted-foreground">
                          {language === "en" ? "Posts" : "पोस्ट"}
                        </p>
                      </div>
                    </div>
                    <Button className="w-full">
                      {language === "en" ? "Visit Community Board" : "समुदाय बोर्ड पर जाएं"}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
