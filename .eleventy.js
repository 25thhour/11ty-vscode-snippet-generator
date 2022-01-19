module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("formatSnippetBody", function (content) {
    // escape " and create array of lines
    const snippet = content.replace(/"/g, '\\"').split("\n");
    // default indentation
    // TODO make indent value configurable
    const indent = 2;
    // wrap each line in double quotes
    const formattedSnippet = snippet.map((line, index) => {
      // count the number of leading spaces or \t chars
      const indentCount = line.search(/\S/) !== -1 ? line.search(/\S/) : 0;
      const newLine = line
        // remove the leading whitespace
        .trimStart()
        // add a \t for each tabstop according to indentCount
        .replace(/^/, "\t".repeat(indentCount / indent));
      // don't add a comma after the last line
      return index === snippet.length - 1 ? `"${newLine}"` : `"${newLine}",`;
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
