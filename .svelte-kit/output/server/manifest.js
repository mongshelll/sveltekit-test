export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C5KN4gAn.js","app":"_app/immutable/entry/app.DpOl_mzR.js","imports":["_app/immutable/entry/start.C5KN4gAn.js","_app/immutable/chunks/entry.BKoDhBld.js","_app/immutable/chunks/scheduler.uGQJRBNU.js","_app/immutable/chunks/index.BeqEGQRZ.js","_app/immutable/entry/app.DpOl_mzR.js","_app/immutable/chunks/scheduler.uGQJRBNU.js","_app/immutable/chunks/index.CvsrfkM9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/news",
				pattern: /^\/news\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
