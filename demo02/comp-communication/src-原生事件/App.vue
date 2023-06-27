<template>
  <div>
    App给demo组件绑定原生click事件
    <p>{{ count }}</p>
    <hr />
    <Demo @click="update"></Demo>
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
  methods: {
    update() {
      this.count++;
    },
  },
};
</script>
