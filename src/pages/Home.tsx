import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Users,
  MapPin,
  TrendingDown,
  CheckCircle,
  Award,
  ArrowRight,
} from "lucide-react";
import heroFarmerPond from "@/assets/hero-farmer-pond.jpg";
import heroFarmerPoultry from "@/assets/hero-farmer-poultry.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

const heroImages = [heroFarmerPond, heroFarmerPoultry, heroCommunity];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "₹1,000 Cr", label: "Loss Prevented", labelHi: "नुकसान बचाया", icon: TrendingDown },
    { value: "2.5L+", label: "Farmers Protected", labelHi: "किसान सुरक्षित", icon: Users },
    { value: "500+", label: "Districts Covered", labelHi: "जिले कवर", icon: MapPin },
    { value: "98%", label: "Success Rate", labelHi: "सफलता दर", icon: CheckCircle },
  ];

  const features = [
    {
      icon: Shield,
      title: "Smart Risk Detection",
      titleHi: "स्मार्ट जोखिम पहचान",
      desc: "AI-powered early warning system",
      descHi: "एआई संचालित चेतावनी प्रणाली",
    },
    {
      icon: MapPin,
      title: "Geo-Fencing Protection",
      titleHi: "भू-बाड़ सुरक्षा",
      desc: "Protect your community",
      descHi: "अपने समुदाय की सुरक्षा करें",
    },
    {
      icon: Users,
      title: "Community Support",
      titleHi: "समुदाय सहायता",
      desc: "Connect with nearby farmers",
      descHi: "पास के किसानों से जुड़ें",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${heroImages[currentHeroIndex]})` }}
        />
        
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="flex gap-2 mb-6 animate-fade-in">
              <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm">
                <Award className="h-4 w-4 mr-2" />
                PM-KISAN Verified
              </Badge>
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm">
                Government Certified
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
              Protecting Farms, Securing Futures with Farm Secure
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in font-semibold drop-shadow">
              Community-powered biosecurity for every farmer
            </p>

            <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in italic drop-shadow">
              "मेरी खेती और परिवार दोनों सुरक्षित हैं" — Local farmer
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button
                variant="hero"
                size="lg"
                onClick={() => navigate("/risk-assessment")}
                className="group"
              >
                Run Risk Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/geo-fencing")}
                className="text-base md:text-lg"
              >
                Create Geo-Fence / भू-बाड़ बनाएं
              </Button>
            </div>
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentHeroIndex ? "w-8 bg-accent" : "w-2 bg-white/50"
              }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.labelHi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Protect Your Farm
            </h2>
            <p className="text-lg text-muted-foreground">
              हम आपकी खेती की सुरक्षा कैसे करते हैं
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 animate-scale-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 shadow-md">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{feature.titleHi}</p>
                <p className="text-muted-foreground">{feature.desc}</p>
                <p className="text-sm text-muted-foreground italic">{feature.descHi}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join 2.5 Lakh+ Protected Farmers
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            2.5 लाख+ सुरक्षित किसानों में शामिल हों
          </p>
          <Button
            variant="accent"
            size="lg"
            onClick={() => navigate("/risk-assessment")}
            className="text-lg px-10"
          >
            Get Started Free / निःशुल्क शुरू करें
          </Button>
        </div>
      </section>
    </div>
  );
}
