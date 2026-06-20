import type { BilingualText } from "@/lib/i18n/types";

export type FacultyMember = {
  id: string;
  name: BilingualText;
  designation: BilingualText;
  qualification: BilingualText;
  subjects: BilingualText;
  classes?: BilingualText;
  experience?: number;
  message?: BilingualText;
  isLeadership?: boolean;
  image?: string;
  initials: string;
};

export const leadership: FacultyMember[] = [
  {
    id: "director",
    name: { en: "Dheeraj Yadav", hi: "धीरज यादव" },
    designation: { en: "Director", hi: "निदेशक" },
    qualification: { en: "M.A., B.Ed.", hi: "एम.ए., बी.एड." },
    subjects: { en: "School Administration", hi: "स्कूल प्रशासन" },
    message: {
      en: "Our mission is to nurture every child with care, discipline, and quality education.",
      hi: "हमारा मिशन हर बच्चे को देखभाल, अनुशासन और गुणवत्तापूर्ण शिक्षा के साथ पोषण करना है।",
    },
    isLeadership: true,
    initials: "DY",
    image: "/images/faculty/director.jpg",
  },
  {
    id: "manager",
    name: { en: "Pooja Yadav", hi: "पूजा यादव" },
    designation: { en: "Manager", hi: "प्रबंधक" },
    qualification: { en: "B.Com, D.Ed.", hi: "बी.कॉम, डी.एड." },
    subjects: { en: "Operations & Administration", hi: "संचालन और प्रशासन" },
    message: {
      en: "We ensure a safe, organised, and welcoming environment for all students and parents.",
      hi: "हम सभी छात्रों और माता-पिता के लिए सुरक्षित, व्यवस्थित और स्वागत योग्य वातावरण सुनिश्चित करते हैं।",
    },
    isLeadership: true,
    initials: "PY",
    image: "/images/faculty/manager.jpg",
  },
];

export const teachingStaff: FacultyMember[] = [
  {
    id: "f1",
    name: { en: "Priya Sharma", hi: "प्रिया शर्मा" },
    designation: { en: "Senior Teacher", hi: "वरिष्ठ शिक्षक" },
    qualification: { en: "M.A., B.Ed.", hi: "एम.ए., बी.एड." },
    subjects: { en: "English", hi: "अंग्रेजी" },
    classes: { en: "Classes 6–8", hi: "कक्षा 6–8" },
    experience: 12,
    initials: "PS",
    image: "/images/faculty/f1.jpg",
  },
  {
    id: "f2",
    name: { en: "Rajesh Verma", hi: "राजेश वर्मा" },
    designation: { en: "Teacher", hi: "शिक्षक" },
    qualification: { en: "M.A., B.Ed.", hi: "एम.ए., बी.एड." },
    subjects: { en: "Hindi", hi: "हिंदी" },
    classes: { en: "Classes 1–5", hi: "कक्षा 1–5" },
    experience: 8,
    initials: "RV",
    image: "/images/faculty/f2.jpg",
  },
  {
    id: "f3",
    name: { en: "Anjali Meena", hi: "अंजली मीना" },
    designation: { en: "Teacher", hi: "शिक्षक" },
    qualification: { en: "M.Sc., B.Ed.", hi: "एम.एससी., बी.एड." },
    subjects: { en: "Mathematics", hi: "गणित" },
    classes: { en: "Classes 3–8", hi: "कक्षा 3–8" },
    experience: 10,
    initials: "AM",
    image: "/images/faculty/f3.jpg",
  },
  {
    id: "f4",
    name: { en: "Vikram Singh", hi: "विक्रम सिंह" },
    designation: { en: "Teacher", hi: "शिक्षक" },
    qualification: { en: "M.Sc., B.Ed.", hi: "एम.एससी., बी.एड." },
    subjects: { en: "Science", hi: "विज्ञान" },
    classes: { en: "Classes 4–8", hi: "कक्षा 4–8" },
    experience: 7,
    initials: "VS",
    image: "/images/faculty/f4.jpg",
  },
  {
    id: "f5",
    name: { en: "Sunita Gurjar", hi: "सुनीता गुर्जर" },
    designation: { en: "Teacher", hi: "शिक्षक" },
    qualification: { en: "M.A., B.Ed.", hi: "एम.ए., बी.एड." },
    subjects: { en: "Social Studies", hi: "सामाजिक अध्ययन" },
    classes: { en: "Classes 5–8", hi: "कक्षा 5–8" },
    experience: 9,
    initials: "SG",
    image: "/images/faculty/f5.jpg",
  },
  {
    id: "f6",
    name: { en: "Neha Tomar", hi: "नेहा तोमर" },
    designation: { en: "Teacher", hi: "शिक्षक" },
    qualification: { en: "BCA, B.Ed.", hi: "बी.सी.ए, बी.एड." },
    subjects: { en: "Computer Science", hi: "कंप्यूटर विज्ञान" },
    classes: { en: "Classes 4–8", hi: "कक्षा 4–8" },
    experience: 5,
    initials: "NT",
    image: "/images/faculty/f6.jpg",
  },
  {
    id: "f7",
    name: { en: "Kavita Bai", hi: "कविता बाई" },
    designation: { en: "Teacher", hi: "शिक्षक" },
    qualification: { en: "BFA, B.Ed.", hi: "बी.एफ.ए, बी.एड." },
    subjects: { en: "Art & Craft", hi: "कला और शिल्प" },
    classes: { en: "All Classes", hi: "सभी कक्षाएँ" },
    experience: 6,
    initials: "KB",
    image: "/images/faculty/f7.jpg",
  },
  {
    id: "f8",
    name: { en: "Ramesh Yadav", hi: "रमेश यादव" },
    designation: { en: "Teacher", hi: "शिक्षक" },
    qualification: { en: "B.P.Ed.", hi: "बी.पी.एड." },
    subjects: { en: "Physical Education", hi: "शारीरिक शिक्षा" },
    classes: { en: "All Classes", hi: "सभी कक्षाएँ" },
    experience: 4,
    initials: "RY",
    image: "/images/faculty/f8.jpg",
  },
  {
    id: "f9",
    name: { en: "Meena Kushwaha", hi: "मीना कुशवाहा" },
    designation: { en: "Primary Teacher", hi: "प्राथमिक शिक्षक" },
    qualification: { en: "B.Ed.", hi: "बी.एड." },
    subjects: { en: "All Subjects (Primary)", hi: "सभी विषय (प्राथमिक)" },
    classes: { en: "LKG – Class 2", hi: "एलकेजी – कक्षा 2" },
    experience: 11,
    initials: "MK",
    image: "/images/faculty/f9.jpg",
  },
  {
    id: "f10",
    name: { en: "Smita Lodhi", hi: "स्मिता लोधी" },
    designation: { en: "Teacher", hi: "शिक्षक" },
    qualification: { en: "M.A., B.Ed.", hi: "एम.ए., बी.एड." },
    subjects: { en: "English & EVS", hi: "अंग्रेजी और EVS" },
    classes: { en: "Classes 1–3", hi: "कक्षा 1–3" },
    experience: 6,
    initials: "SL",
    image: "/images/faculty/f10.jpg",
  },
];

export const allFaculty = [...leadership, ...teachingStaff];
