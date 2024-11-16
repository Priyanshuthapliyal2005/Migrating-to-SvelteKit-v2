import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define transformations specifically for the `vitePreprocess` import migration
  const transformations = [
    {
      kind: "import_statement",
      pattern: "import { vitePreprocess } from '@sveltejs/kit/vite';",
      replacement: "import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';",
    },
  ];

  // Apply each transformation from the list
  for (const { kind, pattern, replacement } of transformations) {
    await files("**/*.{js,ts,svelte}")
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
