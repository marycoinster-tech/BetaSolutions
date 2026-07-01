import type { Tool, Opportunity, Resource, NavItem, Stat, Product } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tools", href: "/tools" },
  { label: "Startups", href: "/startups" },
  { label: "Resources", href: "/resources" },
  { label: "Content", href: "/content" },
  { label: "Contact", href: "/contact" },
];

export const STATS: Stat[] = [
  { value: "4", label: "AI-Powered Tools", suffix: "+" },
  { value: "50", label: "Businesses Helped", suffix: "+" },
  { value: "100", label: "Videos Published", suffix: "+" },
  { value: "5000", label: "Community Members", suffix: "+" },
];

export const TOOLS: Tool[] = [
  {
    id: "viralforge",
    name: "ViralForgeAI",
    description: "AI-powered content generator to position your business online and drive engagement across all platforms.",
    url: "https://viral-forge-ai-seven.vercel.app/",
    icon: "🔥",
    category: "Content & Marketing",
    badge: "AI Powered",
    color: "from-orange-500/20 to-red-500/10",
  },
  {
    id: "betabook",
    name: "BetaBook",
    description: "Smart financial tracker and records system to monitor profits, losses and overall business performance.",
    url: "https://betabook-tau.vercel.app/",
    icon: "📊",
    category: "Finance & Accounting",
    badge: "Smart Finance",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    id: "omnidesk",
    name: "OmniDesk",
    description: "All-in-one task automation tool that helps teams stay organised, automate workflows and move faster.",
    url: "https://omnidesk-five.vercel.app/",
    icon: "⚡",
    category: "Automation",
    badge: "Automation",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "verolenteai",
    name: "VerolenteAI",
    description: "Cutting-edge deepfake verification and content authenticity tool to protect your brand integrity.",
    url: "https://verolenteai-silk.vercel.app/",
    icon: "🛡️",
    category: "Security & Trust",
    badge: "Verification",
    color: "from-purple-500/20 to-indigo-500/10",
  },
];

export const UTILITY_TOOLS = [
  { icon: "🏢", name: "Business Name Generator", desc: "AI-generated names for your next brand" },
  { icon: "📝", name: "Proposal Generator", desc: "Professional proposals in minutes" },
  { icon: "🧮", name: "Website Cost Calculator", desc: "Estimate your website project budget" },
  { icon: "📄", name: "Invoice Creator", desc: "Clean invoices for your clients" },
  { icon: "🗺️", name: "Business Planner", desc: "Structure your business blueprint" },
  { icon: "✅", name: "Startup Validator", desc: "Validate your idea before building" },
  { icon: "📣", name: "Marketing Planner", desc: "Build a full marketing calendar" },
  { icon: "💬", name: "WhatsApp CRM", desc: "Manage client chats like a pro" },
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "1",
    type: "idea",
    title: "Digital Agency in Nigeria",
    description: "High demand for website design and digital marketing in SME sector across Lagos and Abuja.",
    badge: "Business Idea",
    badgeColor: "blue",
  },
  {
    id: "2",
    type: "grant",
    title: "Tony Elumelu Foundation Grant",
    description: "$5,000 seed capital for African entrepreneurs. Applications open yearly for early-stage founders.",
    link: "https://tonyelumelufoundation.org",
    badge: "Grant",
    badgeColor: "green",
  },
  {
    id: "3",
    type: "startup",
    title: "Launchpad Africa Cohort",
    description: "Join a cohort of Africa's best founders. Mentorship, funding and network access.",
    badge: "Startup Program",
    badgeColor: "orange",
  },
  {
    id: "4",
    type: "remote",
    title: "Remote Sales Roles (Crypto/Tech)",
    description: "Earn in USD as a remote sales rep for global tech and Web3 companies. Skills over degree.",
    badge: "Remote Job",
    badgeColor: "cyan",
  },
  {
    id: "5",
    type: "digital",
    title: "Digital Products Business",
    description: "Sell templates, guides, courses and toolkits online with zero inventory and high margins.",
    badge: "Digital Product",
    badgeColor: "purple",
  },
  {
    id: "6",
    type: "idea",
    title: "AI Reselling & Consulting",
    description: "Resell AI tools and offer automation consulting to businesses who don't know how to use them.",
    badge: "AI Opportunity",
    badgeColor: "blue",
  },
];

