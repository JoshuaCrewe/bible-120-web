<script setup>
  let count = ref(1);
</script>
<template>
  HELLO
  {{ count }}
  <button @click="count++">+</button>
</template>
