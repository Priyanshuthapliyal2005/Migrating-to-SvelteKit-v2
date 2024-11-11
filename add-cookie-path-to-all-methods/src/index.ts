import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define transformations specifically for cookie path rules
  const transformations = [
    {
      kind: "call_expression",
      pattern: "cookies.set($A, $B)",
      replacement: "cookies.set($A, $B, { path: '/' })"
    },
    {
      kind: "call_expression",
      pattern: "cookies.delete($A)",
      replacement: "cookies.delete($A, { path: '/' })"
    },
    {
      kind: "call_expression",
      pattern: "cookies.serialize($A, $B)",
      replacement: "cookies.serialize($A, $B, { path: '/' })"
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
      .replace(({ getNode }) => {
        // Log the original statement for verification
        console.log("Transforming:", getNode().text());
        // Apply the replacement
        return replacement;
      });
  }
}
