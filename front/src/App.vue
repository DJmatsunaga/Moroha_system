<template>
  <main class="app-content">
    <div class="app-content-title">
      <img
        class="app-content-title-image"
        alt="MorohaLogo"
        src="./assets/cheers.jpeg"
      />
      <div class="app-content-sub-title">〜刹那の乾杯〜</div>
    </div>
    <div class="app-content-button">
      <Button
        label="幕開けの夜"
        class="p-button-secondary p-button-text p-button-lg"
      ></Button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Index from "./components/index.vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
.app-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.app-content-sub-title {
  text-align: center;
  color: white;
  font-size: 36px;
}
</style>
