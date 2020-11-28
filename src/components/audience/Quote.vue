<template>
  <div>
    <div class="text-capitalize text-center text-h3 mb-6 ">
      Quote
      <div class="under-line"></div>
    </div>
    <section class="quote py-12">
      <v-container>
        <v-row>
          <h2 style="margin-left:auto; margin-right:auto">
            Short Quote comes from long experience
          </h2>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-carousel
              cycle
              show-arrows-on-hover
              hide-delimiters
              interval="9000"
            >
              <v-carousel-item v-for="(quote, i) in quotes" :key="i">
                <blockquote
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  style="text-align:center !important;"
                >
                  {{ quote.quote }}
                  <cite>{{quote.quoter}}</cite>
                </blockquote>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    axios.get('quote/').then(response => {
      this.quotes = response.data
    })
  },
  data() {
    return {
      quotes: []
    }
  }
}
</script>

<style scoped>
.quote {
  background-image: -webkit-linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(../../assets/img/quote.jpg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(../../assets/img/quote.jpg);
  background-size: cover;
  height: 550px;
  color: #c3a160;
  background-attachment: fixed;
}

blockquote {
  padding: 4%;
  font-style: italic;
  line-height: 145%;
  position: relative;
  margin-top: 120px;
  font-size: 27px;
  color: #c3a160;
}

blockquote:before {
  content: '\201C';
  font-size: 800%;
  display: block;
  position: absolute;
  left: 43%;
  transform: translate(50%);
}

cite {
  font-size: 90%;
  margin-top: 25px;
  display: block;
}
.under-line {
  height: 2px;
  background-color: #212530;
  width: 150px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
