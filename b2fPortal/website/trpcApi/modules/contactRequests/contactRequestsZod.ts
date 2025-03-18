import { z } from "zod";

export const contactRequestsZodSchema = {
    create: z.object({
        firstName: z.string().max(50),
        lastName: z.string().max(50),
        email: z.string().email().max(50),
        whatsAppCountryCode: z.string().min(1).max(3),
        whatsAppNumber: z.string().min(10).max(12),
        message: z.string().max(50),
    }),
};
