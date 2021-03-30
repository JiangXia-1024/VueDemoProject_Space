<template>
    <div id="Demo3">
        <!-- <h1>这是demo3</h1>
        <p>页面载入时，input 元素自动获取焦点：</p>
        <input v-focus>
        <button @click="forworduser">跳转到User</button>
        <input type="button" value="按钮" v-bind:title="msg+'变了'" v-on:click="alert"> -->
        <button @click="run">滚动</button>
        <button @click="stop">停止</button>
        <p style="font-size:50px;position: relative; left:25%;relamargin：0 auto">{{message}}</p>
    </div>
</template>
<<script>

export default {
    name: "Demo3",
    data() {
    return {
        // msg:"zidingyineirong",
        message:"gfgfgfgfg",
        //定时器初始值为空
        timer:null,
    };
  },
  methods: {
    //   forworduser:function () {
    //       this.$router.push({path:"user"})
    //   },
    //   alert:function () {
    //       alert("冠福股份、");
    //   },
      
      //执行方法
      run:function() {
          //当前有定时器则直接return
          if(this.timer != null){
              return;
          }
          //定时器任务，setInterval函数的语法格式为setInterval(定时执行的代码,定时时间)
          this.timer = setInterval(() => {
              //文字的跑马灯的效果就是截取字符串进行拼接，然后重新赋值给字符串变量，具体是截取第一个然后拼接到剩余字符串的末尾位置。
              //同理对于图片的跑马灯效果，讲图片存在数组里。然后将数组的第一个位置的图片放到最后位置，组成新的数组
             this.message = this.message.substring(1)+this.message.substring(0,1);
      }, 500);
      },
      //停止方法
      stop:function (){
          //clearInterval()方法可取消由setInterval()函数设定的定时执行操作。
          // clearInterval()方法的参数必须是由setInterval()返回的值。
          clearInterval(this.timer)
          //撤销定时任务之后需要将定时器初始为null，这样再点击run的时候，才会又执行，不然不会执行
          this.timer = null;
      }
  }  
}
</script>
