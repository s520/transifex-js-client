"use strict";

/**
 * The resource mixin is responsible for adding, retrieving and updating
 * from an existing project.
 * @module mixins/resource
 */

module.exports = (axios, urls) => ({

    /**
     * Retrieve the resources of the specified project.
     * @param {string} project_slug - The projects slug
     * @example const response = await txApi.resources();
     * @returns {Promise<Object>}
    **/

    resources(project_slug) {
        const path = urls.resources
            .replace("<project_slug>", project_slug);
        return axios.get(path);
    },

    /**
     * Add a new resource to a project
     * @param {string} project_slug - The projects slug
     * @param {object} form - An object containing the resource definition
     * @example
     * await txApi.resourceCreate('autotest', {
     *   slug: 'resourcetest',
     *   name: 'resourcetest',
     *   i18n_type: 'KEYVALUEJSON',
     *   content: JSON.stringify({"hello world": "hello world"}),
     * });
     * @returns {Promise<void>}
    **/

    resourceCreate(project_slug, form, options) {
        const path = urls.resources
            .replace("<project_slug>", project_slug);
        return axios.post(path, form, options);
    },

    /**
     * Retrieve the details of a project's resource
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @example const response = await txApi.resource('autotest', 'resourcetest');
     * @returns {Promise<Object>}
    **/

    resource(project_slug, resource_slug) {
        const path = urls.resource
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug);
        return axios.get(path);
    },

    /**
     * Retrieves the source file of the resource
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @example const response = await txApi.resourceFile('autotest', 'resourcetest');
     * @returns {Promise<Object>}
    **/

    resourceFile(project_slug, resource_slug) {
        const path = urls.resourceUpdate
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug);
        return axios.get(path, { params: { file: true } });
    },

    /**
     * Update the details of an existing resource
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @param {object} form - An object containing the resource definition
     * @example
     * await txApi.resourceDetailsUpdate('autotest', 'resourcetest', {
     *   name: 'updatedresourcetest',
     * });
     * @returns {Promise<void>}
    **/

    resourceDetailsUpdate(project_slug, resource_slug, form) {
        const path = urls.resource
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug);
        return axios.put(path, form);
    },

    /**
     * Update the resource strings of an existing resource
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @param {object} form - An object containing the resource definition
     * @example
     * await txApi.resourceStringsUpdate('autotest', 'resourcetest', {
     *   name: 'updatedresourcetest',
     * });
     * @returns {Promise<void>}
    **/

    resourceSourceStringsUpdate(project_slug, resource_slug, form) {
        const path = urls.resourceUpdate
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug);
        return axios.put(path, form);
    },

    /**
     * Delete an existing resource
     * @param {string} project_slug - The projects slug
     * @param {string} resource_slug - The resource slug
     * @example
     * await txApi.resourceDelete('autotest', 'resourcetest);
     * @returns {Promise<void>}
    **/

    resourceDelete(project_slug, resource_slug) {
        const path = urls.resource
            .replace("<project_slug>", project_slug)
            .replace("<resource_slug>", resource_slug);
        return axios.delete(path);
    }
});
