<template>
  <div>
    <h1>register</h1>
    <input 
      type="email" 
      name="email" 
      v-model="email"
      placeholder="email" /> 
    <br>
    <input 
      type="password" 
      name="password" 
      v-model="password"
      placeholder="password" />
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import authenticationservice from '@/services/authenticationservice'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
  },
  methods: {
    async register() {
      const response = await authenticationservice.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  mounted(){
  }
}
</script>

<style scoped>

</style>
