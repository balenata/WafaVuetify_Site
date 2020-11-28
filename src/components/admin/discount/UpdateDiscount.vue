<template>
  <div>
    <v-dialog v-model="editModal" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Update Dicount</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col md="12">
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="updateForm.field_name"
                    label="Field_Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="updateForm.amount_discount"
                    label="Amount"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-textarea
                    name="input-7-1"
                    label="Description"
                    v-model="updateForm.description"
                  ></v-textarea>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close-modal')">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="updateDicount(updateID)">
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
    updateDicount() {
      axios
        .put(
          `http://127.0.0.1:8000/api/discount/${this.updateID}/`,
          this.updateForm
        )
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
