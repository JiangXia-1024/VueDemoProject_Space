<template>
  <div>
    <p>{{'子组件的值：'+ msg}}</p>
    <button @click="btn1">子组件改变父组件的值</button>
  </div>
</template>

<script>
  export default {
    name:'zicomponent',
    model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
      prop: 'msg',
      event: 'change'
    },
    props: {
      msg: ''
    },
    methods: {
      btn1 () {
        this.$emit('change', this.msg+2)
      }
    }
  }
</script>