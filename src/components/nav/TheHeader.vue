<template>
  <div class="wrapper">
    <div class="wide-container">
      <div class="logo-container">
          <a href="#">
        <img src="@/assets/logo.svg" alt="logo" />
        </a>
      </div>
      <div class="search">
        <input type="search" placeholder="Search free images..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  background: #232a34;
  height: 65px;
  display: flex;
  align-items: center;
  position: sticky;
  top:0;
  z-index: 999;
}
.wide-container {
    max-width: 1700px;
  display: flex;
  align-items: center;
}

.logo-container {
  img {
    width: 50px;
  }
}

.search {
  max-width: 800px;
  width: 100%;
  padding-left: 40px;
  input {
    width: 100%;
    padding: 10px 20px;
    border: none;
    outline: none;
  }
}
</style>