/**
  Your global data folder is controlled by the dir.data configuration option.
  All *.json and module.exports values from *.js files in this directory will
  be added into a global data object available to all templates.

  This file can be accessed using: {{ site.title }}
*/

var pkgJSON = require('../../package.json');

module.exports = {
  title: "Christoph Müller – Frontend Developer",
  author: "Christoph Müller",
  url: "https://christophmueller.dev", // Don't end with a slash /
  description: "",
  meta_data: {
    theme_color: '#87ceeb', // used in Chrome, Firefox OS and Opera
    twitter: "",
    default_social_image: ""
  },
  ENV: process.env.ELEVENTY_ENV,
  version: pkgJSON.version
};