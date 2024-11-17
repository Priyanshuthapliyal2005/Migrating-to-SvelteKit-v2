This codemod transforms import {$A} from '$env/dynamic/public'; and import {$A} from '$env/dynamic/private'; into their static counterparts, replacing them with import {$A} from '$env/static/public'; and import {$A} from '$env/static/private';, respectively. It ensures compatibility for prerendered pages and static deployments.

Note: This is a contrived example. Please modify it according to your use case.
### Example
### Before

```ts
// $env/dynamic/private
import { PRIVATE_API_KEY } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    const apiKey = PRIVATE_API_KEY;
    return { apiKey };
}

// $env/dynamic/public
import { PUBLIC_API_URL } from '$env/dynamic/public';

/** @type {import('./$types').PageLoad} */
export function load() {
    const apiUrl = PUBLIC_API_URL;
    return { apiUrl };
}

```

### After

```ts
// $env/static/private
import { PRIVATE_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    const apiKey = PRIVATE_API_KEY;
    return { apiKey };
}

// $env/static/public
import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export function load() {
    const apiUrl = PUBLIC_API_URL;
    return { apiUrl };
}

```

