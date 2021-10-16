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
        class="dropdown"
      >
        <!-- link title -->
        <div v-if="menuItem.type == 'headtitle'">
          <h6>{{ menuItem.headTitle }}</h6>
        </div>

        <!-- Sub -->
        <a
          href="javascript:void(0)"
          class="nav-link menu-title"
          :class="{'active': menuItem.active}"
          v-if="menuItem.type == 'sub'"
          @click="setNavActive(menuItem, index)"
        >
          <!-- <feather :type="menuItem.icon" class="top"></feather> -->
          <vue-feather :type="menuItem.icon"></vue-feather>

          <span>
            {{ menuItem.title }}
          </span>

          <div class="according-menu" v-if="menuItem.children">
            <!-- <i class="fa fa-angle-right"></i> -->
            <!-- <vue-feather type="chevron-right"></vue-feather> -->
                          <vue-feather
                :type="menuItem.active ? 'chevron-down' : 'chevron-right'"
              ></vue-feather>
          </div>
        </a>

        <!-- Link -->
        <router-link
          :to="menuItem.path"
          class="nav-submenu menu-content"
          v-if="menuItem.type == 'link'"
          router-link-exact-active
          exact
          v-on:click="hidesecondmenu()"
        >
          <vue-feather :type="menuItem.icon" class="top"></vue-feather>
          <vue-feather :type="menuItem.icon"></vue-feather>
          <span>
            {{ menuItem.title }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
        </router-link>

        <!-- External Link -->
        <a
          :href="menuItem.path"
          class="nav-submenu menu-content"
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
          class="nav-submenu menu-content"
          v-if="menuItem.type == 'extTabLink'"
          @click="setNavActive(menuItem, index)"
        >
          <!-- <feather :type="menuItem.icon" class="top"></feather> -->
          <vue-feather :type="menuItem.icon"></vue-feather>
          <span>
            {{ menuItem.title }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
        </a>
        <!-- 2nd Level Menu -->
        <ul
          class="nav-submenu menu-content"
          v-if="menuItem.children"
          v-bind:style="menuItem.active ? 'display:block' : 'display:none;'"
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

              <!-- <label
                :class="'badge badge-' + childrenItem.badgeType + ' pull-right'"
                v-if="childrenItem.badgeType"
                >{{ childrenItem.badgeValue }}</label
              > -->

              <vue-feather
                :type="childrenItem.active ? 'chevron-down' : 'chevron-right'" v-if="childrenItem.children"
              ></vue-feather>

              <!-- <i
                class="fa pull-right mt-1"
                v-bind:class="[
                  childrenItem.active
                    ? 'fa fa-angle-down'
                    : 'fa fa-angle-right',
                ]"
                v-if="childrenItem.children"
              ></i> -->
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
              <!-- <label
                :class="'badge badge-' + childrenItem.badgeType + ' pull-right'"
                v-if="childrenItem.badgeType"
                >{{ childrenItem.badgeValue }}</label
              > -->

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
               v-bind:style="childrenItem.active? 'display:block' : 'display:none;'"
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
    setNavActive(item) {
      this.$store.dispatch("menu/setNavActive", item);
      // if(this.layoutobject.split(' ').includes('compact-sidebar') && window.innerWidth > 991) {
      //   if(this.menuItems.some(menuItem => menuItem.active === true)) {
      //     this.$store.state.menu.activeoverlay = true;
      //   } else {
      //     this.$store.state.menu.activeoverlay = false;
      //   }
      // }
    },
  },
  mounted() {
    console.log("Data", this.menuItems);
  },
};
</script>
