import { type IconType } from "react-icons";

export interface SocialMedia {
  name: string;
  link: string;
  Icon: IconType;
}

export interface FooterDataType {
  year: number;
  author: string;
  rights: string;
  social: SocialMedia[];
}

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const FooterData: FooterDataType = {
  year: new Date().getFullYear(),
  author: "Juan Martinez",
  rights: "Todos los derechos reservados.",
  social: [
    {
      name: "GitHub",
      link: "https://github.com/tuusuario",
      Icon: FaGithub,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/tuusuario",
      Icon: FaLinkedin,
    },
  ],
};
