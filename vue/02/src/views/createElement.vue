<script>
    export default {
        name: 'createElement',
        methods: {
            handleClick() {
                alert('22222');
            }
        },
        render(createElement) {
            return createElement(
                'div',
                [
                    createElement('span', 'text content'),
                    createElement('p', {
                        attrs: {
                            class: 'p'
                        },
                        on: {
                            click: this.handleClick
                        }
                    }, '我是p标签')
                ]
            )
        }
    };
</script>

<style scoped>

</style>
