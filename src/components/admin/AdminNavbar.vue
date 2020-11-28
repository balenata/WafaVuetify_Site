<template>
  <div>
    <v-navigation-drawer v-model="drawer" app color="blue-grey darken-4">
      <!--  -->
      <v-avatar size="170" class="ml-4  mt-4">
        <img src="@/assets/img/logo.jpg" />
      </v-avatar>
      <v-row no-gutters style="flex-wrap: nowrap;">
        <v-col class="flex-grow-0 flex-shrink-0">
          <v-btn
            text
            color="#c3a160"
            class="d-flex flex-column mb-3 mt-6"
            v-for="(link, i) in links"
            :key="i"
            :to="link.path"
          >
            {{ link.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar color="blue-grey darken-4" flat app>
      <v-app-bar-nav-icon style="color:white;" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title
        ><span style="color:white;"> Admin Panel</span></v-toolbar-title
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        {
          path: '/admin/admin-blog',
          name: 'Blog'
        },
        {
          path: '/admin/admin-quote',
          name: 'Quote'
        },
        {
          name: 'Our Focus On'
        },
        {
          path: '/admin/admin-slideshow',
          name: 'SlideShow'
        },
        {
          path: '/admin/admin-discount',
          name: 'Discount'
        },
        {
          name: 'About Me'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
