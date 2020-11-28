<template>
  <div>
    <div class="grey lighten-2">
      <v-img
        class="clip"
        height="500"
        cover
        src="@/assets/img/wafabg.jpg"
      ></v-img>
    </div>
    <div class="mt-16 bg-color">
      <v-row>
        <v-col  cols="6" sm="6" md="6" lg="6">
          <div  class="text-h6 text-capitalize ml-6 color-name">
            Wafa Ata Said Hamalaw
          </div>
          <div>
            <p class="blockquote">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              ipsam laboriosam nihil doloribus illo. Fuga expedita quibusdam
              excepturi error nemo fugit unde quae tempora amet corrupti non,
              exercitationem ratione sint officia saepe numquam eligendi
              pariatur eum a quidem deleniti laborum eius laudantium voluptatem?
              Ab, sunt sequi? Iure ullam a nostrum. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quibusdam id quae molestias
            </p>
          </div>
        </v-col>
        <v-col cols="6" sm="6" md="6" lg="6">
          <v-img width="400" height="auto" class="rounded-lg" src="@/assets/img/wafa.jpg"></v-img>
          <div class="mt-3">
            <div class=" text-capitalize">
              <strong> Date of Birth:</strong> <i>23/3/1992</i>
            </div>
            <div class=" text-capitalize">
             <strong>Education</strong>
            </div>
            <p>Cihan University as Sulayimaniah</p>
            <div class=" text-capitalize">
              Experience : 3 Years
            </div>
            <div class=" text-capitalize">
               wafaata92@gmail.com
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.clip {
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 62%,
    100% 64%,
    80% 100%,
    19% 100%,
    0 67%
  );
}
.bg-color{
    background: rgba(226, 224, 224, 0.534);
}
.color-name{
    color:#c3a160;
}
/* .blockquote {
  padding: 4%;
  line-height: 145%;
  position: relative;
  margin-top: 40px;
} */
</style>
