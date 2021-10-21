<template>
  <section class="gallery">
    <h2>Free stock photos</h2>
    <div class="gallery__grid wide-container">
      <div
        class="gallery__column--1"
        v-for="col in stockPhotos"
        :key="stockPhotos.indexOf(col)"
      >
        <PhotoItem
          v-for="photo in col"
          :key="photo.id"
          :id="photo.id"
          :url="photo.urls.regular"
          :alt="photo.alt_description"
          :userName="photo.user.name"
          :userProfileImageUrl="photo.user.profile_image.small"
        ></PhotoItem>
      </div>
    </div>
  </section>
</template>
<script>
import PhotoItem from "./PhotoItem.vue";
import { mapState } from "vuex";
export default {
  components: {
    PhotoItem,
  },
  computed: {
    ...mapState(["stockPhotos", "isLoading"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.gallery {
  h2 {
    padding: 40px;
    text-align: start;
  }

  &__grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
  }

  @media (max-width: 1400px) {
    &__grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media (max-width: 1200px) {
    &__grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    &__grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 430px) {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>