<template>
  <div class="demo">
    <div v-html="title"></div>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>网址:{{site}}</h2>
    <label for="r1">修改颜色</label>
    <input type="checkbox" v-model="use" id="r1" />
    <br />
    <br />
    <div v-bind:class="{'class1': use}">v-bind:class 指令</div>
    <p v-if="see">现在可以看见了</p>
    <pre><a v-bind:href="URL">百度官网</a></pre>
    <p>{{message}}</p>
    <input v-model="message"/>
    <button v-on:click="reverseMessage">反转字符串</button>
    {{message|capitalize}}
     <div v-if="Math.random() > 0.5">
      Sorry
    </div>
    <div v-else>
      Not sorry
    </div>
    <ol>
    <li v-for="sitee in sites" :key="sitee.name">
      {{sitee.name}}
    </li>
    <li v-for="value in object" :key="value">
      {{value}}
    </li>
  </ol>
  <button @click="click">跳转到Demo2</button>
  </div>
</template>
<script>
export default {
  name: "Demo1",
  data() {
    return {
      name: "百度",
      age: 12,
      site: "www.baidu.com",
      title: "<h1>Vue教程</h1>",
      use: false,
      see:true,
      URL:'http://www.baidu.com',
      message:'百度！',
      sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ],
     object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
      
    };
  },
  methods: {
    reverseMessage:function(){
      this.message = this.message.split('').reverse().join('')
    },
    click: function () {
      this.$router.push({path:'./Demo2'})
    }
  },
  filters:{
    capitalize:function(value){
      if(!value){
        return  ''
      }
      value = value.toString()
      return value.charAt(0).toUpperCase()+value.slice(1)
    }
  },
};
</script>
<style scoped>
</style>
