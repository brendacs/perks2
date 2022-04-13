module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		// 'plugin:react/recommended',
		// 'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		// '@typescript-eslint',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: ['plugin:@typescript-eslint/eslint-recommended'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
		},
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': 'off',
		// 'import/prefer-default-export': 'warn',
	},
}
