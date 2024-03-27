export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-ipfs-client",
      providerOptions: {
        clientOptions: {
          host: env('IPFS_HOST', 'localhost'),
          port: env.int('IPFS_PORT', 5001),
        },
        gatewayUrl: env('IPFS_GATEWAY', '/ip4/127.0.0.1/tcp/8080/http')
      }
    }
  }
});
