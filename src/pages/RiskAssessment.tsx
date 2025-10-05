import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Fish,
  Bird,
  Loader2,
  AlertTriangle,
  CheckCircle,
  Info,
  Upload,
  Mic,
  Download,
  Send,
} from "lucide-react";

interface RiskResult {
  score: number;
  level: "low" | "medium" | "high";
  verdict: string;
  verdictHi: string;
  actions: Array<{
    priority: "immediate" | "24-72h" | "long-term";
    action: string;
    actionHi: string;
  }>;
  impact: {
    lossAvoided: number;
    affectedFarmers: number;
    spreadProbability: number;
  };
  confidence: number;
}

export default function RiskAssessment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<RiskResult | null>(null);
  const [formData, setFormData] = useState({
    location: "",
    farmType: "",
    herdSize: "",
    symptoms: [] as string[],
    biosecurity: [] as string[],
    lastVaccination: "",
    contact: "",
    language: "en",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const mockScore = Math.floor(Math.random() * 100);
      const mockResult: RiskResult = {
        score: mockScore,
        level: mockScore < 30 ? "low" : mockScore < 70 ? "medium" : "high",
        verdict: mockScore < 30 ? "Low Risk - Continue Monitoring" : mockScore < 70 ? "Medium Risk - Take Precautions" : "High Risk - Immediate Action Required",
        verdictHi: mockScore < 30 ? "कम जोखिम - निगरानी जारी रखें" : mockScore < 70 ? "मध्यम जोखिम - सावधानी बरतें" : "उच्च जोखिम - तत्काल कार्रवाई आवश्यक",
        actions: [
          {
            priority: "immediate",
            action: "Isolate affected animals",
            actionHi: "प्रभावित जानवरों को अलग करें",
          },
          {
            priority: "24-72h",
            action: "Contact veterinary officer",
            actionHi: "पशु चिकित्सा अधिकारी से संपर्क करें",
          },
          {
            priority: "long-term",
            action: "Implement biosecurity measures",
            actionHi: "जैव सुरक्षा उपाय लागू करें",
          },
        ],
        impact: {
          lossAvoided: Math.floor(Math.random() * 50000) + 10000,
          affectedFarmers: Math.floor(Math.random() * 200) + 50,
          spreadProbability: Math.floor(Math.random() * 100),
        },
        confidence: 85,
      };
      setResult(mockResult);
      setIsSubmitting(false);
    }, 2000);
  };

  const symptoms = [
    { id: "fever", label: "Fever / बुखार" },
    { id: "lethargy", label: "Lethargy / सुस्ती" },
    { id: "breathing", label: "Breathing issues / सांस की समस्या" },
    { id: "mortality", label: "Sudden mortality / अचानक मृत्यु" },
  ];

  const biosecurityPractices = [
    { id: "quarantine", label: "Quarantine new animals / नए जानवरों को अलग रखें" },
    { id: "sanitize", label: "Regular sanitization / नियमित सफाई" },
    { id: "visitors", label: "Limit visitors / आगंतुकों को सीमित करें" },
    { id: "vaccination", label: "Regular vaccination / नियमित टीकाकरण" },
  ];

  if (result) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-6 md:p-10 animate-scale-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Risk Assessment Results</h2>
              <p className="text-muted-foreground">जोखिम मूल्यांकन परिणाम</p>
            </div>

            {/* Risk Score Meter */}
            <div className="relative mb-12">
              <div className="h-48 flex items-end justify-center">
                <div className="relative w-64 h-32">
                  {/* Gauge background */}
                  <div className="absolute inset-0 rounded-t-full border-8 border-muted overflow-hidden">
                    <div className="h-full w-1/3 bg-risk-low absolute left-0" />
                    <div className="h-full w-1/3 bg-risk-medium absolute left-1/3" />
                    <div className="h-full w-1/3 bg-risk-high absolute right-0" />
                  </div>
                  
                  {/* Needle */}
                  <div
                    className="absolute bottom-0 left-1/2 origin-bottom transition-transform duration-1000 ease-out"
                    style={{
                      transform: `translateX(-50%) rotate(${-90 + (result.score * 1.8)}deg)`,
                    }}
                  >
                    <div className="w-1 h-28 bg-foreground rounded-full shadow-lg" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full shadow-lg" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <div className="text-5xl font-bold mb-2">{result.score}</div>
                <div className={`text-xl font-semibold mb-1 ${
                  result.level === "low" ? "text-risk-low" :
                  result.level === "medium" ? "text-risk-medium" :
                  "text-risk-high"
                }`}>
                  {result.verdict}
                </div>
                <div className="text-sm text-muted-foreground">{result.verdictHi}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Suggested Actions / सुझाए गए कार्य</h3>
              <div className="space-y-3">
                {result.actions.map((action, idx) => (
                  <Card
                    key={idx}
                    className={`p-4 border-l-4 ${
                      action.priority === "immediate"
                        ? "border-l-risk-high bg-risk-high/5"
                        : action.priority === "24-72h"
                        ? "border-l-risk-medium bg-risk-medium/5"
                        : "border-l-risk-low bg-risk-low/5"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {action.priority === "immediate" ? (
                        <AlertTriangle className="h-5 w-5 text-risk-high mt-1" />
                      ) : action.priority === "24-72h" ? (
                        <Info className="h-5 w-5 text-risk-medium mt-1" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-risk-low mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="font-semibold">{action.action}</div>
                        <div className="text-sm text-muted-foreground">{action.actionHi}</div>
                      </div>
                      <Button size="sm" variant="outline">
                        Acknowledge
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Impact Estimates */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Impact Estimates / प्रभाव अनुमान</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    ₹{(result.impact.lossAvoided / 1000).toFixed(1)}K
                  </div>
                  <div className="text-sm text-muted-foreground">Loss Avoided / नुकसान बचा</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {result.impact.affectedFarmers}
                  </div>
                  <div className="text-sm text-muted-foreground">Affected Farmers / प्रभावित किसान</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    {result.impact.spreadProbability}%
                  </div>
                  <div className="text-sm text-muted-foreground">Spread Probability / फैलने की संभावना</div>
                </Card>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" variant="default">
                <Download className="h-5 w-5 mr-2" />
                Download Report / रिपोर्ट डाउनलोड करें
              </Button>
              <Button className="flex-1" variant="secondary">
                <Send className="h-5 w-5 mr-2" />
                Send to Authority / अधिकारी को भेजें
              </Button>
              <Button
                variant="outline"
                onClick={() => setResult(null)}
              >
                New Assessment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Risk Assessment / जोखिम मूल्यांकन
          </h1>
          <p className="text-muted-foreground">
            Fill in the details below to assess your farm's biosecurity risk
          </p>
          <p className="text-sm text-muted-foreground">
            अपने खेत के जैव सुरक्षा जोखिम का आकलन करने के लिए नीचे विवरण भरें
          </p>
        </div>

        <Card className="p-6 md:p-8 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Farm Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-base font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Farm Location / खेत का स्थान
              </Label>
              <Input
                id="location"
                placeholder="Enter district or use current location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                className="h-12 text-base"
              />
            </div>

            {/* Farm Type */}
            <div className="space-y-2">
              <Label htmlFor="farmType" className="text-base font-semibold flex items-center gap-2">
                <Fish className="h-5 w-5 text-primary" />
                Farm Type / खेत का प्रकार
              </Label>
              <Select
                value={formData.farmType}
                onValueChange={(value) => setFormData({ ...formData, farmType: value })}
                required
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Select farm type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pond">Pond / तालाब</SelectItem>
                  <SelectItem value="poultry">Poultry / मुर्गी पालन</SelectItem>
                  <SelectItem value="dairy">Dairy / डेयरी</SelectItem>
                  <SelectItem value="mixed">Mixed / मिश्रित</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Herd Size */}
            <div className="space-y-2">
              <Label htmlFor="herdSize" className="text-base font-semibold flex items-center gap-2">
                <Bird className="h-5 w-5 text-primary" />
                Herd/Stock Size / झुंड/स्टॉक का आकार
              </Label>
              <Input
                id="herdSize"
                type="number"
                placeholder="Number of animals"
                value={formData.herdSize}
                onChange={(e) => setFormData({ ...formData, herdSize: e.target.value })}
                required
                className="h-12 text-base"
              />
            </div>

            {/* Recent Symptoms */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Recent Symptoms / हाल के लक्षण
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {symptoms.map((symptom) => (
                  <label
                    key={symptom.id}
                    className="flex items-center gap-3 p-3 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-colors"
                  >
                    <Checkbox
                      id={symptom.id}
                      checked={formData.symptoms.includes(symptom.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({
                            ...formData,
                            symptoms: [...formData.symptoms, symptom.id],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            symptoms: formData.symptoms.filter((s) => s !== symptom.id),
                          });
                        }
                      }}
                    />
                    <span className="text-sm font-medium">{symptom.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Biosecurity Practices */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Biosecurity Practices / जैव सुरक्षा प्रथाएं
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {biosecurityPractices.map((practice) => (
                  <label
                    key={practice.id}
                    className="flex items-center gap-3 p-3 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-colors"
                  >
                    <Checkbox
                      id={practice.id}
                      checked={formData.biosecurity.includes(practice.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({
                            ...formData,
                            biosecurity: [...formData.biosecurity, practice.id],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            biosecurity: formData.biosecurity.filter((b) => b !== practice.id),
                          });
                        }
                      }}
                    />
                    <span className="text-sm font-medium">{practice.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Number */}
            <div className="space-y-2">
              <Label htmlFor="contact" className="text-base font-semibold">
                Contact Number / संपर्क नंबर
              </Label>
              <Input
                id="contact"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
                className="h-12 text-base"
              />
            </div>

            {/* Photo/Voice Upload */}
            <div className="grid md:grid-cols-2 gap-4">
              <Button type="button" variant="outline" className="h-14">
                <Upload className="h-5 w-5 mr-2" />
                Upload Photo / फोटो अपलोड करें
              </Button>
              <Button type="button" variant="outline" className="h-14">
                <Mic className="h-5 w-5 mr-2" />
                Voice Note / आवाज नोट
              </Button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Analyzing Risk... / विश्लेषण कर रहे हैं...
                </>
              ) : (
                "Run Risk Assessment / जोखिम जाँच चलाएं"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
