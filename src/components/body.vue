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
      menuItems: (state) => state.menu.data,
    }),
  },
  watch: {
    $route() {
      this.menuItems.filter((items) => {
        if (items.path === this.$route.path)
          this.$store.dispatch("menu/setActiveRoute", items);
        if (!items.children) return false;
        items.children.filter((subItems) => {
          if (subItems.path === this.$route.path)
            this.$store.dispatch("menu/setActiveRoute", subItems);
          if (!subItems.children) return false;
          subItems.children.filter((subSubItems) => {
            if (subSubItems.path === this.$route.path)
              this.$store.dispatch("menu/setActiveRoute", subSubItems);
          });
        });
      });
    },
  },
};
</script>
