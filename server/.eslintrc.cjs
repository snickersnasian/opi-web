module.exports = {
	env: {
		node: true,
	},
	extends: "eslint:recommended",
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		indent: ["tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["double"],
		semi: ["always"],
	},
};
