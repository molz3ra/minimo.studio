import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Lightbulb, ArrowRight } from "lucide-react";

const tips = [
  {
    number: "01",
    title: "Aposte no vertical",
    desc: "Prateleiras e armários do chão ao teto criam armazenamento sem consumir área de piso. Use a altura a seu favor.",
    tag: "Armazenamento",
  },
  {
    number: "02",
    title: "Espelhos ampliam tudo",
    desc: "Um espelho estrategicamente posicionado dobra a percepção de profundidade. Prefira painéis amplos a espelhos pequenos.",
    tag: "Percepção espacial",
  },
  {
    number: "03",
    title: "Paleta monocromática",
    desc: "Usar a mesma família de cores em paredes, móveis e têxteis elimina cortes visuais e faz o ambiente parecer maior.",
    tag: "Cor e luz",
  },
  {
    number: "04",
    title: "Móveis com pés criam leveza",
    desc: "Móveis suspensos ou com pés visíveis deixam o chão à mostra, gerando sensação de mais espaço e facilidade para limpeza.",
    tag: "Mobiliário",
  },
  {
    number: "05",
    title: "Zona por função",
    desc: "Defina zonas claras (dormir, trabalhar, comer) mesmo sem paredes. Use tapetes, iluminação e posicionamento para delimitar.",
    tag: "Layout",
  },
  {
    number: "06",
    title: "Cortinas do chão ao teto",
    desc: "Cortinas altas e compridas alongam visualmente o pé-direito e fazem a janela parecer maior do que é.",
    tag: "Janelas e luz",
  },
];

export function Tips() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dicas" className="py-28 bg-[#1C1C1A]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-[#8B7355] text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Dicas práticas
            </p>
            <h2 className="font-['Playfair_Display'] text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Transforme seu espaço
              <br />
              <em>agora mesmo</em>
            </h2>
          </div>
          <p className="text-white/50 max-w-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: "0.9rem" }}>
            Dicas gratuitas para quem quer extrair o máximo do seu apartamento compacto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="group bg-[#262620] rounded-2xl p-7 border border-white/5 hover:border-[#8B7355]/40 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="font-['Playfair_Display'] text-[#8B7355]/60" style={{ fontSize: "2rem" }}>
                  {tip.number}
                </span>
                <span className="bg-[#8B7355]/15 text-[#C4B89A] text-xs px-3 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif" }}>
                  {tip.tag}
                </span>
              </div>
              <h3 className="font-['Playfair_Display'] text-white mb-3" style={{ fontSize: "1.1rem" }}>
                {tip.title}
              </h3>
              <p className="text-white/50 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: "0.9rem" }}>
                {tip.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center mt-14"
        >
          <button
            className="flex items-center gap-3 border border-[#8B7355]/50 text-[#C4B89A] px-8 py-3 rounded-full hover:bg-[#8B7355]/10 transition-colors duration-300"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
          >
            <Lightbulb size={16} />
            Ver todas as dicas no blog
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
