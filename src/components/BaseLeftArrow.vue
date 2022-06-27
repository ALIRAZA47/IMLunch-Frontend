<template>
  <div class="arrow-container">
    <div class="circle"></div>
    <div class="arrow">
      <img
        :src="require('@/assets/arrow-assests/head.svg')"
        alt="head.svg"
        class="head"
      />
      <img
        :src="require('@/assets/arrow-assests/line.svg')"
        alt="line.svg"
        class="line"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import "@/styles.sass";
.arrow-container
    @include center($direction: row)
    height: auto
    width: auto
    position: relative
    .circle
        width: 40px;
        height: 40px;
        border-radius: 25px;
        background-color: #ffffff;
        border: 3px solid #13a4ba;
    .arrow
        @include center($direction: row)
        position: relative
        top: 0;
        left: 0;
        transform: translate(-50%, -25%)
        .head
            position: absolute
            left: 0
            top: 0
            transform: translate(-60%, -35%)
            width: 15px;
            height: 16px;

@media screen and(max-width: 500px)
    .arrow-container
</style>
