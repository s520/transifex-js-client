"use strict";

/**
 * The project mixin is responsible creating, retrieving and updating projects.
 * @module mixins/project
**/

module.exports = (axios, urls) => ({

    /**
     * Retrieve the projects that the user participates or owns.
     * @example const response = await txApi.projects();
     * @returns {Promise<Object>}
    **/

    projects() {
        const path = urls.projects;
        return axios.get(path);
    },

    /**
     * Create a new project
     * @param {Object} form - An object containing the projects definition
     * @example
     * await txApi.projectCreate({
     *   name: "autotest",
     *   slug: "autotest",
     *   private: true,
     *   description: "this is an automated test",
     *   source_language_code: "af"
     * });
     * @returns {Promise<void>}
    **/

    projectCreate(form) {
        const path = urls.projects;
        return axios.post(path, form);
    },

    /**
     * Retrieve the details of a specific project
     * @param {string} project_slug - The projects slug
     * @example const response = await txApi.projectRead("test_project");
     * @returns {Promise<Object>}
    **/

    project(project_slug) {
        const path = urls.project
            .replace("<project_slug>", project_slug);
        return axios.get(path, { params: { details: true } });
    },

    /**
     * Update an existing project
     * @param {string} project_slug - The projects slug
     * @param {Object} form - An object containing the projects update
     * @example
     * await txApi.projectUpdate("testproject", {
     *   description: "this is an updated description",
     * });
     * @returns {Promise<void>}
    **/

    projectUpdate(project_slug, form) {
        const path = urls.project
            .replace("<project_slug>", project_slug);
        return axios.put(path, form);
    },

    /**
     * Delete an existing project
     * @param {string} project_slug - The projects slug
     * @example await txApi.projectDelete("testproject");
     * @returns {Promise<void>}
    **/

    projectDelete(project_slug) {
        const path = urls.project
            .replace("<project_slug>", project_slug);
        return axios.delete(path);
    }
});
