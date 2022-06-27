<template>
  <div
    ref="card"
    name="card-container"
    :class="{ 'card-container': !inverse, 'inverse-card-container': inverse }"
  >
    <div v-if="bkgIcon">
      <img
        id="white-icon"
        ref="icon"
        name="card-icon"
        class="bkg-icon"
        :src="whiteIcon"
        :alt="whiteIcon"
      />
      <img
        id="yellow-icon"
        ref="icon"
        name="card-icon"
        class="bkg-icon"
        :src="yellowIcon"
        :alt="yellowIcon"
      />
    </div>
    <div class="text">
      <div :class="{ 'card-title': !inverse, 'inverse-card-title': inverse }">
        <p>{{ title }}</p>
      </div>
      <div
        v-show="content"
        :class="{ 'card-content': !inverse, 'inverse-card-content': inverse }"
      >
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    bkgIcon: {
      type: String,
      default: null,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
  computed: {
    whiteIcon() {
      return require("@/assets/bkg/how-we-do-it-cards/white-icons/" +
        this.bkgIcon);
    },
    yellowIcon() {
      return require("@/assets/bkg/how-we-do-it-cards/yellow-icons/" +
        this.bkgIcon);
    },
  },
};
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap")
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap")
@import "@/styles.sass";
.card-container
    @include center(column)
    width: 366px;
    height: 293px;
    border-radius: 40px;
    filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09));
    background-color: #00ccbb
    border: 3px solid #ffffff;

    &:hover
      background-color: #ffffff;
      border: 3px solid #ffc400;
      .text
        .card-title, .card-content
          color: #424142
      #white--icon
        display: none
      #yellow-icon
        display: block
    #yellow-icon
      display: none
    .text
      @include center(column)
      height: 100%
      .card-title
          font-size: 24px;
          color: #fafbfc;
          font-family: "Raleway";
          font-weight: 700;
          text-align: center
      .card-content
          text-align: center;
          font-size: 15px;
          color: #fafbfc;
          font-weight: 400;
          font-family: "Work Sans";
    .bkg-icon
        width: 188px;
        height: 188px;
        position: absolute;
        z-index: 10
        top: 50px;
        left: 90px;

// inverse card styles
.inverse-card-container
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 366px;
    height: 293px;
    border-radius: 40px;
    filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09));
    background: radial-gradient(circle at center, #ffffff 0%, #e9e9e9 100%);
    border: 3px solid #ffffff;

    &:hover
      background:  #00ccbb;
      border: 3px solid #ffc400;
      .text
        .inverse-card-title, .inverse-card-content
          color: white
      #white--icon
        display: none
      #yellow-icon
        display: block
    #yellow-icon
      display: none
    .text
      @include center(column)
      height: auto
      .inverse-card-title
          font-size: 24px;
          height: 80px
          color: #424142
          font-family: "Raleway";
          font-weight: 700;
          line-height: ((2*80px)-24px)/2;
          text-align: right;
      .inverse-card-content
          text-align: center;
          padding: 0px 16px;
          font-size: 15px;
          color: #424142
          font-weight: 400;
          font-family: "Work Sans";
    .bkg-icon
        width: 188px;
        height: 188px;
        position: absolute;
        z-index: 10
        top: 50px;
        left: 90px;

@media screen and (max-width: 500px)
  .card-container
    height: 180px
    .bkg-icon
        width: 118px;
        height: 118px;
        position: absolute;
        z-index: 10
        top: 30px;
        left: 120px;
</style>
