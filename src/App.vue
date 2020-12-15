
<template>
  <div id="app">
    <try-1></try-1>
    <!-- <dashboard></dashboard> -->
    <!-- <draft></draft> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import dashboard from './components/dashboard.vue'
import draft from './components/draft_1.vue'
import generate from './lib/try_1'
import try_1 from './components/try_1.vue'
export default {
  components: {try_1},
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
