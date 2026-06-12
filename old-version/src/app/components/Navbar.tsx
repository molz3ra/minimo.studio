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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-['Playfair_Display'] text-[#1C1C1A] tracking-wide"
          style={{ fontSize: "1.25rem", fontWeight: 500 }}
        >
          mínimo.<span style={{ color: "#8B7355" }}>studio</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className="text-[#4A4A45] hover:text-[#8B7355] transition-colors duration-200 text-sm tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleLink("#planos")}
              className="bg-[#1C1C1A] text-[#FAFAF8] px-5 py-2 rounded-full text-sm tracking-wide hover:bg-[#8B7355] transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Assinar
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-[#1C1C1A]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#FAFAF8] border-t border-[#E8E3DC] md:hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="text-[#4A4A45] hover:text-[#8B7355] transition-colors text-sm tracking-wide w-full text-left"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLink("#planos")}
                  className="bg-[#1C1C1A] text-[#FAFAF8] px-5 py-2 rounded-full text-sm tracking-wide w-full"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Assinar
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
