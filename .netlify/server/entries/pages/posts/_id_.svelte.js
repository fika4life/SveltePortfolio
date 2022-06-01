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
  default: () => U5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("../../../chunks/index-1259f1f6.js");
var import_Tag_3c8e3263 = require("../../../chunks/Tag-3c8e3263.js");
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-container.svelte-1whcrp2{max-width:var(--container-width);margin:0 auto;display:grid;grid-template-columns:repeat(2, 1fr);column-gap:3rem;background-color:#fff;padding:6rem;position:relative}p.date.svelte-1whcrp2{position:absolute;top:3rem;right:7rem}.tags.svelte-1whcrp2{margin-top:0.2rem}p.svelte-1whcrp2{margin:1.5rem 0rem}.links.svelte-1whcrp2{display:flex;flex-direction:row;justify-content:space-around;margin-top:2rem}.fa.fa-times-circle.svelte-1whcrp2{position:absolute;right:2rem;top:2rem;color:var(--next-lightest)}.fa.fa-times-circle.svelte-1whcrp2:hover{transform:rotate(-20deg);transition:transform 0.2s ease-in-out}",
  map: null
};
async function load({ page }) {
  const id = page.params.id;
  const url = `${import_Tag_3c8e3263.u}/api/posts/${id}?populate=*`;
  const response = await fetch(url);
  const post = await response.json();
  return { props: { post } };
}
const U5Bidu5D = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  const { title, description, body, createdAt, URL, repository_url } = post.data.attributes;
  const { url } = post.data.attributes.image.data.attributes;
  const tags = post.data.attributes.tags.data;
  console.log(tags);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `

<div class="${"post-container svelte-1whcrp2"}"><p class="${"date svelte-1whcrp2"}">${(0, import_index_1259f1f6.e)(createdAt)}</p>
	<div class="${"website-image"}"><img${(0, import_index_1259f1f6.a)("src", url, 0)}${(0, import_index_1259f1f6.a)("alt", title, 0)}></div>
	<div class="${"post-text"}"><h2>${(0, import_index_1259f1f6.e)(title)}</h2>
		
		<div class="${"tags svelte-1whcrp2"}">${(0, import_index_1259f1f6.b)(tags, (tag) => {
    return `${(0, import_index_1259f1f6.v)(import_Tag_3c8e3263.T, "Tag").$$render($$result, { tag }, {}, {})}`;
  })}</div>

		<p class="${"body svelte-1whcrp2"}">${(0, import_index_1259f1f6.e)(body)}</p>
		<div class="${"links svelte-1whcrp2"}"><a${(0, import_index_1259f1f6.a)("href", repository_url, 0)} target="${"_blank"}">${(0, import_index_1259f1f6.v)(import_Tag_3c8e3263.B, "Button").$$render($$result, { type: "primary" }, {}, {
    default: () => {
      return `View code`;
    }
  })}</a>
			<a${(0, import_index_1259f1f6.a)("href", URL, 0)} target="${"_blank"}">${(0, import_index_1259f1f6.v)(import_Tag_3c8e3263.B, "Button").$$render($$result, { type: "outline" }, {}, {
    default: () => {
      return `Preview site`;
    }
  })}</a></div></div>
	<span class="${"back"}"><a href="${"/"}"><i class="${"fa fa-times-circle fa-3x svelte-1whcrp2"}"></i></a></span>
</div>`;
});
