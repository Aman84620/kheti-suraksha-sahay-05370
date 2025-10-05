import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Phone,
  Mic,
  Send,
  Bot,
  User,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  textHi?: string;
  time: string;
  type?: "info" | "warning" | "success";
}

export default function Support() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Namaste! I'm your BioSecure AI assistant. How can I help you today?",
      textHi: "नमस्ते! मैं आपका बायोसिक्योर एआई सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
      time: "Just now",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const quickActions = [
    { icon: AlertTriangle, text: "Report Symptom", textHi: "लक्षण रिपोर्ट करें", color: "text-risk-high" },
    { icon: CheckCircle, text: "Run Risk Check", textHi: "जोखिम जाँच", color: "text-risk-low" },
    { icon: HelpCircle, text: "Request SOP", textHi: "एसओपी अनुरोध", color: "text-secondary" },
    { icon: Phone, text: "Call Officer", textHi: "अधिकारी को कॉल करें", color: "text-accent" },
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputText,
      time: "Just now",
    };

    setMessages([...messages, newMessage]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "I understand you need help. Let me connect you with a field officer for personalized assistance.",
        textHi: "मैं समझता हूं कि आपको मदद की जरूरत है। मैं आपको व्यक्तिगत सहायता के लिए एक फील्ड अधिकारी से जोड़ता हूं।",
        time: "Just now",
        type: "info",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickAction = (action: typeof quickActions[0]) => {
    const message: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: action.text,
      time: "Just now",
    };
    setMessages([...messages, message]);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Support Chat / सहायता चैट
          </h1>
          <p className="text-muted-foreground">
            Get instant help from our AI assistant or connect with field officers
          </p>
          <p className="text-sm text-muted-foreground">
            हमारे एआई सहायक से तुरंत मदद पाएं या फील्ड अधिकारियों से जुड़ें
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Chat Window */}
          <div className="md:col-span-2">
            <Card className="flex flex-col h-[600px] animate-scale-in">
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                        <Bot className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-risk-low rounded-full border-2 border-card" />
                  </div>
                  <div>
                    <div className="font-semibold">AI Assistant</div>
                    <div className="text-xs text-muted-foreground">Online • Responds instantly</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={language === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("en")}
                  >
                    EN
                  </Button>
                  <Button
                    variant={language === "hi" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("hi")}
                  >
                    हि
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarFallback
                        className={
                          message.sender === "bot"
                            ? "bg-gradient-hero text-primary-foreground"
                            : "bg-accent text-accent-foreground"
                        }
                      >
                        {message.sender === "bot" ? (
                          <Bot className="h-5 w-5" />
                        ) : (
                          <User className="h-5 w-5" />
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`max-w-[80%] ${message.sender === "user" ? "items-end" : ""}`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.sender === "bot"
                            ? "bg-muted"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        {message.textHi && language === "hi" && (
                          <p className="text-sm mt-1 opacity-90">{message.textHi}</p>
                        )}
                      </div>
                      <div
                        className={`text-xs text-muted-foreground mt-1 ${
                          message.sender === "user" ? "text-right" : ""
                        }`}
                      >
                        {message.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2 mb-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    aria-label="Voice input"
                  >
                    <Mic className="h-5 w-5" />
                  </Button>
                  <Input
                    placeholder={language === "en" ? "Type your message..." : "अपना संदेश टाइप करें..."}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="h-12"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    className="rounded-full h-12 w-12"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction(action)}
                      className="justify-start text-xs"
                    >
                      <action.icon className={`h-4 w-4 mr-2 ${action.color}`} />
                      <span className="truncate">
                        {language === "en" ? action.text : action.textHi}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Options */}
            <Card className="p-6 animate-scale-in">
              <h3 className="font-bold mb-4">Contact Options</h3>
              <div className="space-y-3">
                <Button variant="default" className="w-full justify-start">
                  <Phone className="h-5 w-5 mr-3" />
                  <div className="text-left flex-1">
                    <div className="font-semibold text-sm">Call Officer</div>
                    <div className="text-xs opacity-90">तत्काल सहायता</div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  <div className="text-left flex-1">
                    <div className="font-semibold text-sm">Request Callback</div>
                    <div className="text-xs text-muted-foreground">कॉलबैक अनुरोध</div>
                  </div>
                </Button>
              </div>
            </Card>

            {/* Available Languages */}
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "100ms" }}>
              <h3 className="font-bold mb-4">Available Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Hindi", "English", "Telugu", "Marathi", "Bengali", "Tamil"].map(
                  (lang, idx) => (
                    <Badge key={idx} variant="outline" className="justify-center py-2">
                      {lang}
                    </Badge>
                  )
                )}
              </div>
            </Card>

            {/* Support Hours */}
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-bold mb-4">Support Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Chat</span>
                  <Badge variant="outline" className="bg-risk-low text-white">
                    24/7
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone Support</span>
                  <span className="font-medium">8 AM - 8 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Field Visits</span>
                  <span className="font-medium">9 AM - 6 PM</span>
                </div>
              </div>
            </Card>

            {/* Help Stats */}
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "300ms" }}>
              <h3 className="font-bold mb-4">Response Stats</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Avg Response Time</span>
                    <span className="font-semibold">&lt; 2 min</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-risk-low" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Resolution Rate</span>
                    <span className="font-semibold">94%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-primary" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
