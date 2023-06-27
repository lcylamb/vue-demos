<template>
  <div>
    <slot name="default" :defaultNum="defaultNum"></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "Default",
  data() {
    return {
      defaultNum: 123,
    };
  },
};
</script>
