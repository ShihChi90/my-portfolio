module.exports = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  importOrder: ["^react", "^next", "<THIRD_PARTY_MODULES>", "^@\\/", "^\\.\\/"],
  importOrderSeparation: true,
  tabwidth: 2,
  trailingComma: "es5",
  semi: true,
};
