// Import the NAPI-based codemod API
const { files } = require("@codemod/com/workflow");

// Define patterns for matching and transformation
const hasBlockPattern = `
  if (Editor.hasBlock(editor, 'paragraph')) {
    $BODY
  }
`;

const hasBlockWithConditionPattern = `
  if (Editor.hasBlock(editor, 'paragraph') && $CONDITION) {
    $BODY
  }
`;

const transformedPattern = `
  if (Editor.nodes(editor, {
    match: n => Element.isElement(n) && n.type === 'paragraph'
  }).next().done === false) {
    $BODY
  }
`;

// Export the workflow function for the codemod
module.exports.workflow = async function workflow({ files }) {
  // Transform simple `if (Editor.hasBlock(editor, 'paragraph'))` pattern
  await files("**/*.ts")
    .jsFam()
    .astGrep(hasBlockPattern)
    .replace(transformedPattern);

  // Transform `if (Editor.hasBlock(editor, 'paragraph') && ...)` pattern
  await files("**/*.ts")
    .jsFam()
    .astGrep(hasBlockWithConditionPattern)
    .replace(transformedPattern);

  console.log("Transformed Editor.hasBlock to Editor.nodes.");
};
