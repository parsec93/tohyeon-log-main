const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'geunho',
    image: '/logo-color.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'web developer',
    bio: 'I develop with Java, Javascript and etc.',
    email: 'parsec93@naver.com',
    linkedin: 'parsec93',
    github: 'parsec93',
    instagram: '',
  },
  projects: [
    {
      name: 'tohyeon_log',
      href: 'https://tohyeon.web.app'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'tohyeon-log',
    description: 'welcome to tohyeon-log!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://tohyeon-log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
