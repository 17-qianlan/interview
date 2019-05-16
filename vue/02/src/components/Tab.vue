<template>
    <div class="Tab">
        <input type="radio" :id="radio" :checked="item.picked" @click="item.picked = !item.picked"/>
        <label :for="radio" :class="{'under-line': item.picked}">{{item.value}}</label>
    </div>
</template>

<script>
    export default {
        name: 'Tab',
        props: {
            tab: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {

        },
        watch: {
            tab(val) {
                this.item = val;
            }
        },
        data() {
            return {
                item: this.tab,
                radio: 'radio'+Math.random()*4
            }
        }
    };
</script>

<style scoped lang="scss">
    .under-line {
        text-decoration: line-through;
    }
    .Tab {
        width: 80%;
        padding: 5px 0;
        text-align: left;
        input {
            display: inline-block;
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }
        label {
            display: inline-block;
            margin-left: 5px;
            font-size: 20px;
            vertical-align: middle;
        }
    }
</style>
