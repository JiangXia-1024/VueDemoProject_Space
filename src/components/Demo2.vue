<template>
  <div class="demo">
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">VUE</div>

    <button v-on:click="counter+=1">增加1</button>
    <p>这个按钮被点击了{{counter}}次</p>

    <button v-on:click="greet">Greet</button>

    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>

    <p>input 元素：</p>
    <input v-model="message" placeholder="编辑我……" />
    <p>消息是: {{ message }}</p>

    <p>textarea 元素：</p>
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="多行文本输入……"></textarea>

    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames" />
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames" />
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames" />
    <label for="taobao">taobao</label>
    <br />
    <span>选择的值为: {{ checkedNames }}</span>

    <input type="radio" id="runoob" value="Runoob" v-model="picked" />
    <label for="runoob">Runoob</label>
    <br />
    <input type="radio" id="google" value="Google" v-model="picked" />
    <label for="google">Google</label>
    <br />
    <span>选中值为: {{ picked }}</span>

    <select v-model="selected" name="fruit">
      <option value>选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>
    <div id="output">选择的网站是: {{selected}}</div>

    <button v-on:click="fromword">跳转到Demo3</button>
  </div>
</template>
<script>
export default {
  name: "Demo2",
  data() {
    return {
      activeColor: "green",
      fontSize: 30,
      counter: 0,
      name: "Vue.js",
      message: "百度",
      message2: "百度\r\nhttp://www.baidu.com",
      checked: false,
      checkedNames: [],
      picked: "Runoob",
      selected: ""
    };
  },
  methods: {
    greet: function(event) {
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: function(message) {
      alert(message);
    },
    fromword:function(){
      this.$router.push({path:'./Demo3'})
    }
  }
};
</script>
<style scoped>
.active {
  width: 100px;
  height: 100px;
  background: green;
}
.text-danger {
  background: red;
}
</style>
