<template>
  <div class="sample">
    <div class="block">
      <el-container>
        <el-header class="sticky-top">Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>
            Main
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </el-main>
        </el-container>
        <el-footer class="fixed-bottom">Footer</el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SampleElement',
  data () {
    return {
      value1: 50
    }
  }
}
</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
