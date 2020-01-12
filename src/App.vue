<template>
  <div>
    <LikeHeader header-text="hello">
      <h2>みなさん</h2>
      <template v-slot:title="slotProps">
        <h1>トータルのいいね数</h1>
        <h2>{{slotProps.user.firstName}}</h2>
      </template>
      <h3>はじめまして</h3>
      <p>よろしくおねがいします！</p>
      <template v-slot:number>
        <h2>{{number}}</h2>
      </template>
    </LikeHeader>
    <h2>{{number}}</h2>
    <LikeNumber ></LikeNumber>
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" v-on:my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number" test-props="test"></LikeNumber>

    <button @click="currentComponent ='Home'">Home</button>
    <button @click="currentComponent ='About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>


  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data(){
    return{
      number:14,
      currentComponent: "Home"
    }
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value){
      this.number = value
    }
  },

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