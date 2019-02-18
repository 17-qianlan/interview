module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "semi": [2, "always"],
        "generator-star-spacing": "off",
        "indent": "off",
        "space-before-function-paren": ["error", "never"],
        "vue/script-indent": ["error", 4,{"baseIndent":1}],
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};