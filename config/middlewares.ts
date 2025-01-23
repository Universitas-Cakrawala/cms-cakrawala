export default ({ env }) =>  [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {  
    name: "strapi::security",  
    config: {  
      contentSecurityPolicy: {  
        useDefaults: true,  
        directives: {  
          "connect-src": ["'self'", "https:"],  
          "img-src": [  
            "'self'",  
            "data:",  
            "blob:",  
            'market-assets.strapi.io',
            env('MINIO_PRIVATE_ENDPOINT'),
          ],  
          "media-src": [  
            "'self'",  
            "data:",  
            "blob:",  
            'market-assets.strapi.io',
            env('MINIO_PRIVATE_ENDPOINT'),
          ],  
          upgradeInsecureRequests: null,  
        },  
      },  
    },  
  },  
];
