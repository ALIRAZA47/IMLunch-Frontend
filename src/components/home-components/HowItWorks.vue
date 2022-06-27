<template>
  <div class="container">
    <div class="items" ref="howItWorksItems" name="how-it-works-items">
      <div class="title">
        <img src="@/assets/logo.png" alt="" style="width: 50px; height: 27px" />
        <p class="text-header">How it Works</p>
        <img class="separator" src="@/assets/separator.svg" alt="Separator" />
      </div>
      <div class="cards">
        <BaseCard
          v-for="(cardTitle, i) in cardsData"
          :key="i"
          :bkgIcon="'card-' + i.toString() + '.svg'"
          :title="cardTitle.title"
          :content="cardTitle.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardsData: [
        {
          title: "Your Order",
          content: "Diverse menu, easy-peasy ordering",
        },
        {
          title: "We Cook",
          content: "Finest chef's, heavenly tasting food",
        },
        {
          title: "We Deliver",
          content: "Swift delivery, relentless happiness",
        },
      ],
      cardStyles: [
        {
          main: {
            margin: 0,
            width: "366px",
            height: "293px",
            "border-radius": "40px",
            filter: "drop-shadow(0px 10px 11.5px rgba(0, 0, 0, 0.09))",
            "background-color": "#00ccbb",
            border: "3px solid #ffffff",
          },
          textColor: "#fafbfc",
        },
        {
          main: {
            margin: 0,
            width: "366px",
            height: "293px",
            "border-radius": "40px",
            filter: "drop-shadow(0px 10px 11.5px rgba(0, 0, 0, 0.09))",
            "background-color": "#ffffff",
            border: "3px solid #ffc400",
          },
          textColor: "#424142",
        },
        {
          main: {
            margin: 0,
            width: "366px",
            height: "293px",
            "border-radius": "40px",
            filter: "drop-shadow(0px 10px 11.5px rgba(0, 0, 0, 0.09))",
            "background-color": "#00ccbb",
            border: "3px solid #ffffff",
          },
          textColor: "#fafbfc",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap")
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap")
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap")

@mixin center($direction: row)
    display: flex
    flex-direction: $direction
    justify-content: center
    align-items: center

.container
    width: 100%
    height: auto
    margin: 0
    padding-bottom: 50px
    .items
        @include center($direction: column)
        padding: 50px 25px 10px 25px
        .cards
            @include center($direction: row)
            margin-top: 50px
            gap: 50px
            .bkg-icon
                width: 188px;
                height: 188px;
                position: absolute;
                z-index: 10
                top: 50px;
                left: 90px;
        .title
            @include center($direction: column)
            width: 250px
            .text-header
              font-size: 30px;
              letter-spacing: 4px;
              color: #212121;
              font-family: "Raleway";
            .separator
                width: 200px
                margin-top: -20px

@media screen and (max-width: 1300px) and (min-width: 768px)
    .container
        .items
            padding: 50px 25px 50px 25px

            .cards
                display: flex
                justify-content: center
                flex-wrap: wrap
                margin:auto
                align-items: stretch

@media screen and (max-width: 768px)
    .container
        .items
            .cards
                display: flex
                justify-content: center
                flex-wrap: wrap
                margin:auto
                align-items: stretch

@media screen and (max-width: 500px)
    .container
      width: 100%
    .items
        @include center($direction: column)
        padding: 0px
        .text-header
            font-size: 30px;
            letter-spacing: 4px;
            color: #212121;
            font-family: "Raleway";
        .separator
            width: 200px
            margin-top: -20px
        .cards
            @include center($direction: row)
            margin-top: 50px
            gap: 20px
        .title
            @include center($direction: column)
            width: 250px
    .bkg-icon
        width: 100px;
        height: 100px;
        position: absolute;
        z-index: 10
        top: 50px;
        left: 90px;
</style>
