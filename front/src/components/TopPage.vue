<template>
  <main class="top-page-content">
    <div class="top-page-content-title">
      <img
        class="top-page-content-title-image"
        alt="MorohaLogo"
        src="../assets/cheers.png"
      />
      <div class="top-page-content-sub-title">〜刹那の乾杯〜</div>
    </div>
    <div class="top-page-content-button">
      <Button
        v-on:click="$emit('gameStart')"
        label="幕開けの夜"
        class="p-button-secondary p-button-text p-button-lg"
      ></Button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopPage",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-page-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top-page-content-sub-title {
  text-align: center;
  color: white;
  font-size: 36px;
}

.top-page-content-button {
  padding-top: 36px;
}
</style>
