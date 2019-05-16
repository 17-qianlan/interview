<template>
    <div class="Tabs">
        <ul>
            <li v-for="(item, index) of tabsArray" :key="index" @click="handleActive(item, index)" :class="{active: index === num}">{{item.value}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Tabs',
        props: {
            num: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                tabsArray: [
                    {
                        value: 'all',
                        isActive: true
                    },
                    {
                        value: 'Unselected',
                        isActive: false
                    },
                    {
                        value: 'Selected',
                        isActive: false
                    }
                ]
            };
        },
        methods: {
            handleActive(item, index) {
                this.$emit('change', index);
            }
        }
    };
</script>

<style scoped lang="scss">
    .active{
        color: red;
    }
    .Tabs {
        width: 100%;
        height: 30px;
        font-size: 20px;
        line-height: 1.5;
        ul {
            display: flex;
            width: 100%;
            height: 100%;
            li {
                padding: 0 20px;
                text-align: left;
                cursor: pointer;
            }
        }
    }
</style>
