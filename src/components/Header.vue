<template>
  <v-app-bar app color="primary">
		<v-img
      class="d-inline-block text-center bordered"
      height="90"
      width="100"
      
      contain
      :src="require('../assets/logo.png')"
    ></v-img>
    <!-- <v-btn to="home"> Home </v-btn> -->
    <v-spacer></v-spacer>
		<v-img
      class="d-inline-block text-center bordered"
      height="70"
      width="100"
      
      contain
      :src="require('../assets/bodrit.png')"
    ></v-img>

    <v-spacer></v-spacer>

			<Links 
				class="d-flex justify-end"
			/>
  </v-app-bar>
</template>

<script>
import Links from '../views/Links.vue'
export default {
  name: 'Header',
  components: {
    Links,
  },		
};
</script>

<style lang="scss" scoped></style>
