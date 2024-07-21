<script setup lang="ts">
  import { ToWords } from 'to-words';

  definePageMeta({
    validate: async (route) => {
      return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id) && route.params.id <= 120
    }
  })

  const toWords = new ToWords({
    localeCode: 'en-GB',
    converterOptions: {
      currency: false,
    },
  });
  const route = useRoute()
</script>
<template>
  <div class="row">
    <div class="w-full text-center mt-8">
      <h1 class="font-black text-4xl">
        Day {{ toWords.convert(route.params.id) }}
      </h1>
    </div>
  </div>
</template>
