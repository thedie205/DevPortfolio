import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // اختياري أثناء التطوير
    RESEND_API_KEY: z.string().min(1).optional(),
  },

  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
  },

  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  onValidationError(error) {
    console.error(error);
    throw new Error("Invalid environment variables");
  },
});