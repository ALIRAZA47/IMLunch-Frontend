<template>
  <div class="container">
    <img
      src="@/assets/bkg/monthly-based-menu-bg2.png"
      alt="monthly-based-menu-bg2.png"
      class="bg-img"
    />
    <div class="contents">
      <div class="header">
        <img src="@/assets/white-logo.svg" alt="white-logo.svg" class="icon" />
        <p class="title">Monthly Based Menu</p>
        <img
          src="@/assets/separator.svg"
          alt="separator.svg"
          class="separator"
        />
        <div class="btn">6000.00/Month</div>
      </div>
      <div class="menu-list">
        <MenuItem />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "../MenuItem.vue";
export default { components: { MenuItem } };
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap")
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap")
@import url("https://fonts.googleapis.com/css?family=Rubik&display=swap")

@mixin center($direction: row)
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: $direction;

.container
    overflow: hidden;
    position: relative
    @include center($direction: column)
    width: 100%
    height: 1220px
    padding: 0px
    margin: 0px
    background: url("@/assets/bkg/monthly-based-menu-bg1.png") no-repeat
    background-size: 100% 100%;
    .bg-img
        position: absolute
        top: -4
        left: 0
        width: 100%
        height: (100% + 4.3)
    .contents
        position: relative
        color: white
        padding: 100px
        .header
            paading: 0
            margin: 0
            width: 100%
            @include center($direction: column)
            .title
                width: 100%
                font-size: 30px;
                letter-spacing: 4px;
                color: #ffffff
                font-family: "Raleway"
            .separator
                margin-top: -10px
                width: 314px
            .btn
                @include center($direction: row)
                margin-top: 20px
                font-size: 23px;
                letter-spacing: 3px;
                color: #ffffff;
                font-weight: 400;
                font-family: "Rubik";
                width: 268px;
                height: 57px;
                border-radius: 11px;
                filter: drop-shadow(0px 15px 11.5px rgba(0,0,0,0.16));
                background-color: #ffc400;
                border: 3px solid #ffffff;
</style>
