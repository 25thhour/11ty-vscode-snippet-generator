# 11ty Visual Studio Code Snippet Generator

Built with [11ty](https://11ty.dev) to generate [vscode snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

## Usage

> Default state requires zero configuration and assumes (and has only been tested with) [Nunjucks templates](https://www.11ty.dev/docs/languages/nunjucks/).

1. Create a code snippet in `snippets/`
2. Run `npm run build`
3. Your properly formatted vscode snippets have been generated under `_site_/<snippet_name_here>`🥳
