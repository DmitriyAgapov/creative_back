module.exports = () => ({

  'duplicate-button': true,
  slugify: {
    enabled: true,
    config: {
      shouldUpdateSlug: true,
      contentTypes: {
        'product-category': {
          field: 'url',
          references: 'title',
          shouldUpdateSlug: true
        },
        'product': {
          field: 'url',
          references: ['title', 'sku'],
          shouldUpdateSlug: true
        },
      }
    }
  },
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },
  'import-export-entries': {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  bulkoperator: {
    enabled: true,
    resolve: "strapi-bulk-operator",
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 10,
      defaultLimit: 100,
      amountLimit: 100,
      maxLimit: 150,

      apolloServer: {

        tracing: false,
      },
    },
  },

  // "fuzzy-search": {
  //   enabled: true,
  //   config: {
  //     contentTypes: [
  //       {
  //         uid: "api::part.part",
  //         modelName: "parts",
  //         transliterate: true,
  //         // queryConstraints: {
  //         //   where: {
  //         //     $and: [
  //         //       {
  //         //         publishedAt: { $notNull: true },
  //         //       },
  //         //     ],
  //         //   },
  //         // },
  //         fuzzysortOptions: {
  //           characterLimit: 300,
  //           threshold: -600,
  //           limit: 20,
  //           keys: [
  //             {
  //               name: "title",
  //               weight: 100,
  //             },
  //             {
  //               name: "partNumber",
  //               weight: -100,
  //             },
  //           ],
  //         },
  //       }
  //
  //     ],
  //   },
  // },
});
