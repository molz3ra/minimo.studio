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
              <form action={formAction} className="bg-white rounded-2xl p-8 border border-[#E8E3DC] flex flex-col gap-6 relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="relative flex flex-col"
                    animate={state?.errors?.name ? { x: [-5, 5, -5, 5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      id="name"
                      required
                      name="name"
                      disabled={isPending}
                      placeholder=" "
                      className={`peer border rounded-xl px-4 pt-5 pb-2 text-sm text-[#1C1C1A] placeholder-transparent focus:outline-none transition-colors disabled:opacity-50 ${state?.errors?.name ? 'border-red-500' : 'border-[#E8E3DC] focus:border-[#8B7355]'}`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-4 top-2 text-[10px] text-[#9A9A94] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#8B7355] pointer-events-none"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Nome
                    </label>
                    {state?.errors?.name && <span className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{state.errors.name[0]}</span>}
                  </motion.div>

                  <motion.div 
                    className="relative flex flex-col"
                    animate={state?.errors?.email ? { x: [-5, 5, -5, 5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      id="email"
                      required
                      name="email"
                      type="email"
                      disabled={isPending}
                      placeholder=" "
                      className={`peer border rounded-xl px-4 pt-5 pb-2 text-sm text-[#1C1C1A] placeholder-transparent focus:outline-none transition-colors disabled:opacity-50 ${state?.errors?.email ? 'border-red-500' : 'border-[#E8E3DC] focus:border-[#8B7355]'}`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-4 top-2 text-[10px] text-[#9A9A94] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#8B7355] pointer-events-none"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      E-mail
                    </label>
                    {state?.errors?.email && <span className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{state.errors.email[0]}</span>}
                  </motion.div>
                </div>

                <motion.div 
                  className="relative flex flex-col mt-1"
                  animate={state?.errors?.type ? { x: [-5, 5, -5, 5, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <select
                    id="type"
                    name="type"
                    required
                    defaultValue=""
                    disabled={isPending}
                    className={`peer border rounded-xl px-4 pt-5 pb-2 text-sm text-[#1C1C1A] focus:outline-none transition-colors bg-white disabled:opacity-50 appearance-none ${state?.errors?.type ? 'border-red-500' : 'border-[#E8E3DC] focus:border-[#8B7355]'}`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <option value="" disabled hidden></option>
                    <option value="Projeto de Interiores">Projeto de Interiores</option>
                    <option value="Consultoria de Espaço">Consultoria de Espaço</option>
                    <option value="Assinatura Profissional">Assinatura Profissional</option>
                    <option value="Outro">Outro</option>
                  </select>
                  <label 
                    htmlFor="type" 
                    className="absolute left-4 top-2 text-[10px] text-[#9A9A94] transition-all pointer-events-none"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Tipo de contato
                  </label>
                  {state?.errors?.type && <span className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{state.errors.type[0]}</span>}
                </motion.div>

                <motion.div 
                  className="relative flex flex-col mt-1"
                  animate={state?.errors?.message ? { x: [-5, 5, -5, 5, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <textarea
                    id="message"
                    required
                    name="message"
                    rows={4}
                    disabled={isPending}
                    placeholder=" "
                    className={`peer border rounded-xl px-4 pt-6 pb-3 text-sm text-[#1C1C1A] placeholder-transparent focus:outline-none transition-colors resize-none disabled:opacity-50 ${state?.errors?.message ? 'border-red-500' : 'border-[#E8E3DC] focus:border-[#8B7355]'}`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute left-4 top-3 text-[10px] text-[#9A9A94] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-[#8B7355] pointer-events-none"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Mensagem
                  </label>
                  {state?.errors?.message && <span className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{state.errors.message[0]}</span>}
                </motion.div>

                {state?.message && !state?.success && (
                  <div className="text-red-500 text-xs mt-2 text-center font-medium">{state.message}</div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-2 bg-[#1C1C1A] text-white py-4 rounded-full tracking-wide hover:bg-[#8B7355] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 shimmer-btn"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
                >
                  {isPending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
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
