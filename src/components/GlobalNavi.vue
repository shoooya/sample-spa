<template>
  <div class="global-navi">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/" :route="{name:'Hallow'}">Hallow</el-menu-item>
      <el-menu-item index="/world" :route="{name:'World'}">World</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
      <li class="el-menu-item">
        <i class="el-icon-menu" @click="$emit('openMenu')"/>
      </li>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'GlobalNavi',
  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      console.log(this.$route.path)
      console.log(index)
      console.log(indexPath)
    }
  }
}
</script>
