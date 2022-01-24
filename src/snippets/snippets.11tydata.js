module.exports = {
  eleventyComputed: {
    indent: (data) => data.spaceIndent,
    permalink: (data) => `${data.page.filePathStem}.json`,
  },
  layout: "snippet.njk",
};
