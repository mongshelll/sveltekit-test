import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-1eeqoxk">메인화면</h1> <p data-svelte-h="svelte-1olxirf">텍스트</p> <a href="/news/" data-svelte-h="svelte-19u0dd8">news</a>`;
});
export {
  Page as default
};
