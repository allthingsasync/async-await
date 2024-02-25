const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static/style.css");

    eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "en-us") {
        var theDate = new Date(dateVal);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return theDate.toLocaleDateString(locale, options);
    });

    eleventyConfig.addPlugin(syntaxHighlight);
      
};