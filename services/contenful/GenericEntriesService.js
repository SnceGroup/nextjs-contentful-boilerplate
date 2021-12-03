const GenericEntriesService = (function (){
    const {LINK_LEVEL} = require('../../utils/constants')

    async function _fetchEntriesBySlug({isPreview, content_type, slug, locale = ''}) {
        const client = require('./clients/contentfulClient').initClient({
            isPreview: isPreview
        })
        const entries = await client.getEntries({
            include: LINK_LEVEL,
            content_type: content_type,
            locale: locale,
            'fields.slug[in]': slug.toString(),
        })
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${slug}.`)
    }

    async function fetchEntryById({isPreview, id}) {
        const client = require('./clients/contentfulClient').initClient({
            isPreview: isPreview
        })
        try {
            return await client.getEntry(id, {
                locale: '*'
            })
        } catch (error) {
            console.log(`No entry found with id ${id}`)
        }
    }

    async function fetchContentTypeBySlug({isPreview, slug, locale = '', contentTypeId}) {
        let pages = await _fetchEntriesBySlug({
            isPreview: isPreview,
            content_type: contentTypeId,
            slug: slug.toString().replaceAll(',', '/'),
            locale: locale
        })
        return pages[0];
    }

    async function fetchEntriesByTag({isPreview, tag, locale = ''}) {
        const client = require('./clients/contentfulClient').initClient({
            isPreview: isPreview
        })
        const entries = await client.getEntries({
            locale: locale,
            'metadata.tags.sys.id[all]': tag,
        })

        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${tag}.`)
    }

    return {
        fetchEntryById: fetchEntryById,
        fetchContentTypeBySlug: fetchContentTypeBySlug,
        fetchEntriesByTag: fetchEntriesByTag
    };
})();

module.exports = GenericEntriesService

