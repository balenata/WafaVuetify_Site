<template>
  <div>
    <v-dialog v-model="editModal" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Update Quote</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="updateForm.quoter"
                  label="Owner"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  name="input-7-1"
                  label="Quote"
                  v-model="updateForm.quote"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close-modal')">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="updateQuote(updateID)">
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
      updateForm: {}
    }
  },
  methods: {
    updateQuote() {
      axios
        .put(`quote/${this.updateID}/`, this.updateForm)
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

<style scoped></style>
