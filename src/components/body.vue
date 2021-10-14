<template>
  <div class="page-wrapper compact-wrapper" id="pageWrapper">
    <div class="page-main-header">
      <Header />
    </div>
    <div class="page-body-wrapper sidebar-icon">
      <Leftsidebar />
      <div class="page-body">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
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
