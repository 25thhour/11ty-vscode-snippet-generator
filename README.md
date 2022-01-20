# 11ty Visual Studio Code Snippet Generator

Zero configuration tool built with [11ty](https://11ty.dev) to generate [vscode snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets) from raw code blocks, i.e. without having to manually wrap each line of the snippet body in double quotes.

Simply create a `.njk` file in the snippets directory (or any subdirectory) and add the required frontmatter to the top of the file:

### Frontmatter

All snippets require a `frontmatter` block with the following keys (unless listed as optional):

```
---
name: <snippet-name>
prefix: <snippet-prefix>
description: <snippet-description> (optional)
spaceIndent: 4 (optional)
---
```

| Key                      | Role                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| `name`                   | The name of the snippet.                                                                 |
| `prefix`                 | The snippet's prefix. **Note**: `prefix` can be an array of options or a single string.  |
| `description` (optional) | The snippet's description.                                                               |
| `spaceIndent` (optional) | The number of spaces to indent the snippet body. If not specified defaults to `2` spaces |

### Prefix Examples

Single `string` prefix:

```
prefix: <snippet-prefix>
```

An `array` of prefixes:

```
prefix:
- <snippet-prefix-1>
- <snippet-prefix-2>
- etc
```

### Example Snippet

```
---
name: for-loop
prefix:
- for
- for-const
description: A for loop.
---

for (const ${2:element} of ${1:array}) {
 $0
}
```

## Usage

> Default state requires zero configuration and assumes (and has only been tested with) [Nunjucks templates](https://www.11ty.dev/docs/languages/nunjucks/).

1. Run `npm run dev` to watch for changes in the `snippets/` directory and generate snippets automatically.
2. Create each code snippet(s) in `snippets/<optional-folder-name>/<snippet-name>.njk`

   e.g. `snippets/javascript/for-loop.njk`

   ```
   ---
   name: for-loop
   prefix:
    - for
    - for-const
   description: A for loop.
   ---

   for (const ${2:element} of ${1:array}) {
     $0
   }
   ```

3. Your properly formatted vscode snippets have been generated under `dist/snippets/<optional-folder-name>/<snippet-name>.json`

   e.g. `dist/snippets/javascript/for-loop.json`

   ```
   {
     "for-loop": {
       "prefix": ["for", "for-const"],
       "body": ["for (const ${2:element} of ${1:array}) {", "\t$0", "}"],
       "description": "A for loop."
     }
   }
   ```

4. (optional) run `npm run build` or `npm run prettier` to prettify the generated snippets.
