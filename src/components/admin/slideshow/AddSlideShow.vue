<template>
  <div>
    <v-dialog
      v-model="addModal"
      fullscreen
      hide-overlay
      transition="slide-y-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="addModal = false">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
          <v-toolbar-title>Add SlideShow</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="addSlideShow()">
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-actions>
          <v-row class="mx-4">
            <v-col md="12">
              <v-col cols="12" md="8">
                <v-text-field v-model="form.title" label="title"></v-text-field>
              </v-col>
              <v-col cols="12" md="8">
                <v-textarea
                  name="input-7-1"
                  label="description"
                  v-model="form.description"
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
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    addModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openModal: this.addModal,
      imagePrev: null,
      files: null,
      form: {}
    }
  },
  methods: {
    addFiles() {
      var fileReader = new FileReader()
      fileReader.readAsDataURL(this.files)
      fileReader.onload = e => {
        this.imagePrev = e.target.result
      }
    },
    addSlideShow() {
      const fd = new FormData()
      fd.append('title', this.form.title)
      fd.append('picture', this.files)
      fd.append('description', this.form.description)
      axios
        .post('slideshow/', fd)
        .then(response => {
          this.$emit('close-modal')
          this.$emit('reset-data')
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
