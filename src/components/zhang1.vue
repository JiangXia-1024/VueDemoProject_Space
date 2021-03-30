<template>
  <!-- 全局标签 -->
  <div class="demo">
    <!-- 工会福利标签 -->
    <div class="gonghui">
      <span style="font-size:20px;color:red;text-alient:center">这里是工会福利</span>
      <!-- 轮播图模块 -->
      <div class="lunbotu">
        <!-- 轮播图中放图片的窗口 -->
        <div class="window" @mouseover="stop" @mouseleave="play">
          <!-- 具体的图片内容 -->
          <ul class="container" :style="containerStyle">
            <li>
              <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length-1].img" alt />
            </li>
            <li v-for="(item, index) in sliders" :key="index">
              <img :style="{width:imgWidth+'px'}" :src="item.img" alt />
            </li>
            <li>
              <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt />
            </li>
          </ul>
          <!--左右两边切换的按钮 -->
          <ul class="direction">
            <!-- 左按钮 -->
            <li class="left" @click="move(600, 1, speed)">
              <svg
                class="icon"
                width="30px"
                height="30.00px"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
                />
              </svg>
            </li>
            <!-- 右按钮 -->
            <li class="right" @click="move(600, -1, speed)">
              <svg
                class="icon"
                width="30px"
                height="30.00px"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
                />
              </svg>
            </li>
          </ul>
          <!-- 轮播图下用于表示在第几页的图标 小点点 -->
          <ul class="dots">
            <li
              v-for="(dot, i) in sliders"
              :key="i"
              :class="{dotted: i === (currentIndex-1)}"
              @click="jump(i+1)"
            ></li>
          </ul>
        </div>
      </div>
      <!-- 右边新闻的标题 -->
      <div class="biaoti">
        <a style="margin:0 auto">这里事标题</a>
      </div>
      <!--右边的新闻框 -->
      <div class="xinwenkuang">这里是新闻框</div>
      <!-- 下边的内容模块 -->
      <div class="neirong" style="list-style:square inside url('/i/arrow.gif')">
        这里是内容
        <ol>
          <li>中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国</li>
          <li>中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国</li>
          <li>中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国</li>
          <li>中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国</li>
          <li>中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国</li>
          <li>中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国</li>
        </ol>
      </div>
    </div>

    <!-- 分页模块 -->
    <div class="fenye">
      这里是分页
      <!-- <div id="page">
        <lunbotu></lunbotu>
      </div>-->
      <div class="pageStyle5">
        <div id="chan_multipageNumN">
          <a href="36754927.html" class="firstPage" title="首页" target="_self">首页</a>
          <a href="36754927.html" class="prevPage" title="上一页" target="_self">上一页</a>
          <a href="36754927.html" target="_self">1</a>
          <span class="curPage">2</span>
          <a href="36754927_2.html" target="_self">3</a>
          <a class="nextPage" href="36754927_all.html#page_3" target="_self">全文</a>
          <span class="sumPage">
            共
            <cite>3</cite>页
          </span>
          <a href="36754927_2.html" class="allPage" title="下一页" target="_self">下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import lunbotu from "@/components/lunbotu";
