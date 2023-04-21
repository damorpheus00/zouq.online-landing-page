module.exports = {
	// extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'], // this will error if props is not manually defined
	plugins: ['react'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	rules: {
		quotes: [2, 'single', { 'avoidEscape': true }],
		'comma-dangle': ['error', 'never'],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-first-prop-new-line': [1, 'multiline'],
		'react/jsx-max-props-per-line': [1,
			{
				'maximum': 1
			}
		],
		'jsx-quotes': ['error', 'prefer-double'],
		'react/jsx-closing-bracket-location': 1,
		semi: ['warn', 'always'],
		'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
		'no-loop-func': 'off'
	}
};
