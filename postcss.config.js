// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     'postcss-nesting': {}, // Замените на 'postcss-nesting' вместо 'tailwindcss/nesting'
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
