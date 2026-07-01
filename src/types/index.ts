export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  badge?: string;
  color: string;
}

export interface Opportunity {
  id: string;
  type: "idea" | "grant" | "remote" | "startup" | "digital";
  title: string;
  description: string;
  link?: string;
  badge: string;
  badgeColor: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  downloadUrl: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}
