import { useRef } from "react";
import { motion, useInView } from "motion/react";

const testimonials = [
  {
    name: "Camila Rodrigues",
    role: "Arquiteta, São Paulo",
    avatar: "CR",
    text: "A assinatura transformou minha abordagem com clientes que têm espaços pequenos. As soluções são práticas e os fornecedores parceiros são excelentes.",
  },
  {
    name: "Rafael Torres",
    role: "Morador, Studio 24m²",
    avatar: "RT",
    text: "Não acreditava que meu studio caberia escritório, sala de jantar e quarto. O projeto superou todas as expectativas — funcional e bonito.",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Designer de Interiores",
    avatar: "AL",
    text: "Entrei na assinatura pelo conteúdo, fiquei pela comunidade. Trocas incríveis com outros profissionais que entendem as particularidades do espaço compacto.",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#F2EDE6]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#8B7355] text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Depoimentos
          </p>
          <h2 className="font-['Playfair_Display'] text-[#1C1C1A]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            O que dizem nossos clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="font-['Playfair_Display'] text-[#C4B89A] mb-4" style={{ fontSize: "3rem", lineHeight: 1 }}>
                "
              </div>
              <p className="text-[#4A4A45] leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: "0.95rem" }}>
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8B7355] flex items-center justify-center">
                  <span className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{t.avatar}</span>
                </div>
                <div>
                  <div className="text-[#1C1C1A] text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>{t.name}</div>
                  <div className="text-[#9A9A94] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
