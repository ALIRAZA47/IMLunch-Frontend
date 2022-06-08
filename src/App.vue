<template>
  <div id="app" class="components">
    <Navbar />
    <AcceptOrders />
    <HowItWorks />
    <MonthlyBasedMenu />
  </div>
</template>
<script>
import Navbar from "@/components/NavBar.vue";
import AcceptOrders from "@/components/home-components/AcceptOrders.vue";
import HowItWorks from "@/components/home-components/HowItWorks.vue";
import MonthlyBasedMenu from "./components/home-components/MonthlyBasedMenu.vue";
export default {
  name: "App",
  components: {
    Navbar,
    AcceptOrders,
    HowItWorks,
    MonthlyBasedMenu,
  },
};
</script>
<style scoped></style>
