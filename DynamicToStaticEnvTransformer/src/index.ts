import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define transformations for switching from dynamic to static env imports
  const transformations = [
    {
      kind: "import_statement",
      pattern: "import {$A} from '$env/dynamic/private';",
      replacement: "import {$A} from '$env/static/private';",
    },
    {
      kind: "import_statement",
      pattern: "import {$A} from '$env/dynamic/public';",
      replacement: "import {$A} from '$env/static/public';",
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
}
