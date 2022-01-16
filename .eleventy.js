module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("formatSnippetBody", function (content) {
    // escape " and create array of lines
    const snippet = content.replace(/"/g, '\\"').split("\n");
    // wrap each line in double quotes
    const formattedSnippet = snippet.map((line, index) => {
      // don't add a comma after the last line
      return index === snippet.length - 1 ? `"${line}"` : `"${line}",`;
    });

    return formattedSnippet.join("\n");
  });

  return {
    dir: {
      input: "src",
      includes: "../_includes",
    },
  };
};
