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