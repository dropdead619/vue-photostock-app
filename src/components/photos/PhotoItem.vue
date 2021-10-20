<template>
  <div class="photo">
    <div class="photo__layer">
      <div class="photo__author">
        <img :src="userProfileImageUrl" :alt="userName" />
        <div class="author__name">{{ userName }}</div>
      </div>
    </div>
    <img :src="url" :alt="alt" @click="toggleModal" :id="id" />
  </div>
  <teleport to="body">
    <div class="modal" v-if="isModalOpened" @click="toggleModal">
      <dialog open class="modal__dialog">
        <img
          class="modal__fullsizePhoto"
          :src="currentPhoto.urls.full"
          :alt="currentPhoto.alt_description"
        />
      </dialog>
    </div>
  </teleport>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    id: {
      type: String,
    },
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
  data() {
    return {
      isModalOpened: false,
      activeImageId: "",
    };
  },
  computed: {
    ...mapState(["stockPhotos"]),
    currentPhoto() {
      return this.stockPhotos.find((el) => el.id === this.activeImageId);
    },
  },
  methods: {
    toggleModal(event) {
      this.activeImageId = event.target.id;

      this.isModalOpened = !this.isModalOpened;
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
  margin-bottom: 3px;
  cursor: pointer;
  &__layer {
    position: absolute;
    display: flex;
    width: 100%;
    height: 70px;
    bottom: 0;
    font-size: 14px;
    color: white;
    padding: 5px 10px;
    visibility: hidden;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
    opacity: 0;
    transition: 0.1s ease-in;
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
    transform: scale(1.01);
    .photo__layer {
      opacity: 1;
      visibility: visible;
    }
  }
  > img {
    width: 100%;
    border-radius: 4px;
  }
}

.modal {
  position: fixed;
  top: 0;
  z-index: 999;
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  &__dialog {
    position: inherit;
    margin: 0 auto;
    max-width: 60vw;
    max-height: 80vh;
    min-width: 200px;
    border: none;
    img {
      display: inline-block;
      max-height: 80vh;
      height: 100%;
    }
  }
}
</style>