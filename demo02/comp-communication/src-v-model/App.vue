<template>
  <div>
    <h1>v-model {{ count }}</h1>
    <hr />
    <Demo v-model="count"></Demo>
    <hr />
    <Test v-model:count="count"></Test>
    <hr />
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
  methods: {},
};
</script>
