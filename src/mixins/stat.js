/**
 * The stat mixin is responsible for retrieving stats for a given Resouce.
 * @module mixins/stat
 */
module.exports = {

  /**
   * Retrieve the target languages of the project.
   * @param {string} project_slug - The projects slug
   * @example txApi.languages('testproject').then(function(data) {})
  **/

  stat(project_slug, resource_slug, lang_code) {
    var path = this.urls['stat']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<lang_code>', lang_code)

    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
  },
  
  stats(project_slug, resource_slug) {
    var path = this.urls['stats']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)

    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
  },
}
