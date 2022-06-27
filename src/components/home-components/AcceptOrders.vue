<template>
  <div class="container">
    <div class="container-text">
      <p class="header">
        No luck having quality lunch at work? Say no more, We've got your back.
      </p>
      <img class="separator" src="@/assets/separator.svg" alt="Separator" />
      <p class="footer">
        We create and deliver delectable meals for you, made from scratch with
        fresh, healthy and locally grown ingredients.
      </p>
      <BaseButton class="btn"
        ><a href="#order-form" style="text-decoration: none; color: #707070">
          Submit</a
        ></BaseButton
      >
    </div>
    <div class="container-image">
      <img src="@/assets/home-plate.png" alt="Serving Plate" />
    </div>
  </div>
</template>

<script>
import BaseButton from "../BaseButton.vue";
export default {
  components: { BaseButton },
  methods: {},
};
</script>

<style lang="sass" scoped>

@import "@/styles.sass";

.container
    height: auto
    background-color: #00ccbb
    @include center($direction: row)
    justify-content: space-between
    padding: 20px 40px 20px 40px
    .container-image
        width: 40%
        img
            min-width: 240px
            min-height: 240px
            height: 80%
            width: 80%
    .container-text

        color: white
        width: 60%
        height: auto
        .header
            font-size: 45px
            font-family: "Work Sans";
        .btn
            margin-top: 20px
            margin-bottom: 20px


@media only screen and (max-width: 1100px)
    .container
        flex-direction: column-reverse
        justify-content: flex-start
        .container-text
            width: 100%
            height: auto
        .container-image
            img
                // width: 100%
                height: 100%
// @media only screen and (max-width: 580px)
</style>
