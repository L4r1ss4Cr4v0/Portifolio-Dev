import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  IdCard,
  Code2,
  Users,
  Rocket,
  Brain,
  Trophy,
  Computer,
  Laptop,
  School,
  ChevronsLeftRightEllipsis,
} from "lucide-react";

export const EMAIL = "larissacravoccamara@gmail.com";
export const LINKEDIN =
  "https://www.linkedin.com/in/larissa-cravo-carvalho-camara-santos-154b66306/";
export const GITHUB = "https://github.com/L4r1ss4Cr4v0";
export const LOCATION = "Belo Horizonte, MG, BR";

export const languages = [
  { language: "Português", flag: "br", code: "pt-br" },
  { language: "English", flag: "us", code: "en" },
  { language: "Español", flag: "es", code: "es" },
];

export const techsTagsColors = {
  React: "#61DAFB",
  TypeScript: "#3178C6",
  "Node.js": "#339933",
  Python: "#3776AB",
  Docker: "#2496ED",

  "REST APIs": "#6B7280",
  "C#": "#68217A",

  "React Native": "#61DAFB",
  Swift: "#F05138",
  Flutter: "#02569B",
  Kotlin: "#7F52FF",

  "CI/CD": "#6B7280",
  "GitHub Actions": "#2088FF",
  Vercel: "#000000",
  Netlify: "#00C7B7",

  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  ChatGPT: "#10A37F",
  OpenAI: "#000000",
  n8n: "#EA4B71",
};

export const skills = ["React", "TypeScript", "Node.js", "Python", "Docker"];

export const navItems = [
  { label: "navigation.home", href: "#home" },
  { label: "navigation.about", href: "#about" },
  { label: "navigation.projects", href: "#projects" },
  { label: "navigation.skills", href: "#skills" },
  { label: "navigation.contact", href: "#contact" },
];

export const socialLinks = [
  {
    icon: Linkedin,
    href: LINKEDIN,
    label: "LinkedIn",
  },
  { icon: Github, href: GITHUB, label: "GitHub" },
  { icon: Mail, href: EMAIL, label: "contact.email" },
];

export const contactInfo = [
  { icon: Mail, label: "contact.email", value: EMAIL },
  { icon: MapPin, label: "contact.location", value: LOCATION },
  { icon: IdCard, label: "contact.currentPosition", value: "contact.position" },
];

export const projects = [
  {
    key: "projectOne",
    tech: ["React", "TypeScript", "AWS", "GraphQL"],
    color: "from-blue-500/20 to-cyan-500/20",
    link: "",
  },
  {
    key: "projectTwo",
    tech: ["Python", "TensorFlow", "React"],
    color: "from-violet-500/20 to-purple-500/20",
    link: "",
  },
  {
    key: "projectTwo",
    tech: ["Python", "TensorFlow", "React"],
    color: "from-violet-500/20 to-purple-500/20",
    github: "https://github.com/L4r1ss4Cr4v0/CineMust",
    link: "https://cinemust.vercel.app/",
  },
  {
    key: "projectTwo",
    tech: ["Python", "TensorFlow", "React"],
    color: "from-violet-500/20 to-purple-500/20",
    link: "https://elitphoto.netlify.app/",
  },
  {
    key: "projectTwo",
    tech: ["Python", "TensorFlow", "React"],
    color: "from-violet-500/20 to-purple-500/20",
    github: "https://github.com/L4r1ss4Cr4v0/contacteiAPI.git",
  },
  {
    key: "projectThree",
    tech: ["Node.js", "React Native", "PostgreSQL"],
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://pmg-es-2026-1-ti1-0427100-structa.onrender.com",
  },
];

export const hightlights = [
  { key: "yearsExperience", icon: Code2 },
  { key: "teamLead", icon: Users },
  { key: "projectsDelivered", icon: Rocket },
  { key: "best", icon: Trophy },
];

export const experiences = [
  {
    icon: Laptop,
    key: "moderna",
    company: "Moderna Soluções",
  },
  {
    icon: School,
    key: "monitoria",
    company: "PUC Minas",
  },
  {
    icon: ChevronsLeftRightEllipsis,
    key: "guizi",
    company: "Guizi Consultoria",
  },
];
