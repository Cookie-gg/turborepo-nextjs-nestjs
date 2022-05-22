/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  rootDir: './',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'node',
  testRegex: '.*\\.(test|spec)\\.(ts)$',
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
};
