module.exports = {
    extends: [
        'airbnb', 'prettier', 'prettier/react'
    ],
    parser: 'babel-eslint',
    env: {
        browser: true,
        jest: true,
        es6: true
    },
    plugins: [
        'react', 'import'
    ],
    rules: {
        'linebreak-style': 0,
        'no-use-before-define': 'off',
        'no-param-reassign': 'warn',
        'no-plusplus': 'warn',
        'no-underscore-dangle': 'off',
        'no-useless-escape': 'warn',
        'no-nested-ternary': 'off',

        'comma-dangle': [
            'error', {
                arrays: 'only-multiline',
                objects: 'only-multiline',
                imports: 'only-multiline',
                exports: 'only-multiline',
                functions: 'only-multiline'
            }
        ],
        'prefer-destructuring': 'off',
        'react/forbid-prop-types': 'warn',
        'react/no-did-mount-set-state': 'warn',
        'react/no-array-index-key': 'warn',
        'react/prefer-stateless-function': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/label-has-for': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off'
    },
    globals: {
        Enzyme: true
    }
};
