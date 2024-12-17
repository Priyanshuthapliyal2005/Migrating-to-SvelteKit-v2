# Add Cookie Path to All Methods

This codemod adds `{ path: '/' }` to all `cookies` method calls in your TypeScript project. It ensures that cookies are set, deleted, or serialized with the correct path specified, which helps in consistent cookie handling across different environments.

## Transformations

This codemod performs the following transformations:

- **Set Cookie**: Transforms `cookies.set(key, value)` into `cookies.set(key, value, { path: '/' })`.
- **Delete Cookie**: Transforms `cookies.delete(key)` into `cookies.delete(key, { path: '/' })`.
- **Serialize Cookie**: Transforms `cookies.serialize(key, value)` into `cookies.serialize(key, value, { path: '/' })`.

## Usage

To apply this codemod, run the workflow script on your TypeScript files. Ensure you have the necessary dependencies installed and your project is configured to use this codemod.

## Example

### Before

```typescript
cookies.set('session', 'abc123');
cookies.delete('user');
cookies.serialize('token', 'xyz789');


```

### After

```ts
cookies.set('session', 'abc123', { path: '/' });
cookies.delete('user', { path: '/' });
cookies.serialize('token', 'xyz789', { path: '/' });


```