import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "Python"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["ReactJS", "Tailwind CSS", "Boostrap", "CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "Canva"],
  },
];
