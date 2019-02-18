module.exports = {
    plugins: [
        require('postcss-cssnext')({
            browsers: ['last 20 versions', 'Android >= 4.0', '> 1%']
        })
    ]
}