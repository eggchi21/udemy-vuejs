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
    <div>
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <EventTitle
      :value="eventData.title"
      @input="eventData.title = $event"
      ></EventTitle>

      <EventTitle></EventTitle>


      <label for="title">人数</label>
      <input
        id="title"
        type="number"
        v-model.number="eventData.maxNumber"
        >
        <p>{{eventData.maxNumber}}</p>

      <label for="host">主催者</label>
      <input
        id="host"
        type="text"
        v-model.trim="eventData.host"
        >
        <pre>{{eventData.host}}</pre>
        <label for="detail">イベントの内容</label>
        <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
        <pre>{{eventData.detail}}</pre>
        <input
          type="checkbox"
          id="isPrivate"
          v-model="eventData.isPrivate"
          >
        <label  for="isPrivate">非公開</label>
        <p>{{ eventData.isPrivate}}</p>
        <p>参加条件</p>
        <input
          type="checkbox"
          id="10"
          value="10代"
          v-model="eventData.target"
        >
        <label for="10">10代</label>

        <input
          type="checkbox"
          id="20"
          value="20代"
          v-model="eventData.target"
        >
        <label for="20">20代</label>

        <input
          type="checkbox"
          id="30"
          value="30代"
          v-model="eventData.target"
        >
        <label for="30">30代</label>

        <p>{{eventData.target}}</p>

        <input
          type="radio"
          id="free"
          value="無料"
          v-model="eventData.price"
          >
        <label for="free">無料</label>
        <input
          type="radio"
          id="paid"
          value="有料"
          v-model="eventData.price"
          >
        <label for="paid">有料</label>
        <p>開催場所</p>
        <select v-model="eventData.location">
          <option v-for="location in locations" :key="location">{{location}}</option>
        </select>
        <p>{{eventData.location}}</p>
    </div>

  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data(){
    return{
      number:14,
      currentComponent: "Home",
      locations: ["東京","大阪","名古屋"],
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        host:"",
        detail:"",
        isPrivate:false,
        target: [],
        price:"無料",
        location:"東京"
      }
    }
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
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