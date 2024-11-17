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

