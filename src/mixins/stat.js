"use strict";

/**
 * The stat mixin is responsible for retrieving stats for a given Resouce.
 * @module mixins/stat
 */

module.exports = (axios, urls) => ({

    /**
     * Retrieve the target languages of the project.
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @param {string} language_code - The target language code
     * @example const response = await txApi.stat('autotest', 'resourcetest', 'en');
     * @returns {Promise<Object>}
    **/

    stat(project_slug, resource_slug, lang_code) {
        const path = urls.stat
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug)
            .replace("<lang_code>", lang_code);
        return axios.get(path);
    },

    /**
     * Retrieve the all target languages of the project.
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @example const response = await txApi.stats('autotest', 'resourcetest');
     * @returns {Promise<Object>}
    **/

    stats(project_slug, resource_slug) {
        const path = urls.stats
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug);
        return axios.get(path);
    }
});
