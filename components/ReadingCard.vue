<script setup>
    const props = defineProps(['index', 'book', 'to', 'from'])
    let verse = [];
    let urlBook = props.book.replaceAll(' ', '_').replace('1st', '1').replace('2nd', '2');
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
            <span class="text-2xl font-normal text-pink-500 pr-4 --border-r-2 --border-pink-500 --mr-4">🕮</span>
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
