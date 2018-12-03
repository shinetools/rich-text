module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/!(rollup.config).{ts}',
    '!**/node_modules/**',
  ],
  roots: ['packages/'],
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
};
