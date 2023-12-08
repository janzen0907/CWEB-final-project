module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/media-has-caption': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-alert': 'off',
    'vue/max-len': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'no-multiple-empty-lines': 'off',
    'vue/no-multi-spaces': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/this-in-template': 'off',
    'vue/key-spacing': 'off',
    'vue/array-bracket-spacing': 'off',
    'vue/block-spacing': 'off',
    'vue/brace-style': 'off',
    'vuejs-accessibility/alt-text': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
    'vuejs-accessibility/aria-props': 'off',
    'vuejs-accessibility/aria-role': 'off',
    'vuejs-accessibility/aria-unsupported-elements': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/heading-has-content': 'off',
    'vuejs-accessibility/iframe-has-title': 'off',
    'vuejs-accessibility/interactive-supports-focus': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/mouse-events-have-key-events': 'off',
    'vuejs-accessibility/no-access-key': 'off',
    'vuejs-accessibility/no-autofocus': 'off',
    'vuejs-accessibility/no-distracting-elements': 'off',
    'vuejs-accessibility/no-redundant-roles': 'off',
    'vuejs-accessibility/role-has-required-aria-props': 'off',
    'vuejs-accessibility/tabindex-no-positive': 'off',
    'vue/keyword-spacing': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-indent': 'off',
    'vue/html-quotes': 'off',
    'vue/no-spaces-around-equal-signs-in-attribute': 'off',
    'vue/object-curly-spacing': 'off',
    'vue/script-indent': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/comma-dangle': ['off', 'only-multiline'],
    'vue/component-definition-name-casing': 'off',
  },
};
