<template>
    
    <li>
        <h2>{{ name }} {{isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails"> {{detailsAreVisible ? 'Hide': 'Show'}} Details</button>
        <button @click="toggleFavorite"> Toggle favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{phoneNumber}}</li>
            <li><strong>Email:</strong> {{emailAdress}}</li>
        </ul>
        <button @click="$emit('delete-contact',id)">Delete</button>
    </li>

    
</template>

<script>

export default {
   /*  props: [
        'name',
        'phoneNumber',
        'emailAdress',
        'isFavorite'
    ],  */// simplest form - all the custom atributes we want to accept on this component
    props: {
        id: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        }, //value should be string number will cause error
        name: {
            type: String,
            required: true,
        },
        emailAdress: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false, // by default if not required it 0 String will be passed
            /* validator: function(value){
                return value === '1' || value === '0';
            } */
        }
    },emits: ['toggle-favorite','delete-contact'],
    /* emits: {
        'toggle-favorite': function(id){
            if (id){
                return true;
            }else {
                console.warn('id is missing!');
                return false;
            }
        },

    } */
    data() { // props should be defined in camelCase
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
            this.$emit('toggle-favorite',this.id);//emit custom event which we can listen in parent component
           //this.friendIsFavorite = !this.friendIsFavorite;
        },
    }
    
};

</script>