<script setup>
  useHead({
    bodyAttrs: {
      class: 'dark:bg-slate-800 dark:text-white'
    }
  })
</script>
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
