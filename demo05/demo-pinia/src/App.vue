<template>
  <p>用户名：{{ userStore.userName }}</p>
  <p>年龄：{{ userStore.age }}</p>
  <p>是否成年：{{ userStore.isAdult }}</p>
  <button @click="addAge">addAge</button>
  <button @click="subAge">subAge</button>
  <button @click="changeAll">changeAll</button>
</template>
<script lang="ts" setup>
import { useUserStore } from "./store/modules/User";
defineOptions({
  name: "App",
});
const userStore = useUserStore();
const addAge = () => {
  userStore.addAge();
};
const subAge = () => {
  userStore.age--;
};
const changeAll = () => {
  userStore.$patch({
    age: userStore.age + 1,
    userName: "ls",
  });
};
</script>
