"use strict";

/**
 * The translationString mixin is responsible for retrieving and updating
 * specific translation strings from a given resource and target language.
 * @module mixins/translationString
 */

module.exports = (axios, urls, strToHash) => ({

    /**
     * Retrieve a list of all translation for the given language and project
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @param {string} language_code - The target language code
     * @example const response = await txApi.translationStrings('autotest', 'resourcetest', 'en');
     * @returns {Promise<Object>}
    **/

    translationStrings(project_slug, resource_slug, language_code) {
        const path = urls.translationStrings
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug)
            .replace("<language_code>", language_code);
        return axios.get(path);
    },

    /**
     * Retrieve a specifiv translation along with its details for the given
     * language and project
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @param {string} language_code - The target language code
     * @param {string} source_string - The source string
     * @example const response = await txApi.translationStringRead('autotest', 'resourcetest', 'en');
     * @returns {Promise<Object>}
    **/

    translationString(project_slug, resource_slug, language_code, source_string) { // eslint-disable-line
        const source_hash = strToHash(source_string);
        const path = urls.translationString
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug)
            .replace("<language_code>", language_code)
            .replace("<string_hash>", source_hash);
        return axios.get(path);
    },

    /**
     * Update a specific translation for the given language and project
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @param {string} language_code - The target language code
     * @param {string} source_string - The source string
     * @param {object} form - An object containing the updated translation
     * @example await txApi.translationStringRead('autotest', 'resourcetest', 'en');
     * @returns {Promise<void>}
    **/

    translationStringUpdate(project_slug, resource_slug, language_code, source_string, form) { // eslint-disable-line
        const source_hash = strToHash(source_string);
        const path = urls.translationString
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug)
            .replace("<language_code>", language_code)
            .replace("<string_hash>", source_hash);
        return axios.put(path, form);
    }
});
