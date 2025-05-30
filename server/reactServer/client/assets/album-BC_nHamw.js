import { w as b } from "./with-props-B2_f2fEw.js";
import { o as s, a as h, t as g } from "./chunk-DQRVZFIR-BNfO-z-U.js";
import { b as y, u as p, M as P, a as S } from "./main-C56J1lNH.js";
import { u as f } from "./userStore-Co03IV9v.js";
import { F as M, a as C, M as L } from "./MusicPlayer-Boy5Oyzy.js";
import { y as A } from "./index-Bs9qsKfp.js";
import { S as R } from "./SongLine-CdvDBH4t.js";
const I = ({ isOpen: n, onClose: a }) =>
    n
      ? s.jsxs("div", {
          className: "modal",
          children: [
            s.jsxs("div", {
              className: "modal-header",
              children: [
                s.jsx("img", {
                  className: "album-cover",
                  src: "../art/imag_1.jpg",
                  alt: "Ballads album cover",
                }),
                s.jsxs("div", {
                  className: "album-info",
                  children: [
                    s.jsx("h2", {
                      className: "album-title",
                      children: "Ballads",
                    }),
                    s.jsx("p", {
                      className: "artist-name",
                      children: "john coltrano",
                    }),
                  ],
                }),
                s.jsx("button", {
                  className: "modal-close",
                  onClick: a,
                  children: "×",
                }),
              ],
            }),
            s.jsx("div", {
              className: "modal-content",
              children: s.jsxs("div", {
                className: "info-grid",
                children: [
                  s.jsx("div", {
                    className: "info-label",
                    children: "Tenor Saxophone",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "John Coltrane",
                  }),
                  s.jsx("div", { className: "info-label", children: "Piano" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "McCoy Tyner",
                  }),
                  s.jsx("div", { className: "info-label", children: "Bass" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Jimmy Garrison",
                  }),
                  s.jsx("div", { className: "info-label", children: "Drums" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Elvin Jones",
                  }),
                  s.jsx("div", {
                    className: "info-label",
                    children: "Composer",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Richard Rodgers",
                  }),
                  s.jsx("div", { className: "info-label", children: "Lyrics" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Lorenz Hart",
                  }),
                  s.jsx("div", {
                    className: "info-label",
                    children: "Recorded on",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Nov 13, 1962",
                  }),
                  s.jsx("div", {
                    className: "info-label",
                    children: "Recorded by",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "By Rudy Van Gelder",
                  }),
                  s.jsx("div", {
                    className: "info-label",
                    children: "Produced by",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Bob Thiele",
                  }),
                  s.jsx("div", { className: "info-label", children: "Label" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Impulse Records",
                  }),
                ],
              }),
            }),
          ],
        })
      : null,
  k = ({ album: n, songs: a }) => {
    var m;
    const {
        selectedSong: o,
        setSelectedSong: r,
        setSelectedPlaListOrAlbum: u,
      } = f(),
      [i, t] = h.useState(!1),
      x = () => Math.floor(Math.random() * a.length),
      c = () => {
        A("Album added succssefuly to your library", {
          position: "bottom-center",
          hideProgressBar: !0,
        });
      },
      d = () => {
        r(a[0]), u(n);
      };
    return s.jsxs("div", {
      className: "album-header-card",
      children: [
        s.jsx("div", {
          className: "image-container",
          children: s.jsx("img", { src: n.imageSrc }),
        }),
        s.jsxs("div", {
          className: "info",
          children: [
            s.jsx("div", { className: "title", children: n.title }),
            s.jsx("div", { className: "artist", children: n.artist }),
            s.jsxs("div", {
              className: "atrist",
              children: [
                "Album • ",
                (m = n.songs) == null ? void 0 : m.length,
                " Songs",
              ],
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => d(),
              children: o != null && o.isPlaying ? s.jsx(M, {}) : s.jsx(C, {}),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => r(a[x()]),
              children: s.jsx("span", {
                className: "icon icon-shuffle",
                children: s.jsx(y, { iconName: "shuffle" }),
              }),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: c,
              children: s.jsx("span", { className: "icon icon-plus" }),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => t(!0),
              children: s.jsx("span", { className: "icon icon-info" }),
            }),
          ],
        }),
        s.jsx(I, { isOpen: i, onClose: () => t(!1) }),
      ],
    });
  },
  w = b(function () {
    const { selectedSong: a, setSelectedSong: o } = f(),
      { recentlyPlayed: r, sidebarSections: u } = p(),
      [i, t] = h.useState([]),
      x = g(),
      { album: c } = x.state;
    h.useEffect(() => {
      var v;
      const e = r;
      let l = [];
      (v = c == null ? void 0 : c.songs) == null ||
        v.map((N) => l.push(e[N - 1])),
        t(l);
    }, [c]);
    const d = () => (!a || !a.id ? -1 : i.findIndex((e) => e.id === a.id)),
      m = () => {
        const e = d();
        let l;
        e <= 0 ? (l = i[i.length - 1]) : (l = i[e - 1]),
          o({ ...l, isPlaying: (a == null ? void 0 : a.isPlaying) || !1 });
      },
      j = () => {
        const e = d();
        let l;
        e === -1 || e === i.length - 1 ? (l = i[0]) : (l = i[e + 1]),
          o({ ...l, isPlaying: (a == null ? void 0 : a.isPlaying) || !1 });
      };
    return s.jsxs("div", {
      className: "body",
      children: [
        s.jsx(P, {
          logoSrc: "/app/icons/icons/muza.svg",
          logoAlt: "Music Library",
          sections: u,
        }),
        s.jsxs("div", {
          className: "content",
          children: [
            s.jsx(S, {}),
            s.jsxs("main", {
              children: [
                s.jsx(k, { album: c, songs: i }),
                s.jsx("hr", {}),
                s.jsx("div", {
                  className: "album-song-list",
                  children: i.map((e) =>
                    s.jsx(
                      R,
                      {
                        details: e,
                        onClick: () => o(e),
                        isPlaying: e.id === (a == null ? void 0 : a.id),
                      },
                      e.id,
                    ),
                  ),
                }),
                s.jsx("hr", {}),
                a &&
                  s.jsx(L, {
                    details: {
                      audioUrl: a.audioUrl,
                      imageSrc: a.imageSrc,
                      title: a.title,
                      artist: a.artist,
                      album: a.album,
                      year: a.year || new Date().getFullYear(),
                      isPlaying: a.isPlaying,
                      id: a.id,
                    },
                    onUpdate: (e) =>
                      o({ ...a, isPlaying: e.isPlaying, audioUrl: e.audioUrl }),
                    onPrevious: m,
                    onNext: j,
                    onSongEnded: j,
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  });
export { w as default };
