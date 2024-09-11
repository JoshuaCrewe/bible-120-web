<script setup>
    import { ToWords } from 'to-words';

    let expires = new Date();
    expires.setDate(expires.getDate() + 120);

    let startDate = useCookie('startDate', {
        expires
    })

    let today = new Date();

    if (!startDate.value) {
        startDate.value = today;
    }

    let diff = Math.ceil(
        (today.getTime() - new Date(startDate.value).getTime()) /
            (1000 * 60 * 60 * 24)
    );

    let day = (diff !== 0) ? diff  : 1;
    const toWords = new ToWords({
        localeCode: 'en-GB',
        converterOptions: {
            currency: false,
        },
    });

</script>
<template>
    <div class="row">
        <div class="w-full text-center mt-8">
            <h1 class="text-xl">
                <!-- 
                This is repeated three times as doing it all in one go surfaced a hydration problem
                The server wouldn't include a comma between the day and the date
                The brower would include this comma though
                -->
                {{ today.toLocaleDateString('en-GB', { weekday : 'long'}) }}
                {{ today.toLocaleDateString('en-GB', { month : 'long', day: '2-digit'}) }}
                {{ today.toLocaleDateString('en-GB', { year : 'numeric'}) }}
            </h1>
            <p class="text-4xl mt-2 font-black">Day {{ toWords.convert(day) }} </p>
        </div>

        <div class="w-full md:w-1/2 mx-auto mt-16">
            <ReadingList  v-bind:index="day" />
        </div>
    </div>
</template>
