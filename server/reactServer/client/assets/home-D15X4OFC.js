import { w as k } from "./with-props-B2_f2fEw.js";
import { a as r, s as D, o as e } from "./chunk-DQRVZFIR-BNfO-z-U.js";
import { u as M, M as R, a as E } from "./main-C56J1lNH.js";
import { M as I } from "./MusicPlayer-Boy5Oyzy.js";
import { S as L } from "./SongLine-CdvDBH4t.js";
import { A as U } from "./AlbumDetails-C3Mxf3bc.js";
import { A as H } from "./ArtistDetails-CRcbpUNp.js";
import { u as z } from "./userStore-Co03IV9v.js";
const X = k(function () {
  const {
      selectedSong: t,
      setSelectedSong: a,
      setSelectedPlaListOrAlbum: O,
    } = z(),
    {
      newReleases: T,
      recentlyPlayed: n,
      artists: Y,
      sidebarSections: m,
      setNewReleases: h,
      setRecentlyPlayed: x,
      setArtists: g,
      setSidebarSections: f,
    } = M(),
    [y, o] = r.useState(!0),
    [c, j] = r.useState(null),
    [p, b] = r.useState([]),
    [S, w] = r.useState([]),
    [P, A] = r.useState([]),
    l = D(),
    v = (s) => {
      l("/routes/album", { state: { album: s } });
    },
    d = () => (!t || !t.id ? -1 : n.findIndex((s) => s.id === t.id)),
    N = () => {
      const s = d();
      let i;
      s <= 0 ? (i = n[n.length - 1]) : (i = n[s - 1]),
        a({ ...i, isPlaying: (t == null ? void 0 : t.isPlaying) || !1 });
    },
    u = () => {
      const s = d();
      let i;
      s === -1 || s === n.length - 1 ? (i = n[0]) : (i = n[s + 1]),
        a({ ...i, isPlaying: (t == null ? void 0 : t.isPlaying) || !1 });
    };
  return (
    r.useEffect(() => {
      fetch("/staticData/allData.json")
        .then((s) => {
          if (!s.ok)
            fetch("./staticData/allData.json").then((i) => {
              if (!i.ok) throw new Error("Network response was not ok");
              return i.json();
            });
          else return s.json();
        })
        .then((s) => {
          h(s.albums.newReleases),
            x(s.songs),
            g(s.artists),
            f(s.sidebar.sections);
          const i = [...s.albums.newReleases].sort(() => 0.5 - Math.random());
          b(i.slice(0, 5));
          const C = [...s.artists].sort(() => 0.5 - Math.random());
          w(C.slice(0, 5)),
            A(s.songs.slice(0, 30)),
            s.songs.length > 0 && a(s.songs[0]),
            o(!1);
        })
        .catch((s) => {
          j(s.message), o(!1);
        });
    }, []),
    y
      ? e.jsx("p", { children: "Loading..." })
      : c
        ? e.jsxs("p", { children: ["Error: ", c] })
        : e.jsxs("div", {
            className: "body",
            children: [
              e.jsx(R, {
                logoSrc: "/app/icons/icons/muza.svg",
                logoAlt: "Music Library",
                sections: m,
              }),
              e.jsxs("div", {
                className: "content",
                children: [
                  e.jsx(E, {}),
                  e.jsxs("main", {
                    children: [
                      e.jsx("h1", { children: "Home" }),
                      e.jsx("hr", {}),
                      e.jsxs("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          e.jsx("h2", { children: "New Releases" }),
                          e.jsx("button", {
                            onClick: () => l("/routes/albums"),
                            className: "show-more-btn",
                            children: "Show more",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "album-list",
                        children: p.map((s) =>
                          e.jsx(
                            U,
                            { details: s, onAlbumClick: () => v(s) },
                            s.id,
                          ),
                        ),
                      }),
                      e.jsx("hr", {}),
                      e.jsxs("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          e.jsx("h2", { children: "Recently Played" }),
                          e.jsx("button", {
                            onClick: () => l("/routes/songs"),
                            className: "show-more-btn",
                            children: "Show more",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "song-list",
                        children: P.map((s) =>
                          e.jsx(
                            L,
                            {
                              details: s,
                              onClick: () => a(s),
                              isPlaying: s.id === (t == null ? void 0 : t.id),
                            },
                            s.id,
                          ),
                        ),
                      }),
                      e.jsx("hr", {}),
                      e.jsxs("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          e.jsx("h2", { children: "Artists" }),
                          e.jsx("button", {
                            onClick: () => l("/routes/artists"),
                            className: "show-more-btn",
                            children: "Show more",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "artist-list",
                        children: S.map((s) => e.jsx(H, { details: s }, s.id)),
                      }),
                      t &&
                        e.jsx(I, {
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
                          onUpdate: (s) =>
                            a({
                              ...t,
                              isPlaying: s.isPlaying,
                              audioUrl: s.audioUrl,
                            }),
                          onPrevious: N,
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
export { X as default };
