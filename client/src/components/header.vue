<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn flat dark>
        <v-toolbar-title class="mr-4"
        @click="navigateTo({name: 'Hello'})">
          TabTracker
        </v-toolbar-title>
      </v-btn>
    </v-toolbar-items>

  <!--   <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer />
    <v-toolbar-items
    v-if="!$store.state.isUserLoggedIn">
        <v-btn flat dark to="register">
          Sign Up
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      v-if="!$store.state.isUserLoggedIn">
      <v-btn flat dark to="login">
        Sign In
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      v-if="$store.state.isUserLoggedIn">
      <v-btn flat dark to="Profile">
        Profile
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      v-if="$store.state.isUserLoggedIn">
      <v-btn flat dark to="signout">
        Sign Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>

<style scoped>
</style>
