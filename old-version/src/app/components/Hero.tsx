import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1750764515068-80d222d974bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzbWFsbCUyMGFwYXJ0bWVudCUyMGludGVyaW9yJTIwbWluaW1hbGlzdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODEyNDMyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1A]/60 via-[#1C1C1A]/30 to-[#1C1C1A]/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#C4B89A] text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Arquitetura de Pequenos Espaços
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-['Playfair_Display'] text-white max-w-3xl leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400 }}
        >
          Grandes ideias para
          <br />
          <em>espaços pequenos</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/75 max-w-lg mt-6 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem", fontWeight: 300 }}
        >
          Transformamos apartamentos minúsculos e studios em lares completos, funcionais e cheios de personalidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 mt-10"
        >
          <button
            onClick={() => document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#8B7355] text-white px-8 py-3 rounded-full tracking-wide hover:bg-[#7A6348] transition-colors duration-300"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
          >
            Ver Projetos
          </button>
          <button
            onClick={() => document.querySelector("#planos")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white/60 text-white px-8 py-3 rounded-full tracking-wide hover:bg-white/10 transition-colors duration-300"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
          >
            Planos & Assinatura
          </button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>

      <div className="absolute bottom-10 right-10 text-white/50 text-xs tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
        SÃO PAULO, BR
      </div>
    </section>
  );
}
