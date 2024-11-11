import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  await files("**/*.ts")
    .jsFam()
    .astGrep({
      rule: {
        kind: "throw_statement",
        pattern: "throw error($A, $B)"
      },
      fix: `
        error($A, $B)
      `
    })
    .replace(({ getNode, getMatch }) => {
      console.log(getNode().text());
      return getNode().text().replace(/^throw\s+/, "");
    });
}
