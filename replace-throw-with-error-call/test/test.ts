import { error } from '@sveltejs/kit'
throw error(500, 'something went wrong');

import { error } from '@sveltejs/kit'
throw error(50, 'something ');

import { error } from '@sveltejs/kit'
throw error(200, 'went wrong');

import { redirect } from '@sveltejs/kit';

// Redirects to the specified URL with a 301 status code
redirect(301, '/new-location');


import { redirect } from '@sveltejs/kit';

// Redirect if the user is not authenticated
if (!user.isAuthenticated) {
  throw redirect(303, '/login');
}

import { redirect } from '@sveltejs/kit';

// Redirects to another page with a temporary 302 status
redirect(302, '/temporary-location');
