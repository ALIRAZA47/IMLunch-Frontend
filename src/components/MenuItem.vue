<template>
  <div
    :class="{
      'item-container': small,
      'large-item-container': large,
    }"
  >
    <div class="img">
      <img id="primary-ring" class="ring" v-if="large" :src="ring" alt="Ring" />
      <img
        class="ring"
        id="secondary-ring"
        v-if="large"
        :src="ringYellow"
        alt="Ring"
      />
      <img
        :src="dishPicture"
        alt="Dish Picture"
        :class="{
          'item-picture': small,
          'large-dish-picture': large,
        }"
      />
    </div>
    <div
      :style="'border-color: ' + borderColor"
      v-bind="$attrs"
      name="menu-text-box"
      :class="[
        {
          'item-title': small,
          'large-item-title': large,
        },
      ]"
    >
      <p>{{ dish }}</p>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    dish: {
      type: String,
      required: true,
    },
    dishPicture: {
      type: String,
      default: "https://itsmylunch.com/images/Chicken%20Chilli%20Dry.png",
    },
    borderColor: {
      type: String,
      default: "white",
    },
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: true,
    },
    ringIcon: {
      type: String,
      default: null,
    },
  },
  computed: {
    icon() {
      return require("@/assets/" + this.dishPicture);
    },

    ring() {
      return require("@/assets/menu/featured-menu/ringPrimary.svg");
    },
    ringYellow() {
      return require("@/assets/menu/featured-menu/ringSecondary.svg");
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/styles.sass"
.item-container
  @include center($direction: column)
  position: relative
  margin: 0
  padding: 0
  //TODO remove this while using
  height: 110px
  width: 230px
  .item-title
    position: absolute
    bottom: 0
    display: flex;
    justify-content: center;
    width: 100%
    border-radius: 10px
    filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09));
    background-color: #ffffff
    border: 3px solid
    border-color: #37b2a4
    font-size: 16px
    color: #000000
    font-family: "Raleway"
    p
      padding-top: 20px
  .item-picture
    position: absolute
    top: 5px
    left: 88px
    border-radius: 50%
    z-index: 9
    height: 53px
    width: 53px
.large-item-container
  @include center($direction: column)
  width: 342px;
  height: 320px;
  position: relative;
  margin: 0
  padding: 0
  #secondary-ring
    display: none
  &:hover
    .large-item-title
      background-color: #ffffff
      border: 3px solid #ffc400 !important
      color: #ffc400
      transition: 0.3s ease-in
    #primary-ring
      display: none
    #secondary-ring
      display: block
  .large-item-title
    position: absolute
    bottom: 0
    display: flex;
    justify-content: center;
    width: 100%
    height: 236px
    border-radius: 30px;
    filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09));
    background-color: #00ccbb
    border: 3px solid
    border-color: #37b2a4
    color: #ffffff
    font-size: 20px;
    font-weight: 600;
    font-family: "Montserrat";
    p
      padding-top: 20px
      position: absolute
      bottom: 10%

  .large-dish-picture
        position: absolute
        top: 0
        left: 50%
        transform: translateX(-47%,)
        border-radius: 50%
        z-index: 9
        width: 210px;
        height: 210px;
  .ring
      position: absolute
      top: -6px
      left: 50%
      transform: translateX(-47%,)
      width: 216px;
      height: 153px;

@media screen  and (max-width: 500px)
  .large-item-container
    width: 270px;
    height: 260px
    .large-dish-picture
        width: 170px;
        height: 170px;
    .large-item-title
      width: 270px;
      height: 186px;
    .ring
      position: absolute
      top: -4px
      left: 50%
      transform: translateX(-47%,)
      width: 190px;
      height: 123px;
</style>
