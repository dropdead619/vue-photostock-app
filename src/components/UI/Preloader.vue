<template>
  <div class="modal">
    <dialog open class="modal__dialog">
      <img src="@/assets/spinner_preload.svg" alt="preloader" />
    </dialog>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  background-color: rgba(0, 0, 0, 0.4);
  &__dialog {
    position: inherit;
    margin: 0 auto;
    border: none;
    background: transparent;
    width: 50px;
    height: 50px;
    img {
        width: 100%;
        height: 100%;
    }
  }
}
</style>