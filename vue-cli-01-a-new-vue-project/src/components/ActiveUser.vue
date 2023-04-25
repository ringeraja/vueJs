<template>
        <section>
        <h1>{{username}}</h1>
        <h3>{{userage}} Years</h3>
        </section>
</template>

<script>
export default {
    props: {
        username: {
            type:String,
            required:true
        },
        userage: {
            type:Number,
            required:true
        }  
    }
};

</script>

<style>
h1,
h3
 {
  display: inline;
  margin-right: 20px;
}
</style>
