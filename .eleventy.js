const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPassthroughCopy({ "img/": "img" });
    eleventyConfig.addPassthroughCopy({ "static/fonts": "fonts" });
    eleventyConfig.addPassthroughCopy({"static/js": "static/js"});
    eleventyConfig.addPassthroughCopy({"static/img": "static/img"});
    eleventyConfig.addPassthroughCopy({"static/resume.pdf": "static/resume.pdf"});
    eleventyConfig.addPassthroughCopy({"robots.txt": "robots.txt"});

    eleventyConfig.addLayoutAlias("default", "layouts/default.liquid");
    eleventyConfig.addLayoutAlias("blog", "layouts/blog.liquid");

    /* template engine configurations */
    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid",
        ],

        // When a passthrough file is modified, rebuild the pages:
        passthroughFileCopy: true,

        // directories settings for 11ty project
        dir: {
            input: '_src',              // default: '.'
            includes: '../_includes',      // default: '_includes'
            data: '../_data',              // default: '_data'
            output: '_site'
        }
    }
}