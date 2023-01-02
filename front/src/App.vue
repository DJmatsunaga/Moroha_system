<template>
  <main class="app-content">
    <TopPage v-show="topPageFlag" @gameStart="gameStart"></TopPage>
    <AppTimer v-show="gameStartFlag" ref="appTimer"></AppTimer>
  </main>
</template>

<script lang="js">
import { defineComponent } from "vue";
import TopPage from "./components/TopPage.vue";
import AppTimer from "./components/AppTimer.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      AppTimerRef: {},
      topPageFlag: true,
      gameStartFlag: false,
    };
  },
  components: {
    TopPage,
    AppTimer,
  },
  methods: {
    gameStart() {
      this.topPageFlag = false;
      this.gameStartFlag = true;
      this.AppTimerRef.startCount();
    },
  },
  mounted() {
    const AppTimerRef = this.$refs.appTimer;
    this.AppTimerRef = AppTimerRef;
  },
});
</script>

<style>
.app-content {
  height: 100%;
}
</style>
