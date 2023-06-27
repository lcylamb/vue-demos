<template>
  <div>
    Demo
    <button @click="handler">+</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Demo",
  props: {
    count: {
      type: Number,
      required: true,
      default: 2,
    },
  },
  emits: ["update"],
  methods: {
    handler() {
      this.$emit("update", this.count + 1);
    },
  },
};
</script>
