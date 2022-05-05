import { resolveComponent, mergeProps, useSSRContext, defineComponent, reactive, ref, onMounted, nextTick, toRef, computed, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import axios from "axios";
import dayjs from "dayjs";
import { ViteSSG } from "vite-ssg";
var App_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$d = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "overflow": "hidden" } }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$9]]);
const axiosInstance = axios.create({
  baseURL: `http://localhost:12321/`,
  headers: {
    Accept: "application/json"
  }
});
const getCoreConfig = () => {
  return axiosInstance.get("/getCoreConfig").then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  });
};
var banner_vue_vue_type_style_index_0_scoped_true_lang = "";
function throttle(fn, delay) {
  let timer = null;
  return function() {
    const args = arguments;
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}
const _sfc_main$c = defineComponent({
  setup() {
    let config = reactive({ data: {} });
    getCoreConfig().then((res) => {
      config.data = res.settings;
    });
    let isArrowActive = ref(true);
    onMounted(() => {
      window.addEventListener("scroll", throttle((e) => {
        var _a;
        if (e !== null && ((_a = e == null ? void 0 : e.target) == null ? void 0 : _a.scrollTop) >= 100) {
          isArrowActive = ref(false);
        } else {
          isArrowActive = ref(true);
        }
        nextTick(() => {
          let arrow = document.querySelector("#arrow");
          if (isArrowActive.value && arrow !== null) {
            arrow.style.opacity = "1";
          } else {
            arrow.style.opacity = "0";
          }
        });
      }, 10), true);
    });
    return {
      isArrowActive,
      config
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog-core__bg",
    style: _ctx.config.data.banner_pic !== null ? `background: url('${_ctx.config.data.banner_pic}'); background-size: cover;` : ""
  }, _attrs))} data-v-04e25eca><div class="blog-core__motto" data-v-04e25eca>${ssrInterpolate(_ctx.config.data.banner_motto)}</div><i class="blog-core__arrow-down" id="arrow" data-v-04e25eca></i></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/banner.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var bannerVue = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-04e25eca"]]);
var footer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = defineComponent({
  props: ["owner", "start", "beian", "theme"],
  setup(props, ctx) {
    const start = toRef(props, "start");
    const now = new Date().getFullYear();
    const siteTime = computed(() => {
      if (now === start.value) {
        return start.value;
      } else {
        return `${start.value} - ${now}`;
      }
    });
    return {
      owner: toRef(props, "owner"),
      beian: toRef(props, "beian"),
      theme: toRef(props, "theme"),
      siteTime
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-core__footer-container" }, _attrs))} data-v-da437316><p data-v-da437316>Copyrights \xA9 ${ssrInterpolate(_ctx.siteTime)} ${ssrInterpolate(_ctx.owner)}</p>`);
  if ((_a = _ctx.beian) == null ? void 0 : _a.enable) {
    _push(`<p class="blog-core__beian" data-v-da437316><a${ssrRenderAttr("href", _ctx.beian.icp.url)} target="_blank" class="blog-core__icp" data-v-da437316>${ssrInterpolate(_ctx.beian.icp.text)}</a><a${ssrRenderAttr("href", _ctx.beian.police.url)} target="_blank" class="blog-core__police" data-v-da437316>${ssrInterpolate(_ctx.beian.police.text)}</a></p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p data-v-da437316>\u7531 Vine.js \u5F3A\u529B\u9A71\u52A8 | \u4E3B\u6838\u5FC3 - blog-core:${ssrInterpolate(_ctx.theme)}</p></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/footer.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var footerVue = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-da437316"]]);
var sidebar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = defineComponent({
  components: {
    footerVue
  },
  setup() {
    let config = reactive({ data: {} });
    getCoreConfig().then((res) => {
      config.data = res.settings;
    });
    return {
      config
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_footer_vue = resolveComponent("footer-vue");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-core__side-container" }, _attrs))} data-v-5c94b480><div class="blog-core__side-main" data-v-5c94b480><div class="blog-core__center" data-v-5c94b480><img${ssrRenderAttr("src", _ctx.config.data.avatar_image)} alt="avatar" data-v-5c94b480><h1 data-v-5c94b480>${ssrInterpolate(_ctx.config.data.blog_name)}</h1><p data-v-5c94b480>${ssrInterpolate(_ctx.config.data.blog_description)}</p><div class="blog-core__iconlist" data-v-5c94b480><!--[-->`);
  ssrRenderList(_ctx.config.data.icon_link, (item, index2) => {
    _push(`<div class="blog-core__icons" data-v-5c94b480><a${ssrRenderAttr("href", item.link)} target="_blank" data-v-5c94b480><img${ssrRenderAttr("src", item.icon)} data-v-5c94b480></a></div>`);
  });
  _push(`<!--]--></div></div></div>`);
  _push(ssrRenderComponent(_component_footer_vue, {
    owner: _ctx.config.data.owner,
    start: _ctx.config.data.site_start_time,
    beian: _ctx.config.data.beian,
    theme: _ctx.config.data.theme
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/sidebar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var sidebarVue = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-5c94b480"]]);
var navbar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = defineComponent({
  setup(props, ctx) {
    let config = reactive({ data: [] });
    getCoreConfig().then((res) => {
      Object.keys(res.navigator).forEach((item, index2) => {
        config.data.push({
          name: item,
          nav: res.navigator[item],
          id: index2
        });
      });
    });
    let activePage = ref(0);
    let isSideBarActiveInMob = ref(true);
    const showSideBar = () => {
      isSideBarActiveInMob.value = !isSideBarActiveInMob.value;
      ctx.emit("sideBarChangeInMob", isSideBarActiveInMob.value);
    };
    return {
      config,
      activePage,
      showSideBar,
      isSideBarActiveInMob
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-core__navbar" }, _attrs))} data-v-3f497e4c><ul data-v-3f497e4c><li class="blog-core__mob-toggle" data-v-3f497e4c><div class="blog-core__mob-toggle-btn" data-v-3f497e4c></div></li><!--[-->`);
  ssrRenderList(_ctx.config.data, (navItem) => {
    _push(`<li data-v-3f497e4c>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: navItem.nav,
      class: [{ active: _ctx.activePage === navItem.id }, "blog-core__list-item"]
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(navItem.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(navItem.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/navbar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var navbarVue = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-3f497e4c"]]);
var bloglist_card_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = defineComponent({
  props: ["data"],
  setup(props) {
    return {
      data: props.data
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-core__card" }, _attrs))} data-v-3832ab3f>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: _ctx.data.path,
    class: "blog-core__router-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="blog-core__card-title" data-v-3832ab3f${_scopeId}>${ssrInterpolate(_ctx.data.title)}</div>`);
      } else {
        return [
          createVNode("div", { class: "blog-core__card-title" }, toDisplayString(_ctx.data.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="blog-core__card-meta" data-v-3832ab3f><span class="blog-core__card-time" data-v-3832ab3f>${ssrInterpolate(_ctx.data.time)}</span><span class="blog-core__card-categories" data-v-3832ab3f>${ssrInterpolate(_ctx.data.categories)}</span></div><div class="blog-core__card-text" data-v-3832ab3f><p class="blog-core__card-text-abstract" data-v-3832ab3f>${_ctx.data.abstract}</p><img${ssrRenderAttr("src", _ctx.data.cover)} class="blog-core__card-cover" data-v-3832ab3f>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: _ctx.data.path
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="blog-core__card-button-more" data-v-3832ab3f${_scopeId}> \u9605\u8BFB\u5168\u6587 </button>`);
      } else {
        return [
          createVNode("button", { class: "blog-core__card-button-more" }, " \u9605\u8BFB\u5168\u6587 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/bloglist_card.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var bloglistCardVue = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-3832ab3f"]]);
var bloglist_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = defineComponent({
  components: {
    bloglistCardVue
  },
  setup() {
    const matchReg = /articles\//;
    const blogList = routes$1.filter((item) => matchReg.test(item.path)).map((item) => {
      var _a, _b, _c, _d, _e;
      return {
        title: (_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.frontmatter.title,
        time: dayjs((_b = item == null ? void 0 : item.meta) == null ? void 0 : _b.frontmatter.time).format("YYYY-MM-DD"),
        categories: (_c = item == null ? void 0 : item.meta) == null ? void 0 : _c.frontmatter.categories,
        abstract: (_d = item == null ? void 0 : item.meta) == null ? void 0 : _d.frontmatter.abstract,
        cover: (_e = item == null ? void 0 : item.meta) == null ? void 0 : _e.frontmatter.cover,
        path: item == null ? void 0 : item.path
      };
    });
    return {
      blogList
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_bloglist_card_vue = resolveComponent("bloglist-card-vue");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-core__blog-list-container" }, _attrs))} data-v-29654904><div class="blog-core__blog-list" data-v-29654904><!--[-->`);
  ssrRenderList(_ctx.blogList, (blogItem, index2) => {
    _push(ssrRenderComponent(_component_bloglist_card_vue, {
      key: index2,
      data: blogItem
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/bloglist.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var bloglistVue = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-29654904"]]);
var layout_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = defineComponent({
  components: {
    bannerVue,
    sidebarVue,
    navbarVue,
    bloglistVue
  },
  setup(props, ctx) {
    let isSideBarActiveInMob = ref(false);
    const handleSideBarChangeInMob = (val) => {
      isSideBarActiveInMob.value = val;
    };
    const handleMaskClose = () => {
      handleSideBarChangeInMob(!isSideBarActiveInMob.value);
    };
    return {
      isSideBarActiveInMob,
      handleSideBarChangeInMob,
      handleMaskClose
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_sidebar_vue = resolveComponent("sidebar-vue");
  const _component_navbar_vue = resolveComponent("navbar-vue");
  const _component_banner_vue = resolveComponent("banner-vue");
  const _component_bloglist_vue = resolveComponent("bloglist-vue");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-core__container" }, _attrs))} data-v-35cba041><div style="${ssrRenderStyle(_ctx.isSideBarActiveInMob ? null : { display: "none" })}" class="${ssrRenderClass([{ "active": _ctx.isSideBarActiveInMob }, "blog-core__mask"])}" data-v-35cba041></div><div class="${ssrRenderClass([{ "active": _ctx.isSideBarActiveInMob }, "blog-core__side"])}" data-v-35cba041>`);
  _push(ssrRenderComponent(_component_sidebar_vue, null, null, _parent));
  _push(`</div><div class="blog-core__main" data-v-35cba041>`);
  _push(ssrRenderComponent(_component_navbar_vue, null, null, _parent));
  _push(ssrRenderComponent(_component_banner_vue, null, null, _parent));
  _push(ssrRenderComponent(_component_bloglist_vue, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/layout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var layout = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-35cba041"]]);
const _sfc_main$5 = defineComponent({
  components: {
    layout
  },
  setup() {
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_layout = resolveComponent("layout");
  _push(ssrRenderComponent(_component_layout, _attrs, null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("posts/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var __pages_import_0__ = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const __pages_import_1__ = () => Promise.resolve().then(function() {
  return index;
});
const __pages_import_2__ = () => Promise.resolve().then(function() {
  return helloWorld;
});
const __pages_import_3__ = () => Promise.resolve().then(function() {
  return test1;
});
const __pages_import_4__ = () => Promise.resolve().then(function() {
  return test2;
});
const routes = [{ "name": "index", "path": "/", "component": __pages_import_0__, "props": true }, { "name": "about", "path": "/about", "component": __pages_import_1__, "props": true, "meta": { "frontmatter": {} } }, { "name": "articles-hello-world", "path": "/articles/hello-world", "component": __pages_import_2__, "props": true, "meta": { "frontmatter": { "title": "\u7B2C\u4E00\u7BC7\u6587\u7AE0", "time": "2022-04-24T00:00:00.000Z", "categories": "hello", "cover": "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg", "abstract": "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002" } } }, { "name": "articles-test1", "path": "/articles/test1", "component": __pages_import_3__, "props": true, "meta": { "frontmatter": { "title": "\u7B2C3\u7BC7\u6587\u7AE0", "time": "2022-04-24T00:00:00.000Z", "categories": "hello", "cover": "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg", "abstract": "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002" } } }, { "name": "articles-test2", "path": "/articles/test2", "component": __pages_import_4__, "props": true, "meta": { "frontmatter": { "title": "\u7B2C2\u7BC7\u6587\u7AE0", "time": "2022-04-24T00:00:00.000Z", "categories": "hello", "cover": "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg", "abstract": "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002" } } }];
var routes$1 = routes;
const createApp = ViteSSG(App, { routes: routes$1 }, ({ app, router, initialState }) => {
});
var test_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-core__container" }, _attrs))} data-v-58d24a5d><div class="blog-core__side" data-v-58d24a5d></div><div class="blog-core__main" data-v-58d24a5d><div class="blog-core__about" data-v-58d24a5d></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/test.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-58d24a5d"]]);
const _sfc_main$3 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = {};
    expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_test = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>about me</h1><p>hello `);
      _push(ssrRenderComponent(_component_test, null, null, _parent));
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("posts/about/index.md");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
const title$2 = "\u7B2C\u4E00\u7BC7\u6587\u7AE0";
const time$2 = "2022-04-24T00:00:00.000Z";
const categories$2 = "hello";
const cover$2 = "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg";
const abstract$2 = "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002";
const _sfc_main$2 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u7B2C\u4E00\u7BC7\u6587\u7AE0", "time": "2022-04-24T00:00:00.000Z", "categories": "hello", "cover": "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg", "abstract": "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002" };
    expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>hello Vine.js</h1><p>hello! This is a Vine.js generated article.</p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("posts/articles/hello-world.md");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var helloWorld = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  title: title$2,
  time: time$2,
  categories: categories$2,
  cover: cover$2,
  abstract: abstract$2,
  "default": _sfc_main$2
});
const title$1 = "\u7B2C3\u7BC7\u6587\u7AE0";
const time$1 = "2022-04-24T00:00:00.000Z";
const categories$1 = "hello";
const cover$1 = "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg";
const abstract$1 = "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002";
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u7B2C3\u7BC7\u6587\u7AE0", "time": "2022-04-24T00:00:00.000Z", "categories": "hello", "cover": "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg", "abstract": "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002" };
    expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_article_layout = resolveComponent("article-layout");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_article_layout, null, null, _parent));
      _push(`<h1>hello Vine.js</h1><p>hello! This is a Vine.js generated article.</p></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("posts/articles/test1.md");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var test1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  title: title$1,
  time: time$1,
  categories: categories$1,
  cover: cover$1,
  abstract: abstract$1,
  "default": _sfc_main$1
});
const title = "\u7B2C2\u7BC7\u6587\u7AE0";
const time = "2022-04-24T00:00:00.000Z";
const categories = "hello";
const cover = "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg";
const abstract = "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002";
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u7B2C2\u7BC7\u6587\u7AE0", "time": "2022-04-24T00:00:00.000Z", "categories": "hello", "cover": "https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg", "abstract": "\u524D\u6BB5\u65F6\u95F4\u4E00\u76F4\u57CB\u5934\u5728\u6BD5\u4E1A\u8BBE\u8BA1\u4E2D\uFF0C\u603B\u60F3\u7740\u518D\u5199\u7BC7\u535A\u5BA2\u6765\u544A\u522B\u4ECA\u5E74\u7684\u56DB\u6708\uFF0C\u90A3\u5C31\u6765\u7B80\u5355\u804A\u4E00\u4E0B\u524D\u7AEF\u5F00\u53D1\u4E2D\u7684\u4EA7\u54C1\u601D\u7EF4\u5427\u3002<br/><br/>\u524D\u7AEF\u5DE5\u7A0B\u5E08\u7684\u4EA7\u51FA\u76F4\u63A5\u9762\u5411\u7528\u6237\uFF0C\u5E94\u5F53\u5BF9\u4EA7\u54C1\u3001\u4EA4\u4E92\u548C\u7528\u6237\u4F53\u9A8C\u7B49\u5C42\u9762\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\u3002\u5728\u516C\u53F8\u6709\u4EA7\u54C1\u7ECF\u7406\u8D1F\u8D23\u4E0E\u524D\u7AEF\u5BF9\u63A5\u4EA7\u54C1\u65B9\u9762\u7684\u5DE5\u4F5C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u524D\u7AEF\u5DE5\u7A0B\u5E08\u5C31\u4E0D\u9700\u8981\u4EA7\u54C1\u601D\u7EF4\u4E86\u3002\u76F8\u53CD\uFF0C\u4EA7\u54C1\u601D\u7EF4\u80FD\u591F\u4F5C\u4E3A\u4E00\u6761\u91CD\u8981\u7684\u601D\u8DEF\u8D2F\u7A7F\u5230\u6574\u4E2A\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5E2E\u52A9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u66F4\u597D\u7684\u53BB\u601D\u8003\u600E\u6837\u5C06\u754C\u9762\u548C\u4EA4\u4E92\u505A\u5230\u66F4\u9002\u5408\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u80FD\u8BA9\u7528\u6237\u63D0\u5347\u5BF9\u4EA7\u54C1\u7684\u9ECF\u6027\uFF0C\u4ECE\u800C\u63A8\u8FDB\u4E00\u6B3E\u4EA7\u54C1\u9010\u6E10\u8D70\u5411\u6210\u529F\u3002<br/><br/>\u4EA7\u54C1\u601D\u7EF4\u5E76\u4E0D\u662F\u4E00\u4E2A\u666E\u9002\u6027\u3001\u56FA\u5B9A\u6027\u7684\u601D\u7EF4\uFF0C\u80FD\u6839\u636E\u65E2\u6709\u7684\u65B9\u6CD5\u8BBA\u603B\u7ED3\u51FA\u4E00\u5957\u4E13\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EA7\u54C1\u601D\u7EF4\u624D\u662F\u6700\u6709\u4EF7\u503C\u7684\u3002\u5B57\u8282\u8DF3\u52A8\u7684\u9762\u8BD5\u5B98\u4E5F\u66FE\u95EE\u8FC7\u6211\u201C\u8C08\u8C08\u4F60\u5BF9\u4EA7\u54C1Sense\u7684\u7406\u89E3\u201D\uFF0C\u80FD\u591F\u638C\u63E1\u4EA7\u54C1\u601D\u7EF4\u7684\u57FA\u672C\u65B9\u6CD5\u5E76\u5C06\u5176\u5B9E\u9645\u5E94\u7528\u5728\u524D\u7AEF\u9886\u57DF\uFF0C\u5BF9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\u662F\u4E00\u9879\u6BD4\u8F83\u91CD\u8981\u7684\u80FD\u529B\u3002\u672C\u6587\u7ED3\u5408\u4E00\u4E9B\u8D44\u6599\u7B80\u5355\u4ECB\u7ECD\u4E86\u6211\u5BF9\u524D\u7AEF\u4EA7\u54C1\u601D\u7EF4\u7684\u4E00\u4E9B\u8BA4\u8BC6\uFF0C\u5E76\u5E0C\u671B\u80FD\u4EE5\u6B64\u4E3A\u9898\u5F15\u8D77\u66F4\u591A\u5BF9\u6280\u672F\u548C\u4E1A\u52A1\u7684\u601D\u8003\u548C\u7406\u89E3\u3002" };
    expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>hello Vine.js</h1><p>hello! This is a Vine.js generated article.</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("posts/articles/test2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var test2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  title,
  time,
  categories,
  cover,
  abstract,
  "default": _sfc_main
});
export { createApp };
