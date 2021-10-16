<template>
  <div class="page-wrapper compact-wrapper" id="pageWrapper">
    <div class="page-main-header" :class="{ close_icon: !togglesidebar }">
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
import { mapState } from "vuex";
import Header from "./Header/index.vue";
import Leftsidebar from "./LeftSideBar/index.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Header,
    Leftsidebar,
    Footer,
  },
  computed: {
    ...mapState({
      togglesidebar: (state) => state.menu.togglesidebar,
    }),
  },
};
</script>
