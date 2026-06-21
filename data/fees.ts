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
    id: "nursery",
    className: { en: "Nursery", hi: "नर्सरी" },
    admissionFee: 1500,
    tuitionFee: 4000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "hygienicCampus"],
  },
  {
    id: "kg-i",
    className: { en: "KG I", hi: "केजी I" },
    admissionFee: 1500,
    tuitionFee: 4000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "hygienicCampus"],
  },
  {
    id: "kg-ii",
    className: { en: "KG II", hi: "केजी II" },
    admissionFee: 1500,
    tuitionFee: 4000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "hygienicCampus"],
  },
  {
    id: "class1",
    className: { en: "Class 1", hi: "कक्षा 1" },
    admissionFee: 1500,
    tuitionFee: 4500,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "hygienicCampus"],
  },
  {
    id: "class2",
    className: { en: "Class 2", hi: "कक्षा 2" },
    admissionFee: 1500,
    tuitionFee: 4500,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "hygienicCampus"],
  },
  {
    id: "class3",
    className: { en: "Class 3", hi: "कक्षा 3" },
    admissionFee: 1500,
    tuitionFee: 5000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class4",
    className: { en: "Class 4", hi: "कक्षा 4" },
    admissionFee: 1500,
    tuitionFee: 5000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class5",
    className: { en: "Class 5", hi: "कक्षा 5" },
    admissionFee: 1500,
    tuitionFee: 6000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class6",
    className: { en: "Class 6", hi: "कक्षा 6" },
    admissionFee: 1500,
    tuitionFee: 6000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class7",
    className: { en: "Class 7", hi: "कक्षा 7" },
    admissionFee: 1500,
    tuitionFee: 6000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
    facilities: ["englishMedium", "qualifiedTeachers", "safeEnvironment", "busFacility", "smartClassroom", "hygienicCampus"],
  },
  {
    id: "class8",
    className: { en: "Class 8", hi: "कक्षा 8" },
    admissionFee: 1500,
    tuitionFee: 6000,
    tuitionPeriod: "annual",
    transportFee: 0,
    otherCharges: 0,
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
