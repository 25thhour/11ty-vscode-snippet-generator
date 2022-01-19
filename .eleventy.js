module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("formatSnippetBody", function (content, indent) {
    // escape " and create array of lines
    const snippet = content.replace(/"/g, '\\"').trim().split("\n");
    const spaceIndent = indent > 0 ? indent : 2;
    // wrap each line in double quotes
    const formattedSnippet = snippet.map((line, index) => {
      // if lines are indented with tabs, no need to transform
      if (line.charAt(0) === "\t") {
        return index === snippet.length - 1 ? `"${line}"` : `"${line}",`;
      }

      // if lines are indented with spaces, transform to tabs
      // count the number of leading spaces
      const indentCount = line.search(/\S/) !== -1 ? line.search(/\S/) : 0;
      const newLine = line
        // remove the leading spaces
        .trimStart()
        // add a \t for each tabstop according to indentCount
        .replace(/^/, "\t".repeat(indentCount / spaceIndent));
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
