<template>
  <p v-border:solid.round.shadow="{width:'5px',color: 'red'}">Home</p>
</template>


<script>
  export default{
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