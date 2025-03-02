export default ({env}) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('MINIO_PUBLIC_ENDPOINT'),
        s3Options: {
          credentials: {
            accessKeyId: env('MINIO_ROOT_USER'),
            secretAccessKey: env('MINIO_ROOT_PASSWORD'),
          },
          endpoint: env('MINIO_PRIVATE_ENDPOINT'),
          region: env('MINIO_REGION'),
          forcePathStyle: true,
          params: {
            Bucket: env('MINIO_BUCKET'),
          },
        }
      },
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '1h' // Atur waktu kedaluwarsa token (misalnya 1 jam)
      }
    }
  },
  'documentation': {
    config: {
      servers: [
        {
          url: 'https://cms.sga-cakrawala.org/api',
          description: 'Production server'
        }
      ]
    }
  }
})
