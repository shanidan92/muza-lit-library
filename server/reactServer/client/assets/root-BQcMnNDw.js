import { w as c, a as l } from "./with-props-B2_f2fEw.js";
import {
  o as e,
  M as i,
  L as m,
  S as u,
  p as h,
  O as p,
  q as g,
} from "./chunk-DQRVZFIR-BNfO-z-U.js";
import { L as M } from "./index-Bs9qsKfp.js";
const d = {
  defaultMode: "auto",
  localStorageKey: "flowbite-theme-mode",
  prefix: "",
};
function n({
  mode: r,
  defaultMode: t = d.defaultMode,
  localStorageKey: s = d.localStorageKey,
  ...o
}) {
  return e.jsx("script", {
    ...o,
    "data-flowbite-theme-mode-script": !0,
    dangerouslySetInnerHTML: {
      __html: f({ mode: r, defaultMode: t, localStorageKey: s, prefix: "" }),
    },
  });
}
n.displayName = "ThemeModeScript";
function f(r = {}) {
  const {
    mode: t,
    defaultMode: s = d.defaultMode,
    localStorageKey: o = d.localStorageKey,
    prefix: a = d.prefix,
  } = r;
  return `
    try {
      const storageMode = window.localStorage.getItem("${o}");
      const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
      const resolvedMode = (isStorageModeValid ? storageMode : null) ?? ${t ? `"${t}"` : void 0} ?? "${s}";
      const computedMode =
        resolvedMode === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : resolvedMode;

      if (computedMode === "dark") {
        document.documentElement.classList.add("${a}dark");
      } else {
        document.documentElement.classList.remove("${a}dark");
      }
      localStorage.setItem("${o}", resolvedMode);

      // Add listener for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        const storageMode = window.localStorage.getItem("${o}");
        const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
        const resolvedMode = isStorageModeValid ? storageMode : "${s}";

        if (resolvedMode === "auto") {
          if (e.matches) {
            document.documentElement.classList.add("${a}dark");
          } else {
            document.documentElement.classList.remove("${a}dark");
          }
        }
      });

      // Add listener for storage changes
      window.addEventListener("storage", (e) => {
        if (e.key === "${o}") {
          const newMode = e.newValue;
          const isStorageModeValid = newMode === "light" || newMode === "dark" || newMode === "auto";
          const resolvedMode = isStorageModeValid ? newMode : "${s}";

          if (resolvedMode === "dark" || (resolvedMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("${a}dark");
          } else {
            document.documentElement.classList.remove("${a}dark");
          }
        }
      });
    } catch (e) {}
  `;
}
const S = () => [
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
function j({ children: r }) {
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
      e.jsxs("body", { children: [r, e.jsx(u, {}), e.jsx(h, {})] }),
      e.jsx(M, {}),
    ],
  });
}
const k = c(function () {
    return e.jsx(p, {});
  }),
  v = l(function ({ error: t }) {
    let s = "Oops!",
      o = "An unexpected error occurred.",
      a;
    return (
      g(t) &&
        ((s = t.status === 404 ? "404" : "Error"),
        (o =
          t.status === 404
            ? "The requested page could not be found."
            : t.statusText || o)),
      e.jsxs("main", {
        className: "container mx-auto p-4 pt-16",
        children: [
          e.jsx("h1", { children: s }),
          e.jsx("p", { children: o }),
          a,
        ],
      })
    );
  });
export { v as ErrorBoundary, j as Layout, k as default, S as links };
