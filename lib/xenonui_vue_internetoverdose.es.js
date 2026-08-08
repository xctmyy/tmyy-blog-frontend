import { defineComponent as h, ref as V, computed as T, onUnmounted as I, openBlock as i, createBlock as N, Teleport as M, createVNode as O, Transition as D, withCtx as H, createElementBlock as l, normalizeClass as S, createElementVNode as e, normalizeStyle as A, toDisplayString as b, createCommentVNode as m, withModifiers as q, renderSlot as J, onMounted as R, watch as Y, Fragment as w, renderList as L, createTextVNode as F, unref as Q, createStaticVNode as K } from "vue";
const $ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWUlEQVRIiWOMczj2n4EGgIkWhjIwMDCwwBgL91syUsPAeMfj/xkYaOBiRqjzaBYUowaPGjxq8KjBxAAWbIKwog8fIFTM0tfF1Cj0qe7i//9pZDAMMA65WhoAMEQQlbhiJVIAAAAASUVORK5CYII=", _ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAXklEQVRIiWOMczj2n4EGgIkWhjIwMDCwwBgL91syUsPAeMfj/xkYaOhi2gcFMoB5h1iALRjp62J8LkEG+Hw29CJv1OBRg+loMN6cR2qZgQzo62JqFPpDL/IYh1wtDQAg5xT/hJbgrwAAAABJRU5ErkJggg==", tt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABBElEQVRIid2VwU7DMBBE367Tj+LWCvEbRUh8WPkRuBUu/BHe4WC7CSU0LUpAMBfLK2syO554bbveiwXQARgOcoTAhNkl3zIUBuZ1H0AuxACyt8PR3eOVXaLudvMsyHWXAHCgKJ0ZDmAzErsHUD0W8PDUt19a+1gbw9i5u+sXHRQvgcWIu7Fia+0rS05ZlZIRofkV51yC8LNWNBxbclw/hd9R/J3La/gnOZ5qdSrn8JesWHXlPbbtei8z0CCp5+R0iGHO3YxQ/aWlNItaAKJcW7Vivoe+TaOuJ+4Akcy5v3mVASKI5lFdzXqXJOHuJF8RuZF+Ii7DNCuT+7k6iRxlFGE9E8A7uUV6PQKdqSMAAAAASUVORK5CYII=", et = { class: "window-base" }, nt = { class: "window-header-area" }, at = { class: "titlebar-left" }, st = {
  key: 0,
  class: "titlebar-text"
}, it = {
  key: 0,
  class: "titlebar-controls"
}, lt = {
  key: 0,
  class: "window-content-area"
}, ot = {
  key: 1,
  class: "window-footer-area"
}, ct = /* @__PURE__ */ h({
  __name: "FloatingWindow",
  props: {
    title: { default: "" },
    icon: { default: "" },
    showControls: { type: Boolean, default: !0 },
    closeOnClickOutside: { type: Boolean, default: !1 },
    initialX: { default: 100 },
    initialY: { default: 100 },
    width: { default: "400px" },
    height: { default: "300px" },
    modelValue: { type: Boolean, default: !0 },
    showStatusBar: { type: Boolean, default: !0 },
    opacity: { default: 0 },
    selectable: { default: 0 }
  },
  emits: ["update:modelValue", "close", "minimize", "maximize"],
  setup(t, { emit: n }) {
    const a = t, u = n, d = V(a.initialX), v = V(a.initialY), s = V(!1), f = V(0), o = V(0), c = V(!1), r = V(!1), y = V({ x: 0, y: 0 }), p = T(() => 1 - Math.max(0, Math.min(100, a.opacity)) / 100), X = T(() => {
      const k = p.value;
      return r.value ? {
        left: "0",
        top: "0",
        width: "100vw",
        height: "100vh",
        transform: "none",
        opacity: k
      } : c.value ? {
        left: `${d.value}px`,
        top: `${v.value}px`,
        width: "200px",
        height: "40px",
        transform: "none",
        opacity: k
      } : {
        left: `${d.value}px`,
        top: `${v.value}px`,
        width: a.width,
        height: a.height,
        transform: "none",
        opacity: k
      };
    }), x = T({
      get: () => a.modelValue,
      set: (k) => u("update:modelValue", k)
    });
    function P(k) {
      r.value || (k.preventDefault(), s.value = !0, f.value = k.clientX - d.value, o.value = k.clientY - v.value, document.body.style.userSelect = "none", document.addEventListener("mousemove", W), document.addEventListener("mouseup", Z));
    }
    function W(k) {
      s.value && (d.value = k.clientX - f.value, v.value = k.clientY - o.value);
    }
    function Z() {
      s.value = !1, document.body.style.userSelect = "", document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", Z);
    }
    function j() {
      x.value = !1, u("close");
    }
    function G() {
      c.value = !c.value, u("minimize");
    }
    function B() {
      r.value ? (d.value = y.value.x, v.value = y.value.y) : y.value = { x: d.value, y: v.value }, r.value = !r.value, c.value = !1, u("maximize");
    }
    function C(k) {
      a.closeOnClickOutside && k.target === k.currentTarget && j();
    }
    return I(() => {
      document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", Z);
    }), (k, g) => (i(), N(M, { to: "body" }, [
      O(D, { name: "window-fade" }, {
        default: H(() => [
          x.value ? (i(), l("div", {
            key: 0,
            class: S(["floating-window-overlay", { "is-clickable": t.closeOnClickOutside }]),
            onClick: C
          }, [
            e("div", {
              class: S(["floating-window", {
                "is-dragging": s.value,
                "is-minimized": c.value,
                "is-maximized": r.value
              }]),
              style: A(X.value)
            }, [
              e("div", et, [
                e("div", nt, [
                  e("div", {
                    class: "window-titlebar",
                    onMousedown: P
                  }, [
                    e("div", at, [
                      g[0] || (g[0] = e("div", { class: "titlebar-square" }, null, -1)),
                      t.title && !c.value ? (i(), l("span", st, b(t.title), 1)) : m("", !0)
                    ]),
                    t.showControls ? (i(), l("div", it, [
                      e("button", {
                        class: "control-btn",
                        onClick: q(G, ["stop"]),
                        title: "最小化"
                      }, [...g[1] || (g[1] = [
                        e("img", {
                          src: $,
                          alt: "最小化"
                        }, null, -1)
                      ])]),
                      e("button", {
                        class: "control-btn",
                        onClick: q(B, ["stop"]),
                        title: "最大化"
                      }, [...g[2] || (g[2] = [
                        e("img", {
                          src: _,
                          alt: "最大化"
                        }, null, -1)
                      ])]),
                      e("button", {
                        class: "control-btn",
                        onClick: q(j, ["stop"]),
                        title: "关闭"
                      }, [...g[3] || (g[3] = [
                        e("img", {
                          src: tt,
                          alt: "关闭"
                        }, null, -1)
                      ])])
                    ])) : m("", !0)
                  ], 32)
                ]),
                c.value ? m("", !0) : (i(), l("div", lt, [
                  e("div", {
                    class: S(["window-content-wrapper", { selectable: t.selectable === 1 }])
                  }, [
                    J(k.$slots, "default", {}, () => [
                      g[4] || (g[4] = e("div", { class: "window-placeholder" }, " 窗口内容区域 ", -1))
                    ], !0)
                  ], 2)
                ])),
                !c.value && t.showStatusBar ? (i(), l("div", ot, [...g[5] || (g[5] = [
                  e("div", { class: "window-statusbar" }, [
                    e("div", { class: "statusbar-pink-bar" }),
                    e("div", { class: "statusbar-squares" }, [
                      e("div", { class: "statusbar-square" }),
                      e("div", { class: "statusbar-square" }),
                      e("div", { class: "statusbar-square" })
                    ])
                  ], -1)
                ])])) : m("", !0)
              ])
            ], 6)
          ], 2)) : m("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), z = (t, n) => {
  const a = t.__vccOpts || t;
  for (const [u, d] of n)
    a[u] = d;
  return a;
}, Ge = /* @__PURE__ */ z(ct, [["__scopeId", "data-v-533c87f4"]]), dt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVQokWP8//8/AwMDA4PNtrT/DAwMDEe8ZjEyYAEweVwApo8JXTEhjYQAo/XWVKwG4HIpOkD3GRMlrsEGWGAmEwpDYgHVXTj4DWQhVyN68oLxqe5CRvScggtgi310PUe8ZjFS5EJkS2BsAFRfMGhN7WAAAAAAAElFTkSuQmCC", rt = ["src", "alt"], ut = /* @__PURE__ */ h({
  __name: "PixelImage",
  props: {
    src: {},
    alt: { default: "" },
    pixelSize: { default: 2 },
    enabled: { type: Boolean, default: !0 },
    width: { default: 0 },
    height: { default: 0 }
  },
  setup(t) {
    const n = t, a = V(null), u = V(null);
    function d() {
      return new Promise((f, o) => {
        const c = new Image();
        c.crossOrigin = "anonymous", c.onload = () => f(c), c.onerror = o, c.src = n.src;
      });
    }
    async function v() {
      if (!a.value || !n.enabled) return;
      const f = a.value, o = f.getContext("2d");
      if (o)
        try {
          u.value || (u.value = await d());
          const c = u.value;
          let r = n.width || c.naturalWidth, y = n.height || c.naturalHeight;
          if (n.width && n.height) {
            if (f.width = n.width, f.height = n.height, n.pixelSize <= 1) {
              s(o, c, n.width, n.height);
              return;
            }
            const p = document.createElement("canvas"), X = p.getContext("2d");
            if (!X) return;
            const x = Math.max(1, Math.floor(n.width / n.pixelSize)), P = Math.max(1, Math.floor(n.height / n.pixelSize));
            p.width = x, p.height = P, X.imageSmoothingEnabled = !1, o.imageSmoothingEnabled = !1, s(X, c, x, P), o.drawImage(p, 0, 0, x, P, 0, 0, n.width, n.height);
          } else {
            if (f.width = r, f.height = y, n.pixelSize <= 1) {
              o.drawImage(c, 0, 0, r, y);
              return;
            }
            const p = document.createElement("canvas"), X = p.getContext("2d");
            if (!X) return;
            const x = Math.max(1, Math.floor(r / n.pixelSize)), P = Math.max(1, Math.floor(y / n.pixelSize));
            p.width = x, p.height = P, X.imageSmoothingEnabled = !1, o.imageSmoothingEnabled = !1, X.drawImage(c, 0, 0, x, P), o.drawImage(p, 0, 0, x, P, 0, 0, r, y);
          }
        } catch (c) {
          if (console.error("Failed to apply pixel filter:", c), u.value && a.value) {
            const r = u.value, y = n.width || r.naturalWidth, p = n.height || r.naturalHeight;
            a.value.width = y, a.value.height = p, n.width && n.height ? s(o, r, y, p) : o?.drawImage(r, 0, 0);
          }
        }
    }
    function s(f, o, c, r) {
      const y = o.naturalWidth / o.naturalHeight, p = c / r;
      let X, x, P, W;
      y > p ? (x = r, X = r * y, P = (c - X) / 2, W = 0) : (X = c, x = c / y, P = 0, W = (r - x) / 2), f.drawImage(o, P, W, X, x);
    }
    return R(() => {
      v();
    }), Y(() => [n.src, n.pixelSize, n.enabled], () => {
      u.value = null, v();
    }, { deep: !0 }), (f, o) => t.enabled ? (i(), l("canvas", {
      key: 0,
      ref_key: "canvasRef",
      ref: a,
      class: "pixel-image",
      style: A({ width: t.width ? `${t.width}px` : "100%", height: t.height ? `${t.height}px` : "auto" })
    }, null, 4)) : (i(), l("img", {
      key: 1,
      src: t.src,
      alt: t.alt,
      class: "pixel-image",
      style: A({ width: t.width ? `${t.width}px` : "100%", height: t.height ? `${t.height}px` : "auto" })
    }, null, 12, rt));
  }
}), E = /* @__PURE__ */ z(ut, [["__scopeId", "data-v-18edf2bb"]]), ft = { class: "post-item" }, vt = { class: "post-inner" }, mt = { class: "post-avatar" }, bt = { class: "post-content" }, kt = { class: "post-user-row" }, pt = { class: "post-username" }, yt = { class: "post-uid" }, xt = { class: "post-text" }, ht = {
  key: 0,
  class: "post-image"
}, zt = { class: "post-actions" }, Xt = { class: "post-day" }, Pt = {
  key: 0,
  class: "post-divider"
}, gt = /* @__PURE__ */ h({
  __name: "PostItem",
  props: {
    id: {},
    avatar: {},
    username: {},
    uid: {},
    content: {},
    image: { default: void 0 },
    likes: {},
    shares: {},
    isLiked: { type: Boolean, default: !1 },
    isShared: { type: Boolean, default: !1 },
    day: {},
    showDivider: { type: Boolean, default: !0 },
    avatarPixelSize: { default: 2 },
    imagePixelSize: { default: 2 },
    pixelFilterEnabled: { type: Boolean, default: !0 }
  },
  emits: ["like", "share"],
  setup(t, { emit: n }) {
    const a = t, u = n;
    function d() {
      u("like", a.id);
    }
    function v() {
      u("share", a.id);
    }
    function s(f) {
      return f === 0 ? "今天" : `第${f}天`;
    }
    return (f, o) => (i(), l("div", ft, [
      e("div", vt, [
        e("div", mt, [
          O(E, {
            src: t.avatar,
            alt: t.username,
            "pixel-size": t.avatarPixelSize,
            enabled: t.pixelFilterEnabled,
            width: 40,
            height: 40
          }, null, 8, ["src", "alt", "pixel-size", "enabled"])
        ]),
        e("div", bt, [
          e("div", kt, [
            e("span", pt, b(t.username), 1),
            e("span", yt, b(t.uid), 1)
          ]),
          e("div", xt, b(t.content), 1),
          t.image ? (i(), l("div", ht, [
            O(E, {
              src: t.image,
              alt: "post image",
              "pixel-size": t.imagePixelSize,
              enabled: t.pixelFilterEnabled
            }, null, 8, ["src", "pixel-size", "enabled"])
          ])) : m("", !0),
          e("div", zt, [
            e("button", {
              class: "action-btn",
              onClick: v
            }, [
              o[0] || (o[0] = e("img", {
                src: dt,
                class: "action-icon",
                alt: "分享"
              }, null, -1)),
              e("span", {
                class: S(["action-count", { "is-zero": t.shares === 0 }])
              }, b(t.shares), 3)
            ]),
            e("button", {
              class: "action-btn",
              onClick: d
            }, [
              o[1] || (o[1] = e("span", { class: "action-icon star-icon" }, "☆", -1)),
              e("span", {
                class: S(["action-count like-count", { "is-zero": t.likes === 0 }])
              }, b(t.likes), 3)
            ])
          ]),
          e("div", Xt, b(s(t.day)), 1)
        ])
      ]),
      t.showDivider ? (i(), l("div", Pt)) : m("", !0)
    ]));
  }
}), Vt = /* @__PURE__ */ z(gt, [["__scopeId", "data-v-57964c7c"]]), St = { class: "poketter-title" }, At = { class: "posts-list" }, Jt = { class: "posts-inner" }, Wt = /* @__PURE__ */ h({
  __name: "Poketter",
  props: {
    title: { default: "Poketter" },
    posts: { default: () => [] },
    avatarPixelSize: { default: 2 },
    imagePixelSize: { default: 2 },
    backgroundPixelSize: { default: 2 },
    pixelFilterEnabled: { type: Boolean, default: !0 },
    backgroundPixelEnabled: { type: Boolean, default: !1 }
  },
  emits: ["like", "share"],
  setup(t, { emit: n }) {
    const a = t, u = n, d = V([...a.posts]);
    Y(() => a.posts, (o) => {
      d.value = [...o];
    }, { deep: !0 });
    function v(o) {
      const c = d.value.find((r) => r.id === o);
      c && (c.isLiked = !c.isLiked, c.likes += c.isLiked ? 1 : -1), u("like", o);
    }
    function s(o) {
      const c = d.value.find((r) => r.id === o);
      c && (c.isShared = !c.isShared, c.shares += c.isShared ? 1 : -1), u("share", o);
    }
    function f(o) {
      const c = d.value[d.value.length - 1];
      return c != null && o === c.id;
    }
    return (o, c) => (i(), l("div", {
      class: S(["poketter-container", { "pixel-bg": t.backgroundPixelEnabled }]),
      style: A(t.backgroundPixelEnabled ? { "--pixel-size": `${t.backgroundPixelSize}px` } : {})
    }, [
      e("h1", St, b(t.title), 1),
      e("div", At, [
        e("div", Jt, [
          (i(!0), l(w, null, L(d.value, (r) => (i(), N(Vt, {
            key: r.id,
            id: r.id,
            avatar: r.avatar,
            username: r.username,
            uid: r.uid,
            content: r.content,
            image: r.image,
            likes: r.likes,
            shares: r.shares,
            "is-liked": r.isLiked,
            "is-shared": r.isShared,
            day: r.day,
            "show-divider": !f(r.id),
            "avatar-pixel-size": t.avatarPixelSize,
            "image-pixel-size": t.imagePixelSize,
            "pixel-filter-enabled": t.pixelFilterEnabled,
            onLike: v,
            onShare: s
          }, null, 8, ["id", "avatar", "username", "uid", "content", "image", "likes", "shares", "is-liked", "is-shared", "day", "show-divider", "avatar-pixel-size", "image-pixel-size", "pixel-filter-enabled"]))), 128))
        ])
      ])
    ], 6));
  }
}), Be = /* @__PURE__ */ z(Wt, [["__scopeId", "data-v-387c07ac"]]), wt = ["type", "disabled"], Tt = { class: "button-content" }, Ot = /* @__PURE__ */ h({
  __name: "GameButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    className: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const a = t, u = n;
    function d(v) {
      a.disabled || u("click", v);
    }
    return (v, s) => (i(), l("button", {
      type: t.type,
      class: S(["game-button", [t.className, { disabled: t.disabled }]]),
      disabled: t.disabled,
      onClick: d
    }, [
      e("span", Tt, [
        J(v.$slots, "default", {}, () => [
          s[0] || (s[0] = F("按钮", -1))
        ], !0)
      ])
    ], 10, wt));
  }
}), Ce = /* @__PURE__ */ z(Ot, [["__scopeId", "data-v-26350fe0"]]), Lt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAYAAABTERJSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAwklEQVRYhe2YzQmAMAyFU+koxQGcwAl6cU4vTuAEDiDuUi8WKiSQ/ijv0O9qsY+XH5KaEAJp8e7QH37Yrslozw65P/8SKDFW+sCFZD337Au8Iza0XPignDFpAqdulLiQwzLORPR2CMoZKDFiAmuIVkvkhhrKGSgx9s8KSol3pX0IypkuRgJKTFWf4agpAihnuhgJKDFVCdy6Y0M5AzXpNZ9nep/5AqhqMtKu3WqJk+Zk+CUOSowYJo6SJxEi/bMIlDM3vExJCNkBruoAAAAASUVORK5CYII=", Zt = { class: "icon-wrapper" }, qt = ["src", "alt"], Nt = ["src"], jt = {
  key: 1,
  class: "shortcut-badge"
}, Et = { class: "label" }, It = /* @__PURE__ */ h({
  __name: "AppButton",
  props: {
    icon: {},
    name: {},
    x: { default: 0 },
    y: { default: 0 },
    xPercent: { default: void 0 },
    yPercent: { default: void 0 },
    sideWidth: { default: 200 },
    disabled: { type: Boolean, default: !1 },
    hasNotification: { type: Boolean, default: !1 },
    isShortcut: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const a = t, u = n;
    function d() {
      a.disabled || u("click");
    }
    const v = T(() => {
      const s = a.sideWidth;
      let f, o;
      return a.xPercent !== void 0 ? f = `calc(${s}px + (100vw - ${s * 2}px) * ${a.xPercent})` : f = `calc(${s}px + ${a.x}px)`, a.yPercent !== void 0 ? o = `calc(100vh * ${a.yPercent})` : o = `${a.y}px`, { left: f, top: o };
    });
    return (s, f) => (i(), l("div", {
      class: S(["app-button", { disabled: t.disabled, "has-notification": t.hasNotification, "is-shortcut": t.isShortcut }]),
      style: A(v.value),
      onClick: d
    }, [
      e("div", Zt, [
        e("img", {
          src: t.icon,
          alt: t.name,
          class: "icon"
        }, null, 8, qt),
        t.hasNotification ? (i(), l("img", {
          key: 0,
          src: Q(Lt),
          class: "notification-badge",
          alt: "!"
        }, null, 8, Nt)) : m("", !0),
        t.isShortcut ? (i(), l("div", jt, [...f[0] || (f[0] = [
          e("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none"
          }, [
            e("path", {
              d: "M2 10L10 2M10 2H4M10 2V8",
              stroke: "#4B28C6",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1)
        ])])) : m("", !0)
      ]),
      e("div", Et, b(t.name), 1)
    ], 6));
  }
}), Me = /* @__PURE__ */ z(It, [["__scopeId", "data-v-9bff0f85"]]), U = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAmUlEQVRYhe2YQQqAMAwEG+lF36L/f4i+wEcoHqSejdBBrJDDzk0CYViXHGrHepZUofS1aUq21+dv6dqu+46EiPx1QeuOhUtIQsSjQ9SJt9C+xe5nMFxCEiIkREiIyK3vDuHvzrTZ7TtcQhIiJERIiMj+LnjGYtU5QXfHEy4hCRGZ/uk8/NsxT7iEJEQYvQ8R1DHqqCdcQhIiLgqhIQdLGFp6AAAAAElFTkSuQmCC", Ht = "data:image/png;base64,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", Rt = /* @__PURE__ */ h({
  __name: "BackgroundLibrary",
  props: {
    tileSize: { default: 16 },
    pixelated: { type: Boolean, default: !0 },
    opacity: { default: 100 },
    zIndex: { default: -1 },
    sideWidth: { default: 200 },
    showSide: { type: Boolean, default: !0 }
  },
  setup(t) {
    const n = `url(${U})`, a = `url(${Ht})`;
    return (u, d) => (i(), l(w, null, [
      e("div", {
        class: "background-library",
        style: A({
          backgroundImage: n,
          backgroundRepeat: "repeat",
          backgroundSize: `${t.tileSize}px ${t.tileSize}px`,
          imageRendering: t.pixelated ? "pixelated" : "auto",
          opacity: t.opacity / 100,
          zIndex: t.zIndex
        })
      }, null, 4),
      t.showSide ? (i(), l("div", {
        key: 0,
        class: "side-image side-left",
        style: A({
          backgroundImage: a,
          width: `${t.sideWidth}px`,
          imageRendering: t.pixelated ? "pixelated" : "auto",
          zIndex: t.zIndex
        })
      }, null, 4)) : m("", !0),
      t.showSide ? (i(), l("div", {
        key: 1,
        class: "side-image side-right",
        style: A({
          backgroundImage: a,
          width: `${t.sideWidth}px`,
          imageRendering: t.pixelated ? "pixelated" : "auto",
          transform: "scaleX(-1)",
          zIndex: t.zIndex
        })
      }, null, 4)) : m("", !0)
    ], 64));
  }
}), De = /* @__PURE__ */ z(Rt, [["__scopeId", "data-v-54692404"]]), Yt = /* @__PURE__ */ h({
  __name: "BackgroundPattern",
  props: {
    tileSize: { default: 16 },
    pixelated: { type: Boolean, default: !0 },
    className: { default: "" }
  },
  setup(t) {
    const n = `url(${U})`;
    return (a, u) => (i(), l("div", {
      class: S(["background-pattern", t.className]),
      style: A({
        backgroundImage: n,
        backgroundRepeat: "repeat",
        backgroundSize: `${t.tileSize}px ${t.tileSize}px`,
        imageRendering: t.pixelated ? "pixelated" : "auto"
      })
    }, [
      J(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Fe = /* @__PURE__ */ z(Yt, [["__scopeId", "data-v-308f9d50"]]), Kt = {
  key: 0,
  class: "cursor-library",
  "data-cursor-enabled": ""
}, Ut = /* @__PURE__ */ h({
  __name: "CursorLibrary",
  props: {
    enabled: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (n, a) => t.enabled ? (i(), l("div", Kt)) : m("", !0);
  }
}), Qe = /* @__PURE__ */ z(Ut, [["__scopeId", "data-v-e2ce76a6"]]), Gt = { class: "xenon-topbar" }, Bt = { class: "xenon-topbar-inner" }, Ct = { class: "xenon-topbar-left" }, Mt = {
  key: 1,
  class: "xenon-pixel-square",
  "aria-hidden": "true"
}, Dt = ["onClick"], Ft = ["src"], Qt = ["src"], $t = { class: "xenon-topbar-center" }, _t = {
  key: 0,
  class: "xenon-topbar-title"
}, te = { class: "xenon-topbar-right" }, ee = ["onClick"], ne = ["src"], ae = ["src"], se = /* @__PURE__ */ h({
  __name: "TopBar",
  props: {
    showBack: { type: Boolean, default: !1 },
    title: { default: "" },
    rightIcons: { default: () => [] },
    leftIcons: { default: () => [] }
  },
  emits: ["back"],
  setup(t, { emit: n }) {
    const a = n;
    function u() {
      a("back");
    }
    return (d, v) => (i(), l("header", Gt, [
      e("div", Bt, [
        e("div", Ct, [
          t.showBack ? (i(), l("button", {
            key: 0,
            class: "xenon-topbar-back-btn",
            onClick: u,
            "aria-label": "返回"
          }, [...v[0] || (v[0] = [
            e("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none"
            }, [
              e("path", {
                d: "M10 2L4 8L10 14",
                stroke: "#4B28C6",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ], -1)
          ])])) : m("", !0),
          t.showBack ? m("", !0) : (i(), l("span", Mt)),
          (i(!0), l(w, null, L(t.leftIcons, (s, f) => (i(), l(w, {
            key: "left-" + f
          }, [
            s.action ? (i(), l("button", {
              key: 0,
              class: "xenon-topbar-icon-btn",
              onClick: s.action
            }, [
              s.icon ? (i(), l("img", {
                key: 0,
                src: s.icon,
                class: "xenon-topbar-icon-img",
                alt: ""
              }, null, 8, Ft)) : m("", !0)
            ], 8, Dt)) : s.icon ? (i(), l("img", {
              key: 1,
              src: s.icon,
              class: "xenon-topbar-icon-img",
              alt: ""
            }, null, 8, Qt)) : m("", !0)
          ], 64))), 128))
        ]),
        e("div", $t, [
          J(d.$slots, "title", {}, () => [
            t.title ? (i(), l("time", _t, b(t.title), 1)) : m("", !0)
          ], !0)
        ]),
        e("div", te, [
          (i(!0), l(w, null, L(t.rightIcons, (s, f) => (i(), l(w, {
            key: "right-" + f
          }, [
            s.action ? (i(), l("button", {
              key: 0,
              class: "xenon-topbar-icon-btn",
              onClick: s.action
            }, [
              s.icon ? (i(), l("img", {
                key: 0,
                src: s.icon,
                class: "xenon-topbar-icon-img",
                alt: ""
              }, null, 8, ne)) : m("", !0)
            ], 8, ee)) : s.icon ? (i(), l("img", {
              key: 1,
              src: s.icon,
              class: "xenon-topbar-icon-img",
              alt: ""
            }, null, 8, ae)) : m("", !0)
          ], 64))), 128))
        ])
      ])
    ]));
  }
}), ie = /* @__PURE__ */ z(se, [["__scopeId", "data-v-e32236bf"]]), le = {
  class: "xenon-bottom-nav",
  "data-mobile-nav": "global"
}, oe = { class: "xenon-bottom-nav-inner" }, ce = ["onClick"], de = { class: "xenon-bottom-nav-icon-wrapper" }, re = ["src", "alt"], ue = { class: "xenon-bottom-nav-label" }, fe = /* @__PURE__ */ h({
  __name: "BottomAppBar",
  props: {
    items: {},
    activeId: { default: "" }
  },
  emits: ["select"],
  setup(t, { emit: n }) {
    const a = t, u = n;
    function d(s) {
      return s.id === a.activeId && s.activeIcon ? s.activeIcon : s.icon;
    }
    function v(s) {
      s.action ? s.action() : u("select", s);
    }
    return (s, f) => (i(), l("nav", le, [
      e("div", oe, [
        (i(!0), l(w, null, L(t.items, (o) => (i(), l("button", {
          key: o.id,
          class: S(["xenon-bottom-nav-item", { active: o.id === t.activeId }]),
          onClick: (c) => v(o)
        }, [
          e("div", de, [
            e("img", {
              src: d(o),
              alt: o.label,
              class: "xenon-bottom-nav-icon"
            }, null, 8, re)
          ]),
          e("span", ue, b(o.label), 1)
        ], 10, ce))), 128))
      ])
    ]));
  }
}), ve = /* @__PURE__ */ z(fe, [["__scopeId", "data-v-78eb56ce"]]), me = ["disabled", "aria-disabled"], be = { class: "xenon-mobile-app-icon" }, ke = ["src", "alt"], pe = {
  key: 0,
  class: "xenon-mobile-app-badge",
  "aria-label": "有新通知"
}, ye = { class: "xenon-mobile-app-label" }, xe = /* @__PURE__ */ h({
  __name: "MobileAppIcon",
  props: {
    icon: {},
    name: {},
    hasNotification: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const a = t, u = n;
    function d() {
      a.disabled || u("click");
    }
    return (v, s) => (i(), l("button", {
      class: S(["xenon-mobile-app", { disabled: t.disabled, "has-notification": t.hasNotification }]),
      disabled: t.disabled,
      "aria-disabled": t.disabled,
      onClick: d
    }, [
      e("span", be, [
        e("img", {
          src: t.icon,
          alt: t.name,
          class: "xenon-mobile-app-icon-img"
        }, null, 8, ke),
        t.hasNotification ? (i(), l("span", pe)) : m("", !0)
      ]),
      e("span", ye, b(t.name), 1)
    ], 10, me));
  }
}), $e = /* @__PURE__ */ z(xe, [["__scopeId", "data-v-43a9d8b4"]]), he = {
  class: "xenon-window",
  "aria-label": "欢迎窗口"
}, ze = { class: "xenon-window-titlebar" }, Xe = { class: "xenon-window-titlebar-left" }, Pe = { class: "xenon-window-title" }, ge = {
  key: 0,
  class: "xenon-window-titlebar-right"
}, Ve = {
  key: 0,
  class: "xenon-window-body"
}, Se = {
  key: 0,
  class: "xenon-welcome-text"
}, Ae = {
  key: 1,
  class: "xenon-welcome-date"
}, Je = {
  key: 1,
  class: "xenon-window-statusbar"
}, We = { class: "xenon-window-statusbar-label" }, we = /* @__PURE__ */ h({
  __name: "WelcomeWidget",
  props: {
    title: { default: "" },
    greeting: { default: "" },
    subtitle: { default: "" },
    statusText: { default: "" },
    showControls: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (n, a) => (i(), l("section", he, [
      e("div", ze, [
        e("div", Xe, [
          a[0] || (a[0] = e("span", {
            class: "xenon-titlebar-icon",
            "aria-hidden": "true"
          }, null, -1)),
          e("span", Pe, b(t.title), 1)
        ]),
        t.showControls ? (i(), l("div", ge, [...a[1] || (a[1] = [
          K('<button type="button" class="xenon-ctrl-btn" aria-label="最小化" data-v-6e4c3ccc><span class="xenon-ctrl-glyph" data-glyph="min" aria-hidden="true" data-v-6e4c3ccc></span></button><button type="button" class="xenon-ctrl-btn" aria-label="最大化" data-v-6e4c3ccc><span class="xenon-ctrl-glyph" data-glyph="max" aria-hidden="true" data-v-6e4c3ccc></span></button><button type="button" class="xenon-ctrl-btn" aria-label="关闭" data-v-6e4c3ccc><span class="xenon-ctrl-glyph" data-glyph="close" aria-hidden="true" data-v-6e4c3ccc></span></button>', 3)
        ])])) : m("", !0)
      ]),
      t.greeting || t.subtitle || n.$slots.default ? (i(), l("div", Ve, [
        t.greeting ? (i(), l("p", Se, b(t.greeting), 1)) : m("", !0),
        t.subtitle ? (i(), l("p", Ae, b(t.subtitle), 1)) : m("", !0),
        J(n.$slots, "default", {}, void 0, !0)
      ])) : m("", !0),
      t.statusText ? (i(), l("div", Je, [
        e("span", We, b(t.statusText), 1),
        a[2] || (a[2] = e("div", {
          class: "xenon-window-statusbar-blocks",
          "aria-hidden": "true"
        }, [
          e("span", { class: "xenon-status-block" }),
          e("span", { class: "xenon-status-block" }),
          e("span", { class: "xenon-status-block" })
        ], -1))
      ])) : m("", !0)
    ]));
  }
}), _e = /* @__PURE__ */ z(we, [["__scopeId", "data-v-6e4c3ccc"]]), Te = {
  class: "xenon-window",
  "aria-label": "应用启动器"
}, Oe = { class: "xenon-window-titlebar" }, Le = { class: "xenon-window-titlebar-left" }, Ze = { class: "xenon-window-title" }, qe = {
  key: 0,
  class: "xenon-window-titlebar-right"
}, Ne = { class: "xenon-appgrid-body" }, je = { class: "xenon-window-statusbar" }, Ee = { class: "xenon-window-statusbar-label" }, Ie = /* @__PURE__ */ h({
  __name: "AppPanel",
  props: {
    title: { default: "" },
    statusText: { default: "" },
    appCount: { default: 0 },
    columns: { default: 4 },
    gap: { default: "3vw" },
    showControls: { type: Boolean, default: !1 }
  },
  setup(t) {
    const n = t;
    function a() {
      return n.statusText ? n.statusText : n.appCount > 0 ? `${n.appCount} 个应用` : "";
    }
    return (u, d) => (i(), l("section", Te, [
      e("div", Oe, [
        e("div", Le, [
          d[0] || (d[0] = e("span", {
            class: "xenon-titlebar-icon",
            "aria-hidden": "true"
          }, null, -1)),
          e("span", Ze, b(t.title), 1)
        ]),
        t.showControls ? (i(), l("div", qe, [...d[1] || (d[1] = [
          K('<button type="button" class="xenon-ctrl-btn" aria-label="最小化" data-v-49b0861c><span class="xenon-ctrl-glyph" data-glyph="min" aria-hidden="true" data-v-49b0861c></span></button><button type="button" class="xenon-ctrl-btn" aria-label="最大化" data-v-49b0861c><span class="xenon-ctrl-glyph" data-glyph="max" aria-hidden="true" data-v-49b0861c></span></button><button type="button" class="xenon-ctrl-btn" aria-label="关闭" data-v-49b0861c><span class="xenon-ctrl-glyph" data-glyph="close" aria-hidden="true" data-v-49b0861c></span></button>', 3)
        ])])) : m("", !0)
      ]),
      e("div", Ne, [
        e("div", {
          class: "xenon-app-grid",
          style: A({
            gridTemplateColumns: `repeat(${t.columns}, 1fr)`,
            gap: t.gap
          })
        }, [
          J(u.$slots, "default", {}, void 0, !0)
        ], 4)
      ]),
      e("div", je, [
        e("span", Ee, b(a()), 1),
        d[2] || (d[2] = e("div", {
          class: "xenon-window-statusbar-blocks",
          "aria-hidden": "true"
        }, [
          e("span", { class: "xenon-status-block" }),
          e("span", { class: "xenon-status-block" }),
          e("span", { class: "xenon-status-block" })
        ], -1))
      ])
    ]));
  }
}), tn = /* @__PURE__ */ z(Ie, [["__scopeId", "data-v-49b0861c"]]), He = { class: "xenon-mobile-frame" }, Re = { class: "xenon-topbar-title" }, Ye = { class: "xenon-mobile-content" }, Ke = /* @__PURE__ */ h({
  __name: "MobilePageLayout",
  props: {
    showBack: { type: Boolean, default: !1 },
    title: { default: "" },
    navItems: { default: () => [] },
    activeNavId: { default: "" },
    hideBottomNav: { type: Boolean, default: !1 },
    rightIcons: { default: () => [] },
    leftIcons: { default: () => [] }
  },
  emits: ["back", "navSelect"],
  setup(t, { emit: n }) {
    const a = n;
    function u() {
      a("back");
    }
    function d(v) {
      a("navSelect", v);
    }
    return R(() => {
      document.querySelectorAll(".background-library, .side-image").forEach((f) => {
        f.style.display = "none";
      }), document.body.style.overflow = "hidden", document.body.style.display = "block", document.body.style.minHeight = "auto", document.body.style.placeItems = "";
      const s = document.getElementById("app");
      s && (s.style.maxWidth = "none", s.style.padding = "0", s.style.margin = "0");
    }), I(() => {
      document.querySelectorAll(".background-library, .side-image").forEach((f) => {
        f.style.display = "";
      }), document.body.style.overflow = "", document.body.style.display = "", document.body.style.minHeight = "", document.body.style.placeItems = "";
      const s = document.getElementById("app");
      s && (s.style.maxWidth = "", s.style.padding = "", s.style.margin = "");
    }), (v, s) => (i(), l("div", He, [
      O(ie, {
        "show-back": t.showBack,
        title: t.title,
        "left-icons": t.leftIcons,
        "right-icons": t.rightIcons,
        onBack: u
      }, {
        title: H(() => [
          J(v.$slots, "topbar-title", {}, () => [
            e("time", Re, b(t.title), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["show-back", "title", "left-icons", "right-icons"]),
      e("div", Ye, [
        J(v.$slots, "default", {}, void 0, !0)
      ]),
      !t.hideBottomNav && t.navItems.length > 0 ? (i(), N(ve, {
        key: 0,
        items: t.navItems,
        "active-id": t.activeNavId,
        onSelect: d
      }, null, 8, ["items", "active-id"])) : m("", !0)
    ]));
  }
}), en = /* @__PURE__ */ z(Ke, [["__scopeId", "data-v-166939e9"]]);
export {
  Me as AppButton,
  tn as AppPanel,
  De as BackgroundLibrary,
  Fe as BackgroundPattern,
  ve as BottomAppBar,
  Qe as CursorLibrary,
  Ge as FloatingWindow,
  Ce as GameButton,
  $e as MobileAppIcon,
  en as MobilePageLayout,
  E as PixelImage,
  Be as Poketter,
  Vt as PostItem,
  ie as TopBar,
  _e as WelcomeWidget
};
