import type { BilingualText } from "@/lib/i18n/types";

export type Topper = {
  id: string;
  name: BilingualText;
  className: BilingualText;
  percentage: number;
  achievement: BilingualText;
  year: string;
  initials: string;
  image?: string;
};

export const toppers: Topper[] = [
  {
    id: "t1",
    name: { en: "Kavya Sharma", hi: "काव्या शर्मा" },
    className: { en: "Class 8", hi: "कक्षा 8" },
    percentage: 96.4,
    achievement: { en: "School Topper 2025", hi: "स्कूल टॉपर 2025" },
    year: "2025",
    initials: "KS",
    image: "/images/toppers/t1.jpg",
  },
  {
    id: "t2",
    name: { en: "Aaradhya Meena", hi: "आराध्या मीना" },
    className: { en: "Class 7", hi: "कक्षा 7" },
    percentage: 94.8,
    achievement: { en: "District Rank 1", hi: "जिला रैंक 1" },
    year: "2025",
    initials: "AM",
    image: "/images/toppers/t2.jpg",
  },
  {
    id: "t3",
    name: { en: "Riya Gurjar", hi: "रिया गुर्जर" },
    className: { en: "Class 5", hi: "कक्षा 5" },
    percentage: 93.2,
    achievement: { en: "Class Topper", hi: "कक्षा टॉपर" },
    year: "2025",
    initials: "RG",
    image: "/images/toppers/t3.jpg",
  },
  {
    id: "t4",
    name: { en: "Ananya Tomar", hi: "अनान्या तोमर" },
    className: { en: "Class 6", hi: "कक्षा 6" },
    percentage: 92.5,
    achievement: { en: "Merit Certificate", hi: "मेरिट प्रमाणपत्र" },
    year: "2025",
    initials: "AT",
    image: "/images/toppers/t4.jpg",
  },
  {
    id: "t5",
    name: { en: "Isha Kushwaha", hi: "ईशा कुशवाहा" },
    className: { en: "Class 4", hi: "कक्षा 4" },
    percentage: 91.0,
    achievement: { en: "Outstanding Performance", hi: "उत्कृष्ट प्रदर्शन" },
    year: "2024",
    initials: "IK",
    image: "/images/toppers/t5.jpg",
  },
  {
    id: "t6",
    name: { en: "Priyanka Lodhi", hi: "प्रियंका लोधी" },
    className: { en: "Class 3", hi: "कक्षा 3" },
    percentage: 90.5,
    achievement: { en: "Young Scholar Award", hi: "युवा विद्वान पुरस्कार" },
    year: "2024",
    initials: "PL",
    image: "/images/toppers/t6.jpg",
  },
  {
    id: "t7",
    name: { en: "Sakshi Yadav", hi: "साक्षी यादव" },
    className: { en: "UKG", hi: "यूकेजी" },
    percentage: 89.0,
    achievement: { en: "Best in Class", hi: "कक्षा में सर्वश्रेष्ठ" },
    year: "2024",
    initials: "SY",
    image: "/images/toppers/t7.jpg",
  },
  {
    id: "t8",
    name: { en: "Arjun Singh", hi: "अर्जुन सिंह" },
    className: { en: "Class 2", hi: "कक्षा 2" },
    percentage: 88.5,
    achievement: { en: "Academic Excellence", hi: "शैक्षणिक उत्कृष्टता" },
    year: "2024",
    initials: "AS",
    image: "/images/toppers/t8.jpg",
  },
];
