import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  await files("**/*.ts")
    .jsFam()
    .astGrep("console.log($A)")
    .replace("console.error($A)");
}