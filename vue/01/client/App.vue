<template>
    <div id="app">
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: 999999999
            }
        }
    }
</script>

<style scoped lang="scss">
    #app{
        display: block;
        color: red;
    }
</style>