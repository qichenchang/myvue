<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

  import Header from './components/Header';
  import Footer from './components/Footer';
  // import axios from './plugins/axios'

  export default {
    name: 'app',
    components:{
      Header,Footer
    },

  created(){
    //测试axios
    // console.log(1,this.$axios)
    // console.log(2,axios)
    // axios({
    //   // url:'http://localhost:3000/api/banner'
    //   // url:'https://uncle9.top/api/banner'
    //   // url:'/api/banner'
    //   // url:'/douban/v2/movie/top250?start=0&count=1'
    // }).then(
    //   res=>console.log(res.data)
    // ) 
  }
  }
</script>

<style>

</style>
