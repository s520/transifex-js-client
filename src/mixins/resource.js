/**
 * The resource mixin is responsible for adding, retrieving and updating
 * from an existing project.
 * @module mixins/resource
 */

 module.exports = (axios, urls) => ({

  /**
   * Retrieve the resources of the specified project.
   * @param {string} project_slug - The projects slug
   * @example txApi.resources().then(function(data) {})
  **/

   resources(project_slug) {
     var path = urls['resources'].
      replace('<project_slug>', project_slug);
     return axios.get(path);
   },

  /**
   * Add a new resource to a project
   * @param {string} project_slug - The projects slug
   * @param {object} form - An object containing the resource definition
   * @example
     txApi.resourceCreate('autotest', {
       slug: 'resourcetest',
       name: 'resourcetest',
       i18n_type: 'KEYVALUEJSON',
       content: JSON.stringify({"hello world": "hello world"}),
     })
  **/

   resourceCreate(project_slug, form, options) {
     var path = urls['resources'].
      replace('<project_slug>', project_slug);
     return axios.post(path, form, options);
   },

  /**
   * Retrieve the details of a project's resource
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @example txApi.resource('autotest', 'resourcetest')
  **/

   resource(project_slug, resource_slug) {
     var path = urls['resource'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug);
     return axios.get(path);
   },

   /**
    * Retrieves the source file of the resource
    * @param {string} project_slug - The projects slug
    * @param {string} resource_slug - The resource slug
    * @example txApi.resourceFile('autotest', 'resourcetest')
   **/

   resourceFile(project_slug, resource_slug) {
     var path = urls['resourceUpdate'].
     replace('<project_slug>', project_slug).
     replace('<resource_slug>', resource_slug);
     return axios.get(path, { params: { file: true } });
   },

  /**
   * Update the details of an  existing resource
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {object} form - An object containing the resource definition
   * @example
     txApi.resourceDetailsUpdate('autotest', 'resourcetest', {
       name: 'updatedresourcetest',
     })
  **/

   resourceDetailsUpdate(project_slug, resource_slug, form) {
     var path = urls['resource'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug);
     return axios.put(path, form);
   },

  /**
   * Update the resource strings of an  existing resource
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {object} form - An object containing the resource definition
   * @example
     txApi.resourceStringsUpdate('autotest', 'resourcetest', {
       name: 'updatedresourcetest',
     })
  **/

   resourceSourceStringsUpdate(project_slug, resource_slug, form) {
     var path = urls['resourceUpdate'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug);
     return axios.put(path, form);
   },

  /**
   * Delete an existing resource
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @example
     txApi.resourceDelete('autotest', 'resourcetest)
  **/

   resourceDelete(project_slug, resource_slug) {
     var path = urls['resource'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug);
     return axios.delete(path);
   },
 });
