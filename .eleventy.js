module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    eleventyConfig.addPassthroughCopy({ "img/": "img" });
    eleventyConfig.addPassthroughCopy({ "static/fonts": "static/fonts" });
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