module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-ipfs",
      providerOptions: {
        grpc: env("IPFS_GRPC"),
        http: env("IPFS_HTTP"),
      },
    },
  },
  // ...
});