<script setup>
    import plan from '~/data/plan'
    import books from '~/data/books'
    const props = defineProps(['index'])
</script>

<template>
    <ul v-for="(section, index)  in plan[Number(props.index) - 1].sections ">
        <li>
            <ReadingCard :book="books[section.book - 1]" :from="section.chapters[0]" :to="section.chapters[1]" :index />
        </li>
    </ul>
</template>
