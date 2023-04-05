// jest.config.mjs
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@apis/(.*)$': '<rootDir>/src/apis/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@hocs/(.*)$': '<rootDir>/src/hocs/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@icons/(.*)$': '<rootDir>/src/icons/$1',
    '^@image/(.*)$': '<rootDir>/src/image/$1',
    '^@config/(.*)$': '<rootDir>/config.ts',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
