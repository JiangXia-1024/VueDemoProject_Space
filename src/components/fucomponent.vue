<template>
  <div>
    <!-- // 组件中使用v-model // 这儿试验test与内部msg值为双向绑定关系 -->
    <zicomponent class="fu" v-model="test" ></zicomponent> 
    <p>{{'父组件的值：' + test}}</p>
    <button @click="btn">
        父组件改变子组件的值
    </button>
    
  </div>
</template>

<script>
  import zicomponent from '@/components/zicomponent'
  export default {
    name:'fucomponent',
    data () {
      return {
        test: ''
      }
    },
    methods: {
      btn () {
        this.test += 1 
      }
    },
    components:{
      zicomponent
    }
  }
</script>