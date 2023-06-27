<template>
  <div>
    App给demo组件绑定 自定义事件
    <p>{{ count }}</p>
    <hr />
    <Demo @update="update" :count="count"></Demo>
    <hr />
  </div>
</template>
<script lang="ts">
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Demo,
  },
  methods: {
    update() {
      this.count++;
    },
  },
};
</script>
