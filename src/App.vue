<template>
  <div id="app">
    <Header v-show="$root.$data.bNav"></Header>
    <router-view></router-view>
    <Footer v-show="$root.$data.bFoot"></Footer>
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
    watch:{
      $route:{//路由监听-》数据观测
        handler(to){
          let path = to.path;
          console.log(path)

          if(/home|follow|column/.test(path)){
            this.$root.$data.bNav=true;
            this.$root.$data.bFoot=true;
          }
          if(/detail|login|reg/.test(path)){
            this.$root.$data.bNav=false;
            this.$root.$data.bFoot=false;
          }
          if(/user/.test(path)){
            this.$root.$data.bNav=false;
            this.$root.$data.bFoot=true;
          }

        },
        immediate:true
      }
    }
  }
</script>

<style>

</style>
