<template>
  <div class="container-fluid">
    <div class="page-header">
      <div class="row">
        <div class="col-sm-6">
          <h3>{{ title }}</h3>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ path: '/dashboard/default' }"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item" v-if="main">{{ main }}</li>
            <li class="breadcrumb-item active" v-if="title">{{ title }}</li>
          </ol>
        </div>
        <div class="col-sm-6">
          <!-- Bookmark Start-->
          <div class="bookmark">
            <ul>
              <li>
                <a
                  href="javascript:void(0)"
                  data-container="body"
                  data-bs-toggle="popover"
                  data-placement="top"
                  title=""
                  data-original-title="Tables"
                  ><vue-feather type="inbox"></vue-feather
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-container="body"
                  data-bs-toggle="popover"
                  data-placement="top"
                  title=""
                  data-original-title="Chat"
                  ><vue-feather type="message-square"></vue-feather
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-container="body"
                  data-bs-toggle="popover"
                  data-placement="top"
                  title=""
                  data-original-title="Icons"
                  ><vue-feather type="command"></vue-feather
                ></a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-container="body"
                  data-bs-toggle="popover"
                  data-placement="top"
                  title=""
                  data-original-title="Learning"
                  ><vue-feather type="layers"></vue-feather
                ></a>
              </li>
              <li>
                <a href="javascript:void(0)"
                  ><vue-feather
                    class="bookmark-search"
                    type="star"
                  ></vue-feather
                ></a>
                <form class="form-inline search-form">
                  <div class="form-group form-control-search">
                    <input type="text" placeholder="Search.." />
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <!-- Bookmark Ends-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      default: "home",
    },
    main: {
      default: "",
    },
  },
};
</script>


