<template>
  <h1>主页</h1>
  <img src="../assets/img/logo.png" alt="" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Electron" />
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  setup (prop, ctx) {
  }

}
</script>
<style lang="scss" scoped>
</style>
