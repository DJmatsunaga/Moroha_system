<template>
  <main class="game-result-content">
    <div class="game-result-content-title">
      <div class="game-result-content-sub-title">
        評価：居酒屋だけの意気込み
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameResult",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-result-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.game-result-content-sub-title {
  text-align: center;
  color: white;
  font-size: 36px;
}

.game-result-content-button {
  padding-top: 36px;
}
</style>
