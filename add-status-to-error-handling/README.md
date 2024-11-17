This codemod improves error handling in SvelteKit by updating the way errors are returned in the load function. In SvelteKit 1, errors were handled inconsistently, often missing the status property or failing to trigger the handleError hook. SvelteKit 2 standardizes error handling by automatically including the status and message properties in error responses.

### Change Summary
In SvelteKit 1, errors were returned with just the error property.
In SvelteKit 2, errors are now returned with both error and status properties, ensuring consistent error handling and making it easier to manage different HTTP statuses.
This codemod ensures that all errors returned from the load function are compatible with SvelteKit 2’s enhanced error handling.

### Example
### Before

```ts
// Before (SvelteKit 1)
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const data = await fetchData(params.id);
    if (!data) {
      throw error(404, 'Data not found');
    }
    return { props: { data } };
  } catch (err) {
    // Errors might not always trigger handleError
    if (err.status === 404) {
      console.error("Page not found", err);
    }
    return { props: { error: err.message } };
  }
}


```

### After

```ts
// After (SvelteKit 2)
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const data = await fetchData(params.id);
    if (!data) {
      throw error(404, 'Data not found');
    }
    return { props: { data } };
  } catch (err) {
    // With the improved error handling in SvelteKit 2, errors are now consistent
    // and trigger the handleError hook with status and message.
    return { props: { error: err.message, status: err.status || 500 } };
  }
}


```

