import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define the transformations
  const transformations = [
    {
      id: "goto-to-location-href",
      language: "js",
      rule: {
        pattern: "goto($A)", // Match the function call to goto
        regex: '^https?:\\/\\/', // Check if $A starts with http:// or https://
      },
      fix: "window.location.href = $A;", // Replace with window.location.href assignment
    },
  ];

  // Apply each transformation
  for (const { id, language, rule, fix } of transformations) {
    await files("**/*.{js,ts,tsx,jsx}")
      .jsFam()
      .astGrep({
        id,
        language,
        rule,
      })
      .replace(({ getNode }) => {
        // Log the transformation for debugging
        console.log("Transforming:", getNode().text());
        // Return the fixed code
        return fix;
      });
  }
}
