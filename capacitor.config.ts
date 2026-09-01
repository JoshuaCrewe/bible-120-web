import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "uk.co.joshuacrewe.bible120",
  appName: "Bible 120",
  webDir: ".output/public",
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: "#ffffff",
    },
    // Let @capacitor-community/safe-area own the window insets (pass them through
    // to env(safe-area-inset-*)). Capacitor 8's built-in SystemBars otherwise
    // consumes them, leaving env() at 0.
    SystemBars: {
      insetsHandling: "disable",
    },
  },
};

export default config;
