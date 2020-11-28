<template>
  <div>
    <!-- CAROUSEL  -->
    <carousel />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- Feilds we are working On -->
    <practise />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- VIDEO SECTION  -->
    <videos />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <!-- Discount charge -->

    <discount />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- QUOTE SECTION  -->
    <quote />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import practise from './PractiseArea.vue'
import discount from './Discount.vue'
import videos from './Video.vue'
import quote from './Quote.vue'
import carousel from './Carousel.vue'
export default {
  components: {
    practise,
    videos,
    discount,
    quote,
    carousel
  },
  data: () => ({})
}
</script>
<style scoped></style>
