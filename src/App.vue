<template>
  <div>
    <LikeHeader header-text="hello">
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:number>
        <h2>{{number}}</h2>
      </template>
    </LikeHeader>
    <h2>{{number}}</h2>
    <LikeNumber ></LikeNumber>
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" v-on:my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number" test-props="test"></LikeNumber>

  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data(){
    return{
      number:14
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value){
      this.number = value
    }
  }
}
</script>

<style scoped>
  div{
    border: 1px solid blue;
  }
  h1{
    color:blue
  }
</style>