<template>
  <li class="onhover-dropdown">
    <div class="boo kmark-box">
      <vue-feather type="star" size="15" height="15"></vue-feather>
    </div>
    <div class="bookmark-dropdown onhover-show-div">
      <div class="form-group mb-0">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
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
          <vue-feather
            class="bookmark-icon"
            type="inbox"
            size="15"
            height="15"
          ></vue-feather>
          Email<span class="pull-right">
            <vue-feather type="star" size="15" height="15"></vue-feather>
          </span>
        </li>
        <li class="add-to-bookmark">
          <vue-feather
            class="bookmark-icon"
            type="message-square"
            size="15"
            height="15"
          ></vue-feather>
          Chat<span class="pull-right">
            <vue-feather type="star" size="15" height="15"></vue-feather>
          </span>
        </li>
        <li class="add-to-bookmark">
          <vue-feather
            class="bookmark-icon"
            type="command"
            size="15"
            height="15"
          ></vue-feather>
          Feather Icon<span class="pull-right">
            <vue-feather type="star" size="15" height="15"></vue-feather>
          </span>
        </li>
        <li class="add-to-bookmark">
          <vue-feather
            class="bookmark-icon"
            type="airplay"
            size="15"
            height="15"
          ></vue-feather>
          Widgets<span class="pull-right">
            <vue-feather type="star" size="15" height="15"></vue-feather>
          </span>
        </li>
      </ul>
    </div>
  </li>
</template>

