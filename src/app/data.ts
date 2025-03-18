export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
}

export interface ImpactArea {
  id: string;
  title: string;
  description: string;
  initiatives: number;
  states: string[];
}

export interface FeaturedInitiative {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  impact: string;
}

export interface NetworkStats {
  initiatives: number;
  states: number;
  beneficiaries: string;
  partners: number;
}

export interface JoinNetwork {
  title: string;
  description: string;
  benefits: string[];
  contactEmail: string;
}

export const heroSection: HeroSection = {
  title: "Indian Digital Solutions for Global Needs",
  subtitle: "Discover powerful Indian alternatives for digital services and products",
  description: "We help you find reliable Indian alternatives for cloud services, SaaS products, and digital solutions that match global standards."
};

export const impactAreas = [
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Indian cloud platforms offering storage, computing, and infrastructure solutions.",
    initiatives: 45,
    states: ["Maharashtra", "Karnataka", "Delhi", "Tamil Nadu"]
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software",
    description: "Business solutions including ERP, CRM, and workflow automation tools.",
    initiatives: 85,
    states: ["Karnataka", "Maharashtra", "Telangana", "Delhi"]
  },
  {
    id: "productivity-tools",
    title: "Productivity Tools",
    description: "Collaboration, project management, and office productivity solutions.",
    initiatives: 65,
    states: ["Karnataka", "Delhi", "Maharashtra", "Tamil Nadu"]
  },
  {
    id: "digital-infrastructure",
    title: "Digital Infrastructure",
    description: "Security, networking, and data center solutions for modern businesses.",
    initiatives: 55,
    states: ["Maharashtra", "Karnataka", "Gujarat", "Telangana"]
  }
];

export const featuredInitiatives = [
  {
    id: "zoho-workspace",
    title: "Zoho Workspace",
    location: "Tamil Nadu",
    category: "Productivity Tools",
    description: "Complete suite of online productivity and collaboration tools.",
    impact: "Serving 75M+ users globally with made-in-India software"
  },
  {
    id: "yotta-cloud",
    title: "Yotta Cloud",
    location: "Maharashtra",
    category: "Cloud Services",
    description: "Enterprise-grade cloud infrastructure and data center services.",
    impact: "Operating Asia's largest Tier IV data center facility"
  },
  {
    id: "freshworks-suite",
    title: "Freshworks Suite",
    location: "Tamil Nadu",
    category: "Enterprise Software",
    description: "Customer engagement and business software solutions.",
    impact: "Supporting 50,000+ businesses worldwide"
  }
];

export const networkStats = {
  initiatives: 250,
  states: 28,
  beneficiaries: "1M+",
  partners: 200
};

export const joinNetwork = {
  title: "List Your Digital Solution",
  description: "Showcase your Indian digital product or service to a global audience",
  benefits: [
    "Enhanced visibility to potential customers",
    "Technical partnership opportunities",
    "Market insights and analytics",
    "Connection with enterprise clients"
  ],
  contactEmail: "connect@indian-alternatives.com"
};