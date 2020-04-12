<template>
  <div class="task" @click.self="$router.back()">
    <article>
      Task {{ $route.params.id }}
      <p>Description</p>
    </article>
  </div>
</template>

<style scoped>
.task {
  background: rgba(0, 0, 0, 0.5);
  @apply absolute inset-0 m-0 w-full h-full flex items-center justify-center;
}

article {
  @apply bg-white p-5 rounded;
}
</style>
