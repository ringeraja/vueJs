/* 
const buttonEl = document.querySelector('button'); //

const inputEl = document.querySelector('input'); //

const listEl = document.querySelector('ul'); //

function addGoal(){
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal ); */
//global object

Vue.createApp({
    data() {
       return {
        name:'Nikola',
        age:26,
        imgUrl: 'https://slep.rs/wp-content/uploads/2020/11/cropped-slep-sluzba-beograd-00-24-218x89.png'
       }
    },
    methods: {
        randomNumberGen() {
            return Math.random();
        }
    },
}).mount("#assignment");

Vue.createApp({
    data() {
      return {
        goals: [],
        enteredValue: "",
      };
    },
    methods: {
      addGoal() {
        this.goals.push(this.enteredValue);
        this.enteredValue = "";
      },
    },
  }).mount("#app");


const app = Vue.createApp({
    data(){
        return { //always returns object
            courseGoalA: 'Prva poruka',
            courseGoalB: '<h1>Druga poruka !!!</h1>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.4){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');

/* {{}} interpolation only available between opening and closing html tags
if we want to pass in a dynamic value to an attribute like : < href="{{ vueLink}}"
we use a different syntax -> vue binding syntax -> we use vue directives(extra instructions we add in html code)

v-bind all built in directives strart with v- - set the value of something : then attribute the ="" double 

methods allows to define functions

to methodes we pass a javascript object - full of methods/functions we can name them anyway we want

we can call a functions in html inside {{ }} 
we can output data or results of method calls

using this. we can refer to data 

v-html - intpret html - can cause seccurity issues
one view app controls all child elements - we can use binding and interpolation to output data -Databinding

declarative approach we define the goal - template -> we mark th
*/

const appCounter = Vue.createApp({
    data(){
        return {
            counter: 0,
            name: '',
            confirmedName: '',
            //fullname: '',
            lastName: '',
        };
    },
    watch: { //execute some code which maybe updates some data propertie in reaction to a property change
        counter(value){
            if (value > 50){
                const that = this.counter;
                setTimeout(function(){
                    that.counter = 0;
                } ,2000);
                this.counter = 0;
            }
        }
        /* name (value) {
            if(value === ''){
                this.fullname = '';
            }else{
                this.fullname = value + ' ' + this.lastName;
            }
        },// tells vue whenever name changes this watcher method will reexecute. we run logic insted of return
        lastName (value) {
            if(value === ''){
                this.fullname = '';
            }else{
                this.fullname = this.name + ' ' + value;
            }
        } */
    },
    computed: {  // if we just want to calculate a dynamic value then use computed properties
        fullname(){ // tehnically a method but we are using it as data . when using {{}} in code we call it without () we just point vue calls it
            console.log("Running...");
            if(this.name === '' || this.lastName === ''){
                return '';
            }
            return this.name + ' ' + this.lastName; 
        } 
    },
    methods: {
        outputFullname(){
            console.log("Running...");
            if(this.name === ''){
                return '';
            }
            return this.name + ' ' + 'prezime'; 

        }, /* whenever anything on a page changes vue reexecutes every non event bount methods that is found on a page.
            that is why methods isnt the best way to output dynamic values*/
        setName(event,){ // 
            this.name = event.target.value;
        },
        increment(num){
            this.counter = this.counter + num;
        },
        decrement(num){
            this.counter = this.counter - num;
        },
        submitForm(){
            alert("FORM Submitted!");
        },
        confirmInput(){
            this.confirmedName = this.name;
        },
        resetInput(){
            this.name= '';
        }
    }
});

appCounter.mount('#events')

// v-on => react on a certain even -> can listen to click mouseEnter mouseLeave v-on:mouseEnter="counter++"
// event listeners
// event arguments
//v-on:input on every keystroke
//$event
//event modifiers -change event and browser behaviour . we add it after v-on:eventName.prevent    -> .stop 
// v-on:keyup.
// v-once  ->any dynamic data binding should only be evaluated once

const assignment2 = Vue.createApp({
    data(){
        return { 
            userInput: '',
            confirmedInput: '',
            number: 0,
        };
    },
    watch: { // only executes when computed property result changes 
        result(){
            console.log("watcher executing..");
            const that = this;
            setTimeout(function(){
                that.number = 0;
            },2000);
        }
    },
    computed: {
        result(){
           if(this.number < 37){
            return "Not there yet";
           }else if (this.number === 37){
            return this.number;
           }else{
            return "Too much!"
           }
        }
    },
    methods: {
        showAlert(){
            alert("Notifications working");
        },
        saveInput(event){
            this.userInput = event.target.value;
        },
        confirmInput(){
            this.confirmedInput = this.userInput;
        },
        add(num){
            this.number = this.number + num;
        },
        subtract(num){
            this.number = this.number -num;
        }
    }
});

assignment2.mount('#assignment2');


//computed properties data, methods, we use computed properties as data . with the computed properties vue is aware of computed properties and will only evaluete it if its changed
//key feature for outputing values

//watchers tell vue to execute when some dependency changes

//v-on: === @  v-bind:attributeName=""  :attributeName

const appReactive = Vue.createApp({
    data() {
      return {
        currentUserInput: '',
        message: 'Vue is great!',
      };
    },
    methods: {
      saveInput(event) {
        this.currentUserInput = event.target.value;
      },
      setText() {
        //this.message = this.currentUserInput;
        this.message = this.$refs.userText.value;
        },

    },
    beforeCreate(){
        console.log('Before Create Method');
    },
    created(){
        console.log('Created Method fired');
    },
    beforeMount(){
        console.log('Before Mount method');
    },
    mounted(){
        console.log('Mount method fired');
    },
        // lifecycles - data changes also trigger their own lyfecycle hooks

    beforeUpdate(){
        console.log('Before update method fired');
    },
    updated(){
        console.log('Updated method fired');
    },    //instance unmount
    beforeUnmount(){
        console.log('Before unmount method fired');
    },
    unmounted(){
        console.log('unmount method fired');
    },
  });
  
  appReactive.mount('#appReactive');
  
  const appReactive2 = Vue.createApp({
    template: `
    <p>{{ favoriteColor }} + !!!!</p>
    `,
    data(){
        return{
            favoriteColor: 'Blue'
        };
    }
  });

  appReactive2.mount('#appReactive2');

  setTimeout(function () {
    appReactive.unmount();
  }, 3000);

  //$refs -object full of key value pairs which uses refs as keys

