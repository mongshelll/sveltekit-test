

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DB14kQRp.js","_app/immutable/chunks/scheduler.uGQJRBNU.js","_app/immutable/chunks/index.Dhsj7aeK.js","_app/immutable/chunks/entry.CA3iS8Xy.js","_app/immutable/chunks/index.BeqEGQRZ.js"];
export const stylesheets = [];
export const fonts = [];