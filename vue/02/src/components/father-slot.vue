<template>
    <div class="father-slot">
        <slot name="book" v-for="book in books" :book-name="book.name">

        </slot>
    </div>
</template>

<script>
    export default {
        name: 'father-slot',
        props: ['books']
    };
</script>

<style scoped>

</style>
