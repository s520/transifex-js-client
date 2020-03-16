"use strict";

/**
 * The languageInfo mixin is responsible for retrieving the list of all
 * languages supported by Transifex.
 * @module mixins/languageInfo
 */

module.exports = (axios, urls) => ({

    /**
     * Retrieve the list of languages supported by Transifex.
     * @example const response = await txApi.languagesInfo();
     * @returns {Promise<Object>}
    **/

    languagesInfo() {
        const path = urls.languagesInfo;
        return axios.get(path);
    },

    /**
     * Retrieve the details of specific language.
     * @param {string} language_code - The target language code
     * @example const response = await txApi.languageInfo('testproject');
     * @returns {Promise<Object>}
    **/

    languageInfo(language_code) {
        const path = urls.languageInfo.replace("<language_code>", language_code);
        return axios.get(path);
    }
});
