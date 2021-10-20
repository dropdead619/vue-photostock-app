<template>
  <TheHeader />
  <PhotoList />
</template>

<script>
import TheHeader from "@/components/nav/TheHeader.vue";
import PhotoList from "@/components/photos/PhotoList.vue";
import { mapActions } from "vuex";

export default {
  components: {
    TheHeader,
    PhotoList,
  },
  data() {
    return {
      accessKey: "uEfwAzM_fdOUiUFKPIPCiYrgjuxaUcrXW3gOHuJ7uIc",
      url: "https://api.unsplash.com",
      page: 1,
      perPage: 30,
    };
  },
  methods: {
    ...mapActions(["fetchStockPhotos"]),
    scroll() {
      let scrollPointPosition =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight >=
        document.documentElement.offsetHeight;

      if (scrollPointPosition) {
        console.log("bottom");
        this.fetchStockPhotos({
          accessKey: this.accessKey,
          url: this.url,
          perPage: this.perPage,
          page: this.page,
          mutation: "addMorePhotos",
        });
        this.page++;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
    this.fetchStockPhotos({
      accessKey: this.accessKey,
      url: this.url,
      perPage: this.perPage,
      page: this.page,
      mutation: "fetchStockPhotos",
    });
    this.page++;
  },
  unmounted() {
    window.removeEventListener("scroll", this.scroll);
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
  position: relative;
}

body {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
}

ul {
  list-style: none;
}

.wide-container {
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
}

.medium-container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}

// @media (max-width: 1400px) {
//   .wide-container {
//     max-width: 1300px;
//   }

//   .medium-container {
//     max-width: 992px;
//   }
// }

// @media (max-width: 1200px) {
//   .wide-container {
//     max-width: 1100px;
//   }

//   .medium-container {
//     max-width: 768px;
//   }
// }

// @media (max-width: 992px) {
//   .wide-container {
//     max-width: 892px;
//   }

//   .medium-container {
//     max-width: 576px;
//   }
// }
</style>
