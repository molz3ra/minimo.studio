import { Instagram, Linkedin, Youtube } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Dicas", href: "#dicas" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const handleLink = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1C1A] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="font-['Playfair_Display'] mb-4" style={{ fontSize: "1.3rem" }}>
              mínimo.<span style={{ color: "#8B7355" }}>studio</span>
            </div>
            <p className="text-white/50 leading-relaxed text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
              Especialistas em arquitetura e design de pequenos espaços. Transformamos restrições em possibilidades.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#8B7355] hover:bg-[#8B7355]/10 transition-all duration-300"
                >
                  <Icon size={15} className="text-white/60" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/80 text-xs tracking-[0.2em] uppercase mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="text-white/50 hover:text-[#C4B89A] transition-colors text-sm"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 text-xs tracking-[0.2em] uppercase mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
              Newsletter
            </h4>
            <p className="text-white/50 text-sm mb-5" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
              Dicas semanais sobre espaços compactos direto no seu e-mail.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#8B7355] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <button
                className="bg-[#8B7355] text-white px-5 py-2 rounded-full text-sm hover:bg-[#7A6348] transition-colors flex-shrink-0"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2024 mínimo.studio — Todos os direitos reservados
          </p>
          <div className="flex gap-6">
            {["Privacidade", "Termos", "Cookies"].map((item) => (
              <button key={item} className="text-white/30 hover:text-white/60 text-xs transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
