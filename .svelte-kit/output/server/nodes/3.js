

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DSWvKD7_.js","_app/immutable/chunks/scheduler.uGQJRBNU.js","_app/immutable/chunks/index.CvsrfkM9.js","_app/immutable/chunks/stores.C-3Uk91v.js","_app/immutable/chunks/index.BeqEGQRZ.js"];
export const stylesheets = ["_app/immutable/assets/3.B6OuL5Oe.css"];
export const fonts = [];
