module.exports = {
  eleventyComputed: {
    indent: (data) => data.spaceIndent,
    category: (data) => {
      const stem = data.page.filePathStem
      return stem.slice(0, stem.lastIndexOf('/'))
    },
    permalink: (data) => `${data.page.filePathStem}.json`,
  },
  tags: "snippets",
  layout: "snippet.njk",
};