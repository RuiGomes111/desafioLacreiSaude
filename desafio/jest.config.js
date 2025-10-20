const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Caminho para sua app Next.js
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock para estilos
    '^@/components/(.*)$': '<rootDir>/app/components/$1', // Ajuste se usar aliases
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transpila com Babel
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};

module.exports = createJestConfig(customJestConfig);