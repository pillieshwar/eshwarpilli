const sitemap = require("sitemap");
const hostname = "https://www.eshwarpilli.com";
const fs = require("fs");

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  //   { url: "/projects", changefreq: "monthly", priority: 0.8 },
  //   { url: "/contact", changefreq: "monthly", priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

fs.writeFileSync("./public/sitemap.xml", sitemapInstance.toString());
