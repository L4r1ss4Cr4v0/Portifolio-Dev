import { Github, Linkedin, Mail, MapPin, IdCard } from "lucide-react";

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

export const skills = [
  {
    name: "React",
    color: "#61DAFB", // Azul claro da logo do React
  },
  {
    name: "TypeScript",
    color: "#3178C6", // Azul oficial do TypeScript
  },
  {
    name: "Node.js",
    color: "#339933", // Verde da logo do Node
  },
  {
    name: "AWS",
    color: "#FF9900", // Laranja da AWS
  },
  {
    name: "Python",
    color: "#3776AB", // Azul predominante do Python
  },
  {
    name: "Docker",
    color: "#2496ED", // Azul da logo do Docker
  },
];

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
    key: "cloudPlatform",
    tech: ["React", "TypeScript", "AWS", "GraphQL"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    key: "aiAnalytics",
    tech: ["Python", "TensorFlow", "React", "D3.js"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    key: "fintechApp",
    tech: ["Node.js", "React Native", "PostgreSQL"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];
