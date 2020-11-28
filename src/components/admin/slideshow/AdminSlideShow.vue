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
          Add SlideShow
        </div>
      </v-btn>
    </v-row>
    <v-card>
      <v-card-title>
        SlideShow Detail
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
              <td class="d-block d-sm-table-cell" @click="viewImage(d.picture)">
                <img :src="`${d.picture}`" width="100" alt="Image" />
              </td>
              <td class="d-block d-sm-table-cell">{{ d.title }}</td>
              <td class="d-block d-sm-table-cell">{{ d.description }}</td>
              <td class="d-block d-sm-table-cell">
                <v-btn @click="editSlideShow(d.id)" color="info" icon>
                  <v-icon>fas fa-user-edit</v-icon>
                </v-btn>
                <v-btn @click="deleteSlideShow(d.id)" color="error" icon>
                  <v-icon>fas fa-trash-alt</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <!-- ADD SlideShow  -->
      <add-slide-show
        :addModal="addModal"
        @close-modal="addModal = false"
        @reset-data="getTableData()"
      />
      <!-- iMAGE OPEN ON CLICK ROW  -->
      <v-dialog v-model="dialog" width="800" transition="slide-y-transition">
        <v-card>
          <v-card-text class="pt-5">
            <img
              :src="`${imagePath}`"
              width="100%"
              alt="Image"
              class="rounded-lg"
            />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- DELETE SlideShow  -->
      <v-dialog v-model="dialog1" width="500">
        <v-card>
          <v-card-title class="headline error">
            Delete SlideShow
          </v-card-title>

          <v-card-text class="mt-2">
            <strong> Are you sure you want delete this SlideShow</strong>
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
      <!-- EDIT SlideShow  -->
      <update-slide-show
        :updateID="updateID"
        :editModal="editModal"
        @update-modal="editModal = false"
        @reset-data="getTableData()"
      />
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import AddSlideShow from './AddSlideShow.vue'
import UpdateSlideShow from './UpdateSlideShow.vue'

export default {
  components: {
    AddSlideShow,
    UpdateSlideShow
  },
  mounted() {
    this.getTableData()
  },
  data() {
    return {
      updateID: 0,
      addModal: false,
      editModal: false,
      dialog: false,
      dialog1: false,
      search: '',
      imagePath: null,
      loggedIn: localStorage.setItem('loggedIN', true),
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id'
        },
        { text: 'Image' },
        { text: 'Title' },
        { text: 'Description' },
        { text: 'Actions', value: '', sortable: false }
      ],
      desserts: []
    }
  },

  methods: {
    getTableData() {
      axios.get('slideshow/').then(response => {
        this.desserts = response.data
      })
    },
    viewImage(image) {
      this.imagePath = image
      this.dialog = true
    },
    deleteSlideShow(userDelete) {
      this.dialog1 = true
    },
    editSlideShow(id) {
      this.updateID = id
      this.editModal = true
    }
  }
}
</script>
<style scoped></style>
