// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/supabase"],

  runtimeConfig: {
    public: {
      supabase: {
        signUp: {
          emailRedirectTo: 'http://loacalhost:3000', // can be overridden by NUXT_PUBLIC_SUPABASE_SIGN_UP_EMAIL_REDIRECT_TO environment variable
        }
      }
    }
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  }
})