const { RESTDataSource } = require('apollo-datasource-rest');

class BaseAPI extends RESTDataSource {
  constructor(baseURL) {
    super();
    this.baseURL = baseURL;
  }

  cacheKeyFor(request) {
    return ':' + request.method + '::' + request.url;
  }

  collectionUrl() {
    return 'vendors';
  }

  memberUrl(memberId) {
    return this.collectionUrl() + '/' + encodeURIComponent(memberId);
  }
}

module.exports = { BaseAPI };
