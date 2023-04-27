<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-prop="..."></slot><!-- name can be any, whatever we set as props on slot
            element will now be accesable in the place where you pass data for that slot (this case app.vue)-->
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            goals: ['Finish the course','learn vue'],
        };
    },
};
</script>
