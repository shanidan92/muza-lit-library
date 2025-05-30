import { w as b } from "./with-props-B2_f2fEw.js";
import { o as s, a as x, t as g } from "./chunk-DQRVZFIR-BNfO-z-U.js";
import { b as p, u as y, M as S, a as P } from "./main-C56J1lNH.js";
import { u as f } from "./userStore-Co03IV9v.js";
import { F as M, a as C, M as L } from "./MusicPlayer-D3drmrpJ.js";
import { y as A } from "./index-Bs9qsKfp.js";
import { S as R } from "./SongLine-CdvDBH4t.js";
const I = ({ isOpen: n, onClose: e }) =>
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
                  onClick: e,
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
  k = ({ album: n, songs: e }) => {
    var d;
    const {
        selectedSong: l,
        setSelectedSong: i,
        setSelectedPlaListOrAlbum: m,
      } = f(),
      [c, r] = x.useState(!1),
      u = () => Math.floor(Math.random() * e.length),
      o = () => {
        A("Album added succssefuly to your library", {
          position: "bottom-center",
          hideProgressBar: !0,
        });
      },
      t = () => {
        i(e[0]), m(n);
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
                (d = n.songs) == null ? void 0 : d.length,
                " Songs",
              ],
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => t(),
              children: l != null && l.isPlaying ? s.jsx(M, {}) : s.jsx(C, {}),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => i(e[u()]),
              children: s.jsx("span", {
                className: "icon icon-shuffle",
                children: s.jsx(p, { iconName: "shuffle" }),
              }),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: o,
              children: s.jsx("span", { className: "icon icon-plus" }),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => r(!0),
              children: s.jsx("span", { className: "icon icon-info" }),
            }),
          ],
        }),
        s.jsx(I, { isOpen: c, onClose: () => r(!1) }),
      ],
    });
  },
  w = b(function () {
    const { selectedSong: e, setSelectedSong: l } = f(),
      { recentlyPlayed: i, sidebarSections: m } = y(),
      [c, r] = x.useState([]),
      u = g(),
      { album: o } = u.state;
    x.useEffect(() => {
      var v;
      const a = i;
      let j = [];
      (v = o == null ? void 0 : o.songs) == null ||
        v.map((N) => j.push(a[N - 1])),
        r(j);
    }, [o]);
    const t = () => (!e || !e.id ? -1 : i.findIndex((a) => a.id === e.id)),
      d = () => {
        const a = t();
        a <= 0 ? l(i[i.length - 1]) : l(i[a - 1]);
      },
      h = () => {
        const a = t();
        a === -1 || a === i.length - 1 ? l(i[0]) : l(i[a + 1]);
      };
    return s.jsxs("div", {
      className: "body",
      children: [
        s.jsx(S, {
          logoSrc: "/app/icons/icons/muza.svg",
          logoAlt: "Music Library",
          sections: m,
        }),
        s.jsxs("div", {
          className: "content",
          children: [
            s.jsx(P, {}),
            s.jsxs("main", {
              children: [
                s.jsx(k, { album: o, songs: c }),
                s.jsx("hr", {}),
                s.jsx("div", {
                  className: "album-song-list",
                  children: c.map((a) =>
                    s.jsx(
                      R,
                      {
                        details: a,
                        onClick: () => l(a),
                        isPlaying: a.id === (e == null ? void 0 : e.id),
                      },
                      a.id,
                    ),
                  ),
                }),
                s.jsx("hr", {}),
                e &&
                  s.jsx(L, {
                    details: {
                      audioUrl: e.audioUrl,
                      imageSrc: e.imageSrc,
                      title: e.title,
                      artist: e.artist,
                      album: e.album,
                      year: e.year || new Date().getFullYear(),
                      isPlaying: e.isPlaying,
                      id: e.id,
                    },
                    onUpdate: (a) =>
                      l({ ...e, isPlaying: a.isPlaying, audioUrl: a.audioUrl }),
                    onPrevious: d,
                    onNext: h,
                    onSongEnded: h,
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  });
export { w as default };
