module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
    },
};
