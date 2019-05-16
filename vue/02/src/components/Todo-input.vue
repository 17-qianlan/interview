<template>
    <div class="Todo-input">
        <input type="text" @keydown.13="handleValue" placeholder="接下来准备做什么" />
    </div>
</template>

<script>
    export default {
        name: 'Todo-input',
        methods: {
            handleValue(e) {
                this.$emit('change', e.target.value);
                e.target.value = '';
            }
        }
    };
</script>

<style scoped lang="scss">
    .Todo-input {
        width: 80%;
        height: 35px;
        input {
            width: 100%;
            height: 100%;
            padding: 0;
            border-radius: 15px;
            font-size: 20px;
            line-height: 1.5;
            text-indent: 20px;
            border: 1px solid #ccc;
        }
    }
</style>
