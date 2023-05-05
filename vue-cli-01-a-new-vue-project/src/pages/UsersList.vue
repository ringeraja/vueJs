<template>
  <base-button @click="confirmInput">Confirm</base-button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  <button @click="saveChanges">Save Changes</button>

</template>

<script>
import BaseButton from '../components/baseUI/BaseButton.vue';
import UserItem from '../components/users/UserItem.vue';

export default {
  data(){
    return {
      changesSaved: false,
    };
  },
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
      
    },
    saveChanges(){
      this.changesSaved = true;
    }

  },
  beforeRouteEnter(to,from,next){
    console.log('UsersList cmp beforeRouteEnter');
    console.log(to,from);
    next();
    //any logic to confirm or deny accces, redirect  nav guards(global -> route config level -> then component level)
  },
  beforeRouteLeave(to, from,next){
    console.log('UsersList cmp beforeRouteLeave');
    console.log(to,from);
    if(this.changesSaved){
      next();
    }else{
      const userWantsToLeave = confirm('Are you sure, you have unsaved changes'); // prompt(),confirm()
      next(userWantsToLeave);
    }
  },
  unmounted(){//executes whenever component is left
      console.log('Unmounted'); //runs after hooks
  
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