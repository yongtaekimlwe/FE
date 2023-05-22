<template>
  <div id="app">
    <NaviBar />
    <router-view />
  </div>
</template>

<script>
import NaviBar from "@/components/common/NaviBar.vue";
export default {
  components: {
    NaviBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 화면의 크기가 780px 이하 일 때만 적용 */
@media (min-width: 780px) {
  #app {
    width: 950px;
    margin: 0 auto;
  }
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
