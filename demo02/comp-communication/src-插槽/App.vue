<template>
  <div>
    <hr />
    <Default #default="{ defaultNum }">
      <div>默认插槽{{ defaultNum }}</div>
    </Default>
    <hr />
    <Name>
      <template v-slot:nameSlot>
        <div>具名插槽</div>
      </template>
    </Name>
    <hr />
    <Scoped>
      <template #scopedSlot="{ count }">
        <div>scopedSlot:{{ count }}</div>
      </template>
    </Scoped>
  </div>
</template>
<script lang="ts">
import Default from "./components/Default.vue";
import Name from "./components/Name.vue";
import Scoped from "./components/Scoped.vue";
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Default,
    Name,
    Scoped,
  },
  methods: {},
};
</script>
