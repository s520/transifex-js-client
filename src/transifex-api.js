var Promise = require('promise');
var superagent = require('superagent');
var superagentpromise = require('superagent-promise');
var objectAssign = require('object-assign');

var urlMap = require('./url.js');
var md5 = require('./md5.js');

var projectMixin = require('./mixins/project.js');
var resourceMixin = require('./mixins/resource.js');
var resourceStringMixin = require('./mixins/resourceString.js');
var languageMixin = require('./mixins/language.js');
var translationMixin = require('./mixins/translation.js');
var languageInfoMixin = require('./mixins/languageInfo.js');
var translationStringMixin = require('./mixins/translationString.js');

/**
 * Implements a client to the Transifex Api
 *
 * @class transifexApi
 */
let TransifexApi = {

  /**
   * Returns an instantiated api object.
   * @param {object} options - A hash containing username and password
   * @example txApi = transifexApi.connect({username: password:})
  **/

 connect(options) {
   this.username = options.tx_user;
   this.password = options.tx_pass;
   this.base_url = options.tx_base_url || 'https://www.transifex.com/';
   this.api_prefix = options.tx_api_prefix || 'api/2';
   this.urls = urlMap(`${this.base_url}${this.api_prefix}`);
   return this;
 },
 strToHash(source_string) {
   return this.md5(unescape(encodeURIComponent(source_string + ':')))
 }
}

TransifexApi.request = superagentpromise(superagent, Promise);
TransifexApi.md5 = md5;

module.exports = objectAssign(TransifexApi,
 projectMixin,
 resourceMixin,
 resourceStringMixin,
 languageMixin,
 translationMixin,
 languageInfoMixin,
 translationStringMixin
)
