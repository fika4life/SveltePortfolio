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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("../../chunks/index-1259f1f6.js");
var import_Tag_3c8e3263 = require("../../chunks/Tag-3c8e3263.js");
var PostCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-mpbev9.svelte-mpbev9{width:375px;background-color:#fff;display:flex;flex-direction:column}.card-image.svelte-mpbev9 img.svelte-mpbev9{height:250px}.card-body.svelte-mpbev9.svelte-mpbev9{padding:1rem 1.6rem 1.6rem 1.6rem}.tags.svelte-mpbev9.svelte-mpbev9{z-index:1}.card-text.svelte-mpbev9.svelte-mpbev9{margin-bottom:1.2rem}.card-title.svelte-mpbev9.svelte-mpbev9{margin:1rem 0 0 0}.card-actions.svelte-mpbev9.svelte-mpbev9{display:flex;justify-content:space-between}",
  map: null
};
const PostCard = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let imageurl = post.attributes.image.data;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<div class="${"card svelte-mpbev9"}"><div class="${"card-image svelte-mpbev9"}">${imageurl ? `<img${(0, import_index_1259f1f6.a)("src", imageurl.attributes.url, 0)} alt="${""}" class="${"svelte-mpbev9"}">` : `<img${(0, import_index_1259f1f6.a)("src", void 0, 0)} alt="${""}" class="${"svelte-mpbev9"}">`}</div>

	<div class="${"card-body svelte-mpbev9"}"><div class="${"tags svelte-mpbev9"}">${(0, import_index_1259f1f6.b)(post.attributes.tags.data, (tag) => {
    return `
				${(0, import_index_1259f1f6.v)(import_Tag_3c8e3263.T, "Tag").$$render($$result, { tag }, {}, {})}`;
  })}</div>
		
		<div class="${"card-text svelte-mpbev9"}"><h5 class="${"card-title svelte-mpbev9"}">${(0, import_index_1259f1f6.e)(post.attributes.title)}</h5>
			<p>${(0, import_index_1259f1f6.e)(post.attributes.description)}</p></div>
		<div class="${"card-actions svelte-mpbev9"}"><a${(0, import_index_1259f1f6.a)("href", post.attributes.URL, 0)} target="${"_blank"}">${(0, import_index_1259f1f6.v)(import_Tag_3c8e3263.B, "Button").$$render($$result, { type: "outline" }, {}, {
    default: () => {
      return `Preview site`;
    }
  })}</a>
			<a${(0, import_index_1259f1f6.a)("href", `/posts/${post.id}`, 0)}>${(0, import_index_1259f1f6.v)(import_Tag_3c8e3263.B, "Button").$$render($$result, { type: "primary" }, {}, {
    default: () => {
      return `More info`;
    }
  })}</a></div></div>
</div>`;
});
var Posts_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts-container.svelte-y28gmm{display:grid;grid-template-columns:repeat(3, 1fr);column-gap:4rem;justify-content:center;align-items:center;max-width:var(--container-width);margin:0 auto}a.svelte-y28gmm{text-decoration:none;color:inherit;transition:transform 0.1s ease-in-out}a.svelte-y28gmm:hover{transform:scale(1.04) rotate(-0.5deg);transition:transform 0.1s ease-in-out}",
  map: null
};
const Posts = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<div class="${"posts-container svelte-y28gmm"}">${(0, import_index_1259f1f6.b)(posts.data, (post) => {
    return `<a${(0, import_index_1259f1f6.a)("href", `/posts/${post.id}`, 0)} class="${"svelte-y28gmm"}">${(0, import_index_1259f1f6.v)(PostCard, "PostCard").$$render($$result, { post }, {}, {})}</a>`;
  })}
</div>`;
});
async function load({ page }) {
  const url = `${import_Tag_3c8e3263.u}/api/posts?populate=*`;
  const response = await fetch(url);
  const posts = await response.json();
  return { props: { posts } };
}
const Routes = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<section id="${"posts"}">${(0, import_index_1259f1f6.v)(Posts, "Posts").$$render($$result, { posts }, {}, {})}</section>`;
});
