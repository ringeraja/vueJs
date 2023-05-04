<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog {
    margin: 0%;
    position: absolute;
    left:30%;
    width:40%;
    background-color: yellow;
    box-shadow: 0 2px 8px black;
    padding: 1rem;
}
</style>