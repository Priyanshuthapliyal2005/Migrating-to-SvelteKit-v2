import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define a set of patterns and replacement logic
  const transformations = [
    {
      kind: "throw_statement",
      pattern: "throw error($A, $B)",
      replacement: "error($A, $B)"
    },
    {
      kind: "throw_statement",
      pattern: "throw redirect($A, $B)",
      replacement: "redirect($A, $B)"
    }
  ];

  // Apply each transformation from the list
  for (const { kind, pattern, replacement } of transformations) {
    await files("**/*.ts")
      .jsFam()
      .astGrep({
        rule: {
          kind: kind,
          pattern: pattern
        }
      })
      .replace(({ getNode }) => {
        // Log the original throw statement
        console.log("Original:", getNode().text());
        // Replace "throw" with the function call directly (error/redirect)
        return getNode().text().replace(/^throw\s+/, "");
      });
  }
}
