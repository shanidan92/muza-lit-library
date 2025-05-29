function va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var hr = { exports: {} },
  Tt = {},
  mr = { exports: {} },
  Mt = { exports: {} };
Mt.exports;
var qr;
function ga() {
  return (
    qr ||
      ((qr = 1),
      (function (e, t) {
        /**
         * @license React
         * react.development.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ (function () {
          function r(l, w) {
            Object.defineProperty(o.prototype, l, {
              get: function () {
                console.warn(
                  "%s(...) is deprecated in plain JavaScript React classes. %s",
                  w[0],
                  w[1],
                );
              },
            });
          }
          function a(l) {
            return l === null || typeof l != "object"
              ? null
              : ((l = (Ae && l[Ae]) || l["@@iterator"]),
                typeof l == "function" ? l : null);
          }
          function n(l, w) {
            l =
              ((l = l.constructor) && (l.displayName || l.name)) ||
              "ReactClass";
            var P = l + "." + w;
            vt[P] ||
              (console.error(
                "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
                w,
                l,
              ),
              (vt[P] = !0));
          }
          function o(l, w, P) {
            (this.props = l),
              (this.context = w),
              (this.refs = gt),
              (this.updater = P || Ht);
          }
          function s() {}
          function u(l, w, P) {
            (this.props = l),
              (this.context = w),
              (this.refs = gt),
              (this.updater = P || Ht);
          }
          function i(l) {
            return "" + l;
          }
          function c(l) {
            try {
              i(l);
              var w = !1;
            } catch {
              w = !0;
            }
            if (w) {
              w = console;
              var P = w.error,
                O =
                  (typeof Symbol == "function" &&
                    Symbol.toStringTag &&
                    l[Symbol.toStringTag]) ||
                  l.constructor.name ||
                  "Object";
              return (
                P.call(
                  w,
                  "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
                  O,
                ),
                i(l)
              );
            }
          }
          function d(l) {
            if (l == null) return null;
            if (typeof l == "function")
              return l.$$typeof === cr ? null : l.displayName || l.name || null;
            if (typeof l == "string") return l;
            switch (l) {
              case C:
                return "Fragment";
              case ne:
                return "Profiler";
              case j:
                return "StrictMode";
              case Se:
                return "Suspense";
              case Qe:
                return "SuspenseList";
              case de:
                return "Activity";
            }
            if (typeof l == "object")
              switch (
                (typeof l.tag == "number" &&
                  console.error(
                    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
                  ),
                l.$$typeof)
              ) {
                case pe:
                  return "Portal";
                case ye:
                  return (l.displayName || "Context") + ".Provider";
                case oe:
                  return (l._context.displayName || "Context") + ".Consumer";
                case Ee:
                  var w = l.render;
                  return (
                    (l = l.displayName),
                    l ||
                      ((l = w.displayName || w.name || ""),
                      (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
                    l
                  );
                case ce:
                  return (
                    (w = l.displayName || null),
                    w !== null ? w : d(l.type) || "Memo"
                  );
                case Ce:
                  (w = l._payload), (l = l._init);
                  try {
                    return d(l(w));
                  } catch {}
              }
            return null;
          }
          function p(l) {
            if (l === C) return "<>";
            if (typeof l == "object" && l !== null && l.$$typeof === Ce)
              return "<...>";
            try {
              var w = d(l);
              return w ? "<" + w + ">" : "<...>";
            } catch {
              return "<...>";
            }
          }
          function h() {
            var l = Q.A;
            return l === null ? null : l.getOwner();
          }
          function g() {
            return Error("react-stack-top-frame");
          }
          function E(l) {
            if (ut.call(l, "key")) {
              var w = Object.getOwnPropertyDescriptor(l, "key").get;
              if (w && w.isReactWarning) return !1;
            }
            return l.key !== void 0;
          }
          function _(l, w) {
            function P() {
              We ||
                ((We = !0),
                console.error(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
                  w,
                ));
            }
            (P.isReactWarning = !0),
              Object.defineProperty(l, "key", { get: P, configurable: !0 });
          }
          function S() {
            var l = d(this.type);
            return (
              ct[l] ||
                ((ct[l] = !0),
                console.error(
                  "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
                )),
              (l = this.props.ref),
              l !== void 0 ? l : null
            );
          }
          function R(l, w, P, O, I, Z, J, re) {
            return (
              (P = Z.ref),
              (l = { $$typeof: we, type: l, key: w, props: Z, _owner: I }),
              (P !== void 0 ? P : null) !== null
                ? Object.defineProperty(l, "ref", { enumerable: !1, get: S })
                : Object.defineProperty(l, "ref", {
                    enumerable: !1,
                    value: null,
                  }),
              (l._store = {}),
              Object.defineProperty(l._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(l, "_debugInfo", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(l, "_debugStack", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: J,
              }),
              Object.defineProperty(l, "_debugTask", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: re,
              }),
              Object.freeze && (Object.freeze(l.props), Object.freeze(l)),
              l
            );
          }
          function x(l, w) {
            return (
              (w = R(
                l.type,
                w,
                void 0,
                void 0,
                l._owner,
                l.props,
                l._debugStack,
                l._debugTask,
              )),
              l._store && (w._store.validated = l._store.validated),
              w
            );
          }
          function D(l) {
            return typeof l == "object" && l !== null && l.$$typeof === we;
          }
          function k(l) {
            var w = { "=": "=0", ":": "=2" };
            return (
              "$" +
              l.replace(/[=:]/g, function (P) {
                return w[P];
              })
            );
          }
          function T(l, w) {
            return typeof l == "object" && l !== null && l.key != null
              ? (c(l.key), k("" + l.key))
              : w.toString(36);
          }
          function y() {}
          function N(l) {
            switch (l.status) {
              case "fulfilled":
                return l.value;
              case "rejected":
                throw l.reason;
              default:
                switch (
                  (typeof l.status == "string"
                    ? l.then(y, y)
                    : ((l.status = "pending"),
                      l.then(
                        function (w) {
                          l.status === "pending" &&
                            ((l.status = "fulfilled"), (l.value = w));
                        },
                        function (w) {
                          l.status === "pending" &&
                            ((l.status = "rejected"), (l.reason = w));
                        },
                      )),
                  l.status)
                ) {
                  case "fulfilled":
                    return l.value;
                  case "rejected":
                    throw l.reason;
                }
            }
            throw l;
          }
          function H(l, w, P, O, I) {
            var Z = typeof l;
            (Z === "undefined" || Z === "boolean") && (l = null);
            var J = !1;
            if (l === null) J = !0;
            else
              switch (Z) {
                case "bigint":
                case "string":
                case "number":
                  J = !0;
                  break;
                case "object":
                  switch (l.$$typeof) {
                    case we:
                    case pe:
                      J = !0;
                      break;
                    case Ce:
                      return (J = l._init), H(J(l._payload), w, P, O, I);
                  }
              }
            if (J) {
              (J = l), (I = I(J));
              var re = O === "" ? "." + T(J, 0) : O;
              return (
                zt(I)
                  ? ((P = ""),
                    re != null && (P = re.replace(dt, "$&/") + "/"),
                    H(I, w, P, "", function (He) {
                      return He;
                    }))
                  : I != null &&
                    (D(I) &&
                      (I.key != null && ((J && J.key === I.key) || c(I.key)),
                      (P = x(
                        I,
                        P +
                          (I.key == null || (J && J.key === I.key)
                            ? ""
                            : ("" + I.key).replace(dt, "$&/") + "/") +
                          re,
                      )),
                      O !== "" &&
                        J != null &&
                        D(J) &&
                        J.key == null &&
                        J._store &&
                        !J._store.validated &&
                        (P._store.validated = 2),
                      (I = P)),
                    w.push(I)),
                1
              );
            }
            if (((J = 0), (re = O === "" ? "." : O + ":"), zt(l)))
              for (var q = 0; q < l.length; q++)
                (O = l[q]), (Z = re + T(O, q)), (J += H(O, w, P, Z, I));
            else if (((q = a(l)), typeof q == "function"))
              for (
                q === l.entries &&
                  (Et ||
                    console.warn(
                      "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
                    ),
                  (Et = !0)),
                  l = q.call(l),
                  q = 0;
                !(O = l.next()).done;

              )
                (O = O.value), (Z = re + T(O, q++)), (J += H(O, w, P, Z, I));
            else if (Z === "object") {
              if (typeof l.then == "function") return H(N(l), w, P, O, I);
              throw (
                ((w = String(l)),
                Error(
                  "Objects are not valid as a React child (found: " +
                    (w === "[object Object]"
                      ? "object with keys {" + Object.keys(l).join(", ") + "}"
                      : w) +
                    "). If you meant to render a collection of children, use an array instead.",
                ))
              );
            }
            return J;
          }
          function z(l, w, P) {
            if (l == null) return l;
            var O = [],
              I = 0;
            return (
              H(l, O, "", "", function (Z) {
                return w.call(P, Z, I++);
              }),
              O
            );
          }
          function ie(l) {
            if (l._status === -1) {
              var w = l._result;
              (w = w()),
                w.then(
                  function (P) {
                    (l._status === 0 || l._status === -1) &&
                      ((l._status = 1), (l._result = P));
                  },
                  function (P) {
                    (l._status === 0 || l._status === -1) &&
                      ((l._status = 2), (l._result = P));
                  },
                ),
                l._status === -1 && ((l._status = 0), (l._result = w));
            }
            if (l._status === 1)
              return (
                (w = l._result),
                w === void 0 &&
                  console.error(
                    `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
                    w,
                  ),
                "default" in w ||
                  console.error(
                    `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                    w,
                  ),
                w.default
              );
            throw l._result;
          }
          function W() {
            var l = Q.H;
            return (
              l === null &&
                console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),
              l
            );
          }
          function ge() {}
          function K(l) {
            if (et === null)
              try {
                var w = ("require" + Math.random()).slice(0, 7);
                et = (e && e[w]).call(e, "timers").setImmediate;
              } catch {
                et = function (O) {
                  Ie === !1 &&
                    ((Ie = !0),
                    typeof MessageChannel > "u" &&
                      console.error(
                        "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.",
                      ));
                  var I = new MessageChannel();
                  (I.port1.onmessage = O), I.port2.postMessage(void 0);
                };
              }
            return et(l);
          }
          function te(l) {
            return 1 < l.length && typeof AggregateError == "function"
              ? new AggregateError(l)
              : l[0];
          }
          function ue(l, w) {
            w !== tt - 1 &&
              console.error(
                "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ",
              ),
              (tt = w);
          }
          function G(l, w, P) {
            var O = Q.actQueue;
            if (O !== null)
              if (O.length !== 0)
                try {
                  me(O),
                    K(function () {
                      return G(l, w, P);
                    });
                  return;
                } catch (I) {
                  Q.thrownErrors.push(I);
                }
              else Q.actQueue = null;
            0 < Q.thrownErrors.length
              ? ((O = te(Q.thrownErrors)), (Q.thrownErrors.length = 0), P(O))
              : w(l);
          }
          function me(l) {
            if (!bt) {
              bt = !0;
              var w = 0;
              try {
                for (; w < l.length; w++) {
                  var P = l[w];
                  do {
                    Q.didUsePromise = !1;
                    var O = P(!1);
                    if (O !== null) {
                      if (Q.didUsePromise) {
                        (l[w] = P), l.splice(0, w);
                        return;
                      }
                      P = O;
                    } else break;
                  } while (!0);
                }
                l.length = 0;
              } catch (I) {
                l.splice(0, w + 1), Q.thrownErrors.push(I);
              } finally {
                bt = !1;
              }
            }
          }
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
          var we = Symbol.for("react.transitional.element"),
            pe = Symbol.for("react.portal"),
            C = Symbol.for("react.fragment"),
            j = Symbol.for("react.strict_mode"),
            ne = Symbol.for("react.profiler"),
            oe = Symbol.for("react.consumer"),
            ye = Symbol.for("react.context"),
            Ee = Symbol.for("react.forward_ref"),
            Se = Symbol.for("react.suspense"),
            Qe = Symbol.for("react.suspense_list"),
            ce = Symbol.for("react.memo"),
            Ce = Symbol.for("react.lazy"),
            de = Symbol.for("react.activity"),
            Ae = Symbol.iterator,
            vt = {},
            Ht = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function (l) {
                n(l, "forceUpdate");
              },
              enqueueReplaceState: function (l) {
                n(l, "replaceState");
              },
              enqueueSetState: function (l) {
                n(l, "setState");
              },
            },
            je = Object.assign,
            gt = {};
          Object.freeze(gt),
            (o.prototype.isReactComponent = {}),
            (o.prototype.setState = function (l, w) {
              if (typeof l != "object" && typeof l != "function" && l != null)
                throw Error(
                  "takes an object of state variables to update or a function which returns an object of state variables.",
                );
              this.updater.enqueueSetState(this, l, w, "setState");
            }),
            (o.prototype.forceUpdate = function (l) {
              this.updater.enqueueForceUpdate(this, l, "forceUpdate");
            });
          var _e = {
              isMounted: [
                "isMounted",
                "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
              ],
              replaceState: [
                "replaceState",
                "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
              ],
            },
            Ze;
          for (Ze in _e) _e.hasOwnProperty(Ze) && r(Ze, _e[Ze]);
          (s.prototype = o.prototype),
            (_e = u.prototype = new s()),
            (_e.constructor = u),
            je(_e, o.prototype),
            (_e.isPureReactComponent = !0);
          var zt = Array.isArray,
            cr = Symbol.for("react.client.reference"),
            Q = {
              H: null,
              A: null,
              T: null,
              S: null,
              V: null,
              actQueue: null,
              isBatchingLegacy: !1,
              didScheduleLegacyUpdate: !1,
              didUsePromise: !1,
              thrownErrors: [],
              getCurrentStack: null,
              recentlyCreatedOwnerStacks: 0,
            },
            ut = Object.prototype.hasOwnProperty,
            Fe = console.createTask
              ? console.createTask
              : function () {
                  return null;
                };
          _e = {
            "react-stack-bottom-frame": function (l) {
              return l();
            },
          };
          var We,
            wt,
            ct = {},
            Ue = _e["react-stack-bottom-frame"].bind(_e, g)(),
            Ne = Fe(p(g)),
            Et = !1,
            dt = /\/+/g,
            Yt =
              typeof reportError == "function"
                ? reportError
                : function (l) {
                    if (
                      typeof window == "object" &&
                      typeof window.ErrorEvent == "function"
                    ) {
                      var w = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                          typeof l == "object" &&
                          l !== null &&
                          typeof l.message == "string"
                            ? String(l.message)
                            : String(l),
                        error: l,
                      });
                      if (!window.dispatchEvent(w)) return;
                    } else if (
                      typeof process == "object" &&
                      typeof process.emit == "function"
                    ) {
                      process.emit("uncaughtException", l);
                      return;
                    }
                    console.error(l);
                  },
            Ie = !1,
            et = null,
            tt = 0,
            rt = !1,
            bt = !1,
            Rt =
              typeof queueMicrotask == "function"
                ? function (l) {
                    queueMicrotask(function () {
                      return queueMicrotask(l);
                    });
                  }
                : K;
          (_e = Object.freeze({
            __proto__: null,
            c: function (l) {
              return W().useMemoCache(l);
            },
          })),
            (t.Children = {
              map: z,
              forEach: function (l, w, P) {
                z(
                  l,
                  function () {
                    w.apply(this, arguments);
                  },
                  P,
                );
              },
              count: function (l) {
                var w = 0;
                return (
                  z(l, function () {
                    w++;
                  }),
                  w
                );
              },
              toArray: function (l) {
                return (
                  z(l, function (w) {
                    return w;
                  }) || []
                );
              },
              only: function (l) {
                if (!D(l))
                  throw Error(
                    "React.Children.only expected to receive a single React element child.",
                  );
                return l;
              },
            }),
            (t.Component = o),
            (t.Fragment = C),
            (t.Profiler = ne),
            (t.PureComponent = u),
            (t.StrictMode = j),
            (t.Suspense = Se),
            (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
              Q),
            (t.__COMPILER_RUNTIME = _e),
            (t.act = function (l) {
              var w = Q.actQueue,
                P = tt;
              tt++;
              var O = (Q.actQueue = w !== null ? w : []),
                I = !1;
              try {
                var Z = l();
              } catch (q) {
                Q.thrownErrors.push(q);
              }
              if (0 < Q.thrownErrors.length)
                throw (
                  (ue(w, P),
                  (l = te(Q.thrownErrors)),
                  (Q.thrownErrors.length = 0),
                  l)
                );
              if (
                Z !== null &&
                typeof Z == "object" &&
                typeof Z.then == "function"
              ) {
                var J = Z;
                return (
                  Rt(function () {
                    I ||
                      rt ||
                      ((rt = !0),
                      console.error(
                        "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);",
                      ));
                  }),
                  {
                    then: function (q, He) {
                      (I = !0),
                        J.then(
                          function (Ve) {
                            if ((ue(w, P), P === 0)) {
                              try {
                                me(O),
                                  K(function () {
                                    return G(Ve, q, He);
                                  });
                              } catch (v) {
                                Q.thrownErrors.push(v);
                              }
                              if (0 < Q.thrownErrors.length) {
                                var f = te(Q.thrownErrors);
                                (Q.thrownErrors.length = 0), He(f);
                              }
                            } else q(Ve);
                          },
                          function (Ve) {
                            ue(w, P),
                              0 < Q.thrownErrors.length &&
                                ((Ve = te(Q.thrownErrors)),
                                (Q.thrownErrors.length = 0)),
                              He(Ve);
                          },
                        );
                    },
                  }
                );
              }
              var re = Z;
              if (
                (ue(w, P),
                P === 0 &&
                  (me(O),
                  O.length !== 0 &&
                    Rt(function () {
                      I ||
                        rt ||
                        ((rt = !0),
                        console.error(
                          "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)",
                        ));
                    }),
                  (Q.actQueue = null)),
                0 < Q.thrownErrors.length)
              )
                throw (
                  ((l = te(Q.thrownErrors)), (Q.thrownErrors.length = 0), l)
                );
              return {
                then: function (q, He) {
                  (I = !0),
                    P === 0
                      ? ((Q.actQueue = O),
                        K(function () {
                          return G(re, q, He);
                        }))
                      : q(re);
                },
              };
            }),
            (t.cache = function (l) {
              return function () {
                return l.apply(null, arguments);
              };
            }),
            (t.captureOwnerStack = function () {
              var l = Q.getCurrentStack;
              return l === null ? null : l();
            }),
            (t.cloneElement = function (l, w, P) {
              if (l == null)
                throw Error(
                  "The argument must be a React element, but you passed " +
                    l +
                    ".",
                );
              var O = je({}, l.props),
                I = l.key,
                Z = l._owner;
              if (w != null) {
                var J;
                e: {
                  if (
                    ut.call(w, "ref") &&
                    (J = Object.getOwnPropertyDescriptor(w, "ref").get) &&
                    J.isReactWarning
                  ) {
                    J = !1;
                    break e;
                  }
                  J = w.ref !== void 0;
                }
                J && (Z = h()), E(w) && (c(w.key), (I = "" + w.key));
                for (re in w)
                  !ut.call(w, re) ||
                    re === "key" ||
                    re === "__self" ||
                    re === "__source" ||
                    (re === "ref" && w.ref === void 0) ||
                    (O[re] = w[re]);
              }
              var re = arguments.length - 2;
              if (re === 1) O.children = P;
              else if (1 < re) {
                J = Array(re);
                for (var q = 0; q < re; q++) J[q] = arguments[q + 2];
                O.children = J;
              }
              for (
                O = R(
                  l.type,
                  I,
                  void 0,
                  void 0,
                  Z,
                  O,
                  l._debugStack,
                  l._debugTask,
                ),
                  I = 2;
                I < arguments.length;
                I++
              )
                (Z = arguments[I]),
                  D(Z) && Z._store && (Z._store.validated = 1);
              return O;
            }),
            (t.createContext = function (l) {
              return (
                (l = {
                  $$typeof: ye,
                  _currentValue: l,
                  _currentValue2: l,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                }),
                (l.Provider = l),
                (l.Consumer = { $$typeof: oe, _context: l }),
                (l._currentRenderer = null),
                (l._currentRenderer2 = null),
                l
              );
            }),
            (t.createElement = function (l, w, P) {
              for (var O = 2; O < arguments.length; O++) {
                var I = arguments[O];
                D(I) && I._store && (I._store.validated = 1);
              }
              if (((O = {}), (I = null), w != null))
                for (q in (wt ||
                  !("__self" in w) ||
                  "key" in w ||
                  ((wt = !0),
                  console.warn(
                    "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform",
                  )),
                E(w) && (c(w.key), (I = "" + w.key)),
                w))
                  ut.call(w, q) &&
                    q !== "key" &&
                    q !== "__self" &&
                    q !== "__source" &&
                    (O[q] = w[q]);
              var Z = arguments.length - 2;
              if (Z === 1) O.children = P;
              else if (1 < Z) {
                for (var J = Array(Z), re = 0; re < Z; re++)
                  J[re] = arguments[re + 2];
                Object.freeze && Object.freeze(J), (O.children = J);
              }
              if (l && l.defaultProps)
                for (q in ((Z = l.defaultProps), Z))
                  O[q] === void 0 && (O[q] = Z[q]);
              I &&
                _(
                  O,
                  typeof l == "function"
                    ? l.displayName || l.name || "Unknown"
                    : l,
                );
              var q = 1e4 > Q.recentlyCreatedOwnerStacks++;
              return R(
                l,
                I,
                void 0,
                void 0,
                h(),
                O,
                q ? Error("react-stack-top-frame") : Ue,
                q ? Fe(p(l)) : Ne,
              );
            }),
            (t.createRef = function () {
              var l = { current: null };
              return Object.seal(l), l;
            }),
            (t.forwardRef = function (l) {
              l != null && l.$$typeof === ce
                ? console.error(
                    "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).",
                  )
                : typeof l != "function"
                  ? console.error(
                      "forwardRef requires a render function but was given %s.",
                      l === null ? "null" : typeof l,
                    )
                  : l.length !== 0 &&
                    l.length !== 2 &&
                    console.error(
                      "forwardRef render functions accept exactly two parameters: props and ref. %s",
                      l.length === 1
                        ? "Did you forget to use the ref parameter?"
                        : "Any additional parameter will be undefined.",
                    ),
                l != null &&
                  l.defaultProps != null &&
                  console.error(
                    "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?",
                  );
              var w = { $$typeof: Ee, render: l },
                P;
              return (
                Object.defineProperty(w, "displayName", {
                  enumerable: !1,
                  configurable: !0,
                  get: function () {
                    return P;
                  },
                  set: function (O) {
                    (P = O),
                      l.name ||
                        l.displayName ||
                        (Object.defineProperty(l, "name", { value: O }),
                        (l.displayName = O));
                  },
                }),
                w
              );
            }),
            (t.isValidElement = D),
            (t.lazy = function (l) {
              return {
                $$typeof: Ce,
                _payload: { _status: -1, _result: l },
                _init: ie,
              };
            }),
            (t.memo = function (l, w) {
              l == null &&
                console.error(
                  "memo: The first argument must be a component. Instead received: %s",
                  l === null ? "null" : typeof l,
                ),
                (w = {
                  $$typeof: ce,
                  type: l,
                  compare: w === void 0 ? null : w,
                });
              var P;
              return (
                Object.defineProperty(w, "displayName", {
                  enumerable: !1,
                  configurable: !0,
                  get: function () {
                    return P;
                  },
                  set: function (O) {
                    (P = O),
                      l.name ||
                        l.displayName ||
                        (Object.defineProperty(l, "name", { value: O }),
                        (l.displayName = O));
                  },
                }),
                w
              );
            }),
            (t.startTransition = function (l) {
              var w = Q.T,
                P = {};
              (Q.T = P), (P._updatedFibers = new Set());
              try {
                var O = l(),
                  I = Q.S;
                I !== null && I(P, O),
                  typeof O == "object" &&
                    O !== null &&
                    typeof O.then == "function" &&
                    O.then(ge, Yt);
              } catch (Z) {
                Yt(Z);
              } finally {
                w === null &&
                  P._updatedFibers &&
                  ((l = P._updatedFibers.size),
                  P._updatedFibers.clear(),
                  10 < l &&
                    console.warn(
                      "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
                    )),
                  (Q.T = w);
              }
            }),
            (t.unstable_useCacheRefresh = function () {
              return W().useCacheRefresh();
            }),
            (t.use = function (l) {
              return W().use(l);
            }),
            (t.useActionState = function (l, w, P) {
              return W().useActionState(l, w, P);
            }),
            (t.useCallback = function (l, w) {
              return W().useCallback(l, w);
            }),
            (t.useContext = function (l) {
              var w = W();
              return (
                l.$$typeof === oe &&
                  console.error(
                    "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?",
                  ),
                w.useContext(l)
              );
            }),
            (t.useDebugValue = function (l, w) {
              return W().useDebugValue(l, w);
            }),
            (t.useDeferredValue = function (l, w) {
              return W().useDeferredValue(l, w);
            }),
            (t.useEffect = function (l, w, P) {
              l == null &&
                console.warn(
                  "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?",
                );
              var O = W();
              if (typeof P == "function")
                throw Error(
                  "useEffect CRUD overload is not enabled in this build of React.",
                );
              return O.useEffect(l, w);
            }),
            (t.useId = function () {
              return W().useId();
            }),
            (t.useImperativeHandle = function (l, w, P) {
              return W().useImperativeHandle(l, w, P);
            }),
            (t.useInsertionEffect = function (l, w) {
              return (
                l == null &&
                  console.warn(
                    "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?",
                  ),
                W().useInsertionEffect(l, w)
              );
            }),
            (t.useLayoutEffect = function (l, w) {
              return (
                l == null &&
                  console.warn(
                    "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?",
                  ),
                W().useLayoutEffect(l, w)
              );
            }),
            (t.useMemo = function (l, w) {
              return W().useMemo(l, w);
            }),
            (t.useOptimistic = function (l, w) {
              return W().useOptimistic(l, w);
            }),
            (t.useReducer = function (l, w, P) {
              return W().useReducer(l, w, P);
            }),
            (t.useRef = function (l) {
              return W().useRef(l);
            }),
            (t.useState = function (l) {
              return W().useState(l);
            }),
            (t.useSyncExternalStore = function (l, w, P) {
              return W().useSyncExternalStore(l, w, P);
            }),
            (t.useTransition = function () {
              return W().useTransition();
            }),
            (t.version = "19.1.0"),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                Error(),
              );
        })();
      })(Mt, Mt.exports)),
    Mt.exports
  );
}
var Kr;
function Ln() {
  return Kr || ((Kr = 1), (mr.exports = ga())), mr.exports;
}
var Xr;
function wa() {
  if (Xr) return Tt;
  Xr = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      function e(C) {
        if (C == null) return null;
        if (typeof C == "function")
          return C.$$typeof === ie ? null : C.displayName || C.name || null;
        if (typeof C == "string") return C;
        switch (C) {
          case _:
            return "Fragment";
          case R:
            return "Profiler";
          case S:
            return "StrictMode";
          case T:
            return "Suspense";
          case y:
            return "SuspenseList";
          case z:
            return "Activity";
        }
        if (typeof C == "object")
          switch (
            (typeof C.tag == "number" &&
              console.error(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
              ),
            C.$$typeof)
          ) {
            case E:
              return "Portal";
            case D:
              return (C.displayName || "Context") + ".Provider";
            case x:
              return (C._context.displayName || "Context") + ".Consumer";
            case k:
              var j = C.render;
              return (
                (C = C.displayName),
                C ||
                  ((C = j.displayName || j.name || ""),
                  (C = C !== "" ? "ForwardRef(" + C + ")" : "ForwardRef")),
                C
              );
            case N:
              return (
                (j = C.displayName || null),
                j !== null ? j : e(C.type) || "Memo"
              );
            case H:
              (j = C._payload), (C = C._init);
              try {
                return e(C(j));
              } catch {}
          }
        return null;
      }
      function t(C) {
        return "" + C;
      }
      function r(C) {
        try {
          t(C);
          var j = !1;
        } catch {
          j = !0;
        }
        if (j) {
          j = console;
          var ne = j.error,
            oe =
              (typeof Symbol == "function" &&
                Symbol.toStringTag &&
                C[Symbol.toStringTag]) ||
              C.constructor.name ||
              "Object";
          return (
            ne.call(
              j,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              oe,
            ),
            t(C)
          );
        }
      }
      function a(C) {
        if (C === _) return "<>";
        if (typeof C == "object" && C !== null && C.$$typeof === H)
          return "<...>";
        try {
          var j = e(C);
          return j ? "<" + j + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function n() {
        var C = W.A;
        return C === null ? null : C.getOwner();
      }
      function o() {
        return Error("react-stack-top-frame");
      }
      function s(C) {
        if (ge.call(C, "key")) {
          var j = Object.getOwnPropertyDescriptor(C, "key").get;
          if (j && j.isReactWarning) return !1;
        }
        return C.key !== void 0;
      }
      function u(C, j) {
        function ne() {
          ue ||
            ((ue = !0),
            console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              j,
            ));
        }
        (ne.isReactWarning = !0),
          Object.defineProperty(C, "key", { get: ne, configurable: !0 });
      }
      function i() {
        var C = e(this.type);
        return (
          G[C] ||
            ((G[C] = !0),
            console.error(
              "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
            )),
          (C = this.props.ref),
          C !== void 0 ? C : null
        );
      }
      function c(C, j, ne, oe, ye, Ee, Se, Qe) {
        return (
          (ne = Ee.ref),
          (C = { $$typeof: g, type: C, key: j, props: Ee, _owner: ye }),
          (ne !== void 0 ? ne : null) !== null
            ? Object.defineProperty(C, "ref", { enumerable: !1, get: i })
            : Object.defineProperty(C, "ref", { enumerable: !1, value: null }),
          (C._store = {}),
          Object.defineProperty(C._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(C, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(C, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: Se,
          }),
          Object.defineProperty(C, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: Qe,
          }),
          Object.freeze && (Object.freeze(C.props), Object.freeze(C)),
          C
        );
      }
      function d(C, j, ne, oe, ye, Ee, Se, Qe) {
        var ce = j.children;
        if (ce !== void 0)
          if (oe)
            if (K(ce)) {
              for (oe = 0; oe < ce.length; oe++) p(ce[oe]);
              Object.freeze && Object.freeze(ce);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
              );
          else p(ce);
        if (ge.call(j, "key")) {
          ce = e(C);
          var Ce = Object.keys(j).filter(function (Ae) {
            return Ae !== "key";
          });
          (oe =
            0 < Ce.length
              ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}"
              : "{key: someKey}"),
            pe[ce + oe] ||
              ((Ce =
                0 < Ce.length ? "{" + Ce.join(": ..., ") + ": ...}" : "{}"),
              console.error(
                `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                oe,
                ce,
                Ce,
                ce,
              ),
              (pe[ce + oe] = !0));
        }
        if (
          ((ce = null),
          ne !== void 0 && (r(ne), (ce = "" + ne)),
          s(j) && (r(j.key), (ce = "" + j.key)),
          "key" in j)
        ) {
          ne = {};
          for (var de in j) de !== "key" && (ne[de] = j[de]);
        } else ne = j;
        return (
          ce &&
            u(
              ne,
              typeof C == "function" ? C.displayName || C.name || "Unknown" : C,
            ),
          c(C, ce, Ee, ye, n(), ne, Se, Qe)
        );
      }
      function p(C) {
        typeof C == "object" &&
          C !== null &&
          C.$$typeof === g &&
          C._store &&
          (C._store.validated = 1);
      }
      var h = Ln(),
        g = Symbol.for("react.transitional.element"),
        E = Symbol.for("react.portal"),
        _ = Symbol.for("react.fragment"),
        S = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        x = Symbol.for("react.consumer"),
        D = Symbol.for("react.context"),
        k = Symbol.for("react.forward_ref"),
        T = Symbol.for("react.suspense"),
        y = Symbol.for("react.suspense_list"),
        N = Symbol.for("react.memo"),
        H = Symbol.for("react.lazy"),
        z = Symbol.for("react.activity"),
        ie = Symbol.for("react.client.reference"),
        W = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        ge = Object.prototype.hasOwnProperty,
        K = Array.isArray,
        te = console.createTask
          ? console.createTask
          : function () {
              return null;
            };
      h = {
        "react-stack-bottom-frame": function (C) {
          return C();
        },
      };
      var ue,
        G = {},
        me = h["react-stack-bottom-frame"].bind(h, o)(),
        we = te(a(o)),
        pe = {};
      (Tt.Fragment = _),
        (Tt.jsx = function (C, j, ne, oe, ye) {
          var Ee = 1e4 > W.recentlyCreatedOwnerStacks++;
          return d(
            C,
            j,
            ne,
            !1,
            oe,
            ye,
            Ee ? Error("react-stack-top-frame") : me,
            Ee ? te(a(C)) : we,
          );
        }),
        (Tt.jsxs = function (C, j, ne, oe, ye) {
          var Ee = 1e4 > W.recentlyCreatedOwnerStacks++;
          return d(
            C,
            j,
            ne,
            !0,
            oe,
            ye,
            Ee ? Error("react-stack-top-frame") : me,
            Ee ? te(a(C)) : we,
          );
        });
    })(),
    Tt
  );
}
var Qr;
function Ea() {
  return Qr || ((Qr = 1), (hr.exports = wa())), hr.exports;
}
var cl = Ea(),
  m = Ln();
const dl = va(m);
var Pt = {},
  Zr;
function ba() {
  if (Zr) return Pt;
  (Zr = 1),
    Object.defineProperty(Pt, "__esModule", { value: !0 }),
    (Pt.parse = s),
    (Pt.serialize = c);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    a = /^[\u0020-\u003A\u003D-\u007E]*$/,
    n = Object.prototype.toString,
    o = (() => {
      const h = function () {};
      return (h.prototype = Object.create(null)), h;
    })();
  function s(h, g) {
    const E = new o(),
      _ = h.length;
    if (_ < 2) return E;
    const S = (g == null ? void 0 : g.decode) || d;
    let R = 0;
    do {
      const x = h.indexOf("=", R);
      if (x === -1) break;
      const D = h.indexOf(";", R),
        k = D === -1 ? _ : D;
      if (x > k) {
        R = h.lastIndexOf(";", x - 1) + 1;
        continue;
      }
      const T = u(h, R, x),
        y = i(h, x, T),
        N = h.slice(T, y);
      if (E[N] === void 0) {
        let H = u(h, x + 1, k),
          z = i(h, k, H);
        const ie = S(h.slice(H, z));
        E[N] = ie;
      }
      R = k + 1;
    } while (R < _);
    return E;
  }
  function u(h, g, E) {
    do {
      const _ = h.charCodeAt(g);
      if (_ !== 32 && _ !== 9) return g;
    } while (++g < E);
    return E;
  }
  function i(h, g, E) {
    for (; g > E; ) {
      const _ = h.charCodeAt(--g);
      if (_ !== 32 && _ !== 9) return g + 1;
    }
    return E;
  }
  function c(h, g, E) {
    const _ = (E == null ? void 0 : E.encode) || encodeURIComponent;
    if (!e.test(h)) throw new TypeError(`argument name is invalid: ${h}`);
    const S = _(g);
    if (!t.test(S)) throw new TypeError(`argument val is invalid: ${g}`);
    let R = h + "=" + S;
    if (!E) return R;
    if (E.maxAge !== void 0) {
      if (!Number.isInteger(E.maxAge))
        throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);
      R += "; Max-Age=" + E.maxAge;
    }
    if (E.domain) {
      if (!r.test(E.domain))
        throw new TypeError(`option domain is invalid: ${E.domain}`);
      R += "; Domain=" + E.domain;
    }
    if (E.path) {
      if (!a.test(E.path))
        throw new TypeError(`option path is invalid: ${E.path}`);
      R += "; Path=" + E.path;
    }
    if (E.expires) {
      if (!p(E.expires) || !Number.isFinite(E.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${E.expires}`);
      R += "; Expires=" + E.expires.toUTCString();
    }
    if (
      (E.httpOnly && (R += "; HttpOnly"),
      E.secure && (R += "; Secure"),
      E.partitioned && (R += "; Partitioned"),
      E.priority)
    )
      switch (
        typeof E.priority == "string" ? E.priority.toLowerCase() : void 0
      ) {
        case "low":
          R += "; Priority=Low";
          break;
        case "medium":
          R += "; Priority=Medium";
          break;
        case "high":
          R += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${E.priority}`);
      }
    if (E.sameSite)
      switch (
        typeof E.sameSite == "string" ? E.sameSite.toLowerCase() : E.sameSite
      ) {
        case !0:
        case "strict":
          R += "; SameSite=Strict";
          break;
        case "lax":
          R += "; SameSite=Lax";
          break;
        case "none":
          R += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${E.sameSite}`);
      }
    return R;
  }
  function d(h) {
    if (h.indexOf("%") === -1) return h;
    try {
      return decodeURIComponent(h);
    } catch {
      return h;
    }
  }
  function p(h) {
    return n.call(h) === "[object Date]";
  }
  return Pt;
}
ba();
/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Tn = (e) => {
    throw TypeError(e);
  },
  Ra = (e, t, r) => t.has(e) || Tn("Cannot " + r),
  pr = (e, t, r) => (
    Ra(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  Sa = (e, t, r) =>
    t.has(e)
      ? Tn("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  en = "popstate";
function fl(e = {}) {
  function t(a, n) {
    let { pathname: o, search: s, hash: u } = a.location;
    return Nt(
      "",
      { pathname: o, search: s, hash: u },
      (n.state && n.state.usr) || null,
      (n.state && n.state.key) || "default",
    );
  }
  function r(a, n) {
    return typeof n == "string" ? n : qe(n);
  }
  return Ca(t, r, null, e);
}
function ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fe(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _a() {
  return Math.random().toString(36).substring(2, 10);
}
function tn(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Nt(e, t, r = null, a) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Xe(t) : t),
    state: r,
    key: (t && t.key) || a || _a(),
  };
}
function qe({ pathname: e = "/", search: t = "", hash: r = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Xe(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let a = e.indexOf("?");
    a >= 0 && ((t.search = e.substring(a)), (e = e.substring(0, a))),
      e && (t.pathname = e);
  }
  return t;
}
function Ca(e, t, r, a = {}) {
  let { window: n = document.defaultView, v5Compat: o = !1 } = a,
    s = n.history,
    u = "POP",
    i = null,
    c = d();
  c == null && ((c = 0), s.replaceState({ ...s.state, idx: c }, ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    u = "POP";
    let S = d(),
      R = S == null ? null : S - c;
    (c = S), i && i({ action: u, location: _.location, delta: R });
  }
  function h(S, R) {
    u = "PUSH";
    let x = Nt(_.location, S, R);
    c = d() + 1;
    let D = tn(x, c),
      k = _.createHref(x);
    try {
      s.pushState(D, "", k);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      n.location.assign(k);
    }
    o && i && i({ action: u, location: _.location, delta: 1 });
  }
  function g(S, R) {
    u = "REPLACE";
    let x = Nt(_.location, S, R);
    c = d();
    let D = tn(x, c),
      k = _.createHref(x);
    s.replaceState(D, "", k),
      o && i && i({ action: u, location: _.location, delta: 0 });
  }
  function E(S) {
    return Pn(S);
  }
  let _ = {
    get action() {
      return u;
    },
    get location() {
      return e(n, s);
    },
    listen(S) {
      if (i) throw new Error("A history only accepts one active listener");
      return (
        n.addEventListener(en, p),
        (i = S),
        () => {
          n.removeEventListener(en, p), (i = null);
        }
      );
    },
    createHref(S) {
      return t(n, S);
    },
    createURL: E,
    encodeLocation(S) {
      let R = E(S);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: h,
    replace: g,
    go(S) {
      return s.go(S);
    },
  };
  return _;
}
function Pn(e, t = !1) {
  let r = "http://localhost";
  typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    ee(r, "No window.location.(origin|href) available to create URL");
  let a = typeof e == "string" ? e : qe(e);
  return (
    (a = a.replace(/ $/, "%20")),
    !t && a.startsWith("//") && (a = r + a),
    new URL(a, r)
  );
}
var Dt,
  rn = class {
    constructor(e) {
      if ((Sa(this, Dt, new Map()), e)) for (let [t, r] of e) this.set(t, r);
    }
    get(e) {
      if (pr(this, Dt).has(e)) return pr(this, Dt).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error("No value found for context");
    }
    set(e, t) {
      pr(this, Dt).set(e, t);
    }
  };
Dt = new WeakMap();
var La = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Ta(e) {
  return La.has(e);
}
var Pa = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children",
]);
function xa(e) {
  return Pa.has(e);
}
function Oa(e) {
  return e.index === !0;
}
function rr(e, t, r = [], a = {}) {
  return e.map((n, o) => {
    let s = [...r, String(o)],
      u = typeof n.id == "string" ? n.id : s.join("-");
    if (
      (ee(
        n.index !== !0 || !n.children,
        "Cannot specify children on an index route",
      ),
      ee(
        !a[u],
        `Found a route id collision on id "${u}".  Route id's must be globally unique within Data Router usages`,
      ),
      Oa(n))
    ) {
      let i = { ...n, ...t(n), id: u };
      return (a[u] = i), i;
    } else {
      let i = { ...n, ...t(n), id: u, children: void 0 };
      return (
        (a[u] = i), n.children && (i.children = rr(n.children, t, s, a)), i
      );
    }
  });
}
function ze(e, t, r = "/") {
  return Xt(e, t, r, !1);
}
function Xt(e, t, r, a) {
  let n = typeof t == "string" ? Xe(t) : t,
    o = xe(n.pathname || "/", r);
  if (o == null) return null;
  let s = On(e);
  ka(s);
  let u = null;
  for (let i = 0; u == null && i < s.length; ++i) {
    let c = Ha(o);
    u = Ua(s[i], c, a);
  }
  return u;
}
function xn(e, t) {
  let { route: r, pathname: a, params: n } = e;
  return { id: r.id, pathname: a, params: n, data: t[r.id], handle: r.handle };
}
function On(e, t = [], r = [], a = "") {
  let n = (o, s, u) => {
    let i = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    i.relativePath.startsWith("/") &&
      (ee(
        i.relativePath.startsWith(a),
        `Absolute route path "${i.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (i.relativePath = i.relativePath.slice(a.length)));
    let c = Ye([a, i.relativePath]),
      d = r.concat(i);
    o.children &&
      o.children.length > 0 &&
      (ee(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${c}".`,
      ),
      On(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: ja(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, s) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) n(o, s);
      else for (let i of kn(o.path)) n(o, s, i);
    }),
    t
  );
}
function kn(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...a] = t,
    n = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (a.length === 0) return n ? [o, ""] : [o];
  let s = kn(a.join("/")),
    u = [];
  return (
    u.push(...s.map((i) => (i === "" ? o : [o, i].join("/")))),
    n && u.push(...s),
    u.map((i) => (e.startsWith("/") && i === "" ? "/" : i))
  );
}
function ka(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Fa(
          t.routesMeta.map((a) => a.childrenIndex),
          r.routesMeta.map((a) => a.childrenIndex),
        ),
  );
}
var Ma = /^:[\w-]+$/,
  Da = 3,
  Aa = 2,
  Na = 1,
  Ia = 10,
  $a = -2,
  nn = (e) => e === "*";
function ja(e, t) {
  let r = e.split("/"),
    a = r.length;
  return (
    r.some(nn) && (a += $a),
    t && (a += Aa),
    r
      .filter((n) => !nn(n))
      .reduce((n, o) => n + (Ma.test(o) ? Da : o === "" ? Na : Ia), a)
  );
}
function Fa(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, n) => a === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ua(e, t, r = !1) {
  let { routesMeta: a } = e,
    n = {},
    o = "/",
    s = [];
  for (let u = 0; u < a.length; ++u) {
    let i = a[u],
      c = u === a.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      p = nr(
        { path: i.relativePath, caseSensitive: i.caseSensitive, end: c },
        d,
      ),
      h = i.route;
    if (
      (!p &&
        c &&
        r &&
        !a[a.length - 1].route.index &&
        (p = nr(
          { path: i.relativePath, caseSensitive: i.caseSensitive, end: !1 },
          d,
        )),
      !p)
    )
      return null;
    Object.assign(n, p.params),
      s.push({
        params: n,
        pathname: Ye([o, p.pathname]),
        pathnameBase: Ba(Ye([o, p.pathnameBase])),
        route: h,
      }),
      p.pathnameBase !== "/" && (o = Ye([o, p.pathnameBase]));
  }
  return s;
}
function nr(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, a] = Mn(e.path, e.caseSensitive, e.end),
    n = t.match(r);
  if (!n) return null;
  let o = n[0],
    s = o.replace(/(.)\/+$/, "$1"),
    u = n.slice(1);
  return {
    params: a.reduce((c, { paramName: d, isOptional: p }, h) => {
      if (d === "*") {
        let E = u[h] || "";
        s = o.slice(0, o.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const g = u[h];
      return (
        p && !g ? (c[d] = void 0) : (c[d] = (g || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Mn(e, t = !1, r = !0) {
  fe(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let a = [],
    n =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, u, i) => (
            a.push({ paramName: u, isOptional: i != null }),
            i ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (n += "\\/*$")
        : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"),
    [new RegExp(n, t ? void 0 : "i"), a]
  );
}
function Ha(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      fe(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function xe(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    a = e.charAt(r);
  return a && a !== "/" ? null : e.slice(r) || "/";
}
function za(e, t = "/") {
  let {
    pathname: r,
    search: a = "",
    hash: n = "",
  } = typeof e == "string" ? Xe(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Ya(r, t)) : t,
    search: Wa(a),
    hash: Va(n),
  };
}
function Ya(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((n) => {
      n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function yr(e, t, r, a) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Dn(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Dr(e) {
  let t = Dn(e);
  return t.map((r, a) => (a === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Ar(e, t, r, a = !1) {
  let n;
  typeof e == "string"
    ? (n = Xe(e))
    : ((n = { ...e }),
      ee(
        !n.pathname || !n.pathname.includes("?"),
        yr("?", "pathname", "search", n),
      ),
      ee(
        !n.pathname || !n.pathname.includes("#"),
        yr("#", "pathname", "hash", n),
      ),
      ee(!n.search || !n.search.includes("#"), yr("#", "search", "hash", n)));
  let o = e === "" || n.pathname === "",
    s = o ? "/" : n.pathname,
    u;
  if (s == null) u = r;
  else {
    let p = t.length - 1;
    if (!a && s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) h.shift(), (p -= 1);
      n.pathname = h.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let i = za(n, u),
    c = s && s !== "/" && s.endsWith("/"),
    d = (o || s === ".") && r.endsWith("/");
  return !i.pathname.endsWith("/") && (c || d) && (i.pathname += "/"), i;
}
var Ye = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ba = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Wa = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Va = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  Ga = class {
    constructor(e, t) {
      (this.type = "DataWithResponseInit"),
        (this.data = e),
        (this.init = t || null);
    }
  };
function Ja(e, t) {
  return new Ga(e, typeof t == "number" ? { status: t } : t);
}
var qa = (e, t = 302) => {
    let r = t;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let a = new Headers(r.headers);
    return a.set("Location", e), new Response(null, { ...r, headers: a });
  },
  Ke = class {
    constructor(e, t, r, a = !1) {
      (this.status = e),
        (this.statusText = t || ""),
        (this.internal = a),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r);
    }
  };
function lt(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var An = ["POST", "PUT", "PATCH", "DELETE"],
  Ka = new Set(An),
  Xa = ["GET", ...An],
  Qa = new Set(Xa),
  Za = new Set([301, 302, 303, 307, 308]),
  eo = new Set([307, 308]),
  vr = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  to = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  xt = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Nr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ro = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Nn = "remix-router-transitions",
  In = Symbol("ResetLoaderData");
function hl(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  ee(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let a = e.hydrationRouteProperties || [],
    n = e.mapRouteProperties || ro,
    o = {},
    s = rr(e.routes, n, void 0, o),
    u,
    i = e.basename || "/",
    c = e.dataStrategy || lo,
    d = { unstable_middleware: !1, ...e.future },
    p = null,
    h = new Set(),
    g = null,
    E = null,
    _ = null,
    S = e.hydrationData != null,
    R = ze(s, e.history.location, i),
    x = !1,
    D = null,
    k;
  if (R == null && !e.patchRoutesOnNavigation) {
    let f = Me(404, { pathname: e.history.location.pathname }),
      { matches: v, route: b } = yn(s);
    (k = !0), (R = v), (D = { [b.id]: f });
  } else if (
    (R &&
      !e.hydrationData &&
      re(R, s, e.history.location.pathname).active &&
      (R = null),
    R)
  )
    if (R.some((f) => f.route.lazy)) k = !1;
    else if (!R.some((f) => f.route.loader)) k = !0;
    else {
      let f = e.hydrationData ? e.hydrationData.loaderData : null,
        v = e.hydrationData ? e.hydrationData.errors : null;
      if (v) {
        let b = R.findIndex((L) => v[L.route.id] !== void 0);
        k = R.slice(0, b + 1).every((L) => !_r(L.route, f, v));
      } else k = R.every((b) => !_r(b.route, f, v));
    }
  else {
    (k = !1), (R = []);
    let f = re(null, s, e.history.location.pathname);
    f.active && f.matches && ((x = !0), (R = f.matches));
  }
  let T,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: R,
      initialized: k,
      navigation: vr,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || D,
      fetchers: new Map(),
      blockers: new Map(),
    },
    N = "POP",
    H = !1,
    z,
    ie = !1,
    W = new Map(),
    ge = null,
    K = !1,
    te = !1,
    ue = new Set(),
    G = new Map(),
    me = 0,
    we = -1,
    pe = new Map(),
    C = new Set(),
    j = new Map(),
    ne = new Map(),
    oe = new Set(),
    ye = new Map(),
    Ee,
    Se = null;
  function Qe() {
    if (
      ((p = e.history.listen(({ action: f, location: v, delta: b }) => {
        if (Ee) {
          Ee(), (Ee = void 0);
          return;
        }
        fe(
          ye.size === 0 || b != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let L = w({
          currentLocation: y.location,
          nextLocation: v,
          historyAction: f,
        });
        if (L && b != null) {
          let M = new Promise(($) => {
            Ee = $;
          });
          e.history.go(b * -1),
            l(L, {
              state: "blocked",
              location: v,
              proceed() {
                l(L, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: v,
                }),
                  M.then(() => e.history.go(b));
              },
              reset() {
                let $ = new Map(y.blockers);
                $.set(L, xt), de({ blockers: $ });
              },
            });
          return;
        }
        return je(f, v);
      })),
      r)
    ) {
      wo(t, W);
      let f = () => Eo(t, W);
      t.addEventListener("pagehide", f),
        (ge = () => t.removeEventListener("pagehide", f));
    }
    return y.initialized || je("POP", y.location, { initialHydration: !0 }), T;
  }
  function ce() {
    p && p(),
      ge && ge(),
      h.clear(),
      z && z.abort(),
      y.fetchers.forEach((f, v) => dt(v)),
      y.blockers.forEach((f, v) => Rt(v));
  }
  function Ce(f) {
    return h.add(f), () => h.delete(f);
  }
  function de(f, v = {}) {
    y = { ...y, ...f };
    let b = [],
      L = [];
    y.fetchers.forEach((M, $) => {
      M.state === "idle" && (oe.has($) ? b.push($) : L.push($));
    }),
      oe.forEach((M) => {
        !y.fetchers.has(M) && !G.has(M) && b.push(M);
      }),
      [...h].forEach((M) =>
        M(y, {
          deletedFetchers: b,
          viewTransitionOpts: v.viewTransitionOpts,
          flushSync: v.flushSync === !0,
        }),
      ),
      b.forEach((M) => dt(M)),
      L.forEach((M) => y.fetchers.delete(M));
  }
  function Ae(f, v, { flushSync: b } = {}) {
    var Y, V;
    let L =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        Pe(y.navigation.formMethod) &&
        y.navigation.state === "loading" &&
        ((Y = f.state) == null ? void 0 : Y._isRedirect) !== !0,
      M;
    v.actionData
      ? Object.keys(v.actionData).length > 0
        ? (M = v.actionData)
        : (M = null)
      : L
        ? (M = y.actionData)
        : (M = null);
    let $ = v.loaderData
        ? mn(y.loaderData, v.loaderData, v.matches || [], v.errors)
        : y.loaderData,
      B = y.blockers;
    B.size > 0 && ((B = new Map(B)), B.forEach((U, X) => B.set(X, xt)));
    let A =
      H === !0 ||
      (y.navigation.formMethod != null &&
        Pe(y.navigation.formMethod) &&
        ((V = f.state) == null ? void 0 : V._isRedirect) !== !0);
    u && ((s = u), (u = void 0)),
      K ||
        N === "POP" ||
        (N === "PUSH"
          ? e.history.push(f, f.state)
          : N === "REPLACE" && e.history.replace(f, f.state));
    let F;
    if (N === "POP") {
      let U = W.get(y.location.pathname);
      U && U.has(f.pathname)
        ? (F = { currentLocation: y.location, nextLocation: f })
        : W.has(f.pathname) &&
          (F = { currentLocation: f, nextLocation: y.location });
    } else if (ie) {
      let U = W.get(y.location.pathname);
      U
        ? U.add(f.pathname)
        : ((U = new Set([f.pathname])), W.set(y.location.pathname, U)),
        (F = { currentLocation: y.location, nextLocation: f });
    }
    de(
      {
        ...v,
        actionData: M,
        loaderData: $,
        historyAction: N,
        location: f,
        initialized: !0,
        navigation: vr,
        revalidation: "idle",
        restoreScrollPosition: J(f, v.matches || y.matches),
        preventScrollReset: A,
        blockers: B,
      },
      { viewTransitionOpts: F, flushSync: b === !0 },
    ),
      (N = "POP"),
      (H = !1),
      (ie = !1),
      (K = !1),
      (te = !1),
      Se == null || Se.resolve(),
      (Se = null);
  }
  async function vt(f, v) {
    if (typeof f == "number") {
      e.history.go(f);
      return;
    }
    let b = Sr(
        y.location,
        y.matches,
        i,
        f,
        v == null ? void 0 : v.fromRouteId,
        v == null ? void 0 : v.relative,
      ),
      { path: L, submission: M, error: $ } = an(!1, b, v),
      B = y.location,
      A = Nt(y.location, L, v && v.state);
    A = { ...A, ...e.history.encodeLocation(A) };
    let F = v && v.replace != null ? v.replace : void 0,
      Y = "PUSH";
    F === !0
      ? (Y = "REPLACE")
      : F === !1 ||
        (M != null &&
          Pe(M.formMethod) &&
          M.formAction === y.location.pathname + y.location.search &&
          (Y = "REPLACE"));
    let V =
        v && "preventScrollReset" in v ? v.preventScrollReset === !0 : void 0,
      U = (v && v.flushSync) === !0,
      X = w({ currentLocation: B, nextLocation: A, historyAction: Y });
    if (X) {
      l(X, {
        state: "blocked",
        location: A,
        proceed() {
          l(X, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            vt(f, v);
        },
        reset() {
          let se = new Map(y.blockers);
          se.set(X, xt), de({ blockers: se });
        },
      });
      return;
    }
    await je(Y, A, {
      submission: M,
      pendingError: $,
      preventScrollReset: V,
      replace: v && v.replace,
      enableViewTransition: v && v.viewTransition,
      flushSync: U,
    });
  }
  function Ht() {
    Se || (Se = bo()), ct(), de({ revalidation: "loading" });
    let f = Se.promise;
    return y.navigation.state === "submitting"
      ? f
      : y.navigation.state === "idle"
        ? (je(y.historyAction, y.location, {
            startUninterruptedRevalidation: !0,
          }),
          f)
        : (je(N || y.historyAction, y.navigation.location, {
            overrideNavigation: y.navigation,
            enableViewTransition: ie === !0,
          }),
          f);
  }
  async function je(f, v, b) {
    z && z.abort(),
      (z = null),
      (N = f),
      (K = (b && b.startUninterruptedRevalidation) === !0),
      Z(y.location, y.matches),
      (H = (b && b.preventScrollReset) === !0),
      (ie = (b && b.enableViewTransition) === !0);
    let L = u || s,
      M = b && b.overrideNavigation,
      $ =
        b != null &&
        b.initialHydration &&
        y.matches &&
        y.matches.length > 0 &&
        !x
          ? y.matches
          : ze(L, v, i),
      B = (b && b.flushSync) === !0;
    if (
      $ &&
      y.initialized &&
      !te &&
      mo(y.location, v) &&
      !(b && b.submission && Pe(b.submission.formMethod))
    ) {
      Ae(v, { matches: $ }, { flushSync: B });
      return;
    }
    let A = re($, L, v.pathname);
    if ((A.active && A.matches && ($ = A.matches), !$)) {
      let { error: be, notFoundMatches: Le, route: ae } = P(v.pathname);
      Ae(
        v,
        { matches: Le, loaderData: {}, errors: { [ae.id]: be } },
        { flushSync: B },
      );
      return;
    }
    z = new AbortController();
    let F = ht(e.history, v, z.signal, b && b.submission),
      Y = new rn(
        e.unstable_getContext ? await e.unstable_getContext() : void 0,
      ),
      V;
    if (b && b.pendingError)
      V = [ot($).route.id, { type: "error", error: b.pendingError }];
    else if (b && b.submission && Pe(b.submission.formMethod)) {
      let be = await gt(
        F,
        v,
        b.submission,
        $,
        Y,
        A.active,
        b && b.initialHydration === !0,
        { replace: b.replace, flushSync: B },
      );
      if (be.shortCircuited) return;
      if (be.pendingActionResult) {
        let [Le, ae] = be.pendingActionResult;
        if (Te(ae) && lt(ae.error) && ae.error.status === 404) {
          (z = null),
            Ae(v, {
              matches: be.matches,
              loaderData: {},
              errors: { [Le]: ae.error },
            });
          return;
        }
      }
      ($ = be.matches || $),
        (V = be.pendingActionResult),
        (M = gr(v, b.submission)),
        (B = !1),
        (A.active = !1),
        (F = ht(e.history, F.url, F.signal));
    }
    let {
      shortCircuited: U,
      matches: X,
      loaderData: se,
      errors: ve,
    } = await _e(
      F,
      v,
      $,
      Y,
      A.active,
      M,
      b && b.submission,
      b && b.fetcherSubmission,
      b && b.replace,
      b && b.initialHydration === !0,
      B,
      V,
    );
    U ||
      ((z = null),
      Ae(v, { matches: X || $, ...pn(V), loaderData: se, errors: ve }));
  }
  async function gt(f, v, b, L, M, $, B, A = {}) {
    ct();
    let F = vo(v, b);
    if ((de({ navigation: F }, { flushSync: A.flushSync === !0 }), $)) {
      let U = await q(L, v.pathname, f.signal);
      if (U.type === "aborted") return { shortCircuited: !0 };
      if (U.type === "error") {
        let X = ot(U.partialMatches).route.id;
        return {
          matches: U.partialMatches,
          pendingActionResult: [X, { type: "error", error: U.error }],
        };
      } else if (U.matches) L = U.matches;
      else {
        let { notFoundMatches: X, error: se, route: ve } = P(v.pathname);
        return {
          matches: X,
          pendingActionResult: [ve.id, { type: "error", error: se }],
        };
      }
    }
    let Y,
      V = At(L, v);
    if (!V.route.action && !V.route.lazy)
      Y = {
        type: "error",
        error: Me(405, {
          method: f.method,
          pathname: v.pathname,
          routeId: V.route.id,
        }),
      };
    else {
      let U = mt(n, o, f, L, V, B ? [] : a, M),
        X = await We(f, U, M, null);
      if (((Y = X[V.route.id]), !Y)) {
        for (let se of L)
          if (X[se.route.id]) {
            Y = X[se.route.id];
            break;
          }
      }
      if (f.signal.aborted) return { shortCircuited: !0 };
    }
    if (it(Y)) {
      let U;
      return (
        A && A.replace != null
          ? (U = A.replace)
          : (U =
              dn(Y.response.headers.get("Location"), new URL(f.url), i) ===
              y.location.pathname + y.location.search),
        await Fe(f, Y, !0, { submission: b, replace: U }),
        { shortCircuited: !0 }
      );
    }
    if (Te(Y)) {
      let U = ot(L, V.route.id);
      return (
        (A && A.replace) !== !0 && (N = "PUSH"),
        { matches: L, pendingActionResult: [U.route.id, Y, V.route.id] }
      );
    }
    return { matches: L, pendingActionResult: [V.route.id, Y] };
  }
  async function _e(f, v, b, L, M, $, B, A, F, Y, V, U) {
    let X = $ || gr(v, B),
      se = B || A || vn(X),
      ve = !K && !Y;
    if (M) {
      if (ve) {
        let ke = Ze(U);
        de(
          { navigation: X, ...(ke !== void 0 ? { actionData: ke } : {}) },
          { flushSync: V },
        );
      }
      let le = await q(b, v.pathname, f.signal);
      if (le.type === "aborted") return { shortCircuited: !0 };
      if (le.type === "error") {
        let ke = ot(le.partialMatches).route.id;
        return {
          matches: le.partialMatches,
          loaderData: {},
          errors: { [ke]: le.error },
        };
      } else if (le.matches) b = le.matches;
      else {
        let { error: ke, notFoundMatches: Ge, route: Wt } = P(v.pathname);
        return { matches: Ge, loaderData: {}, errors: { [Wt.id]: ke } };
      }
    }
    let be = u || s,
      { dsMatches: Le, revalidatingFetchers: ae } = on(
        f,
        L,
        n,
        o,
        e.history,
        y,
        b,
        se,
        v,
        Y ? [] : a,
        Y === !0,
        te,
        ue,
        oe,
        j,
        C,
        be,
        i,
        U,
      );
    if (
      ((we = ++me),
      !e.dataStrategy && !Le.some((le) => le.shouldLoad) && ae.length === 0)
    ) {
      let le = tt();
      return (
        Ae(
          v,
          {
            matches: b,
            loaderData: {},
            errors: U && Te(U[1]) ? { [U[0]]: U[1].error } : null,
            ...pn(U),
            ...(le ? { fetchers: new Map(y.fetchers) } : {}),
          },
          { flushSync: V },
        ),
        { shortCircuited: !0 }
      );
    }
    if (ve) {
      let le = {};
      if (!M) {
        le.navigation = X;
        let ke = Ze(U);
        ke !== void 0 && (le.actionData = ke);
      }
      ae.length > 0 && (le.fetchers = zt(ae)), de(le, { flushSync: V });
    }
    ae.forEach((le) => {
      Ie(le.key), le.controller && G.set(le.key, le.controller);
    });
    let St = () => ae.forEach((le) => Ie(le.key));
    z && z.signal.addEventListener("abort", St);
    let { loaderResults: nt, fetcherResults: _t } = await wt(Le, ae, f, L);
    if (f.signal.aborted) return { shortCircuited: !0 };
    z && z.signal.removeEventListener("abort", St),
      ae.forEach((le) => G.delete(le.key));
    let Oe = Vt(nt);
    if (Oe)
      return await Fe(f, Oe.result, !0, { replace: F }), { shortCircuited: !0 };
    if (((Oe = Vt(_t)), Oe))
      return (
        C.add(Oe.key),
        await Fe(f, Oe.result, !0, { replace: F }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ct, errors: Lt } = hn(y, b, nt, U, ae, _t);
    Y && y.errors && (Lt = { ...y.errors, ...Lt });
    let dr = tt(),
      at = rt(we),
      Bt = dr || at || ae.length > 0;
    return {
      matches: b,
      loaderData: Ct,
      errors: Lt,
      ...(Bt ? { fetchers: new Map(y.fetchers) } : {}),
    };
  }
  function Ze(f) {
    if (f && !Te(f[1])) return { [f[0]]: f[1].data };
    if (y.actionData)
      return Object.keys(y.actionData).length === 0 ? null : y.actionData;
  }
  function zt(f) {
    return (
      f.forEach((v) => {
        let b = y.fetchers.get(v.key),
          L = Ot(void 0, b ? b.data : void 0);
        y.fetchers.set(v.key, L);
      }),
      new Map(y.fetchers)
    );
  }
  async function cr(f, v, b, L) {
    Ie(f);
    let M = (L && L.flushSync) === !0,
      $ = u || s,
      B = Sr(y.location, y.matches, i, b, v, L == null ? void 0 : L.relative),
      A = ze($, B, i),
      F = re(A, $, B);
    if ((F.active && F.matches && (A = F.matches), !A)) {
      Ne(f, v, Me(404, { pathname: B }), { flushSync: M });
      return;
    }
    let { path: Y, submission: V, error: U } = an(!0, B, L);
    if (U) {
      Ne(f, v, U, { flushSync: M });
      return;
    }
    let X = At(A, Y),
      se = new rn(
        e.unstable_getContext ? await e.unstable_getContext() : void 0,
      ),
      ve = (L && L.preventScrollReset) === !0;
    if (V && Pe(V.formMethod)) {
      await Q(f, v, Y, X, A, se, F.active, M, ve, V);
      return;
    }
    j.set(f, { routeId: v, path: Y }),
      await ut(f, v, Y, X, A, se, F.active, M, ve, V);
  }
  async function Q(f, v, b, L, M, $, B, A, F, Y) {
    ct(), j.delete(f);
    function V(he) {
      if (!he.route.action && !he.route.lazy) {
        let ft = Me(405, { method: Y.formMethod, pathname: b, routeId: v });
        return Ne(f, v, ft, { flushSync: A }), !0;
      }
      return !1;
    }
    if (!B && V(L)) return;
    let U = y.fetchers.get(f);
    Ue(f, go(Y, U), { flushSync: A });
    let X = new AbortController(),
      se = ht(e.history, b, X.signal, Y);
    if (B) {
      let he = await q(M, b, se.signal, f);
      if (he.type === "aborted") return;
      if (he.type === "error") {
        Ne(f, v, he.error, { flushSync: A });
        return;
      } else if (he.matches) {
        if (((M = he.matches), (L = At(M, b)), V(L))) return;
      } else {
        Ne(f, v, Me(404, { pathname: b }), { flushSync: A });
        return;
      }
    }
    G.set(f, X);
    let ve = me,
      be = mt(n, o, se, M, L, a, $),
      ae = (await We(se, be, $, f))[L.route.id];
    if (se.signal.aborted) {
      G.get(f) === X && G.delete(f);
      return;
    }
    if (oe.has(f)) {
      if (it(ae) || Te(ae)) {
        Ue(f, Je(void 0));
        return;
      }
    } else {
      if (it(ae))
        if ((G.delete(f), we > ve)) {
          Ue(f, Je(void 0));
          return;
        } else
          return (
            C.add(f),
            Ue(f, Ot(Y)),
            Fe(se, ae, !1, { fetcherSubmission: Y, preventScrollReset: F })
          );
      if (Te(ae)) {
        Ne(f, v, ae.error);
        return;
      }
    }
    let St = y.navigation.location || y.location,
      nt = ht(e.history, St, X.signal),
      _t = u || s,
      Oe =
        y.navigation.state !== "idle"
          ? ze(_t, y.navigation.location, i)
          : y.matches;
    ee(Oe, "Didn't find any matches after fetcher action");
    let Ct = ++me;
    pe.set(f, Ct);
    let Lt = Ot(Y, ae.data);
    y.fetchers.set(f, Lt);
    let { dsMatches: dr, revalidatingFetchers: at } = on(
      nt,
      $,
      n,
      o,
      e.history,
      y,
      Oe,
      Y,
      St,
      a,
      !1,
      te,
      ue,
      oe,
      j,
      C,
      _t,
      i,
      [L.route.id, ae],
    );
    at
      .filter((he) => he.key !== f)
      .forEach((he) => {
        let ft = he.key,
          Jr = y.fetchers.get(ft),
          ya = Ot(void 0, Jr ? Jr.data : void 0);
        y.fetchers.set(ft, ya),
          Ie(ft),
          he.controller && G.set(ft, he.controller);
      }),
      de({ fetchers: new Map(y.fetchers) });
    let Bt = () => at.forEach((he) => Ie(he.key));
    X.signal.addEventListener("abort", Bt);
    let { loaderResults: le, fetcherResults: ke } = await wt(dr, at, nt, $);
    if (X.signal.aborted) return;
    if (
      (X.signal.removeEventListener("abort", Bt),
      pe.delete(f),
      G.delete(f),
      at.forEach((he) => G.delete(he.key)),
      y.fetchers.has(f))
    ) {
      let he = Je(ae.data);
      y.fetchers.set(f, he);
    }
    let Ge = Vt(le);
    if (Ge) return Fe(nt, Ge.result, !1, { preventScrollReset: F });
    if (((Ge = Vt(ke)), Ge))
      return C.add(Ge.key), Fe(nt, Ge.result, !1, { preventScrollReset: F });
    let { loaderData: Wt, errors: fr } = hn(y, Oe, le, void 0, at, ke);
    rt(Ct),
      y.navigation.state === "loading" && Ct > we
        ? (ee(N, "Expected pending action"),
          z && z.abort(),
          Ae(y.navigation.location, {
            matches: Oe,
            loaderData: Wt,
            errors: fr,
            fetchers: new Map(y.fetchers),
          }))
        : (de({
            errors: fr,
            loaderData: mn(y.loaderData, Wt, Oe, fr),
            fetchers: new Map(y.fetchers),
          }),
          (te = !1));
  }
  async function ut(f, v, b, L, M, $, B, A, F, Y) {
    let V = y.fetchers.get(f);
    Ue(f, Ot(Y, V ? V.data : void 0), { flushSync: A });
    let U = new AbortController(),
      X = ht(e.history, b, U.signal);
    if (B) {
      let ae = await q(M, b, X.signal, f);
      if (ae.type === "aborted") return;
      if (ae.type === "error") {
        Ne(f, v, ae.error, { flushSync: A });
        return;
      } else if (ae.matches) (M = ae.matches), (L = At(M, b));
      else {
        Ne(f, v, Me(404, { pathname: b }), { flushSync: A });
        return;
      }
    }
    G.set(f, U);
    let se = me,
      ve = mt(n, o, X, M, L, a, $),
      Le = (await We(X, ve, $, f))[L.route.id];
    if ((G.get(f) === U && G.delete(f), !X.signal.aborted)) {
      if (oe.has(f)) {
        Ue(f, Je(void 0));
        return;
      }
      if (it(Le))
        if (we > se) {
          Ue(f, Je(void 0));
          return;
        } else {
          C.add(f), await Fe(X, Le, !1, { preventScrollReset: F });
          return;
        }
      if (Te(Le)) {
        Ne(f, v, Le.error);
        return;
      }
      Ue(f, Je(Le.data));
    }
  }
  async function Fe(
    f,
    v,
    b,
    {
      submission: L,
      fetcherSubmission: M,
      preventScrollReset: $,
      replace: B,
    } = {},
  ) {
    v.response.headers.has("X-Remix-Revalidate") && (te = !0);
    let A = v.response.headers.get("Location");
    ee(A, "Expected a Location header on the redirect Response"),
      (A = dn(A, new URL(f.url), i));
    let F = Nt(y.location, A, { _isRedirect: !0 });
    if (r) {
      let ve = !1;
      if (v.response.headers.has("X-Remix-Reload-Document")) ve = !0;
      else if (Nr.test(A)) {
        const be = Pn(A, !0);
        ve = be.origin !== t.location.origin || xe(be.pathname, i) == null;
      }
      if (ve) {
        B ? t.location.replace(A) : t.location.assign(A);
        return;
      }
    }
    z = null;
    let Y =
        B === !0 || v.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: V, formAction: U, formEncType: X } = y.navigation;
    !L && !M && V && U && X && (L = vn(y.navigation));
    let se = L || M;
    if (eo.has(v.response.status) && se && Pe(se.formMethod))
      await je(Y, F, {
        submission: { ...se, formAction: A },
        preventScrollReset: $ || H,
        enableViewTransition: b ? ie : void 0,
      });
    else {
      let ve = gr(F, L);
      await je(Y, F, {
        overrideNavigation: ve,
        fetcherSubmission: M,
        preventScrollReset: $ || H,
        enableViewTransition: b ? ie : void 0,
      });
    }
  }
  async function We(f, v, b, L) {
    let M,
      $ = {};
    try {
      M = await so(c, f, v, L, b, !1);
    } catch (B) {
      return (
        v
          .filter((A) => A.shouldLoad)
          .forEach((A) => {
            $[A.route.id] = { type: "error", error: B };
          }),
        $
      );
    }
    if (f.signal.aborted) return $;
    for (let [B, A] of Object.entries(M))
      if (po(A)) {
        let F = A.result;
        $[B] = { type: "redirect", response: fo(F, f, B, v, i) };
      } else $[B] = await co(A);
    return $;
  }
  async function wt(f, v, b, L) {
    let M = We(b, f, L, null),
      $ = Promise.all(
        v.map(async (F) => {
          if (F.matches && F.match && F.request && F.controller) {
            let V = (await We(F.request, F.matches, L, F.key))[
              F.match.route.id
            ];
            return { [F.key]: V };
          } else
            return Promise.resolve({
              [F.key]: { type: "error", error: Me(404, { pathname: F.path }) },
            });
        }),
      ),
      B = await M,
      A = (await $).reduce((F, Y) => Object.assign(F, Y), {});
    return { loaderResults: B, fetcherResults: A };
  }
  function ct() {
    (te = !0),
      j.forEach((f, v) => {
        G.has(v) && ue.add(v), Ie(v);
      });
  }
  function Ue(f, v, b = {}) {
    y.fetchers.set(f, v),
      de(
        { fetchers: new Map(y.fetchers) },
        { flushSync: (b && b.flushSync) === !0 },
      );
  }
  function Ne(f, v, b, L = {}) {
    let M = ot(y.matches, v);
    dt(f),
      de(
        { errors: { [M.route.id]: b }, fetchers: new Map(y.fetchers) },
        { flushSync: (L && L.flushSync) === !0 },
      );
  }
  function Et(f) {
    return (
      ne.set(f, (ne.get(f) || 0) + 1),
      oe.has(f) && oe.delete(f),
      y.fetchers.get(f) || to
    );
  }
  function dt(f) {
    let v = y.fetchers.get(f);
    G.has(f) && !(v && v.state === "loading" && pe.has(f)) && Ie(f),
      j.delete(f),
      pe.delete(f),
      C.delete(f),
      oe.delete(f),
      ue.delete(f),
      y.fetchers.delete(f);
  }
  function Yt(f) {
    let v = (ne.get(f) || 0) - 1;
    v <= 0 ? (ne.delete(f), oe.add(f)) : ne.set(f, v),
      de({ fetchers: new Map(y.fetchers) });
  }
  function Ie(f) {
    let v = G.get(f);
    v && (v.abort(), G.delete(f));
  }
  function et(f) {
    for (let v of f) {
      let b = Et(v),
        L = Je(b.data);
      y.fetchers.set(v, L);
    }
  }
  function tt() {
    let f = [],
      v = !1;
    for (let b of C) {
      let L = y.fetchers.get(b);
      ee(L, `Expected fetcher: ${b}`),
        L.state === "loading" && (C.delete(b), f.push(b), (v = !0));
    }
    return et(f), v;
  }
  function rt(f) {
    let v = [];
    for (let [b, L] of pe)
      if (L < f) {
        let M = y.fetchers.get(b);
        ee(M, `Expected fetcher: ${b}`),
          M.state === "loading" && (Ie(b), pe.delete(b), v.push(b));
      }
    return et(v), v.length > 0;
  }
  function bt(f, v) {
    let b = y.blockers.get(f) || xt;
    return ye.get(f) !== v && ye.set(f, v), b;
  }
  function Rt(f) {
    y.blockers.delete(f), ye.delete(f);
  }
  function l(f, v) {
    let b = y.blockers.get(f) || xt;
    ee(
      (b.state === "unblocked" && v.state === "blocked") ||
        (b.state === "blocked" && v.state === "blocked") ||
        (b.state === "blocked" && v.state === "proceeding") ||
        (b.state === "blocked" && v.state === "unblocked") ||
        (b.state === "proceeding" && v.state === "unblocked"),
      `Invalid blocker state transition: ${b.state} -> ${v.state}`,
    );
    let L = new Map(y.blockers);
    L.set(f, v), de({ blockers: L });
  }
  function w({ currentLocation: f, nextLocation: v, historyAction: b }) {
    if (ye.size === 0) return;
    ye.size > 1 && fe(!1, "A router only supports one blocker at a time");
    let L = Array.from(ye.entries()),
      [M, $] = L[L.length - 1],
      B = y.blockers.get(M);
    if (
      !(B && B.state === "proceeding") &&
      $({ currentLocation: f, nextLocation: v, historyAction: b })
    )
      return M;
  }
  function P(f) {
    let v = Me(404, { pathname: f }),
      b = u || s,
      { matches: L, route: M } = yn(b);
    return { notFoundMatches: L, route: M, error: v };
  }
  function O(f, v, b) {
    if (((g = f), (_ = v), (E = b || null), !S && y.navigation === vr)) {
      S = !0;
      let L = J(y.location, y.matches);
      L != null && de({ restoreScrollPosition: L });
    }
    return () => {
      (g = null), (_ = null), (E = null);
    };
  }
  function I(f, v) {
    return (
      (E &&
        E(
          f,
          v.map((L) => xn(L, y.loaderData)),
        )) ||
      f.key
    );
  }
  function Z(f, v) {
    if (g && _) {
      let b = I(f, v);
      g[b] = _();
    }
  }
  function J(f, v) {
    if (g) {
      let b = I(f, v),
        L = g[b];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function re(f, v, b) {
    if (e.patchRoutesOnNavigation)
      if (f) {
        if (Object.keys(f[0].params).length > 0)
          return { active: !0, matches: Xt(v, b, i, !0) };
      } else return { active: !0, matches: Xt(v, b, i, !0) || [] };
    return { active: !1, matches: null };
  }
  async function q(f, v, b, L) {
    if (!e.patchRoutesOnNavigation) return { type: "success", matches: f };
    let M = f;
    for (;;) {
      let $ = u == null,
        B = u || s,
        A = o;
      try {
        await e.patchRoutesOnNavigation({
          signal: b,
          path: v,
          matches: M,
          fetcherKey: L,
          patch: (V, U) => {
            b.aborted || ln(V, U, B, A, n);
          },
        });
      } catch (V) {
        return { type: "error", error: V, partialMatches: M };
      } finally {
        $ && !b.aborted && (s = [...s]);
      }
      if (b.aborted) return { type: "aborted" };
      let F = ze(B, v, i);
      if (F) return { type: "success", matches: F };
      let Y = Xt(B, v, i, !0);
      if (
        !Y ||
        (M.length === Y.length &&
          M.every((V, U) => V.route.id === Y[U].route.id))
      )
        return { type: "success", matches: null };
      M = Y;
    }
  }
  function He(f) {
    (o = {}), (u = rr(f, n, void 0, o));
  }
  function Ve(f, v) {
    let b = u == null;
    ln(f, v, u || s, o, n), b && ((s = [...s]), de({}));
  }
  return (
    (T = {
      get basename() {
        return i;
      },
      get future() {
        return d;
      },
      get state() {
        return y;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: Qe,
      subscribe: Ce,
      enableScrollRestoration: O,
      navigate: vt,
      fetch: cr,
      revalidate: Ht,
      createHref: (f) => e.history.createHref(f),
      encodeLocation: (f) => e.history.encodeLocation(f),
      getFetcher: Et,
      deleteFetcher: Yt,
      dispose: ce,
      getBlocker: bt,
      deleteBlocker: Rt,
      patchRoutes: Ve,
      _internalFetchControllers: G,
      _internalSetRoutes: He,
    }),
    T
  );
}
function no(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Sr(e, t, r, a, n, o) {
  let s, u;
  if (n) {
    s = [];
    for (let c of t)
      if ((s.push(c), c.route.id === n)) {
        u = c;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let i = Ar(a || ".", Dr(s), xe(e.pathname, r) || e.pathname, o === "path");
  if (
    (a == null && ((i.search = e.search), (i.hash = e.hash)),
    (a == null || a === "" || a === ".") && u)
  ) {
    let c = $r(i.search);
    if (u.route.index && !c)
      i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && c) {
      let d = new URLSearchParams(i.search),
        p = d.getAll("index");
      d.delete("index"),
        p.filter((g) => g).forEach((g) => d.append("index", g));
      let h = d.toString();
      i.search = h ? `?${h}` : "";
    }
  }
  return (
    r !== "/" && (i.pathname = i.pathname === "/" ? r : Ye([r, i.pathname])),
    qe(i)
  );
}
function an(e, t, r) {
  if (!r || !no(r)) return { path: t };
  if (r.formMethod && !yo(r.formMethod))
    return { path: t, error: Me(405, { method: r.formMethod }) };
  let a = () => ({ path: t, error: Me(400, { type: "invalid-body" }) }),
    o = (r.formMethod || "get").toUpperCase(),
    s = zn(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Pe(o)) return a();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (h, [g, E]) => `${h}${g}=${E}
`,
                "",
              )
            : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Pe(o)) return a();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return a();
      }
    }
  }
  ee(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let u, i;
  if (r.formData) (u = Lr(r.formData)), (i = r.formData);
  else if (r.body instanceof FormData) (u = Lr(r.body)), (i = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (i = fn(u));
  else if (r.body == null) (u = new URLSearchParams()), (i = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (i = fn(u));
    } catch {
      return a();
    }
  let c = {
    formMethod: o,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: i,
    json: void 0,
    text: void 0,
  };
  if (Pe(c.formMethod)) return { path: t, submission: c };
  let d = Xe(t);
  return (
    e && d.search && $r(d.search) && u.append("index", ""),
    (d.search = `?${u}`),
    { path: qe(d), submission: c }
  );
}
function on(e, t, r, a, n, o, s, u, i, c, d, p, h, g, E, _, S, R, x) {
  var ge;
  let D = x ? (Te(x[1]) ? x[1].error : x[1].data) : void 0,
    k = n.createURL(o.location),
    T = n.createURL(i),
    y;
  if (d && o.errors) {
    let K = Object.keys(o.errors)[0];
    y = s.findIndex((te) => te.route.id === K);
  } else if (x && Te(x[1])) {
    let K = x[0];
    y = s.findIndex((te) => te.route.id === K) - 1;
  }
  let N = x ? x[1].statusCode : void 0,
    H = N && N >= 400,
    z = {
      currentUrl: k,
      currentParams: ((ge = o.matches[0]) == null ? void 0 : ge.params) || {},
      nextUrl: T,
      nextParams: s[0].params,
      ...u,
      actionResult: D,
      actionStatus: N,
    },
    ie = s.map((K, te) => {
      let { route: ue } = K,
        G = null;
      if (
        (y != null && te > y
          ? (G = !1)
          : ue.lazy
            ? (G = !0)
            : ue.loader == null
              ? (G = !1)
              : d
                ? (G = _r(ue, o.loaderData, o.errors))
                : ao(o.loaderData, o.matches[te], K) && (G = !0),
        G !== null)
      )
        return Cr(r, a, e, K, c, t, G);
      let me = H
          ? !1
          : p ||
            k.pathname + k.search === T.pathname + T.search ||
            k.search !== T.search ||
            oo(o.matches[te], K),
        we = { ...z, defaultShouldRevalidate: me },
        pe = ar(K, we);
      return Cr(r, a, e, K, c, t, pe, we);
    }),
    W = [];
  return (
    E.forEach((K, te) => {
      if (d || !s.some((j) => j.route.id === K.routeId) || g.has(te)) return;
      let ue = ze(S, K.path, R);
      if (!ue) {
        W.push({
          key: te,
          routeId: K.routeId,
          path: K.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (_.has(te)) return;
      let G = o.fetchers.get(te),
        me = At(ue, K.path),
        we = new AbortController(),
        pe = ht(n, K.path, we.signal),
        C = null;
      if (h.has(te)) h.delete(te), (C = mt(r, a, pe, ue, me, c, t));
      else if (G && G.state !== "idle" && G.data === void 0)
        p && (C = mt(r, a, pe, ue, me, c, t));
      else {
        let j = { ...z, defaultShouldRevalidate: H ? !1 : p };
        ar(me, j) && (C = mt(r, a, pe, ue, me, c, t, j));
      }
      C &&
        W.push({
          key: te,
          routeId: K.routeId,
          path: K.path,
          matches: C,
          match: me,
          request: pe,
          controller: we,
        });
    }),
    { dsMatches: ie, revalidatingFetchers: W }
  );
}
function _r(e, t, r) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let a = t != null && e.id in t,
    n = r != null && r[e.id] !== void 0;
  return !a && n
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !a && !n;
}
function ao(e, t, r) {
  let a = !t || r.route.id !== t.route.id,
    n = !e.hasOwnProperty(r.route.id);
  return a || n;
}
function oo(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function ar(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
function ln(e, t, r, a, n) {
  let o;
  if (e) {
    let i = a[e];
    ee(i, `No route found to patch children into: routeId = ${e}`),
      i.children || (i.children = []),
      (o = i.children);
  } else o = r;
  let s = t.filter((i) => !o.some((c) => $n(i, c))),
    u = rr(
      s,
      n,
      [e || "_", "patch", String((o == null ? void 0 : o.length) || "0")],
      a,
    );
  o.push(...u);
}
function $n(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, a) => {
            var n;
            return (n = t.children) == null ? void 0 : n.some((o) => $n(r, o));
          })
      : !1;
}
var sn = new WeakMap(),
  jn = ({ key: e, route: t, manifest: r, mapRouteProperties: a }) => {
    let n = r[t.id];
    if (
      (ee(n, "No route found in manifest"),
      !n.lazy || typeof n.lazy != "object")
    )
      return;
    let o = n.lazy[e];
    if (!o) return;
    let s = sn.get(n);
    s || ((s = {}), sn.set(n, s));
    let u = s[e];
    if (u) return u;
    let i = (async () => {
      let c = Ta(e),
        p = n[e] !== void 0 && e !== "hasErrorBoundary";
      if (c)
        fe(
          !c,
          "Route property " +
            e +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (s[e] = Promise.resolve());
      else if (p)
        fe(
          !1,
          `Route "${n.id}" has a static property "${e}" defined. The lazy property will be ignored.`,
        );
      else {
        let h = await o();
        h != null && (Object.assign(n, { [e]: h }), Object.assign(n, a(n)));
      }
      typeof n.lazy == "object" &&
        ((n.lazy[e] = void 0),
        Object.values(n.lazy).every((h) => h === void 0) && (n.lazy = void 0));
    })();
    return (s[e] = i), i;
  },
  un = new WeakMap();
function io(e, t, r, a, n) {
  let o = r[e.id];
  if ((ee(o, "No route found in manifest"), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == "function") {
    let d = un.get(o);
    if (d) return { lazyRoutePromise: d, lazyHandlerPromise: d };
    let p = (async () => {
      ee(typeof e.lazy == "function", "No lazy route function found");
      let h = await e.lazy(),
        g = {};
      for (let E in h) {
        let _ = h[E];
        if (_ === void 0) continue;
        let S = xa(E),
          x = o[E] !== void 0 && E !== "hasErrorBoundary";
        S
          ? fe(
              !S,
              "Route property " +
                E +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : x
            ? fe(
                !x,
                `Route "${o.id}" has a static property "${E}" defined but its lazy function is also returning a value for this property. The lazy route property "${E}" will be ignored.`,
              )
            : (g[E] = _);
      }
      Object.assign(o, g), Object.assign(o, { ...a(o), lazy: void 0 });
    })();
    return (
      un.set(o, p),
      p.catch(() => {}),
      { lazyRoutePromise: p, lazyHandlerPromise: p }
    );
  }
  let s = Object.keys(e.lazy),
    u = [],
    i;
  for (let d of s) {
    if (n && n.includes(d)) continue;
    let p = jn({ key: d, route: e, manifest: r, mapRouteProperties: a });
    p && (u.push(p), d === t && (i = p));
  }
  let c = u.length > 0 ? Promise.all(u).then(() => {}) : void 0;
  return (
    c == null || c.catch(() => {}),
    i == null || i.catch(() => {}),
    { lazyRoutePromise: c, lazyHandlerPromise: i }
  );
}
async function cn(e) {
  let t = e.matches.filter((n) => n.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((n) => n.resolve()))).forEach((n, o) => {
      r[t[o].route.id] = n;
    }),
    r
  );
}
async function lo(e) {
  return e.matches.some((t) => t.route.unstable_middleware)
    ? Fn(
        e,
        !1,
        () => cn(e),
        (t, r) => ({ [r]: { type: "error", result: t } }),
      )
    : cn(e);
}
async function Fn(e, t, r, a) {
  let { matches: n, request: o, params: s, context: u } = e,
    i = { handlerResult: void 0 };
  try {
    let c = n.flatMap((p) =>
        p.route.unstable_middleware
          ? p.route.unstable_middleware.map((h) => [p.route.id, h])
          : [],
      ),
      d = await Un({ request: o, params: s, context: u }, c, t, i, r);
    return t ? d : i.handlerResult;
  } catch (c) {
    if (!i.middlewareError) throw c;
    let d = await a(i.middlewareError.error, i.middlewareError.routeId);
    return i.handlerResult ? Object.assign(i.handlerResult, d) : d;
  }
}
async function Un(e, t, r, a, n, o = 0) {
  let { request: s } = e;
  if (s.signal.aborted)
    throw s.signal.reason
      ? s.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${s.method} ${s.url}`,
        );
  let u = t[o];
  if (!u) return (a.handlerResult = await n()), a.handlerResult;
  let [i, c] = u,
    d = !1,
    p,
    h = async () => {
      if (d) throw new Error("You may only call `next()` once per middleware");
      (d = !0), await Un(e, t, r, a, n, o + 1);
    };
  try {
    let g = await c(
      { request: e.request, params: e.params, context: e.context },
      h,
    );
    return d ? (g === void 0 ? p : g) : h();
  } catch (g) {
    throw (
      (a.middlewareError
        ? a.middlewareError.error !== g &&
          (a.middlewareError = { routeId: i, error: g })
        : (a.middlewareError = { routeId: i, error: g }),
      g)
    );
  }
}
function Hn(e, t, r, a, n) {
  let o = jn({
      key: "unstable_middleware",
      route: a.route,
      manifest: t,
      mapRouteProperties: e,
    }),
    s = io(a.route, Pe(r.method) ? "action" : "loader", t, e, n);
  return {
    middleware: o,
    route: s.lazyRoutePromise,
    handler: s.lazyHandlerPromise,
  };
}
function Cr(e, t, r, a, n, o, s, u = null) {
  let i = !1,
    c = Hn(e, t, r, a, n);
  return {
    ...a,
    _lazyPromises: c,
    shouldLoad: s,
    unstable_shouldRevalidateArgs: u,
    unstable_shouldCallHandler(d) {
      return (
        (i = !0),
        u
          ? typeof d == "boolean"
            ? ar(a, { ...u, defaultShouldRevalidate: d })
            : ar(a, u)
          : s
      );
    },
    resolve(d) {
      return i ||
        s ||
        (d && r.method === "GET" && (a.route.lazy || a.route.loader))
        ? uo({
            request: r,
            match: a,
            lazyHandlerPromise: c == null ? void 0 : c.handler,
            lazyRoutePromise: c == null ? void 0 : c.route,
            handlerOverride: d,
            scopedContext: o,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function mt(e, t, r, a, n, o, s, u = null) {
  return a.map((i) =>
    i.route.id !== n.route.id
      ? {
          ...i,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: u,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Hn(e, t, r, i, o),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : Cr(e, t, r, i, o, s, !0, u),
  );
}
async function so(e, t, r, a, n, o) {
  r.some((c) => {
    var d;
    return (d = c._lazyPromises) == null ? void 0 : d.middleware;
  }) &&
    (await Promise.all(
      r.map((c) => {
        var d;
        return (d = c._lazyPromises) == null ? void 0 : d.middleware;
      }),
    ));
  let s = { request: t, params: r[0].params, context: n, matches: r },
    i = await e({
      ...s,
      fetcherKey: a,
      unstable_runClientMiddleware: (c) => {
        let d = s;
        return Fn(
          d,
          !1,
          () =>
            c({
              ...d,
              fetcherKey: a,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler",
                );
              },
            }),
          (p, h) => ({ [h]: { type: "error", result: p } }),
        );
      },
    });
  try {
    await Promise.all(
      r.flatMap((c) => {
        var d, p;
        return [
          (d = c._lazyPromises) == null ? void 0 : d.handler,
          (p = c._lazyPromises) == null ? void 0 : p.route,
        ];
      }),
    );
  } catch {}
  return i;
}
async function uo({
  request: e,
  match: t,
  lazyHandlerPromise: r,
  lazyRoutePromise: a,
  handlerOverride: n,
  scopedContext: o,
}) {
  let s,
    u,
    i = Pe(e.method),
    c = i ? "action" : "loader",
    d = (p) => {
      let h,
        g = new Promise((S, R) => (h = R));
      (u = () => h()), e.signal.addEventListener("abort", u);
      let E = (S) =>
          typeof p != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${c}" [routeId: ${t.route.id}]`,
                ),
              )
            : p(
                { request: e, params: t.params, context: o },
                ...(S !== void 0 ? [S] : []),
              ),
        _ = (async () => {
          try {
            return { type: "data", result: await (n ? n((R) => E(R)) : E()) };
          } catch (S) {
            return { type: "error", result: S };
          }
        })();
      return Promise.race([_, g]);
    };
  try {
    let p = i ? t.route.action : t.route.loader;
    if (r || a)
      if (p) {
        let h,
          [g] = await Promise.all([
            d(p).catch((E) => {
              h = E;
            }),
            r,
            a,
          ]);
        if (h !== void 0) throw h;
        s = g;
      } else {
        await r;
        let h = i ? t.route.action : t.route.loader;
        if (h) [s] = await Promise.all([d(h), a]);
        else if (c === "action") {
          let g = new URL(e.url),
            E = g.pathname + g.search;
          throw Me(405, { method: e.method, pathname: E, routeId: t.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (p) s = await d(p);
    else {
      let h = new URL(e.url),
        g = h.pathname + h.search;
      throw Me(404, { pathname: g });
    }
  } catch (p) {
    return { type: "error", result: p };
  } finally {
    u && e.signal.removeEventListener("abort", u);
  }
  return s;
}
async function co(e) {
  var a, n, o, s, u, i;
  let { result: t, type: r } = e;
  if (Ir(t)) {
    let c;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (c = null)
          : (c = await t.json())
        : (c = await t.text());
    } catch (d) {
      return { type: "error", error: d };
    }
    return r === "error"
      ? {
          type: "error",
          error: new Ke(t.status, t.statusText, c),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: c, statusCode: t.status, headers: t.headers };
  }
  return r === "error"
    ? Tr(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: (a = t.init) == null ? void 0 : a.status,
            headers:
              (n = t.init) != null && n.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new Ke(
              ((o = t.init) == null ? void 0 : o.status) || 500,
              void 0,
              t.data,
            ),
            statusCode: lt(t) ? t.status : void 0,
            headers:
              (s = t.init) != null && s.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
      : { type: "error", error: t, statusCode: lt(t) ? t.status : void 0 }
    : Tr(t)
      ? {
          type: "data",
          data: t.data,
          statusCode: (u = t.init) == null ? void 0 : u.status,
          headers:
            (i = t.init) != null && i.headers
              ? new Headers(t.init.headers)
              : void 0,
        }
      : { type: "data", data: t };
}
function fo(e, t, r, a, n) {
  let o = e.headers.get("Location");
  if (
    (ee(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Nr.test(o))
  ) {
    let s = a.slice(0, a.findIndex((u) => u.route.id === r) + 1);
    (o = Sr(new URL(t.url), s, n, o)), e.headers.set("Location", o);
  }
  return e;
}
function dn(e, t, r) {
  if (Nr.test(e)) {
    let a = e,
      n = a.startsWith("//") ? new URL(t.protocol + a) : new URL(a),
      o = xe(n.pathname, r) != null;
    if (n.origin === t.origin && o) return n.pathname + n.search + n.hash;
  }
  return e;
}
function ht(e, t, r, a) {
  let n = e.createURL(zn(t)).toString(),
    o = { signal: r };
  if (a && Pe(a.formMethod)) {
    let { formMethod: s, formEncType: u } = a;
    (o.method = s.toUpperCase()),
      u === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": u })),
          (o.body = JSON.stringify(a.json)))
        : u === "text/plain"
          ? (o.body = a.text)
          : u === "application/x-www-form-urlencoded" && a.formData
            ? (o.body = Lr(a.formData))
            : (o.body = a.formData);
  }
  return new Request(n, o);
}
function Lr(e) {
  let t = new URLSearchParams();
  for (let [r, a] of e.entries())
    t.append(r, typeof a == "string" ? a : a.name);
  return t;
}
function fn(e) {
  let t = new FormData();
  for (let [r, a] of e.entries()) t.append(r, a);
  return t;
}
function ho(e, t, r, a = !1, n = !1) {
  let o = {},
    s = null,
    u,
    i = !1,
    c = {},
    d = r && Te(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((p) => {
      if (!(p.route.id in t)) return;
      let h = p.route.id,
        g = t[h];
      if (
        (ee(!it(g), "Cannot handle redirect results in processLoaderData"),
        Te(g))
      ) {
        let E = g.error;
        if ((d !== void 0 && ((E = d), (d = void 0)), (s = s || {}), n))
          s[h] = E;
        else {
          let _ = ot(e, h);
          s[_.route.id] == null && (s[_.route.id] = E);
        }
        a || (o[h] = In),
          i || ((i = !0), (u = lt(g.error) ? g.error.status : 500)),
          g.headers && (c[h] = g.headers);
      } else
        (o[h] = g.data),
          g.statusCode && g.statusCode !== 200 && !i && (u = g.statusCode),
          g.headers && (c[h] = g.headers);
    }),
    d !== void 0 && r && ((s = { [r[0]]: d }), r[2] && (o[r[2]] = void 0)),
    { loaderData: o, errors: s, statusCode: u || 200, loaderHeaders: c }
  );
}
function hn(e, t, r, a, n, o) {
  let { loaderData: s, errors: u } = ho(t, r, a);
  return (
    n
      .filter((i) => !i.matches || i.matches.some((c) => c.shouldLoad))
      .forEach((i) => {
        let { key: c, match: d, controller: p } = i,
          h = o[c];
        if (
          (ee(h, "Did not find corresponding fetcher result"),
          !(p && p.signal.aborted))
        )
          if (Te(h)) {
            let g = ot(e.matches, d == null ? void 0 : d.route.id);
            (u && u[g.route.id]) || (u = { ...u, [g.route.id]: h.error }),
              e.fetchers.delete(c);
          } else if (it(h)) ee(!1, "Unhandled fetcher revalidation redirect");
          else {
            let g = Je(h.data);
            e.fetchers.set(c, g);
          }
      }),
    { loaderData: s, errors: u }
  );
}
function mn(e, t, r, a) {
  let n = Object.entries(t)
    .filter(([, o]) => o !== In)
    .reduce((o, [s, u]) => ((o[s] = u), o), {});
  for (let o of r) {
    let s = o.route.id;
    if (
      (!t.hasOwnProperty(s) &&
        e.hasOwnProperty(s) &&
        o.route.loader &&
        (n[s] = e[s]),
      a && a.hasOwnProperty(s))
    )
      break;
  }
  return n;
}
function pn(e) {
  return e
    ? Te(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function ot(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((a) => a.route.id === t) + 1) : [...e])
      .reverse()
      .find((a) => a.route.hasErrorBoundary === !0) || e[0]
  );
}
function yn(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Me(
  e,
  { pathname: t, routeId: r, method: a, type: n, message: o } = {},
) {
  let s = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((s = "Bad Request"),
        a && t && r
          ? (u = `You made a ${a} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : n === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
        ? ((s = "Forbidden"), (u = `Route "${r}" does not match URL "${t}"`))
        : e === 404
          ? ((s = "Not Found"), (u = `No route matches URL "${t}"`))
          : e === 405 &&
            ((s = "Method Not Allowed"),
            a && t && r
              ? (u = `You made a ${a.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : a && (u = `Invalid request method "${a.toUpperCase()}"`)),
    new Ke(e || 500, s, new Error(u), !0)
  );
}
function Vt(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [a, n] = t[r];
    if (it(n)) return { key: a, result: n };
  }
}
function zn(e) {
  let t = typeof e == "string" ? Xe(e) : e;
  return qe({ ...t, hash: "" });
}
function mo(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function po(e) {
  return Ir(e.result) && Za.has(e.result.status);
}
function Te(e) {
  return e.type === "error";
}
function it(e) {
  return (e && e.type) === "redirect";
}
function Tr(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function Ir(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function yo(e) {
  return Qa.has(e.toUpperCase());
}
function Pe(e) {
  return Ka.has(e.toUpperCase());
}
function $r(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function At(e, t) {
  let r = typeof t == "string" ? Xe(t).search : t.search;
  if (e[e.length - 1].route.index && $r(r || "")) return e[e.length - 1];
  let a = Dn(e);
  return a[a.length - 1];
}
function vn(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: a,
    text: n,
    formData: o,
    json: s,
  } = e;
  if (!(!t || !r || !a)) {
    if (n != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: void 0,
        json: void 0,
        text: n,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function gr(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function vo(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ot(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function go(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Je(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function wo(e, t) {
  try {
    let r = e.sessionStorage.getItem(Nn);
    if (r) {
      let a = JSON.parse(r);
      for (let [n, o] of Object.entries(a || {}))
        o && Array.isArray(o) && t.set(n, new Set(o || []));
    }
  } catch {}
}
function Eo(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [a, n] of t) r[a] = [...n];
    try {
      e.sessionStorage.setItem(Nn, JSON.stringify(r));
    } catch (a) {
      fe(
        !1,
        `Failed to save applied view transitions in sessionStorage (${a}).`,
      );
    }
  }
}
function bo() {
  let e,
    t,
    r = new Promise((a, n) => {
      (e = async (o) => {
        a(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          n(o);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: e, reject: t };
}
var st = m.createContext(null);
st.displayName = "DataRouter";
var pt = m.createContext(null);
pt.displayName = "DataRouterState";
var jr = m.createContext({ isTransitioning: !1 });
jr.displayName = "ViewTransition";
var Yn = m.createContext(new Map());
Yn.displayName = "Fetchers";
var Ro = m.createContext(null);
Ro.displayName = "Await";
var De = m.createContext(null);
De.displayName = "Navigation";
var ir = m.createContext(null);
ir.displayName = "Location";
var $e = m.createContext({ outlet: null, matches: [], isDataRoute: !1 });
$e.displayName = "Route";
var Fr = m.createContext(null);
Fr.displayName = "RouteError";
function So(e, { relative: t } = {}) {
  ee(
    $t(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: r, navigator: a } = m.useContext(De),
    { hash: n, pathname: o, search: s } = jt(e, { relative: t }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Ye([r, o])),
    a.createHref({ pathname: u, search: s, hash: n })
  );
}
function $t() {
  return m.useContext(ir) != null;
}
function Be() {
  return (
    ee(
      $t(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    m.useContext(ir).location
  );
}
var Bn =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Wn(e) {
  m.useContext(De).static || m.useLayoutEffect(e);
}
function _o() {
  let { isDataRoute: e } = m.useContext($e);
  return e ? jo() : Co();
}
function Co() {
  ee(
    $t(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let e = m.useContext(st),
    { basename: t, navigator: r } = m.useContext(De),
    { matches: a } = m.useContext($e),
    { pathname: n } = Be(),
    o = JSON.stringify(Dr(a)),
    s = m.useRef(!1);
  return (
    Wn(() => {
      s.current = !0;
    }),
    m.useCallback(
      (i, c = {}) => {
        if ((fe(s.current, Bn), !s.current)) return;
        if (typeof i == "number") {
          r.go(i);
          return;
        }
        let d = Ar(i, JSON.parse(o), n, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Ye([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, n, e],
    )
  );
}
var Lo = m.createContext(null);
function To(e) {
  let t = m.useContext($e).outlet;
  return t && m.createElement(Lo.Provider, { value: e }, t);
}
function ml() {
  let { matches: e } = m.useContext($e),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function jt(e, { relative: t } = {}) {
  let { matches: r } = m.useContext($e),
    { pathname: a } = Be(),
    n = JSON.stringify(Dr(r));
  return m.useMemo(() => Ar(e, JSON.parse(n), a, t === "path"), [e, n, a, t]);
}
function Po(e, t, r, a) {
  ee(
    $t(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: n, static: o } = m.useContext(De),
    { matches: s } = m.useContext($e),
    u = s[s.length - 1],
    i = u ? u.params : {},
    c = u ? u.pathname : "/",
    d = u ? u.pathnameBase : "/",
    p = u && u.route;
  {
    let x = (p && p.path) || "";
    Jn(
      c,
      !p || x.endsWith("*") || x.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x === "/" ? "*" : `${x}/*`}">.`,
    );
  }
  let h = Be(),
    g;
  g = h;
  let E = g.pathname || "/",
    _ = E;
  if (d !== "/") {
    let x = d.replace(/^\//, "").split("/");
    _ = "/" + E.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let S =
    !o && r && r.matches && r.matches.length > 0
      ? r.matches
      : ze(e, { pathname: _ });
  return (
    fe(
      p || S != null,
      `No routes matched location "${g.pathname}${g.search}${g.hash}" `,
    ),
    fe(
      S == null ||
        S[S.length - 1].route.element !== void 0 ||
        S[S.length - 1].route.Component !== void 0 ||
        S[S.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    Do(
      S &&
        S.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, i, x.params),
            pathname: Ye([
              d,
              n.encodeLocation
                ? n.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? d
                : Ye([
                    d,
                    n.encodeLocation
                      ? n.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      s,
      r,
      a,
    )
  );
}
function xo() {
  let e = Gn(),
    t = lt(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    a = "rgba(200,200,200, 0.5)",
    n = { padding: "0.5rem", backgroundColor: a },
    o = { padding: "2px 4px", backgroundColor: a },
    s = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (s = m.createElement(
      m.Fragment,
      null,
      m.createElement("p", null, "💿 Hey developer 👋"),
      m.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        m.createElement("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        m.createElement("code", { style: o }, "errorElement"),
        " prop on your route.",
      ),
    )),
    m.createElement(
      m.Fragment,
      null,
      m.createElement("h2", null, "Unexpected Application Error!"),
      m.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? m.createElement("pre", { style: n }, r) : null,
      s,
    )
  );
}
var Oo = m.createElement(xo, null),
  ko = class extends m.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t,
      );
    }
    render() {
      return this.state.error !== void 0
        ? m.createElement(
            $e.Provider,
            { value: this.props.routeContext },
            m.createElement(Fr.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Mo({ routeContext: e, match: t, children: r }) {
  let a = m.useContext(st);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = t.route.id),
    m.createElement($e.Provider, { value: e }, r)
  );
}
function Do(e, t = [], r = null, a = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let n = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let i = n.findIndex(
      (c) => c.route.id && (o == null ? void 0 : o[c.route.id]) !== void 0,
    );
    ee(
      i >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`,
    ),
      (n = n.slice(0, Math.min(n.length, i + 1)));
  }
  let s = !1,
    u = -1;
  if (r)
    for (let i = 0; i < n.length; i++) {
      let c = n[i];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = i),
        c.route.id)
      ) {
        let { loaderData: d, errors: p } = r,
          h =
            c.route.loader &&
            !d.hasOwnProperty(c.route.id) &&
            (!p || p[c.route.id] === void 0);
        if (c.route.lazy || h) {
          (s = !0), u >= 0 ? (n = n.slice(0, u + 1)) : (n = [n[0]]);
          break;
        }
      }
    }
  return n.reduceRight((i, c, d) => {
    let p,
      h = !1,
      g = null,
      E = null;
    r &&
      ((p = o && c.route.id ? o[c.route.id] : void 0),
      (g = c.route.errorElement || Oo),
      s &&
        (u < 0 && d === 0
          ? (Jn(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (h = !0),
            (E = null))
          : u === d &&
            ((h = !0), (E = c.route.hydrateFallbackElement || null))));
    let _ = t.concat(n.slice(0, d + 1)),
      S = () => {
        let R;
        return (
          p
            ? (R = g)
            : h
              ? (R = E)
              : c.route.Component
                ? (R = m.createElement(c.route.Component, null))
                : c.route.element
                  ? (R = c.route.element)
                  : (R = i),
          m.createElement(Mo, {
            match: c,
            routeContext: { outlet: i, matches: _, isDataRoute: r != null },
            children: R,
          })
        );
      };
    return r && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
      ? m.createElement(ko, {
          location: r.location,
          revalidation: r.revalidation,
          component: g,
          error: p,
          children: S(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
        })
      : S();
  }, null);
}
function Ur(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ao(e) {
  let t = m.useContext(st);
  return ee(t, Ur(e)), t;
}
function Ft(e) {
  let t = m.useContext(pt);
  return ee(t, Ur(e)), t;
}
function No(e) {
  let t = m.useContext($e);
  return ee(t, Ur(e)), t;
}
function Ut(e) {
  let t = No(e),
    r = t.matches[t.matches.length - 1];
  return (
    ee(
      r.route.id,
      `${e} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function Io() {
  return Ut("useRouteId");
}
function $o() {
  return Ft("useNavigation").navigation;
}
function Vn() {
  let { matches: e, loaderData: t } = Ft("useMatches");
  return m.useMemo(() => e.map((r) => xn(r, t)), [e, t]);
}
function pl() {
  let e = Ft("useLoaderData"),
    t = Ut("useLoaderData");
  return e.loaderData[t];
}
function yl() {
  let e = Ft("useActionData"),
    t = Ut("useLoaderData");
  return e.actionData ? e.actionData[t] : void 0;
}
function Gn() {
  var a;
  let e = m.useContext(Fr),
    t = Ft("useRouteError"),
    r = Ut("useRouteError");
  return e !== void 0 ? e : (a = t.errors) == null ? void 0 : a[r];
}
function jo() {
  let { router: e } = Ao("useNavigate"),
    t = Ut("useNavigate"),
    r = m.useRef(!1);
  return (
    Wn(() => {
      r.current = !0;
    }),
    m.useCallback(
      async (n, o = {}) => {
        fe(r.current, Bn),
          r.current &&
            (typeof n == "number"
              ? e.navigate(n)
              : await e.navigate(n, { fromRouteId: t, ...o }));
      },
      [e, t],
    )
  );
}
var gn = {};
function Jn(e, t, r) {
  !t && !gn[e] && ((gn[e] = !0), fe(!1, r));
}
var wn = {};
function En(e, t) {
  !e && !wn[t] && ((wn[t] = !0), console.warn(t));
}
function vl(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        fe(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(t, {
        element: m.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        fe(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(t, {
        hydrateFallbackElement: m.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        fe(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
        ),
      Object.assign(t, {
        errorElement: m.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var gl = ["HydrateFallback", "hydrateFallbackElement"],
  Fo = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((e, t) => {
          (this.resolve = (r) => {
            this.status === "pending" && ((this.status = "resolved"), e(r));
          }),
            (this.reject = (r) => {
              this.status === "pending" && ((this.status = "rejected"), t(r));
            });
        }));
    }
  };
function wl({ router: e, flushSync: t }) {
  let [r, a] = m.useState(e.state),
    [n, o] = m.useState(),
    [s, u] = m.useState({ isTransitioning: !1 }),
    [i, c] = m.useState(),
    [d, p] = m.useState(),
    [h, g] = m.useState(),
    E = m.useRef(new Map()),
    _ = m.useCallback(
      (D, { deletedFetchers: k, flushSync: T, viewTransitionOpts: y }) => {
        D.fetchers.forEach((H, z) => {
          H.data !== void 0 && E.current.set(z, H.data);
        }),
          k.forEach((H) => E.current.delete(H)),
          En(
            T === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          );
        let N =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          (En(
            y == null || N,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !y || !N)
        ) {
          t && T ? t(() => a(D)) : m.startTransition(() => a(D));
          return;
        }
        if (t && T) {
          t(() => {
            d && (i && i.resolve(), d.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: y.currentLocation,
                nextLocation: y.nextLocation,
              });
          });
          let H = e.window.document.startViewTransition(() => {
            t(() => a(D));
          });
          H.finished.finally(() => {
            t(() => {
              c(void 0), p(void 0), o(void 0), u({ isTransitioning: !1 });
            });
          }),
            t(() => p(H));
          return;
        }
        d
          ? (i && i.resolve(),
            d.skipTransition(),
            g({
              state: D,
              currentLocation: y.currentLocation,
              nextLocation: y.nextLocation,
            }))
          : (o(D),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: y.currentLocation,
              nextLocation: y.nextLocation,
            }));
      },
      [e.window, t, d, i],
    );
  m.useLayoutEffect(() => e.subscribe(_), [e, _]),
    m.useEffect(() => {
      s.isTransitioning && !s.flushSync && c(new Fo());
    }, [s]),
    m.useEffect(() => {
      if (i && n && e.window) {
        let D = n,
          k = i.promise,
          T = e.window.document.startViewTransition(async () => {
            m.startTransition(() => a(D)), await k;
          });
        T.finished.finally(() => {
          c(void 0), p(void 0), o(void 0), u({ isTransitioning: !1 });
        }),
          p(T);
      }
    }, [n, i, e.window]),
    m.useEffect(() => {
      i && n && r.location.key === n.location.key && i.resolve();
    }, [i, d, r.location, n]),
    m.useEffect(() => {
      !s.isTransitioning &&
        h &&
        (o(h.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: h.currentLocation,
          nextLocation: h.nextLocation,
        }),
        g(void 0));
    }, [s.isTransitioning, h]);
  let S = m.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (D) => e.navigate(D),
        push: (D, k, T) =>
          e.navigate(D, {
            state: k,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
        replace: (D, k, T) =>
          e.navigate(D, {
            replace: !0,
            state: k,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
      }),
      [e],
    ),
    R = e.basename || "/",
    x = m.useMemo(
      () => ({ router: e, navigator: S, static: !1, basename: R }),
      [e, S, R],
    );
  return m.createElement(
    m.Fragment,
    null,
    m.createElement(
      st.Provider,
      { value: x },
      m.createElement(
        pt.Provider,
        { value: r },
        m.createElement(
          Yn.Provider,
          { value: E.current },
          m.createElement(
            jr.Provider,
            { value: s },
            m.createElement(
              zo,
              {
                basename: R,
                location: r.location,
                navigationType: r.historyAction,
                navigator: S,
              },
              m.createElement(Uo, {
                routes: e.routes,
                future: e.future,
                state: r,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var Uo = m.memo(Ho);
function Ho({ routes: e, future: t, state: r }) {
  return Po(e, void 0, r, t);
}
function El(e) {
  return To(e.context);
}
function zo({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: a = "POP",
  navigator: n,
  static: o = !1,
}) {
  ee(
    !$t(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let s = e.replace(/^\/*/, "/"),
    u = m.useMemo(
      () => ({ basename: s, navigator: n, static: o, future: {} }),
      [s, n, o],
    );
  typeof r == "string" && (r = Xe(r));
  let {
      pathname: i = "/",
      search: c = "",
      hash: d = "",
      state: p = null,
      key: h = "default",
    } = r,
    g = m.useMemo(() => {
      let E = xe(i, s);
      return E == null
        ? null
        : {
            location: { pathname: E, search: c, hash: d, state: p, key: h },
            navigationType: a,
          };
    }, [s, i, c, d, p, h, a]);
  return (
    fe(
      g != null,
      `<Router basename="${s}"> is not able to match the URL "${i}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    g == null
      ? null
      : m.createElement(
          De.Provider,
          { value: u },
          m.createElement(ir.Provider, { children: t, value: g }),
        )
  );
}
var Qt = "get",
  Zt = "application/x-www-form-urlencoded";
function lr(e) {
  return e != null && typeof e.tagName == "string";
}
function Yo(e) {
  return lr(e) && e.tagName.toLowerCase() === "button";
}
function Bo(e) {
  return lr(e) && e.tagName.toLowerCase() === "form";
}
function Wo(e) {
  return lr(e) && e.tagName.toLowerCase() === "input";
}
function Vo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Go(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Vo(e);
}
var Gt = null;
function Jo() {
  if (Gt === null)
    try {
      new FormData(document.createElement("form"), 0), (Gt = !1);
    } catch {
      Gt = !0;
    }
  return Gt;
}
var qo = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function wr(e) {
  return e != null && !qo.has(e)
    ? (fe(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zt}"`,
      ),
      null)
    : e;
}
function Ko(e, t) {
  let r, a, n, o, s;
  if (Bo(e)) {
    let u = e.getAttribute("action");
    (a = u ? xe(u, t) : null),
      (r = e.getAttribute("method") || Qt),
      (n = wr(e.getAttribute("enctype")) || Zt),
      (o = new FormData(e));
  } else if (Yo(e) || (Wo(e) && (e.type === "submit" || e.type === "image"))) {
    let u = e.form;
    if (u == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let i = e.getAttribute("formaction") || u.getAttribute("action");
    if (
      ((a = i ? xe(i, t) : null),
      (r = e.getAttribute("formmethod") || u.getAttribute("method") || Qt),
      (n =
        wr(e.getAttribute("formenctype")) ||
        wr(u.getAttribute("enctype")) ||
        Zt),
      (o = new FormData(u, e)),
      !Jo())
    ) {
      let { name: c, type: d, value: p } = e;
      if (d === "image") {
        let h = c ? `${c}.` : "";
        o.append(`${h}x`, "0"), o.append(`${h}y`, "0");
      } else c && o.append(c, p);
    }
  } else {
    if (lr(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (r = Qt), (a = null), (n = Zt), (s = e);
  }
  return (
    o && n === "text/plain" && ((s = o), (o = void 0)),
    { action: a, method: r.toLowerCase(), encType: n, formData: o, body: s }
  );
}
function Re(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function qn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Xo(e, t, r) {
  let a = e
      .map((o) => {
        var i;
        let s = t[o.route.id],
          u = r.routes[o.route.id];
        return [
          u && u.css ? u.css.map((c) => ({ rel: "stylesheet", href: c })) : [],
          ((i = s == null ? void 0 : s.links) == null ? void 0 : i.call(s)) ||
            [],
        ];
      })
      .flat(2),
    n = zr(e, r);
  return Zn(a, n);
}
function Kn(e) {
  return e.css ? e.css.map((t) => ({ rel: "stylesheet", href: t })) : [];
}
async function Qo(e) {
  if (!e.css) return;
  let t = Kn(e);
  await Promise.all(t.map(Qn));
}
async function Xn(e, t) {
  if ((!e.css && !t.links) || !ni()) return;
  let r = [];
  if (
    (e.css && r.push(...Kn(e)), t.links && r.push(...t.links()), r.length === 0)
  )
    return;
  let a = [];
  for (let n of r)
    !Hr(n) &&
      n.rel === "stylesheet" &&
      a.push({ ...n, rel: "preload", as: "style" });
  await Promise.all(a.map(Qn));
}
async function Qn(e) {
  return new Promise((t) => {
    if (
      (e.media && !window.matchMedia(e.media).matches) ||
      document.querySelector(`link[rel="stylesheet"][href="${e.href}"]`)
    )
      return t();
    let r = document.createElement("link");
    Object.assign(r, e);
    function a() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    (r.onload = () => {
      a(), t();
    }),
      (r.onerror = () => {
        a(), t();
      }),
      document.head.appendChild(r);
  });
}
function Hr(e) {
  return e != null && typeof e.page == "string";
}
function Zo(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function ei(e, t, r) {
  let a = await Promise.all(
    e.map(async (n) => {
      let o = t.routes[n.route.id];
      if (o) {
        let s = await qn(o, r);
        return s.links ? s.links() : [];
      }
      return [];
    }),
  );
  return Zn(
    a
      .flat(1)
      .filter(Zo)
      .filter((n) => n.rel === "stylesheet" || n.rel === "preload")
      .map((n) =>
        n.rel === "stylesheet"
          ? { ...n, rel: "prefetch", as: "style" }
          : { ...n, rel: "prefetch" },
      ),
  );
}
function bn(e, t, r, a, n, o) {
  let s = (i, c) => (r[c] ? i.route.id !== r[c].route.id : !0),
    u = (i, c) => {
      var d;
      return (
        r[c].pathname !== i.pathname ||
        (((d = r[c].route.path) == null ? void 0 : d.endsWith("*")) &&
          r[c].params["*"] !== i.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((i, c) => s(i, c) || u(i, c))
    : o === "data"
      ? t.filter((i, c) => {
          var p;
          let d = a.routes[i.route.id];
          if (!d || !d.hasLoader) return !1;
          if (s(i, c) || u(i, c)) return !0;
          if (i.route.shouldRevalidate) {
            let h = i.route.shouldRevalidate({
              currentUrl: new URL(
                n.pathname + n.search + n.hash,
                window.origin,
              ),
              currentParams: ((p = r[0]) == null ? void 0 : p.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: i.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof h == "boolean") return h;
          }
          return !0;
        })
      : [];
}
function zr(e, t, { includeHydrateFallback: r } = {}) {
  return ti(
    e
      .map((a) => {
        let n = t.routes[a.route.id];
        if (!n) return [];
        let o = [n.module];
        return (
          n.clientActionModule && (o = o.concat(n.clientActionModule)),
          n.clientLoaderModule && (o = o.concat(n.clientLoaderModule)),
          r &&
            n.hydrateFallbackModule &&
            (o = o.concat(n.hydrateFallbackModule)),
          n.imports && (o = o.concat(n.imports)),
          o
        );
      })
      .flat(1),
  );
}
function ti(e) {
  return [...new Set(e)];
}
function ri(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let a of r) t[a] = e[a];
  return t;
}
function Zn(e, t) {
  let r = new Set(),
    a = new Set(t);
  return e.reduce((n, o) => {
    if (t && !Hr(o) && o.as === "script" && o.href && a.has(o.href)) return n;
    let u = JSON.stringify(ri(o));
    return r.has(u) || (r.add(u), n.push({ key: u, link: o })), n;
  }, []);
}
var Jt;
function ni() {
  if (Jt !== void 0) return Jt;
  let e = document.createElement("link");
  return (Jt = e.relList.supports("preload")), (e = null), Jt;
}
function Rn(e) {
  return { __html: e };
}
var ai = -1,
  oi = -2,
  ii = -3,
  li = -4,
  si = -5,
  ui = -6,
  ci = -7,
  di = "B",
  fi = "D",
  ea = "E",
  hi = "M",
  mi = "N",
  ta = "P",
  pi = "R",
  yi = "S",
  vi = "Y",
  gi = "U",
  wi = "Z",
  ra = class {
    constructor() {
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function Ei() {
  const e = new TextDecoder();
  let t = "";
  return new TransformStream({
    transform(r, a) {
      const n = e.decode(r, { stream: !0 }),
        o = (t + n).split(`
`);
      t = o.pop() || "";
      for (const s of o) a.enqueue(s);
    },
    flush(r) {
      t && r.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Er =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
function Pr(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == "number") return Sn.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const a = r.length;
  for (const n of e) r.push(n);
  return (t.length = r.length), Sn.call(this, a);
}
function Sn(e) {
  const { hydrated: t, values: r, deferred: a, plugins: n } = this;
  let o;
  const s = [
    [
      e,
      (i) => {
        o = i;
      },
    ],
  ];
  let u = [];
  for (; s.length > 0; ) {
    const [i, c] = s.pop();
    switch (i) {
      case ci:
        c(void 0);
        continue;
      case si:
        c(null);
        continue;
      case oi:
        c(NaN);
        continue;
      case ui:
        c(1 / 0);
        continue;
      case ii:
        c(-1 / 0);
        continue;
      case li:
        c(-0);
        continue;
    }
    if (t[i]) {
      c(t[i]);
      continue;
    }
    const d = r[i];
    if (!d || typeof d != "object") {
      (t[i] = d), c(d);
      continue;
    }
    if (Array.isArray(d))
      if (typeof d[0] == "string") {
        const [p, h, g] = d;
        switch (p) {
          case fi:
            c((t[i] = new Date(h)));
            continue;
          case gi:
            c((t[i] = new URL(h)));
            continue;
          case di:
            c((t[i] = BigInt(h)));
            continue;
          case pi:
            c((t[i] = new RegExp(h, g)));
            continue;
          case vi:
            c((t[i] = Symbol.for(h)));
            continue;
          case yi:
            const E = new Set();
            t[i] = E;
            for (let k = d.length - 1; k > 0; k--)
              s.push([
                d[k],
                (T) => {
                  E.add(T);
                },
              ]);
            c(E);
            continue;
          case hi:
            const _ = new Map();
            t[i] = _;
            for (let k = d.length - 2; k > 0; k -= 2) {
              const T = [];
              s.push([
                d[k + 1],
                (y) => {
                  T[1] = y;
                },
              ]),
                s.push([
                  d[k],
                  (y) => {
                    T[0] = y;
                  },
                ]),
                u.push(() => {
                  _.set(T[0], T[1]);
                });
            }
            c(_);
            continue;
          case mi:
            const S = Object.create(null);
            t[i] = S;
            for (const k of Object.keys(h).reverse()) {
              const T = [];
              s.push([
                h[k],
                (y) => {
                  T[1] = y;
                },
              ]),
                s.push([
                  Number(k.slice(1)),
                  (y) => {
                    T[0] = y;
                  },
                ]),
                u.push(() => {
                  S[T[0]] = T[1];
                });
            }
            c(S);
            continue;
          case ta:
            if (t[h]) c((t[i] = t[h]));
            else {
              const k = new ra();
              (a[h] = k), c((t[i] = k.promise));
            }
            continue;
          case ea:
            const [, R, x] = d;
            let D = x && Er && Er[x] ? new Er[x](R) : new Error(R);
            (t[i] = D), c(D);
            continue;
          case wi:
            c((t[i] = t[h]));
            continue;
          default:
            if (Array.isArray(n)) {
              const k = [],
                T = d.slice(1);
              for (let y = 0; y < T.length; y++) {
                const N = T[y];
                s.push([
                  N,
                  (H) => {
                    k[y] = H;
                  },
                ]);
              }
              u.push(() => {
                for (const y of n) {
                  const N = y(d[0], ...k);
                  if (N) {
                    c((t[i] = N.value));
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const p = [];
        t[i] = p;
        for (let h = 0; h < d.length; h++) {
          const g = d[h];
          g !== ai &&
            s.push([
              g,
              (E) => {
                p[h] = E;
              },
            ]);
        }
        c(p);
        continue;
      }
    else {
      const p = {};
      t[i] = p;
      for (const h of Object.keys(d).reverse()) {
        const g = [];
        s.push([
          d[h],
          (E) => {
            g[1] = E;
          },
        ]),
          s.push([
            Number(h.slice(1)),
            (E) => {
              g[0] = E;
            },
          ]),
          u.push(() => {
            p[g[0]] = g[1];
          });
      }
      c(p);
      continue;
    }
  }
  for (; u.length > 0; ) u.pop()();
  return o;
}
async function bi(e, t) {
  const { plugins: r } = t ?? {},
    a = new ra(),
    n = e.pipeThrough(Ei()).getReader(),
    o = { values: [], hydrated: [], deferred: {}, plugins: r },
    s = await Ri.call(o, n);
  let u = a.promise;
  return (
    s.done
      ? a.resolve()
      : (u = Si.call(o, n)
          .then(a.resolve)
          .catch((i) => {
            for (const c of Object.values(o.deferred)) c.reject(i);
            a.reject(i);
          })),
    { done: u.then(() => n.closed), value: s.value }
  );
}
async function Ri(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: Pr.call(this, r) };
}
async function Si(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const r = t.value;
    switch (r[0]) {
      case ta: {
        const a = r.indexOf(":"),
          n = Number(r.slice(1, a)),
          o = this.deferred[n];
        if (!o) throw new Error(`Deferred ID ${n} not found in stream`);
        const s = r.slice(a + 1);
        let u;
        try {
          u = JSON.parse(s);
        } catch {
          throw new SyntaxError();
        }
        const i = Pr.call(this, u);
        o.resolve(i);
        break;
      }
      case ea: {
        const a = r.indexOf(":"),
          n = Number(r.slice(1, a)),
          o = this.deferred[n];
        if (!o) throw new Error(`Deferred ID ${n} not found in stream`);
        const s = r.slice(a + 1);
        let u;
        try {
          u = JSON.parse(s);
        } catch {
          throw new SyntaxError();
        }
        const i = Pr.call(this, u);
        o.reject(i);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
async function _i(e) {
  let t = { signal: e.signal };
  if (e.method !== "GET") {
    t.method = e.method;
    let r = e.headers.get("Content-Type");
    r && /\bapplication\/json\b/.test(r)
      ? ((t.headers = { "Content-Type": r }),
        (t.body = JSON.stringify(await e.json())))
      : r && /\btext\/plain\b/.test(r)
        ? ((t.headers = { "Content-Type": r }), (t.body = await e.text()))
        : r && /\bapplication\/x-www-form-urlencoded\b/.test(r)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
var xr = Symbol("SingleFetchRedirect"),
  na = class extends Error {},
  Ci = 202,
  aa = new Set([100, 101, 204, 205]);
function bl(e, t, r, a, n) {
  let o = Li(
    e,
    (s) => {
      let u = t.routes[s.route.id];
      Re(u, "Route not found in manifest");
      let i = r[s.route.id];
      return {
        hasLoader: u.hasLoader,
        hasClientLoader: u.hasClientLoader,
        hasShouldRevalidate: !!(i != null && i.shouldRevalidate),
      };
    },
    Di,
    a,
    n,
  );
  return async (s) => s.unstable_runClientMiddleware(o);
}
function Li(e, t, r, a, n) {
  return async (o) => {
    let { request: s, matches: u, fetcherKey: i } = o,
      c = e();
    if (s.method !== "GET") return Ti(o, r, n);
    let d = u.some((p) => {
      let { hasLoader: h, hasClientLoader: g } = t(p);
      return p.unstable_shouldCallHandler() && h && !g;
    });
    return !a && !d ? Pi(o, t, r, n) : i ? ki(o, r, n) : xi(o, c, t, r, a, n);
  };
}
async function Ti(e, t, r) {
  let a = e.matches.find((s) => s.unstable_shouldCallHandler());
  Re(a, "No action match found");
  let n,
    o = await a.resolve(
      async (s) =>
        await s(async () => {
          let { data: i, status: c } = await t(e, r, [a.route.id]);
          return (n = c), It(i, a.route.id);
        }),
    );
  return Ir(o.result) || lt(o.result) || Tr(o.result)
    ? { [a.route.id]: o }
    : { [a.route.id]: { type: o.type, result: Ja(o.result, n) } };
}
async function Pi(e, t, r, a) {
  let n = e.matches.filter((s) => s.unstable_shouldCallHandler()),
    o = {};
  return (
    await Promise.all(
      n.map((s) =>
        s.resolve(async (u) => {
          try {
            let { hasClientLoader: i } = t(s),
              c = s.route.id,
              d = i
                ? await u(async () => {
                    let { data: p } = await r(e, a, [c]);
                    return It(p, c);
                  })
                : await u();
            o[s.route.id] = { type: "data", result: d };
          } catch (i) {
            o[s.route.id] = { type: "error", result: i };
          }
        }),
      ),
    ),
    o
  );
}
async function xi(e, t, r, a, n, o) {
  let s = new Set(),
    u = !1,
    i = e.matches.map(() => _n()),
    c = _n(),
    d = {},
    p = Promise.all(
      e.matches.map(async (g, E) =>
        g.resolve(async (_) => {
          i[E].resolve();
          let S = g.route.id,
            { hasLoader: R, hasClientLoader: x, hasShouldRevalidate: D } = r(g),
            k =
              !g.unstable_shouldRevalidateArgs ||
              g.unstable_shouldRevalidateArgs.actionStatus == null ||
              g.unstable_shouldRevalidateArgs.actionStatus < 400;
          if (!g.unstable_shouldCallHandler(k)) {
            u || (u = g.unstable_shouldRevalidateArgs != null && R && D === !0);
            return;
          }
          if (x) {
            R && (u = !0);
            try {
              let y = await _(async () => {
                let { data: N } = await a(e, o, [S]);
                return It(N, S);
              });
              d[S] = { type: "data", result: y };
            } catch (y) {
              d[S] = { type: "error", result: y };
            }
            return;
          }
          R && s.add(S);
          try {
            let y = await _(async () => {
              let N = await c.promise;
              return It(N, S);
            });
            d[S] = { type: "data", result: y };
          } catch (y) {
            d[S] = { type: "error", result: y };
          }
        }),
      ),
    );
  if (
    (await Promise.all(i.map((g) => g.promise)),
    ((!t.state.initialized && t.state.navigation.state === "idle") ||
      s.size === 0) &&
      !window.__reactRouterHdrActive)
  )
    c.resolve({ routes: {} });
  else {
    let g = n && u && s.size > 0 ? [...s.keys()] : void 0;
    try {
      let E = await a(e, o, g);
      c.resolve(E.data);
    } catch (E) {
      c.reject(E);
    }
  }
  return await p, await Oi(c.promise, e.matches, s, d), d;
}
async function Oi(e, t, r, a) {
  try {
    let n,
      o = await e;
    if ("routes" in o) {
      for (let s of t)
        if (s.route.id in o.routes) {
          let u = o.routes[s.route.id];
          if ("error" in u) {
            n = u.error;
            break;
          }
        }
    }
    n !== void 0 &&
      Array.from(r.values()).forEach((s) => {
        a[s].result instanceof na && (a[s].result = n);
      });
  } catch {}
}
async function ki(e, t, r) {
  let a = e.matches.find((s) => s.unstable_shouldCallHandler());
  Re(a, "No fetcher match found");
  let n = a.route.id,
    o = await a.resolve(async (s) =>
      s(async () => {
        let { data: u } = await t(e, r, [n]);
        return It(u, n);
      }),
    );
  return { [a.route.id]: o };
}
function Mi(e) {
  let t = e.searchParams.getAll("index");
  e.searchParams.delete("index");
  let r = [];
  for (let a of t) a && r.push(a);
  for (let a of r) e.searchParams.append("index", a);
  return e;
}
function oa(e, t) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : t && xe(r.pathname, t) === "/"
        ? (r.pathname = `${t.replace(/\/$/, "")}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
async function Di(e, t, r) {
  let { request: a } = e,
    n = oa(a.url, t);
  a.method === "GET" &&
    ((n = Mi(n)), r && n.searchParams.set("_routes", r.join(",")));
  let o = await fetch(n, await _i(a));
  if (o.status === 404 && !o.headers.has("X-Remix-Response"))
    throw new Ke(404, "Not Found", !0);
  if (o.status === 204 && o.headers.has("X-Remix-Redirect"))
    return {
      status: Ci,
      data: {
        redirect: {
          redirect: o.headers.get("X-Remix-Redirect"),
          status: Number(o.headers.get("X-Remix-Status") || "302"),
          revalidate: o.headers.get("X-Remix-Revalidate") === "true",
          reload: o.headers.get("X-Remix-Reload-Document") === "true",
          replace: o.headers.get("X-Remix-Replace") === "true",
        },
      },
    };
  if (aa.has(o.status)) {
    let s = {};
    return (
      r && a.method !== "GET" && (s[r[0]] = { data: void 0 }),
      { status: o.status, data: { routes: s } }
    );
  }
  Re(o.body, "No response body to decode");
  try {
    let s = await Ai(o.body, window),
      u;
    if (a.method === "GET") {
      let i = s.value;
      xr in i ? (u = { redirect: i[xr] }) : (u = { routes: i });
    } else {
      let i = s.value,
        c = r == null ? void 0 : r[0];
      Re(c, "No routeId found for single fetch call decoding"),
        "redirect" in i ? (u = { redirect: i }) : (u = { routes: { [c]: i } });
    }
    return { status: o.status, data: u };
  } catch {
    throw new Error("Unable to decode turbo-stream response");
  }
}
function Ai(e, t) {
  return bi(e, {
    plugins: [
      (r, ...a) => {
        if (r === "SanitizedError") {
          let [n, o, s] = a,
            u = Error;
          n && n in t && typeof t[n] == "function" && (u = t[n]);
          let i = new u(o);
          return (i.stack = s), { value: i };
        }
        if (r === "ErrorResponse") {
          let [n, o, s] = a;
          return { value: new Ke(o, s, n) };
        }
        if (r === "SingleFetchRedirect") return { value: { [xr]: a[0] } };
        if (r === "SingleFetchClassInstance") return { value: a[0] };
        if (r === "SingleFetchFallback") return { value: void 0 };
      },
    ],
  });
}
function It(e, t) {
  if ("redirect" in e) {
    let {
      redirect: a,
      revalidate: n,
      reload: o,
      replace: s,
      status: u,
    } = e.redirect;
    throw qa(a, {
      status: u,
      headers: {
        ...(n ? { "X-Remix-Revalidate": "yes" } : null),
        ...(o ? { "X-Remix-Reload-Document": "yes" } : null),
        ...(s ? { "X-Remix-Replace": "yes" } : null),
      },
    });
  }
  let r = e.routes[t];
  if (r == null) throw new na(`No result found for routeId "${t}"`);
  if ("error" in r) throw r.error;
  if ("data" in r) return r.data;
  throw new Error(`Invalid response found for routeId "${t}"`);
}
function _n() {
  let e,
    t,
    r = new Promise((a, n) => {
      (e = async (o) => {
        a(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          n(o);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: e, reject: t };
}
var Rl = class extends m.Component {
  constructor(e) {
    super(e), (this.state = { error: e.error || null, location: e.location });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location
      ? { error: e.error || null, location: e.location }
      : { error: e.error || t.error, location: t.location };
  }
  render() {
    return this.state.error
      ? m.createElement(ia, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
};
function ia({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let r = m.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `,
    },
  });
  if (lt(e))
    return m.createElement(
      Or,
      { title: "Unhandled Thrown Response!" },
      m.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        e.status,
        " ",
        e.statusText,
      ),
      r,
    );
  let a;
  if (e instanceof Error) a = e;
  else {
    let n =
      e == null
        ? "Unknown Error"
        : typeof e == "object" && "toString" in e
          ? e.toString()
          : JSON.stringify(e);
    a = new Error(n);
  }
  return m.createElement(
    Or,
    { title: "Application Error!", isOutsideRemixApp: t },
    m.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
    m.createElement(
      "pre",
      {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto",
        },
      },
      a.stack,
    ),
    r,
  );
}
function Or({ title: e, renderScripts: t, isOutsideRemixApp: r, children: a }) {
  var o;
  let { routeModules: n } = yt();
  return (o = n.root) != null && o.Layout && !r
    ? a
    : m.createElement(
        "html",
        { lang: "en" },
        m.createElement(
          "head",
          null,
          m.createElement("meta", { charSet: "utf-8" }),
          m.createElement("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1,viewport-fit=cover",
          }),
          m.createElement("title", null, e),
        ),
        m.createElement(
          "body",
          null,
          m.createElement(
            "main",
            { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
            a,
            t ? m.createElement(qi, null) : null,
          ),
        ),
      );
}
function Ni() {
  return m.createElement(
    Or,
    { title: "Loading...", renderScripts: !0 },
    m.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `,
      },
    }),
  );
}
function la(e) {
  let t = {};
  return (
    Object.values(e).forEach((r) => {
      if (r) {
        let a = r.parentId || "";
        t[a] || (t[a] = []), t[a].push(r);
      }
    }),
    t
  );
}
function Ii(e, t, r) {
  let a = sa(t),
    n =
      t.HydrateFallback && (!r || e.id === "root")
        ? t.HydrateFallback
        : e.id === "root"
          ? Ni
          : void 0,
    o = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === "root"
        ? () => m.createElement(ia, { error: Gn() })
        : void 0;
  return e.id === "root" && t.Layout
    ? {
        ...(a
          ? {
              element: m.createElement(
                t.Layout,
                null,
                m.createElement(a, null),
              ),
            }
          : { Component: a }),
        ...(o
          ? {
              errorElement: m.createElement(
                t.Layout,
                null,
                m.createElement(o, null),
              ),
            }
          : { ErrorBoundary: o }),
        ...(n
          ? {
              hydrateFallbackElement: m.createElement(
                t.Layout,
                null,
                m.createElement(n, null),
              ),
            }
          : { HydrateFallback: n }),
      }
    : { Component: a, ErrorBoundary: o, HydrateFallback: n };
}
function Sl(e, t, r, a, n, o) {
  return Yr(t, r, a, n, o, "", la(t), e);
}
function qt(e, t) {
  if ((e === "loader" && !t.hasLoader) || (e === "action" && !t.hasAction)) {
    let a = `You are trying to call ${e === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    throw (console.error(a), new Ke(400, "Bad Request", new Error(a), !0));
  }
}
function br(e, t) {
  let r = e === "clientAction" ? "a" : "an",
    a = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
  throw (console.error(a), new Ke(405, "Method Not Allowed", new Error(a), !0));
}
function Yr(e, t, r, a, n, o = "", s = la(e), u) {
  return (s[o] || []).map((i) => {
    var x, D, k;
    let c = t[i.id];
    function d(T) {
      return (
        Re(
          typeof T == "function",
          "No single fetch function available for route handler",
        ),
        T()
      );
    }
    function p(T) {
      return i.hasLoader ? d(T) : Promise.resolve(null);
    }
    function h(T) {
      if (!i.hasAction) throw br("action", i.id);
      return d(T);
    }
    function g(T) {
      import(T);
    }
    function E(T) {
      T.clientActionModule && g(T.clientActionModule),
        T.clientLoaderModule && g(T.clientLoaderModule);
    }
    async function _(T) {
      let y = t[i.id],
        N = y ? Xn(i, y) : Promise.resolve();
      try {
        return T();
      } finally {
        await N;
      }
    }
    let S = { id: i.id, index: i.index, path: i.path };
    if (c) {
      Object.assign(S, {
        ...S,
        ...Ii(i, c, n),
        unstable_middleware: c.unstable_clientMiddleware,
        handle: c.handle,
        shouldRevalidate: Cn(S.path, c, i, a, u),
      });
      let T = r && r.loaderData && i.id in r.loaderData,
        y = T
          ? (x = r == null ? void 0 : r.loaderData) == null
            ? void 0
            : x[i.id]
          : void 0,
        N = r && r.errors && i.id in r.errors,
        H = N
          ? (D = r == null ? void 0 : r.errors) == null
            ? void 0
            : D[i.id]
          : void 0,
        z =
          u == null &&
          (((k = c.clientLoader) == null ? void 0 : k.hydrate) === !0 ||
            !i.hasLoader);
      (S.loader = async ({ request: ie, params: W, context: ge }, K) => {
        try {
          return await _(
            async () => (
              Re(c, "No `routeModule` available for critical-route loader"),
              c.clientLoader
                ? c.clientLoader({
                    request: ie,
                    params: W,
                    context: ge,
                    async serverLoader() {
                      if ((qt("loader", i), z)) {
                        if (T) return y;
                        if (N) throw H;
                      }
                      return p(K);
                    },
                  })
                : p(K)
            ),
          );
        } finally {
          z = !1;
        }
      }),
        (S.loader.hydrate = ua(i.id, c.clientLoader, i.hasLoader, n)),
        (S.action = ({ request: ie, params: W, context: ge }, K) =>
          _(async () => {
            if (
              (Re(c, "No `routeModule` available for critical-route action"),
              !c.clientAction)
            ) {
              if (n) throw br("clientAction", i.id);
              return h(K);
            }
            return c.clientAction({
              request: ie,
              params: W,
              context: ge,
              async serverAction() {
                return qt("action", i), h(K);
              },
            });
          }));
    } else {
      i.hasClientLoader || (S.loader = (N, H) => _(() => p(H))),
        i.hasClientAction ||
          (S.action = (N, H) =>
            _(() => {
              if (n) throw br("clientAction", i.id);
              return h(H);
            }));
      let T;
      async function y() {
        return T
          ? await T
          : ((T = (async () => {
              (i.clientLoaderModule || i.clientActionModule) &&
                (await new Promise((H) => setTimeout(H, 0)));
              let N = ji(i, t);
              return E(i), await N;
            })()),
            await T);
      }
      S.lazy = {
        loader: i.hasClientLoader
          ? async () => {
              let { clientLoader: N } = i.clientLoaderModule
                ? await import(i.clientLoaderModule)
                : await y();
              return (
                Re(N, "No `clientLoader` export found"),
                (H, z) =>
                  N({
                    ...H,
                    async serverLoader() {
                      return qt("loader", i), p(z);
                    },
                  })
              );
            }
          : void 0,
        action: i.hasClientAction
          ? async () => {
              let N = i.clientActionModule ? import(i.clientActionModule) : y();
              E(i);
              let { clientAction: H } = await N;
              return (
                Re(H, "No `clientAction` export found"),
                (z, ie) =>
                  H({
                    ...z,
                    async serverAction() {
                      return qt("action", i), h(ie);
                    },
                  })
              );
            }
          : void 0,
        unstable_middleware: i.hasClientMiddleware
          ? async () => {
              let { unstable_clientMiddleware: N } = i.clientMiddlewareModule
                ? await import(i.clientMiddlewareModule)
                : await y();
              return Re(N, "No `unstable_clientMiddleware` export found"), N;
            }
          : void 0,
        shouldRevalidate: async () => {
          let N = await y();
          return Cn(S.path, N, i, a, u);
        },
        handle: async () => (await y()).handle,
        Component: async () => (await y()).Component,
        ErrorBoundary: i.hasErrorBoundary
          ? async () => (await y()).ErrorBoundary
          : void 0,
      };
    }
    let R = Yr(e, t, r, a, n, i.id, s, u);
    return R.length > 0 && (S.children = R), S;
  });
}
function Cn(e, t, r, a, n) {
  if (n) return $i(r.id, t.shouldRevalidate, n);
  if (!a && r.hasLoader && !r.hasClientLoader) {
    let o = e ? Mn(e)[1].map((u) => u.paramName) : [];
    const s = (u) => o.some((i) => u.currentParams[i] !== u.nextParams[i]);
    if (t.shouldRevalidate) {
      let u = t.shouldRevalidate;
      return (i) => u({ ...i, defaultShouldRevalidate: s(i) });
    } else return (u) => s(u);
  }
  if (a && t.shouldRevalidate) {
    let o = t.shouldRevalidate;
    return (s) => o({ ...s, defaultShouldRevalidate: !0 });
  }
  return t.shouldRevalidate;
}
function $i(e, t, r) {
  let a = !1;
  return (n) =>
    a ? (t ? t(n) : n.defaultShouldRevalidate) : ((a = !0), r.has(e));
}
async function ji(e, t) {
  let r = qn(e, t),
    a = Qo(e),
    n = await r;
  return (
    await Promise.all([a, Xn(e, n)]),
    {
      Component: sa(n),
      ErrorBoundary: n.ErrorBoundary,
      unstable_clientMiddleware: n.unstable_clientMiddleware,
      clientAction: n.clientAction,
      clientLoader: n.clientLoader,
      handle: n.handle,
      links: n.links,
      meta: n.meta,
      shouldRevalidate: n.shouldRevalidate,
    }
  );
}
function sa(e) {
  if (e.default == null) return;
  if (!(typeof e.default == "object" && Object.keys(e.default).length === 0))
    return e.default;
}
function ua(e, t, r, a) {
  return (a && e !== "root") || (t != null && (t.hydrate === !0 || r !== !0));
}
var er = new Set(),
  Fi = 1e3,
  or = new Set(),
  Ui = 7680;
function Br(e, t) {
  return e.mode === "lazy" && t === !0;
}
function Hi({ sri: e, ...t }, r) {
  let a = new Set(r.state.matches.map((u) => u.route.id)),
    n = r.state.location.pathname.split("/").filter(Boolean),
    o = ["/"];
  for (n.pop(); n.length > 0; ) o.push(`/${n.join("/")}`), n.pop();
  o.forEach((u) => {
    let i = ze(r.routes, u, r.basename);
    i && i.forEach((c) => a.add(c.route.id));
  });
  let s = [...a].reduce((u, i) => Object.assign(u, { [i]: t.routes[i] }), {});
  return { ...t, routes: s, sri: e ? !0 : void 0 };
}
function _l(e, t, r, a, n, o) {
  if (Br(a, r))
    return async ({ path: s, patch: u, signal: i, fetcherKey: c }) => {
      or.has(s) ||
        (await ca(
          [s],
          c ? window.location.href : s,
          e,
          t,
          r,
          n,
          o,
          a.manifestPath,
          u,
          i,
        ));
    };
}
function Cl(e, t, r, a, n, o) {
  m.useEffect(() => {
    var d, p;
    if (
      !Br(n, a) ||
      ((p = (d = window.navigator) == null ? void 0 : d.connection) == null
        ? void 0
        : p.saveData) === !0
    )
      return;
    function s(h) {
      let g =
        h.tagName === "FORM"
          ? h.getAttribute("action")
          : h.getAttribute("href");
      if (!g) return;
      let E =
        h.tagName === "A"
          ? h.pathname
          : new URL(g, window.location.origin).pathname;
      or.has(E) || er.add(E);
    }
    async function u() {
      document
        .querySelectorAll("a[data-discover], form[data-discover]")
        .forEach(s);
      let h = Array.from(er.keys()).filter((g) =>
        or.has(g) ? (er.delete(g), !1) : !0,
      );
      if (h.length !== 0)
        try {
          await ca(
            h,
            null,
            t,
            r,
            a,
            o,
            e.basename,
            n.manifestPath,
            e.patchRoutes,
          );
        } catch (g) {
          console.error("Failed to fetch manifest patches", g);
        }
    }
    let i = Bi(u, 100);
    u();
    let c = new MutationObserver(() => i());
    return (
      c.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ["data-discover", "href", "action"],
      }),
      () => c.disconnect()
    );
  }, [a, o, t, r, e, n]);
}
function zi(e, t) {
  let r = e || "/__manifest";
  return t == null ? r : `${t}${r}`.replace(/\/+/g, "/");
}
var Rr = "react-router-manifest-version";
async function ca(e, t, r, a, n, o, s, u, i, c) {
  let d = new URL(zi(u, s), window.location.origin);
  if (
    (e.sort().forEach((_) => d.searchParams.append("p", _)),
    d.searchParams.set("version", r.version),
    d.toString().length > Ui)
  ) {
    er.clear();
    return;
  }
  let p;
  try {
    let _ = await fetch(d, { signal: c });
    if (_.ok) {
      if (_.status === 204 && _.headers.has("X-Remix-Reload-Document")) {
        if (!t) {
          console.warn(
            "Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.",
          );
          return;
        }
        if (sessionStorage.getItem(Rr) === r.version) {
          console.error(
            "Unable to discover routes due to manifest version mismatch.",
          );
          return;
        }
        sessionStorage.setItem(Rr, r.version),
          (window.location.href = t),
          console.warn("Detected manifest version mismatch, reloading..."),
          await new Promise(() => {});
      } else if (_.status >= 400) throw new Error(await _.text());
    } else throw new Error(`${_.status} ${_.statusText}`);
    sessionStorage.removeItem(Rr), (p = await _.json());
  } catch (_) {
    if (c != null && c.aborted) return;
    throw _;
  }
  let h = new Set(Object.keys(r.routes)),
    g = Object.values(p).reduce(
      (_, S) => (S && !h.has(S.id) && (_[S.id] = S), _),
      {},
    );
  Object.assign(r.routes, g), e.forEach((_) => Yi(_, or));
  let E = new Set();
  Object.values(g).forEach((_) => {
    _ && (!_.parentId || !g[_.parentId]) && E.add(_.parentId);
  }),
    E.forEach((_) => i(_ || null, Yr(g, a, null, n, o, _)));
}
function Yi(e, t) {
  if (t.size >= Fi) {
    let r = t.values().next().value;
    t.delete(r);
  }
  t.add(e);
}
function Bi(e, t) {
  let r;
  return (...a) => {
    window.clearTimeout(r), (r = window.setTimeout(() => e(...a), t));
  };
}
function Wr() {
  let e = m.useContext(st);
  return (
    Re(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function sr() {
  let e = m.useContext(pt);
  return (
    Re(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var ur = m.createContext(void 0);
ur.displayName = "FrameworkContext";
function yt() {
  let e = m.useContext(ur);
  return (
    Re(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function Wi(e, t) {
  let r = m.useContext(ur),
    [a, n] = m.useState(!1),
    [o, s] = m.useState(!1),
    {
      onFocus: u,
      onBlur: i,
      onMouseEnter: c,
      onMouseLeave: d,
      onTouchStart: p,
    } = t,
    h = m.useRef(null);
  m.useEffect(() => {
    if ((e === "render" && s(!0), e === "viewport")) {
      let _ = (R) => {
          R.forEach((x) => {
            s(x.isIntersecting);
          });
        },
        S = new IntersectionObserver(_, { threshold: 0.5 });
      return (
        h.current && S.observe(h.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]),
    m.useEffect(() => {
      if (a) {
        let _ = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(_);
        };
      }
    }, [a]);
  let g = () => {
      n(!0);
    },
    E = () => {
      n(!1), s(!1);
    };
  return r
    ? e !== "intent"
      ? [o, h, {}]
      : [
          o,
          h,
          {
            onFocus: kt(u, g),
            onBlur: kt(i, E),
            onMouseEnter: kt(c, g),
            onMouseLeave: kt(d, E),
            onTouchStart: kt(p, g),
          },
        ]
    : [!1, h, {}];
}
function kt(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function Vr(e, t, r) {
  if (r && !tr) return [e[0]];
  if (t) {
    let a = e.findIndex((n) => t[n.route.id] !== void 0);
    return e.slice(0, a + 1);
  }
  return e;
}
function Ll() {
  let { isSpaMode: e, manifest: t, routeModules: r, criticalCss: a } = yt(),
    { errors: n, matches: o } = sr(),
    s = Vr(o, n, e),
    u = m.useMemo(() => Xo(s, r, t), [s, r, t]);
  return m.createElement(
    m.Fragment,
    null,
    typeof a == "string"
      ? m.createElement("style", { dangerouslySetInnerHTML: { __html: a } })
      : null,
    typeof a == "object"
      ? m.createElement("link", { rel: "stylesheet", href: a.href })
      : null,
    u.map(({ key: i, link: c }) =>
      Hr(c)
        ? m.createElement(da, { key: i, ...c })
        : m.createElement("link", { key: i, ...c }),
    ),
  );
}
function da({ page: e, ...t }) {
  let { router: r } = Wr(),
    a = m.useMemo(() => ze(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return a ? m.createElement(Gi, { page: e, matches: a, ...t }) : null;
}
function Vi(e) {
  let { manifest: t, routeModules: r } = yt(),
    [a, n] = m.useState([]);
  return (
    m.useEffect(() => {
      let o = !1;
      return (
        ei(e, t, r).then((s) => {
          o || n(s);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    a
  );
}
function Gi({ page: e, matches: t, ...r }) {
  let a = Be(),
    { manifest: n, routeModules: o } = yt(),
    { basename: s } = Wr(),
    { loaderData: u, matches: i } = sr(),
    c = m.useMemo(() => bn(e, t, i, n, a, "data"), [e, t, i, n, a]),
    d = m.useMemo(() => bn(e, t, i, n, a, "assets"), [e, t, i, n, a]),
    p = m.useMemo(() => {
      if (e === a.pathname + a.search + a.hash) return [];
      let E = new Set(),
        _ = !1;
      if (
        (t.forEach((R) => {
          var D;
          let x = n.routes[R.route.id];
          !x ||
            !x.hasLoader ||
            ((!c.some((k) => k.route.id === R.route.id) &&
              R.route.id in u &&
              (D = o[R.route.id]) != null &&
              D.shouldRevalidate) ||
            x.hasClientLoader
              ? (_ = !0)
              : E.add(R.route.id));
        }),
        E.size === 0)
      )
        return [];
      let S = oa(e, s);
      return (
        _ &&
          E.size > 0 &&
          S.searchParams.set(
            "_routes",
            t
              .filter((R) => E.has(R.route.id))
              .map((R) => R.route.id)
              .join(","),
          ),
        [S.pathname + S.search]
      );
    }, [s, u, a, n, c, t, e, o]),
    h = m.useMemo(() => zr(d, n), [d, n]),
    g = Vi(d);
  return m.createElement(
    m.Fragment,
    null,
    p.map((E) =>
      m.createElement("link", {
        key: E,
        rel: "prefetch",
        as: "fetch",
        href: E,
        ...r,
      }),
    ),
    h.map((E) =>
      m.createElement("link", { key: E, rel: "modulepreload", href: E, ...r }),
    ),
    g.map(({ key: E, link: _ }) => m.createElement("link", { key: E, ..._ })),
  );
}
function Tl() {
  let { isSpaMode: e, routeModules: t } = yt(),
    { errors: r, matches: a, loaderData: n } = sr(),
    o = Be(),
    s = Vr(a, r, e),
    u = null;
  r && (u = r[s[s.length - 1].route.id]);
  let i = [],
    c = null,
    d = [];
  for (let p = 0; p < s.length; p++) {
    let h = s[p],
      g = h.route.id,
      E = n[g],
      _ = h.params,
      S = t[g],
      R = [],
      x = {
        id: g,
        data: E,
        meta: [],
        params: h.params,
        pathname: h.pathname,
        handle: h.route.handle,
        error: u,
      };
    if (
      ((d[p] = x),
      S != null && S.meta
        ? (R =
            typeof S.meta == "function"
              ? S.meta({
                  data: E,
                  params: _,
                  location: o,
                  matches: d,
                  error: u,
                })
              : Array.isArray(S.meta)
                ? [...S.meta]
                : S.meta)
        : c && (R = [...c]),
      (R = R || []),
      !Array.isArray(R))
    )
      throw new Error(
        "The route at " +
          h.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`,
      );
    (x.meta = R), (d[p] = x), (i = [...R]), (c = i);
  }
  return m.createElement(
    m.Fragment,
    null,
    i.flat().map((p) => {
      if (!p) return null;
      if ("tagName" in p) {
        let { tagName: h, ...g } = p;
        if (!Ji(h))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${h}. Expected either 'link' or 'meta'`,
            ),
            null
          );
        let E = h;
        return m.createElement(E, { key: JSON.stringify(g), ...g });
      }
      if ("title" in p)
        return m.createElement("title", { key: "title" }, String(p.title));
      if (
        ("charset" in p &&
          (p.charSet ?? (p.charSet = p.charset), delete p.charset),
        "charSet" in p && p.charSet != null)
      )
        return typeof p.charSet == "string"
          ? m.createElement("meta", { key: "charSet", charSet: p.charSet })
          : null;
      if ("script:ld+json" in p)
        try {
          let h = JSON.stringify(p["script:ld+json"]);
          return m.createElement("script", {
            key: `script:ld+json:${h}`,
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: h },
          });
        } catch {
          return null;
        }
      return m.createElement("meta", { key: JSON.stringify(p), ...p });
    }),
  );
}
function Ji(e) {
  return typeof e == "string" && /^(meta|link)$/.test(e);
}
var tr = !1;
function qi(e) {
  let {
      manifest: t,
      serverHandoffString: r,
      isSpaMode: a,
      renderMeta: n,
      routeDiscovery: o,
      ssr: s,
    } = yt(),
    { router: u, static: i, staticContext: c } = Wr(),
    { matches: d } = sr(),
    p = Br(o, s);
  n && (n.didRenderScripts = !0);
  let h = Vr(d, null, a);
  m.useEffect(() => {
    tr = !0;
  }, []);
  let g = m.useMemo(() => {
      var D;
      let R = c
          ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
          : " ",
        x = i
          ? `${(D = t.hmr) != null && D.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${p ? "" : `import ${JSON.stringify(t.url)}`};
${h.map((k, T) => {
  let y = `route${T}`,
    N = t.routes[k.route.id];
  Re(N, `Route ${k.route.id} not found in manifest`);
  let {
      clientActionModule: H,
      clientLoaderModule: z,
      clientMiddlewareModule: ie,
      hydrateFallbackModule: W,
      module: ge,
    } = N,
    K = [
      ...(H ? [{ module: H, varName: `${y}_clientAction` }] : []),
      ...(z ? [{ module: z, varName: `${y}_clientLoader` }] : []),
      ...(ie ? [{ module: ie, varName: `${y}_clientMiddleware` }] : []),
      ...(W ? [{ module: W, varName: `${y}_HydrateFallback` }] : []),
      { module: ge, varName: `${y}_main` },
    ];
  if (K.length === 1) return `import * as ${y} from ${JSON.stringify(ge)};`;
  let te = K.map((G) => `import * as ${G.varName} from "${G.module}";`).join(`
`),
    ue = `const ${y} = {${K.map((G) => `...${G.varName}`).join(",")}};`;
  return [te, ue].join(`
`);
}).join(`
`)}
  ${p ? `window.__reactRouterManifest = ${JSON.stringify(Hi(t, u), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${h.map((k, T) => `${JSON.stringify(k.route.id)}:route${T}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`
          : " ";
      return m.createElement(
        m.Fragment,
        null,
        m.createElement("script", {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: Rn(R),
          type: void 0,
        }),
        m.createElement("script", {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: Rn(x),
          type: "module",
          async: !0,
        }),
      );
    }, []),
    E = tr
      ? []
      : Ki(t.entry.imports.concat(zr(h, t, { includeHydrateFallback: !0 }))),
    _ = typeof t.sri == "object" ? t.sri : {};
  return tr
    ? null
    : m.createElement(
        m.Fragment,
        null,
        typeof t.sri == "object"
          ? m.createElement("script", {
              "rr-importmap": "",
              type: "importmap",
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: {
                __html: JSON.stringify({ integrity: _ }),
              },
            })
          : null,
        p
          ? null
          : m.createElement("link", {
              rel: "modulepreload",
              href: t.url,
              crossOrigin: e.crossOrigin,
              integrity: _[t.url],
              suppressHydrationWarning: !0,
            }),
        m.createElement("link", {
          rel: "modulepreload",
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
          integrity: _[t.entry.module],
          suppressHydrationWarning: !0,
        }),
        E.map((S) =>
          m.createElement("link", {
            key: S,
            rel: "modulepreload",
            href: S,
            crossOrigin: e.crossOrigin,
            integrity: _[S],
            suppressHydrationWarning: !0,
          }),
        ),
        g,
      );
}
function Ki(e) {
  return [...new Set(e)];
}
function Xi(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var fa =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  fa && (window.__reactRouterVersion = "7.6.0");
} catch {}
var ha = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ma = m.forwardRef(function (
    {
      onClick: t,
      discover: r = "render",
      prefetch: a = "none",
      relative: n,
      reloadDocument: o,
      replace: s,
      state: u,
      target: i,
      to: c,
      preventScrollReset: d,
      viewTransition: p,
      ...h
    },
    g,
  ) {
    let { basename: E } = m.useContext(De),
      _ = typeof c == "string" && ha.test(c),
      S,
      R = !1;
    if (typeof c == "string" && _ && ((S = c), fa))
      try {
        let z = new URL(window.location.href),
          ie = c.startsWith("//") ? new URL(z.protocol + c) : new URL(c),
          W = xe(ie.pathname, E);
        ie.origin === z.origin && W != null
          ? (c = W + ie.search + ie.hash)
          : (R = !0);
      } catch {
        fe(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let x = So(c, { relative: n }),
      [D, k, T] = Wi(a, h),
      y = rl(c, {
        replace: s,
        state: u,
        target: i,
        preventScrollReset: d,
        relative: n,
        viewTransition: p,
      });
    function N(z) {
      t && t(z), z.defaultPrevented || y(z);
    }
    let H = m.createElement("a", {
      ...h,
      ...T,
      href: S || x,
      onClick: R || o ? t : N,
      ref: Xi(g, k),
      target: i,
      "data-discover": !_ && r === "render" ? "true" : void 0,
    });
    return D && !_
      ? m.createElement(m.Fragment, null, H, m.createElement(da, { page: x }))
      : H;
  });
ma.displayName = "Link";
var Qi = m.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: a = "",
    end: n = !1,
    style: o,
    to: s,
    viewTransition: u,
    children: i,
    ...c
  },
  d,
) {
  let p = jt(s, { relative: c.relative }),
    h = Be(),
    g = m.useContext(pt),
    { navigator: E, basename: _ } = m.useContext(De),
    S = g != null && ul(p) && u === !0,
    R = E.encodeLocation ? E.encodeLocation(p).pathname : p.pathname,
    x = h.pathname,
    D =
      g && g.navigation && g.navigation.location
        ? g.navigation.location.pathname
        : null;
  r ||
    ((x = x.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (R = R.toLowerCase())),
    D && _ && (D = xe(D, _) || D);
  const k = R !== "/" && R.endsWith("/") ? R.length - 1 : R.length;
  let T = x === R || (!n && x.startsWith(R) && x.charAt(k) === "/"),
    y =
      D != null &&
      (D === R || (!n && D.startsWith(R) && D.charAt(R.length) === "/")),
    N = { isActive: T, isPending: y, isTransitioning: S },
    H = T ? t : void 0,
    z;
  typeof a == "function"
    ? (z = a(N))
    : (z = [
        a,
        T ? "active" : null,
        y ? "pending" : null,
        S ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ie = typeof o == "function" ? o(N) : o;
  return m.createElement(
    ma,
    {
      ...c,
      "aria-current": H,
      className: z,
      ref: d,
      style: ie,
      to: s,
      viewTransition: u,
    },
    typeof i == "function" ? i(N) : i,
  );
});
Qi.displayName = "NavLink";
var Zi = m.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: a,
      replace: n,
      state: o,
      method: s = Qt,
      action: u,
      onSubmit: i,
      relative: c,
      preventScrollReset: d,
      viewTransition: p,
      ...h
    },
    g,
  ) => {
    let E = ol(),
      _ = il(u, { relative: c }),
      S = s.toLowerCase() === "get" ? "get" : "post",
      R = typeof u == "string" && ha.test(u),
      x = (D) => {
        if ((i && i(D), D.defaultPrevented)) return;
        D.preventDefault();
        let k = D.nativeEvent.submitter,
          T = (k == null ? void 0 : k.getAttribute("formmethod")) || s;
        E(k || D.currentTarget, {
          fetcherKey: t,
          method: T,
          navigate: r,
          replace: n,
          state: o,
          relative: c,
          preventScrollReset: d,
          viewTransition: p,
        });
      };
    return m.createElement("form", {
      ref: g,
      method: S,
      action: _,
      onSubmit: a ? i : x,
      ...h,
      "data-discover": !R && e === "render" ? "true" : void 0,
    });
  },
);
Zi.displayName = "Form";
function el({ getKey: e, storageKey: t, ...r }) {
  let a = m.useContext(ur),
    { basename: n } = m.useContext(De),
    o = Be(),
    s = Vn();
  ll({ getKey: e, storageKey: t });
  let u = m.useMemo(() => {
    if (!a || !e) return null;
    let c = Mr(o, s, n, e);
    return c !== o.key ? c : null;
  }, []);
  if (!a || a.isSpaMode) return null;
  let i = ((c, d) => {
    if (!window.history.state || !window.history.state.key) {
      let p = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: p }, "");
    }
    try {
      let h = JSON.parse(sessionStorage.getItem(c) || "{}")[
        d || window.history.state.key
      ];
      typeof h == "number" && window.scrollTo(0, h);
    } catch (p) {
      console.error(p), sessionStorage.removeItem(c);
    }
  }).toString();
  return m.createElement("script", {
    ...r,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${i})(${JSON.stringify(t || kr)}, ${JSON.stringify(u)})`,
    },
  });
}
el.displayName = "ScrollRestoration";
function pa(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gr(e) {
  let t = m.useContext(st);
  return ee(t, pa(e)), t;
}
function tl(e) {
  let t = m.useContext(pt);
  return ee(t, pa(e)), t;
}
function rl(
  e,
  {
    target: t,
    replace: r,
    state: a,
    preventScrollReset: n,
    relative: o,
    viewTransition: s,
  } = {},
) {
  let u = _o(),
    i = Be(),
    c = jt(e, { relative: o });
  return m.useCallback(
    (d) => {
      if (Go(d, t)) {
        d.preventDefault();
        let p = r !== void 0 ? r : qe(i) === qe(c);
        u(e, {
          replace: p,
          state: a,
          preventScrollReset: n,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [i, u, c, r, a, t, e, n, o, s],
  );
}
var nl = 0,
  al = () => `__${String(++nl)}__`;
function ol() {
  let { router: e } = Gr("useSubmit"),
    { basename: t } = m.useContext(De),
    r = Io();
  return m.useCallback(
    async (a, n = {}) => {
      let { action: o, method: s, encType: u, formData: i, body: c } = Ko(a, t);
      if (n.navigate === !1) {
        let d = n.fetcherKey || al();
        await e.fetch(d, r, n.action || o, {
          preventScrollReset: n.preventScrollReset,
          formData: i,
          body: c,
          formMethod: n.method || s,
          formEncType: n.encType || u,
          flushSync: n.flushSync,
        });
      } else
        await e.navigate(n.action || o, {
          preventScrollReset: n.preventScrollReset,
          formData: i,
          body: c,
          formMethod: n.method || s,
          formEncType: n.encType || u,
          replace: n.replace,
          state: n.state,
          fromRouteId: r,
          flushSync: n.flushSync,
          viewTransition: n.viewTransition,
        });
    },
    [e, t, r],
  );
}
function il(e, { relative: t } = {}) {
  let { basename: r } = m.useContext(De),
    a = m.useContext($e);
  ee(a, "useFormAction must be used inside a RouteContext");
  let [n] = a.matches.slice(-1),
    o = { ...jt(e || ".", { relative: t }) },
    s = Be();
  if (e == null) {
    o.search = s.search;
    let u = new URLSearchParams(o.search),
      i = u.getAll("index");
    if (i.some((d) => d === "")) {
      u.delete("index"),
        i.filter((p) => p).forEach((p) => u.append("index", p));
      let d = u.toString();
      o.search = d ? `?${d}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      n.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (o.pathname = o.pathname === "/" ? r : Ye([r, o.pathname])),
    qe(o)
  );
}
var kr = "react-router-scroll-positions",
  Kt = {};
function Mr(e, t, r, a) {
  let n = null;
  return (
    a &&
      (r !== "/"
        ? (n = a({ ...e, pathname: xe(e.pathname, r) || e.pathname }, t))
        : (n = a(e, t))),
    n == null && (n = e.key),
    n
  );
}
function ll({ getKey: e, storageKey: t } = {}) {
  let { router: r } = Gr("useScrollRestoration"),
    { restoreScrollPosition: a, preventScrollReset: n } = tl(
      "useScrollRestoration",
    ),
    { basename: o } = m.useContext(De),
    s = Be(),
    u = Vn(),
    i = $o();
  m.useEffect(
    () => (
      (window.history.scrollRestoration = "manual"),
      () => {
        window.history.scrollRestoration = "auto";
      }
    ),
    [],
  ),
    sl(
      m.useCallback(() => {
        if (i.state === "idle") {
          let c = Mr(s, u, o, e);
          Kt[c] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || kr, JSON.stringify(Kt));
        } catch (c) {
          fe(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${c}).`,
          );
        }
        window.history.scrollRestoration = "auto";
      }, [i.state, e, o, s, u, t]),
    ),
    typeof document < "u" &&
      (m.useLayoutEffect(() => {
        try {
          let c = sessionStorage.getItem(t || kr);
          c && (Kt = JSON.parse(c));
        } catch {}
      }, [t]),
      m.useLayoutEffect(() => {
        let c =
          r == null
            ? void 0
            : r.enableScrollRestoration(
                Kt,
                () => window.scrollY,
                e ? (d, p) => Mr(d, p, o, e) : void 0,
              );
        return () => c && c();
      }, [r, o, e]),
      m.useLayoutEffect(() => {
        if (a !== !1) {
          if (typeof a == "number") {
            window.scrollTo(0, a);
            return;
          }
          if (s.hash) {
            let c = document.getElementById(
              decodeURIComponent(s.hash.slice(1)),
            );
            if (c) {
              c.scrollIntoView();
              return;
            }
          }
          n !== !0 && window.scrollTo(0, 0);
        }
      }, [s, a, n]));
}
function sl(e, t) {
  let { capture: r } = {};
  m.useEffect(() => {
    let a = r != null ? { capture: r } : void 0;
    return (
      window.addEventListener("pagehide", e, a),
      () => {
        window.removeEventListener("pagehide", e, a);
      }
    );
  }, [e, r]);
}
function ul(e, t = {}) {
  let r = m.useContext(jr);
  ee(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: a } = Gr("useViewTransitionState"),
    n = jt(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = xe(r.currentLocation.pathname, a) || r.currentLocation.pathname,
    s = xe(r.nextLocation.pathname, a) || r.nextLocation.pathname;
  return nr(n.pathname, s) != null || nr(n.pathname, o) != null;
}
[...aa];
function Pl(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [a, n] of t)
    if (n && n.__type === "RouteErrorResponse")
      r[a] = new Ke(n.status, n.statusText, n.data, n.internal === !0);
    else if (n && n.__type === "Error") {
      if (n.__subType) {
        let o = window[n.__subType];
        if (typeof o == "function")
          try {
            let s = new o(n.message);
            (s.stack = n.stack), (r[a] = s);
          } catch {}
      }
      if (r[a] == null) {
        let o = new Error(n.message);
        (o.stack = n.stack), (r[a] = o);
      }
    } else r[a] = n;
  return r;
}
function xl(e, t, r, a, n, o) {
  let s = { ...e, loaderData: { ...e.loaderData } },
    u = ze(t, a, n);
  if (u)
    for (let i of u) {
      let c = i.route.id,
        d = r(c);
      ua(c, d.clientLoader, d.hasLoader, o) &&
      (d.hasHydrateFallback || !d.hasLoader)
        ? delete s.loaderData[c]
        : d.hasLoader || (s.loaderData[c] = null);
    }
  return s;
}
export {
  Gn as A,
  ur as F,
  Ll as L,
  Tl as M,
  El as O,
  Rl as R,
  el as S,
  m as a,
  wl as b,
  Yr as c,
  Ai as d,
  Pl as e,
  hl as f,
  xl as g,
  _l as h,
  ee as i,
  bl as j,
  fl as k,
  Sl as l,
  vl as m,
  gl as n,
  cl as o,
  qi as p,
  lt as q,
  Ln as r,
  _o as s,
  Be as t,
  Cl as u,
  dl as v,
  Vn as w,
  yl as x,
  pl as y,
  ml as z,
};
