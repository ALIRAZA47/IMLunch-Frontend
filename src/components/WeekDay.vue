<template>
  <div class="week-day">
    <p class="day-text">{{ day }}</p>
    <img src="@/assets/day-sep.svg" alt="separator.svg" class="separator" />
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap")
@import "@/styles.sass"
.week-day
    @include center($direction: column)
    align-items: flex-start;
    position: relative
    width: 100%
    .day-text
      margin-left: 8px
      font-size: 18px;
      letter-spacing: 1px;
      color: #ffffff;
      font-family: "Raleway";
    .separator
        margin: -15px 0 0 0;
        width: auto
        height: 8px;
</style>
