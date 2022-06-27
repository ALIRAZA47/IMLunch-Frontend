<template>
  <section id="order-form" class="container">
    <div class="header">
      <img src="@/assets/logo.png" alt="" style="width: 50px; height: 27px" />
      <p class="text-header">Place Your Order</p>
      <img class="separator" src="@/assets/separator.svg" alt="Separator" />
    </div>
    <form class="form" @submit.prevent="submitForm">
      <BaseFormField
        name="name"
        class="form-field"
        label="Name"
        placeholder="Please write your name here"
        v-model="name"
      />
      <BaseFormField
        name="email"
        class="form-field"
        label="Email"
        :type="'email'"
        placeholder="Please write your email here"
        v-model="email"
      />

      <BaseFormField
        name="phone"
        class="form-field"
        label="Phone"
        placeholder="Please write your phone number here"
        v-model="phone"
      />

      <BaseFormField
        name="people"
        class="form-field"
        type="number"
        label="Number of people"
        placeholder="Please write number of people"
        v-model="numOfPeople"
      />
      <BaseFormField
        name="message"
        :textarea="true"
        class="text-area"
        label="Message"
        placeholder="Please write your message here"
        v-model="message"
      />
      <div class="submit-button">
        <BaseButton
          :primary="true"
          class="btn"
          type="submit"
          @click="validateFileds"
        >
          Submit
        </BaseButton>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import BaseFormField from "../BaseFormField.vue";
export default {
  components: { BaseFormField },
  data() {
    return { name: "", email: "", phone: "", numOfPeople: "", message: "" };
  },
  methods: {
    validateFileds() {
      if (
        this.name &&
        this.email &&
        this.phone &&
        this.numOfPeople &&
        this.message
      ) {
        return true;
      } else {
        return false;
      }
    },
    submitForm() {
      if (this.validateFileds()) {
        axios
          .post("https://formspree.io/f/meqnwkko", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            numOfPeople: this.numOfPeople,
            message: this.message,
          })
          .then(() => {
            alert("Your order has been sent successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("Please fill all fields");
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/styles.sass";
.container
    margin: 32px 0px
    padding: 4% 8%
    height: auto
    background: url("@/assets/bkg/form-bg.svg") repeat
    .header
        @include center($direction: column)
        width: auto
        .text-header
            font-size: 30px
            letter-spacing: 4px
            color: #333333
            font-family: "Raleway"
        .separator
            width: 200px
            margin-top: -20px
    .form
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        width: 100%
        gap: 20px
        height: auto
        margin-top: 50px
        .form-field
            width: 48%
        .text-area
            width: 100%
            height: auto
        .submit-button
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
@media screen and(max-width: 620px)
    .container
        .form
            flex-direction: column
            .form-field
                width: 100%
            .submit-button
                justify-content: center
</style>
