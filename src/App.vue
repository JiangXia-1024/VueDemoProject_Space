<template>
  <div id="app">
    <router-view />
    <!-- <局部注册的名称 -->
    <!-- <user></user> -->
  </div>
</template>
<!--import 局部注册组件 from ''然后在componentzhong 引用-->
<script>
export default {
  name: "App"
  // components:{
  //   "user":User
  // }
};
</script>

<style scope>
#app {
 
}
</style>
