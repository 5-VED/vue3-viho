<template>
  <vue-feather
    type="message-square"
    size="15"
    height="15"
    @click="message_open()"
  ></vue-feather>
  <ul class="chat-dropdown onhover-show-div" :class="{ active: message }">
    <li>
      <div class="media">
        <img
          class="img-fluid rounded-circle me-3"
          src="../../assets/images/user/4.jpg"
          alt=""
        />
        <div class="media-body">
          <span>Ain Chavez</span>
          <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
        </div>
        <p class="f-12">32 mins ago</p>
      </div>
    </li>
    <li>
      <div class="media">
        <img
          class="img-fluid rounded-circle me-3"
          src="../../assets/images/user/1.jpg"
          alt=""
        />
        <div class="media-body">
          <span>Erica Hughes</span>
          <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
        </div>
        <p class="f-12">58 mins ago</p>
      </div>
    </li>
    <li>
      <div class="media">
        <img
          class="img-fluid rounded-circle me-3"
          src="../../assets/images/user/2.jpg"
          alt=""
        />
        <div class="media-body">
          <span>Kori Thomas</span>
          <p class="f-12 light-font">Lorem Ipsum is simply dummy...</p>
        </div>
        <p class="f-12">1 hr ago</p>
      </div>
    </li>
    <li class="text-center">
      <a class="f-w-700" href="javascript:void(0)">See All </a>
    </li>
  </ul>
</template>


<script>
export default {
  name: "Message",
  data() {
    return {
      message: false,
    };
  },
  methods: {
    message_open() {
      this.message = !this.message;
    },
  },
};
</script>

