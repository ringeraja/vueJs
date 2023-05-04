<template>
    <h2>Manage goals</h2>
    <input type="text" ref="cilj"/>
    <button @click="setGoal" >Set goal</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid. Try again </h2>
        <p>Try typing some value </p>
        <button @click="confirmError">Ok</button>
    </error-alert>
    </teleport>
</template>

<script>

import ErrorAlert from './ErrorAlert.vue';
export default {
    components: {
        ErrorAlert: ErrorAlert,
    },
    data() {
        return {
            inputIsInvalid: false,
        };
    },
    methods: {
        setGoal(){
            const enteredValue= this.$refs.cilj.value;
            if(enteredValue === ''){
                //alert("empty string");
                this.inputIsInvalid = true;
            }
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }
}

</script>