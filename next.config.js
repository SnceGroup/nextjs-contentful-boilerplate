const path = require('path')
module.exports = {
    webpack5: true,
    fallback: {
        fs: false,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "${path.join(__dirname, 'styles/generic/_variables.scss')}";`,
    },
    publicRuntimeConfig: {
        GTM_CONTAINER: process.env.GTM_CONTAINER,
    }
}