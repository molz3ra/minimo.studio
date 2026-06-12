"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: { monthly: "R$ 79", yearly: "R$ 59" },
    sub: "/mês",
    desc: "Para arquitetos iniciando no universo dos pequenos espaços.",
    features: [
      "Acesso à biblioteca de soluções",
      "Até 10 templates por mês",
      "Newsletter semanal",
      "Comunidade exclusiva",
      "Suporte por email",
    ],
    cta: "Começar agora",
    highlight: false,
  },
  {
    name: "Profissional",
    price: { monthly: "R$ 179", yearly: "R$ 139" },
    sub: "/mês",
    desc: "Para arquitetos ativos que querem crescer com pequenos espaços.",
    features: [
      "Tudo do Essencial",
      "Templates ilimitados",
      "Fornecedores parceiros exclusivos",
      "Acesso a webinars mensais",
      "Calculadora de layouts",
      "Suporte prioritário",
    ],
    cta: "Assinar Profissional",
    highlight: true,
  },
  {
    name: "Estúdio",
    price: { monthly: "R$ 349", yearly: "R$ 279" },
    sub: "/mês",
    desc: "Para escritórios com equipe dedicada a projetos compactos.",
    features: [
      "Tudo do Profissional",
      "Até 5 usuários",
      "Projetos em co-criação",
      "Sessão mensal 1:1 com especialista",
      "White-label nos materiais",
      "API de integração",
    ],
    cta: "Falar com vendas",
    highlight: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="planos" className="py-28 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#8B7355] text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Assinatura
          </p>
          <h2 className="font-['Playfair_Display'] text-[#1C1C1A] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Planos para arquitetos
          </h2>
          <p className="text-[#6B6B65] max-w-md mx-auto mb-8" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
            Acesso a ferramentas, conteúdo e comunidade especializados em projetos compactos.
          </p>

          <div className="inline-flex items-center gap-3 bg-[#F2EDE6] rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                !yearly ? "bg-white text-[#1C1C1A] shadow-sm" : "text-[#6B6B65]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Mensal
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2 ${
                yearly ? "bg-white text-[#1C1C1A] shadow-sm" : "text-[#6B6B65]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Anual
              <span className="bg-[#8B7355] text-white text-xs px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#1C1C1A] text-white"
                  : "bg-white border border-[#E8E3DC]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B7355] text-white text-xs px-4 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif" }}>
                  Mais popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="font-['Playfair_Display'] mb-2"
                  style={{ fontSize: "1.3rem", color: plan.highlight ? "#fff" : "#1C1C1A" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm leading-snug"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, color: plan.highlight ? "rgba(255,255,255,0.6)" : "#6B6B65" }}
                >
                  {plan.desc}
                </p>
              </div>

              <div className="flex items-end gap-1 mb-8">
                <span
                  className="font-['Playfair_Display']"
                  style={{ fontSize: "2.4rem", color: plan.highlight ? "#fff" : "#1C1C1A" }}
                >
                  {yearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span
                  className="text-sm mb-2"
                  style={{ fontFamily: "Inter, sans-serif", color: plan.highlight ? "rgba(255,255,255,0.5)" : "#9A9A94" }}
                >
                  {plan.sub}
                </span>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${plan.highlight ? "bg-[#8B7355]" : "bg-[#F2EDE6]"}`}>
                      <Check size={11} className={plan.highlight ? "text-white" : "text-[#8B7355]"} />
                    </div>
                    <span
                      className="text-sm"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, color: plan.highlight ? "rgba(255,255,255,0.8)" : "#4A4A45" }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full text-sm tracking-wide transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#8B7355] text-white hover:bg-[#7A6348]"
                    : "bg-[#F2EDE6] text-[#1C1C1A] hover:bg-[#E8E3DC]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
