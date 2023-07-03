const {
    alias
} = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@core': 'src/core',
        '@features': 'src/features',
        '@pages': 'src/pages',
        '@shared': 'src/shared',
        '@assets': 'src/assets',
        '@constants': 'src/constants',
        '@components': 'src/components',
        '@api': 'src/api',
        '@routes': 'src/routes',
    })(config);

    return config;
};