<template>
    <div class = "Demo1">
         <p>原字符：{{text}}</p>
         <p>无参数过滤替换：{{text|textFilter}}</p>
         <p>传参过滤替换：{{text|textFilter1("传参")}}</p>
         <p>首字母大写过滤：{{text|fanzhuangfilter}}</p>
         <!--过滤器还可以串联，使用多个管道符分割开多个过滤器即可-->
         <p>过滤器串联：{{text|textFilter|fanzhuangfilter}}</p>
    </div>
</template>
<script>
export default {
    name:"guolvqi",
    data(){
        return {
            text:"aabbbccc"
        }
    },
    methods:{
    },
    filters:{
            //定义一个字符替换的过滤器
            textFilter:function(value){
                value = value.toString()
                 //字符串的replace 方法的第一个参数，除了可写一个字符串之外，还可以定义一个正则表达式，g表示全局替换，不然只替换第一个a
                 return value.replace(/a/g,'d');
            },
            //定义一个可以传参的字符替换过滤器，根据传递的参数，指定替换，不用写死
            textFilter1:function(value,arg){
                value = value.toString()
                 return value.replace(/a/g,arg);
            },
            //定义一个第一个字符大写的过滤器
            fanzhuangfilter:function(value){
                //如果字符串为空，直接返回
                if(!value){
                    return value
                }
                value = value.toString();
                return value.charAt(0).toUpperCase()+value.slice(1);
            }
        }
}
</script>

<style scoped>

</style>