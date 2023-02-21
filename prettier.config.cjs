/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 80,
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  arrowParens: "avoid",
};
