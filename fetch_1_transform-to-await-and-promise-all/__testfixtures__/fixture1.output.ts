/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	cookies.set(name, value, { path: '/' })
;
	return { response }
}
/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	cookies.delete(name, value, { path: '/' })
;
	return { response }
}
/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	cookies.serialize(name, value, { path: '/' })
;
	return { response }
}