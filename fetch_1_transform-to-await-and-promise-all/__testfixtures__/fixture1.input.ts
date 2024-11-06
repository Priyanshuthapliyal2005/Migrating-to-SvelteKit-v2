/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	cookies.set(name, value);
	return { response }
}
/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	cookies.delete(name, value);
	return { response }
}
/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	cookies.serialize(name, value);
	return { response }
}