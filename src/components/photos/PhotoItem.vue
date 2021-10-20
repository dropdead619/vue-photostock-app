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
  <div class="photo__modal">
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
  display: flex;
  margin: 5px;
  flex-direction: column;
  width: 25%;
  flex-grow: 1;
  &__layer {
    position: absolute;
    display: flex;
    width: 100%;
    height: 70px;
    bottom: 0;
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
    object-fit: cover;
    max-height: 100%;
    min-width: 100%;
    vertical-align: bottom;
  }
}
</style>