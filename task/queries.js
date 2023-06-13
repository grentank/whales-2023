const { Locker, Parcel, Item } = require('./db/models');

module.exports = class QueryDB {
  static async allLocations() {

  }

  static async parcelsByLocation(location) {

  }

  static async recipientByItemName(name) {
    const res = await Item.findOne({ where: {name}, include: Parcel })
    // console.log(JSON.parse(JSON.stringify(res)))
    return res.Parcel.recipient;
  }

  static async accessCodeByItemId(id) {

  }

  static async totalWeightByLocation(location) {

  }
};
