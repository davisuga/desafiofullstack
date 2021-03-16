module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/*.spec.ts", "**/*.spec.tsx"],
  coverageReporters: ["lcov", "text"],
};
