<template>
    <div class="index">
        <father-slot :books="books">
            <ChildSlot slot="book" slot-scope="props">
                <p>{{props.bookName}}</p>
            </ChildSlot>
        </father-slot>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                msg: 'I am a index page',
                books: [
                    {
                        name: '11111111'
                    },
                    {
                        name: '222222222'
                    },
                    {
                        name: '33333333'
                    }
                ]
            }
        }
    };
</script>

<style scoped>

</style>
