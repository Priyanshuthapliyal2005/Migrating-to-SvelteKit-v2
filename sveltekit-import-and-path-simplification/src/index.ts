import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define transformations specifically for the rules you mentioned
  const transformations = [
    {
      kind: "lexical_declaration",
      pattern: "const path = base + $A;",
      replacement: "const path = $A;",
    },
    {
      kind: "import_statement",
      pattern: "import { resolvePath } from '@sveltejs/kit';",
      replacement: "import { resolvePath } from '$app/paths';",
    }
  ];

  // Apply each transformation from the list
  for (const { kind, pattern, replacement } of transformations) {
    await files("**/*.{js,ts,tsx,jsx}")
      .jsFam()
      .astGrep({
        rule: {
          kind,
          pattern,
        },
      })
      .replace(({ getNode }) => {
        // Log the original statement for verification
        console.log("Transforming:", getNode().text());
        // Apply the replacement
        return replacement;
      });
  }

  // Remove `import { base } from '$app/paths';` statement
  await files("**/*.{js,ts,tsx,jsx}")
    .jsFam()
    .astGrep({
      id: "remove-base-import",
      language: "TypeScript",
      rule: {
        kind: "import_statement",
        pattern: "import { base } from '$app/paths';",
      },
      fix: "", // Leaves empty to fully remove the line
    });
}
