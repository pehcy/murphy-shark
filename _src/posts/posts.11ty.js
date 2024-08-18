module.exports = {
    author: "pehcy",
    permalink: function({page}) {
		return `/web/${ page.fileSlug }/`
	},
    layout: "blog.liquid",
    tags: ["posts"],
    showOnHomePage: true
}