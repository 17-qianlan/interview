module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', '@vue/prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'generator-star-spacing': 'off',
		indent: 'off',
		'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        'prettier/prettier': [
            {
                "singleQuote": true
            }
        ]
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
};
