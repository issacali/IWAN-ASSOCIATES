export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  detail?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  designation: string;
  professionalFocus?: string;
  image: string;
  imageAlt: string;
  initials: string;
  specializations: string[];
  biography: string[];
  highlightSection: {
    title: string;
    description: string[];
  };
  education: EducationItem[];
  courts: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "rizwan-pathan",
    name: "Advocate Mr. Rizwan Pathan",
    role: "Founder",
    designation: "Advocate, Supreme Court of India",
    image: "/images/team/rizwan-pathan.jpg",
    imageAlt: "Professional portrait of Advocate Mr. Rizwan Pathan",
    initials: "RP",
    specializations: [
      "Criminal Defense and Trial Litigation",
      "White-Collar Crime",
      "CBI and Enforcement Directorate Matters",
      "Family Law and Tribunal Litigation",
      "Cybercrime and Digital Evidence",
    ],
    biography: [
      "Advocate Mr. Rizwan Pathan is a legal practitioner with specialized interests in complex litigation before the Supreme Court of India, Delhi High Court, Patiala House Courts, and various national tribunals.",
      "He completed his B.Sc. in Computer Science from Rajdhani College, University of Delhi, Raja Garden, in 2018, followed by his LL.B. from Lloyd Law College, Greater Noida, in 2021.",
    ],
    highlightSection: {
      title: "Technology Advantage",
      description: [
        "His computer science background provides an additional technical perspective in matters involving digital evidence, electronic records, cybercrime, and technology-related financial investigations.",
        "This combination of legal training and technical understanding can support the examination of complex evidence in white-collar crime matters, including proceedings involving the Central Bureau of Investigation (CBI) and Enforcement Directorate (ED).",
      ],
    },
    education: [
      {
        degree: "LL.B. (Bachelor of Laws)",
        institution: "Lloyd Law College, Greater Noida",
        year: "2021",
      },
      {
        degree: "B.Sc. in Computer Science",
        institution: "Rajdhani College, University of Delhi, Raja Garden",
        year: "2018",
      },
    ],
    courts: [
      "Supreme Court of India",
      "Delhi High Court",
      "Patiala House Courts & District Courts",
      "National Tribunals (NCLT, NGT, DRT, CAT)",
    ],
  },
  {
    id: "ibtesam-bano",
    name: "Advocate Mrs. Ibtesam Bano",
    role: "Co-Founder / Partner",
    designation: "Advocate, Supreme Court of India",
    professionalFocus: "Legal Researcher & Litigation Specialist",
    image: "/images/team/ibtesam-bano.jpg",
    imageAlt: "Professional portrait of Advocate Mrs. Ibtesam Bano",
    initials: "IB",
    specializations: [
      "Supreme Court Appellate Litigation",
      "Legal Research and Drafting",
      "Constitutional Law",
      "Family and Matrimonial Law",
      "Complex Legal Analysis",
    ],
    biography: [
      "Advocate Mrs. Ibtesam Bano brings academic depth, legal research expertise, and a strong foundation in jurisprudence to the firm's legal practice.",
      "She completed her five-year integrated B.A. LL.B. degree from North Bengal University, Siliguri, Darjeeling, in 2020, followed by her LL.M. from the same university in 2023.",
    ],
    highlightSection: {
      title: "Academic Excellence",
      description: [
        "She has qualified the UGC NET examination in Law, demonstrating advanced academic preparation in jurisprudence, constitutional frameworks, and legal principles.",
        "Her professional focus includes appellate litigation, detailed legal drafting, constitutional matters, family law, and research-driven legal analysis.",
      ],
    },
    education: [
      {
        degree: "UGC NET in Law",
        institution: "University Grants Commission",
        year: "Qualified",
        detail: "Demonstrating advanced academic mastery in jurisprudence & constitutional law",
      },
      {
        degree: "LL.M. (Master of Laws)",
        institution: "North Bengal University, Siliguri, Darjeeling",
        year: "2023",
      },
      {
        degree: "B.A. LL.B. (5-Year Integrated)",
        institution: "North Bengal University, Siliguri, Darjeeling",
        year: "2020",
      },
    ],
    courts: [
      "Supreme Court of India",
      "High Courts of India",
      "Family & District Courts",
      "Appellate Tribunals",
    ],
  },
];
