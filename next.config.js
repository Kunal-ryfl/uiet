const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
 
  images:{
    remotePatterns:[
     {
      protocol:'https',
      hostname:'puchd.ac.in'
     }
    ]
  }
}


module.exports = nextConfig
