<template>
  <div class="page-wrapper compact-wrapper" id="pageWrapper">
    <Header />
    <Leftsidebar />
  </div>
  <!-- <Footer /> -->
</template>


<script>
import Header from "./Header/index.vue";
import Leftsidebar from "./LeftSideBar/index.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Header,
    Leftsidebar,
    Footer,
  },
};
</script>

