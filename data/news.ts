import type { BilingualText } from "@/lib/i18n/types";

export type NewsItem = {
  id: string;
  text: BilingualText;
};

export const latestNews: NewsItem[] = [
  {
    id: "n1",
    text: {
      en: "Admissions open for Session 2025–26 — LKG to Class 8",
      hi: "सत्र 2025–26 के लिए प्रवेश खुले हैं — एलकेजी से कक्षा 8",
    },
  },
  {
    id: "n2",
    text: {
      en: "Government Certified | NCERT-affiliated English medium school",
      hi: "सरकार प्रमाणित | एनसीईआरटी-संबद्ध अंग्रेजी माध्यम विद्यालय",
    },
  },
  {
    id: "n3",
    text: {
      en: "Bus pick-up & drop facility available for nearby villages",
      hi: "नजदीकी गाँवों के लिए बस पिक-अप और ड्रॉप सुविधा उपलब्ध",
    },
  },
  {
    id: "n4",
    text: {
      en: "Smart classrooms & experienced faculty for all-round development",
      hi: "सर्वांगीण विकास के लिए स्मार्ट कक्षाएँ और अनुभवी शिक्षक",
    },
  },
  {
    id: "n5",
    text: {
      en: "Contact us today for a campus visit — Mon to Sat, 8 AM to 2 PM",
      hi: "आज ही संपर्क करें campus भ्रमण के लिए — सोम से शनि, सुबह 8 से दोपहर 2 बजे",
    },
  },
];
