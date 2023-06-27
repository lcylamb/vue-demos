<template>
  <div>
    App
    <hr />
    <Demo :count="count"></Demo>
    <hr />
    <Test></Test>
  </div>
</template>
<script lang="ts">
import Demo from "./components/Demo.vue";
import Test from "./components/Test.vue";
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Demo,
    Test,
  },
};
</script>
