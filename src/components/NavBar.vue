<template>
  <section class="navigation">
    <div class="nav-container">
      <div class="brand">
        <a
          href="#!"
          style="color: black; text-decoration: none; font-size: medium"
        >
          <img src="@/assets/logo.png" alt="Logo" style="width: 50px" />
          It's my lunch
        </a>
      </div>
      <nav>
        <div class="nav-mobile">
          <a id="nav-toggle" href="#!"><span></span></a>
        </div>
        <ul class="nav-list">
          <li><a href="#monthly-based-menu">Menu</a></li>
          <li><a href="#order-form">Contact Us</a></li>

          <li>
            <a class="phone-number" href="#!">
              <font-awesome-icon
                class="icon"
                style="width: 22px; height: 22px"
                icon="fas fa-phone"
              ></font-awesome-icon>
              <p class="text" style="margin-top: -20px">+92 321 2342 233</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import * as jQuery from "jquery";
(function ($) {
  $(function () {
    $("nav ul li > a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").slideToggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);
export default {
  name: "NavBar",
  methods: {
    expandNavbar() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
$content-width: 1000px
$breakpoint: 700px
$nav-height: 100px
$nav-background: #fff
$nav-font-color: #0c0c0c
$link-hover-color: #00ccbb

@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap")

@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap")
.phone-number
  background-color: #00ccbb
  color: white
  font-weight: bold
  letter-spacing: 2px
  font-family: "Montserrat"
body
  font-family: "Montserrat"
  width: 100%
  margin: 0
  padding: 0
.navigation
  height: $nav-height
  background: $nav-background
.nav-container
  elevation: 30px
  position: relative
  max-width: 100%
  padding: 0 40px 0 40px
%a-style
  color: $nav-font-color
  text-decoration: none
.brand
  font-family: "Montserrat"
  position: absolute
  float: left
  line-height: $nav-height
  text-transform: uppercase
  font-size: 1.4em
  a
    @extend %a-style
    a:visited
      @extend %a-style
nav
  float: right
  position: relative
  ul
    list-style: none
    margin: 0
    padding: 0
    li
      font-size: 14px;
      letter-spacing: 1px;
      color: #6d6d6d;
      font-weight: 500;
      font-family: "Montserrat";
      float: left
      position: relative
      a
        display: block
        padding: 10px 20px 0 20px
        line-height: 50px
        background: $nav-background
        color: $nav-font-color
        text-decoration: none

        &::before
          transition: 300ms
          height: 5px
          content: ""
          position: absolute
          background-color: $link-hover-color
          width: 0%
          bottom: 0px

        &:hover::before
          width: 70%;

        &:not(:only-child):after
          padding-left: 4px
          content: " ▾"
        &.phone-number
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          p
            padding-top: 15px

      // Dropdown list
      ul li
        min-width: 190px

        a
          padding: 15px
          line-height: 20px

.nav-dropdown
  display: none
  position: absolute
  z-index: 1
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15)

.nav-mobile
  display: none
  position: absolute
  top: 0
  right: 0
  background: $nav-background
  height: auto
  width: auto
  z-index: 9


@media only screen and (max-width: $breakpoint)
  .nav-mobile
    display: block
    position: absolute
    top: 16px
    right: 16px
  .phone-number
    background-color: white
    color: black
    margin-top: 16px
    margin-bottom: 20px
    .text
      margin-left: 24px
  nav
    width: 100%
    padding: $nav-height 0 15px

    ul
      display: none
      li
        float: none
        a
          padding: 15px
          line-height: 20px
          &:hover::before
            width: 20%
        ul
          li
            a
              padding-left: 30px


  .nav-dropdown
    position: static


%span-styles
  cursor: pointer
  border-radius: 1px
  height: 5px
  width: 35px
  background: $link-hover-color
  position: absolute
  display: block
  content: ""
  transition: all 300ms ease-in-out

#nav-toggle
  position: absolute
  left: 18px
  top: 22px
  cursor: pointer
  padding: 10px 35px 16px 0px

  span
    @extend %span-styles
    &:before
      @extend %span-styles
      top: -10px
    &:after
      @extend %span-styles
      bottom: -10px


  &.active
    span
      background-color: transparent
      &:before
        top: 0
      &:after
        top: 0
      &:before
        transform: rotate(45deg)
      &:after
        transform: rotate(-45deg)


@media screen and (min-width: $breakpoint)
  .nav-list
    display: block !important
    z-index: 1
</style>
