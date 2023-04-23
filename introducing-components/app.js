
const app = Vue.createApp({
    data(){
        return{
            friends: [
                {id: 'manuel',
                 name:'Manuel Lopez',
                 phone: '0634535635',
                 email: 'manuel@gmail.com',
                },
                {id: 'julie',
                 name:'Julie jones',
                 phone: '0649021000',
                 email: 'julie@gmail.com',
                },
            ]
        };
    }
});


// component - reusable piece of html with data and logic
// is an official vue feature(mini app). Using app and calling component method on it
// this tells vue we want to build a new component
//component is like custom HTML 
//we define component  1 arg html tag ('friend-contact') we should use 2 word-names for new component
//avoid giving names like html tags

app.component('friend-contact',{ // this component does not comunicate with parrent app
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide ': 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email }}</li>
    </ul>
    </li>
    `,
    data(){
        return {
            detailsAreVisible:false,
            friend: {id: 'manuel',
            name:'Manuel lorenzo',
            phone: '0634535635',
            email: 'manuel@gmail.com',
           },
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});


app.mount('#app');
