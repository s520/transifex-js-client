/**
 * The translation mixin is responsible for retrieving and uploading translation
 * files.
 * @module mixins/translation
 */

 module.exports = (axios, urls) => ({

  /**
   * Retrieve a resource translation for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @example txApi.translationRead('autotest', 'resourcetest', 'en')
  **/

  translationRead(project_slug, resource_slug, language_code) {
    var path = urls['translation']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code);

    return axios.get(path, {
      transformResponse: [function (data) {
        return JSON.parse((JSON.parse(data)).content);
      }]
    })
  },

  /**
   * Update a resource translation for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @param {object} form - An object containing the updated translation
   * @example
   * txApi.translationUpdate('autotest', 'resourcetest', 'en', {
   *   'hello world': 'derp'
   * })
  **/

  translationUpdate(project_slug, resource_slug, language_code, form) {
    var path = urls['translation']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code);

    return axios.put(path, {
      content: JSON.stringify(form)
    });
  }
});
