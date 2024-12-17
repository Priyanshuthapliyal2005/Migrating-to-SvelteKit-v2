# Simplify SvelteKit Import and Path Usage

This codemod simplifies the import statements and path resolution in your SvelteKit project. It replaces the usage of `resolvePath` and concatenation with `base` by using the `resolveRoute` function from `$app/paths`. This results in cleaner and more readable code.

## Transformations

This codemod performs the following transformations:

- **Import Statement**: Transforms:

  ```typescript
  import { resolvePath } from '@sveltejs/kit';
  import { base } from '$app/paths';
  ```

  into

  ```typescript
  import { resolveRoute } from '$app/paths';
  ```

- **Path Resolution**: Transforms:

  ```typescript
  const path = base + resolvePath('/blog/[slug]', { slug });
  ```

  into

  ```typescript
  const path = resolveRoute('/blog/[slug]', { slug });
  ```

## Usage

To apply this codemod, run the workflow script on your TypeScript files. Ensure you have the necessary dependencies installed and your project is configured to use this codemod.

## Example

### Before

```typescript
import { resolvePath } from '@sveltejs/kit';
import { base } from '$app/paths';

const path = base + resolvePath('/blog/[slug]', { slug });
```

### After

```typescript
import { resolveRoute } from '$app/paths';

const path = resolveRoute('/blog/[slug]', { slug });
```