export default {
  components: {
    lunbotu: lunbotu
  },
  props: {
    //切换速度
    initialSpeed: {
      type: Number,
      default: 30
    },
    // 自动播放的切换间隔
    initialInterval: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      // 用于存储图片的数组，如果添加图片直接添加img  删除则删除，讲连接地址 直接替换自己的
      sliders: [{img:require('../assets/1.jpg')},
      {img:require('../assets/1.jpg')},
      {img:require('../assets/1.jpg')}
        // {
        //   img:"../assets/1"
        //     // "http://b-ssl.duitang.com/uploads/item/201804/24/20180424214700_xmLdP.png"
        // },
        // {
        //   img:
        //     "http://img3.imgtn.bdimg.com/it/u=2740800815,100917286&fm=26&gp=0.jpg"
        // },
        // {
        //   img:
        //     "http://img3.imgtn.bdimg.com/it/u=1799662355,825405718&fm=26&gp=0.jpg"
        // },
        // {
        //   img:
        //     "http://b-ssl.duitang.com/uploads/item/201804/13/20180413141949_aFcZ3.png"
        // },
        // {
        //   img:
        //     "http://img4q.duitang.com/uploads/item/201505/06/20150506202234_thzKj.jpeg"
        // }
      ],
      //图片的宽度的600，
      imgWidth: 600,
      //初始化当前位置是第一个
      currentIndex: 1,
      //图片距离-600表示完全隐藏前后两张图片 只显示当前图片
      distance: -600,
      // 反复执行 即播放完了 继续重头播放 改为false 则不反复执行
      transitionEnd: true,
      // /播放速度就是等于初始值 可以修改initialSpeed 来修改切换速度
      speed: this.initialSpeed
    };
  },
  computed: {
    //计算图片内容
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    },
    //计算自动播放速度 当前自动播放速度是3秒 （当鼠标不在轮播图模块的时候才调用自动播放）
    interval() {
      return this.initialInterval * 1000;
    }
  },
  //在模板渲染成html后就调调用初始化
  mounted() {
    this.init();
  },
  methods: {
    //初始化方法
    init() {
      this.play();
      window.onblur = function() {
        this.stop();
      }.bind(this);
      window.onfocus = function() {
        this.play();
      }.bind(this);
    },
    //切换的方法
    move(offset, direction, speed) {
      console.log(speed);
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / 600)
        : (this.currentIndex -= offset / 600);
      if (this.currentIndex > 3) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 3;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    // 过度的动画方法
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -3000) this.distance = -600;
          if (des > -600) this.distance = -3000;
        }
      }, 20);
    },
    // 下面点点的跳转方法
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 600;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    //执行方法
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(600, -1, this.speed);
      }, this.interval);
    },
    // 停止方法
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style scope>
/* //根容器的样式 */
.demo {
  position: relative;
  top: 50px;
  width: 1647px;
  height: 778px;
}
/* 工会福利样式 */
.gonghui {
  width: 1500px;
  height: 778px;
  border: 1px solid blue;
  margin: 0 auto;
}
/* 轮播图样式 */
.lunbotu {
  position: relative;
  width: 900px;
  height: 400px;
  top: 10px;
  border: 1px solid red;
}
/* 标题模块样式 */
.biaoti {
  position: relative;
  width: 578px;
  height: 20px;
  left: 920px;
  bottom: 392px;
  /* 这个是那些方框的线的样式 不需要方框的地方可以删除 或者修改样式 */
  border: 1px solid black;
}
/* 新闻框模块样式 */
.xinwenkuang {
  position: relative;
  width: 578px;
  height: 370px;
  left: 920px;
  bottom: 384px;
  border: 1px solid yellowgreen;
}
/* 内容模块样式 */
.neirong {
  position: relative;
  width: 1500px;
  height: 270px;
  bottom: 366px;
  border: 1px solid yellowgreen;
}
/* 分页模块样式 */
.fenye {
  position: relative;
  width: 700px;
  height: 50px;
  bottom: 51px;
  left: 874px;
  border: 1px solid rebeccapurple;
}

/* 后面全是轮播图模板样式 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#lunbotu .ol,
ul {
  list-style: none;
}
#lunbotu {
  text-align: center;
}
.window {
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  top: 20px;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
}
.left,
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
}
.left {
  left: 3%;
  padding-left: 12px;
  padding-top: 10px;
}
.right {
  right: 3%;
  padding-right: 12px;
  padding-top: 10px;
}
img {
  user-select: none;
}
.dots {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 3px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: #333;
  cursor: pointer;
}
.dots .dotted {
  background-color: orange;
}
.page {
  position: relative;
  bottom: 100px;
  margin: 0 auto;
}
.pageStyle5 {
  clear: both;
  font-size: 16px;
  line-height: 1.231;
  height: 38px;
}
#chan_multipageNumN {
  color: #333333;
  display: inline;
  float: left;
  height: 34px;
  left: 50%;
  position: relative;
}
</style>
