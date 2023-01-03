<template>
  <main class="game-page-content">
    <div class="game-page-volume">
      <img alt="volumeLogo" src="../assets/volumeIcon.png" />
    </div>
    <div class="game-page-button">
      <Button
        v-show="cheersButtonFlag"
        v-on:click="cheersButton()"
        label="乾杯！"
        class="p-button-secondary p-button-text p-button-lg"
      ></Button>
      <img
        class="speech-bubbles"
        alt="volumeLogo"
        src="../assets/cheersComment.svg"
        v-show="cheersSpeechbubbles"
      />
      <img
        class="speech-bubbles"
        alt="volumeLogo"
        src="../assets/notMoroha.svg"
        v-show="notMorohaSpeechbubbles"
      />
    </div>
  </main>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
    name: "GamePage",
    data() {
        return {
            cheersButtonFlag: true,
            cheersSpeechbubbles: false,
            notMorohaSpeechbubbles: false,
            timerCount: 0,
            notMorohaTimerCount: 0,
            morohaAudio: new Audio(require('./../assets/moroha.mp3')),
            cheersAudio: new Audio(require('./../assets/cheers.mp3')),
        };
    },
    methods: {
        // エントリーポイント
        startGame() {
            this.morohaAudio.play();
            this.timerCount = setTimeout(this.gameOver, 25000)
            this.notMorohaTimerCount = setTimeout(this.notMoroha, 22000)
        },
        // 乾杯ボタン押下時
        cheersButton() {
            this.cheersButtonFlag = false;
            this.cheersSpeechbubbles = true;
            this.notMorohaSpeechbubbles = false;
            this.cheersAudio.play();
            clearTimeout(this.timerCount);
            setTimeout(this.gameOver, 2000)
        },
        // 遅すぎた場合の処理
        notMoroha() {
            this.cheersButtonFlag = false;
            this.cheersSpeechbubbles = false;
            this.notMorohaSpeechbubbles = true;
        },
        // ゲーム終了処理
        gameOver() {
            this.morohaAudio.pause();
            this.morohaAudio.currentTime = 0;
            clearTimeout(this.timerCount);
            clearTimeout(this.notMorohaTimerCount);
            this.$emit('gamePageToGameResult');
        },
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.speech-bubbles {
  height: 150px;
  width: 231px;
}
.game-page-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.game-page-count {
  text-align: center;
  color: white;
  font-size: 10rem;
}
</style>
