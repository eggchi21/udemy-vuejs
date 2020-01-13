<template>
  <div>
    <p v-border:solid.round.shadow="{width:'5px',color: 'red'}">Home</p>
    <h2>{{title | lowerCase |upperCase}}</h2>
    <p>{{ subtitle | lowerCase}}</p>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
    <count-number></count-number>
  </div>
</template>


<script>
import CountNumber from "./CountNumber.vue"
import { tokyoNumber } from "@/tokyoNumber";

  export default{
    mixins: [tokyoNumber],
    data(){
      return{

      }
    },
    components: {
      CountNumber
    },

    // computed: {
    //   upperCaseTitle(){
    //     return this.title.toUpperCase();
    //   }
    // },
    directives: {
      border(el,binding){
      el.style.border = "solid black 2px";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if(binding.modifiers.round){
        el.style.borderRadius = "0.5rem"
      }
      }
    }
  }
</script>