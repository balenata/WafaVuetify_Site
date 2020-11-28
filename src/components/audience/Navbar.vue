<template>
  <div>
    <v-app-bar
      elevate-on-scroll
      extended
      extension-height="38"
      color="#000"
      flat
    >
      <v-app-bar-nav-icon
        color="#c3a160"
        class="d-flex d-sm-none nav"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-container class=" fill-height">
        <v-avatar color="grey darken-1" size="60">
          <img src="@/assets/img/logolam.png" alt="Logo" />
        </v-avatar>
        <v-spacer></v-spacer>
        <v-btn
          class=" d-none d-sm-flex button "
          color="#d6be91"
          v-for="(link, i) in links"
          :key="i"
          text
          :to="link.router"
        >
          {{ link.li }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          class="mt-3 d-none d-sm-flex "
          v-for="icon in icons"
          :key="icon"
          dark
          icon
        >
          <v-icon class="icon-color" size="30px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      color="#212530"
      class="d-flex d-sm-none "
      v-model="drawer"
      fixed
      temporary
    >
      <v-list dense nav>
        <v-list-item v-for="(link, i) in links" :key="i" link :to="link.router">
          <v-list-item-content>
            <v-list-item-title class="color text-subtitle-1 button">{{
              link.li
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn class="mt-3  " v-for="icon in icons" :key="icon" dark icon>
        <v-icon size="30px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      goDark: false,
      links: [
        {
          li: 'Home',
          router: '/'
        },
        {
          li: 'Blog',
          router: '/Blog'
        },
        {
          li: 'Ebook',
          router: '/Ebook'
        },
        {
          li: 'About Us',
          router: '/About'
        },
        {
          li: 'Contact Us'
        }
      ],
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin']
    }
  }
}
</script>

<style scoped>
.nav {
  position: absolute;
  right: 10px;
}
.color {
  color: #c3a160;
}
/* NAVIGATION  */

.button {
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.5s;
}
.button:hover {
  border-bottom: 2px solid #c3a160;
}
.icon-color {
  transition: color 0.4s;
}
.icon-color:hover:nth-child(1) {
  color: #4267b2;
}

</style>
