<template>
  <div>
    <section class="py-8 ">
      <v-row
        ><v-col cols="12" sm="12" md="12" lg="12"
          ><div class="text-capitalize text-center text-h3">
            Discount
            <div class="under-line"></div>
          </div> </v-col
      ></v-row>
      <v-container class="color">
        <v-row class="py-4">
          <v-col cols="12" sm="4" md="3" lg="4" v-for="(card, i) in 3" :key="i">
            <!-- <div class="box">
              <span class="glass"></span>
              <div class="content">
                <h2>Glowing Border</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div> -->
            <div class="card">
              <div class="circle">
                <h2>%25</h2>
              </div>
              <div class="content">
                <div class="text-h5 text-center mb-6">Peshmarga</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias, beatae cupiditate quisquam illo obcaecati
                  consectetur.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
/* .box {
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  margin: 40px;
  justify-content: center;
  align-items: center;
  background: #060c21;
}
.glass {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: block;
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}
.content {
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
}
.box .content h2 {
  margin-bottom: 10px;
}
.box:before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  z-index: -1;
}
.box:after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  z-index: -2;
  filter: blur(40px);
}
.box:before,
.box:after {
  background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}
.box:nth-child(2):before,
.box:nth-child(2):after {
  background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
}
.box:nth-child(3):before,
.box:nth-child(3):after {
  background: linear-gradient(235deg, #772aff, #010615, #2196f3);
} */
.card {
  position: relative;
  width: 300px;
  height: 350px;
  background: #fff;
  margin: 20px;
  /* border-radius: 20px; */
  overflow: hidden;
  /* box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2); */
}
.circle {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  clip-path: circle(200px at center 0);
  text-align: center;
}
.circle h2 {
  color: #c3a160;
  font-size: 4.5em;
  padding: 30px 0;
}
.content {
  position: absolute;
  bottom: 40px;
  text-align: center;
}
.content p {
  color: #666;
}
.circle {
  background: #000;
}
.under-line {
  height: 2px;
  background-color: #212530;
  width: 150px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
.circle:before {
  content: '';
  position: absolute;
  top: -150%;
  left: -50%;
  width: 200%;
  height: 200%;
  border-radius: 40%;
  background: #111;
  opacity: 0.8;
  animation: animate 12s linear infinite;
  transition: 2s;
}
.circle:after {
  content: '';
  position: absolute;
  top: -150%;
  left: -50%;
  width: 200%;
  height: 200%;
  border-radius: 40%;
  background: #111;
  opacity: 0.9;
  animation: animate2 5s linear infinite;

  transition: 2s;
}
.circle:hover:before,
.circle:hover:after {
  top: -180%;
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.color{
  background: #2a2a33;
}
</style>
