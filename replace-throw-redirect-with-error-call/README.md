# Replace Throw Statements with Direct Function Calls

This codemod simplifies error handling and redirects in your TypeScript project by replacing `throw error()` and `throw redirect()` statements with direct calls to `error()` and `redirect()`. This change aligns with modern practices and results in cleaner, more readable code.

## Transformations

This codemod performs the following transformations:

- **Error Handling**: Transforms `throw error(status, message)` into `error(status, message)`.
- **Redirects**: Transforms `throw redirect(status, url)` into `redirect(status, url)`.

## Usage

To apply this codemod, run the workflow script on your TypeScript files. Ensure you have the necessary dependencies installed and your project is configured to use this codemod.

## Example

### Before

```typescript
import { error } from '@sveltejs/kit';
throw error(500, 'Internal Server Error');

import { redirect } from '@sveltejs/kit';
throw redirect(301, '/new-location');

import { redirect } from '@sveltejs/kit';
// Redirect if the user is not authenticated
if (!user.isAuthenticated) {
  throw redirect(303, '/login');
}
```

### After

```typescript
import { error } from '@sveltejs/kit';
error(500, 'Internal Server Error');

import { redirect } from '@sveltejs/kit';
redirect(301, '/new-location');

import { redirect } from '@sveltejs/kit';
// Redirect if the user is not authenticated
if (!user.isAuthenticated) {
  redirect(303, '/login');
}
```

## License

MIT License
```