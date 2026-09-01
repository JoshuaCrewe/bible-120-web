<script setup lang="ts">
import { Capacitor } from "@capacitor/core";

const colorMode = useColorMode();

onMounted(async () => {
  if (Capacitor.getPlatform() === "web") return;

  const { SafeArea, SystemBarsStyle } = await import(
    "@capacitor-community/safe-area"
  );
  const { SplashScreen } = await import("@capacitor/splash-screen");

  // Bars are transparent (edge-to-edge), so the html background shows through
  // and matches the theme. This only flips the icon/text contrast.
  watch(
    () => colorMode.value,
    (mode) => {
      SafeArea.setSystemBarsStyle({
        style: mode === "dark" ? SystemBarsStyle.Dark : SystemBarsStyle.Light,
      });
    },
    { immediate: true }
  );

  await SplashScreen.hide();
});
</script>

<template>
  <!-- Renderless: native platform setup only, no UI. -->
</template>
