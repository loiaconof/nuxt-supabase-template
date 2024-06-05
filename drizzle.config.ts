import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/src/**/schema.ts",
  out: "./drizzle/.output",
  dbCredentials: {
    host: process.env.SUPABASE_URL,
    url: process.env.DATABASE_URL,
  }
});