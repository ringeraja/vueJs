<template>
  <base-button @click="confirmInput">Confirm</base-button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import BaseButton from '../baseUI/BaseButton.vue';
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
    BaseButton,
  },
  inject: ['users'],
  methods: {
    confirmInput(){
      //logic
      this.$router.push('/teams'); // programmatic navigation
      //this.$router.back();
      //this.$router.forward();
      
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>