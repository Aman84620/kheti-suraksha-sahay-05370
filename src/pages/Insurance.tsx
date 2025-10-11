import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Heart,
  Shield,
  TrendingUp,
  CheckCircle2,
  IndianRupee,
  Target,
  Bird,
  MessageCircle,
  Phone,
  ExternalLink,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface InsurancePlan {
  id: string;
  provider: string;
  name: string;
  coverage: string;
  premium: string;
  features: string[];
  rating: number;
  popular?: boolean;
  contactNumber: string;
  website: string;
}

const insurancePlans: Record<string, InsurancePlan[]> = {
  cattle: [
    {
      id: "1",
      provider: "National Insurance",
      name: "Cattle Insurance",
      coverage: "₹50,000 - ₹3,00,000",
      premium: "₹2,500 - ₹15,000",
      features: ["Death by disease", "Death by accident", "Surgery coverage", "Permanent disability"],
      rating: 4.5,
      popular: true,
      contactNumber: "1800-425-5225",
      website: "https://nationalinsurance.nic.co.in",
    },
    {
      id: "2",
      provider: "HDFC ERGO",
      name: "Livestock Insurance",
      coverage: "₹30,000 - ₹2,00,000",
      premium: "₹1,800 - ₹10,000",
      features: ["Natural death", "Accidental death", "Strike & riot", "Fire coverage"],
      rating: 4.2,
      contactNumber: "1800-2700-700",
      website: "https://www.hdfcergo.com",
    },
    {
      id: "3",
      provider: "IFFCO Tokio",
      name: "Dairy Cattle Insurance",
      coverage: "₹40,000 - ₹2,50,000",
      premium: "₹2,000 - ₹12,500",
      features: ["Disease cover", "Surgery", "In-transit cover", "Emergency treatment"],
      rating: 4.3,
      contactNumber: "1800-103-5499",
      website: "https://www.iffcotokio.co.in",
    },
  ],
  buffalo: [
    {
      id: "4",
      provider: "United India Insurance",
      name: "Buffalo Insurance",
      coverage: "₹60,000 - ₹4,00,000",
      premium: "₹3,000 - ₹20,000",
      features: ["Death coverage", "Theft protection", "Disease treatment", "Veterinary expenses"],
      rating: 4.4,
      popular: true,
      contactNumber: "1800-425-5864",
      website: "https://uiic.co.in",
    },
    {
      id: "5",
      provider: "Oriental Insurance",
      name: "Buffalo Shield",
      coverage: "₹45,000 - ₹3,50,000",
      premium: "₹2,500 - ₹17,500",
      features: ["Natural calamities", "Accident coverage", "Medical expenses", "Transit cover"],
      rating: 4.1,
      contactNumber: "1800-118-485",
      website: "https://www.orientalinsurance.org.in",
    },
  ],
  goat: [
    {
      id: "6",
      provider: "Bajaj Allianz",
      name: "Sheep & Goat Insurance",
      coverage: "₹5,000 - ₹50,000",
      premium: "₹250 - ₹2,500",
      features: ["Epidemic diseases", "Accident", "Natural death", "Theft"],
      rating: 4.0,
      popular: true,
      contactNumber: "1800-209-5858",
      website: "https://www.bajajallianz.com",
    },
    {
      id: "7",
      provider: "ICICI Lombard",
      name: "Small Livestock Cover",
      coverage: "₹3,000 - ₹40,000",
      premium: "₹180 - ₹2,000",
      features: ["Disease cover", "Accidental death", "Fire damage", "Flood protection"],
      rating: 3.9,
      contactNumber: "1800-266-7766",
      website: "https://www.icicilombard.com",
    },
  ],
  poultry: [
    {
      id: "8",
      provider: "SBI General Insurance",
      name: "Poultry Farm Insurance",
      coverage: "₹1,00,000 - ₹50,00,000",
      premium: "₹5,000 - ₹2,50,000",
      features: ["Epidemic diseases", "Natural calamities", "Fire & allied perils", "Equipment cover"],
      rating: 4.3,
      popular: true,
      contactNumber: "1800-22-1111",
      website: "https://www.sbigeneral.in",
    },
    {
      id: "9",
      provider: "Future Generali",
      name: "Poultry Protection Plan",
      coverage: "₹50,000 - ₹30,00,000",
      premium: "₹2,500 - ₹1,50,000",
      features: ["Disease outbreak", "Power failure loss", "Stock coverage", "Building damage"],
      rating: 4.1,
      contactNumber: "1800-220-233",
      website: "https://general.futuregenerali.in",
    },
  ],
};

