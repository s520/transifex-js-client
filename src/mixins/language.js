"use strict";

/**
 * The language mixin is responsible for retrieving and setting the languages
 * of a project.
 * @module mixins/language
 */

module.exports = (axios, urls) => ({

    /**
     * Retrieve the target languages of the project.
     * @param {string} project_slug - The projects slug
     * @example const response = await txApi.languages('testproject');
     * @returns {Promise<Object>}
    **/

    languages(project_slug) {
        const path = urls.languages.replace("<project_slug>", project_slug);
        return axios.get(path);
    },

    /**
     * Add a new target language to the project.
     * @param {string} project_slug - The projects slug
     * @param {object} form - An object containing the target language code
     * and the coordinators array
     * @example
     * await txApi.languageCreate('testproject', {
     *   language_code: 'en',
     *   coordinators: [
     *     'alexapi1'
     *   ]
     * });
     * @returns {Promise<void>}
    **/

    languageCreate(project_slug, form) {
        const path = urls.languages
            .replace("<project_slug>", project_slug);
        return axios.post(path, form);
    },

    /**
     * Retrieve the details of a project's target language.
     * @param {string} project_slug - The projects slug
     * @param {string} language_code - The target language code
     * @example const response = await txApi.languageRead('testproject', 'en');
     * @returns {Promise<Object>}
    **/

    language(project_slug, language_code) {
        const path = urls.language
            .replace("<project_slug>", project_slug)
            .replace("<language_code>", language_code);
        return axios.get(path);
    },

    /**
     * Update a project's target language.
     * @param {string} project_slug - The projects slug
     * @param {string} language_code - The target language code
     * @param {object} form - An object containing the target language code
     * and the coordinators array
     * @example
     * await txApi.languageUpdate('testproject', 'en', {
     *   list: 'mylist@listserver.com',
     *   coordinators: [
     *    'alexapi1'
     *   ]
     * });
     * @returns {Promise<void>}
    **/

    languageUpdate(project_slug, language_code, form) {
        const path = urls.language
            .replace("<project_slug>", project_slug)
            .replace("<language_code>", language_code);
        return axios.put(path, form);
    },

    /**
     * Remove a target language from the project
     * @param {string} project_slug - The projects slug
     * @param {string} language_code - The target language code
     * @example await txApi.languageDelete('testproject', 'en');
     * @returns {Promise<void>}
    **/

    languageDelete(project_slug, language_code) {
        const path = urls.language
            .replace("<project_slug>", project_slug)
            .replace("<language_code>", language_code);
        return axios.delete(path);
    }
});
