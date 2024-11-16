import { goto } from '$app/navigation';

function navigateInternal() {
    goto('/dashboard', { state: { userId: 42, from: 'home' } });
    goto('/dashboard');
}

function navigateExternal() {
    goto('http://example.com');
}
function navigateExternal() {
    goto('https://example.com');
    goto('https://gurubase.io/g/ast-grep');
}
