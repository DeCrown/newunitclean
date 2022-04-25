const path = require("path");
const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("craco-react-scripts");

module.exports = {
    webpack: {
        alias: {
            'src': path.resolve(__dirname, "./src/"),
            'components': path.resolve(__dirname, "./src/components/"),
            'api': path.resolve(__dirname, "./src/api/"),
        }
    }
};