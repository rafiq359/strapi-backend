module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "generate-schema": {
    enabled: true,
  },
  sitemap: {
    enabled: true,
    config: {
      limit: -1,
      xsl: true,
      autoGenerate: true,
      caching: true,
      allowedFields: ["id", "uid"],
      excludedTypes: [],
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
