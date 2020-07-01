module.exports = {
  extends: ['stylelint-config-wolox'],
  rules: {
    'selector-max-type': 2,
    'max-line-length': 120,
    'declaration-property-unit-blacklist': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['if', 'for', 'extend', 'mixin', 'include', 'function', 'return']
      }
    ],
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInsideAtRules: ['if', 'mixin', 'media']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'import', 'local']
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreSelectors: [':export']
      }
    ]
  }
};
