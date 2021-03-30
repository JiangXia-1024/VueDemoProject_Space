<template>
    <label>
          自定义指令Demo：
          <!-- 注意： Vue中所有的指令，在调用的时候，都以 v- 开头  -->
          <!-- v-focus:自定义的输入框聚焦指令-->
          <!--v-color:自定义的输入字体颜色指令-->
          <input type="text" class="form-control" v-model="keywords" id="search" v-focus v-color="'green'">
    </label>
</template>

<script>
export default {
    name:"zidingyizhiling",
    data() {
        return {
            
        }
    },    
    //自定义的输入框聚焦指令:页面一加载自动获取焦点，不需要鼠标点击
    directives: {
        focus: {
        // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    },
    //自定义输入框字体颜色指令：输入框输入时改变字体颜色，不适用默认颜色
    directives: {
         color:{
             bind:function(el,binding){
                 el.style.color = binding.value
             }
        }
    }
}
</script>

<style scoped>

</style>