<template>
  <div class="form-field">
    <label v-if="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      v-if="!textarea"
      v-on="listeners"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
    <textarea
      class="text-area"
      v-else
      v-bind="$attrs"
      v-on="listeners"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    textarea: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
    },
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/styles.sass"
%input-base
    padding: 0px 16px 0px 16px
    width: auto
    height: 48px;
    border-radius: 9px;
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.05));
    background-color: #ffffff;
    border: 2px solid #81c5ff;
.form-field
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    gap: 10px
    label
        font-size: 16px
        color: #333333
        font-weight: 500
        font-family: "Montserrat"
    input
        @extend %input-base
    .text-area
        @extend %input-base
        max-height: 200px
        min-width: 50%
        max-width: 97%
        min-height: 115px
        padding-top: 16px
@media screen and (max-width: 768px)
    .form-field
        textarea
            min-width: auto
</style>
