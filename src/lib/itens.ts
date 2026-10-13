import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  IdCard,
  Code2,
  Users,
  Rocket,
  Trophy,
  Laptop,
  School,
  ChevronsLeftRightEllipsis,
  MessageCircle,
} from "lucide-react";

export const EMAIL = "larissacravoccamara@gmail.com";
export const LINKEDIN =
  "https://www.linkedin.com/in/larissa-cravo-carvalho-camara-santos-154b66306/";
export const GITHUB = "https://github.com/L4r1ss4Cr4v0";
export const WHATSAPP =
  "https://wa.me/5531982320889?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio";
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
  { icon: MessageCircle, href: WHATSAPP, label: "Whatsapp" },
  { icon: Mail, href: EMAIL, label: "contact.email" },
];

export const contactInfo = [
  { icon: Mail, label: "contact.email", value: EMAIL },
  { icon: MapPin, label: "contact.location", value: LOCATION },
  { icon: IdCard, label: "contact.currentPosition", value: "contact.position" },
];

export const projects = [
  {
    key: "structa",
    name: "Structa",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "JSON Server",
      "Bootstrap",
      "jQuery",
    ],
    "placeholder-color": "from-emerald-500/20 to-teal-500/20",
    image: "projects/structa.png",
    link: "https://pmg-es-2026-1-ti1-0427100-structa.onrender.com",
    github: null,
  },
  {
    key: "barzero",
    name: "Barzêro",
    tech: [
      "React Native",
      "Expo",
      "Typescript",
      "Prisma",
      "SQLite",
      "React Native Geolocation",
      "React Native Camera",
    ],
    "placeholder-color": "from-violet-500/20 to-purple-500/20",
    link: null,
    image: "projects/barzero.png",
    github: "https://github.com/L4r1ss4Cr4v0/barzero",
  },
  {
    key: "weatherapp",
    name: "WeatherApp",
    tech: ["React Native", "Typescript"],
    "placeholder-color": "from-violet-500/20 to-purple-500/20",
    link: null,
    image: "projects/weather-app.jpeg",
    github: "https://github.com/L4r1ss4Cr4v0/Weather-App",
  },
  {
    key: "contacteiapi",
    name: "Contactei API",
    tech: ["TypeScript", "Node.js", "Express", "Prisma"],
    "placeholder-color": "from-violet-500/20 to-purple-500/20",
    image: "projects/contactei-api.png",
    link: null,
    github: "https://github.com/L4r1ss4Cr4v0/contacteiAPI.git",
  },
  {
    key: "elitphoto",
    name: "Elitphoto",
    tech: ["HTML", "CSS"],
    "placeholder-color": "from-violet-500/20 to-purple-500/20",
    image: "projects/elitphoto.png",
    link: "https://elitphoto.netlify.app/",
    github: null,
  },
  {
    key: "cinemust",
    name: "Cinemust",
    tech: ["HTML", "CSS", "Javascript", "JSON"],
    "placeholder-color": "from-violet-500/20 to-purple-500/20",
    image: "projects/cinemust.png",
    github: "https://github.com/L4r1ss4Cr4v0/CineMust",
    link: "https://cinemust.vercel.app/",
  },
  {
    key: "eifflelens",
    name: "Eiffle Lens",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "JSON",
      "Gemini API",
      "MongoDB",
    ],
    "placeholder-color": "from-violet-500/20 to-purple-500/20",
    link: null,
    image: null,
    github: "https://github.com/L4r1ss4Cr4v0/Eiffel-Lens",
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
