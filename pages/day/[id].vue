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

    async function setToday() {
        let startDate = useCookie('startDate')
        let today = new Date();
        today.setDate(today.getDate() - (route.params.id - 1));
        startDate.value = today;

        await navigateTo('/');
    }
</script>
<template>
    <div class="row">
        <div class="w-full text-center mt-8">
            <NuxtLink to="/day">
                <h1 class="font-black text-4xl">
                    Day {{ toWords.convert(route.params.id) }}
                </h1>
            </NuxtLink>
        </div>

        <div class="w-full md:w-1/2 mx-auto mt-16">
            <ReadingList v-bind:index="route.params.id" />
            <div class="mt-32"></div>
            <button 
                @click="setToday" 
                class="
                    fixed bottom-4 right-4
                    p-2 shadow rounded font-bold 

                    bg-slate-700
                    text-white
                    hover:bg-indigo-500
                "
            >
                Set as today
            </button>
        </div>
    </div>
</template>
