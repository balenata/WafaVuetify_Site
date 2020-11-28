<template>
  <div>
    <admin-navbar />
    <router-view/>
  </div>
</template>

<script>
import adminNavbar from './AdminNavbar.vue'
export default {
  components: {
    adminNavbar
  },
  data() {
    return {
      loggedIn: localStorage.setItem('loggedIN', true)

    }
  }
}
</script>

<style scoped></style>
