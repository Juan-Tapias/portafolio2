import { FaUser, FaProjectDiagram, FaCode, FaHandshake, FaEnvelope } from "react-icons/fa";

export interface HeaderItem {
  icon: React.ElementType;
}

export const headerItems: HeaderItem[] = [
  { icon: FaUser },
  { icon: FaProjectDiagram },
  { icon: FaCode },
  { icon: FaHandshake },
  { icon: FaEnvelope },
];
