<template>
  <div>
    <v-row class="mt-6" justify="center">
      <v-btn
        v-model="addblog"
        @click="addBlog()"
        class="rounded-lg"
        color="blue-grey darken-4 "
        elevation="4"
        ><v-icon class="mr-2" color="white">fas fa-user-plus</v-icon>
        <div style="color:white;">
          Add Blog
        </div>
      </v-btn>
    </v-row>
    <v-card>
      <v-card-title>
        Blog Detail
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
              <td class="d-block d-sm-table-cell" @click="viewImage(d.image)">
                <img :src="d.image" width="100" alt="Image" />
              </td>
              <td class="d-block d-sm-table-cell">{{ d.title }}</td>
              <td class="d-block d-sm-table-cell">{{ d.description }}</td>
              <td class="d-block d-sm-table-cell">{{ d.link }}</td>
              <td class="d-block d-sm-table-cell">{{ d.created_at }}</td>
              <td class="d-block d-sm-table-cell">
                <v-btn @click="editUser()" color="info" icon>
                  <v-icon>fas fa-user-edit</v-icon>
                </v-btn>
                <v-btn @click="deleteUser(d.id)" color="error" icon>
                  <v-icon>fas fa-trash-alt</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <!-- ADD Blog  -->
      <v-row justify="center">
        <v-dialog
          v-model="addblog"
          fullscreen
          hide-overlay
          transition="slide-y-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="addblog = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Add Student</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="addblog = false">
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-actions>
              <v-row class="mx-4">
                <v-col md="12">
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="form.title"
                      label="title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-textarea
                      name="input-7-1"
                      label="description"
                      v-model="form.description"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="form.link"
                      label="link"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="container mt-6">
                      <v-file-input
                        v-model="currFiles"
                        small-chips
                        show-size
                        multiple
                        clearable
                        label="Add files"
                        @change="inputChanged"
                      >
                        <template v-slot:selection="{ text, index }">
                          <v-chip
                            small
                            text-color="white"
                            color="#295671"
                            close
                            @click:close="remove(index)"
                          >
                            {{ text }}
                          </v-chip>
                        </template>
                      </v-file-input>
                      <div v-if="files.length">
                        <h5>All files</h5>
                        <v-row>
                          <v-col
                            cols="6"
                            sm="3"
                            md="3"
                            lg="3"
                            v-for="(file, f) in files"
                            :key="f"
                          >
                            <v-chip>
                              {{ file.name }}
                            </v-chip>
                            <img
                              width="250"
                              :ref="'file'"
                              src="//placehold.it/400/99cc77"
                              class="img-fluid"
                              :title="'file' + f"
                            />
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- iMAGE OPEN ON CLICK ROW  -->
      <v-dialog v-model="dialog" width="800" transition="slide-y-transition">
        <v-card>
          <v-card-text class="pt-5">
            <img :src="imagePath" width="100%" alt="Image" class="rounded-lg" />
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
      <!-- DELETE USER  -->
      <v-dialog v-model="dialog1" width="500">
        <v-card>
          <v-card-title class="headline error">
            Delete User
          </v-card-title>

          <v-card-text class="mt-2">
            <strong> Are you sure you want delete this user</strong>
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
      <!-- EDIT USER  -->
      <v-row justify="center">
        <v-dialog v-model="dialog2" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Update Blog</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="form.title"
                      label="title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-textarea
                      name="input-7-1"
                      label="description"
                      v-model="form.description"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="12" md="12 ">
                    <v-text-field
                      v-model="form.link"
                      label="link"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <div class="container mt-6">
                      <v-file-input
                        v-model="currFiles1"
                        small-chips
                        show-size
                        multiple
                        clearable
                        label="Add files"
                        @change="updateFiles"
                      >
                        <template v-slot:selection="{ text, index }">
                          <v-chip
                            small
                            text-color="white"
                            color="#295671"
                            close
                            @click:close="remove1(index)"
                          >
                            {{ text }}
                          </v-chip>
                        </template>
                      </v-file-input>
                      <div v-if="files1.length">
                        <h5>All files</h5>
                        <v-row>
                          <v-col
                            cols="6"
                            sm="3"
                            md="3"
                            lg="3"
                            v-for="(file, f) in files1"
                            :key="f"
                          >
                            <v-chip>
                              {{ file.name }}
                            </v-chip>
                            <img
                              width="250"
                              :ref="'file'"
                              src="//placehold.it/400/99cc77"
                              class="img-fluid"
                              :title="'file' + f"
                            />
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currFiles: [],
      currFiles1: [],
      readers: [],
      files: [],
      addblog: false,
      dialog: false,
      dialog1: false,
      dialog2: false,
      search: '',
      imagePath: null,
      files1: [],
      readers1: [],
      form: {},
      loggedIn: localStorage.setItem('loggedIN', true),
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id'
        },
        { text: 'Image', value: 'image' },
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
        { text: 'Link', value: 'link' },
        { text: 'Created_at', value: 'created_at' },
        { text: 'Actions', value: '', sortable: false }
      ],
      desserts: [
        {
          id: '1',
          image: 'https://wallpaperaccess.com/full/30100.jpg',
          title: '6.0',
          description: 24,
          link: 4.0,
          created_at: '1%'
        },
        {
          id: '2',
          image: 'https://wallpaperaccess.com/full/30100.jpg',
          title: '9.0',
          description: 37,
          link: 4.3,
          created_at: '1%'
        },
        {
          id: '3',
          image: 'https://wallpaperaccess.com/full/30100.jpg',
          title: 16.0,
          description: 23,
          link: 6.0,
          created_at: '7%'
        }
      ]
    }
  },

  methods: {
    addBlog() {
      this.addblog = true
      this.files = []
    },
    viewImage(image) {
      this.imagePath = image
      this.dialog = true
    },
    deleteUser(userDelete) {
      this.dialog1 = true
    },
    editUser() {
      this.dialog2 = true
      this.form = {}
      this.files1 = []
    },
    remove(index) {
      this.files.splice(index, 1)
    },
    remove1(index) {
      this.files1.splice(index, 1)
    },
    inputChanged() {
      console.log('files', this.files)
      this.files = [...this.currFiles, ...this.files]
      this.files.forEach((file, f) => {
        this.readers[f] = new FileReader()
        this.readers[f].onloadend = e => {
          const fileData = this.readers[f].result
          const imgRef = this.$refs.file[f]
          imgRef.src = fileData
          console.log(fileData)

          // send to server here...
        }

        this.readers[f].readAsDataURL(this.files[f])
      })
    },
    updateFiles() {
      console.log('files', this.files1)
      this.files1 = [...this.currFiles1, ...this.files1]
      this.files1.forEach((file, f) => {
        this.readers1[f] = new FileReader()
        this.readers1[f].onloadend = e => {
          const fileData = this.readers1[f].result
          const imgRef = this.$refs.file[f]
          imgRef.src = fileData
          console.log(fileData)

          // send to server here...
        }

        this.readers1[f].readAsDataURL(this.files1[f])
      })
    }
  }
}
</script>
<style scoped></style>
