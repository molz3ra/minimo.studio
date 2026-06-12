"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Dicas", href: "#dicas" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

const menuVariants = {
  closed: { 
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.2 } 
  },
  open: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
  }
};

const itemVariants = {
  closed: { opacity: 0, y: 30 },
  open: { opacity: 1, y: 0 }
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || open ? "liquid-glass shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`font-['Playfair_Display'] tracking-wide transition-colors duration-300 ${scrolled || open ? 'text-[#1C1C1A]' : 'text-white'}`}
            style={{ fontSize: "1.25rem", fontWeight: 500 }}
          >
            mínimo.<span style={{ color: scrolled || open ? "#8B7355" : "#C4B89A", transition: "color 0.3s" }}>studio</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  className={`transition-colors duration-200 text-sm tracking-wide ${scrolled || open ? 'text-[#4A4A45] hover:text-[#8B7355]' : 'text-white/80 hover:text-white'}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleLink("#planos")}
                className={`shimmer-btn px-5 py-2 rounded-full text-sm tracking-wide transition-colors duration-300 ${scrolled || open ? 'bg-[#1C1C1A] text-[#FAFAF8] hover:bg-[#8B7355]' : 'bg-white text-[#1C1C1A] hover:bg-white/90'}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Assinar
              </button>
            </li>
          </ul>

          <button
            className={`md:hidden transition-colors duration-300 ${scrolled || open ? 'text-[#1C1C1A]' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
          >
            <ul className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="font-['Playfair_Display'] text-[#1C1C1A] text-4xl hover:text-[#8B7355] transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="mt-8">
                <button
                  onClick={() => handleLink("#planos")}
                  className="shimmer-btn bg-[#1C1C1A] text-[#FAFAF8] px-10 py-4 rounded-full text-lg tracking-wide hover:bg-[#8B7355] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Assinar
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

