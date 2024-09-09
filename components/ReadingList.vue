<script setup>
    const props = defineProps(['index'])
    const { data: plan } = await useFetch(`/api/plan`);

    const { data: books } = await useFetch(`/api/books`);
</script>

<template>
    <ul v-for="(section, index)  in plan[Number(props.index) - 1].sections ">
        <li>
            <ReadingCard :book="books[section.book - 1]" :from="section.chapters[0]" :to="section.chapters[1]" :index />
        </li>
    </ul>
</template>
