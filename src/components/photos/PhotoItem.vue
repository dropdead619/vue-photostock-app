<template>
  <div class="photo">
    <!-- <div class="photo-layer">
      <div class="author">
        <img :src="props.authorAvatarUrl" :alt="props.authorName" />
        <div class="author-name">{{ props.authorName }}</div>
      </div>
    </div>
    <img :src="props.url" alt="" /> -->
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    authorName: {
      type: String,
    },
    authorAvatarUrl: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.photo {
  position: relative;
  .photo-layer {
    position: absolute;
    display: flex;
    width: 100%;
    height: 40px;
    bottom: 0;
  }
}
</style>