module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [    
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/prettier",
    // "prettier",
    'plugin:prettier/recommended',
    // "google",
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    'prettier/prettier': 'error',
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
