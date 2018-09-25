<template>
  <div id="app">
    <global-navi class="sticky-top" @openMenu="toggleMenu"></global-navi>
    <el-container>
      <el-main>
        <router-view/>
      </el-main>
      <el-aside width="200px" v-if="isOpen">
        <side-menu></side-menu>
      </el-aside>
    </el-container>
    <el-footer class="fixed-bottom">©︎shoooya</el-footer>
  </div>
</template>

<script>
import GlobalNavi from '@/components/GlobalNavi'
import SideMenu from '@/components/SideMenu'

export default {
  name: 'App',
  components: {
    GlobalNavi,
    SideMenu
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu () {
      if (this.isOpen) {
        this.isOpen = false
        return
      }
      this.isOpen = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
