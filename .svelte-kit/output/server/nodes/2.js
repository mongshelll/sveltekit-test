

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.pqsgBVOx.js","_app/immutable/chunks/scheduler.uGQJRBNU.js","_app/immutable/chunks/index.CvsrfkM9.js"];
export const stylesheets = [];
export const fonts = [];