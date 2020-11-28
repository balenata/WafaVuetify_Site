<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400" elevation="23" class="rounded-xl">
        <div class="blue-grey darken-4 py-4">
          <v-avatar size="170" style=" margin-left:100px;">
            <img src="@/assets/img/logo.jpg" />
          </v-avatar>
        </div>
        <v-form @submit.prevent="goToRoute()" class="" v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="username"
                  label="Username"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field label="email" v-model="email"></v-text-field
              ></v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  label="Password"
                  v-model="password"
                  :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                ></v-text-field
              ></v-col>
            </v-row>

            <v-row>
              <v-col style="margin-left:100px;" cols="12" md="12">
                <v-btn
                  :disabled="
                    username && password && email.length > 0 ? false : true
                  "
                  type="submit"
                  color="blue-grey darken-4"
                  elevation="6"
                  large
                >
                  Login
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      username: '',
      password: '',
      email: '',
      show: false,
      loggedIn: localStorage.setItem('loggedIN', false)
    }
  },
  methods: {
    goToRoute() {
      if (this.email === 'wafamawaty@gmail.com') {
        this.loggedIn = true
        localStorage.setItem('loggedIN', this.loggedIn)
        this.$router.replace({ name: 'admin' })
      }
    }
  }
}
</script>

<style scoped></style>
