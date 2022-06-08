<template>
  <div class="container">
    <div class="items-container">
      <div class="container-image">
        <img src="@/assets/home-plate.png" alt="Serving Plate" />
      </div>
      <div class="container-text">
        <p class="header">
          No luck having quality lunch at work? Say no more, We've got your
          back.
        </p>
        <img class="separator" src="@/assets/separator.svg" alt="Separator" />
        <p class="footer">
          We create and deliver delectable meals for you, made from scratch with
          fresh, healthy and locally grown ingredients.
        </p>
        <BaseButton class="btn">Submit</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../BaseButton.vue";
export default { components: { BaseButton } };
</script>

<style lang="sass" scoped>

@import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap")
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap")

.container
    margin-top: -17px
    height: 632px
    width: 100%
    background-color: #00ccbb
.items-container
    display: flex
    flex-direction: row
    justify-content: space-around
    .container-image
        margin-left: 40px
        position: absolute
        right: 0
        img
            width: 500px
            height: 500px
    .container-text
        margin: 0 40px 0 40px
        color: white
        margin-top: 10%
        width: 50%
        position: absolute
        left: 0
        .header
            font-size: 45px
            font-family: "Work Sans";
        .separator
            margin-top: -100px
        .btn
            margin-top: 20px
            margin-bottom: 20px


@media only screen and (max-width: 1190px)
    .container
        height: 684px
@media only screen and (max-width: 900px)
    .container
        height: 684px
        display: table
        width: 100%
    .items-container
        display: table-cell
        vertical-align: middle
        position: relative
        .container-image
            position: absolute
            top: 0
            left: 25%
            img
                width: 400px
                height: 400px
        .container-text
            width: 100%
            margin-top: 0
            margin-left: 40px
            font-family: "Montserrat"
            .footer
                margin-right: 80px
                font-family: "Montserrat"
            .header
                margin-right: 80px
                font-size: 30px
                font-family: "Work Sans";
@media only screen and (max-width: 580px)
    .container
        height: 684px
        display: table
        width: 100%
    .items-container

        display: table-cell
        vertical-align: middle
        position: relative
        .container-image
            margin-top: 8%
            position: absolute
            top: 0
            left: 15%
            img
                width: 250px
                height: 250px
        .container-text
            width: 100%
            margin-top: -20%
            margin-left: 40px
            .header
                margin-right: 80px
                font-size: 30px
                font-family: "Work Sans";
            .footer
                font-size: 16px;
                margin-right: 80px
                font-family: "Montserrat"
</style>
