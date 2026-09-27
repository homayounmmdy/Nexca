import type { IconType } from "react-icons";

export interface TechItem {
  name: string;
  description: string;
  Icon: IconType;
  iconClassName?: string;
}