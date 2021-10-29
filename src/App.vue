<template>
  <TheHeader />
  <PhotoList />
  <teleport to="body"><Preloader v-if="isLoading" /></teleport>
</template>

<script>
import TheHeader from "@/components/nav/TheHeader.vue";
import PhotoList from "@/components/photos/PhotoList.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    TheHeader,
    PhotoList,
  },
  computed: {
    ...mapState(["isLoading", "searchInput"]),
  },
  methods: {
    ...mapActions([
      "fetchStockPhotos",
      "incrementPage",
      "fetchPhotosBySearchValue",
    ]),
    scroll() {
      let scrollPointPosition =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight >=
        document.documentElement.offsetHeight;

      if (scrollPointPosition && this.searchInput === "") {
        console.log("bottom");
        this.fetchStockPhotos();
        this.incrementPage();
      } else if (scrollPointPosition) {
        this.fetchPhotosBySearchValue();
        this.incrementPage();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
    this.fetchStockPhotos();
    this.incrementPage();
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
  position: relative;
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

@media (max-width: 1400px) {
  .wide-container {
    max-width: 1300px;
  }

  .medium-container {
    max-width: 992px;
  }
}

@media (max-width: 1200px) {
  .wide-container {
    max-width: 1100px;
  }

  .medium-container {
    max-width: 768px;
  }
}

@media (max-width: 992px) {
  .wide-container {
    max-width: 892px;
  }

  .medium-container {
    max-width: 576px;
  }
}
</style>
