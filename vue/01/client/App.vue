<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: 999
            };
        },
        mounted() {
            console.log(this.$);
        }
    };
</script>

<style scoped lang="scss">

</style>