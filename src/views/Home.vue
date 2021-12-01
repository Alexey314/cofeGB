<template>
  <div>
    {{ FOOD_CONSTRUCTOR }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['FOOD_CONSTRUCTOR']),
  },
};
</script>
