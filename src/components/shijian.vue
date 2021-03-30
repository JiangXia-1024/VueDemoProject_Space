<template>
    <div class="gf">
        <p>不格式化的时间：               {{shijian}}</p>
        <p>格式化位年月日的时间：          {{shijian|shijianfilter("yyy-mm-dd")}}</p>
        <p>格式化精确到时分秒的时间：      {{shijian|shijianfilter("yyy-mm-dd hh:mm:ss")}}</p>

         <div class="fg">
            <input type="button"  @keyup.f2="say">
        </div>
    </div>
   

     

   
</template>

<script>
export default {
    name:"shijian",
    data() {
        return {
            shijian:new Date()
        }
    },
    methods:{
        say(){
            var a=10;
            if(a==10){
                alert(12)
            }else{
                alert("haizhixingle")
            }
           
        }
    },
    filters:{
        shijianfilter:function(value,args){
            var dt = new Date(value)

            var y = dt.getFullYear()
            //格式化位数补齐，需要先转化为字符串
            var m = (dt.getMonth()+1).toString().padStart(2,'0')
            var d = dt.getDate().toString().padStart(2,'0')
            //如果要求的时间格式只有年月日
            if(args.toLowerCase() === "yyy-mm-dd"){
                return `${y}-${m}-${d}`
            //如果时间要求精确到时分秒
            }else{
                var hh = dt.getHours().toString().padStart(2,'0')
                var mm = dt.getMinutes().toString().padStart(2,'0')
                var ss = dt.getSeconds().toString().padStart(2,'0')

                return `${y}-${m}-${d}:${hh}:${mm}:${ss}`
            }
            
        }
    }
}
</script>
<style scoped>

</style>