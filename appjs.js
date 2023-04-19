//Dynamic Styling

const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    computed: {
        boxAClasses(){
            return { active: this.boxASelected };
        }
    },
    methods: {
        boxSelected(box){
            if(box === 'A') {
                this.boxASelected = !this.boxASelected;
            }else if(box === 'B'){
                this.boxBSelected = !this.boxBSelected;
            }else if(box === 'C'){
                this.boxCSelected = !this.boxCSelected;
            }
        }
    },
});
app.mount('#styling');


// with class binding we can use computed properties -

const appE = Vue.createApp({
    data(){
        return {
            inputClass:'',
            user1Selected: false,
            user2Selected: false,
            toggle: true,
            color:''
        };
    },
    computed: {
        pClasses(){
            return { 
                user1: this.user1Selected === 'user1', 
                user2: this.user2Selected === 'user2', 
                visible: this.toggle, 
                hidden: !this.toggle
            };
        }
    },
    methods: {
        toggleOnOff(){
            this.toggle = !this.toggle;
        }
    }
});

appE.mount('#assignment');

const appGoals = Vue.createApp({
    data(){
        return {
            enteredGoalValue: '',
            goals: [],
            toggle: true
        };
    },
    computed:{
        buttonCaption(){
            return this.toggle ? 'Hide list' : 'Show list';
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredGoalValue);
        },
        removeGoal(idx){
            this.goals.splice(idx,1); //will find the element in the array and remove it from it
        },
        toggleOnOff(){
            this.toggle = !this.toggle;
        }
    }
});

appGoals.mount('#user-goals');
//v-if="javascript expression ,data,methods,computed property.. directive -> leaves <!--v-if--> in code where it n
//we can have any expression that has truth or false, 
//v-if must be used after an element that has v-if -> must be direct neighbours. controling what is showing(including,and )
//v-if really removes elements from DOM, v-show just hides and shows items with css display:none;
//v-for to output data from an arrays . key="uniqueIdCriteria" should add it to help vue tell different element apart 
// to make sure that entered values dont get lost