export const RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Business Pitch Deck Template",
    description: "Professional 12-slide pitch deck to win investors and impress clients.",
    type: "PowerPoint",
    downloadUrl: "#",
    icon: "📊",
  },
  {
    id: "2",
    title: "Startup Business Plan",
    description: "Complete business plan framework used by funded Nigerian startups.",
    type: "PDF",
    downloadUrl: "#",
    icon: "📋",
  },
  {
    id: "3",
    title: "Invoice & Proposal Pack",
    description: "Editable invoice, proposal and quote templates for freelancers and agencies.",
    type: "Google Docs",
    downloadUrl: "#",
    icon: "📄",
  },
  {
    id: "4",
    title: "Marketing Plan Template",
    description: "90-day marketing plan to grow your business online with content and ads.",
    type: "Google Sheets",
    downloadUrl: "#",
    icon: "📣",
  },
  {
    id: "5",
    title: "Customer Persona Workbook",
    description: "Discover your ideal customer and craft messaging that converts every time.",
    type: "PDF",
    downloadUrl: "#",
    icon: "🎯",
  },
  {
    id: "6",
    title: "Business Model Canvas",
    description: "Map out your entire business model on one page. Used by top accelerators.",
    type: "PDF",
    downloadUrl: "#",
    icon: "🗂️",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "starter-toolkit",
    name: "Starter Business Toolkit",
    description: "Everything you need to launch your business from scratch. Templates, scripts, and a step-by-step action plan.",
    price: "₦4,999",
    features: [
      "Business Plan Template",
      "Pitch Deck (12 slides)",
      "Pricing Calculator Sheet",
      "Sales Script Templates",
      "Customer Persona Guide",
      "Social Media Content Calendar",
    ],
    popular: false,
  },
  {
    id: "growth-bundle",
    name: "Growth & Scale Bundle",
    description: "Advanced frameworks and tools for founders ready to scale from 6 to 7 figures.",
    price: "₦9,999",
    features: [
      "Everything in Starter",
      "AI Automation Workflows",
      "Marketing Funnel Blueprint",
      "Lead Generation Playbook",
      "30-Day Launch Plan",
      "Lifetime Updates",
    ],
    popular: true,
  },
  {
    id: "agency-pack",
    name: "Agency Starter Pack",
    description: "Launch your own digital agency with contracts, proposals, and client management systems.",
    price: "₦14,999",
    features: [
      "Client Contract Templates",
      "Agency Proposal Pack",
      "Service Pricing Guide",
      "Client Onboarding Kit",
      "Agency SOPs",
      "1-on-1 Strategy Call",
    ],
    popular: false,
  },
];

export const SOCIALS = {
  instagram: "https://www.instagram.com/silipa6354/",
  tiktok: "https://www.tiktok.com/@iam_brien",
  facebook: "https://www.facebook.com/profile.php?id=61590617897001",
  youtube: "https://www.youtube.com/@iam_brien",
  linkedin: "https://www.linkedin.com/in/victor-o-brien-236a93419/",
};

export const FLOATING_CARDS = [
  { label: "Revenue ↑", icon: "📈", color: "from-green-500/20 to-emerald-500/10" },
  { label: "AI Automation", icon: "⚡", color: "from-blue-500/20 to-cyan-500/10" },
  { label: "Website Design", icon: "🎨", color: "from-purple-500/20 to-indigo-500/10" },
  { label: "Business Systems", icon: "⚙️", color: "from-orange-500/20 to-red-500/10" },
  { label: "Marketing", icon: "📣", color: "from-pink-500/20 to-rose-500/10" },
  { label: "Lead Generation", icon: "🎯", color: "from-yellow-500/20 to-amber-500/10" },
  { label: "Growth", icon: "🚀", color: "from-blue-500/20 to-violet-500/10" },
  { label: "CRM", icon: "💬", color: "from-cyan-500/20 to-teal-500/10" },
];

export const ECOSYSTEM_NODES = [
  { id: "beta", label: "Beta", level: 0, main: true },
  { id: "education", label: "Education", level: 1 },
  { id: "community", label: "Community", level: 1 },
  { id: "tools", label: "Tools", level: 2 },
  { id: "automation", label: "Automation", level: 2 },
  { id: "growth", label: "Growth", level: 3 },
  { id: "business", label: "Business", level: 4 },
];

export const TIMELINE = [
  { year: "2024", event: "Started", desc: "Discovered the gap between Nigerian founders and the tools they need" },
  { year: "2024", event: "Learned", desc: "Dove deep into AI, automation, business systems and digital products" },
  { year: "2025", event: "Built", desc: "Launched ViralForgeAI, BetaBook, OmniDesk, and VerolenteAI" },
  { year: "2025", event: "Failed", desc: "Tried multiple things that didn't work — each failure was a lesson" },
  { year: "2025", event: "Scaled", desc: "Started helping SMEs, built community, grew content to 100+ videos" },
  { year: "Now", event: "Teaching", desc: "Sharing every framework, tool, and system openly with founders" },
];
