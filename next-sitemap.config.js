/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://bossbsynth.com', // Change to your actual domain
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 5000, // Maximum URLs per sitemap file
    exclude: ['/404'], // Exclude specific pages from the sitemap
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};
