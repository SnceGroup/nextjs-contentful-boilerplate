const { createClient } = require('contentful')
const {APPLICATION_NAME} = require('../../../utils/constants')
require('dotenv').config()

/**
 * Initialize the contentful Client
 * @param options {spaceId: string, deliveryToken: string, previewToken: string}
 *
 * @returns {ContentfulClientApi}
 */

const ContentfulClient = (function (){
    function initClient({ isPreview }) {
        // Getting the app version
        const { version } = require('../../../package.json')
        const applicationName = `${APPLICATION_NAME}/${version}`

        const config = {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            token: isPreview ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_TOKEN,
            host: isPreview ? 'preview.contentful.com' : 'cdn.contentful.com',
            env: process.env.NEXT_PUBLIC_CONTENTFUL_ENV
        }

        return createClient({
            application: applicationName,
            space: config.spaceId,
            accessToken: config.token,
            host: config.host,
            removeUnresolved: true,
            resolveLinks: true,
            environment: config.env
        })
    }
    return {
        initClient: initClient
    };
})();

module.exports = ContentfulClient

