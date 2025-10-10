import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PlayCircle,
  FileText,
  Mic,
  Award,
  CheckCircle,
  Lock,
  Star,
  Trophy,
  Target,
  Zap,
  BookOpen,
  Headphones,
  Video
} from "lucide-react";

const Training = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [userPoints, setUserPoints] = useState(450);
  const [userLevel, setUserLevel] = useState(5);

  const content = {
    en: {
      title: "Training Center",
      subtitle: "Learn and Earn Rewards",
      videoLessons: "Video Lessons",
      audioLessons: "Audio Lessons",
      textGuides: "Text Guides",
      gamification: "Your Progress",
      level: "Level",
      points: "Points",
      nextLevel: "Next Level",
      badges: "Badges Earned",
      leaderboard: "Leaderboard",
      startLearning: "Start Learning",
      continue: "Continue",
      completed: "Completed",
      locked: "Locked",
      minutes: "min",
      earnPoints: "Earn points",
    },
    hi: {
      title: "प्रशिक्षण केंद्र",
      subtitle: "सीखें और पुरस्कार अर्जित करें",
      videoLessons: "वीडियो पाठ",
      audioLessons: "ऑडियो पाठ",
      textGuides: "पाठ गाइड",
      gamification: "आपकी प्रगति",
      level: "स्तर",
      points: "अंक",
      nextLevel: "अगला स्तर",
      badges: "बैज अर्जित",
      leaderboard: "लीडरबोर्ड",
      startLearning: "सीखना शुरू करें",
      continue: "जारी रखें",
      completed: "पूर्ण",
      locked: "बंद",
      minutes: "मिनट",
      earnPoints: "अंक अर्जित करें",
    }
  };

  const t = content[language];

  const videoLessons = [
    {
      id: 1,
      title: language === "en" ? "Introduction to Biosecurity" : "जैव सुरक्षा का परिचय",
      duration: 8,
      points: 50,
      completed: true,
      locked: false
    },
    {
      id: 2,
      title: language === "en" ? "Disease Prevention Basics" : "रोग रोकथाम की मूल बातें",
      duration: 12,
      points: 75,
      completed: true,
      locked: false
    },
    {
      id: 3,
      title: language === "en" ? "Farm Hygiene Practices" : "फार्म स्वच्छता प्रथाएं",
      duration: 15,
      points: 100,
      completed: false,
      locked: false
    },
    {
      id: 4,
      title: language === "en" ? "Advanced Risk Management" : "उन्नत जोखिम प्रबंधन",
      duration: 20,
      points: 150,
      completed: false,
      locked: true
    }
  ];

  const audioLessons = [
    {
      id: 1,
      title: language === "en" ? "Daily Biosecurity Checklist" : "दैनिक जैव सुरक्षा चेकलिस्ट",
      duration: 5,
      points: 30,
      completed: true,
      locked: false
    },
    {
      id: 2,
      title: language === "en" ? "Vaccination Schedule Guide" : "टीकाकरण अनुसूची गाइड",
      duration: 10,
      points: 50,
      completed: false,
      locked: false
    },
    {
      id: 3,
      title: language === "en" ? "Emergency Response Protocol" : "आपातकालीन प्रतिक्रिया प्रोटोकॉल",
      duration: 8,
      points: 60,
      completed: false,
      locked: true
    }
  ];

  const textGuides = [
    {
      id: 1,
      title: language === "en" ? "Biosecurity Best Practices Manual" : "जैव सुरक्षा सर्वोत्तम प्रथाएं मैनुअल",
      pages: 12,
      points: 80,
      completed: true,
      locked: false
    },
    {
      id: 2,
      title: language === "en" ? "Disease Identification Guide" : "रोग पहचान गाइड",
      pages: 20,
      points: 100,
      completed: false,
      locked: false
    },
    {
      id: 3,
      title: language === "en" ? "Community Protection Strategies" : "समुदाय सुरक्षा रणनीतियाँ",
      pages: 15,
      points: 90,
      completed: false,
      locked: true
    }
  ];

  const badges = [
    { 
      icon: Award, 
      name: language === "en" ? "Quick Learner" : "त्वरित शिक्षार्थी", 
      earned: true,
      color: "text-yellow-500"
    },
    { 
      icon: Star, 
      name: language === "en" ? "Biosecurity Expert" : "जैव सुरक्षा विशेषज्ञ", 
      earned: true,
      color: "text-primary"
    },
    { 
      icon: Trophy, 
      name: language === "en" ? "Community Helper" : "समुदाय सहायक", 
      earned: true,
      color: "text-accent"
    },
    { 
      icon: Target, 
      name: language === "en" ? "Perfect Score" : "परफेक्ट स्कोर", 
      earned: false,
      color: "text-muted-foreground"
    }
  ];

  const leaderboardData = [
    { rank: 1, name: "Rajesh K.", points: 1250, avatar: "👨‍🌾" },
    { rank: 2, name: "Priya S.", points: 1180, avatar: "👩‍🌾" },
    { rank: 3, name: "Amit P.", points: 1050, avatar: "👨‍🌾" },
    { rank: 4, name: language === "en" ? "You" : "आप", points: userPoints, avatar: "⭐", highlight: true },
    { rank: 5, name: "Sunita M.", points: 890, avatar: "👩‍🌾" }
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

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Gamification Stats */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-accent" />
                {t.gamification}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Level */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-hero text-primary-foreground text-2xl font-bold mb-2">
                  {userLevel}
                </div>
                <p className="text-sm text-muted-foreground">{t.level}</p>
              </div>

              {/* Points */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">{t.points}</span>
                  <span className="font-bold text-primary">{userPoints}/500</span>
                </div>
                <Progress value={(userPoints / 500) * 100} className="h-3" />
                <p className="text-xs text-muted-foreground mt-2">
                  {t.nextLevel}: {500 - userPoints} {t.points}
                </p>
              </div>

              {/* Badges */}
              <div>
                <p className="text-sm font-medium mb-3">{t.badges}</p>
                <div className="grid grid-cols-2 gap-2">
                  {badges.map((badge, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border-2 ${
                        badge.earned
                          ? "border-primary bg-primary/10"
                          : "border-muted bg-muted/50 opacity-50"
                      } flex flex-col items-center gap-1`}
                    >
                      <badge.icon className={`h-6 w-6 ${badge.color}`} />
                      <p className="text-xs text-center">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div>
                <p className="text-sm font-medium mb-3">{t.leaderboard}</p>
                <div className="space-y-2">
                  {leaderboardData.map((entry) => (
                    <div
                      key={entry.rank}
                      className={`flex items-center gap-2 p-2 rounded ${
                        entry.highlight
                          ? "bg-primary/20 border border-primary"
                          : "bg-muted"
                      }`}
                    >
                      <span className="text-lg">{entry.avatar}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{entry.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {entry.points} {t.points}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        #{entry.rank}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Training Content */}
          <Card className="md:col-span-3">
            <CardContent className="pt-6">
              <Tabs defaultValue="video">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="video" className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    {t.videoLessons}
                  </TabsTrigger>
                  <TabsTrigger value="audio" className="flex items-center gap-2">
                    <Headphones className="h-4 w-4" />
                    {t.audioLessons}
                  </TabsTrigger>
                  <TabsTrigger value="text" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {t.textGuides}
                  </TabsTrigger>
                </TabsList>

                {/* Video Lessons */}
                <TabsContent value="video" className="space-y-4">
                  {videoLessons.map((lesson) => (
                    <Card
                      key={lesson.id}
                      className={`transition-all ${
                        lesson.locked ? "opacity-60" : "hover:shadow-md"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-4 rounded-lg ${
                              lesson.completed
                                ? "bg-green-50 dark:bg-green-900/20"
                                : lesson.locked
                                ? "bg-muted"
                                : "bg-primary/10"
                            }`}
                          >
                            {lesson.completed ? (
                              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                            ) : lesson.locked ? (
                              <Lock className="h-8 w-8 text-muted-foreground" />
                            ) : (
                              <PlayCircle className="h-8 w-8 text-primary" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-lg">{lesson.title}</h3>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Zap className="h-3 w-3" />
                                +{lesson.points}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {lesson.duration} {t.minutes}
                            </p>
                            <Button
                              disabled={lesson.locked}
                              variant={lesson.completed ? "outline" : "default"}
                              size="sm"
                            >
                              {lesson.completed
                                ? t.completed
                                : lesson.locked
                                ? t.locked
                                : t.startLearning}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Audio Lessons */}
                <TabsContent value="audio" className="space-y-4">
                  {audioLessons.map((lesson) => (
                    <Card
                      key={lesson.id}
                      className={`transition-all ${
                        lesson.locked ? "opacity-60" : "hover:shadow-md"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-4 rounded-lg ${
                              lesson.completed
                                ? "bg-green-50 dark:bg-green-900/20"
                                : lesson.locked
                                ? "bg-muted"
                                : "bg-secondary/10"
                            }`}
                          >
                            {lesson.completed ? (
                              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                            ) : lesson.locked ? (
                              <Lock className="h-8 w-8 text-muted-foreground" />
                            ) : (
                              <Mic className="h-8 w-8 text-secondary" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-lg">{lesson.title}</h3>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Zap className="h-3 w-3" />
                                +{lesson.points}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {lesson.duration} {t.minutes}
                            </p>
                            <Button
                              disabled={lesson.locked}
                              variant={lesson.completed ? "outline" : "default"}
                              size="sm"
                            >
                              {lesson.completed
                                ? t.completed
                                : lesson.locked
                                ? t.locked
                                : t.startLearning}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Text Guides */}
                <TabsContent value="text" className="space-y-4">
                  {textGuides.map((guide) => (
                    <Card
                      key={guide.id}
                      className={`transition-all ${
                        guide.locked ? "opacity-60" : "hover:shadow-md"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-4 rounded-lg ${
                              guide.completed
                                ? "bg-green-50 dark:bg-green-900/20"
                                : guide.locked
                                ? "bg-muted"
                                : "bg-accent/10"
                            }`}
                          >
                            {guide.completed ? (
                              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                            ) : guide.locked ? (
                              <Lock className="h-8 w-8 text-muted-foreground" />
                            ) : (
                              <FileText className="h-8 w-8 text-accent" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-lg">{guide.title}</h3>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Zap className="h-3 w-3" />
                                +{guide.points}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {guide.pages} {language === "en" ? "pages" : "पृष्ठ"}
                            </p>
                            <Button
                              disabled={guide.locked}
                              variant={guide.completed ? "outline" : "default"}
                              size="sm"
                            >
                              {guide.completed
                                ? t.completed
                                : guide.locked
                                ? t.locked
                                : t.startLearning}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Training;