export const tokyoNumber = {
  data(){
    return{
      title: "Welcome to Chiagasaki",
      subtitle: "Chigasaki is a greate city",
      number: 0
    }
  },
  filters: {
    lowerCase(value){
      return value.toLowerCase();
    }
  }
}