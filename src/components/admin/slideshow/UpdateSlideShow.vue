<template>
  <div>
    <v-dialog v-model="editModal" persistent max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">Update SlideShow </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="formUpdate.title"
                  label="title"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  name="input-7-1"
                  label="description"
                  v-model="formUpdate.description"
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="8">
                <div class="container mt-6">
                  <v-file-input
                    accept="image/*"
                    label="Select files"
                    chips
                    v-model="files"
                    @change="addFiles"
                  ></v-file-input>
                  <v-row v-if="files !== null">
                    <v-col sm="4">
                      {{ files.name }}
                      <img width="250" ref="file" :src="imagePrev" />
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editModal = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="updateSlideShow(updateID)">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['updateID', 'editModal'],
  data() {
    return {
      imagePrev: null,
      files: null,
      formUpdate: {}
    }
  },
  methods: {
    updateSlideShow() {
      const fd = new FormData()
      fd.append('title', this.formUpdate.title)
      fd.append('picture', this.files)
      fd.append('description', this.formUpdate.description)
      axios
        .put(`slideshow/${this.updateID}/`, fd)
        .then(response => {
          this.$emit('update-modal')
          this.$emit('reset-data')
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    addFiles() {
      var fileReader = new FileReader()
      fileReader.readAsDataURL(this.files)
      fileReader.onload = e => {
        this.imagePrev = e.target.result
      }
    }
  }
}
</script>

<style scoped></style>
