



// const nextConfig = {
//   images: {
//     domains: ['manushresth-real-estate.s3.amazonaws.com'],
//     unoptimized: true,
// },
// eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },

//   async headers() {
//       return [
//           {
//               // matching all API routes
//               source: "/api/:path*",
//               headers: [
//                 //   { key: "Access-Control-Allow-Credentials", value: "true" },
//                   { key: "Access-Control-Allow-Credentials", value: "*" },
//                   { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
//                   { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
//                   // { key: "Access-Control-Allow-Methods", value: "*" },
//                   { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//                   // { key: "Access-Control-Allow-Headers", value: "*" },
//               ]
//           }
//       ]
//   }
// }

// module.exports = nextConfig;

const nextConfig = {
  images: {
    domains: ['manushresth-real-estate.s3.amazonaws.com'],
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        // Matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://www.primeassociatesgroup.com" }, // Replace with your actual Godaddy domain
          { key: "Access-Control-Allow-Credentials", value: "true" }, // Allow cookies for authenticated requests (if applicable)
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, PATCH" }, // Adjust allowed methods based on your API needs
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization, X-Requested-With" }, // Adjust allowed headers based on your API needs
        ],
      },
    ];
  },
};

module.exports = nextConfig;
