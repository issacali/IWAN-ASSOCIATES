export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  description: string;
  services: string[];
  iconName: "Shield" | "Briefcase" | "Users" | "Scale";
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "criminal-defense",
    number: "01",
    title: "Criminal Defense & Trial Litigation",
    description:
      "Legal assistance in criminal proceedings, with careful attention to procedural safeguards, evidentiary issues, and the protection of legal rights.",
    services: [
      "Criminal defense and trial proceedings",
      "Bail applications and related proceedings",
      "Criminal appeals",
      "Criminal writ petitions",
      "Procedural and evidentiary issues",
    ],
    iconName: "Shield",
  },
  {
    id: "white-collar-crime",
    number: "02",
    title: "White-Collar Crime & Financial Investigations",
    description:
      "Legal assistance in complex financial and white-collar crime matters, including proceedings involving investigative agencies and issues requiring detailed analysis of financial records and digital evidence.",
    services: [
      "CBI-related proceedings",
      "Enforcement Directorate (ED) matters",
      "Prevention of Money Laundering Act (PMLA) matters",
      "Financial investigation-related litigation",
      "Digital evidence and electronic records",
    ],
    iconName: "Briefcase",
  },
  {
    id: "family-matrimonial",
    number: "03",
    title: "Family & Matrimonial Law",
    description:
      "Sensitive and professional legal assistance in family disputes, with an emphasis on confidentiality, informed decision-making, and the individual circumstances of each matter.",
    services: [
      "Divorce and matrimonial disputes",
      "Domestic violence proceedings",
      "Child custody matters",
      "Maintenance proceedings",
      "Related family law litigation",
    ],
    iconName: "Users",
  },
  {
    id: "tribunal-litigation",
    number: "04",
    title: "Tribunal & Specialized Litigation",
    description:
      "Research-driven legal representation in appropriate tribunal matters, with attention to jurisdiction, procedural requirements, documentation, and available remedies.",
    services: [
      "National Company Law Tribunal (NCLT)",
      "National Green Tribunal (NGT)",
      "Debt Recovery Tribunal (DRT)",
      "Central Administrative Tribunal (CAT)",
      "Related appellate and specialized proceedings",
    ],
    iconName: "Scale",
  },
];
