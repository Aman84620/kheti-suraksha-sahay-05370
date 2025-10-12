import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import chatbot from "@/components/chatbot";
import {
  Shield,
  Users,
  MapPin,
  TrendingDown,
  CheckCircle,
  Award,
  ArrowRight,
  Bell,
  BarChart3,
  Lock,
  Smartphone,
  Star,
  AlertTriangle,
  Phone,
  Mail,
} from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=600&fit=crop",
];

const useCounter = (end, duration = 2000, shouldStart = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

export default function Home() {
  const navigate = useNavigate();
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setStatsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const farmersCount = useCounter(250000, 2500, statsVisible);
  const districtsCount = useCounter(500, 2000, statsVisible);
  const successRate = useCounter(98, 2000, statsVisible);

  const stats = [
    { 
      value: "₹1,000 Cr", 
      label: "Loss Prevented", 
      labelHi: "नुकसान बचाया", 
      icon: TrendingDown,
      color: "text-emerald-500"
    },
    { 
      value: farmersCount >= 250000 ? "2.5L+" : `${Math.floor(farmersCount / 1000)}K+`, 
      label: "Farmers Protected", 
      labelHi: "किसान सुरक्षित", 
      icon: Users,
      color: "text-blue-500"
    },
    { 
      value: `${districtsCount}+`, 
      label: "Districts Covered", 
      labelHi: "जिले कवर", 
      icon: MapPin,
      color: "text-purple-500"
    },
    { 
      value: `${successRate}%`, 
      label: "Success Rate", 
      labelHi: "सफलता दर", 
      icon: CheckCircle,
      color: "text-green-500"
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Smart Risk Detection",
      titleHi: "स्मार्ट जोखिम पहचान",
      desc: "AI-powered early warning system identifies threats before they impact your farm",
      descHi: "एआई संचालित प्रारंभिक चेतावनी प्रणाली",
      color: "bg-blue-500"
    },
    {
      icon: MapPin,
      title: "Geo-Fencing Protection",
      titleHi: "भू-बाड़ सुरक्षा",
      desc: "Real-time monitoring of your farm boundaries with instant alerts",
      descHi: "अपने समुदाय की रियल-टाइम सुरक्षा",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Community Network",
      titleHi: "समुदाय नेटवर्क",
      desc: "Connect with 2.5L+ farmers for shared intelligence and support",
      descHi: "2.5 लाख+ किसानों से जुड़ें",
      color: "bg-purple-500"
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      titleHi: "तुरंत अलर्ट",
      desc: "SMS & app notifications for immediate threat response",
      descHi: "एसएमएस और ऐप नोटिफिकेशन",
      color: "bg-orange-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      titleHi: "विश्लेषण डैशबोर्ड",
      desc: "Track farm health, risks, and prevention metrics in real-time",
      descHi: "रियल-टाइम फार्म स्वास्थ्य ट्रैकिंग",
      color: "bg-indigo-500"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      titleHi: "सुरक्षित और निजी",
      desc: "Bank-grade encryption protects your farm and personal data",
      descHi: "बैंक-ग्रेड एन्क्रिप्शन सुरक्षा",
      color: "bg-red-500"
    },
  ];

  const testimonials = [
    {
      name: "राजेश कुमार",
      location: "Sitapur, UP",
      text: "Farm Secure saved my crops worth ₹5 lakhs. The early warning system detected disease outbreak 2 days before visible symptoms!",
      textHi: "फार्म सिक्योर ने मेरी ₹5 लाख की फसल बचाई। रोग का पता लक्षण दिखने से 2 दिन पहले चल गया!",
      rating: 5,
      savings: "₹5L"
    },
    {
      name: "प्रिया शर्मा",
      location: "Bhopal, MP",
      text: "The geo-fencing feature helped us catch thieves trying to steal our equipment. Police arrived within 10 minutes!",
      textHi: "भू-बाड़ सुविधा से चोरों को पकड़ा गया। पुलिस 10 मिनट में आ गई!",
      rating: 5,
      savings: "₹2L"
    },
    {
      name: "सुरेश पटेल",
      location: "Khargone, MP",
      text: "Community support is amazing! 50 farmers helped when my farm was flooded. This platform brings us together.",
      textHi: "समुदाय सहायता बहुत अच्छी है! बाढ़ में 50 किसानों ने मदद की।",
      rating: 5,
      savings: "₹3L"
    },
  ];

  const trustBadges = [
    { icon: Award, text: "PM-KISAN Verified" },
    { icon: Shield, text: "Govt. Certified" },
    { icon: CheckCircle, text: "ISO 27001" },
    { icon: Lock, text: "Data Secure" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-10" />
        
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-30"
          style={{ backgroundImage: `url(${heroImages[currentHeroIndex]})` }}
        />
        
        <div className={`relative z-20 container mx-auto px-4 py-16 md:py-24 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {trustBadges.map((badge, idx) => (
                <Badge 
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-3 py-1.5 text-xs md:text-sm hover:bg-white/20 transition-all"
                >
                  <badge.icon className="h-3 w-3 md:h-4 md:w-4 mr-1.5" />
                  {badge.text}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Protecting Farms,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Securing Futures
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
              Community-powered biosecurity for every Indian farmer
            </p>

            <p className="text-lg md:text-xl text-emerald-400 mb-8 italic flex items-center gap-2">
              <Star className="h-5 w-5 fill-emerald-400" />
              "मेरी खेती और परिवार दोनों सुरक्षित हैं" — 2.5L+ Farmers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => navigate("/risk-assessment")}
                className="group bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all"
              >
                <Shield className="mr-2 h-5 w-5" />
                Run Free Risk Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/geo-fencing")}
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Create Geo-Fence / भू-बाड़ बनाएं
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Free for First 1000 Farmers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>24/7 Support in Hindi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentHeroIndex ? "w-8 bg-emerald-400" : "w-2 bg-white/50"
              }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-12 shadow-lg -mt-8 relative z-30 mx-4 md:mx-8 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.labelHi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-5 w-5 animate-pulse" />
            <p className="text-sm md:text-base font-medium">
              <strong>Alert:</strong> 12 disease outbreaks detected in MP today. Check your farm status now!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-1">
              Comprehensive Protection
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              How We Protect Your Farm
            </h2>
            <p className="text-xl text-slate-600">
              हम आपकी खेती की सुरक्षा कैसे करते हैं
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-300 bg-white"
              >
                <div className={`h-16 w-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{feature.titleHi}</p>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                <p className="text-sm text-slate-500 italic mt-2">{feature.descHi}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white px-4 py-1 border border-white/30">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by Farmers Across India
            </h2>
            <p className="text-xl text-white/80">
              भारत भर के किसानों द्वारा विश्वसनीय
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white mb-4 leading-relaxed">{testimonial.text}</p>
                <p className="text-white/70 text-sm italic mb-4">{testimonial.textHi}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.location}</p>
                  </div>
                  <Badge className="bg-emerald-500 text-white">
                    Saved {testimonial.savings}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-slate-600">
              3 आसान चरणों में शुरू करें
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Register Your Farm",
                titleHi: "अपना फार्म रजिस्टर करें",
                desc: "Add farm details, location, and crop information in 2 minutes",
                icon: Smartphone
              },
              {
                step: "2",
                title: "Set Up Monitoring",
                titleHi: "मॉनिटरिंग सेट करें",
                desc: "Create geo-fence boundaries and enable SMS/app alerts",
                icon: MapPin
              },
              {
                step: "3",
                title: "Stay Protected",
                titleHi: "सुरक्षित रहें",
                desc: "Receive instant alerts and connect with community support",
                icon: Shield
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-3xl font-bold mb-6 shadow-xl">
                    {step.step}
                  </div>
                  <step.icon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{step.titleHi}</p>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
                {idx < 2 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-4 h-8 w-8 text-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Join 2.5 Lakh+ Protected Farmers Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            2.5 लाख+ सुरक्षित किसानों में आज ही शामिल हों
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => navigate("/login")}
              className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-6 text-xl rounded-xl shadow-2xl font-bold"
            >
              Get Started Free / निःशुल्क शुरू करें
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/support")}
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-xl rounded-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to Expert / विशेषज्ञ से बात करें
            </Button>
          </div>
          <p className="text-white/80 text-sm">
            ✓ No credit card required  ✓ Free forever for small farmers  ✓ 24/7 Hindi support
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-emerald-400" />
                Farm Secure
              </h3>
              <p className="text-slate-400 text-sm">
                Protecting India's farms with AI-powered biosecurity solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><button onClick={() => navigate("/risk-assessment")} className="hover:text-white transition-colors">Risk Assessment</button></li>
                <li><button onClick={() => navigate("/geo-fencing")} className="hover:text-white transition-colors">Geo-Fencing</button></li>
                <li><button onClick={() => navigate("/community")} className="hover:text-white transition-colors">Community</button></li>
                <li><button onClick={() => navigate("/insurance")} className="hover:text-white transition-colors">Insurance</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><button onClick={() => navigate("/support")} className="hover:text-white transition-colors">Help Center</button></li>
                <li><button onClick={() => navigate("/training")} className="hover:text-white transition-colors">Training Videos</button></li>
                <li><button onClick={() => navigate("/support")} className="hover:text-white transition-colors">FAQs</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>1800-XXX-XXXX (Toll Free)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@farmsecure.in</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Farm Secure. All rights reserved. | Made with ❤️ for Indian Farmers</p>
          </div>
        </div>
        {chatbot()}
      </footer>
    </div>
  );
}