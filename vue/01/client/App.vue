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
    :root {
        --red: red;
    }
    #app{
        display: flex;
        width: 200px;
        height: 50px;
        border-radius: 10px;
        background: green;
        color: var(--red);
        text-align: center;
        line-height: 50px;
        font-size: 25px;
    }
</style>