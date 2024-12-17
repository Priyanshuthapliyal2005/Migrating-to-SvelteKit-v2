```markdown
# SvelteKit v2 Migration Codemods

This repository contains a collection of codemods to assist in migrating projects to SvelteKit v2. Each codemod targets specific areas of code that need updating, making the migration process smoother and more efficient.

## Available Codemods

1. **Add Cookie Path to All Methods** (`add-cookie-path-to-all-methods`)

   Adds `{ path: '/' }` to all `cookies` method calls (`set`, `delete`, `serialize`) to ensure consistent cookie handling across different environments.

2. **Add Multipart Enctype to Forms with File Input** (`add-multipart-enctype-to-forms-with-file-input`)

   Automatically adds `enctype="multipart/form-data"` to `<form>` elements that contain `<input type="file">`, ensuring file uploads work correctly.

3. **Add Status to Error Handling** (`add-status-to-error-handling`)

   Enhances error handling by adding appropriate status codes where missing, improving clarity and HTTP response correctness.

4. **Dynamic to Static Env Transformer** (`DynamicToStaticEnvTransformer`)

   Converts dynamic environment variables to their static equivalents, aiding in the transition to the new environment variable handling in SvelteKit v2.

5. **Goto to Location Href** (`goto-to-location-href`)

   Replaces uses of `goto()` with `location.href` to align with the updated navigation practices in SvelteKit v2.

6. **Replace Throw Statements with Direct Function Calls** (`replace-throw-redirect-with-error-call`)

   Simplifies error handling and redirects by replacing `throw error()` and `throw redirect()` statements with direct calls to `error()` and `redirect()`.

7. **SvelteKit Import and Path Simplification** (`sveltekit-import-and-path-simplification`)

   Simplifies import statements and path resolution by replacing `resolvePath` and `base` concatenations with `resolveRoute` from `$app/paths`.

8. **SvelteKit Vite Preprocess Migration** (`sveltekit-vitePreprocess-migration`)

   Updates the preprocessing setup to use `vitePreprocess` in line with SvelteKit v2's recommended practices.

## Usage

To use any of these codemods, navigate into the desired codemod's directory and follow the instructions provided in its `README.md`. Ensure that you have the necessary dependencies installed and that your project is properly configured to apply the codemods.

## Example

```bash
cd add-cookie-path-to-all-methods
#run the codemod locally
npx codemod@0.13.11 add-cookie-path-to-all-methods
```

## Contribution

Contributions are welcome! If you have a codemod that helps with migrating to SvelteKit v2, feel free to submit a pull request.

## License

MIT License
```