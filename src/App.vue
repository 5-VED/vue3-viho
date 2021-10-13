<template>
  <!-- <div id="nav"> -->
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <!-- </div> -->



  <!-- Loader starts-->

  <!-- <div class="loader-wrapper" :class="{ loaderhide: !show }">
    <div class="theme-loader">
      <div class="loader-p"></div>
    </div>
  </div> -->

  <!-- Loader ends-->
<router-view />
</template>

<script>
export default {
}

</script>``
``
<style lang="scss" scoped>
.loader-wrapper.loderhide {
  display: none;
}
</style>
