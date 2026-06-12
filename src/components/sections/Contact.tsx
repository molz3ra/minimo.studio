"use client";
import { useRef, useActionState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(submitContact, null);

  return (
    <section id="contato" className="py-28 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#8B7355] text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Fale conosco
          </p>
          <h2 className="font-['Playfair_Display'] text-[#1C1C1A]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Vamos transformar seu espaço
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[#6B6B65] leading-relaxed mb-10" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
              Tem um projeto em mente ou quer saber mais sobre nossos serviços e planos? Entre em contato — adoramos conversar sobre espaços e possibilidades.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: "E-mail", value: "oi@minimo.studio" },
                { icon: Phone, label: "WhatsApp", value: "(11) 99999-0000" },
                { icon: MapPin, label: "Endereço", value: "Pinheiros, São Paulo — SP" },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F2EDE6] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#8B7355]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#9A9A94] mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{info.label}</div>
                      <div className="text-[#1C1C1A] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 p-6 bg-[#F2EDE6] rounded-2xl">
              <p className="text-[#4A4A45] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
                <span className="font-['Playfair_Display']" style={{ color: "#8B7355" }}>Tempo de resposta médio: </span>
                Respondemos em até 24 horas úteis. Para urgências, entre em contato via WhatsApp.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {state?.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 border border-[#E8E3DC] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#8B7355]/10 flex items-center justify-center mx-auto mb-6">
                  <Send size={24} className="text-[#8B7355]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-[#1C1C1A] mb-3" style={{ fontSize: "1.3rem" }}>
                  Mensagem enviada!
                </h3>
                <p className="text-[#6B6B65] text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </motion.div>
            ) : (
              <form action={formAction} className="bg-white rounded-2xl p-8 border border-[#E8E3DC] flex flex-col gap-5 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-[#6B6B65]" style={{ fontFamily: "Inter, sans-serif" }}>Nome</label>
                    <input
                      required
                      name="name"
                      disabled={isPending}
                      placeholder="Seu nome"
                      className="border border-[#E8E3DC] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder:text-[#C4C4BE] focus:outline-none focus:border-[#8B7355] transition-colors disabled:opacity-50"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                    {state?.errors?.name && <span className="text-red-500 text-xs">{state.errors.name[0]}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-[#6B6B65]" style={{ fontFamily: "Inter, sans-serif" }}>E-mail</label>
                    <input
                      required
                      name="email"
                      type="email"
                      disabled={isPending}
                      placeholder="seu@email.com"
                      className="border border-[#E8E3DC] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder:text-[#C4C4BE] focus:outline-none focus:border-[#8B7355] transition-colors disabled:opacity-50"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                    {state?.errors?.email && <span className="text-red-500 text-xs">{state.errors.email[0]}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#6B6B65]" style={{ fontFamily: "Inter, sans-serif" }}>Tipo de contato</label>
                  <select
                    name="type"
                    required
                    disabled={isPending}
                    className="border border-[#E8E3DC] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#8B7355] transition-colors bg-white disabled:opacity-50"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <option value="">Selecione...</option>
                    <option value="Projeto de Interiores">Projeto de Interiores</option>
                    <option value="Consultoria de Espaço">Consultoria de Espaço</option>
                    <option value="Assinatura Profissional">Assinatura Profissional</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {state?.errors?.type && <span className="text-red-500 text-xs">{state.errors.type[0]}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#6B6B65]" style={{ fontFamily: "Inter, sans-serif" }}>Mensagem</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    disabled={isPending}
                    placeholder="Conte sobre seu espaço e o que você precisa..."
                    className="border border-[#E8E3DC] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder:text-[#C4C4BE] focus:outline-none focus:border-[#8B7355] transition-colors resize-none disabled:opacity-50"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                  {state?.errors?.message && <span className="text-red-500 text-xs">{state.errors.message[0]}</span>}
                </div>

                {state?.message && !state?.success && (
                  <div className="text-red-500 text-xs mt-2 text-center">{state.message}</div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-[#1C1C1A] text-white py-3 rounded-full text-sm tracking-wide hover:bg-[#8B7355] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {isPending ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                  {isPending ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
