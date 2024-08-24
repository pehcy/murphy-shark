window.onload = () => {
    var toc = "";
    var level = 0;

    document.getElementById("blog-contents").innerHTML = 
        document.getElementById("blog-contents").innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, titleText, closeLevel) {
                if (openLevel != closeLevel) {
                    return str;
                }

                console.log(openLevel);
                if (openLevel > level) {
                    if (toc.substring(0,4) == "<ol>") {
                        toc += (new Array(openLevel - level + 1)).join("<li><ol>");
                    } else {
                        toc += (new Array(openLevel - level + 1)).join("<ol>");
                    }
                } else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ol></li>");
                }

                level = parseInt(openLevel);

                var anchor = titleText.replace(/ /g, "_");
                toc += "<li><a class=\"text-slate-200\" href=\"#" + anchor + "\">" + titleText + "</a></li>";

                docstring = "<h" + openLevel + "><a id=\"" + anchor + "\">"
                            + titleText + "</a></h" + closeLevel + ">";

                return docstring;
            }
    );

    if (level) {
        toc += (new Array(level + 1)).join("</ol></li>");
    }

    document.getElementById("toc").innerHTML += toc;
}

window.addEventListener("scroll", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const sectionName = entry.target.getElementsByTagName('a')[0].id
            const id = sectionName;

            if (entry.intersectionRatio > 0) {
                document.querySelector(`a[href="#${id}"]`).classList.remove('text-slate-200');
                document.querySelector(`a[href="#${id}"]`).classList.add('text-blue-800');
                document.querySelector(`a[href="#${id}"]`).classList.add('font-bold');
            } else {
                document.querySelector(`a[href="#${id}"]`).classList.remove('text-blue-800');
                document.querySelector(`a[href="#${id}"]`).classList.remove('font-bold');
                document.querySelector(`a[href="#${id}"]`).classList.add('text-slate-200');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.getElementById('blog-contents').querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((section) => {
        observer.observe(section);
    });
})