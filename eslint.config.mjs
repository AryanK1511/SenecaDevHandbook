import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import unusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ['**/node_modules/**', '.docusaurus/**', 'build/**', 'dist/**', 'coverage/**'] },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        ...reactRecommended,
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
            'unused-imports/no-unused-imports': 'warn',
        },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
];
