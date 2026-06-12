"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const categories = ["Todos", "Studios", "Apartamentos", "Quitinetes", "Lofts"];

const projects = [
  {
    id: 1,
    title: "Studio 22m² — Pinheiros",
    category: "Studios",
    area: "22m²",
    tag: "Mobiliário Multifuncional",
    img: "https://images.unsplash.com/photo-1722942116153-ee3aa0fc2153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGFwYXJ0bWVudCUyMGludGVyaW9yJTIwbWluaW1hbGlzdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODEyNDMyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Apartamento 38m² — Vila Madalena",
    category: "Apartamentos",
    area: "38m²",
    tag: "Integração e Luz",
    img: "https://images.unsplash.com/photo-1750764611091-93ac9e7d4c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxzbWFsbCUyMGFwYXJ0bWVudCUyMGludGVyaW9yJTIwbWluaW1hbGlzdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODEyNDMyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Quitinete 18m² — Centro",
    category: "Quitinetes",
    area: "18m²",
    tag: "Armazenamento Vertical",
    img: "https://images.unsplash.com/photo-1750764700420-4dc267342dbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzbWFsbCUyMGFwYXJ0bWVudCUyMGludGVyaW9yJTIwbWluaW1hbGlzdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODEyNDMyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Loft 45m² — Itaim Bibi",
    category: "Lofts",
    area: "45m²",
    tag: "Pé-direito duplo",
    img: "https://images.unsplash.com/photo-1745429523615-2a82c60bfc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzbWFsbCUyMGFwYXJ0bWVudCUyMGludGVyaW9yJTIwbWluaW1hbGlzdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODEyNDMyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Studio 28m² — Consolação",
    category: "Studios",
    area: "28m²",
    tag: "Cozinha Compacta",
    img: "https://images.unsplash.com/photo-1750764484555-58d055fdd2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxzbWFsbCUyMGFwYXJ0bWVudCUyMGludGVyaW9yJTIwbWluaW1hbGlzdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3ODEyNDMyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Apartamento 32m² — Bela Vista",
    category: "Apartamentos",
    area: "32m²",
    tag: "Divisórias Móveis",
    img: "https://images.unsplash.com/photo-1702014857653-dcea938d51f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtdWx0aWZ1bmN0aW9uYWwlMjBmdXJuaXR1cmUlMjBzdHVkaW8lMjBhcGFydG1lbnR8ZW58MXx8fHwxNzgxMjQzMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

function ProjectImage({ project, hovered }: { project: any, hovered: boolean }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={project.img}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`object-cover transition-all duration-700 group-hover:scale-110 ${
        isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
      }`}
      onLoad={() => setIsLoading(false)}
    />
  );
}

export function Portfolio() {
  const [active, setActive] = useState("Todos");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projetos" className="py-28 bg-[#F2EDE6]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#8B7355] text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Portfólio
          </p>
          <h2 className="font-['Playfair_Display'] text-[#1C1C1A]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Projetos realizados
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all duration-300 ${
                active === cat
                  ? "bg-[#1C1C1A] text-white"
                  : "bg-white text-[#6B6B65] hover:bg-[#E8E3DC]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="overflow-hidden relative bg-[#E8E3DC]" style={{ aspectRatio: "3/4" }}>
                <ProjectImage project={project} hovered={false} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/90 via-[#1C1C1A]/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="text-[#C4B89A] text-xs tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{ fontFamily: "Inter, sans-serif" }}>
                  {project.tag}
                </span>
                <h3 className="font-['Playfair_Display'] text-white leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75" style={{ fontSize: "1.15rem" }}>
                  {project.title}
                </h3>
                <div className="flex items-center justify-between mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <span className="text-white/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    {project.area}
                  </span>
                  <div className="bg-[#8B7355] rounded-full p-2 hover:bg-white hover:text-[#8B7355] transition-colors duration-300 pointer-events-auto">
                    <ArrowUpRight size={14} className="text-current" />
                  </div>
                </div>
              </div>

              <div className="p-4 md:hidden">
                <span className="text-[#8B7355] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{project.tag}</span>
                <h3 className="font-['Playfair_Display'] text-[#1C1C1A] mt-1" style={{ fontSize: "1rem" }}>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
