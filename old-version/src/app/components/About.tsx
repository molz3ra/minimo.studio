import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { number: "180+", label: "Projetos entregues" },
  { number: "15m²", label: "Menor espaço projetado" },
  { number: "8 anos", label: "De especialização" },
  { number: "97%", label: "Clientes satisfeitos" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-28 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8B7355] text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Quem somos
            </p>
            <h2 className="font-['Playfair_Display'] text-[#1C1C1A] mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Acreditamos que todo
              <br />
              <em>espaço tem potencial</em>
            </h2>
            <p className="text-[#6B6B65] leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
              Somos um estúdio especializado em arquitetura e design de pequenos espaços. Há 8 anos transformamos apartamentos compactos, studios e quitinetes em ambientes funcionais, bonitos e com identidade própria.
            </p>
            <p className="text-[#6B6B65] leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
              Cada projeto é desenvolvido com atenção às necessidades reais do morador: mobiliário multifuncional, soluções sob medida e um olhar cuidadoso para circulação, luz e armazenamento.
            </p>

            <div className="mt-10 flex gap-8 flex-wrap">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <div className="font-['Playfair_Display'] text-[#8B7355]" style={{ fontSize: "1.8rem" }}>
                    {stat.number}
                  </div>
                  <div className="text-[#9A9A94] text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1608303588026-884930af2559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMHN0dWRpbyUyMHRlYW18ZW58MXx8fHwxNzgxMjQzMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipe mínimo.studio trabalhando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#8B7355] text-white p-6 rounded-xl max-w-[200px]" style={{ fontFamily: "Inter, sans-serif" }}>
              <div className="font-['Playfair_Display'] text-2xl mb-1">∞</div>
              <div className="text-xs leading-snug opacity-90">Soluções sob medida para cada espaço</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
