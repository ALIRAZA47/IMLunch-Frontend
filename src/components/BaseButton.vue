<template>
  <div>
    <button
      v-bind="$attrs"
      class="button"
      :class="buttonClass"
      v-on="$listeners"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap")
.button
    width: 163px
    height: 48px
    border-radius: 11px
    filter: drop-shadow(0px 30px 20px rgba(0, 0, 0, 0.13))
    background-color: #ffffff
    border: 2px solid #ffc400
    font-size: 16px
    letter-spacing: 1px
    color: #707070
    font-weight: 700
    font-family: "Montserrat"
    &:hover
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
        box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    &:active
        -webkit-transform: scale(1)
        transform: scale(1)
        box-shadow: none
    .button:focus
        outline: 0
    &.-fill-gradient
        background: linear-gradient(to right, #16c0b0, #84cf6a)
        color: #ffffff;
    &:disabled
        -webkit-transform: scale(1);
        transform: scale(1);
        box-shadow: none;
        background: #eeeeee;

    .button + .button
        margin-left: 1em;

    &.-fill-gray
        background: rgba(0, 0, 0, 0.5);
        color: #ffffff;
    &.-size-small
        height: 32px;

    &.-icon-right
        text-align: left;
        padding: 0 20px;

    &.-icon-right > .icon
        margin-left: 10px;

    &.-icon-left
        text-align: right;
        padding: 0 20px;

    &.-icon-left > .icon
        margin-right: 10px;

    &.-icon-center
        padding: 0 20px;
</style>
