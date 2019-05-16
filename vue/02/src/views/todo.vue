<template>
    <div class="todo">
        <tabs :num="num" @change="handleNum"></tabs>
        <todo-input @change="handleValue"></todo-input>
        <tab v-for="(item, index) of filter" :tab="item" :key="index"></tab>
    </div>
</template>

<script>
    export default {
        name: 'todo',
        data() {
            return {
                num: 0,
                arr: [],
                filter: []
            };
        },
        watch: {
            arr(val) {
                this.arr = val;
                this.codeFilter();
            }
        },
        methods: {
            codeFilter() {
                if (this.num === 0) {
                    this.filter = this.arr;
                }else if (this.num === 1) {
                    this.filter = this.arr.filter(item => !item.picked);
                } else if (this.num === 2) {
                    this.filter = this.arr.filter(item => item.picked);
                }
            },
            handleNum(val) {
                this.num = val;
                this.codeFilter();
            },
            handleValue(val) {
                const isPresence = this.arr.findIndex(item => {
                    return item.value === val;
                })
                if (isPresence === -1){
                    const item = {picked: false, value: val};
                    this.arr.unshift(item);
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .todo {
        width: 500px;
        height: 500px;
        margin: 100px auto 0;
    }
</style>
