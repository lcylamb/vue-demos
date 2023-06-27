<template>
  <div>
    <p>username:{{ user.name }}</p>
    <p>age:{{ user.age }}</p>
    <p>是否成年:{{ isAdult }}</p>
    <button @click="increment(1)">+</button>
    <button @click="DECREMENT(1)">-</button>
  </div>
</template>
<script lang="ts">
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState("user", ["user"]),
    ...mapGetters("user", ["isAdult"]),
  },
  methods: {
    ...mapActions("user", ["increment"]),
    ...mapMutations("user", ["DECREMENT"]),
  },
};
</script>
