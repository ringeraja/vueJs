<template>
    <the-navigation></the-navigation>
    <div>
      <router-view></router-view> <!-- default-->
    </div>
    <footer>
        <router-view name="footer"></router-view>
    </footer>
    <learning-survey ></learning-survey>
    <user-experiences ></user-experiences>
    
    <the-form></the-form>
    <the-footer title="Remember me"></the-footer>
    <the-resources></the-resources>
    <section>
    <header><h1>My Friends List</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
        <li><h3>{{welcomeMessage}}</h3></li>
        <friend-contact 
        v-for="friend in friends"
        v-bind:key="friend.id"
        v-bind:id="friend.id"
        v-bind:name="friend.name"
        v-bind:phone-number="friend.phone"
        v-bind:email-adress="friend.email" 
        v-bind:is-favorite= "friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-contact="deleteContact"
        ></friend-contact> 
    </ul>
    <header>
      <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
    </header>
    </section>
    
    <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base></knowledge-base>
  </div>

  <section>
    <div>
    <!--<TheHeader/> -->
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goal #default="slotProps">
     <!--<template #default="slotProps">-->  <!--value we get for slotProps will always be an object-->
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['another-prop']}}</p>
      <!--</template>-->
    </course-goal>
  </div>
  <br/>
  <button @click="setSelectedComponent('active-goals')">Active goals</button>
  <button @click="setSelectedComponent('manage-goal')">Manage goals</button>
 <!--  <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
  <manage-goal v-if="selectedComponent === 'manage-goal'"></manage-goal> -->
  <keep-alive>
   <component v-bind:is="selectedComponent"></component>
  </keep-alive>
  </section>
</template>


<script>
// configuration for the app app we wwant to mount on id="app" div
// config object for main app
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/CourseGoal.vue'

import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoal from './components/ManageGoal.vue';

import TheResources from './components/learning-resources/TheResources.vue';

import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

import TheNavigation from './components/nav/TheNavigation.vue';

export default{
    components: {  //available in any component not only in app 
      TheHeader: TheHeader,
      LearningSurvey,
      UserExperiences,
      TheResources,
      BadgeList: BadgeList,
      UserInfo: UserInfo,
      CourseGoal,
      ActiveGoals,
      ManageGoal,
      TheFooter,
      TheNavigation,


    },// components registered here are only usable here in this file nowhere eles
    data (){
        return {
            //savedSurveyResults: [],
            selectedComponent: 'active-goals',
            activeUser: {
                name: 'Maximilian Schwarzmüller',
                description: 'Site owner and admin',
                role: 'admin',
            },
            friends: [
                {id:'Nikola',
                name:'Nikola Vujicic',
                phone: '0453553535',
                email: 'nikola@gmail.com',
                isFavorite: true
                },
                {id:'Sara',
                name:'Sara Tunic',
                phone: '05465343535',
                email: 'sara@gmail.com',
                isFavorite: false
                },
            ],
            welcomeMessage: 'Friends List',
            user: {
              name: 'Nikola Vujicic',
              age: 26
            },
            activeTopic: null,
            topics: [{
                id: 'basics',
                title: 'The Basics',
                description: 'Core Vue basics you have to know',
                fullText:'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
              },{
                id: 'components',
                title: 'Components',
                description:'Components are a core concept for building Vue UIs and apps',
                fullText: 'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
              }
            ],
            teams: [
                { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
                { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
                { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
            ],
            users: [
                { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
                { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
                { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
                { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
                { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
           ],
        }; 
    },
    /* provide: { //changes in data do not reflext in provided data( its a brand new object in memory)
      topics: [{
                id: 'basics',
                title: 'The Basics',
                description: 'Core Vue basics you have to know',
                fullText:'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
              },{
                id: 'components',
                title: 'Components',
                description:'Components are a core concept for building Vue UIs and apps',
                fullText: 'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
              }
            ],
    }, */
    provide() {
      return {
        topics: this.topics,
        selectTopic: this.activateTopic,
        teams: this.teams,
        users: this.users,
      };
    },
    mounted() {
      setTimeout(() => {
        this.topics.push({
          id: 'events',
                title: 'Event ',
                description: 'Events in vue',
                fullText:'events allow you to trigger code on demand'
        });
      }, 3000);
    },
    methods: {
      setSelectedComponent(cmp){
        this.selectedComponent = cmp;
      },
      toggleFavoriteStatus(friendId){
        const identifiedFriend= this.friends.find(
          (friend) => friend.id === friendId);
        identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
          
      },
      addContact(name,phone,email){
        const newFriendContact ={
          id: new Date().toISOString(),
          name: name,
          phone: phone,
          email:email,
          isFavorite: false
        };
        this.friends.push(newFriendContact);
      },
      deleteContact(friendId){
        this.friends = this.friends.filter(friend => friend.id !== friendId);

      },
      setUserData(name,age){
        this.user = {
          name:name,
          age:age
        }
      },
      activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
   
    },

};

//props : propery, custom html
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');


* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}
 /* 
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
 zakomentarisano da bi se vezbalo sa stilovima u komponentama UserInfo,theheader,basecard,basbadge,*/


 #app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app /*li <-zakomentarisano zbog UserInfo,theheader...*/,
form {
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 100%;
  max-width: 40rem;
}

/*li <-zakomentarisano zbog UserInfo,theheader...#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
*/
h2 {
  margin: 0.75rem 0;
  text-align: center;
}

</style>