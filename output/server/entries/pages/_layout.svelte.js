import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  const trailingSlash = "always";
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0) $$bindings.prerender(prerender);
  if ($$props.trailingSlash === void 0 && $$bindings.trailingSlash && trailingSlash !== void 0) $$bindings.trailingSlash(trailingSlash);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
