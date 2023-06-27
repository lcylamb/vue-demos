<template>
  <div>Demo</div>
  <p>props:{{ count }}</p>
</template>

<script lang="ts">
export default {
  name: "Demo",
  // props: ["count"],
  // props: {
  //   count: Number,
  // },
  props: {
    count: {
      type: Number,
      required: true,
      default: 2,
    },
  },
};
</script>
