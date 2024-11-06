import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

async function r({ files }: { files: any }) {
  await files("**/*.ts")
    .jsFam()
    .astGrep({
      rule: {
        kind: "call_expression",
        pattern: "console.log($1)"
      }
    })
    .replace("console.error($1)");
}

export { r as workflow };