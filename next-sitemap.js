module.exports = {
  siteUrl: process.env.SITE_URL || 'https://playgames.com.br/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
