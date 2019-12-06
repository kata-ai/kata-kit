module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.story.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/index.{ts,tsx}'
  ],
  coverageReporters: ['json', 'lcov'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['lib', 'lib-es6'],
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/lib-es6/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  }
};
