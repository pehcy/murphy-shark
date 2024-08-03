const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    eleventyConfig.addPassthroughCopy({ "img/": "img" });
    eleventyConfig.addPassthroughCopy({ "static/fonts": "static/fonts" });

    eleventyConfig.addLayoutAlias("default", "layouts/default.liquid");
    eleventyConfig.addLayoutAlias("resume", "layouts/resume_layout.liquid");

    // webc plugin
    eleventyConfig.addPlugin(pluginWebc, {
        // Glob to find no-import global components
		// (The default changed from `false` in Eleventy WebC v0.7.0)
		components: "../_components/**/*.webc",
    })

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