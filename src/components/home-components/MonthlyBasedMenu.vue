<template>
  <div class="container" id="monthly-based-menu">
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
      <div>
        <table>
          <tbody>
            <tr v-for="i in 4" :key="i" :class="'hidden-menu-week-' + i">
              <td class="week-days">
                <tr class="day-box" v-for="day in days" :key="day">
                  <WeekDay class="day" :day="day" />
                </tr>
              </td>
              <div>
                <td
                  :class="'menu-week-' + week"
                  v-for="week in Object.keys(menu).length"
                  :key="week"
                >
                  <div class="week-menu">
                    <tr>
                      <td>
                        <p class="week-number">Week {{ week }}</p>
                      </td>
                    </tr>
                    <tr
                      v-for="(dish, index) in menu['week' + week]['dishes']"
                      :key="index"
                    >
                      <MenuItem
                        :dish="dish.name"
                        :dishPicture="dish.image"
                        :borderColor="menu['week' + week].borderColor"
                      />
                    </tr>
                  </div>
                </td>
              </div>
            </tr>

            <!-- Week - 4 menu only -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "../MenuItem.vue";
import WeekDay from "@/components/WeekDay.vue";
// import { mapState } from "vuex";
import store from "@/store";
export default {
  components: { WeekDay, MenuItem },
  mounted() {
    //  get data from backend running at port 5000
    store.dispatch("fetchMenuData");
    // console.log(this.menu);
  },
  data() {
    return {
      days: ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday"],
      menu: this.$store.state.menu,
    };
  },
  methods: {},
};
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
    position: relative
    @include center($direction: column)
    width: 100%
    height: auto
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
        padding: 10% 0
        .header
            paading: 0
            margin: 0
            width: auto
            @include center($direction: column)
            align-items: center
            .title
                width: auto
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
        table
            padding: 20px

            tbody
                  td
                      position: relative
                      padding: 0 20px
                      &.week-days
                          padding-top: 110px
                          .day
                              display: flex
                              flex-direction: column
                              align-items: center
                              margin-top: 30%
                      tr
                          position: relative
                          .week-number
                                  height: auto
                                  width: auto
                                  font-size: 33px;
                                  letter-spacing: 1px;
                                  color: #ffffff;
                                  font-family: "Raleway";
                          &.day-box
                              height: 110px


                  .week-menu
                      @include center($direction: column)
@media only screen and(min-width: 1520px)
  // display last column of menu on mobile
  .container
      .hidden-menu-week-2
        display: none
      .hidden-menu-week-3
        display: none
      .hidden-menu-week-4
        display: none
@media only screen and ( min-width: 1270px) and (max-width: 1520px)
  // display last column of menu on mobile
  .container
      .hidden-menu-week-1
        .menu-week-4
          display: none
      .hidden-menu-week-2
        display: none
      .hidden-menu-week-3
        display: none
      .hidden-menu-week-4
        .menu-week-1
          display: none
        .menu-week-2
          display: none
        .menu-week-3
          display: none
@media only screen and ( min-width: 1000px) and(max-width: 1270px)
  // display last column of menu on mobile
  .container
      .hidden-menu-week-1
        .menu-week-4
          display: none
        .menu-week-3
          display: none
      .hidden-menu-week-2
        display: none
      .hidden-menu-week-3
        display: none
      .hidden-menu-week-4
        .menu-week-1
          display: none
        .menu-week-2
          display: none
@media only screen and ( max-width: 1000px)
  // display last column of menu on mobile
  .container
      .hidden-menu-week-1
        .menu-week-4
          display: none
        .menu-week-3
          display: none
        .menu-week-2
          display: none
      .hidden-menu-week-2
        .menu-week-4
          display: none
        .menu-week-3
          display: none
        .menu-week-1
          display: none
      .hidden-menu-week-3
        .menu-week-4
          display: none
        .menu-week-1
          display: none
        .menu-week-2
          display: none
      .hidden-menu-week-4
        .menu-week-1
          display: none
        .menu-week-2
          display: none
        .menu-week-3
          display: none
</style>
