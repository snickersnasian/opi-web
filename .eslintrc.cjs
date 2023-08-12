module.exports = {
	env: {
		node: true,
	},
	extends: 'eslint:recommended',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		indent: ['warn', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
	},
};
