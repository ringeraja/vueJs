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

//1 Exercise




