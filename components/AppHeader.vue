<template>
  <header class="row justify-between items-center">
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>
    <nav>
      <ul class="flex">
        <li><NuxtLink to="/about" class="px-2 py-4 text-lg block font-bold hover:text-indigo-500 focus:text-indigo-500">About</NuxtLink></li>
        <li><NuxtLink to="/day" class="px-2 py-4 text-lg block font-bold hover:text-indigo-500 focus:text-indigo-500">Days</NuxtLink></li>
        <li>
            <ThemeSwitcher class="px-2 py-4 text-lg block"/>
        </li>
      </ul>
    </nav>
  </header>
</template>
