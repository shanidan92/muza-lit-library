import { w as h } from "./with-props-B2_f2fEw.js";
import { a as r, o as s } from "./chunk-DQRVZFIR-BNfO-z-U.js";
import { u as m, M as f, a as j } from "./main-C56J1lNH.js";
import { A as x } from "./ArtistDetails-CRcbpUNp.js";
const A = h(function () {
  const {
      artists: o,
      sidebarSections: n,
      setArtists: c,
      setSidebarSections: l,
    } = m(),
    [d, e] = r.useState(!0),
    [a, u] = r.useState(null);
  return (
    r.useEffect(() => {
      fetch("/staticData/allData.json")
        .then((t) => {
          if (!t.ok)
            fetch("./staticData/allData.json").then((i) => {
              if (!i.ok) throw new Error("Network response was not ok");
              return i.json();
            });
          else return t.json();
        })
        .then((t) => {
          c(t.artists), l(t.sidebar.sections), e(!1);
        })
        .catch((t) => {
          u(t.message), e(!1);
        });
    }, []),
    d
      ? s.jsx("p", { children: "Loading..." })
      : a
        ? s.jsxs("p", { children: ["Error: ", a] })
        : s.jsxs("div", {
            className: "body",
            children: [
              s.jsx(f, {
                logoSrc: "/app/icons/icons/muza.svg",
                logoAlt: "Music Library",
                sections: n,
              }),
              s.jsxs("div", {
                className: "content",
                children: [
                  s.jsx(j, {}),
                  s.jsxs("main", {
                    children: [
                      s.jsx("h1", { children: "Artists" }),
                      s.jsx("hr", {}),
                      s.jsx("div", {
                        className: "artist-list",
                        children: o.map((t) => s.jsx(x, { details: t }, t.id)),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
  );
});
export { A as default };
