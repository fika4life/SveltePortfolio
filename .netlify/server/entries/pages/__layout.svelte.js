var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("../../chunks/index-1259f1f6.js");
const css$2 = {
  code: "footer.svelte-15lqs5a{text-align:center;margin:2rem}",
  map: null
};
const Footer = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="${"svelte-15lqs5a"}"><p>\xA9 2022 Fiona Karlsson</p>
	<p>Built with Sveltekit &amp; Strapi</p>
</footer>`;
});
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#main-nav.svelte-zeegyc{text-align:center;padding:3rem}.brand-logo.svelte-zeegyc{text-transform:uppercase;font-weight:400;color:var(--darkest);letter-spacing:0.1rem}.tag-line.svelte-zeegyc{margin-top:0rem;text-transform:uppercase;font-weight:400;color:var(--next-darkest);letter-spacing:0.05rem}",
  map: null
};
const Nav = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav id="${"main-nav"}" class="${"svelte-zeegyc"}"><h2 class="${"brand-logo svelte-zeegyc"}">Fiona Karlsson</h2>
	<h5 class="${"tag-line svelte-zeegyc"}">Frontend Developing</h5>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-7oahem{box-sizing:border-box;margin:0;padding:0}body.svelte-7oahem{font-family:'Nunito', sans-serif;background-color:var(--background-color)}.main-container.svelte-7oahem{width:100%;max-width:var(--max-width);margin:0 auto}",
  map: null
};
const _layout = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" class="${"svelte-7oahem"}" data-svelte="svelte-1kttyke"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin class="${"svelte-7oahem"}" data-svelte="svelte-1kttyke"><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" class="${"svelte-7oahem"}" data-svelte="svelte-1kttyke"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin class="${"svelte-7oahem"}" data-svelte="svelte-1kttyke"><link href="${"https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap"}" rel="${"stylesheet"}" class="${"svelte-7oahem"}" data-svelte="svelte-1kttyke"><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}" class="${"svelte-7oahem"}" data-svelte="svelte-1kttyke"><link rel="${"stylesheet"}" href="${"/global.css"}" class="${"svelte-7oahem"}" data-svelte="svelte-1kttyke">`, ""}

<body class="${"svelte-7oahem"}">${(0, import_index_1259f1f6.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
	<main class="${"main-container svelte-7oahem"}">${slots.default ? slots.default({}) : ``}</main>
	${(0, import_index_1259f1f6.v)(Footer, "Footer").$$render($$result, {}, {}, {})}
</body>`;
});
