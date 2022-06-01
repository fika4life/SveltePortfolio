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
  B: () => Button,
  T: () => Tag,
  u: () => urlRoot
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("./index-1259f1f6.js");
let urlRoot = "https://strapi-portfolio-backend-fk.herokuapp.com";
var Button_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.btn.svelte-1vrfvpt{font-family:'Nunito', sans-serif;font-size:14px;text-transform:uppercase;font-weight:800;border-radius:0;border:2px solid var(--darkest);padding:0.5em 1.5em;position:relative;width:max-content;max-width:100%;z-index:2}button.btn-outline.svelte-1vrfvpt{background-color:none}button.btn-primary.svelte-1vrfvpt{background-color:var(--darkest);color:#fff}button.btn.svelte-1vrfvpt::after{content:'';background-color:rgba(0, 0, 0, 0);height:6px;width:100%;display:block;position:absolute;bottom:-2px;left:-2px;box-shadow:var(--primary) -2px 4px 0 0}button.btn.svelte-1vrfvpt:hover{cursor:pointer;transform:scale(1.05)}",
  map: null
};
const Button = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `<button class="${"btn btn-" + (0, import_index_1259f1f6.e)(type) + " svelte-1vrfvpt"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
var Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.tag.svelte-1paeplp{font-size:14px;text-transform:uppercase;color:var(--darker);font-weight:800;margin-right:1rem;position:relative;width:max-content;max-width:100%;z-index:1}span.tag.svelte-1paeplp::before{content:'';background-color:var(--primary);height:8px;width:100%;display:block;position:absolute;bottom:0px;left:-4px;z-index:-1}",
  map: null
};
const Tag = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  $$result.css.add(css);
  return `<span class="${"tag svelte-1paeplp"}">${(0, import_index_1259f1f6.e)(tag.attributes.name)}</span>`;
});
