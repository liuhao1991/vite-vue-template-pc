<!--
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:39:54
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2022-07-04 17:23:15
 * @Description: ...
-->
<script setup>
import SvgIcon from './components/SvgIcon.vue';
</script>

<template>
  <div class="logo-wrapper">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <div>
    <router-link to="/">
      home
    </router-link>
    <router-link to="/about">
      about
    </router-link>
    <div>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>


    <p>
      vue-router, pinia, svg, element-plus, less, eslint, editorconfig,
    </p>
    <el-button type="primary">
      <SvgIcon name="user" color="#fff" />点我
    </el-button>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo-wrapper {
  height: 80px;
  width: 90px;
  display: inline-block;
  background-color: #0066cc;
  position: relative;
  border-radius: 4px;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
