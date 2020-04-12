<template>
  <input v-bind="$attrs" :value="value" v-on="listeners" />
</template>

<script>
  export default {
    name: 'BaseInput',
    inheritAttrs: false,
    props: {
      value: { required: false },
    },
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          input: (event) => this.$emit('input', event.target.value),
        }
      },
    },
  }
</script>

<style scoped>
  input {
    @apply px-3 py-1 outline-none border-2 border-white rounded;

    &:focus {
      @apply border-teal-300;
    }
  }
</style>
