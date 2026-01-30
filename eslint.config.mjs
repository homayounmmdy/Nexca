// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

export default [{
   rules: {
      // Enforce consistent use of semicolons
      semi: 'error',
      // Disallow multiple empty lines
      'no-multiple-empty-lines': ['error', { max: 1 }],
      // Prevents duplicate imports
      'no-duplicate-imports': ['error'],
      // Disallows spaces inside parentheses
      'space-in-parens': ['error', 'never'],
      // Requires strict equality (===) over loose equality (==)
      eqeqeq: ['error', 'always'],
      // Enforces a maximum line length for readability
      'max-len': ['error', { code: 80 }],
      // Prevents trailing whitespace at the end of lines
      'no-trailing-spaces': ['error'],
      // Enforces consistent indentation (spaces or tabs)
      indent: ['error', 2],
      // Disallow unused variables
      'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
      // Disallows undeclared variables
      'no-undef': ['error'],
      // Disallow use of `var`
      'no-var': 'error',
      // Prefer `const` for variables that are not reassigned
      'prefer-const': 'error',
   },
}, ...storybook.configs["flat/recommended"]];
