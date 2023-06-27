<template>
  <div>
    <slot name="scopedSlot" :count="count"></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "Scoped",
  data() {
    return {
      count: 10,
    };
  },
};
</script>
