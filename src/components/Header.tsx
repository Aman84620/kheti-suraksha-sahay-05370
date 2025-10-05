import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export const Header = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const nav = [
    { en: "Home", hi: "होम", path: "/" },
    { en: "Risk Check", hi: "जोखिम जाँच", path: "/risk-assessment" },
    { en: "Map", hi: "नक्शा", path: "/geo-fencing" },
    { en: "Community", hi: "समुदाय", path: "/community" },
    { en: "Support", hi: "सहायता", path: "/support" },
    { en: "Profile", hi: "प्रोफ़ाइल", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md">
              BS
            </div>
            <span className="font-bold text-lg hidden sm:inline">
              {language === "en" ? "BioSecure India" : "बायोसिक्योर इंडिया"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {language === "en" ? item.en : item.hi}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
              aria-label="Change language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-semibold">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {nav.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border"
                    >
                      {language === "en" ? item.en : item.hi}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
