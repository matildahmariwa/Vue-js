<template>
  <div id="app">
<ul>
  <li><router-link to="/create">Add post</router-link></li>
  <li><router-link to="/news">View news</router-link></li>
  <li><router-link to="/createProduct">Display Product </router-link></li>
  <li><router-link to="/login">Login</router-link></li>
  <li><router-link to="/register">Sign Up</router-link></li>
  <li><router-link to="/display">Add product</router-link></li>

</ul>
    <router-view></router-view>
  </div>
</template>

<script>

  import axios from 'axios';
  // eslint-disable-next-line no-unused-vars
  import create from './components/create.vue'
  import news from './components/news.vue'
  import createProduct from './components/createProduct'
  import display from './components/display'
  import Login from "./components/Login";
  import Signup from "./components/Signup";

export default {
  name: 'app',
  components:{
    // eslint-disable-next-line vue/no-unused-components
   create,
    // eslint-disable-next-line vue/no-unused-components
    news,
    // eslint-disable-next-line vue/no-unused-components
    createProduct,
    // eslint-disable-next-line vue/no-unused-components
    display,
    // eslint-disable-next-line vue/no-unused-components
    Signup,
    // eslint-disable-next-line vue/no-unused-components
    Login
    // eslint-disable-next-line vue/no-unused-components


  },


  data() {
    return {
      results: []
    }
  },

            created()  {
      axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YqkSMcjpEeu6poTDGiEjtY3tu6c7mXfG")
              .then(response => {this.results = response.data.results})

  }
}
</script>

<style>
.card{
  background-color: dodgerblue;
  color:white;
}
 ul{
   display:inline;

   width: 100%;
 }
  li{
    display:inline;
    margin-right:50px;

  }
</style>
