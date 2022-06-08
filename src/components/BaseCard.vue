<template>
  <div
    ref="card"
    name="card-container"
    class="container"
    :style="cardStyles.main"
  >
    <div class="card-title" :style="'color:' + cardStyles.textColor + ';'">
      <p>{{ title }}</p>
    </div>
    <div>
      <img
        ref="icon"
        name="card-icon"
        class="bkg-icon"
        :src="icon"
        :alt="icon"
      />
    </div>
    <div
      v-show="content"
      class="card-content"
      :style="'color:' + cardStyles.textColor + ';'"
    >
      <p>{{ content }}</p>
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
    cardStyles: {
      type: Object,
    },
    bkgIcon: {
      type: String,
    },
  },
  created() {
    window.addEventListener("resize", this.windowListener);
  },
  mounted() {
    // code for handling resize...
    const cards = document.getElementsByName("card-container");
    const icons = document.getElementsByName("card-icon");

    // console.log(icons);
    //   console.log(window.target.innerWidth, this.$refs.icon);
    if (window.innerWidth <= 500) {
      for (let i = 0; i < cards.length; i++) {
        // console.log(cards[i]);
        icons[i].style.width = "118px";
        icons[i].style.height = "118px";
        icons[i].style.left = "120px";
        icons[i].style.top = "30px";
        cards[i].style.height = "180px";
      }
      const howItWorksItems = document.getElementsByName("how-it-works-items");
      // console.log(howItWorksItems);
      howItWorksItems[0].style.padding = "0px 0px 0px 0px";
      howItWorksItems[0].style.margin = "0px 0px 0px 0px";
    } else {
      for (let i = 0; i < cards.length; i++) {
        icons[i].style.width = "188px";
        icons[i].style.height = "188px";
        icons[i].style.left = "90px";
        icons[i].style.top = "50px";
        cards[i].style.height = "293px";
      }
      const howItWorksItems = document.getElementsByName("how-it-works-items");
      // console.log(howItWorksItems);
      howItWorksItems[0].style.padding = "50px 25px 10px 25px";
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.windowListener);
  },
  methods: {
    windowListener(window) {
      // code for handling resize...
      const cards = document.getElementsByName("card-container");
      const icons = document.getElementsByName("card-icon");

      // console.log(icons);
      //   console.log(window.target.innerWidth, this.$refs.icon);
      if (window.target.innerWidth <= 500) {
        for (let i = 0; i < cards.length; i++) {
          icons[i].style.width = "118px";
          icons[i].style.height = "118px";
          icons[i].style.left = "120px";
          icons[i].style.top = "30px";
          cards[i].style.height = "180px";
        }
        const howItWorksItems =
          document.getElementsByName("how-it-works-items");
        // console.log(howItWorksItems);
        howItWorksItems[0].style.padding = "0px 0px 0px 0px";
      } else {
        for (let i = 0; i < cards.length; i++) {
          icons[i].style.width = "188px";
          icons[i].style.height = "188px";
          icons[i].style.left = "90px";
          icons[i].style.top = "50px";
          cards[i].style.height = "293px";
        }
        const howItWorksItems =
          document.getElementsByName("how-it-works-items");
        // console.log(howItWorksItems);
        howItWorksItems[0].style.padding = "50px 25px 10px 25px";
      }
    },
  },
  computed: {
    icon() {
      return require("@/assets/" + this.bkgIcon);
    },
  },
};
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap")
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap")

.container
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 366px;
    height: 293px;
    border-radius: 40px;
    filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09));
    background-color: #00ccbb;
    border: 3px solid #ffffff;
    .card-title
        font-size: 24px;
        color: #fafbfc;
        font-family: "Raleway";
    .card-content
        margin-top: -5%
        font-size: 15px;
        color: #fafbfc;
        font-weight: 500;
        font-family: "Work Sans";
    .bkg-icon
        width: 188px;
        height: 188px;
        position: absolute;
        z-index: 10
        top: 50px;
        left: 90px;

@media screen and (max-width: 500px)
    .bkg-icon
        width: 10px;
        height: 10px;
        position: absolute;
        z-index: 10
        top: 50px;
        left: 90px;
</style>
