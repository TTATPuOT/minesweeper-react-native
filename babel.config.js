module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                cwd: 'babelrc',
                extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
                alias: {
                    "@elements": "./src/components/elements",
                    "@layouts": "./src/components/layouts",
                    "@modules": "./src/components/modules",
                    "@templates": "./src/components/templates",
                    "@store": "./src/store",
                    "@t": "./src/types",
                    "@utils": "./src/utils"
                }
            }
        ],
        'jest-hoist'
    ]
};
