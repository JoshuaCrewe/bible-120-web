<script setup>
  const days = [...Array(120).keys()]
  
</script>
<template>
  <div class="p-4">
    <ul class="grid grid-cols-12 gap-2">
      <li v-for="day in days">
      <NuxtLink 
          :to="{ name: 'day-id', params: { id: (day + 1).toString().padStart(3, '0') } }"
          class="block flex justify-center items-center h-24 border border-pink-500 hover:bg-pink-500 hover:font-black"
        >
          {{ day + 1 }}
      </NuxtLink>
      </li>
    </ul>
  </div>
</template>
