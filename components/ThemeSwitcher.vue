<template>
    <button @click="$colorMode.preference = ($colorMode.value == 'dark' ? 'light' : 'dark')"
        aria-label="Switch between light and dark theme" class="focus:text-indigo-500 hover:text-indigo-500">

        <IconDark class="size-7 mb-1 block dark:hidden" />

        <IconLight class="size-8 hidden dark:block" />
    </button>
</template>