const Insurance = () => {
  const { t } = useLanguage();
  const [selectedAnimal, setSelectedAnimal] = useState<string>("cattle");
  const [isVisible, setIsVisible] = useState(false);

  useState(() => {
    setTimeout(() => setIsVisible(true), 100);
  });

  const animalTypes = [
    { id: "cattle", icon: Target, label: t("cattle"), emoji: "🐄" },
    { id: "buffalo", icon: Target, label: t("buffalo"), emoji: "🐃" },
    { id: "goat", icon: Target, label: t("goat"), emoji: "🐐" },
    { id: "poultry", icon: Bird, label: t("poultry"), emoji: "🐔" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-hero opacity-10 transition-opacity duration-1000 ${
            isVisible ? "opacity-10" : "opacity-0"
          }`}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div
            className={`text-center transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary">{t("insurance")}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-hero bg-clip-text text-transparent">
              {t("insuranceTitle")}
            </h1>
            <p className="text-xl text-muted-foreground font-semibold max-w-2xl mx-auto">
              {t("insuranceSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Animal Type Selector */}
      <div className="container mx-auto max-w-6xl px-4 mb-12">
        <div
          className={`transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">{t("selectAnimal")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {animalTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow ${
                    selectedAnimal === type.id
                      ? "border-primary shadow-lg bg-primary/5 scale-105"
                      : "hover:border-primary/50"
                  }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                    transform: isVisible ? "scale(1)" : "scale(0.9)",
                    opacity: isVisible ? 1 : 0,
                  }}
                  onClick={() => setSelectedAnimal(type.id)}
                >
                  <div className="p-6 text-center">
                    <div className="text-5xl mb-3 animate-bounce" style={{ animationDelay: `${idx * 100}ms` }}>
                      {type.emoji}
                    </div>
                    <p className="font-bold text-lg">{type.label}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="container mx-auto max-w-6xl px-4 pb-16">
        <div
          className={`transform transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{t("compareInsurance")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insurancePlans[selectedAnimal]?.map((plan, idx) => (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-glow ${
                  plan.popular ? "border-accent shadow-md" : ""
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 animate-pulse">
                    <Badge className="bg-gradient-accent font-bold">Popular</Badge>
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{plan.provider}</h3>
                    <p className="text-lg font-semibold text-muted-foreground">{plan.name}</p>
                  </div>

                  <div className="mb-4 p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm font-bold text-muted-foreground">
                        {t("coverage")}
                      </span>
                    </div>
                    <p className="text-2xl font-black text-primary">{plan.coverage}</p>
                  </div>

                  <div className="mb-4 p-4 bg-accent/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <IndianRupee className="w-5 h-5 text-accent" />
                      <span className="text-sm font-bold text-muted-foreground">
                        {t("premium")}
                      </span>
                    </div>
                    <p className="text-xl font-black text-accent">{plan.premium}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-bold text-muted-foreground mb-3">{t("features")}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Button
                      className="w-full font-bold hover:scale-105 transition-transform"
                      size="lg"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {plan.contactNumber}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full font-bold hover:scale-105 transition-transform"
                      size="lg"
                      asChild
                    >
                      <a href={plan.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("viewDetails")}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="container mx-auto max-w-6xl px-4 pb-16">
        <Card
          className={`bg-gradient-hero text-primary-foreground transform transition-all duration-700 delay-600 hover:scale-105 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="p-8 text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold mb-2">Need Help Choosing?</h3>
            <p className="text-lg font-semibold mb-6 opacity-90">
              Our experts are here to guide you
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="font-bold hover:scale-110 transition-transform"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 1800-XXX-XXXX
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Insurance;