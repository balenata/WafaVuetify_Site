<template>
  <div class="color-bg">
    <v-row class="pt-4">
      <v-col cols="12" sm="4" md="3">
        <v-card
          color="#dcdcdc"
          class="scroll"
          height="500"
          max-width="355"
          flat
        >
          <h1 data-aos="zoom-out-down" data-aos-duration="1000"  class="ml-2 " style="color:#000;">
            Top Posts
          </h1>
          <v-divider></v-divider>
          <v-btn
            text
            v-for="(link, i) in 12"
            :key="i"
            class="mt-5 ml-2 subtitle-2 text-lowercase button "
          >
            <p class="mt-4  animated" style="color:#212530;">
              How to change your name balen
            </p>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="9">
        <v-card
          style="border:1px solid #212530; margin-left:auto;margin-right:auto;"
          max-width="650"
        >
          <v-card-title data-aos-duration="2000" data-aos="fade-left">
            Top western road trips
          </v-card-title>
          <v-card-actions>
            <v-btn @click="show = !show" color="#c3a160" text>
              Read More
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-carousel
            height="200px"
            show-arrows-on-hover
            hide-delimiter-background
            delimiter-icon="mdi-plus"
            interval="1000"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape. I'm a thing. But, like most politicians, he promised
                more than he could deliver. You won't have time for sleeping,
                soldier, not with all the bed making you'll be doing. Then we'll
                go with that data file! Hey, you add a one and two zeros to that
                or we walk! You're going to do his laundry? I've got to find a
                way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        },
        {
          src:
            'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
        },
        {
          src:
            'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
      ],
      sidenav: [
        { title: 'Dashboard' },
        { title: 'Photos' },
        { title: 'About' }
      ],
      right: null
    }
  }
}
</script>

<style scoped>
.color-bg {
  background-color: #dcdcdc;
}
.scroll {
  /* overflow: hidden; */
  overflow: auto;
  color: #00000000;
  transition: color 0.4s;
}
.scroll:hover {
  /* overflow: auto; */
  color: #666666ff;
}
.scroll::-webkit-scrollbar {
  width: 14px;
  background: white;
}
.scroll::-webkit-scrollbar-thumb {
  background-clip: content-box;
  border: 4px solid transparent;
  border-radius: 7px;
  box-shadow: inset 0 0 0 10px;
}
.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}
.button {
  transform: scale(1.1);
  transition: transform 0.2s;
}
.button:hover {
  transform: scale(1);
}
.animated {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
