<template>
  <li class="onhover-dropdown">
    <div class="boo kmark-box">
      <!-- <i data-feather="star"></i> -->
      <vue-feather type="star" size="15" height="15"></vue-feather>
    </div>
    <div class="bookmark-dropdown onhover-show-div">
      <div class="form-group mb-0">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <!-- <i class="fa fa-search"></i> -->
              <vue-feather type="search" size="15" height="15"></vue-feather>
            </span>
          </div>
          <input
            class="form-control"
            type="text"
            placeholder="Search for bookmark..."
          />
        </div>
      </div>
      <ul class="m-t-5">
        <li class="add-to-bookmark">
          <!-- <i class="bookmark-icon" data-feather="inbox"></i> -->
          <vue-feather
            class="bookmark-icon"
            type="inbox"
            size="15"
            height="15"
          ></vue-feather>
          Email<span class="pull-right">
            <!-- <i data-feather="star"></i> -->
            <vue-feather type="star" size="15" height="15"></vue-feather>
          </span>
        </li>
        <li class="add-to-bookmark">
          <!-- <i class="bookmark-icon" data-feather="message-square"></i> -->
          <vue-feather
            class="bookmark-icon"
            type="message-square"
            size="15"
            height="15"
          ></vue-feather>
          Chat<span class="pull-right">
            <!-- <i data-feather="star"></i> -->
            <vue-feather type="star" size="15" height="15"></vue-feather>
          </span>
        </li>
        <li class="add-to-bookmark">
          <!-- <i class="bookmark-icon" data-feather="command"></i> -->
          <vue-feather
            class="bookmark-icon"
            type="command"
            size="15"
            height="15"
          ></vue-feather>
          Feather Icon<span class="pull-right">
            <!-- <i data-feather="star"></i>  -->
            <vue-feather type="star" size="15" height="15"></vue-feather>
          </span>
        </li>
        <li class="add-to-bookmark">
          <!-- <i class="bookmark-icon" data-feather="airplay"></i> -->
          <vue-feather
            class="bookmark-icon"
            type="airplay"
            size="15"
            height="15"
          ></vue-feather>
          Widgets<span class="pull-right">
            <!-- <i data-feather="star"> </i> -->
            <vue-feather type="star" size="15" height="15"></vue-feather>
          </span>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style></style>
