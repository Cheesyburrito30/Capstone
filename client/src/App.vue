<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  height:auto;
  min-height: auto;
  background-image: url('./assets/concert.jpg');
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-group--text-field input {
  border-bottom: 1px solid black  
}
</style>
