import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Users,
  MessageSquare,
  TrendingUp,
  Award,
  Bell,
  Search,
  Plus,
  ThumbsUp,
  MessageCircle,
  Pin,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface Post {
  id: string;
  author: string;
  authorInitials: string;
  role: "farmer" | "officer" | "authority";
  time: string;
  content: string;
  contentHi?: string;
  type: "notice" | "issue" | "success" | "question";
  likes: number;
  comments: number;
  isPinned?: boolean;
  village: string;
}

export default function Community() {
  const [posts] = useState<Post[]>([
    {
      id: "1",
      author: "District Animal Husbandry Officer",
      authorInitials: "DO",
      role: "authority",
      time: "2 hours ago",
      content: "Important: New vaccination drive starting next Monday in all villages. Free for PM-KISAN registered farmers.",
      contentHi: "महत्वपूर्ण: सभी गांवों में अगले सोमवार से नया टीकाकरण अभियान शुरू हो रहा है। पीएम-किसान पंजीकृत किसानों के लिए निःशुल्क।",
      type: "notice",
      likes: 45,
      comments: 12,
      isPinned: true,
      village: "District Wide",
    },
    {
      id: "2",
      author: "Ramesh Kumar",
      authorInitials: "RK",
      role: "farmer",
      time: "5 hours ago",
      content: "Seeing unusual symptoms in my poultry. Birds are lethargic and not eating. Need urgent advice.",
      contentHi: "मेरी मुर्गियों में असामान्य लक्षण दिख रहे हैं। पक्षी सुस्त हैं और नहीं खा रहे हैं। तत्काल सलाह चाहिए।",
      type: "issue",
      likes: 8,
      comments: 15,
      village: "Khandwa",
    },
    {
      id: "3",
      author: "Priya Sharma",
      authorInitials: "PS",
      role: "farmer",
      time: "1 day ago",
      content: "Successfully implemented biosecurity measures recommended by the app. Zero losses this season!",
      contentHi: "ऐप द्वारा सुझाए गए जैव सुरक्षा उपायों को सफलतापूर्वक लागू किया। इस सीजन में कोई नुकसान नहीं!",
      type: "success",
      likes: 92,
      comments: 23,
      village: "Dewas",
    },
    {
      id: "4",
      author: "Field Officer - North",
      authorInitials: "FO",
      role: "officer",
      time: "2 days ago",
      content: "Q&A session tomorrow at 3 PM. Ask any questions about disease prevention and government schemes.",
      contentHi: "कल दोपहर 3 बजे प्रश्नोत्तर सत्र। रोग रोकथाम और सरकारी योजनाओं के बारे में कोई भी प्रश्न पूछें।",
      type: "question",
      likes: 34,
      comments: 8,
      village: "Multiple Villages",
    },
  ]);

  const getPostIcon = (type: Post["type"]) => {
    switch (type) {
      case "notice":
        return <Bell className="h-5 w-5" />;
      case "issue":
        return <AlertCircle className="h-5 w-5" />;
      case "success":
        return <CheckCircle2 className="h-5 w-5" />;
      case "question":
        return <MessageCircle className="h-5 w-5" />;
    }
  };

  const getPostColor = (type: Post["type"]) => {
    switch (type) {
      case "notice":
        return "bg-accent text-accent-foreground";
      case "issue":
        return "bg-risk-high text-white";
      case "success":
        return "bg-risk-low text-white";
      case "question":
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Community Board / समुदाय बोर्ड
          </h1>
          <p className="text-muted-foreground">
            Connect with fellow farmers and get expert guidance
          </p>
          <p className="text-sm text-muted-foreground">
            साथी किसानों से जुड़ें और विशेषज्ञ मार्गदर्शन प्राप्त करें
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Feed */}
          <div className="lg:col-span-2 space-y-4">
            {/* Search and New Post */}
            <Card className="p-4 animate-scale-in">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search community... / समुदाय में खोजें..."
                    className="pl-10 h-12"
                  />
                </div>
                <Button variant="default" className="whitespace-nowrap">
                  <Plus className="h-5 w-5 mr-2" />
                  New Post / नई पोस्ट
                </Button>
              </div>
            </Card>

            {/* Posts */}
            {posts.map((post, idx) => (
              <Card
                key={post.id}
                className={`p-6 animate-fade-in ${post.isPinned ? "border-2 border-accent" : ""}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {post.isPinned && (
                  <div className="flex items-center gap-2 mb-3 text-accent">
                    <Pin className="h-4 w-4" />
                    <span className="text-xs font-semibold">PINNED POST / पिन की गई पोस्ट</span>
                  </div>
                )}

                <div className="flex gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground font-bold">
                      {post.authorInitials}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold">{post.author}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{post.village}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className={getPostColor(post.type)}>
                        {getPostIcon(post.type)}
                        <span className="ml-1 capitalize">{post.type}</span>
                      </Badge>
                    </div>

                    <p className="text-foreground mb-2">{post.content}</p>
                    {post.contentHi && (
                      <p className="text-sm text-muted-foreground italic mb-3">
                        {post.contentHi}
                      </p>
                    )}

                    <div className="flex items-center gap-6 pt-3 border-t border-border">
                      <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card className="p-6 animate-scale-in">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="font-bold text-lg">2,547</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Posts Today</span>
                  <span className="font-bold text-lg">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Questions Resolved</span>
                  <span className="font-bold text-lg text-risk-low">94%</span>
                </div>
              </div>
            </Card>

            {/* Top Contributors */}
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "100ms" }}>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Top Contributors / शीर्ष योगदानकर्ता
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Dr. Rajesh Verma", posts: 234, badge: "Expert" },
                  { name: "Sunita Devi", posts: 189, badge: "Helper" },
                  { name: "Mohan Lal", posts: 156, badge: "Active" },
                ].map((contributor, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {contributor.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{contributor.name}</div>
                      <div className="text-xs text-muted-foreground">{contributor.posts} posts</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {contributor.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trending Topics */}
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                Trending Topics
              </h3>
              <div className="space-y-2">
                {[
                  { topic: "Vaccination Drive", count: 45 },
                  { topic: "Monsoon Preparation", count: 38 },
                  { topic: "Government Schemes", count: 32 },
                  { topic: "Disease Prevention", count: 28 },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors text-left"
                  >
                    <span className="text-sm font-medium">{item.topic}</span>
                    <Badge variant="secondary" className="text-xs">
                      {item.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "300ms" }}>
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Ask a Question / प्रश्न पूछें
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Report Issue / समस्या रिपोर्ट करें
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Share Success / सफलता साझा करें
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
