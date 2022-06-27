<template>
  <div class="container">
    <div class="contents">
      <div class="title">
        <img src="@/assets/logo.png" alt="" style="width: 50px; height: 27px" />
        <p class="text-header">Our Featured Menu</p>
        <img class="separator" src="@/assets/separator.svg" alt="Separator" />
      </div>
      <div class="featured-menu-items">
        <div class="left-arrow arrow">
          <BaseLeftArrow />
        </div>
        <div
          v-for="(item, i) in featuredMenuItems"
          :key="i"
          class="menu-items"
          :class="'featured-menu-item-' + (i + 1)"
        >
          <MenuItem
            :dish="item.dish"
            :large="true"
            :dishPicture="require('@/assets/' + item.dishPicture)"
            :ringIcon="item.ringIcon"
          />
        </div>
        <div class="right-arrow arrow">
          <BaseRightArrow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "../MenuItem.vue";
import BaseRightArrow from "../BaseRightArrow.vue";
import BaseLeftArrow from "../BaseLeftArrow.vue";
export default {
  components: { MenuItem, BaseRightArrow, BaseLeftArrow },
  data() {
    return {
      featuredMenuItems: [
        {
          dish: "Haleem",
          dishPicture: "menu/featured-menu/dish-1/icon.png",
          ringIcon: "menu/featured-menu/dish-1/ring.svg",
        },
        {
          dish: "Haleem",
          dishPicture: "menu/featured-menu/dish-2/icon.png",
          ringIcon: "menu/featured-menu/dish-2/ring.svg",
        },
        {
          dish: "Chicken Biryani",
          dishPicture: "menu/featured-menu/dish-3/icon.png",
          ringIcon: "menu/featured-menu/dish-3/ring.svg",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/styles.sass";
.container
    height: auto
    width: 100%
    position: relative
    .contents
        @include center($direction: column)
        padding: 100px 20px
        gap: 80px
        .title
            @include center($direction: column)
            width: auto
            .text-header
                font-size: 30px;
                letter-spacing: 4px;
                color: #333333;
                font-family: "Raleway";
            .separator
                width: 200px
                margin-top: -20px
        .featured-menu-items
            @include center($direction: row)
            width: 100%
            justify-content: space-between

@media screen and(max-width: 1400px) and (min-width: 110px)
    .container
        .contents
            .featured-menu-items
                .featured-menu-item-3
                    display: none

@media screen and(max-width: 1100px)
    .container
        .contents
            .featured-menu-items
                .featured-menu-item-3
                    display: none
                .featured-menu-item-2
                    display: none
</style>
