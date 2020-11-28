<template>
  <div>
    <v-row class="mt-6" justify="center">
      <v-btn
        @click="addModal = true"
        class="rounded-lg"
        color="blue-grey darken-4 "
        elevation="4"
        ><v-icon class="mr-2" color="white">fas fa-user-plus</v-icon>
        <div style="color:white;">
          Add Discount
        </div>
      </v-btn>
    </v-row>
    <!-- <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br> -->
    <v-card>
      <v-card-title>
        Discount detail
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="desserts" :search="search">
        <template v-slot:body="props">
          <tbody>
            <tr v-for="(d, i) in props.items" :key="i">
              <td class="d-block d-sm-table-cell">{{ d.id }}</td>
              <td class="d-block d-sm-table-cell">{{ d.field_name }}</td>
              <td class="d-block d-sm-table-cell">{{ d.amount_discount }}</td>
              <td class="d-block d-sm-table-cell">{{ d.description }}</td>
              <td class="d-block d-sm-table-cell">
                <v-btn @click="openModal(d.id)" color="info" icon>
                  <v-icon>fas fa-user-edit</v-icon>
                </v-btn>
                <v-btn @click="deletediscount(d.id)" color="error" icon>
                  <v-icon>fas fa-trash-alt</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <!-- <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br> -->
      <!-- ADD Discount  -->
      <add-discount
        :addModal="addModal"
        @close-modal="addModal = false"
        @reset-data="getTableData()"
      />
      <!-- <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br> -->
      <!-- DELETE Discount  -->
      <v-dialog v-model="dialog1" width="500">
        <v-card>
          <v-card-title class="headline error">
            Delete Discount
          </v-card-title>

          <v-card-text class="mt-2">
            <strong> Are you sure you want delete this Discount</strong>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog1 = false">
              Close
            </v-btn>
            <v-btn color="primary" text @click="dialog1 = false">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br> -->
      <!-- EDIT Dicount  -->
      <update-discount
        :updateID="updateID"
        :editModal="editModal"
        @close-modal="editModal = false"
        @reset-data="getTableData()"
      />
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import addDiscount from './AddDiscount.vue'
import updateDiscount from './UpdateDiscount.vue'
export default {
  components: {
    addDiscount,
    updateDiscount
  },
  data() {
    return {
      updateID: 0,
      addModal: false,
      editModal: false,
      dialog1: false,
      dialog2: false,
      search: '',
      loggedIn: localStorage.setItem('loggedIN', true),
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id'
        },
        { text: 'Discount_Field' },
        { text: 'Amount %' },
        { text: 'Description' },
        { text: 'Actions', value: '', sortable: false }
      ],
      desserts: []
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      axios.get('discount/').then(response => {
        this.desserts = response.data
      })
    },
    deletediscount(userDelete) {
      this.dialog1 = true
    },
    openModal(id) {
      this.updateID = id
      this.editModal = true
    }
  }
}
</script>
<style scoped></style>
