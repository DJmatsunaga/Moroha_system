<template>
  <main class="app-content">
    <TopPage v-show="topPageFlag" @gameStart="gameStart"></TopPage>
    <AppTimer
      v-show="appTimerFlag"
      ref="appTimer"
      @appTimerToGamePage="appTimerToGamePage"
    ></AppTimer>
    <GamePage
      v-show="gamePageFlag"
      ref="gamePage"
      @gamePageToGameResult="gamePageToGameResult"
    ></GamePage>
    <GameResult v-show="gameResultFlag"></GameResult>
  </main>
</template>

<script lang="js">
import { defineComponent } from "vue";
import TopPage from "./components/TopPage.vue";
import AppTimer from "./components/AppTimer.vue";
import GamePage from "./components/GamePage.vue";
import GameResult from "./components/GameResult.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      AppTimerRef: {},
      GamePageRef: {},
      topPageFlag: true,
      appTimerFlag: false,
      gamePageFlag: false,
      gameResultFlag: false,
    };
  },
  components: {
    TopPage,
    AppTimer,
    GamePage,
    GameResult,
  },
  methods: {
    gameStart() {
      this.topPageFlag = false;
      this.appTimerFlag = true;
      this.gamePageFlag = false;
      this.gameResultFlag = false,
      this.AppTimerRef.startCount();
    },
    appTimerToGamePage() {
      this.topPageFlag = false;
      this.appTimerFlag = false;
      this.gamePageFlag = true;
      this.gameResultFlag = false,
      this.GamePageRef.startGame();
    },
    gamePageToGameResult() {
      this.topPageFlag = false;
      this.appTimerFlag = false;
      this.gamePageFlag = false;
      this.gameResultFlag = true;
    },
  },
  mounted() {
    this.AppTimerRef = this.$refs.appTimer;
    this.GamePageRef = this.$refs.gamePage;
  },
});
</script>

<style>
.app-content {
  height: 100%;
}
</style>
