This codemod updates your SvelteKit project to ensure that a { path: '/' } option is included when setting, deleting, or serializing cookies. This is important for ensuring that cookies are correctly scoped to the root path of your application.

### Before

```ts
export function load({ cookies }) {
  cookies.set(name, value);
  cookies.delete(name, value);
  cookies.serialize(name, value);
  return { response };
}
```

### After

```ts
export function load({ cookies }) {
  cookies.set(name, value, { path: '/' });
  cookies.delete(name, value, { path: '/' });
  cookies.serialize(name, value, { path: '/' });
  return { response };
}
```

Why Add { path: '/' }?
Setting the path to '/' ensures that the cookie is accessible across your entire application, rather than being restricted to the path where it was set. This is a common requirement for applications that need consistent cookie behavior across different routes.