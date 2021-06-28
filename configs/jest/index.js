const config = {
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },

    testEnvironment: 'node',

    preset: 'ts-jest',

    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
};

module.exports = config;
