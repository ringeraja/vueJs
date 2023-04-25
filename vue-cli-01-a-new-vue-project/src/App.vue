<template>
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

    
</template>


<script>
// configuration for the app app we wwant to mount on id="app" div
// config object for main app

export default{
    data (){
        return {
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
        selectTopic: this.activateTopic
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
    }
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

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
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
h2 {
  margin: 0.75rem 0;
  text-align: center;
}


</style>