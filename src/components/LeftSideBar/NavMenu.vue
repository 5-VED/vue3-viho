<template>
  <div id="mainnav">
    <ul class="nav-menu custom-scrollbar">
      <li class="back-btn">
        <div class="mobile-back text-end">
          <span>Back</span
          ><i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
        </div>
      </li>

      <li
        v-for="(menuItem, index) in menuItems"
        :key="index"
        :class="{
          active: menuItem.active,
          'sidebar-main-title': menuItem.type == 'headtitle',
        }"
        class="sidebar-list"
      >
        <!-- link title -->
        <div v-if="menuItem.type == 'headtitle'">
          <h6>{{ menuItem.headTitle }}</h6>
        </div>
        <!-- Sub -->
        <label
          :class="'badge badge-' + menuItem.badgeType"
          v-if="menuItem.badgeType"
          >{{ menuItem.badgeValue }}</label
        >
        <a
          href="javascript:void(0)"
          class="sidebar-link sidebar-title"
          v-if="menuItem.type == 'sub'"
          @click="setNavActive(menuItem, index)"
        >
          <!-- <feather :type="menuItem.icon" class="top"></feather> -->
          <span>
            {{ menuItem.title }}
          </span>
          <div class="according-menu" v-if="menuItem.children">
            <i class="fa fa-angle-right pull-right"></i>
          </div>
        </a>
        <!-- Link -->
        <router-link
          :to="menuItem.path"
          class="sidebar-link sidebar-title"
          v-if="menuItem.type == 'link'"
          router-link-exact-active
          exact
          v-on:click="hidesecondmenu()"
        >
          <!-- <vue-feather :type="menuItem.icon" class="top"></vue-feather> -->
          <vue-feather type="moon"></vue-feather>
          <span>
            {{ menuItem.title }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
        </router-link>
        <!-- External Link -->
        <a
          :href="menuItem.path"
          class="sidebar-link sidebar-title"
          v-if="menuItem.type == 'extLink'"
          @click="setNavActive(menuItem, index)"
        >
          <!-- <feather :type="menuItem.icon" class="top"></feather> -->
          <span>
            {{ menuItem.title }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
        </a>
        <!-- External Tab Link -->
        <a
          :href="menuItem.path"
          target="_blank"
          class="sidebar-link sidebar-title"
          v-if="menuItem.type == 'extTabLink'"
          @click="setNavActive(menuItem, index)"
        >
          <!-- <feather :type="menuItem.icon" class="top"></feather> -->
          <span>
            {{ menuItem.title }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
        </a>
        <!-- 2nd Level Menu -->
        <ul
          class="sidebar-submenu"
          v-if="menuItem.children"
          :class="{ 'menu-open': menuItem.active }"
        >
          <li
            v-for="(childrenItem, index) in menuItem.children"
            :key="index"
            :class="{ active: childrenItem.active }"
          >
            <!-- Sub -->
            <a
              class="submenu-title"
              href="javascript:void(0)"
              v-if="childrenItem.type == 'sub'"
              @click="setNavActive(childrenItem, index)"
            >
              {{ childrenItem.title }}
              <label
                :class="'badge badge-' + childrenItem.badgeType + ' pull-right'"
                v-if="childrenItem.badgeType"
                >{{ childrenItem.badgeValue }}</label
              >
              <i
                class="fa pull-right mt-1"
                v-bind:class="[
                  childrenItem.active
                    ? 'fa fa-angle-down'
                    : 'fa fa-angle-right',
                ]"
                v-if="childrenItem.children"
              ></i>
            </a>
            <!-- Link -->
            <router-link
              class="submenu-title"
              :to="childrenItem.path"
              v-if="childrenItem.type == 'link'"
              router-link-exact-active
              exact
              v-on:click="hidesecondmenu()"
            >
              {{ childrenItem.title }}
              <label
                :class="'badge badge-' + childrenItem.badgeType + ' pull-right'"
                v-if="childrenItem.badgeType"
                >{{ childrenItem.badgeValue }}</label
              >
              <i
                class="fa fa-angle-right pull-right mt-1"
                v-if="childrenItem.children"
              ></i>
            </router-link>
            <!-- External Link -->
            <a
              :href="childrenItem.path"
              v-if="childrenItem.type == 'extLink'"
              class="submenu-title"
            >
              {{ childrenItem.title }}
              <label
                :class="'badge badge-' + childrenItem.badgeType + ' pull-right'"
                v-if="childrenItem.badgeType"
                >{{ childrenItem.badgeValue }}</label
              >
              <i
                class="fa fa-angle-right pull-right mt-1"
                v-if="childrenItem.children"
              ></i>
            </a>
            <!-- External Tab Link -->
            <a
              class="submenu-title"
              :href="childrenItem.path"
              target="_blank"
              v-if="childrenItem.type == 'extTabLink'"
            >
              {{ childrenItem.title }}
              <label
                :class="'badge badge-' + childrenItem.badgeType + ' pull-right'"
                v-if="childrenItem.badgeType"
                >{{ childrenItem.badgeValue }}</label
              >
              <i
                class="fa fa-angle-right pull-right mt-1"
                v-if="childrenItem.children"
              ></i>
            </a>
            <!-- 3rd Level Menu -->
            <ul
              class="nav-sub-childmenu submenu-content"
              v-if="childrenItem.children"
              :class="{ opensubchild: childrenItem.active }"
            >
              <li
                v-for="(childrenSubItem, index) in childrenItem.children"
                :key="index"
              >
                <!-- Link -->
                <router-link
                  :to="childrenSubItem.path"
                  v-if="childrenSubItem.type == 'link'"
                  router-link-exact-active
                  exact
                  v-on:click="hidesecondmenu()"
                >
                  {{ childrenSubItem.title }}
                  <label
                    :class="
                      'badge badge-' + childrenSubItem.badgeType + ' pull-right'
                    "
                    v-if="childrenSubItem.badgeType"
                    >{{ childrenSubItem.badgeValue }}</label
                  >
                  <i
                    class="fa fa-angle-right pull-right"
                    v-if="childrenSubItem.children"
                  ></i>
                </router-link>
                <!-- External Link -->
                <router-link
                  :to="childrenSubItem.path"
                  v-if="childrenSubItem.type == 'extLink'"
                  router-link-exact-active
                >
                  {{ childrenSubItem.title }}
                  <label
                    :class="
                      'badge badge-' + childrenSubItem.badgeType + ' pull-right'
                    "
                    v-if="childrenSubItem.badgeType"
                    >{{ childrenSubItem.badgeValue }}</label
                  >
                  <i
                    class="fa fa-angle-right pull-right"
                    v-if="childrenSubItem.children"
                  ></i>
                </router-link>
                <!-- External Tab Link -->
                <router-link
                  :to="childrenSubItem.path"
                  v-if="childrenSubItem.type == 'extLink'"
                  router-link-exact-active
                >
                  {{ childrenSubItem.title }}
                  <label
                    :class="
                      'badge badge-' + childrenSubItem.badgeType + ' pull-right'
                    "
                    v-if="childrenSubItem.badgeType"
                    >{{ childrenSubItem.badgeValue }}</label
                  >
                  <i
                    class="fa fa-angle-right pull-right"
                    v-if="childrenSubItem.children"
                  ></i>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navmenu",
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
    }),
  },
  methods: {
    setNavActiove(item) {},
  },
  mounted() {
    console.log("Data", this.menuItems);
  },
};
</script>
