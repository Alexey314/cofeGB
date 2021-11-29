<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        to=""
        class="my-2"
      >
        {{ link }}
      </v-btn>

      <v-col
        class="primary lighten-1 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} 
          <v-icon class="mx-5 mb-5 white--text">
            mdi-copyright
          </v-icon>
          "Кофеманы"
        </v-col>        
    </v-row>

  </v-footer>
</template>

<script>
export default {
  name: 'footer',
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Menu',
      'Team',
      'Contact Us',
    ],
  }), 
};
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  background: #000;
}
.v-icon.v-icon {
  display: inline;
}
</style>
