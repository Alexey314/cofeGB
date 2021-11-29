<template>
  <v-app app dark>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footeer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footeer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footeer,
  },
 
};
</script>
