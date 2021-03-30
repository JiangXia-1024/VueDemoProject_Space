<template>
  <div class="demo">
      <div id="title">不忘初心 牢记使命</div>
    <div id="dang"> 
      <div id="one">
        <div id="two">
             今天好热啊 今天好热啊 今天好热啊 今天好热啊 今天好热啊 今天好热啊 今天好热啊
             今天好热啊 今天好热啊 今天好热啊 今天好热啊 今天好热啊 今天好热啊 今天好热啊
        </div>
      </div>

        
    </div>

    <div id="feng">
      <span>Copyright2019.8.2.版权所有 违者必究</span><br>
      <span>        @张祥</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dangfengjianse"
};
</script>

<style scoped>
.demo{
    width:1647px;
    height:778px;
    background: url("../assets/demobgm.png")
}
#title{
    overflow: hidden;  
    font-size: 3.5rem;  
    font-style: oblique; 
    text-align: center;
    line-height:3.5rem; 
    background-image: -webkit-linear-gradient(left,green,yellow,pink, blue, red 25%,green 35%,
    blue 50%,yellow 60%, red 75%, pink 85%,blue 100%); 
    -webkit-text-fill-color: transparent;  
    -webkit-background-clip: text;      
    animation: stream 15s infinite linear;  
    background-size: 200% 100%;
}

@keyframes stream {    
    0%  {
        background-position: 0 0;
    }
    100% {
        background-position: -100% 0;
    }
}
#dang {
  width: 1200px;
  background: url("../assets/bgm.png");
  height: 600px;
  margin: 0 auto;
  /* border: 2px solid red; */
}
#feng {
  width: 600px;
  height: 80px;
  background-color:red;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid red;
}
#feng span {
  color: black;
  font-size: 15px !important;
  line-height: 2.5;
  position: relative;
  left:35%;
  text-align: center;
 
}

#one {
  width: 600px;
  height: 350px;
  color: red;
  font-size: 50px !important;
  border: 1px solid red;
  position: relative;
  top:100px;
  left:240px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

#two {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  font-size: 20px;
  position: relative;
  top:55px;
  height: 200px;
  writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-rl; /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
}
</style>
