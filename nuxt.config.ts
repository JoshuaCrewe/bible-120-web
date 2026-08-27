import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      titleTemplate: "Bible 120",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Read the whole bible in 120 days",
        },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/icons/favicon-32.png",
        },
        { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/color-mode", "@vite-pwa/nuxt"],
  colorMode: {
    classSuffix: "",
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Bible 120",
      short_name: "Bible 120",
      description: "Read the whole bible in 120 days",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/",
      icons: [
        { src: "/icons/192.png", sizes: "192x192", type: "image/png" },
        { src: "/icons/512.png", sizes: "512x512", type: "image/png" },
        {
          src: "/icons/512-maskable.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  router: {
    options: {
      strict: false,
    },
  },
  sourcemap: false,
});
