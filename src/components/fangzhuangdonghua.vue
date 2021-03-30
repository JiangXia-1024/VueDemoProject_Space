<template>
  <div class="Demo">
    <!-- <div class="Before" ></div>
    <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>-->
    <ul class="box">
      <li>
        <div class="Before"><img src="../assets/1.jpg"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
      <li>
        <div class="Before"><img src="../assets/1.jpg"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
      <li>
        <div class="Before"><img src="../assets/1.jpg"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
      <li>
        <div class="Before"><img src="../assets/1.jpg"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
      <li>
        <div class="Before"><img src="../assets/logo.png"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
      <li>
        <div class="Before"><img src="../assets/1.jpg"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
      <li>
        <div class="Before"><img src="../assets/1.jpg"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
      <li>
        <div class="Before"><img src="../assets/1.jpg"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
      <li>
        <div class="Before"><img src="../assets/1.jpg"/></div>
        <div class="After" style="font-size:20px;color:black">这个是背面的介绍</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "fangzhuangdonghua",
  data() {
    return {
      msg: "gfgfg"
    };
  }
};
</script>
<style>
.Demo {
  width: 1648px;
  height: 820px;
  margin-top: 2px;
  margin-left: 8px;
  position: relative;
  perspective: 800px;
  box-sizing: border-box;
  background:linear-gradient(to right, #bb313e25, #bb313e25, #d7222925, #dd4a1625, #e4761525, #f5c50025, #f0e92725, #b1ce2425, #48a93525, #03944525, #157c4f25, #176a5825, #1b556325, #1d386f25, #1d386f25, #20277825, #52266325, #8a244b25);
}
.Before {
  width: 450px;
  height: 250px;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  backface-visibility: hidden;
  transition: 3s;
  /* background-image: url("../assets/1.jpg"); */
  border: 1px solid yellow;
  margin: 2.5% 0 0 2.5%;
  
}
.After {
  width:450px;
  height: 250px;
  position: absolute;
  color: #fff;
  background-color: #fff;
  text-indent: 2em;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 3s;
  border: 1px solid yellow;
    margin: 2.5% 2.5% 0 2.5%;
}
.box li:hover .Before {
  transform: rotateY(180deg);
}
.box li:hover .After {
  transform: rotateY(0deg);
}
.ul,
li {
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative;
}
.li {
  list-style: none;
}
.box {
  width: 1400px;
  height: 800px;
  position: relative;
  left: 50px;
  margin: 2.5% 2.5% 0 2.5%;
}
.box li {
  float: left;
  width: 450px;
  height: 250px;
  top:20px;
  margin-right: 10px;
  perspective: 800px;
  box-sizing: border-box;
  
}
</style>