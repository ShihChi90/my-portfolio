# my-portfolio
a photography portfolio

# Setup Guide

## Prettier and ESLint

1. Install prettier and prettier plugins
   ```bash
   yarn add -D prettier prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports
   ```
2. Install eslint and eslint plugins
   ```bash
   yarn add -D eslint typescript @typescript-eslint/parser eslint-config-prettier @typescript-eslint/eslint-plugin
   ```
3. Copy and paste the `./prettierrc.cjs` and `./eslintrc.json` from this repo to your project root.

4. Add `format` script to `package.json`
   ```json
   {
     "scripts": {
       "format": "prettier --write ."
     }
   }
   ```
5. Check if the scripts work
   ```bash
   yarn format
   yarn lint
   ```
