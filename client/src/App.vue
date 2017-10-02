<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <br>
        <br>
          <router-view></router-view>  
      </main>
    </v-app>    
  </div>
</template>

<script>
import PageHeader from '@/components/header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: url('./assets/concert.jpg');
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  /* height: 100%;
  min-height: 100%; */
}
.application, .application>main>.container{
  /* min-height: 100%; */
}
</style>
