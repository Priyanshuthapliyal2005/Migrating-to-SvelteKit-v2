import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  await updateCookieMethods(files);
}

async function updateCookieMethods(files: Api["files"]) {
  const cookieMethods = ["set", "delete", "serialize"];
  for (const method of cookieMethods) {
    await files("**/*.{js,ts,tsx,jsx,cjs,mjs}")
      .jsFam()
      .astGrep({
        rule: {
          kind: "call_expression",
          pattern: `cookies.${method}($1, $2)`,
        },
      })
      .replace(`cookies.${method}($1, $2, { path: '/' })`);
  }
}