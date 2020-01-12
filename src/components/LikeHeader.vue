<template>
  <div>
    <slot name="title" v-bind:user="user" text="text"></slot>
    <slot></slot>
    <slot name="default"></slot>
    <p>{{headerText}}</p>
    <hr>
    <p>いいねの数</p>
    <slot name="number">

    </slot>
  </div>
</template>
<script>
export default {
  props: ["headerText"],
  data(){
    return{
      user:{
        firstName:"jack",
        lastName:"donald"
      }
    }
  }
}
</script>

<style>
  h1{
    color:red
  }
</style>