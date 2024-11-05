This codemod streamlines the migration of throw statements to direct error function calls in SvelteKit codebases. 
It removes the throw keyword, ensuring your code aligns with modern error handling practices in SvelteKit.


## Example

### Before

```ts
import { error } from '@sveltejs/kit';
// Remove the throw keyword from the code
throw error(<status_code>, <error_message>);
```

### After

```ts
import { error } from '@sveltejs/kit';
error(<status_code>, <error_message>);
```
This codemod facilitates a smooth transition from throw statements to direct error function calls, enhancing your SvelteKit codebase's error handling approach while preserving existing functionality.