import { useState, useEffect } from "react";
import { Menu, Moon, Sun, Languages, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, languages } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark';
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const nav = [
    { key: "Home", path: "/" },
    { key: "Dashboard", path: "/dashboard" },
    { key: "Training", path: "/training" },
    { key: "Insurance", path: "/insurance" },
    { key: "RiskCheck", path: "/risk-assessment" },
    { key: "Map", path: "/geo-fencing" },
    { key: "Community", path: "/community" },
    { key: "Profile", path: "/profile" },
    { key: "Login", path: "/login" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'border-b border-border bg-background/80 backdrop-blur-xl shadow-lg' 
          : 'border-b border-border/50 bg-background/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Animation */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-70"></div>
              <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                FS
              </div>
            </div>
            <span className="font-extrabold text-xl hidden sm:inline tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Farm Secure
            </span>
          </Link>

          {/* Desktop Navigation with Animations */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group px-4 py-2"
                style={{ 
                  animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <span className={`text-base font-extrabold tracking-tight transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-foreground drop-shadow-lg scale-110'
                    : 'text-foreground/90 group-hover:text-foreground group-hover:scale-105'
                }`}>
                  {t(item.key)}
                </span>
                
                {/* Animated Underline */}
                <span className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 rounded-full ${
                  isActive(item.path)
                    ? 'scale-x-100 shadow-lg shadow-primary/50'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
                
                {/* Hover Glow Effect */}
                {isActive(item.path) && (
                  <span className="absolute inset-0 bg-primary/15 rounded-lg -z-10 animate-pulse shadow-xl"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle with Animation */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 relative overflow-hidden group"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500 rotate-0 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="h-5 w-5 text-primary rotate-0 group-hover:-rotate-180 transition-transform duration-500" />
              )}
            </Button>

            {/* Language Dropdown with Animation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 relative overflow-hidden group"
                  aria-label="Change language"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Languages className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <ChevronDown className="h-3 w-3 absolute -bottom-1 -right-1 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-48 bg-card/95 backdrop-blur-xl border-border/50 shadow-xl animate-in slide-in-from-top-2 duration-300"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`font-bold cursor-pointer transition-all duration-200 ${
                      language === lang.code 
                        ? "bg-primary/20 text-primary shadow-sm" 
                        : "hover:bg-primary/10 hover:translate-x-1"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {language === lang.code && (
                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                      )}
                      {lang.nativeName}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu with Enhanced Animation */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {isSheetOpen ? (
                    <X className="h-6 w-6 rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu className="h-6 w-6 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-72 bg-background/95 backdrop-blur-xl border-l border-border/50"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 pb-6 border-b border-border/50 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                      FS
                    </div>
                    <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Farm Secure
                    </span>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
                    {nav.map((item, index) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsSheetOpen(false)}
                        className={`relative group px-4 py-3.5 rounded-lg transition-all duration-300 ${
                          isActive(item.path)
                            ? 'bg-primary/25 text-foreground shadow-lg scale-105'
                            : 'hover:bg-primary/15 hover:translate-x-2 text-foreground/90'
                        }`}
                        style={{ 
                          animation: `slideInRight 0.3s ease-out ${index * 0.05}s both`
                        }}
                      >
                        <span className="text-base font-extrabold flex items-center gap-3 tracking-tight">
                          {isActive(item.path) && (
                            <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"></span>
                          )}
                          {t(item.key)}
                        </span>
                        
                        {/* Border Animation */}
                        <span className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-primary to-primary/60 transition-all duration-300 rounded-r-full shadow-lg ${
                          isActive(item.path)
                            ? 'scale-y-100'
                            : 'scale-y-0 group-hover:scale-y-100'
                        }`}></span>
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Footer */}
                  <div className="pt-6 border-t border-border/50 mt-auto">
                    <p className="text-xs text-muted-foreground text-center">
                      © 2025 Farm Secure. All rights reserved.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};