import type { BilingualText } from "@/lib/i18n/types";

export type FeeFacility =
  | "englishMedium"
  | "qualifiedTeachers"
  | "safeEnvironment"
  | "busFacility"
  | "smartClassroom"
  | "hygienicCampus";

export type ClassFee = {
  id: string;
  className: BilingualText;
  admissionFee: number;
  tuitionFee: number;
  tuitionPeriod: "monthly" | "annual";
  transportFee: number;
  otherCharges: number;
  facilities: FeeFacility[];
};

export const classFees: ClassFee[] = [
  {
    id: "lkg",
    className: { en: "LKG", hi: "एलकेजी" },
    admissionFee: 2500,
    tuitionFee: 800,
    tuitionPeriod: "monthly",
    transportFee: 500,
    otherCharges: 1500,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "hygienicCampus"],
  },
  {
    id: "ukg",
    className: { en: "UKG", hi: "यूकेजी" },
    admissionFee: 2500,
    tuitionFee: 850,
    tuitionPeriod: "monthly",
    transportFee: 500,
    otherCharges: 1600,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "hygienicCampus"],
  },
  {
    id: "class1",
    className: { en: "Class 1", hi: "कक्षा 1" },
    admissionFee: 3000,
    tuitionFee: 900,
    tuitionPeriod: "monthly",
    transportFee: 550,
    otherCharges: 1800,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "hygienicCampus"],
  },
  {
    id: "class2",
    className: { en: "Class 2", hi: "कक्षा 2" },
    admissionFee: 3000,
    tuitionFee: 900,
    tuitionPeriod: "monthly",
    transportFee: 550,
    otherCharges: 1800,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "hygienicCampus"],
  },
  {
    id: "class3",
    className: { en: "Class 3", hi: "कक्षा 3" },
    admissionFee: 3500,
    tuitionFee: 950,
    tuitionPeriod: "monthly",
    transportFee: 600,
    otherCharges: 2000,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class4",
    className: { en: "Class 4", hi: "कक्षा 4" },
    admissionFee: 3500,
    tuitionFee: 950,
    tuitionPeriod: "monthly",
    transportFee: 600,
    otherCharges: 2100,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class5",
    className: { en: "Class 5", hi: "कक्षा 5" },
    admissionFee: 4000,
    tuitionFee: 1000,
    tuitionPeriod: "monthly",
    transportFee: 650,
    otherCharges: 2200,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class6",
    className: { en: "Class 6", hi: "कक्षा 6" },
    admissionFee: 4000,
    tuitionFee: 1050,
    tuitionPeriod: "monthly",
    transportFee: 650,
    otherCharges: 2400,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class7",
    className: { en: "Class 7", hi: "कक्षा 7" },
    admissionFee: 4500,
    tuitionFee: 1100,
    tuitionPeriod: "monthly",
    transportFee: 700,
    otherCharges: 2600,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class8",
    className: { en: "Class 8", hi: "कक्षा 8" },
    admissionFee: 4500,
    tuitionFee: 1150,
    tuitionPeriod: "monthly",
    transportFee: 700,
    otherCharges: 2800,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
];

export const stats = {
  years: 5,
  students: 450,
  faculty: 12,
  passRate: 98,
};

export const classList = classFees.map((c) => c.className);
