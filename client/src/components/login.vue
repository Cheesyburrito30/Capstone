<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
    <panel title="Sign In">
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
          <br>
          <div v-html="error" class="danger-alert"></div>
          <br>
          <v-btn
            class="cyan"
            dark
            @click="login">
            Sign In
          </v-btn>
      </panel>
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
    async login() {
      try{
        const response = await authenticationservice.login({ email: this.email, password: this.password})
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name:"songs"
        })
      }catch(error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
