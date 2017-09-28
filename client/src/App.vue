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
  color: #2c3e50;
  background-image: url('./assets/concert.jpg');
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

</style>
