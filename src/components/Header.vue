<template>
  <v-app-bar app color="primary">
    <v-btn to="/"> Home </v-btn>

    <v-spacer></v-spacer>

    <v-btn text to="menu"> Menu </v-btn>
    <v-btn text to="about"> About </v-btn>
    <v-btn text to="delivery"> Delivery </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped></style>
