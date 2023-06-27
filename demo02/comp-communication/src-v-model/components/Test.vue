<template>
  <div>
    Test
    <p>count:{{ count }}</p>
    <button @click="changeCount">changeCount</button>
  </div>
</template>
<script lang="ts">
export default {
  name: "Test",
  props: {
    count: {
      type: Number,
      required: true,
      default: 3,
    },
  },
  emits: ["update:count"],
  methods: {
    changeCount() {
      this.$emit("update:count", this.count + 1);
    },
  },
};
</script>
