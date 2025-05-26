import{w as c,a as i}from"./with-props-Bohihzv0.js";import{o as e,M as l,L as m,S as u,p as g,O as h,q as p}from"./chunk-D4RADZKF-NJFaw1dw.js";const r={defaultMode:"auto",localStorageKey:"flowbite-theme-mode",prefix:""};function n({mode:d,defaultMode:t=r.defaultMode,localStorageKey:s=r.localStorageKey,...o}){return e.jsx("script",{...o,"data-flowbite-theme-mode-script":!0,dangerouslySetInnerHTML:{__html:M({mode:d,defaultMode:t,localStorageKey:s,prefix:""})}})}n.displayName="ThemeModeScript";function M(d={}){const{mode:t,defaultMode:s=r.defaultMode,localStorageKey:o=r.localStorageKey,prefix:a=r.prefix}=d;return`
    try {
      const storageMode = window.localStorage.getItem("${o}");
      const isStorageModeValid = storageMode === "light" || storageMode === "dark" || storageMode === "auto";
      const resolvedMode = (isStorageModeValid ? storageMode : null) ?? ${t?`"${t}"`:void 0} ?? "${s}";
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
  `}const x=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function y({children:d}){return e.jsxs("html",{lang:"en",suppressHydrationWarning:!0,children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(l,{}),e.jsx(m,{}),e.jsx(n,{})]}),e.jsxs("body",{children:[d,e.jsx(u,{}),e.jsx(g,{})]})]})}const S=c(function(){return e.jsx(h,{})}),k=i(function({error:t}){let s="Oops!",o="An unexpected error occurred.",a;return p(t)&&(s=t.status===404?"404":"Error",o=t.status===404?"The requested page could not be found.":t.statusText||o),e.jsxs("main",{className:"container mx-auto p-4 pt-16",children:[e.jsx("h1",{children:s}),e.jsx("p",{children:o}),a]})});export{k as ErrorBoundary,y as Layout,S as default,x as links};
