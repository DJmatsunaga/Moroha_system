<template>
  <img alt="MorohaLogo" src="./assets/cheers.jpeg" />
  <Index></Index>
  <div>競合解消中</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Index from "./components/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Index,
  },
});
</script>

<style>
html {
  height: 100%;
}
</style>
