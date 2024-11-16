import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define transformations for `goto($A)` calls with specific URL patterns
  const transformations = [
    {
      kind: "call_expression",
      pattern: "goto($A)",
      regex: "http://",
      replacement: "window.location.href = $A;"
    },
    {
      kind: "call_expression",
      pattern: "goto($A)",
      regex: "https://",
      replacement: "window.location.href = $A;"
    }
  ];

  // Apply each transformation from the list
  for (const { kind, pattern, regex, replacement } of transformations) {
    await files("**/*.ts")
      .jsFam()
      .astGrep({
        rule: {
          kind,
          pattern
        }
      })
      .filter(({ getNode }) => {
        const node = getNode();
        const argument = node.getArguments()?.[0]?.text(); // Access the argument of `goto($A)`
        return argument && new RegExp(regex).test(argument); // Ensure the argument matches the regex
      })
      .replace(({ getNode }) => {
        // Log the original statement for verification
        console.log("Transforming:", getNode().text());
        // Apply the replacement
        return replacement;
      });
  }
}
