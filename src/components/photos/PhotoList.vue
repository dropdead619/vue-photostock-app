<template>
  <section class="photo-list">
    <h2>Free stock photos</h2>
    <ul class="wide-container">
      <PhotoItem
        v-for="photo in stockPhotos"
        :key="photo.id"
        :url="photo.urls.regular"
        :alt="photo.alt_description"
        :userName="photo.user.name"
        :userProfileImageUrl="photo.user.profile_image.small"
      ></PhotoItem>
    </ul>
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
  methods: {

  },
};
</script>

<style lang="scss" scoped>
h2 {
  padding: 40px;
  text-align: start;
}

ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden; 
}
</style>