<template>
  <div id="app" class="components">
    <Navbar />
    <AcceptOrders />
    <HowItWorks />
    <MonthlyBasedMenu />
    <OurFeaturedMenu />
    <BenfitsOfIML />
    <OrderForm />
  </div>
</template>
<script>
import Navbar from "@/components/NavBar.vue";
import AcceptOrders from "@/components/home-components/AcceptOrders.vue";
import HowItWorks from "@/components/home-components/HowItWorks.vue";
import MonthlyBasedMenu from "@/components/home-components/MonthlyBasedMenu.vue";
import OurFeaturedMenu from "@/components/home-components/OurFeaturedMenu.vue";
import BenfitsOfIML from "@/components/home-components/BenfitsOfIML.vue";
import OrderForm from "@/components/home-components/OrderForm.vue";
export default {
  name: "App",
  components: {
    Navbar,
    AcceptOrders,
    HowItWorks,
    MonthlyBasedMenu,
    OurFeaturedMenu,
    BenfitsOfIML,
    OrderForm,
  },
};
</script>
<style scoped></style>
