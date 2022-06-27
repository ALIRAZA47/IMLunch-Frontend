<template>
  <div class="container">
    <div class="contents">
      <div class="title">
        <img
          src="@/assets/white-logo.svg"
          alt="Logo"
          style="width: 50px; height: 27px"
        />
        <p class="text-header">Benefits</p>
        <div class="sep">
          <img class="separator" src="@/assets/separator.svg" alt="Separator" />
        </div>
      </div>
      <div class="description">
        <p>
          Our care for you is exactly how we care for ourselves. Constant
          experiencing of unsatisfying lunch delivery services, led to
          itsmylunch. Why not provide you with the ultimate ease of having a
          delicious lunch the way we prefer? The good way? Don’t worry, we’vegot
          you covered.
        </p>
      </div>
      <div class="cards">
        <div class="row-one-cards">
          <BaseCard
            v-for="i in 4"
            :key="i - 1"
            :class="'benifit-card-' + i"
            :title="cardsData[i - 1].title"
            :content="cardsData[i - 1].content"
            :inverse="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "../BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      cardsData: [
        {
          title: "Eat Healthy",
          content:
            "We reach out to great lengths to ensure that each meal is free of harmful preservatives, or additives, and that each meal is nutrient-dense and seasoned with love and care.",
        },
        {
          title: "Say Not To Success",
          content:
            "Time is money. Bid farewell to the hassle of deciding what to eat at lunch, without wasting any time. Just click and instantly enjoy your lunch, time efficiently.",
        },
        {
          title: "Dilligent Delivery",
          content:
            "Our dedicated delivery team works tirelessly to ensure that our food arrives at your door in the safest, speedy and most convenient manner possible.",
        },
        {
          title: "Hygiene Lovers",
          content:
            "We offer our Utmost priority to hygiene and packaging. Using air tight plastic containers, we emphasize towards avoiding any contamination or spilling out of food by the time it gets to you. But don't worry, our cooperative support and after sales services are intact and available incase of any misfortunes.",
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
    .contents
        @include center(column)
        height: auto
        width: auto
        padding: 7% 9%
        background: url("@/assets/bkg/double-zigzag-bg.png") no-repeat
        background-size: cover
        .title
                @include center($direction: column)
                width: 100%
                .text-header
                    font-size: 30px;
                    letter-spacing: 4px;
                    color: #ffffff;
                    font-family: "Raleway";
                .sep
                    width: 140px
                    margin-top: -25px
                    .separator
                        width: 100%
                        height: 100%
                        margin-top: -20px
        .description
            width: 100%
            p
                padding: 16px 8%
                font-size: 17px;
                color: #ffffff;
                font-weight: 500;
                font-family: "Work Sans";
        .cards
          width: 100%
          height: auto
          @include center(column)
          justify-content: space-between
          margin-bottom: 32px
          margin-top: 16px
          gap: 30px
          .row-one-cards
              @include center(row)
              justify-content: space-around
              flex-wrap: wrap
              width: 100%
              gap: 32px

              .benifit-card-1, .benifit-card-2, .benifit-card-3, .benifit-card-4
                width: 380px;
                height: 244px;
              .benifit-card-4
                display: flex
                flex-direction: column
                width: 100%

@media screen and (max-width: 1560px)
  .container
    height: auto
    .contents
      .title
        img
          margin-top: 20px
      .description
        p
          font-size: 17px;
      .cards
        display: flex
        flex-direction: row
        flex-wrap: wrap
        width: 100%
        .row-one-cards
          .benifit-card-1, .benifit-card-2, .benifit-card-3,.benifit-card-4
              width: 430px !important
              height: 244px;

@media screen and (max-width: 500px)
  .container
    height: auto
    .contents
      padding: 0
      .title
        img
          margin-top: 20px
</style>
