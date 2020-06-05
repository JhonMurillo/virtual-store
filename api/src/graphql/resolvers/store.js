const StoreModel = require('../../models/Store');
const _ = require('lodash');

module.exports = {
  Query: {
    stores: async (parent, args, context, info) => {
      const { filter, status = true, offset = 0, limit = 2 } = args;
      let query = { status };
      if (filter) {
        query['$text'] = { $search: filter };
      }
      query = _.omitBy(query, _.isNil);
      console.log(query, offset, limit);
      const stores = await StoreModel.aggregate([
        {
          $match: query,
        },
        {
          $sort: {
            created_at: -1,
            rating: -1,
          },
        },
        {
          $facet: {
            metadata: [{ $count: 'size' }],
            items: [
              { $skip: parseInt(offset, 10) },
              { $limit: parseInt(limit, 10) },
            ],
          },
        },
      ]);
      const size = stores[0].metadata[0] ? stores[0].metadata[0].size : 0;

      return {
        metadata: {
          size,
        },
        items: stores[0] ? stores[0].items : 0,
      };
    },
  },
  Mutation: {
    createStore: async (parent, { input }, context, info) => {
      const store = await StoreModel.create(input);
      return store;
    },
  },
};
