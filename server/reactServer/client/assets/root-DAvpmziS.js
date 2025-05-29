import { w as c, a as l } from "./with-props-DLs7YAe3.js";
import {
  o as e,
  M as i,
  L as m,
  S as u,
  p as h,
  O as p,
  q as g,
} from "./chunk-D4RADZKF-D9WvSiRn.js";
import { L as f } from "./index-Bta7Cqu8.js";
const r = {
  defaultMode: "auto",
  localStorageKey: "flowbite-theme-mode",
  prefix: "",
};
function n({
  mode: d,
  defaultMode: o = r.defaultMode,
  localStorageKey: a = r.localStorageKey,
  ...t
}) {
  return e.jsx("script", {
    ...t,
    "data-flowbite-theme-mode-script": !0,
    dangerouslySetInnerHTML: {
      __html: M({ mode: d, defaultMode: o, localStorageKey: a, prefix: "" }),
    },
  });
}
n.displayName = "ThemeModeScript";
function M(d = {}) {
  const {
    mode: o,
    defaultMode: a = r.defaultMode,
    localStorageKey: t = r.localStorageKey,
    prefix: s = r.prefix,
  } = d;
  return `
    try {
      const storageMode = window.localStorage.getItem("${t}");
      const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
      const resolvedMode = (isStorageModeValid ? storageMode : null) ?? ${o ? `"${o}"` : void 0} ?? "${a}";
      const computedMode =
        resolvedMode === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : resolvedMode;

      if (computedMode === "dark") {
        document.documentElement.classList.add("${s}dark");
      } else {
        document.documentElement.classList.remove("${s}dark");
      }
      localStorage.setItem("${t}", resolvedMode);

      // Add listener for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        const storageMode = window.localStorage.getItem("${t}");
        const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
        const resolvedMode = isStorageModeValid ? storageMode : "${a}";

        if (resolvedMode === "auto") {
          if (e.matches) {
            document.documentElement.classList.add("${s}dark");
          } else {
            document.documentElement.classList.remove("${s}dark");
          }
        }
      });

      // Add listener for storage changes
      window.addEventListener("storage", (e) => {
        if (e.key === "${t}") {
          const newMode = e.newValue;
          const isStorageModeValid = newMode === "light" || newMode === "dark" || newMode === "auto";
          const resolvedMode = isStorageModeValid ? newMode : "${a}";

          if (resolvedMode === "dark" || (resolvedMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("${s}dark");
          } else {
            document.documentElement.classList.remove("${s}dark");
          }
        }
      });
    } catch (e) {}
  `;
}
const j = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
  },
];
function S({ children: d }) {
  return e.jsxs("html", {
    lang: "en",
    suppressHydrationWarning: !0,
    children: [
      e.jsxs("head", {
        children: [
          e.jsx("meta", { charSet: "utf-8" }),
          e.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          }),
          e.jsx(i, {}),
          e.jsx(m, {}),
          e.jsx(n, {}),
        ],
      }),
      e.jsxs("body", { children: [d, e.jsx(u, {}), e.jsx(h, {})] }),
      e.jsx(f, {}),
    ],
  });
}
const k = c(function () {
    return e.jsx(p, {});
  }),
  v = l(function ({ error: o }) {
    let a = "Oops!",
      t = "An unexpected error occurred.",
      s;
    return (
      g(o)
        ? ((a = o.status === 404 ? "404" : "Error"),
          (t =
            o.status === 404
              ? "The requested page could not be found."
              : o.statusText || t))
        : o && o instanceof Error && ((t = o.message), (s = o.stack)),
      e.jsxs("main", {
        className: "container mx-auto p-4 pt-16",
        children: [
          e.jsx("h1", { children: a }),
          e.jsx("p", { children: t }),
          s &&
            e.jsx("pre", {
              className: "w-full overflow-x-auto p-4",
              children: e.jsx("code", { children: s }),
            }),
        ],
      })
    );
  });
export { v as ErrorBoundary, S as Layout, k as default, j as links };
