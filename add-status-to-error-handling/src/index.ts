import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define transformations for switching from dynamic to static env imports
  const transformations = [
    {
      pattern: 'return { props: { error: $A } }',
      replacement: 'return { props: { error: $A , status: err.status || 500 } }',
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