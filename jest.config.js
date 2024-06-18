module.exports = {
    // Specify the root directory for Jest to run tests
    roots: ['<rootDir>/src'],

    // Specify Jest's test environment (you may not need to change this)
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}', // Include all TypeScript files in the src directory
        '!src/index.tsx', // Exclude specific files if necessary
        '!src/**/*.d.ts', // Exclude declaration files
    ],
    coverageDirectory: 'coverage',
    coverageReporters: [ 'lcov','text','html'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    // Specify the file extensions Jest should look for when running tests
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    // Specify the test regex pattern to match test files
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

    // Specify the module paths Jest should look for
    modulePaths: ['<rootDir>/src'],

    // Specify Jest's transform configuration for TypeScript files
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    // Map SVG files to the mock file
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts',
    },

    // Specify the setup file for Jest
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};
