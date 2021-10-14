<template>
  <div class="page-wrapper compact-wrapper" id="pageWrapper">
    <!-- Page Header Start-->

    <div class="page-main-header">
      <div class="main-header-right row m-0">
        <div class="main-header-left">
          <Logo />
        </div>

        <Search />
        <div class="nav-right col pull-right right-menu p-0">
          <ul class="nav-menus">
            <li>
              <Maximize />
            </li>

            <Bookmark />
            <Notification />

            <li>
              <Mode />
            </li>

            <li class="onhover-dropdown">
              <i data-feather="message-square"></i>
              <Message />
            </li>

            <li class="onhover-dropdown p-0">
              <LogoutButton />
            </li>
          </ul>
        </div>
        <div class="d-lg-none mobile-toggle pull-right w-auto">
          <i data-feather="more-horizontal"></i>
        </div>
      </div>
    </div>
    <!-- Page Header Ends-->
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import LogoutButton from "./Logout.vue";
import Message from "./Message.vue";
import Mode from "./Mode.vue";
import Notification from "./Notification.vue";
import Bookmark from "./BookMark.vue";
import Maximize from "./Maximize.vue";
import Search from "./Search.vue";

export default {
  components: {
    Logo,
    LogoutButton,
    Message,
    Mode,
    Notification,
    Bookmark,
    Maximize,
    Search,
  },
};
</script>
