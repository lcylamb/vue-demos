<template>
  <div>
    Demo
    <p>modelValue:{{ modelValue }}</p>
    <button @click="handler">changeModelValue</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Demo",
  props: {
    modelValue: {
      type: Number,
      required: true,
      default: 2,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handler() {
      this.$emit("update:modelValue", this.modelValue + 1);
    },
  },
};
</script>
