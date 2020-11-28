<template>
  <div>
    <section>
      <v-footer color="#000">
        <v-row no-gutters>
          <v-col cols="12" sm="12">
            <v-card-title>
              <strong style="color:#c3a160;"
                >Get connected with us on social networks!</strong
              >
              <v-btn
                style="left:100px;"
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
              >
                <v-icon class="icon-color" size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-title>
          </v-col>
          <v-row class="bottom-footer-color">
            <v-col  class=" text-center " cols="12" sm="12">
             <span style="color:white;"> {{ new Date().getFullYear() }} — </span>
              <strong class="change">WaFaaTa</strong>
            </v-col>
          </v-row>
        </v-row>
        <br />
      </v-footer>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin']
    }
  }
}
</script>

<style scoped>
.change {
  color: #c3a160;
}
.bottom-footer-color {
  background: #000;
}
.icon-color {
  transition: color 0.4s;
}
.icon-color:hover:nth-child(1) {
  color: #4267b2;
}
</style>
