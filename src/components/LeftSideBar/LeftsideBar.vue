<template>
  <!-- Page Sidebar Start-->
  <header class="main-nav">
    <div class="sidebar-user text-center">
      <a class="setting-primary" href="javascript:void(0)">
        <vue-feather type="settings"></vue-feather> </a
      ><img
        class="img-90 rounded-circle"
        src="../../assets/images/dashboard/1.png"
        alt=""
      />
      <div class="badge-bottom">
        <span class="badge badge-primary">New</span>
      </div>
      <a href="user-profile.html">
        <h6 class="mt-3 f-14 f-w-600">Emay Walter</h6></a
      >
      <p class="mb-0 font-roboto">Human Resources Department</p>
      <ul>
        <li>
          <span><span class="counter">19.8</span>k</span>
          <p>Follow</p>
        </li>
        <li>
          <span>2 year</span>
          <p>Experince</p>
        </li>
        <li>
          <span><span class="counter">95.2</span>k</span>
          <p>Follower</p>
        </li>
      </ul>
    </div>

    <nav>
      <div class="main-navbar">
        <div class="left-arrow" id="left-arrow">
          <i data-feather="arrow-left"></i>
        </div>
        <Navmenu />
        <div class="right-arrow" id="right-arrow">
          <i data-feather="arrow-right"></i>
        </div>
      </div>
    </nav>
  </header>
  <!-- Page Siddebar Ends>-->
</template>

<script>
import Navmenu from "./NavMenu.vue";
export default {
  components: {
    Navmenu,
  },
};
</script>
