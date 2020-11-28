<template>
  <div>
    <v-carousel cycle show-arrows-on-hover hide-delimiters interval="9000">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <h1 class="move">{{ item.title }}</h1>
        <p class="move1">{{ item.description }}</p>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://www.raballaw.com/wp-content/uploads/2014/07/shutterstock_175212812-1218x360.jpg',
          title: 'hello',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, neque!'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY-EZnUOUSE_L4xs2dAN4IYDsdCwsQlzd_l61wln8YbQ&usqp=CAU&ec=45714077',
          title: 'hello1',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, neque!'
        },
        {
          src:
            'https://neconnected.co.uk/wp-content/uploads/2020/02/criminal.jpg',
          title: 'hello3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, neque!'
        },
        {
          src:
            'https://www.genders.com.au/wp-content/uploads/2020/01/how-do-i-find-a-good-wills-and-estates-lawyer.jpg',
          title: 'hello4',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, neque!'
        }
      ]
    }
  }
}
</script>

<style scoped>
.move {
  margin-top: 100px;
  margin-left: 100px;
}
.move1 {
  margin-top: 30px;
  margin-left: 100px;
}
</style>
