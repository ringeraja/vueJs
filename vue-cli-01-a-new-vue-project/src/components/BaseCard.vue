<template>
    <div>
        <header v-if="$slots.header">
        <slot name="header">
        </slot>
        </header>
        <slot></slot>
        
        <!-- <slot name="exampleOfDefault">
            <h2>default content</h2>
        </slot> -->
    </div>
</template>

<script>
// name can be antyname, if we leave one unnamed its the default. must have 1 unnamed
export default {
    mounted(){
        console.log(this.$slots.header);
    }
}
</script>


<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
