module.exports = {
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest"
  },
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/(*.)+(spec|test).[jt]s?(x)']
};
