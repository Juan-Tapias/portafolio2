import type { ContactoInterface } from "../../interfaces/contacto/ContactoInterface";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactoData: ContactoInterface[] = [
    {
    Icon: FaGithub,
    title: "GitHub",
    link: "https://github.com/Juan-Tapias"
    },
    {
    Icon: FaLinkedin,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/juanmartinezt/"
    },
    {
    Icon: MdEmail,
    title: "Correo",
    link: "mailto:tuemail@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola%20Juan%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo."
    },
    {
    Icon: FaDiscord,
    title: "Discord",
    link: "https://discord.com/users/936443212518793266"
    },
]