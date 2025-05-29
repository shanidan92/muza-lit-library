import { w as y } from "./with-props-DLs7YAe3.js";
import { o as s, a as l, s as P } from "./chunk-D4RADZKF-D9WvSiRn.js";
import {
  u as w,
  a as M,
  M as A,
  b as k,
  S as C,
  c as E,
} from "./musicStore-DWEG4hyn.js";
const R = ({ details: n, onAlbumClick: i }) =>
    s.jsxs("div", {
      className: "album-details-card",
      children: [
        s.jsx("div", {
          className: "image-container",
          children: s.jsx("img", { src: n.imageSrc, alt: n.title, onClick: i }),
        }),
        s.jsxs("div", {
          className: "info",
          children: [
            s.jsx("div", { className: "title", children: n.title }),
            s.jsx("div", { className: "artist", children: n.artist }),
            s.jsx("div", {
              className: "subtitle",
              children: n.genre && `${n.genre} • `,
            }),
            s.jsxs("div", {
              className: "buttons",
              children: [
                s.jsx("button", {
                  className: "icon-button",
                  children: s.jsx("span", { className: "icon icon-dots" }),
                }),
                s.jsx("button", {
                  className: "icon-button",
                  children: s.jsx("span", { className: "icon icon-info" }),
                }),
                s.jsx("button", {
                  className: "icon-button",
                  children: s.jsx("span", { className: "icon icon-plus" }),
                }),
                s.jsx("button", {
                  className: "icon-button",
                  children: s.jsx("span", {
                    className: "icon icon-shuffle",
                    children: s.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      children: [
                        s.jsx("path", { d: "M16 3h5v5" }),
                        s.jsx("path", { d: "M4 20l16-16" }),
                        s.jsx("path", { d: "M4 4l5 5" }),
                        s.jsx("path", { d: "M21 16v5h-5" }),
                        s.jsx("path", { d: "M15 15l6 6" }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  L = ({ details: n }) =>
    s.jsxs("div", {
      className: "artist-details-card",
      children: [
        s.jsx("div", {
          className: "image-container",
          children: s.jsx("img", { src: n.imageSrc, alt: n.artistName }),
        }),
        s.jsxs("div", {
          className: "info",
          children: [
            s.jsx("div", { className: "title", children: n.artistName }),
            s.jsxs("div", {
              className: "subtitle",
              children: [n.albumsCount, " Albums"],
            }),
          ],
        }),
      ],
    }),
  z = y(function () {
    const {
        selectedSong: i,
        setSelectedSong: t,
        setSelectedPlaListOrAlbum: U,
      } = w(),
      {
        newReleases: h,
        recentlyPlayed: a,
        artists: j,
        setNewReleases: r,
        setRecentlyPlayed: c,
        setArtists: o,
      } = M(),
      [g, d] = l.useState(!0),
      [m, b] = l.useState(null),
      [N, p] = l.useState([]),
      v = P(),
      f = (e) => {
        v("/routes/albumPage", { state: { album: e } });
      },
      u = () => (!i || !i.id ? -1 : a.findIndex((e) => e.id === i.id)),
      S = () => {
        const e = u();
        e <= 0 ? t(a[a.length - 1]) : t(a[e - 1]);
      },
      x = () => {
        const e = u();
        e === -1 || e === a.length - 1 ? t(a[0]) : t(a[e + 1]);
      };
    return (
      l.useEffect(() => {
        fetch("/getAllData")
          .then((e) => {
            if (!e.ok) throw new Error("Network response was not ok");
            return e.json();
          })
          .then((e) => {
            r(e.albums.newReleases),
              c(e.songs),
              o(e.artists),
              p(e.sidebar.sections),
              e.songs.length > 0 && t(e.songs[0]),
              d(!1);
          })
          .catch((e) => {
            b(e.message), d(!1);
          });
      }, [r, c, o, t]),
      g
        ? s.jsx("p", { children: "Loading..." })
        : m
          ? s.jsxs("p", { children: ["Error: ", m] })
          : s.jsxs("div", {
              className: "body",
              children: [
                s.jsx(A, {
                  logoSrc: "app/icons/icons/muza.svg",
                  logoAlt: "Music Library",
                  sections: N,
                }),
                s.jsxs("div", {
                  className: "content",
                  children: [
                    s.jsx(k, {}),
                    s.jsxs("main", {
                      children: [
                        s.jsx("h1", { children: "Home" }),
                        s.jsx("hr", {}),
                        s.jsx("h2", { children: "New Releases" }),
                        s.jsx("div", {
                          className: "album-list",
                          children: h.map((e) =>
                            s.jsx(
                              R,
                              { details: e, onAlbumClick: () => f(e) },
                              e.id,
                            ),
                          ),
                        }),
                        s.jsx("hr", {}),
                        s.jsx("h2", { children: "Recently Played" }),
                        s.jsx("div", {
                          className: "song-list",
                          children: a.map((e) =>
                            s.jsx(
                              C,
                              {
                                details: e,
                                onClick: () => t(e),
                                isPlaying: e.id === (i == null ? void 0 : i.id),
                              },
                              e.id,
                            ),
                          ),
                        }),
                        s.jsx("hr", {}),
                        s.jsx("h2", { children: "Artists" }),
                        s.jsx("div", {
                          className: "album-list",
                          children: j.map((e) =>
                            s.jsx(L, { details: e }, e.id),
                          ),
                        }),
                        i &&
                          s.jsx(E, {
                            details: {
                              audioUrl: i.audioUrl || "",
                              imageSrc: i.imageSrc || "",
                              title: i.title,
                              artist: i.artist || "",
                              album: i.album || "",
                              year: i.year || new Date().getFullYear(),
                              isPlaying: i.isPlaying || !1,
                              id: i.id,
                            },
                            onUpdate: (e) =>
                              t({
                                ...i,
                                isPlaying: e.isPlaying,
                                audioUrl: e.audioUrl,
                              }),
                            onPrevious: S,
                            onNext: x,
                            onSongEnded: x,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })
    );
  });
export { z as default };
