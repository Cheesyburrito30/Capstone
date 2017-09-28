<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="secondary elevation-4">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2" dark>
          <form name="registerForm" autocomplete="off">
            <v-text-field
                label="Email"
                v-model="email"
                dark
              ></v-text-field>
            <br>
            <v-text-field
                label="Password"
                v-model="password"
                dark
                type="password"
              ></v-text-field>
          </form>
          <br>
          <div v-html="error" class="error"></div>
          <br>
          <v-btn
            class="cyan"
            dark
            @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authenticationservice from '@/services/authenticationservice'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try{
        const response = await authenticationservice.register({ email: this.email, password: this.password})
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      }catch(error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
