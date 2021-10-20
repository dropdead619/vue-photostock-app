<template>
  <li class="photo">
    <div class="photo__layer">
      <div class="photo__author">
        <img :src="userProfileImageUrl" :alt="userName" />
        <div class="author__name">{{ userName }}</div>
      </div>
    </div>
    <img :src="url" :alt="alt" />
  </li>
  <div class="photo__modal" v-if="false">
    <dialog open></dialog>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    alt: {
      type: String,
    },
    userName: {
      type: String,
    },
    userProfileImageUrl: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.photo {
  position: relative;
  display: inline-block;
  font-size: 0;
  overflow: hidden;
  &__layer {
    position: absolute;
    display: flex;
    width: 100%;
    height: 70px;
    bottom: 0;
      font-size: 14px;
    color: white;
    padding: 5px 10px;
    display: none;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
    .photo__author {
      display: flex;
      align-items: center;
      width: 100%;

      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
    }
  }
  &:hover {
    .photo__layer {
      display: flex;
    }
  }
  > img {
    width: 100%;
  }
}
</style>