<script setup>
  const days = [...Array(120).keys()]
  
</script>
<template>
  <div class="row">
    <div class="w-full">
      <h1 class="font-black text-4xl text-center mb-8 mt-8">
        Days
      </h1>
    </div>
    <div class="w-full">
      <div class="">
        <ul class="grid grid-cols-3 lg:grid-cols-12 gap-2">
          <li v-for="day in days">
            <NuxtLink 
              :to="{ name: 'day-id', params: { id: (day + 1).toString().padStart(3, '0') } }"
              class="block flex justify-start items-end h-24 bg-slate-700 rounded text-white hover:bg-indigo-500"
            >
                <span class="text-3xl font-black p-1">
                    {{ day + 1 }}
                </span>
          </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
