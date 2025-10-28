import type { JSX } from "react";
import { FooterData } from "../../data/piePagina/piePagina";
import { motion } from "framer-motion";

export const Footer = (): JSX.Element => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mt-20 py-8 px-6 bg-transparent backdrop-blur-lg border-t border-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
      style={{ boxShadow: "0 0 15px rgba(128, 0, 255, 0.4)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
        <div className="text-white text-center md:text-left font-semibold tracking-wide text-lg">
          <span className="mr-2">&copy; {FooterData.year}</span>
          <span>{FooterData.author}</span>
          <span className="mx-3 text-purple-400">•</span>
          <span>{FooterData.rights}</span>
        </div>
        <div className="flex gap-8">
          {FooterData.social.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-gray-300 text-3xl transition-transform transition-colors duration-300 hover:text-purple-400 hover:scale-110"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </motion.footer>
  );
};
