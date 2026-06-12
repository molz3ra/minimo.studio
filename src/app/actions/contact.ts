"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nome é muito curto"),
  email: z.string().email("E-mail inválido"),
  type: z.string().min(1, "Selecione um tipo de contato"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export interface ContactFormState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    type?: string[];
    message?: string[];
  };
}

export async function submitContact(prevState: ContactFormState | null, formData: FormData): Promise<ContactFormState> {
  try {
    // Simulando delay de rede para mostrar o loading state
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      type: formData.get("type"),
      message: formData.get("message"),
    };

    const validatedData = contactSchema.parse(data);

    console.log("Novo contato recebido:", validatedData);

    return { success: true, message: "Mensagem enviada com sucesso!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "Ocorreu um erro ao enviar a mensagem." };
  }
}
