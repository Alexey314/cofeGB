<template>
  <v-app app dark>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <CofDelivery />
    <Footeer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footeer from '@/components/Footer.vue';
import CofDelivery from '@/components/Cof-Delivery.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footeer,
    CofDelivery,
  },
};
</script>
