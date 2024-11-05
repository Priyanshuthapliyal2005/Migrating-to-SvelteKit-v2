export default function transform(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Find all ThrowStatement nodes
  root.find(j.ThrowStatement).forEach(path => {
    const argument = path.node.argument;

    // Check if the argument is a CallExpression
    if (j.CallExpression.check(argument)) {
      const callee = argument.callee;

      // Ensure the callee is an Identifier named 'error'
      if (j.Identifier.check(callee) && callee.name === 'error') {
        // Replace the ThrowStatement with the CallExpression
        j(path).replaceWith(j.expressionStatement(argument));
        dirtyFlag = true;
      }
    }
  });

  return dirtyFlag ? root.toSource() : undefined;
}


export const parser = "tsx";