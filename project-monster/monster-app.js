
function getRandomValue(min,max){
    return  Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    watch: {
        playerHealth(value){ //has to be the name of the property we want to watch
            if(value <= 0 && this.monsterHealth <= 0){
                //draw
                this.winner = 'draw';
            } else if (value <= 0) {
                //player lost
                this.winner = 'monster';

            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    computed: {
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];


        },
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(5,15);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','attack',attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(6,17);
            this.addLogMessage('monster','attack',attackValue);
            this.playerHealth -= attackValue;

        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','special-attack',attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(6,17);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
            this.addLogMessage('player','heal',healValue);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who,what,value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            }); // unshift is like push but adds the value at the beggining of the array
        }
    }
});

app.mount('#game');