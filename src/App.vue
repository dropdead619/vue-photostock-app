<template>
  <div class="wrapper">
    <TheHeader />
    <PhotoList />
  </div>
</template>

<script>
import TheHeader from "@/components/nav/TheHeader.vue";
import PhotoList from "@/components/photos/PhotoList.vue";

export default {
  components: {
    TheHeader,
    PhotoList,
  },
  data() {
    return {
      accessKey: "uEfwAzM_fdOUiUFKPIPCiYrgjuxaUcrXW3gOHuJ7uIc",
      url: "https://api.unsplash.com",
    };
  },
  methods: {
    getPhotoList() {
      this.$store.dispatch({
        type: "getStockPhotos",
        accessKey: this.accessKey,
        url: this.url,
      });
    },
  },
  mounted() {
    this.getPhotoList();
    console.log(this.$store.getters.fetchedStockPhotos)
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wide-container {
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
}

.medium-container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}
</style>
