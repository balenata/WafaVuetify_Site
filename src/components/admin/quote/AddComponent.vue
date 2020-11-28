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
          <v-btn icon dark @click="$emit('close-modal')">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
          <v-toolbar-title>Add Quote</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="addQuote()">
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-actions>
          <v-row class="mx-4">
            <v-col md="12">
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="form.quoter"
                  label="Owner"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="8">
                <v-textarea
                  name="input-7-1"
                  label="Quote"
                  v-model="form.quote"
                ></v-textarea>
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
      form: {}
    }
  },
  methods: {
    addQuote() {
      axios
        .post('quote/', this.form)
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
