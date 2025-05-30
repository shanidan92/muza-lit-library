import { w as P } from "./with-props-B2_f2fEw.js";
import { a as l, s as k, o as s } from "./chunk-DQRVZFIR-BNfO-z-U.js";
import { u as R, M as E, a as M } from "./main-C56J1lNH.js";
import { M as C } from "./MusicPlayer-Boy5Oyzy.js";
import { A as a } from "./AlbumDetails-C3Mxf3bc.js";
import { u as U } from "./userStore-Co03IV9v.js";
const q = P(function () {
  const { selectedSong: t, setSelectedSong: r } = U(),
    {
      newReleases: h,
      featured: x,
      recommended: g,
      recentlyPlayed: n,
      sidebarSections: b,
      setNewReleases: f,
      setFeatured: j,
      setRecommended: p,
      setRecentlyPlayed: S,
      setSidebarSections: y,
    } = R(),
    [w, o] = l.useState(!0),
    [c, A] = l.useState(null),
    N = k(),
    i = (e) => {
      N("/routes/album", { state: { album: e } });
    },
    d = () => (!t || !t.id ? -1 : n.findIndex((e) => e.id === t.id)),
    v = () => {
      const e = d();
      e <= 0 ? r(n[n.length - 1]) : r(n[e - 1]);
    },
    u = () => {
      const e = d();
      e === -1 || e === n.length - 1 ? r(n[0]) : r(n[e + 1]);
    };
  return (
    l.useEffect(() => {
      fetch("/staticData/allData.json")
        .then((e) => {
          if (!e.ok)
            fetch("./staticData/allData.json").then((m) => {
              if (!m.ok) throw new Error("Network response was not ok");
              return m.json();
            });
          else return e.json();
        })
        .then((e) => {
          j(e.albums.featured || []),
            f(e.albums.newReleases || []),
            p(e.albums.recommended || []),
            S(e.songs),
            y(e.sidebar.sections),
            e.songs.length > 0 && !t && r(e.songs[0]),
            o(!1);
        })
        .catch((e) => {
          A(e.message), o(!1);
        });
    }, []),
    w
      ? s.jsx("p", { children: "Loading..." })
      : c
        ? s.jsxs("p", { children: ["Error: ", c] })
        : s.jsxs("div", {
            className: "body",
            children: [
              s.jsx(E, {
                logoSrc: "/app/icons/icons/muza.svg",
                logoAlt: "Music Library",
                sections: b,
              }),
              s.jsxs("div", {
                className: "content",
                children: [
                  s.jsx(M, {}),
                  s.jsxs("main", {
                    children: [
                      s.jsx("h1", { children: "Albums" }),
                      s.jsx("hr", {}),
                      s.jsx("h2", { children: "Featured Albums" }),
                      s.jsx("div", {
                        className: "album-list",
                        children: x.map((e) =>
                          s.jsx(
                            a,
                            { details: e, onAlbumClick: () => i(e) },
                            e.id,
                          ),
                        ),
                      }),
                      s.jsx("hr", {}),
                      s.jsx("h2", { children: "New Releases" }),
                      s.jsx("div", {
                        className: "album-list",
                        children: h.map((e) =>
                          s.jsx(
                            a,
                            { details: e, onAlbumClick: () => i(e) },
                            e.id,
                          ),
                        ),
                      }),
                      s.jsx("hr", {}),
                      s.jsx("h2", { children: "Recommended Albums" }),
                      s.jsx("div", {
                        className: "album-list",
                        children: g.map((e) =>
                          s.jsx(
                            a,
                            { details: e, onAlbumClick: () => i(e) },
                            e.id,
                          ),
                        ),
                      }),
                      t &&
                        s.jsx(C, {
                          details: {
                            audioUrl: t.audioUrl || "",
                            imageSrc: t.imageSrc || "",
                            title: t.title,
                            artist: t.artist || "",
                            album: t.album || "",
                            year: t.year || new Date().getFullYear(),
                            isPlaying: t.isPlaying || !1,
                            id: t.id,
                          },
                          onUpdate: (e) =>
                            r({
                              ...t,
                              isPlaying: e.isPlaying,
                              audioUrl: e.audioUrl,
                            }),
                          onPrevious: v,
                          onNext: u,
                          onSongEnded: u,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          })
  );
});
export { q as default };
