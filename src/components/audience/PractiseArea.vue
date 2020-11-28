<template>
  <div>
    <section class="grey lighten-2">
      <v-row class="py-16 mx-0">
        <v-col cols="12" xs="12" class="pt-0 pb-8">
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            class="text-capitalize text-center text-h3 practise"
          >
            We focus on
          </div>
          <div class="under-line"></div>
        </v-col>
        <v-col cols="12" sm="3" md="3" v-for="(card, i) in cards" :key="i">
          <v-card flat class="rounded-md card">
            <v-img
              :gradient="card.grad"
              class="img rounded-md zoom-on-hover"
              height="350"
              :src="card.imgPath"
            >
              <v-icon
                data-aos="fade-right"
                data-aos-duration="1000"
                class="d-flex justify-center mt-10"
                size="40"
                color="#c3a160"
                >{{ card.icon }}</v-icon
              >
              <v-card-title
                data-aos-duration="1000"
                data-aos="zoom-in-up"
                class="d-flex justify-center text-h4"
                ><span style="color:#cfc9c1">
                  {{ card.title }}
                </span></v-card-title
              >
              <v-card-text
                data-aos="fade-up"
                data-aos-duration="1000"
                class="text-center"
              >
                <v-row align="center" class="mx-5">
                  <span class="text-color" style="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, architecto!</span
                  >
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          // grad: 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)',
          imgPath: require('@/assets/img/law1.jpg'),
          title: 'Business Law',
          icon: 'fas fa-envelope'
        },
        {
          // grad: 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.2)',

          imgPath: require('@/assets/img/law2.jpg'),

          title: 'Finance Law',
          icon: 'fas fa-university'
        },
        {
          // grad: 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.2)',
          imgPath: require('@/assets/img/law3.jpg'),
          title: 'Family Law',
          icon: 'fas fa-home'
        },
        {
          // grad: 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.2)',
          imgPath: require('@/assets/img/law4.jpg'),
          title: 'Education Law',
          icon: 'fas fa-place-of-worship'
        }
      ]
    }
  }
}
</script>

<style scoped>
.under-line {
  height: 2px;
  background-color: #212530;
  width: 150px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
.card {
  overflow: hidden;
  background-color: #000;
}
.zoom-on-hover {
  opacity: 0.6;
  transform: scale(1.15);
  transition: transform 0.5s, opacity 0.5s;
}
.zoom-on-hover:hover {
  opacity: 1;
  transform: scale(1);
}
.text-color {
  color: white;
  font-size: 16px;
  transition: color 0.5s, background-color 0.5s;
  transform: scale(1);
}
.text-color:hover {
  background-color: #c3a160;
  color: rgb(0, 0, 0);
  transform: scale(1.17);
}
.practise:hover {
  overflow: hidden;
  background: linear-gradient(90deg, #fff, #000, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
</style>
