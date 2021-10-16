<template>
  <div class="logo-wrapper">
    <a href="index.html"
      ><img class="img-fluid" src="../../assets/images/logo/logo.png" alt=""
    /></a>
  </div>
  <div class="dark-logo-wrapper">
    <a href="index.html"
      ><img
        class="img-fluid"
        src="../../assets/images/logo/dark-logo.png"
        alt=""
    /></a>
  </div>
  <div class="toggle-sidebar" @click="toggle_sidebar">
    <vue-feather type="align-center" class="status_toggle middle"></vue-feather>
  </div>
</template>

<script>
export default {
  methods: {
    toggle_sidebar() {
      this.$store.dispatch("menu/opensidebar");
    },
  },
};
</script>
