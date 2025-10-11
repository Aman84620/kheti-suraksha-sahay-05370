import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'bn' | 'te' | 'mr' | 'ta' | 'gu' | 'kn';

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
] as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    training: "Training",
    riskCheck: "Risk Check",
    map: "Map",
    community: "Community",
    support: "Support",
    profile: "Profile",
    insurance: "Insurance",
    
    // Insurance Page
    insuranceTitle: "Animal Health Insurance",
    insuranceSubtitle: "Compare and choose the best insurance for your livestock",
    compareInsurance: "Compare Insurance Plans",
    coverage: "Coverage",
    premium: "Premium/Year",
    features: "Features",
    viewDetails: "View Details",
    buyNow: "Buy Now",
    cattle: "Cattle",
    buffalo: "Buffalo",
    goat: "Goat/Sheep",
    poultry: "Poultry",
    selectAnimal: "Select Animal Type",
  },
  hi: {
    home: "होम",
    dashboard: "डैशबोर्ड",
    training: "प्रशिक्षण",
    riskCheck: "जोखिम जाँच",
    map: "नक्शा",
    community: "समुदाय",
    support: "सहायता",
    profile: "प्रोफ़ाइल",
    insurance: "बीमा",
    
    insuranceTitle: "पशु स्वास्थ्य बीमा",
    insuranceSubtitle: "अपने पशुओं के लिए सर्वोत्तम बीमा की तुलना करें और चुनें",
    compareInsurance: "बीमा योजनाओं की तुलना करें",
    coverage: "कवरेज",
    premium: "प्रीमियम/वर्ष",
    features: "सुविधाएँ",
    viewDetails: "विवरण देखें",
    buyNow: "अभी खरीदें",
    cattle: "गाय",
    buffalo: "भैंस",
    goat: "बकरी/भेड़",
    poultry: "मुर्गी पालन",
    selectAnimal: "पशु प्रकार चुनें",
  },
  bn: {
    home: "হোম",
    dashboard: "ড্যাশবোর্ড",
    training: "প্রশিক্ষণ",
    riskCheck: "ঝুঁকি পরীক্ষা",
    map: "মানচিত্র",
    community: "সম্প্রদায়",
    support: "সহায়তা",
    profile: "প্রোফাইল",
    insurance: "বীমা",
    
    insuranceTitle: "পশু স্বাস্থ্য বীমা",
    insuranceSubtitle: "আপনার পশুর জন্য সেরা বীমা তুলনা করুন এবং চয়ন করুন",
    compareInsurance: "বীমা পরিকল্পনা তুলনা করুন",
    coverage: "কভারেজ",
    premium: "প্রিমিয়াম/বছর",
    features: "বৈশিষ্ট্য",
    viewDetails: "বিস্তারিত দেখুন",
    buyNow: "এখনই কিনুন",
    cattle: "গরু",
    buffalo: "মহিষ",
    goat: "ছাগল/ভেড়া",
    poultry: "পোল্ট্রি",
    selectAnimal: "পশুর ধরন নির্বাচন করুন",
  },
  te: {
    home: "హోమ్",
    dashboard: "డాష్‌బోర్డ్",
    training: "శిక్షణ",
    riskCheck: "ప్రమాద తనిఖీ",
    map: "మ్యాప్",
    community: "కమ్యూనిటీ",
    support: "మద్దతు",
    profile: "ప్రొఫైల్",
    insurance: "భీమా",
    
    insuranceTitle: "పశు ఆరోగ్య భీమా",
    insuranceSubtitle: "మీ పశువుల కోసం ఉత్తమ భీమాను పోల్చండి మరియు ఎంచుకోండి",
    compareInsurance: "భీమా ప్రణాళికలను పోల్చండి",
    coverage: "కవరేజ్",
    premium: "ప్రీమియం/సంవత్సరం",
    features: "ఫీచర్లు",
    viewDetails: "వివరాలు చూడండి",
    buyNow: "ఇప్పుడే కొనండి",
    cattle: "ఆవు",
    buffalo: "గేదె",
    goat: "మేక/గొర్రె",
    poultry: "పౌల్ట్రీ",
    selectAnimal: "పశు రకాన్ని ఎంచుకోండి",
  },
  mr: {
    home: "होम",
    dashboard: "डॅशबोर्ड",
    training: "प्रशिक्षण",
    riskCheck: "जोखीम तपासणी",
    map: "नकाशा",
    community: "समुदाय",
    support: "समर्थन",
    profile: "प्रोफाइल",
    insurance: "विमा",
    
    insuranceTitle: "पशु आरोग्य विमा",
    insuranceSubtitle: "आपल्या पशुधनासाठी सर्वोत्तम विम्याची तुलना करा आणि निवडा",
    compareInsurance: "विमा योजनांची तुलना करा",
    coverage: "कव्हरेज",
    premium: "प्रीमियम/वर्ष",
    features: "वैशिष्ट्ये",
    viewDetails: "तपशील पहा",
    buyNow: "आता खरेदी करा",
    cattle: "गाय",
    buffalo: "म्हैस",
    goat: "बकरी/मेंढी",
    poultry: "कुक्कुटपालन",
    selectAnimal: "पशू प्रकार निवडा",
  },
  ta: {
    home: "முகப்பு",
    dashboard: "டாஷ்போர்டு",
    training: "பயிற்சி",
    riskCheck: "இடர் சோதனை",
    map: "வரைபடம்",
    community: "சமூகம்",
    support: "ஆதரவு",
    profile: "சுயவிவரம்",
    insurance: "காப்பீடு",
    
    insuranceTitle: "விலங்கு சுகாதார காப்பீடு",
    insuranceSubtitle: "உங்கள் கால்நடைகளுக்கு சிறந்த காப்பீட்டை ஒப்பிட்டு தேர்வு செய்யுங்கள்",
    compareInsurance: "காப்பீட்டு திட்டங்களை ஒப்பிடுக",
    coverage: "கவரேஜ்",
    premium: "பிரீமியம்/ஆண்டு",
    features: "அம்சங்கள்",
    viewDetails: "விவரங்களைக் காண்க",
    buyNow: "இப்போது வாங்கவும்",
    cattle: "மாடு",
    buffalo: "எருமை",
    goat: "ஆடு/செம்மறி",
    poultry: "கோழி வளர்ப்பு",
    selectAnimal: "விலங்கு வகையைத் தேர்ந்தெடுக்கவும்",
  },
  gu: {
    home: "હોમ",
    dashboard: "ડેશબોર્ડ",
    training: "તાલીમ",
    riskCheck: "જોખમ તપાસ",
    map: "નકશો",
    community: "સમુદાય",
    support: "સપોર્ટ",
    profile: "પ્રોફાઇલ",
    insurance: "વીમો",
    
    insuranceTitle: "પશુ આરોગ્ય વીમો",
    insuranceSubtitle: "તમારા પશુધન માટે શ્રેષ્ઠ વીમાની તુલના કરો અને પસંદ કરો",
    compareInsurance: "વીમા યોજનાઓની તુલના કરો",
    coverage: "કવરેજ",
    premium: "પ્રીમિયમ/વર્ષ",
    features: "સુવિધાઓ",
    viewDetails: "વિગતો જુઓ",
    buyNow: "હવે ખરીદો",
    cattle: "ગાય",
    buffalo: "ભેંસ",
    goat: "બકરી/ઘેટાં",
    poultry: "મરઘાં પાલન",
    selectAnimal: "પશુ પ્રકાર પસંદ કરો",
  },
  kn: {
    home: "ಹೋಮ್",
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    training: "ತರಬೇತಿ",
    riskCheck: "ಅಪಾಯ ಪರಿಶೀಲನೆ",
    map: "ನಕ್ಷೆ",
    community: "ಸಮುದಾಯ",
    support: "ಬೆಂಬಲ",
    profile: "ಪ್ರೊಫೈಲ್",
    insurance: "ವಿಮೆ",
    
    insuranceTitle: "ಪಶು ಆರೋಗ್ಯ ವಿಮೆ",
    insuranceSubtitle: "ನಿಮ್ಮ ಜಾನುವಾರುಗಳಿಗೆ ಉತ್ತಮ ವಿಮೆಯನ್ನು ಹೋಲಿಸಿ ಮತ್ತು ಆಯ್ಕೆಮಾಡಿ",
    compareInsurance: "ವಿಮಾ ಯೋಜನೆಗಳನ್ನು ಹೋಲಿಸಿ",
    coverage: "ಕವರೇಜ್",
    premium: "ಪ್ರೀಮಿಯಂ/ವರ್ಷ",
    features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
    viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    buyNow: "ಈಗ ಖರೀದಿಸಿ",
    cattle: "ಹಸು",
    buffalo: "ಎಮ್ಮೆ",
    goat: "ಮೇಕೆ/ಕುರಿ",
    poultry: "ಕೋಳಿ ಸಾಕಣೆ",
    selectAnimal: "ಪ್ರಾಣಿ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && languages.some(l => l.code === saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};