const nextConfig = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    domains: [
      {
        domain: 'webv.jp',
        defaultLocale: 'ja',
      },
      {
        domain: 'en.webv.jp',
        defaultLocale: 'en',
      },
    ],
  },
}

module.exports = nextConfig
