import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define transformations for import and path simplification
  const transformations = [
    {
      kind: "import_statement",
      pattern: "import { resolvePath } from '@sveltejs/kit';",
      replacement: "import { resolveRoute } from '$app/paths';"
    },
    {
      kind: "import_statement",
      pattern: "import { base } from '$app/paths';",
      replacement: "" // Leave empty to remove the statement
    },
    {
      kind: "lexical_declaration",
      pattern: "const path = base + $A;",
      replacement: "const path = $A;"
    }
  ];

  // Apply each transformation from the list
  for (const { kind, pattern, replacement } of transformations) {
    await files("**/*.ts")
      .jsFam()
      .astGrep({
        rule: {
          kind,
          pattern
        }
      })
      .replace(({ getNode, getCapture }) => {
        // Log the original statement for verification
        console.log("Transforming:", getNode().text());

        // Handle dynamic replacement for expressions like $A
        if (replacement.includes("$A")) {
          const $A = getCapture("$A").text();
          return replacement.replace("$A", $A);
        }

        // Apply the replacement for import statements
        return replacement;
      });
  }
}
