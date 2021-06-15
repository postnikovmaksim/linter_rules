module.export = {
	extends: [
		'plugin:react/recommended'
	],
	plugins: [
		'react'
	],
	settings: {
		react: {
			version: '17.0.0',
		},
	},
	rules: {
		// supported rules
		'react/boolean-prop-naming': ['error', {
			rule: '^(is|has|can)[A-Z]([A-Za-z0-9]?)+',
			validateNested: true,
		}],
		'react/default-props-match-prop-types': ['error'],
		'react/destructuring-assignment': ['error'],
		'react/display-name': 'off',
		'react/forbid-foreign-prop-types': ['error'],
		'react/forbid-prop-types': ['error'],
		'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
		'react/no-array-index-key': ['error'],
		'react/no-danger': ['error'],
		'react/no-deprecated': ['error'],
		'react/no-multi-comp': ['error'],
		'react/no-redundant-should-component-update': ['error'],
		'react/no-this-in-sfc': ['error'],
		'react/no-typos': ['error'],
		'react/no-unstable-nested-components': ['error'],
		'react/no-unused-prop-types': ['error'],
		'react/no-unused-state': ['error'],
		'react/prefer-es6-class': ['error'],
		'react/prefer-read-only-props': ['error'],
		'react/prefer-stateless-function': ['error'],
		'react/require-default-props': ['error'],
		'react/self-closing-comp': ['error'],
		'react/sort-comp': ['error'],
		'react/sort-prop-types': ['error', {
			callbacksLast: true,
			ignoreCase: true,
			requiredFirst: true,
			sortShapeProp: true,
			noSortAlphabetically: true,
		}],
		'react/state-in-constructor': ['error'],
		'react/static-property-placement': ['error', 'property assignment'],

		// JSX-specific rules
		'react/jsx-boolean-value': ['error'],
		'react/jsx-child-element-spacing': ['error'],
		'react/jsx-closing-bracket-location': ['error'],
		'react/jsx-closing-tag-location': ['error'],
		'react/jsx-curly-brace-presence': ['error', { props: 'always',
			children: 'never' }],
		'react/jsx-curly-newline': ['error'],
		'react/jsx-curly-spacing': ['error'],
		'react/jsx-equals-spacing': ['error'],
		'react/jsx-filename-extension': ['error'],
		'react/jsx-first-prop-new-line': ['error'],
		'react/jsx-fragments': ['error', 'syntax'],
		'react/jsx-handler-names': ['error'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-max-props-per-line': ['error'],
		'react/jsx-no-bind': ['error'],
		'react/jsx-no-constructed-context-values': ['error'],
		'react/jsx-no-script-url': ['error'],
		'react/jsx-no-useless-fragment': ['error'],
		'react/jsx-one-expression-per-line': ['error'],
		'react/jsx-pascal-case': ['error'],
		'react/jsx-props-no-multi-spaces': ['error'],
		'react/jsx-props-no-spreading': ['error'],
		'react/jsx-sort-props': ['error', {
			callbacksLast: true,
			shorthandLast: true,
			ignoreCase: true,
			noSortAlphabetically: true,
			reservedFirst: true,
		}],
		'react/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'never',
			afterOpening: 'never',
			beforeClosing: 'never',
		}],
		'react/jsx-wrap-multilines': ['error', {
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
		}],
	},
};
