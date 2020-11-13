const { BaseAPI } = require('./BaseAPI');

class VendorsAPI extends BaseAPI {
  async all() {
    const vendors = await this.get(this.collectionUrl(), null, {
      cacheOptions: { ttl: 600 },
    });
    return vendors;
  }

  async append(newVendor) {
    const vendor = await this.post(this.collectionUrl(), newVendor);
    return vendor;
  }

  async replace(vendor) {
    await this.put(this.memberUrl(vendor.id), vendor);
    return vendor;
  }

  async remove(vendorId) {
    const vendorUrl = this.memberUrl(vendorId);
    const vendor = await this.get(vendorUrl);
    await this.delete(vendorUrl);
    return vendor;
  }
}

module.exports = { VendorsAPI };
