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
