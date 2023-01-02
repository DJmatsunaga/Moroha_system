<template>
  <main class="app-timer-content">
    <div class="app-timer-count" v-if="count !== 0">
      {{ getCount }}
    </div>
  </main>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppTimer",
    data() {
        return {
            count: 3,
            setTimeInterval: 0,
        };
    },
    computed: {
        getCount() {
            return this.count;
        },
    },
    methods: {
        // ボタン押下時、カウントダウンスタート
        startCount() {
            this.count = 3;
            this.setTimeInterval = setInterval(this.countDown, 1000);
            console.log(this.setTimeInterval)
        },
        countDown() {
            if (this.count !== 0) {
                this.count--;
            } else {
                clearInterval(this.setTimeInterval);
            }
        },
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-timer-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-timer-count {
  text-align: center;
  color: white;
  font-size: 10rem;
}
</style>
