<template>
  <NuxtLayout>
      <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
  'light',
  'dark',
];
</script>