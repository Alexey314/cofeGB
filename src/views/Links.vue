<template>
  <v-col
    color="primary lighten-1"
    padless
  >
      <v-btn
        v-for="link in links"
        :key="link.title"
        color="white"
        text
        :to="link.page"
        class="my-2"
      >
        {{ link.title }}
      </v-btn>
  </v-col>
</template>

<script>
export default {
  name: 'links',
  data: () => ({
    links: [
			{
				title: 'Home', 
				page: 'home'
			},
			{
				title: 'About', 
				page: 'about'
			},
			{
				title: 'Menu', 
				page: 'menu'
			},
			{
				title: 'Contact', 
				page: 'contacts'
			},
    ],
  }), 
};
</script>

<style lang="scss" scoped>

</style>
