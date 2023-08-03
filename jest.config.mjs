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
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/configs/(.*)$': '<rootDir>/src/configs/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/apis/(.*)$': '<rootDir>/src/apis/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/hocs/(.*)$': '<rootDir>/src/hocs/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@/theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@/generated/(.*)$': '<rootDir>/src/generated/$1',

    '^@/swagger/(.*)$': '<rootDir>/src/generated/swagger/$1',
    '^@/images/(.*)$': '<rootDir>/src/generated/path/images.ts',
    '^@/routes/(.*)$': '<rootDir>/src/generated/path/routes.ts',
    '^@/icons/(.*)$': '<rootDir>/src/generated/icons/MyIcons.tsx',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
