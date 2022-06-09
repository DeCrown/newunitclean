const path = require("path");
const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("craco-react-scripts");

module.exports = {
    webpack: {
        alias: {
            'src': path.resolve(__dirname, "./src/"),
            'components': path.resolve(__dirname, "./src/components/"),
            'api': path.resolve(__dirname, "./src/api/"),
        }
    },
    babel: {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "useBuiltIns": "entry",
                    "corejs": "3.22"
                }
            ]
        ],
        plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-transform-arrow-functions"]
    },
};