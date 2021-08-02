const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['vue', ...defaults.moduleFileExtensions],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(js|jsx|tsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['^.+\\.d\\.ts$'],
};
