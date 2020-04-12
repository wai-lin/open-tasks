<template>
  <main class="min-h-screen w-screen bg-gray-200">
    <router-view :key="$router.fullPath" />
  </main>
</template>

<style scoped>
main {
  padding: 0.01px;
}
</style>
