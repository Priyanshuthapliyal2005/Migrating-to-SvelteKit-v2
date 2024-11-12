import { resolvePath } from '@sveltejs/kit';
import { base } from '$app/paths';

const path = base + resolvePath('/blog/[slug]', { slug });