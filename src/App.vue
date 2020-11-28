<template>
  <v-app id="inspire">
    <Navbar v-show="toggle" />
    <v-main>
      <router-view />
      <Scroll />
    </v-main>
    <Footer v-show="toggle" />
  </v-app>
</template>

<script>
import Navbar from './components/audience/Navbar.vue'
import Footer from './components/audience/Footer.vue'
import Scroll from './components/audience/ScrollOnTop.vue'
export default {
  components: {
    Navbar,
    Footer,
    Scroll
  },
  data() {
    return {
      toggle: true,
      loggedIn: localStorage.setItem('loggedIN', false)
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        if (
          this.$route.path === '/admin' ||
          this.$route.path === '/login' ||
          this.$route.path === '/admin/admin-quote' ||
          this.$route.path === '/admin/admin-blog' ||
          this.$route.path === '/admin/admin-discount' ||
          this.$route.path === '/admin/admin-slideshow'
        ) {
          this.toggle = false
        }
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
