const { RedisCache } = require('apollo-server-cache-redis');

const upToNthNeedle = (haystack, needle, maxCount) => {
  let position = haystack.indexOf(needle);
  let count = 0;

  while (position !== -1) {
    count++;

    if (maxCount <= count) {
      return haystack.substring(0, position);
    }

    position = haystack.indexOf(needle, position + 1);
  }

  return haystack;
};

class FetchMethodUrlRedisCache extends RedisCache {
  urlCacheKey(methodUrlCacheKey) {
    const [prefix, , url] = methodUrlCacheKey.split('::');
    const fullCacheKey = prefix + ':' + url;
    const collectionCacheKey = prefix + ':' + upToNthNeedle(url, '/', 4);

    return [fullCacheKey, collectionCacheKey];
  }

  async set(methodUrlCacheKey, entry) {
    return super.set(this.urlCacheKey(methodUrlCacheKey)[0], entry);
  }

  async get(methodUrlCacheKey) {
    const [fullCacheKey, collectionCacheKey] = this.urlCacheKey(
      methodUrlCacheKey,
    );

    if (methodUrlCacheKey.includes('GET')) {
      const entry = await super.get(fullCacheKey);
      return entry;
    }

    if (fullCacheKey !== collectionCacheKey) {
      await super.delete(collectionCacheKey);
    }

    await super.delete(fullCacheKey);
    return null;
  }
}

module.exports = FetchMethodUrlRedisCache;
