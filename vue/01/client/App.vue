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
            console.log(new Date().getTime());
            this.$nextTick(function() {
                console.log(new Date().getTime());
            });
        }
    };
</script>

<style scoped lang="scss">

</style>