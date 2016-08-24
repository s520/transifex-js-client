import TransifexApi from '../src/transifex-api.js';

global.txApi = TransifexApi.connect({
  tx_user: 'alexapi1',
  tx_pass: 'alexapi1',
  tx_base_url: 'http://tx.loc:8000/',
});
global.slug = 'project' + require('shortid').generate();

console.log(slug);
describe('An api class', () => {
  it('should exist ', () => {
    expect(txApi).to.not.be.undefined;
  });
});
