<template>
    <div class="arr">
        <button @click="handleArray">改变数组</button>
    </div>
</template>

<script>
    export default {
        name: 'arr',
        data() {
            return {
                a: ['1', '2', '3']
            }
        },
        watch: {
            a(val) {
                console.log(val);
            }
        },
        methods: {
            handleArray() {
                this.a.reverse();
            }
        }
    };
</script>

<style scoped>

</style>
