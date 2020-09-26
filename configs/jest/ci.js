const jestConfig = require('./index');

const config = {
    ...jestConfig,

    reporters: [
        [
            'default',
            'jest-html-reporters',
            {
                publicPath: './reports',
                filename: 'jest.html',
                expand: true,
            },
        ],
    ],
};

module.exports = config;
