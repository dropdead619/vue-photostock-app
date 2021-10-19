<template>
  <section class="photo-list">
    <h2>Free stock photos</h2>
    <PhotoItem
      v-for="photo in photoList"
      :key="photo.id"
      :url="photo.url"
      :authorName="photo.authorName"
      :authorAvatarUrl="photo.authorAvatarUrl"
    ></PhotoItem>
  </section>
</template>

<script>
import PhotoItem from "./PhotoItem.vue";
export default {
  components: {
    PhotoItem,
  },
  data() {
    return {
      photoList: [
        // {
        //   id: "1",
        //   url: "https://www.pexels.com/ru-ru/photo/5602635/",
        //   authorName: "Michael Duplis",
        //   authorAvatarUrl:
        //     "https://images.pexels.com/users/avatars/1009445/michael-dupuis-721.jpeg?auto=compress&fit=crop&h=60&w=60",
        // },
        // {
        //   photoId: "2",
        //   url: "https://images.pexels.com/photos/7665337/pexels-photo-7665337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //   authorName: "Michael Duplis",
        //   authorAvatarUrl:
        //     "https://images.pexels.com/users/avatars/1009445/michael-dupuis-721.jpeg?auto=compress&fit=crop&h=60&w=60",
        // },
        // {
        //   photoId: "3",
        //   url: "https://images.pexels.com/photos/9524538/pexels-photo-9524538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //   authorName: "Michael Duplis",
        //   authorAvatarUrl:
        //     "https://images.pexels.com/users/avatars/1009445/michael-dupuis-721.jpeg?auto=compress&fit=crop&h=60&w=60",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>