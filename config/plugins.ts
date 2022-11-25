module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-ipfs-client",
      providerOptions: {
        grpc: env("IPFS_GRPC"),
        http: env("IPFS_API_HTTP"),
        gateway: env("IPFS_GATEWAY"),
      },
    },
  },
  // ...
});