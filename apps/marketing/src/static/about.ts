import type { IconType } from "react-icons";
import {
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FaCode, FaEnvelope, FaHandshake, FaRocket } from "react-icons/fa";
import { ClerkIcon } from '../../icons/ClerkIcon';

export type SectionId = "mission" | "tech" | "partners" | "contact";

export interface Section {
  id: SectionId;
  icon: IconType;
  title: string;
}

export const sections: Record<SectionId, Section> = {
  mission: { id: "mission", icon: FaRocket, title: "Our Mission" },
  tech:    { id: "tech",    icon: FaCode,    title: "Crafted with Precision" },
  partners:{ id: "partners",icon: FaHandshake,title: "Strategic Alliances" },
  contact: { id: "contact", icon: FaEnvelope, title: "Connect With Us" },
};

export interface TechItem {
  name: string;
  description: string;
  Icon: IconType;
  iconClassName?: string;
}

export const technologies: TechItem[] = [
  {
    name: "Next.js",
    description:
      "Enterprise-grade framework for seamless navigation and optimal performance.",
    Icon: SiNextdotjs,
  },
  {
    name: "React",
    description:
      "Dynamic interfaces that respond elegantly to user interactions.",
    Icon: SiReact,
    iconClassName: "text-blue-500",
  },
  {
    name: "MongoDB",
    description:
      "Flexible and scalable data architecture for growing content platforms.",
    Icon: SiMongodb,
    iconClassName: "text-green-500",
  },
  {
    name: "Tailwind CSS",
    description:
      "Refined aesthetics with utility-first styling for pixel-perfect designs.",
    Icon: SiTailwindcss,
    iconClassName: "text-teal-500",
  },
  {
    name: "Clerk",
    description:
      "Enterprise-level authentication with streamlined user experiences.",
    Icon: ClerkIcon,
    iconClassName: "text-blue-600",
  },
  {
    name: "Vercel",
    description:
      "Global edge network ensuring lightning-fast content delivery.",
    Icon: SiVercel,
  },
];