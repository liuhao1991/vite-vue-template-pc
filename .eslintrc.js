/*
 * @Author: lh@metgs.com
 * @Date: 2021-12-06 11:29:39
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2022-07-19 14:52:14
 * @Description: ...
 */
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
  ],
  parser: 'vue-eslint-parser',
  rules: {
    // basic js rules
    'max-len': [2, { 'code': 120, 'ignoreUrls': true }],
    'curly': 2,
    'object-curly-spacing': [2, 'always'],
    'semi': [2, 'always'],
    'quotes': [2, 'single'],
    'indent': [2, 2, {
      'SwitchCase': 1,
    }], // 缩进
    'no-cond-assign': [2, 'always'],
    'no-const-assign': 2,
    'no-console': 0,
    'no-debugger': isProduction ? 2 : 0,
    'no-unused-vars': isProduction ? 2 : 0, // Used for debug
    'no-unreachable': isProduction ? 2 : 0, // Used for debug
    'space-before-function-paren': ['error', 'always'],
    'space-infix-ops': 'error',
    'func-call-spacing': 2,
    'block-spacing': 2,
    'semi-spacing': 2,
    'eqeqeq': 2,
    'no-var': 2,
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
    // vue rules
    'vue/no-multiple-template-root': 0, // off | error
    'vue/no-v-model-argument': 0,
    'vue/html-quotes': [2, 'double', { avoidEscape: false }],
    'vue/no-spaces-around-equal-signs-in-attribute': [2],
    'vue/require-default-prop': [2],
    'vue/require-prop-types': [2],
    'vue/script-indent': [2, 2, { // script 不缩进
      'baseIndent': 0,
      'switchCase': 1,
      'ignores': [],
    }],
    'vue/html-indent': [
      2,
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'ignore',
      'multiline': 'below',
    }],
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/singleline-html-element-content-newline': [
      2,
      {
        ignoreWhenNoAttributes: false,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],
    'vue/no-unused-components': [
      2,
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    'vue/multi-word-component-names': [
      0,
      {
        'ignores': [],
      },
    ],
  },
};
