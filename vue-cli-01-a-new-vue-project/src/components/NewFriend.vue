<template>
    <form @submit.prevent="submitData"> <!-- .prevent modifier prevents default and points to a method that solves it-->
        <div>
        <label>Name</label>
        <input type="text" v-model="enteredName"/>
        </div>
        <div>
        <label>Phone</label>
        <input type="text" v-model="enteredPhone"/>
        </div>
        <div>
        <label>E-mail</label>
        <input type="text" v-model="enteredEmail"/>
        </div>
        <div>
        <button>Add Contact</button>
        </div>
    </form>

</template>

<script>

export default {
    emits: ['add-contact'],
    data(){
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData(){
            this.$emit('add-contact',this.enteredName,this.enteredPhone, this.enteredEmail);
        }
    }
};

</script>
