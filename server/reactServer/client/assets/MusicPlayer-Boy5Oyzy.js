import { v as P, a as i, o as n } from "./chunk-DQRVZFIR-BNfO-z-U.js";
var H = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  $ = P.createContext && P.createContext(H),
  A = ["attr", "size", "title"];
function G(e, a) {
  if (e == null) return {};
  var s = K(e, a),
    t,
    c;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (c = 0; c < l.length; c++)
      (t = l[c]),
        !(a.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (s[t] = e[t]);
  }
  return s;
}
function K(e, a) {
  if (e == null) return {};
  var s = {};
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      if (a.indexOf(t) >= 0) continue;
      s[t] = e[t];
    }
  return s;
}
function C() {
  return (
    (C = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s)
              Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
          }
          return e;
        }),
    C.apply(this, arguments)
  );
}
function X(e, a) {
  var s = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a &&
      (t = t.filter(function (c) {
        return Object.getOwnPropertyDescriptor(e, c).enumerable;
      })),
      s.push.apply(s, t);
  }
  return s;
}
function D(e) {
  for (var a = 1; a < arguments.length; a++) {
    var s = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? X(Object(s), !0).forEach(function (t) {
          q(e, t, s[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : X(Object(s)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
          });
  }
  return e;
}
function q(e, a, s) {
  return (
    (a = J(a)),
    a in e
      ? Object.defineProperty(e, a, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[a] = s),
    e
  );
}
function J(e) {
  var a = Q(e, "string");
  return typeof a == "symbol" ? a : a + "";
}
function Q(e, a) {
  if (typeof e != "object" || !e) return e;
  var s = e[Symbol.toPrimitive];
  if (s !== void 0) {
    var t = s.call(e, a);
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(e);
}
function W(e) {
  return (
    e &&
    e.map((a, s) => P.createElement(a.tag, D({ key: s }, a.attr), W(a.child)))
  );
}
function N(e) {
  return (a) => P.createElement(Y, C({ attr: D({}, e.attr) }, a), W(e.child));
}
function Y(e) {
  var a = (s) => {
    var { attr: t, size: c, title: l } = e,
      d = G(e, A),
      h = c || s.size || "1em",
      o;
    return (
      s.className && (o = s.className),
      e.className && (o = (o ? o + " " : "") + e.className),
      P.createElement(
        "svg",
        C(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          s.attr,
          t,
          d,
          {
            className: o,
            style: D(D({ color: e.color || s.color }, s.style), e.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        l && P.createElement("title", null, l),
        e.children,
      )
    );
  };
  return $ !== void 0 ? P.createElement($.Consumer, null, (s) => a(s)) : a(H);
}
function Z(e) {
  return N({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function V(e) {
  return N({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function U(e) {
  return N({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z",
        },
        child: [],
      },
    ],
  })(e);
}
function ee(e) {
  return N({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function te(e) {
  return N({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z",
        },
        child: [],
      },
    ],
  })(e);
}
function re(e) {
  return N({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z",
        },
        child: [],
      },
    ],
  })(e);
}
function se(e) {
  return N({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32l0 32L160 64C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160z",
        },
        child: [],
      },
    ],
  })(e);
}
const ne = ({
    value: e = 75,
    muted: a = !1,
    disabled: s = !1,
    volumeStep: t = 1,
    onVolumeChange: c,
    noSymbol: l = !1,
  }) => {
    const [d, h] = i.useState(a),
      [o, E] = i.useState(!1),
      L = i.useRef(e),
      p = i.useRef(null),
      y = () => {
        s ||
          (d
            ? (h(!1), c == null || c(L.current))
            : ((L.current = e), h(!0), c == null || c(0)));
      },
      O = () =>
        d || e === 0 ? "volume-mute" : e < 50 ? "volume-down" : "volume-up",
      m = (j) => {
        if (s || !p.current) return;
        const x = p.current.getBoundingClientRect(),
          g = 8,
          u = g,
          w = x.width - g,
          S =
            ((Math.max(u, Math.min(w, j.clientX - x.left)) - u) / (w - u)) *
            100,
          r = Math.round(S / t) * t;
        h(!1), c == null || c(r);
      },
      f = (j) => {
        if (!o || !p.current || s) return;
        const x = p.current.getBoundingClientRect(),
          g = 8,
          u = g,
          w = x.width - g,
          S =
            ((Math.max(u, Math.min(w, j.clientX - x.left)) - u) / (w - u)) *
            100,
          r = Math.round(S / t) * t;
        c == null || c(r);
      },
      R = () => {
        s || E(!0);
      },
      M = () => {
        E(!1);
      };
    i.useEffect(
      () => (
        o
          ? (window.addEventListener("mousemove", f),
            window.addEventListener("mouseup", M))
          : (window.removeEventListener("mousemove", f),
            window.removeEventListener("mouseup", M)),
        () => {
          window.removeEventListener("mousemove", f),
            window.removeEventListener("mouseup", M);
        }
      ),
      [o],
    );
    const z = (j) => 8 + (j * 84) / 100;
    return n.jsxs("div", {
      className: `volume-control ${s ? "disabled" : ""}`,
      children: [
        !l &&
          n.jsxs(n.Fragment, {
            children: [
              n.jsx("i", {
                className: "fa-solid fa-speaker volume-icon",
                onClick: y,
              }),
              n.jsx("i", {
                className: `fa-solid fa-${O()} volume-icon`,
                onClick: y,
              }),
            ],
          }),
        n.jsx("div", {
          className: "slider",
          ref: p,
          onClick: m,
          children: n.jsxs("svg", {
            viewBox: "0 0 100 24",
            children: [
              n.jsx("line", {
                className: "track",
                x1: "2",
                y1: "12",
                x2: "98",
                y2: "12",
              }),
              n.jsx("line", {
                className: "fill",
                x1: "2",
                y1: "12",
                x2: z(e),
                y2: "12",
              }),
              n.jsx("circle", {
                className: "handle",
                cx: z(e),
                cy: "12",
                r: "8",
                onMouseDown: R,
              }),
            ],
          }),
        }),
      ],
    });
  },
  ce = ({
    details: e,
    onPrevious: a,
    onNext: s,
    onUpdate: t,
    onSongEnded: c,
  }) => {
    const l = i.useRef(null),
      [d, h] = i.useState(0),
      [o, E] = i.useState(0),
      [L, p] = i.useState(75),
      [y, O] = i.useState(!1),
      [m, f] = i.useState(e.isPlaying || !1),
      [R, M] = i.useState(!1),
      [z, j] = i.useState(!1),
      x = (r) => {
        const v = Math.floor(r / 60),
          b = Math.floor(r % 60)
            .toString()
            .padStart(2, "0");
        return `${v}:${b}`;
      },
      g = d > 0 ? (o / d) * 100 : 0,
      u = () => {
        const r = l.current;
        r &&
          r.play().catch((v) => {
            console.error("Error playing audio:", v),
              f(!1),
              t == null || t({ ...e, isPlaying: !1 });
          });
      },
      w = (r) => {
        p(r), l.current && (l.current.volume = r / 100);
      },
      T = (r) => {
        const v = l.current;
        if (!v || d === 0) return;
        const b = r.currentTarget.getBoundingClientRect(),
          k = ((r.clientX - b.left) / b.width) * d;
        (v.currentTime = k), E(k);
      },
      S = () => {
        if (y) return;
        const r = !m;
        f(r), t == null || t({ ...e, isPlaying: r });
      };
    return (
      i.useEffect(() => {
        f(e.isPlaying || !1);
      }, [e.isPlaying]),
      i.useEffect(() => {
        const r = l.current;
        r && (m && !y ? u() : m || r.pause());
      }, [m, y]),
      i.useEffect(() => {
        const r = l.current;
        if (!r || !e.audioUrl) return;
        const v = () => {
            h(r.duration), O(!1), m && u();
          },
          b = () => E(r.currentTime),
          F = () => {
            f(!1), t == null || t({ ...e, isPlaying: !1 }), c == null || c();
          },
          k = () => {
            f(!0), t == null || t({ ...e, isPlaying: !0 });
          },
          I = () => {
            f(!1), t == null || t({ ...e, isPlaying: !1 });
          },
          B = () => O(!0),
          _ = () => O(!1);
        return (
          r.addEventListener("loadeddata", v),
          r.addEventListener("timeupdate", b),
          r.addEventListener("ended", F),
          r.addEventListener("play", k),
          r.addEventListener("pause", I),
          r.addEventListener("loadstart", B),
          r.addEventListener("waiting", B),
          r.addEventListener("canplay", _),
          (r.src = e.audioUrl),
          (r.volume = L / 100),
          r.load(),
          m && u(),
          () => {
            r.pause(),
              r.removeEventListener("loadeddata", v),
              r.removeEventListener("timeupdate", b),
              r.removeEventListener("ended", F),
              r.removeEventListener("play", k),
              r.removeEventListener("pause", I),
              r.removeEventListener("loadstart", B),
              r.removeEventListener("waiting", B),
              r.removeEventListener("canplay", _);
          }
        );
      }, [e.audioUrl]),
      n.jsxs("div", {
        className: "music-player",
        children: [
          n.jsx("audio", { ref: l, hidden: !0 }),
          n.jsxs("div", {
            className: "player-info",
            children: [
              n.jsx("img", {
                className: "album-art",
                src: e.imageSrc,
                alt: `${e.title} album cover`,
              }),
              n.jsxs("div", {
                className: "track-info",
                children: [
                  n.jsx("h2", { className: "track-title", children: e.title }),
                  n.jsx("p", { className: "track-artist", children: e.artist }),
                  n.jsxs("div", {
                    className: "track-details",
                    children: [
                      n.jsx("span", { children: e.album }),
                      n.jsx("span", { className: "separator", children: "•" }),
                      n.jsx("span", { children: e.year }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          n.jsxs("div", {
            className: "player-controls",
            children: [
              n.jsxs("div", {
                className: "progress-section",
                children: [
                  n.jsx("div", {
                    className: "progress-bar",
                    onClick: T,
                    children: n.jsx("div", {
                      className: "progress-fill",
                      style: { width: `${g}%` },
                    }),
                  }),
                  n.jsxs("div", {
                    className: "time-display",
                    children: [
                      n.jsx("span", { children: x(o) }),
                      n.jsx("span", { children: x(d - o) }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "controls-row",
                children: [
                  n.jsxs("div", {
                    className: "playback-controls",
                    children: [
                      n.jsx("button", {
                        className: `control-btn shuffle ${R ? "active" : ""}`,
                        onClick: () => M(!R),
                        "aria-label": "Shuffle",
                        children: n.jsx(te, {}),
                      }),
                      n.jsx("button", {
                        className: "control-btn previous",
                        onClick: a,
                        "aria-label": "Previous track",
                        children: n.jsx(Z, {}),
                      }),
                      n.jsx("button", {
                        className: "control-btn play",
                        onClick: S,
                        "aria-label": "Play or pause",
                        children: y
                          ? n.jsx(re, { className: "spinner" })
                          : m
                            ? n.jsx(U, {})
                            : n.jsx(ee, {}),
                      }),
                      n.jsx("button", {
                        className: "control-btn next",
                        onClick: s,
                        "aria-label": "Next track",
                        children: n.jsx(V, {}),
                      }),
                      n.jsx("button", {
                        className: `control-btn repeat ${z ? "active" : ""}`,
                        onClick: () => j(!z),
                        "aria-label": "Repeat",
                        children: n.jsx(se, {}),
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className: "volume-section",
                    children: n.jsx(ne, {
                      noSymbol: !0,
                      value: L,
                      onVolumeChange: w,
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
export { U as F, ce as M, ee as a };
