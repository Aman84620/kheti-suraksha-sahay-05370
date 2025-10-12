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
  Video,
  Clock,
  TrendingUp,
  Medal,
  Crown,
  Sparkles
} from "lucide-react";

const Training = () => {
  const [language, setLanguage] = useState("en");
  const [userPoints, setUserPoints] = useState(450);
  const [userLevel, setUserLevel] = useState(5);

  const content = {
    en: {
      title: "Training Hub",
      subtitle: "Master Farming Skills & Earn Rewards",
      videoLessons: "Video Tutorials",
      audioLessons: "Audio Guides",
      textGuides: "Reading Materials",
      gamification: "Your Journey",
      level: "Level",
      points: "XP Points",
      nextLevel: "To Next Level",
      badges: "Achievements",
      leaderboard: "Top Farmers",
      startLearning: "Start Course",
      continue: "Continue Learning",
      completed: "✓ Completed",
      locked: "Unlock at Level 6",
      minutes: "min",
      earnPoints: "Earn",
      totalLearners: "Active Learners",
      streakDays: "Day Streak",
      completionRate: "Completion Rate"
    },
    hi: {
      title: "प्रशिक्षण केंद्र",
      subtitle: "कृषि कौशल में महारत हासिल करें और पुरस्कार पाएं",
      videoLessons: "वीडियो ट्यूटोरियल",
      audioLessons: "ऑडियो गाइड",
      textGuides: "पढ़ने की सामग्री",
      gamification: "आपकी यात्रा",
      level: "स्तर",
      points: "अंक",
      nextLevel: "अगले स्तर के लिए",
      badges: "उपलब्धियां",
      leaderboard: "शीर्ष किसान",
      startLearning: "कोर्स शुरू करें",
      continue: "सीखना जारी रखें",
      completed: "✓ पूर्ण",
      locked: "स्तर 6 पर अनलॉक",
      minutes: "मिनट",
      earnPoints: "कमाएं",
      totalLearners: "सक्रिय शिक्षार्थी",
      streakDays: "दिन की श्रृंखला",
      completionRate: "पूर्णता दर"
    }
  };

  const t = content[language];

  const videoLessons = [
    {
      id: 1,
      title: language === "en" ? "Introduction to Biosecurity" : "जैव सुरक्षा का परिचय",
      description: language === "en" ? "Learn the fundamentals of farm biosecurity" : "फार्म जैव सुरक्षा की बुनियादी बातें सीखें",
      duration: 8,
      points: 50,
      completed: true,
      locked: false,
      thumbnail: "🛡️"
    },
    {
      id: 2,
      title: language === "en" ? "Disease Prevention Basics" : "रोग रोकथाम की मूल बातें",
      description: language === "en" ? "Essential techniques for disease prevention" : "रोग रोकथाम के लिए आवश्यक तकनीकें",
      duration: 12,
      points: 75,
      completed: true,
      locked: false,
      thumbnail: "💊"
    },
    {
      id: 3,
      title: language === "en" ? "Farm Hygiene Practices" : "फार्म स्वच्छता प्रथाएं",
      description: language === "en" ? "Maintain optimal hygiene standards" : "इष्टतम स्वच्छता मानकों को बनाए रखें",
      duration: 15,
      points: 100,
      completed: false,
      locked: false,
      thumbnail: "🧼",
      progress: 45
    },
    {
      id: 4,
      title: language === "en" ? "Advanced Risk Management" : "उन्नत जोखिम प्रबंधन",
      description: language === "en" ? "Master complex risk scenarios" : "जटिल जोखिम परिदृश्यों में महारत हासिल करें",
      duration: 20,
      points: 150,
      completed: false,
      locked: true,
      thumbnail: "📊"
    }
  ];

  const audioLessons = [
    {
      id: 1,
      title: language === "en" ? "Daily Biosecurity Checklist" : "दैनिक जैव सुरक्षा चेकलिस्ट",
      description: language === "en" ? "Your morning routine guide" : "आपकी सुबह की दिनचर्या गाइड",
      duration: 5,
      points: 30,
      completed: true,
      locked: false,
      thumbnail: "📋"
    },
    {
      id: 2,
      title: language === "en" ? "Vaccination Schedule Guide" : "टीकाकरण अनुसूची गाइड",
      description: language === "en" ? "Never miss a vaccination date" : "कभी टीकाकरण की तारीख न चूकें",
      duration: 10,
      points: 50,
      completed: false,
      locked: false,
      thumbnail: "💉",
      progress: 60
    },
    {
      id: 3,
      title: language === "en" ? "Emergency Response Protocol" : "आपातकालीन प्रतिक्रिया प्रोटोकॉल",
      description: language === "en" ? "Quick action steps for emergencies" : "आपात स्थिति के लिए त्वरित कार्रवाई कदम",
      duration: 8,
      points: 60,
      completed: false,
      locked: true,
      thumbnail: "🚨"
    }
  ];

  const textGuides = [
    {
      id: 1,
      title: language === "en" ? "Biosecurity Best Practices Manual" : "जैव सुरक्षा सर्वोत्तम प्रथाएं मैनुअल",
      description: language === "en" ? "Comprehensive guide to farm safety" : "फार्म सुरक्षा के लिए व्यापक गाइड",
      pages: 12,
      points: 80,
      completed: true,
      locked: false,
      thumbnail: "📖"
    },
    {
      id: 2,
      title: language === "en" ? "Disease Identification Guide" : "रोग पहचान गाइड",
      description: language === "en" ? "Spot and identify common diseases" : "सामान्य रोगों को पहचानें",
      pages: 20,
      points: 100,
      completed: false,
      locked: false,
      thumbnail: "🔬",
      progress: 30
    },
    {
      id: 3,
      title: language === "en" ? "Community Protection Strategies" : "समुदाय सुरक्षा रणनीतियाँ",
      description: language === "en" ? "Protect your farming community" : "अपने कृषि समुदाय की रक्षा करें",
      pages: 15,
      points: 90,
      completed: false,
      locked: true,
      thumbnail: "🤝"
    }
  ];

  const badges = [
    {
      icon: Award,
      name: language === "en" ? "Quick Learner" : "त्वरित शिक्षार्थी",
      earned: true,
      color: "text-yellow-500",
      glow: "shadow-yellow-500/50"
    },
    {
      icon: Star,
      name: language === "en" ? "Expert" : "विशेषज्ञ",
      earned: true,
      color: "text-blue-500",
      glow: "shadow-blue-500/50"
    },
    {
      icon: Trophy,
      name: language === "en" ? "Helper" : "सहायक",
      earned: true,
      color: "text-emerald-500",
      glow: "shadow-emerald-500/50"
    },
    {
      icon: Crown,
      name: language === "en" ? "Master" : "मास्टर",
      earned: false,
      color: "text-muted-foreground",
      glow: ""
    }
  ];

  const leaderboardData = [
    { rank: 1, name: "Rajesh Kumar", points: 1250, avatar: "👨‍🌾", trend: "+50" },
    { rank: 2, name: "Priya Sharma", points: 1180, avatar: "👩‍🌾", trend: "+35" },
    { rank: 3, name: "Amit Patel", points: 1050, avatar: "👨‍🌾", trend: "+42" },
    { rank: 4, name: language === "en" ? "You" : "आप", points: userPoints, avatar: "⭐", highlight: true, trend: "+25" },
    { rank: 5, name: "Sunita Mehra", points: 890, avatar: "👩‍🌾", trend: "+18" }
  ];

  const stats = [
    { label: t.totalLearners, value: "2,547", icon: TrendingUp, color: "text-blue-500" },
    { label: t.streakDays, value: "7", icon: Sparkles, color: "text-orange-500" },
    { label: t.completionRate, value: "78%", icon: Target, color: "text-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-emerald-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground font-medium">{t.subtitle}</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="self-start md:self-auto font-bold border-2 hover:scale-105 transition-transform"
            >
              {language === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-4 text-center">
                  <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1 border-2 hover:shadow-xl transition-all">
            <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-yellow-500" />
                {t.gamification}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-3xl font-black shadow-2xl border-4 border-white dark:border-gray-800">
                    {userLevel}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3 font-semibold">{t.level} {userLevel}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border-2">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground font-medium">{t.points}</span>
                  <span className="font-bold text-green-600 dark:text-green-400">{userPoints}/500</span>
                </div>
                <Progress value={(userPoints / 500) * 100} className="h-3 bg-white dark:bg-gray-700" />
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  <span>{500 - userPoints} XP {t.nextLevel}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Medal className="h-4 w-4 text-yellow-500" />
                  {t.badges}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {badges.map((badge, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border-2 transition-all ${badge.earned
                          ? "border-green-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:scale-110"
                          : "border-muted bg-muted/30 opacity-50 grayscale"
                        }`}
                    >
                      <badge.icon className={`h-8 w-8 mx-auto ${badge.color} ${badge.earned ? 'animate-pulse' : ''}`} />
                      <p className="text-xs text-center mt-2 font-medium">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  {t.leaderboard}
                </p>
                <div className="space-y-2">
                  {leaderboardData.map((entry) => (
                    <div
                      key={entry.rank}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${entry.highlight
                          ? "bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-500 shadow-lg scale-105"
                          : "bg-muted/50 hover:bg-muted hover:scale-105"
                        }`}
                    >
                      <div className={`text-2xl ${entry.rank <= 3 ? 'filter drop-shadow-lg' : ''}`}>
                        {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold truncate">{entry.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{entry.points} XP</span>
                          <span className="text-green-600 dark:text-green-400 font-semibold">{entry.trend}</span>
                        </div>
                      </div>
                      <Badge variant={entry.highlight ? "default" : "outline"} className="font-bold">
                        #{entry.rank}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 border-2 shadow-xl">
            <CardContent className="pt-6">
              <Tabs defaultValue="video" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 h-auto p-1 bg-muted/50">
                  <TabsTrigger
                    value="video"
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white py-3"
                  >
                    <Video className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.videoLessons}</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="audio"
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white py-3"
                  >
                    <Headphones className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.audioLessons}</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="text"
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-amber-600 data-[state=active]:text-white py-3"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.textGuides}</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="video" className="space-y-4 mt-0">
                  {videoLessons.map((lesson) => (
                    <Card
                      key={lesson.id}
                      className={`transition-all border-2 ${lesson.locked
                          ? "opacity-50 grayscale"
                          : "hover:shadow-xl hover:scale-[1.02] hover:border-green-500"
                        }`}
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row items-start gap-4 p-6">
                          <div
                            className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg ${lesson.completed
                                ? "bg-gradient-to-br from-green-500 to-emerald-500"
                                : lesson.locked
                                  ? "bg-muted"
                                  : "bg-gradient-to-br from-blue-500 to-indigo-500"
                              }`}
                          >
                            {lesson.completed ? (
                              <CheckCircle className="h-10 w-10 text-white" />
                            ) : lesson.locked ? (
                              <Lock className="h-10 w-10 text-muted-foreground" />
                            ) : (
                              <span>{lesson.thumbnail}</span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-1">{lesson.title}</h3>
                                <p className="text-sm text-muted-foreground">{lesson.description}</p>
                              </div>
                              <Badge className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg self-start whitespace-nowrap">
                                <Zap className="h-3 w-3" />
                                +{lesson.points} XP
                              </Badge>
                            </div>

                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {lesson.duration} {t.minutes}
                              </span>
                              {lesson.progress && (
                                <div className="flex-1 max-w-xs">
                                  <Progress value={lesson.progress} className="h-2" />
                                  <span className="text-xs text-muted-foreground ml-1">{lesson.progress}%</span>
                                </div>
                              )}
                            </div>

                            <Button
                              disabled={lesson.locked}
                              variant={lesson.completed ? "outline" : "default"}
                              size="sm"
                              className={`${!lesson.completed && !lesson.locked
                                  ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                                  : ""
                                }`}
                            >
                              {lesson.completed ? (
                                <><CheckCircle className="h-4 w-4 mr-2" /> {t.completed}</>
                              ) : lesson.locked ? (
                                <><Lock className="h-4 w-4 mr-2" /> {t.locked}</>
                              ) : lesson.progress ? (
                                <><PlayCircle className="h-4 w-4 mr-2" /> {t.continue}</>
                              ) : (
                                <><PlayCircle className="h-4 w-4 mr-2" /> {t.startLearning}</>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="audio" className="space-y-4 mt-0">
                  {audioLessons.map((lesson) => (
                    <Card
                      key={lesson.id}
                      className={`transition-all border-2 ${lesson.locked
                          ? "opacity-50 grayscale"
                          : "hover:shadow-xl hover:scale-[1.02] hover:border-blue-500"
                        }`}
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row items-start gap-4 p-6">
                          <div
                            className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg ${lesson.completed
                                ? "bg-gradient-to-br from-green-500 to-emerald-500"
                                : lesson.locked
                                  ? "bg-muted"
                                  : "bg-gradient-to-br from-purple-500 to-pink-500"
                              }`}
                          >
                            {lesson.completed ? (
                              <CheckCircle className="h-10 w-10 text-white" />
                            ) : lesson.locked ? (
                              <Lock className="h-10 w-10 text-muted-foreground" />
                            ) : (
                              <span>{lesson.thumbnail}</span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-1">{lesson.title}</h3>
                                <p className="text-sm text-muted-foreground">{lesson.description}</p>
                              </div>
                              <Badge className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg self-start whitespace-nowrap">
                                <Zap className="h-3 w-3" />
                                +{lesson.points} XP
                              </Badge>
                            </div>

                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {lesson.duration} {t.minutes}
                              </span>
                              {lesson.progress && (
                                <div className="flex-1 max-w-xs">
                                  <Progress value={lesson.progress} className="h-2" />
                                  <span className="text-xs text-muted-foreground ml-1">{lesson.progress}%</span>
                                </div>
                              )}
                            </div>

                            <Button
                              disabled={lesson.locked}
                              variant={lesson.completed ? "outline" : "default"}
                              size="sm"
                              className={`${!lesson.completed && !lesson.locked
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                  : ""
                                }`}
                            >
                              {lesson.completed ? (
                                <><CheckCircle className="h-4 w-4 mr-2" /> {t.completed}</>
                              ) : lesson.locked ? (
                                <><Lock className="h-4 w-4 mr-2" /> {t.locked}</>
                              ) : lesson.progress ? (
                                <><Mic className="h-4 w-4 mr-2" /> {t.continue}</>
                              ) : (
                                <><Mic className="h-4 w-4 mr-2" /> {t.startLearning}</>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="text" className="space-y-4 mt-0">
                  {textGuides.map((guide) => (
                    <Card
                      key={guide.id}
                      className={`transition-all border-2 ${guide.locked
                          ? "opacity-50 grayscale"
                          : "hover:shadow-xl hover:scale-[1.02] hover:border-orange-500"
                        }`}
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row items-start gap-4 p-6">
                          <div
                            className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg ${guide.completed
                                ? "bg-gradient-to-br from-green-500 to-emerald-500"
                                : guide.locked
                                  ? "bg-muted"
                                  : "bg-gradient-to-br from-orange-500 to-red-500"
                              }`}
                          >
                            {guide.completed ? (
                              <CheckCircle className="h-10 w-10 text-white" />
                            ) : guide.locked ? (
                              <Lock className="h-10 w-10 text-muted-foreground" />
                            ) : (
                              <span>{guide.thumbnail}</span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-1">{guide.title}</h3>
                                <p className="text-sm text-muted-foreground">{guide.description}</p>
                              </div>
                              <Badge className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg self-start whitespace-nowrap">
                                <Zap className="h-3 w-3" />
                                +{guide.points} XP
                              </Badge>
                            </div>

                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <FileText
                                  className="h-3 w-3" />
                                {guide.pages} {language === "en" ? "pages" : "पृष्ठ"}
                              </span>
                              {guide.progress && (
                                <div className="flex-1 max-w-xs">
                                  <Progress value={guide.progress} className="h-2" />
                                  <span className="text-xs text-muted-foreground ml-1">{guide.progress}%</span>
                                </div>
                              )}
                            </div>

                            <Button
                              disabled={guide.locked}
                              variant={guide.completed ? "outline" : "default"}
                              size="sm"
                              className={`${!guide.completed && !guide.locked
                                  ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                                  : ""
                                }`}
                            >
                              {guide.completed ? (
                                <><CheckCircle className="h-4 w-4 mr-2" /> {t.completed}</>
                              ) : guide.locked ? (
                                <><Lock className="h-4 w-4 mr-2" /> {t.locked}</>
                              ) : guide.progress ? (
                                <><BookOpen className="h-4 w-4 mr-2" /> {t.continue}</>
                              ) : (
                                <><BookOpen className="h-4 w-4 mr-2" /> {t.startLearning}</>
                              )}
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