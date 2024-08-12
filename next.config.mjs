// next.config.mjs
export default {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // Use 'false' for temporary redirects
      },
    ];
  },
};
