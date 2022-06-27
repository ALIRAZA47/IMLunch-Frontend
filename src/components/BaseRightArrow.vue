<template>
  <div class="arrow-container">
    <div class="arrow">
      <img
        :src="require('@/assets/arrow-assests/line.svg')"
        alt="line.svg"
        class="line"
      />
      <img
        :src="require('@/assets/arrow-assests/head.svg')"
        alt="head.svg"
        class="head"
      />
    </div>
    <div class="circle"></div>
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
        right: 0;
        transform: translate(50%, 25%)
        .head
            position: absolute
            right: 0
            bottom: 0
            width: 15px;
            height: 16px;
            transform: rotate(60deg) translate(45%, -25%)
</style>
