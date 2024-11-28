import { z } from 'zod';

const envSchema = z.object({
  VITE_AUTH0_DOMAIN: z.string().optional(),
  VITE_AUTH0_CLIENT_ID: z.string().optional(),
  VITE_API_URL: z.string().optional(),
});

export function validateEnv() {
  const result = envSchema.safeParse(import.meta.env);
  
  if (!result.success) {
    console.warn('Environment variables not fully configured:', result.error.errors);
    return false;
  }
  return true;
}