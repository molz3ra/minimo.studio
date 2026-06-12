import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { LayoutGrid, Sofa, BookOpen, Users } from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Projeto de Interiores",
    desc: "Desenvolvemos o projeto completo do seu espaço, desde o layout até os detalhes de acabamento, com foco em funcionalidade e beleza.",
    detail: "Inclui: planta humanizada, moodboard, projeto executivo e acompanhamento de obra.",
  },
  {
    icon: Sofa,
    title: "Mobiliário Multifuncional",
    desc: "Criamos e indicamos soluções de móveis que transformam um cômodo em múltiplos ambientes — cama vira sofá, mesa esconde-esconde, estantes-divisórias.",
    detail: "Inclui: briefing de necessidades, especificação de fornecedores e layout 3D.",
  },
  {
    icon: BookOpen,
    title: "Consultoria de Espaço",
    desc: "Sessão de consultoria focada para otimizar seu espaço atual sem necessidade de obra: reorganização, paleta, iluminação e dicas práticas.",
    detail: "Ideal para quem quer melhorar sem reformar. Duração: 2 horas.",
  },
  {
    icon: Users,
    title: "Assinatura para Arquitetos",
    desc: "Plataforma exclusiva para profissionais: biblioteca de soluções, fornecedores parceiros, templates de projetos e comunidade especializada.",
    detail: "Planos mensais e anuais com diferentes níveis de acesso.",
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-28 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#8B7355] text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            O que fazemos
          </p>
          <h2 className="font-['Playfair_Display'] text-[#1C1C1A]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Nossos serviços
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group bg-white rounded-2xl p-8 border border-[#E8E3DC] hover:border-[#C4B89A] transition-all duration-300 hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F2EDE6] flex items-center justify-center mb-6 group-hover:bg-[#8B7355] transition-colors duration-300">
                  <Icon size={20} className="text-[#8B7355] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-['Playfair_Display'] text-[#1C1C1A] mb-3" style={{ fontSize: "1.2rem" }}>
                  {svc.title}
                </h3>
                <p className="text-[#6B6B65] leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: "0.95rem" }}>
                  {svc.desc}
                </p>
                <p className="text-[#9A9A94] text-xs leading-relaxed border-t border-[#E8E3DC] pt-4 mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {svc.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
