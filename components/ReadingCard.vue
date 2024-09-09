<script setup>
    const props = defineProps(['index', 'book', 'to', 'from'])
    let verse = [];
    let urlBook = props.book.replaceAll(' ', '_').replace('1st', '1').replace('2nd', '2').replace('3rd', '3');
    let url = `https://bible.helloao.org/api/BSB/${urlBook}/${props.from}.json`;

    await fetch(url)
    .then(request => request.json())
    .then(chapter => {
        chapter.chapter.content.forEach((item) => {
            if (item.type == 'verse') {
                if (item.content[0].constructor === Object) {
                    let psalm = []
                    item.content.forEach((item) => {
                        if (item.text) {
                            psalm.push(item.text);
                        }
                    });
                    verse.push(psalm.join(' '));
                } else {
                    item.content.forEach(snippet => {
                        if (snippet.constructor !== Object) {
                            verse.push(snippet);
                        }
                    })
                }
            }
        })
    });
</script>

<template>
    <div class="flex mb-8 flex-col">
        <span class="flex">
            <span class="text-2xl font-normal text-indigo-500 pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
            </span>
            <span>
                <h3 class="">
                    <span class="text-xl font-black">
                        {{book}} 
                    </span>
                    <span class="text-lg">
                        <br> Chapter<span v-if="from != to" >s</span> {{ from }} <span v-if="from != to"> - {{ to }}</span>
                    </span>
                </h3>
                <p class="mt-2">
                    {{ formatHaShem(verse.slice(0,3).join(' ')) }} ...
                </p>
            </span>
        </span>
    </div>
</template>
