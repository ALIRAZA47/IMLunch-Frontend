<template>
  <div class="item-container">
    <div class="img">
      <img
        :src="icon"
        alt="manchorian.png"
        class="item-picture"
        style="width: 53px; height: 53px"
      />
    </div>
    <div :style="borderColor" class="item-title">
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
      required: true,
    },
    borderColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return require("@/assets/" + this.dishPicture);
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
</style>
