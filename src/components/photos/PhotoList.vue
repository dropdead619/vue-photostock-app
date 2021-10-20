<template>
  <section class="gallery">
    <h2>Free stock photos</h2>
    <div class="gallery__list wide-container">
      <PhotoItem
        v-for="photo in stockPhotos"
        :key="photo.id"
        :id="photo.id"
        :url="photo.urls.regular"
        :alt="photo.alt_description"
        :userName="photo.user.name"
        :userProfileImageUrl="photo.user.profile_image.small"
      ></PhotoItem>
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
    ...mapState(["stockPhotos"]),
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

  &__list {
    position: relative;
    column-count: 4;
    column-gap: 7px;
  }

  @media (max-width: 1400px) {
    &__list {
      column-count: 4;
    }
  }
  @media (max-width: 1200px) {
    &__list {
      column-count: 3;
    }
  }

  @media (max-width: 768px) {
    &__list {
      column-count: 2;
    }
  }
  @media (max-width: 430px) {
    &__list {
      column-count: 1;
    }
  }
}
</style>