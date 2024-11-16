import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define the transformation rules
  const transformations = [
    {
      pattern: "goto($A)",
      regex: "http://",
      replacement: "window.location.href = $A;"
    },
    {
      pattern: "goto($A)",
      regex: "https://",
      replacement: "window.location.href = $A;"
    }
  ];

  // Apply each transformation
  for (const { pattern, regex, replacement } of transformations) {
    await files("**/*.ts")
      .jsFam()
      .astGrep({
        rule: {
          pattern: pattern
        }
      })
      .replace(({ getNode, context }) => {
        const nodeText = getNode().text();
        // Check if the node contains the required regex
        if (nodeText.includes(regex)) {
          console.log(`Transforming: ${nodeText}`);
          return replacement;
        }
        return nodeText; // No change if regex doesn't match
      });
  }
}
