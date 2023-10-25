(() => {
  var e = {
    5161: (e, t, r) => {
      "use strict";
      var n;
      var o = r(8715),
        i = r(1147),
        a = Object.assign,
        s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        l = [],
        c = null;
      function z() {
        if (null === c) {
          var e = new Map();
          try {
            f.useContext({
              _currentValue: null,
            }),
              f.useState(null),
              f.useReducer(function (e) {
                return e;
              }, null),
              f.useRef(null),
              "function" === typeof f.useCacheRefresh && f.useCacheRefresh(),
              f.useLayoutEffect(function () {}),
              f.useInsertionEffect(function () {}),
              f.useEffect(function () {}),
              f.useImperativeHandle(void 0, function () {
                return null;
              }),
              f.useDebugValue(null),
              f.useCallback(function () {}),
              f.useMemo(function () {
                return null;
              }),
              "function" === typeof f.useMemoCache && f.useMemoCache(0);
          } finally {
            var t = l;
            l = [];
          }
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            e.set(n.primitive, o.parse(n.stackError));
          }
          c = e;
        }
        return c;
      }
      var u = null;
      function C() {
        var e = u;
        null !== e && (u = e.next);
        return e;
      }
      var f = {
          use: function () {
            throw Error(
              "Support for `use` not yet implemented in react-debug-tools."
            );
          },
          readContext: function (e) {
            return e._currentValue;
          },
          useCacheRefresh: function () {
            var e = C();
            l.push({
              primitive: "CacheRefresh",
              stackError: Error(),
              value: null !== e ? e.memoizedState : function () {},
            });
            return function () {};
          },
          useCallback: function (e) {
            var t = C();
            l.push({
              primitive: "Callback",
              stackError: Error(),
              value: null !== t ? t.memoizedState[0] : e,
            });
            return e;
          },
          useContext: function (e) {
            l.push({
              primitive: "Context",
              stackError: Error(),
              value: e._currentValue,
            });
            return e._currentValue;
          },
          useEffect: function (e) {
            C();
            l.push({
              primitive: "Effect",
              stackError: Error(),
              value: e,
            });
          },
          useImperativeHandle: function (e) {
            C();
            var t = void 0;
            null !== e && "object" === typeof e && (t = e.current);
            l.push({
              primitive: "ImperativeHandle",
              stackError: Error(),
              value: t,
            });
          },
          useDebugValue: function (e, t) {
            l.push({
              primitive: "DebugValue",
              stackError: Error(),
              value: "function" === typeof t ? t(e) : e,
            });
          },
          useLayoutEffect: function (e) {
            C();
            l.push({
              primitive: "LayoutEffect",
              stackError: Error(),
              value: e,
            });
          },
          useInsertionEffect: function (e) {
            C();
            l.push({
              primitive: "InsertionEffect",
              stackError: Error(),
              value: e,
            });
          },
          useMemo: function (e) {
            var t = C();
            e = null !== t ? t.memoizedState[0] : e();
            l.push({
              primitive: "Memo",
              stackError: Error(),
              value: e,
            });
            return e;
          },
          useMemoCache: function (e) {
            var t = C();
            t =
              null !== t &&
              null !== t.updateQueue &&
              null != t.updateQueue.memoCache
                ? t.updateQueue.memoCache
                : {
                    data: [],
                    index: 0,
                  };
            t = t.data[t.index];
            if (void 0 === t) {
              var r = Symbol.for("react.memo_cache_sentinel");
              t = Array(e);
              for (var n = 0; n < e; n++) t[n] = r;
            }
            l.push({
              primitive: "MemoCache",
              stackError: Error(),
              value: t,
            });
            return t;
          },
          useReducer: function (e, t, r) {
            e = C();
            t = null !== e ? e.memoizedState : void 0 !== r ? r(t) : t;
            l.push({
              primitive: "Reducer",
              stackError: Error(),
              value: t,
            });
            return [t, function () {}];
          },
          useRef: function (e) {
            var t = C();
            e =
              null !== t
                ? t.memoizedState
                : {
                    current: e,
                  };
            l.push({
              primitive: "Ref",
              stackError: Error(),
              value: e.current,
            });
            return e;
          },
          useState: function (e) {
            var t = C();
            e =
              null !== t ? t.memoizedState : "function" === typeof e ? e() : e;
            l.push({
              primitive: "State",
              stackError: Error(),
              value: e,
            });
            return [e, function () {}];
          },
          useTransition: function () {
            C();
            C();
            l.push({
              primitive: "Transition",
              stackError: Error(),
              value: void 0,
            });
            return [!1, function () {}];
          },
          useSyncExternalStore: function (e, t) {
            C();
            C();
            e = t();
            l.push({
              primitive: "SyncExternalStore",
              stackError: Error(),
              value: e,
            });
            return e;
          },
          useDeferredValue: function (e) {
            var t = C();
            l.push({
              primitive: "DeferredValue",
              stackError: Error(),
              value: null !== t ? t.memoizedState : e,
            });
            return e;
          },
          useId: function () {
            var e = C();
            e = null !== e ? e.memoizedState : "";
            l.push({
              primitive: "Id",
              stackError: Error(),
              value: e,
            });
            return e;
          },
        },
        p = {
          get: function (e, t) {
            if (e.hasOwnProperty(t)) return e[t];
            e = Error("Missing method in Dispatcher: " + t);
            e.name = "ReactDebugToolsUnsupportedHookError";
            throw e;
          },
        },
        d = "undefined" === typeof Proxy ? f : new Proxy(f, p),
        m = 0;
      function G(e, t, r) {
        var n = t[r].source,
          o = 0;
        e: for (; o < e.length; o++)
          if (e[o].source === n) {
            for (
              var i = r + 1, a = o + 1;
              i < t.length && a < e.length;
              i++, a++
            )
              if (e[a].source !== t[i].source) continue e;
            return o;
          }
        return -1;
      }
      function H(e, t) {
        if (!e) return !1;
        t = "use" + t;
        return e.length < t.length
          ? !1
          : e.lastIndexOf(t) === e.length - t.length;
      }
      function I(e, t, r) {
        for (
          var n = [], i = null, a = n, s = 0, l = [], c = 0;
          c < t.length;
          c++
        ) {
          var u = t[c];
          var f = e;
          var p = o.parse(u.stackError);
          e: {
            var d = p,
              h = G(d, f, m);
            if (-1 !== h) f = h;
            else {
              for (var g = 0; g < f.length && 5 > g; g++)
                if (((h = G(d, f, g)), -1 !== h)) {
                  m = g;
                  f = h;
                  break e;
                }
              f = -1;
            }
          }
          e: {
            d = p;
            h = z().get(u.primitive);
            if (void 0 !== h)
              for (g = 0; g < h.length && g < d.length; g++)
                if (h[g].source !== d[g].source) {
                  g < d.length - 1 && H(d[g].functionName, u.primitive) && g++;
                  g < d.length - 1 && H(d[g].functionName, u.primitive) && g++;
                  d = g;
                  break e;
                }
            d = -1;
          }
          p = -1 === f || -1 === d || 2 > f - d ? null : p.slice(d, f - 1);
          if (null !== p) {
            f = 0;
            if (null !== i) {
              for (
                ;
                f < p.length &&
                f < i.length &&
                p[p.length - f - 1].source === i[i.length - f - 1].source;

              )
                f++;
              for (i = i.length - 1; i > f; i--) a = l.pop();
            }
            for (i = p.length - f - 1; 1 <= i; i--)
              (f = []),
                (d = p[i]),
                (h = p[i - 1].functionName)
                  ? ((g = h.lastIndexOf(".")),
                    -1 === g && (g = 0),
                    "use" === h.slice(g, g + 3) && (g += 3),
                    (h = h.slice(g)))
                  : (h = ""),
                (h = {
                  id: null,
                  isStateEditable: !1,
                  name: h,
                  value: void 0,
                  subHooks: f,
                }),
                r &&
                  (h.hookSource = {
                    lineNumber: d.lineNumber,
                    columnNumber: d.columnNumber,
                    functionName: d.functionName,
                    fileName: d.fileName,
                  }),
                a.push(h),
                l.push(a),
                (a = f);
            i = p;
          }
          f = u.primitive;
          u = {
            id: "Context" === f || "DebugValue" === f ? null : s++,
            isStateEditable: "Reducer" === f || "State" === f,
            name: f,
            value: u.value,
            subHooks: [],
          };
          r &&
            ((f = {
              lineNumber: null,
              functionName: null,
              fileName: null,
              columnNumber: null,
            }),
            p &&
              1 <= p.length &&
              ((p = p[0]),
              (f.lineNumber = p.lineNumber),
              (f.functionName = p.functionName),
              (f.fileName = p.fileName),
              (f.columnNumber = p.columnNumber)),
            (u.hookSource = f));
          a.push(u);
        }
        J(n, null);
        return n;
      }
      function J(e, t) {
        for (var r = [], n = 0; n < e.length; n++) {
          var o = e[n];
          "DebugValue" === o.name && 0 === o.subHooks.length
            ? (e.splice(n, 1), n--, r.push(o))
            : J(o.subHooks, o);
        }
        null !== t &&
          (1 === r.length
            ? (t.value = r[0].value)
            : 1 < r.length &&
              (t.value = r.map(function (e) {
                return e.value;
              })));
      }
      function K(e) {
        if (
          e instanceof Error &&
          "ReactDebugToolsUnsupportedHookError" === e.name
        )
          throw e;
        var t = Error("Error rendering inspected component", {
          cause: e,
        });
        t.name = "ReactDebugToolsRenderError";
        t.cause = e;
        throw t;
      }
      function L(e, t, r) {
        var n =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
        null == r && (r = s.ReactCurrentDispatcher);
        var i = r.current;
        r.current = d;
        try {
          var a = Error();
          e(t);
        } catch (e) {
          K(e);
        } finally {
          var c = l;
          l = [];
          r.current = i;
        }
        i = o.parse(a);
        return I(i, c, n);
      }
      function M(e) {
        e.forEach(function (e, t) {
          return (t._currentValue = e);
        });
      }
      n = L;
      t.inspectHooksOfFiber = function (e, t) {
        var r =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
        null == t && (t = s.ReactCurrentDispatcher);
        if (0 !== e.tag && 15 !== e.tag && 11 !== e.tag)
          throw Error(
            "Unknown Fiber. Needs to be a function component to inspect hooks."
          );
        z();
        var n = e.type,
          i = e.memoizedProps;
        if (n !== e.elementType && n && n.defaultProps) {
          i = a({}, i);
          var c = n.defaultProps;
          for (f in c) void 0 === i[f] && (i[f] = c[f]);
        }
        u = e.memoizedState;
        var f = new Map();
        try {
          for (c = e; c; ) {
            if (10 === c.tag) {
              var p = c.type._context;
              f.has(p) ||
                (f.set(p, p._currentValue),
                (p._currentValue = c.memoizedProps.value));
            }
            c = c.return;
          }
          if (11 === e.tag) {
            var m = n.render;
            n = i;
            var h = e.ref;
            p = t;
            var g = p.current;
            p.current = d;
            try {
              var y = Error();
              m(n, h);
            } catch (e) {
              K(e);
            } finally {
              var b = l;
              l = [];
              p.current = g;
            }
            var v = o.parse(y);
            return I(v, b, r);
          }
          return L(n, i, t, r);
        } finally {
          (u = null), M(f);
        }
      };
    },
    8830: (e, t, r) => {
      "use strict";
      if (true) {
        e.exports = r(5161);
      } else {
      }
    },
    440: (e, t) => {
      "use strict";
      var r;
      var n = Symbol.for("react.element"),
        o = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        u = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        d = Symbol.for("react.suspense_list"),
        m = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        g = Symbol.for("react.offscreen"),
        y = Symbol.for("react.cache"),
        b = Symbol.for("react.client.reference");
      function w(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (((e = e.type), e)) {
                case i:
                case s:
                case a:
                case p:
                case d:
                  return e;
                default:
                  switch (((e = e && e.$$typeof), e)) {
                    case u:
                    case c:
                    case f:
                    case h:
                    case m:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      t.ContextConsumer = c;
      t.ContextProvider = l;
      r = n;
      t.ForwardRef = f;
      t.Fragment = i;
      t.Lazy = h;
      t.Memo = m;
      t.Portal = o;
      t.Profiler = s;
      t.StrictMode = a;
      t.Suspense = p;
      r = d;
      r = function () {
        return !1;
      };
      r = function () {
        return !1;
      };
      r = function (e) {
        return w(e) === c;
      };
      r = function (e) {
        return w(e) === l;
      };
      t.isElement = function (e) {
        return "object" === typeof e && null !== e && e.$$typeof === n;
      };
      r = function (e) {
        return w(e) === f;
      };
      r = function (e) {
        return w(e) === i;
      };
      r = function (e) {
        return w(e) === h;
      };
      r = function (e) {
        return w(e) === m;
      };
      r = function (e) {
        return w(e) === o;
      };
      r = function (e) {
        return w(e) === s;
      };
      r = function (e) {
        return w(e) === a;
      };
      r = function (e) {
        return w(e) === p;
      };
      r = function (e) {
        return w(e) === d;
      };
      r = function (e) {
        return "string" === typeof e ||
          "function" === typeof e ||
          e === i ||
          e === s ||
          e === a ||
          e === p ||
          e === d ||
          e === g ||
          e === y ||
          ("object" === typeof e &&
            null !== e &&
            (e.$$typeof === h ||
              e.$$typeof === m ||
              e.$$typeof === l ||
              e.$$typeof === c ||
              e.$$typeof === f ||
              e.$$typeof === b ||
              void 0 !== e.getModuleId))
          ? !0
          : !1;
      };
      t.typeOf = w;
    },
    2954: (e, t, r) => {
      "use strict";
      if (true) {
        e.exports = r(440);
      } else {
      }
    },
    5793: (e, t) => {
      "use strict";
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        c = Symbol.for("react.server_context"),
        u = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        p = Symbol.for("react.suspense_list"),
        d = Symbol.for("react.memo"),
        m = Symbol.for("react.lazy"),
        h = Symbol.for("react.debug_trace_mode"),
        g = Symbol.for("react.offscreen"),
        y = Symbol.for("react.cache"),
        b = Symbol.for("react.default_value"),
        v = Symbol.for("react.postpone"),
        E = Symbol.iterator;
      function da(e) {
        if (null === e || "object" !== typeof e) return null;
        e = (E && e[E]) || e["@@iterator"];
        return "function" === typeof e ? e : null;
      }
      var _ = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        k = Object.assign,
        O = {};
      function H(e, t, r) {
        this.props = e;
        this.context = t;
        this.refs = O;
        this.updater = r || _;
      }
      H.prototype.isReactComponent = {};
      H.prototype.setState = function (e, t) {
        if ("object" !== typeof e && "function" !== typeof e && null != e)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, t, "setState");
      };
      H.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      function I() {}
      I.prototype = H.prototype;
      function J(e, t, r) {
        this.props = e;
        this.context = t;
        this.refs = O;
        this.updater = r || _;
      }
      var R = (J.prototype = new I());
      R.constructor = J;
      k(R, H.prototype);
      R.isPureReactComponent = !0;
      var F = Array.isArray,
        D = Object.prototype.hasOwnProperty,
        x = {
          current: null,
        },
        N = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0,
        };
      function P(e, t, n) {
        var o,
          i = {},
          a = null,
          s = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (s = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            D.call(t, o) && !N.hasOwnProperty(o) && (i[o] = t[o]);
        var l = arguments.length - 2;
        if (1 === l) i.children = n;
        else if (1 < l) {
          for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
          i.children = c;
        }
        if (e && e.defaultProps)
          for (o in ((l = e.defaultProps), l)) void 0 === i[o] && (i[o] = l[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: s,
          props: i,
          _owner: x.current,
        };
      }
      function ea(e, t) {
        return {
          $$typeof: r,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner,
        };
      }
      function Q(e) {
        return "object" === typeof e && null !== e && e.$$typeof === r;
      }
      function escape(e) {
        var t = {
          "=": "=0",
          ":": "=2",
        };
        return (
          "$" +
          e.replace(/[=:]/g, function (e) {
            return t[e];
          })
        );
      }
      var A = /\/+/g;
      function S(e, t) {
        return "object" === typeof e && null !== e && null != e.key
          ? escape("" + e.key)
          : t.toString(36);
      }
      function T(e, t, o, i, a) {
        var s = typeof e;
        if ("undefined" === s || "boolean" === s) e = null;
        var l = !1;
        if (null === e) l = !0;
        else
          switch (s) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  l = !0;
              }
          }
        if (l)
          return (
            (l = e),
            (a = a(l)),
            (e = "" === i ? "." + S(l, 0) : i),
            F(a)
              ? ((o = ""),
                null != e && (o = e.replace(A, "$&/") + "/"),
                T(a, t, o, "", function (e) {
                  return e;
                }))
              : null != a &&
                (Q(a) &&
                  (a = ea(
                    a,
                    o +
                      (!a.key || (l && l.key === a.key)
                        ? ""
                        : ("" + a.key).replace(A, "$&/") + "/") +
                      e
                  )),
                t.push(a)),
            1
          );
        l = 0;
        i = "" === i ? "." : i + ":";
        if (F(e))
          for (var c = 0; c < e.length; c++) {
            s = e[c];
            var u = i + S(s, c);
            l += T(s, t, o, u, a);
          }
        else if (((u = da(e)), "function" === typeof u))
          for (e = u.call(e), c = 0; !(s = e.next()).done; )
            (s = s.value), (u = i + S(s, c++)), (l += T(s, t, o, u, a));
        else if ("object" === s)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          );
        return l;
      }
      function U(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        T(e, n, "", "", function (e) {
          return t.call(r, e, o++);
        });
        return n;
      }
      function fa(e) {
        if (-1 === e._status) {
          var t = e._result;
          t = t();
          t.then(
            function (t) {
              if (0 === e._status || -1 === e._status)
                (e._status = 1), (e._result = t);
            },
            function (t) {
              if (0 === e._status || -1 === e._status)
                (e._status = 2), (e._result = t);
            }
          );
          -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var $ = {
        current: null,
      };
      function ha() {
        return new WeakMap();
      }
      function W() {
        return {
          s: 0,
          v: void 0,
          o: null,
          p: null,
        };
      }
      var j = {
          current: null,
        },
        B = {
          transition: null,
        },
        V = {},
        Y = {
          ReactCurrentDispatcher: j,
          ReactCurrentCache: $,
          ReactCurrentBatchConfig: B,
          ReactCurrentOwner: x,
          ContextRegistry: V,
        };
      t.Children = {
        map: U,
        forEach: function (e, t, r) {
          U(
            e,
            function () {
              t.apply(this, arguments);
            },
            r
          );
        },
        count: function (e) {
          var t = 0;
          U(e, function () {
            t++;
          });
          return t;
        },
        toArray: function (e) {
          return (
            U(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!Q(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        },
      };
      t.Component = H;
      t.Fragment = o;
      t.Profiler = a;
      t.PureComponent = J;
      t.StrictMode = i;
      t.Suspense = f;
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
      t.cache = function (e) {
        return function () {
          var t = $.current;
          if (!t) return e.apply(null, arguments);
          var r = t.getCacheForType(ha);
          t = r.get(e);
          void 0 === t && ((t = W()), r.set(e, t));
          r = 0;
          for (var n = arguments.length; r < n; r++) {
            var o = arguments[r];
            if (
              "function" === typeof o ||
              ("object" === typeof o && null !== o)
            ) {
              var i = t.o;
              null === i && (t.o = i = new WeakMap());
              t = i.get(o);
              void 0 === t && ((t = W()), i.set(o, t));
            } else
              (i = t.p),
                null === i && (t.p = i = new Map()),
                (t = i.get(o)),
                void 0 === t && ((t = W()), i.set(o, t));
          }
          if (1 === t.s) return t.v;
          if (2 === t.s) throw t.v;
          try {
            var a = e.apply(null, arguments);
            r = t;
            r.s = 1;
            return (r.v = a);
          } catch (e) {
            throw ((a = t), (a.s = 2), (a.v = e), e);
          }
        };
      };
      t.cloneElement = function (e, t, n) {
        if (null === e || void 0 === e)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              e +
              "."
          );
        var o = k({}, e.props),
          i = e.key,
          a = e.ref,
          s = e._owner;
        if (null != t) {
          void 0 !== t.ref && ((a = t.ref), (s = x.current));
          void 0 !== t.key && (i = "" + t.key);
          if (e.type && e.type.defaultProps) var l = e.type.defaultProps;
          for (c in t)
            D.call(t, c) &&
              !N.hasOwnProperty(c) &&
              (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
        }
        var c = arguments.length - 2;
        if (1 === c) o.children = n;
        else if (1 < c) {
          l = Array(c);
          for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
          o.children = l;
        }
        return {
          $$typeof: r,
          type: e.type,
          key: i,
          ref: a,
          props: o,
          _owner: s,
        };
      };
      t.createContext = function (e) {
        e = {
          $$typeof: l,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        };
        e.Provider = {
          $$typeof: s,
          _context: e,
        };
        return (e.Consumer = e);
      };
      t.createElement = P;
      t.createFactory = function (e) {
        var t = P.bind(null, e);
        t.type = e;
        return t;
      };
      t.createRef = function () {
        return {
          current: null,
        };
      };
      t.createServerContext = function (e, t) {
        var r = !0;
        if (!V[e]) {
          r = !1;
          var n = {
            $$typeof: c,
            _currentValue: t,
            _currentValue2: t,
            _defaultValue: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: e,
          };
          n.Provider = {
            $$typeof: s,
            _context: n,
          };
          V[e] = n;
        }
        n = V[e];
        if (n._defaultValue === b)
          (n._defaultValue = t),
            n._currentValue === b && (n._currentValue = t),
            n._currentValue2 === b && (n._currentValue2 = t);
        else if (r) throw Error("ServerContext: " + e + " already defined");
        return n;
      };
      t.experimental_useEffectEvent = function (e) {
        return j.current.useEffectEvent(e);
      };
      t.experimental_useOptimistic = function (e, t) {
        return j.current.useOptimistic(e, t);
      };
      t.forwardRef = function (e) {
        return {
          $$typeof: u,
          render: e,
        };
      };
      t.isValidElement = Q;
      t.lazy = function (e) {
        return {
          $$typeof: m,
          _payload: {
            _status: -1,
            _result: e,
          },
          _init: fa,
        };
      };
      t.memo = function (e, t) {
        return {
          $$typeof: d,
          type: e,
          compare: void 0 === t ? null : t,
        };
      };
      t.startTransition = function (e) {
        var t = B.transition;
        B.transition = {};
        try {
          e();
        } finally {
          B.transition = t;
        }
      };
      t.unstable_Cache = y;
      t.unstable_DebugTracingMode = h;
      t.unstable_Offscreen = g;
      t.unstable_SuspenseList = p;
      t.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      };
      t.unstable_getCacheForType = function (e) {
        var t = $.current;
        return t ? t.getCacheForType(e) : e();
      };
      t.unstable_getCacheSignal = function () {
        var e = $.current;
        return e
          ? e.getCacheSignal()
          : ((e = new AbortController()),
            e.abort(
              Error(
                "This CacheSignal was requested outside React which means that it is immediately aborted."
              )
            ),
            e.signal);
      };
      t.unstable_postpone = function (e) {
        e = Error(e);
        e.$$typeof = v;
        throw e;
      };
      t.unstable_useCacheRefresh = function () {
        return j.current.useCacheRefresh();
      };
      t.unstable_useMemoCache = function (e) {
        return j.current.useMemoCache(e);
      };
      t.use = function (e) {
        return j.current.use(e);
      };
      t.useCallback = function (e, t) {
        return j.current.useCallback(e, t);
      };
      t.useContext = function (e) {
        return j.current.useContext(e);
      };
      t.useDebugValue = function () {};
      t.useDeferredValue = function (e) {
        return j.current.useDeferredValue(e);
      };
      t.useEffect = function (e, t) {
        return j.current.useEffect(e, t);
      };
      t.useId = function () {
        return j.current.useId();
      };
      t.useImperativeHandle = function (e, t, r) {
        return j.current.useImperativeHandle(e, t, r);
      };
      t.useInsertionEffect = function (e, t) {
        return j.current.useInsertionEffect(e, t);
      };
      t.useLayoutEffect = function (e, t) {
        return j.current.useLayoutEffect(e, t);
      };
      t.useMemo = function (e, t) {
        return j.current.useMemo(e, t);
      };
      t.useReducer = function (e, t, r) {
        return j.current.useReducer(e, t, r);
      };
      t.useRef = function (e) {
        return j.current.useRef(e);
      };
      t.useState = function (e) {
        return j.current.useState(e);
      };
      t.useSyncExternalStore = function (e, t, r) {
        return j.current.useSyncExternalStore(e, t, r);
      };
      t.useTransition = function () {
        return j.current.useTransition();
      };
      t.version = "18.3.0-experimental-db69f95e4-20231002";
    },
    1147: (e, t, r) => {
      "use strict";
      if (true) {
        e.exports = r(5793);
      } else {
      }
    },
    8715: function (e, t, r) {
      var n, o, i;
      (function (a, s) {
        "use strict";
        if (true) {
          !((o = [r(7356)]),
          (n = s),
          (i = typeof n === "function" ? n.apply(t, o) : n),
          i !== undefined && (e.exports = i));
        } else {
        }
      })(this, function ErrorStackParser(e) {
        "use strict";
        var t = /(^|@)\S+:\d+/;
        var r = /^\s*at .*(\S+:\d+|\(native\))/m;
        var n = /^(eval@)?(\[native code])?$/;
        return {
          parse: function ErrorStackParser$$parse(e) {
            if (
              typeof e.stacktrace !== "undefined" ||
              typeof e["opera#sourceloc"] !== "undefined"
            ) {
              return this.parseOpera(e);
            } else if (e.stack && e.stack.match(r)) {
              return this.parseV8OrIE(e);
            } else if (e.stack) {
              return this.parseFFOrSafari(e);
            } else {
              throw new Error("Cannot parse given Error object");
            }
          },
          extractLocation: function ErrorStackParser$$extractLocation(e) {
            if (e.indexOf(":") === -1) {
              return [e];
            }
            var t = /(.+?)(?::(\d+))?(?::(\d+))?$/;
            var r = t.exec(e.replace(/[()]/g, ""));
            return [r[1], r[2] || undefined, r[3] || undefined];
          },
          parseV8OrIE: function ErrorStackParser$$parseV8OrIE(t) {
            var n = t.stack.split("\n").filter(function (e) {
              return !!e.match(r);
            }, this);
            return n.map(function (t) {
              if (t.indexOf("(eval ") > -1) {
                t = t
                  .replace(/eval code/g, "eval")
                  .replace(/(\(eval at [^()]*)|(\),.*$)/g, "");
              }
              var r = t.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              var n = r.match(/ (\((.+):(\d+):(\d+)\)$)/);
              r = n ? r.replace(n[0], "") : r;
              var o = r.split(/\s+/).slice(1);
              var i = this.extractLocation(n ? n[1] : o.pop());
              var a = o.join(" ") || undefined;
              var s =
                ["eval", "<anonymous>"].indexOf(i[0]) > -1 ? undefined : i[0];
              return new e({
                functionName: a,
                fileName: s,
                lineNumber: i[1],
                columnNumber: i[2],
                source: t,
              });
            }, this);
          },
          parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(t) {
            var r = t.stack.split("\n").filter(function (e) {
              return !e.match(n);
            }, this);
            return r.map(function (t) {
              if (t.indexOf(" > eval") > -1) {
                t = t.replace(
                  / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                  ":$1"
                );
              }
              if (t.indexOf("@") === -1 && t.indexOf(":") === -1) {
                return new e({
                  functionName: t,
                });
              } else {
                var r = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                var n = t.match(r);
                var o = n && n[1] ? n[1] : undefined;
                var i = this.extractLocation(t.replace(r, ""));
                return new e({
                  functionName: o,
                  fileName: i[0],
                  lineNumber: i[1],
                  columnNumber: i[2],
                  source: t,
                });
              }
            }, this);
          },
          parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (
              !e.stacktrace ||
              (e.message.indexOf("\n") > -1 &&
                e.message.split("\n").length > e.stacktrace.split("\n").length)
            ) {
              return this.parseOpera9(e);
            } else if (!e.stack) {
              return this.parseOpera10(e);
            } else {
              return this.parseOpera11(e);
            }
          },
          parseOpera9: function ErrorStackParser$$parseOpera9(t) {
            var r = /Line (\d+).*script (?:in )?(\S+)/i;
            var n = t.message.split("\n");
            var o = [];
            for (var i = 2, a = n.length; i < a; i += 2) {
              var s = r.exec(n[i]);
              if (s) {
                o.push(
                  new e({
                    fileName: s[2],
                    lineNumber: s[1],
                    source: n[i],
                  })
                );
              }
            }
            return o;
          },
          parseOpera10: function ErrorStackParser$$parseOpera10(t) {
            var r =
              /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var n = t.stacktrace.split("\n");
            var o = [];
            for (var i = 0, a = n.length; i < a; i += 2) {
              var s = r.exec(n[i]);
              if (s) {
                o.push(
                  new e({
                    functionName: s[3] || undefined,
                    fileName: s[2],
                    lineNumber: s[1],
                    source: n[i],
                  })
                );
              }
            }
            return o;
          },
          parseOpera11: function ErrorStackParser$$parseOpera11(r) {
            var n = r.stack.split("\n").filter(function (e) {
              return !!e.match(t) && !e.match(/^Error created at/);
            }, this);
            return n.map(function (t) {
              var r = t.split("@");
              var n = this.extractLocation(r.pop());
              var o = r.shift() || "";
              var i =
                o
                  .replace(/<anonymous function(: (\w+))?>/, "$2")
                  .replace(/\([^)]*\)/g, "") || undefined;
              var a;
              if (o.match(/\(([^)]*)\)/)) {
                a = o.replace(/^[^(]+\(([^)]*)\)$/, "$1");
              }
              var s =
                a === undefined || a === "[arguments not available]"
                  ? undefined
                  : a.split(",");
              return new e({
                functionName: i,
                args: s,
                fileName: n[0],
                lineNumber: n[1],
                columnNumber: n[2],
                source: t,
              });
            }, this);
          },
        };
      });
    },
    3018: (e, t, r) => {
      "use strict";
      var n = r(397);
      e.exports = LRUCache;
      var o = r(7745);
      var i = r(2599);
      var a = r(5986);
      var s =
        typeof Symbol === "function" &&
        n.env._nodeLRUCacheForceNoSymbol !== "1";
      var l;
      if (s) {
        l = function (e) {
          return Symbol(e);
        };
      } else {
        l = function (e) {
          return "_" + e;
        };
      }
      var c = l("max");
      var u = l("length");
      var f = l("lengthCalculator");
      var p = l("allowStale");
      var d = l("maxAge");
      var m = l("dispose");
      var h = l("noDisposeOnSet");
      var g = l("lruList");
      var y = l("cache");
      function naiveLength() {
        return 1;
      }
      function LRUCache(e) {
        if (!(this instanceof LRUCache)) {
          return new LRUCache(e);
        }
        if (typeof e === "number") {
          e = {
            max: e,
          };
        }
        if (!e) {
          e = {};
        }
        var t = (this[c] = e.max);
        if (!t || !(typeof t === "number") || t <= 0) {
          this[c] = Infinity;
        }
        var r = e.length || naiveLength;
        if (typeof r !== "function") {
          r = naiveLength;
        }
        this[f] = r;
        this[p] = e.stale || false;
        this[d] = e.maxAge || 0;
        this[m] = e.dispose;
        this[h] = e.noDisposeOnSet || false;
        this.reset();
      }
      Object.defineProperty(LRUCache.prototype, "max", {
        set: function (e) {
          if (!e || !(typeof e === "number") || e <= 0) {
            e = Infinity;
          }
          this[c] = e;
          trim(this);
        },
        get: function () {
          return this[c];
        },
        enumerable: true,
      });
      Object.defineProperty(LRUCache.prototype, "allowStale", {
        set: function (e) {
          this[p] = !!e;
        },
        get: function () {
          return this[p];
        },
        enumerable: true,
      });
      Object.defineProperty(LRUCache.prototype, "maxAge", {
        set: function (e) {
          if (!e || !(typeof e === "number") || e < 0) {
            e = 0;
          }
          this[d] = e;
          trim(this);
        },
        get: function () {
          return this[d];
        },
        enumerable: true,
      });
      Object.defineProperty(LRUCache.prototype, "lengthCalculator", {
        set: function (e) {
          if (typeof e !== "function") {
            e = naiveLength;
          }
          if (e !== this[f]) {
            this[f] = e;
            this[u] = 0;
            this[g].forEach(function (e) {
              e.length = this[f](e.value, e.key);
              this[u] += e.length;
            }, this);
          }
          trim(this);
        },
        get: function () {
          return this[f];
        },
        enumerable: true,
      });
      Object.defineProperty(LRUCache.prototype, "length", {
        get: function () {
          return this[u];
        },
        enumerable: true,
      });
      Object.defineProperty(LRUCache.prototype, "itemCount", {
        get: function () {
          return this[g].length;
        },
        enumerable: true,
      });
      LRUCache.prototype.rforEach = function (e, t) {
        t = t || this;
        for (var r = this[g].tail; r !== null; ) {
          var n = r.prev;
          forEachStep(this, e, r, t);
          r = n;
        }
      };
      function forEachStep(e, t, r, n) {
        var o = r.value;
        if (isStale(e, o)) {
          del(e, r);
          if (!e[p]) {
            o = undefined;
          }
        }
        if (o) {
          t.call(n, o.value, o.key, e);
        }
      }
      LRUCache.prototype.forEach = function (e, t) {
        t = t || this;
        for (var r = this[g].head; r !== null; ) {
          var n = r.next;
          forEachStep(this, e, r, t);
          r = n;
        }
      };
      LRUCache.prototype.keys = function () {
        return this[g].toArray().map(function (e) {
          return e.key;
        }, this);
      };
      LRUCache.prototype.values = function () {
        return this[g].toArray().map(function (e) {
          return e.value;
        }, this);
      };
      LRUCache.prototype.reset = function () {
        if (this[m] && this[g] && this[g].length) {
          this[g].forEach(function (e) {
            this[m](e.key, e.value);
          }, this);
        }
        this[y] = new o();
        this[g] = new a();
        this[u] = 0;
      };
      LRUCache.prototype.dump = function () {
        return this[g]
          .map(function (e) {
            if (!isStale(this, e)) {
              return {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0),
              };
            }
          }, this)
          .toArray()
          .filter(function (e) {
            return e;
          });
      };
      LRUCache.prototype.dumpLru = function () {
        return this[g];
      };
      LRUCache.prototype.inspect = function (e, t) {
        var r = "LRUCache {";
        var n = false;
        var o = this[p];
        if (o) {
          r += "\n  allowStale: true";
          n = true;
        }
        var a = this[c];
        if (a && a !== Infinity) {
          if (n) {
            r += ",";
          }
          r += "\n  max: " + i.inspect(a, t);
          n = true;
        }
        var s = this[d];
        if (s) {
          if (n) {
            r += ",";
          }
          r += "\n  maxAge: " + i.inspect(s, t);
          n = true;
        }
        var l = this[f];
        if (l && l !== naiveLength) {
          if (n) {
            r += ",";
          }
          r += "\n  length: " + i.inspect(this[u], t);
          n = true;
        }
        var m = false;
        this[g].forEach(function (e) {
          if (m) {
            r += ",\n  ";
          } else {
            if (n) {
              r += ",\n";
            }
            m = true;
            r += "\n  ";
          }
          var o = i.inspect(e.key).split("\n").join("\n  ");
          var a = {
            value: e.value,
          };
          if (e.maxAge !== s) {
            a.maxAge = e.maxAge;
          }
          if (l !== naiveLength) {
            a.length = e.length;
          }
          if (isStale(this, e)) {
            a.stale = true;
          }
          a = i.inspect(a, t).split("\n").join("\n  ");
          r += o + " => " + a;
        });
        if (m || n) {
          r += "\n";
        }
        r += "}";
        return r;
      };
      LRUCache.prototype.set = function (e, t, r) {
        r = r || this[d];
        var n = r ? Date.now() : 0;
        var o = this[f](t, e);
        if (this[y].has(e)) {
          if (o > this[c]) {
            del(this, this[y].get(e));
            return false;
          }
          var i = this[y].get(e);
          var a = i.value;
          if (this[m]) {
            if (!this[h]) {
              this[m](e, a.value);
            }
          }
          a.now = n;
          a.maxAge = r;
          a.value = t;
          this[u] += o - a.length;
          a.length = o;
          this.get(e);
          trim(this);
          return true;
        }
        var s = new Entry(e, t, o, n, r);
        if (s.length > this[c]) {
          if (this[m]) {
            this[m](e, t);
          }
          return false;
        }
        this[u] += s.length;
        this[g].unshift(s);
        this[y].set(e, this[g].head);
        trim(this);
        return true;
      };
      LRUCache.prototype.has = function (e) {
        if (!this[y].has(e)) return false;
        var t = this[y].get(e).value;
        if (isStale(this, t)) {
          return false;
        }
        return true;
      };
      LRUCache.prototype.get = function (e) {
        return get(this, e, true);
      };
      LRUCache.prototype.peek = function (e) {
        return get(this, e, false);
      };
      LRUCache.prototype.pop = function () {
        var e = this[g].tail;
        if (!e) return null;
        del(this, e);
        return e.value;
      };
      LRUCache.prototype.del = function (e) {
        del(this, this[y].get(e));
      };
      LRUCache.prototype.load = function (e) {
        this.reset();
        var t = Date.now();
        for (var r = e.length - 1; r >= 0; r--) {
          var n = e[r];
          var o = n.e || 0;
          if (o === 0) {
            this.set(n.k, n.v);
          } else {
            var i = o - t;
            if (i > 0) {
              this.set(n.k, n.v, i);
            }
          }
        }
      };
      LRUCache.prototype.prune = function () {
        var e = this;
        this[y].forEach(function (t, r) {
          get(e, r, false);
        });
      };
      function get(e, t, r) {
        var n = e[y].get(t);
        if (n) {
          var o = n.value;
          if (isStale(e, o)) {
            del(e, n);
            if (!e[p]) o = undefined;
          } else {
            if (r) {
              e[g].unshiftNode(n);
            }
          }
          if (o) o = o.value;
        }
        return o;
      }
      function isStale(e, t) {
        if (!t || (!t.maxAge && !e[d])) {
          return false;
        }
        var r = false;
        var n = Date.now() - t.now;
        if (t.maxAge) {
          r = n > t.maxAge;
        } else {
          r = e[d] && n > e[d];
        }
        return r;
      }
      function trim(e) {
        if (e[u] > e[c]) {
          for (var t = e[g].tail; e[u] > e[c] && t !== null; ) {
            var r = t.prev;
            del(e, t);
            t = r;
          }
        }
      }
      function del(e, t) {
        if (t) {
          var r = t.value;
          if (e[m]) {
            e[m](r.key, r.value);
          }
          e[u] -= r.length;
          e[y].delete(r.key);
          e[g].removeNode(t);
        }
      }
      function Entry(e, t, r, n, o) {
        this.key = e;
        this.value = t;
        this.length = r;
        this.now = n;
        this.maxAge = o || 0;
      }
    },
    397: (e) => {
      var t = (e.exports = {});
      var r;
      var n;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            r = setTimeout;
          } else {
            r = defaultSetTimout;
          }
        } catch (e) {
          r = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            n = clearTimeout;
          } else {
            n = defaultClearTimeout;
          }
        } catch (e) {
          n = defaultClearTimeout;
        }
      })();
      function runTimeout(e) {
        if (r === setTimeout) {
          return setTimeout(e, 0);
        }
        if ((r === defaultSetTimout || !r) && setTimeout) {
          r = setTimeout;
          return setTimeout(e, 0);
        }
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      function runClearTimeout(e) {
        if (n === clearTimeout) {
          return clearTimeout(e);
        }
        if ((n === defaultClearTimeout || !n) && clearTimeout) {
          n = clearTimeout;
          return clearTimeout(e);
        }
        try {
          return n(e);
        } catch (t) {
          try {
            return n.call(null, e);
          } catch (t) {
            return n.call(this, e);
          }
        }
      }
      var o = [];
      var i = false;
      var a;
      var s = -1;
      function cleanUpNextTick() {
        if (!i || !a) {
          return;
        }
        i = false;
        if (a.length) {
          o = a.concat(o);
        } else {
          s = -1;
        }
        if (o.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (i) {
          return;
        }
        var e = runTimeout(cleanUpNextTick);
        i = true;
        var t = o.length;
        while (t) {
          a = o;
          o = [];
          while (++s < t) {
            if (a) {
              a[s].run();
            }
          }
          s = -1;
          t = o.length;
        }
        a = null;
        i = false;
        runClearTimeout(e);
      }
      t.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
        }
        o.push(new Item(e, t));
        if (o.length === 1 && !i) {
          runTimeout(drainQueue);
        }
      };
      function Item(e, t) {
        this.fun = e;
        this.array = t;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      t.title = "browser";
      t.browser = true;
      t.env = {};
      t.argv = [];
      t.version = "";
      t.versions = {};
      function noop() {}
      t.on = noop;
      t.addListener = noop;
      t.once = noop;
      t.off = noop;
      t.removeListener = noop;
      t.removeAllListeners = noop;
      t.emit = noop;
      t.prependListener = noop;
      t.prependOnceListener = noop;
      t.listeners = function (e) {
        return [];
      };
      t.binding = function (e) {
        throw new Error("process.binding is not supported");
      };
      t.cwd = function () {
        return "/";
      };
      t.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      };
      t.umask = function () {
        return 0;
      };
    },
    7745: (e, t, r) => {
      var n = r(397);
      if (
        n.env.npm_package_name === "pseudomap" &&
        n.env.npm_lifecycle_script === "test"
      )
        n.env.TEST_PSEUDOMAP = "true";
      if (typeof Map === "function" && !n.env.TEST_PSEUDOMAP) {
        e.exports = Map;
      } else {
        e.exports = r(7503);
      }
    },
    7503: (e) => {
      var t = Object.prototype.hasOwnProperty;
      e.exports = PseudoMap;
      function PseudoMap(e) {
        if (!(this instanceof PseudoMap))
          throw new TypeError("Constructor PseudoMap requires 'new'");
        this.clear();
        if (e) {
          if (
            e instanceof PseudoMap ||
            (typeof Map === "function" && e instanceof Map)
          )
            e.forEach(function (e, t) {
              this.set(t, e);
            }, this);
          else if (Array.isArray(e))
            e.forEach(function (e) {
              this.set(e[0], e[1]);
            }, this);
          else throw new TypeError("invalid argument");
        }
      }
      PseudoMap.prototype.forEach = function (e, t) {
        t = t || this;
        Object.keys(this._data).forEach(function (r) {
          if (r !== "size") e.call(t, this._data[r].value, this._data[r].key);
        }, this);
      };
      PseudoMap.prototype.has = function (e) {
        return !!find(this._data, e);
      };
      PseudoMap.prototype.get = function (e) {
        var t = find(this._data, e);
        return t && t.value;
      };
      PseudoMap.prototype.set = function (e, t) {
        set(this._data, e, t);
      };
      PseudoMap.prototype.delete = function (e) {
        var t = find(this._data, e);
        if (t) {
          delete this._data[t._index];
          this._data.size--;
        }
      };
      PseudoMap.prototype.clear = function () {
        var e = Object.create(null);
        e.size = 0;
        Object.defineProperty(this, "_data", {
          value: e,
          enumerable: false,
          configurable: true,
          writable: false,
        });
      };
      Object.defineProperty(PseudoMap.prototype, "size", {
        get: function () {
          return this._data.size;
        },
        set: function (e) {},
        enumerable: true,
        configurable: true,
      });
      PseudoMap.prototype.values =
        PseudoMap.prototype.keys =
        PseudoMap.prototype.entries =
          function () {
            throw new Error("iterators are not implemented in this version");
          };
      function same(e, t) {
        return e === t || (e !== e && t !== t);
      }
      function Entry(e, t, r) {
        this.key = e;
        this.value = t;
        this._index = r;
      }
      function find(e, r) {
        for (var n = 0, o = "_" + r, i = o; t.call(e, i); i = o + n++) {
          if (same(e[i].key, r)) return e[i];
        }
      }
      function set(e, r, n) {
        for (var o = 0, i = "_" + r, a = i; t.call(e, a); a = i + o++) {
          if (same(e[a].key, r)) {
            e[a].value = n;
            return;
          }
        }
        e.size++;
        e[a] = new Entry(r, n, a);
      }
    },
    7356: function (e, t) {
      var r, n, o;
      (function (i, a) {
        "use strict";
        if (true) {
          !((n = []),
          (r = a),
          (o = typeof r === "function" ? r.apply(t, n) : r),
          o !== undefined && (e.exports = o));
        } else {
        }
      })(this, function () {
        "use strict";
        function _isNumber(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }
        function _capitalize(e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        }
        function _getter(e) {
          return function () {
            return this[e];
          };
        }
        var e = ["isConstructor", "isEval", "isNative", "isToplevel"];
        var t = ["columnNumber", "lineNumber"];
        var r = ["fileName", "functionName", "source"];
        var n = ["args"];
        var o = e.concat(t, r, n);
        function StackFrame(e) {
          if (!e) return;
          for (var t = 0; t < o.length; t++) {
            if (e[o[t]] !== undefined) {
              this["set" + _capitalize(o[t])](e[o[t]]);
            }
          }
        }
        StackFrame.prototype = {
          getArgs: function () {
            return this.args;
          },
          setArgs: function (e) {
            if (Object.prototype.toString.call(e) !== "[object Array]") {
              throw new TypeError("Args must be an Array");
            }
            this.args = e;
          },
          getEvalOrigin: function () {
            return this.evalOrigin;
          },
          setEvalOrigin: function (e) {
            if (e instanceof StackFrame) {
              this.evalOrigin = e;
            } else if (e instanceof Object) {
              this.evalOrigin = new StackFrame(e);
            } else {
              throw new TypeError(
                "Eval Origin must be an Object or StackFrame"
              );
            }
          },
          toString: function () {
            var e = this.getFileName() || "";
            var t = this.getLineNumber() || "";
            var r = this.getColumnNumber() || "";
            var n = this.getFunctionName() || "";
            if (this.getIsEval()) {
              if (e) {
                return "[eval] (" + e + ":" + t + ":" + r + ")";
              }
              return "[eval]:" + t + ":" + r;
            }
            if (n) {
              return n + " (" + e + ":" + t + ":" + r + ")";
            }
            return e + ":" + t + ":" + r;
          },
        };
        StackFrame.fromString = function StackFrame$$fromString(e) {
          var t = e.indexOf("(");
          var r = e.lastIndexOf(")");
          var n = e.substring(0, t);
          var o = e.substring(t + 1, r).split(",");
          var i = e.substring(r + 1);
          if (i.indexOf("@") === 0) {
            var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, "");
            var s = a[1];
            var l = a[2];
            var c = a[3];
          }
          return new StackFrame({
            functionName: n,
            args: o || undefined,
            fileName: s,
            lineNumber: l || undefined,
            columnNumber: c || undefined,
          });
        };
        for (var i = 0; i < e.length; i++) {
          StackFrame.prototype["get" + _capitalize(e[i])] = _getter(e[i]);
          StackFrame.prototype["set" + _capitalize(e[i])] = (function (e) {
            return function (t) {
              this[e] = Boolean(t);
            };
          })(e[i]);
        }
        for (var a = 0; a < t.length; a++) {
          StackFrame.prototype["get" + _capitalize(t[a])] = _getter(t[a]);
          StackFrame.prototype["set" + _capitalize(t[a])] = (function (e) {
            return function (t) {
              if (!_isNumber(t)) {
                throw new TypeError(e + " must be a Number");
              }
              this[e] = Number(t);
            };
          })(t[a]);
        }
        for (var s = 0; s < r.length; s++) {
          StackFrame.prototype["get" + _capitalize(r[s])] = _getter(r[s]);
          StackFrame.prototype["set" + _capitalize(r[s])] = (function (e) {
            return function (t) {
              this[e] = String(t);
            };
          })(r[s]);
        }
        return StackFrame;
      });
    },
    7510: (e) => {
      if (typeof Object.create === "function") {
        e.exports = function inherits(e, t) {
          e.super_ = t;
          e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: false,
              writable: true,
              configurable: true,
            },
          });
        };
      } else {
        e.exports = function inherits(e, t) {
          e.super_ = t;
          var TempCtor = function () {};
          TempCtor.prototype = t.prototype;
          e.prototype = new TempCtor();
          e.prototype.constructor = e;
        };
      }
    },
    1772: (e) => {
      e.exports = function isBuffer(e) {
        return (
          e &&
          typeof e === "object" &&
          typeof e.copy === "function" &&
          typeof e.fill === "function" &&
          typeof e.readUInt8 === "function"
        );
      };
    },
    2599: (e, t, r) => {
      var n = r(397);
      var o = /%[sdj%]/g;
      t.format = function (e) {
        if (!isString(e)) {
          var t = [];
          for (var r = 0; r < arguments.length; r++) {
            t.push(inspect(arguments[r]));
          }
          return t.join(" ");
        }
        var r = 1;
        var n = arguments;
        var i = n.length;
        var a = String(e).replace(o, function (e) {
          if (e === "%%") return "%";
          if (r >= i) return e;
          switch (e) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (e) {
                return "[Circular]";
              }
            default:
              return e;
          }
        });
        for (var s = n[r]; r < i; s = n[++r]) {
          if (isNull(s) || !isObject(s)) {
            a += " " + s;
          } else {
            a += " " + inspect(s);
          }
        }
        return a;
      };
      t.deprecate = function (e, r) {
        if (isUndefined(global.process)) {
          return function () {
            return t.deprecate(e, r).apply(this, arguments);
          };
        }
        if (n.noDeprecation === true) {
          return e;
        }
        var o = false;
        function deprecated() {
          if (!o) {
            if (n.throwDeprecation) {
              throw new Error(r);
            } else if (n.traceDeprecation) {
              console.trace(r);
            } else {
              console.error(r);
            }
            o = true;
          }
          return e.apply(this, arguments);
        }
        return deprecated;
      };
      var i = {};
      var a;
      t.debuglog = function (e) {
        if (isUndefined(a)) a = n.env.NODE_DEBUG || "";
        e = e.toUpperCase();
        if (!i[e]) {
          if (new RegExp("\\b" + e + "\\b", "i").test(a)) {
            var r = n.pid;
            i[e] = function () {
              var n = t.format.apply(t, arguments);
              console.error("%s %d: %s", e, r, n);
            };
          } else {
            i[e] = function () {};
          }
        }
        return i[e];
      };
      function inspect(e, r) {
        var n = {
          seen: [],
          stylize: stylizeNoColor,
        };
        if (arguments.length >= 3) n.depth = arguments[2];
        if (arguments.length >= 4) n.colors = arguments[3];
        if (isBoolean(r)) {
          n.showHidden = r;
        } else if (r) {
          t._extend(n, r);
        }
        if (isUndefined(n.showHidden)) n.showHidden = false;
        if (isUndefined(n.depth)) n.depth = 2;
        if (isUndefined(n.colors)) n.colors = false;
        if (isUndefined(n.customInspect)) n.customInspect = true;
        if (n.colors) n.stylize = stylizeWithColor;
        return formatValue(n, e, n.depth);
      }
      t.inspect = inspect;
      inspect.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39],
      };
      inspect.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red",
      };
      function stylizeWithColor(e, t) {
        var r = inspect.styles[t];
        if (r) {
          return (
            "[" +
            inspect.colors[r][0] +
            "m" +
            e +
            "[" +
            inspect.colors[r][1] +
            "m"
          );
        } else {
          return e;
        }
      }
      function stylizeNoColor(e, t) {
        return e;
      }
      function arrayToHash(e) {
        var t = {};
        e.forEach(function (e, r) {
          t[e] = true;
        });
        return t;
      }
      function formatValue(e, r, n) {
        if (
          e.customInspect &&
          r &&
          isFunction(r.inspect) &&
          r.inspect !== t.inspect &&
          !(r.constructor && r.constructor.prototype === r)
        ) {
          var o = r.inspect(n, e);
          if (!isString(o)) {
            o = formatValue(e, o, n);
          }
          return o;
        }
        var i = formatPrimitive(e, r);
        if (i) {
          return i;
        }
        var a = Object.keys(r);
        var s = arrayToHash(a);
        if (e.showHidden) {
          a = Object.getOwnPropertyNames(r);
        }
        if (
          isError(r) &&
          (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)
        ) {
          return formatError(r);
        }
        if (a.length === 0) {
          if (isFunction(r)) {
            var l = r.name ? ": " + r.name : "";
            return e.stylize("[Function" + l + "]", "special");
          }
          if (isRegExp(r)) {
            return e.stylize(RegExp.prototype.toString.call(r), "regexp");
          }
          if (isDate(r)) {
            return e.stylize(Date.prototype.toString.call(r), "date");
          }
          if (isError(r)) {
            return formatError(r);
          }
        }
        var c = "",
          u = false,
          f = ["{", "}"];
        if (isArray(r)) {
          u = true;
          f = ["[", "]"];
        }
        if (isFunction(r)) {
          var p = r.name ? ": " + r.name : "";
          c = " [Function" + p + "]";
        }
        if (isRegExp(r)) {
          c = " " + RegExp.prototype.toString.call(r);
        }
        if (isDate(r)) {
          c = " " + Date.prototype.toUTCString.call(r);
        }
        if (isError(r)) {
          c = " " + formatError(r);
        }
        if (a.length === 0 && (!u || r.length == 0)) {
          return f[0] + c + f[1];
        }
        if (n < 0) {
          if (isRegExp(r)) {
            return e.stylize(RegExp.prototype.toString.call(r), "regexp");
          } else {
            return e.stylize("[Object]", "special");
          }
        }
        e.seen.push(r);
        var d;
        if (u) {
          d = formatArray(e, r, n, s, a);
        } else {
          d = a.map(function (t) {
            return formatProperty(e, r, n, s, t, u);
          });
        }
        e.seen.pop();
        return reduceToSingleString(d, c, f);
      }
      function formatPrimitive(e, t) {
        if (isUndefined(t)) return e.stylize("undefined", "undefined");
        if (isString(t)) {
          var r =
            "'" +
            JSON.stringify(t)
              .replace(/^"|"$/g, "")
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"') +
            "'";
          return e.stylize(r, "string");
        }
        if (isNumber(t)) return e.stylize("" + t, "number");
        if (isBoolean(t)) return e.stylize("" + t, "boolean");
        if (isNull(t)) return e.stylize("null", "null");
      }
      function formatError(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function formatArray(e, t, r, n, o) {
        var i = [];
        for (var a = 0, s = t.length; a < s; ++a) {
          if (hasOwnProperty(t, String(a))) {
            i.push(formatProperty(e, t, r, n, String(a), true));
          } else {
            i.push("");
          }
        }
        o.forEach(function (o) {
          if (!o.match(/^\d+$/)) {
            i.push(formatProperty(e, t, r, n, o, true));
          }
        });
        return i;
      }
      function formatProperty(e, t, r, n, o, i) {
        var a, s, l;
        l = Object.getOwnPropertyDescriptor(t, o) || {
          value: t[o],
        };
        if (l.get) {
          if (l.set) {
            s = e.stylize("[Getter/Setter]", "special");
          } else {
            s = e.stylize("[Getter]", "special");
          }
        } else {
          if (l.set) {
            s = e.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(n, o)) {
          a = "[" + o + "]";
        }
        if (!s) {
          if (e.seen.indexOf(l.value) < 0) {
            if (isNull(r)) {
              s = formatValue(e, l.value, null);
            } else {
              s = formatValue(e, l.value, r - 1);
            }
            if (s.indexOf("\n") > -1) {
              if (i) {
                s = s
                  .split("\n")
                  .map(function (e) {
                    return "  " + e;
                  })
                  .join("\n")
                  .substr(2);
              } else {
                s =
                  "\n" +
                  s
                    .split("\n")
                    .map(function (e) {
                      return "   " + e;
                    })
                    .join("\n");
              }
            }
          } else {
            s = e.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(a)) {
          if (i && o.match(/^\d+$/)) {
            return s;
          }
          a = JSON.stringify("" + o);
          if (a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            a = a.substr(1, a.length - 2);
            a = e.stylize(a, "name");
          } else {
            a = a
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'");
            a = e.stylize(a, "string");
          }
        }
        return a + ": " + s;
      }
      function reduceToSingleString(e, t, r) {
        var n = 0;
        var o = e.reduce(function (e, t) {
          n++;
          if (t.indexOf("\n") >= 0) n++;
          return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (o > 60) {
          return (
            r[0] +
            (t === "" ? "" : t + "\n ") +
            " " +
            e.join(",\n  ") +
            " " +
            r[1]
          );
        }
        return r[0] + t + " " + e.join(", ") + " " + r[1];
      }
      function isArray(e) {
        return Array.isArray(e);
      }
      t.isArray = isArray;
      function isBoolean(e) {
        return typeof e === "boolean";
      }
      t.isBoolean = isBoolean;
      function isNull(e) {
        return e === null;
      }
      t.isNull = isNull;
      function isNullOrUndefined(e) {
        return e == null;
      }
      t.isNullOrUndefined = isNullOrUndefined;
      function isNumber(e) {
        return typeof e === "number";
      }
      t.isNumber = isNumber;
      function isString(e) {
        return typeof e === "string";
      }
      t.isString = isString;
      function isSymbol(e) {
        return typeof e === "symbol";
      }
      t.isSymbol = isSymbol;
      function isUndefined(e) {
        return e === void 0;
      }
      t.isUndefined = isUndefined;
      function isRegExp(e) {
        return isObject(e) && objectToString(e) === "[object RegExp]";
      }
      t.isRegExp = isRegExp;
      function isObject(e) {
        return typeof e === "object" && e !== null;
      }
      t.isObject = isObject;
      function isDate(e) {
        return isObject(e) && objectToString(e) === "[object Date]";
      }
      t.isDate = isDate;
      function isError(e) {
        return (
          isObject(e) &&
          (objectToString(e) === "[object Error]" || e instanceof Error)
        );
      }
      t.isError = isError;
      function isFunction(e) {
        return typeof e === "function";
      }
      t.isFunction = isFunction;
      function isPrimitive(e) {
        return (
          e === null ||
          typeof e === "boolean" ||
          typeof e === "number" ||
          typeof e === "string" ||
          typeof e === "symbol" ||
          typeof e === "undefined"
        );
      }
      t.isPrimitive = isPrimitive;
      t.isBuffer = r(1772);
      function objectToString(e) {
        return Object.prototype.toString.call(e);
      }
      function pad(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      var s = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function timestamp() {
        var e = new Date();
        var t = [
          pad(e.getHours()),
          pad(e.getMinutes()),
          pad(e.getSeconds()),
        ].join(":");
        return [e.getDate(), s[e.getMonth()], t].join(" ");
      }
      t.log = function () {
        console.log("%s - %s", timestamp(), t.format.apply(t, arguments));
      };
      t.inherits = r(7510);
      t._extend = function (e, t) {
        if (!t || !isObject(t)) return e;
        var r = Object.keys(t);
        var n = r.length;
        while (n--) {
          e[r[n]] = t[r[n]];
        }
        return e;
      };
      function hasOwnProperty(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
    },
    5986: (e) => {
      e.exports = Yallist;
      Yallist.Node = Node;
      Yallist.create = Yallist;
      function Yallist(e) {
        var t = this;
        if (!(t instanceof Yallist)) {
          t = new Yallist();
        }
        t.tail = null;
        t.head = null;
        t.length = 0;
        if (e && typeof e.forEach === "function") {
          e.forEach(function (e) {
            t.push(e);
          });
        } else if (arguments.length > 0) {
          for (var r = 0, n = arguments.length; r < n; r++) {
            t.push(arguments[r]);
          }
        }
        return t;
      }
      Yallist.prototype.removeNode = function (e) {
        if (e.list !== this) {
          throw new Error("removing node which does not belong to this list");
        }
        var t = e.next;
        var r = e.prev;
        if (t) {
          t.prev = r;
        }
        if (r) {
          r.next = t;
        }
        if (e === this.head) {
          this.head = t;
        }
        if (e === this.tail) {
          this.tail = r;
        }
        e.list.length--;
        e.next = null;
        e.prev = null;
        e.list = null;
      };
      Yallist.prototype.unshiftNode = function (e) {
        if (e === this.head) {
          return;
        }
        if (e.list) {
          e.list.removeNode(e);
        }
        var t = this.head;
        e.list = this;
        e.next = t;
        if (t) {
          t.prev = e;
        }
        this.head = e;
        if (!this.tail) {
          this.tail = e;
        }
        this.length++;
      };
      Yallist.prototype.pushNode = function (e) {
        if (e === this.tail) {
          return;
        }
        if (e.list) {
          e.list.removeNode(e);
        }
        var t = this.tail;
        e.list = this;
        e.prev = t;
        if (t) {
          t.next = e;
        }
        this.tail = e;
        if (!this.head) {
          this.head = e;
        }
        this.length++;
      };
      Yallist.prototype.push = function () {
        for (var e = 0, t = arguments.length; e < t; e++) {
          push(this, arguments[e]);
        }
        return this.length;
      };
      Yallist.prototype.unshift = function () {
        for (var e = 0, t = arguments.length; e < t; e++) {
          unshift(this, arguments[e]);
        }
        return this.length;
      };
      Yallist.prototype.pop = function () {
        if (!this.tail) {
          return undefined;
        }
        var e = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
        this.length--;
        return e;
      };
      Yallist.prototype.shift = function () {
        if (!this.head) {
          return undefined;
        }
        var e = this.head.value;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        this.length--;
        return e;
      };
      Yallist.prototype.forEach = function (e, t) {
        t = t || this;
        for (var r = this.head, n = 0; r !== null; n++) {
          e.call(t, r.value, n, this);
          r = r.next;
        }
      };
      Yallist.prototype.forEachReverse = function (e, t) {
        t = t || this;
        for (var r = this.tail, n = this.length - 1; r !== null; n--) {
          e.call(t, r.value, n, this);
          r = r.prev;
        }
      };
      Yallist.prototype.get = function (e) {
        for (var t = 0, r = this.head; r !== null && t < e; t++) {
          r = r.next;
        }
        if (t === e && r !== null) {
          return r.value;
        }
      };
      Yallist.prototype.getReverse = function (e) {
        for (var t = 0, r = this.tail; r !== null && t < e; t++) {
          r = r.prev;
        }
        if (t === e && r !== null) {
          return r.value;
        }
      };
      Yallist.prototype.map = function (e, t) {
        t = t || this;
        var r = new Yallist();
        for (var n = this.head; n !== null; ) {
          r.push(e.call(t, n.value, this));
          n = n.next;
        }
        return r;
      };
      Yallist.prototype.mapReverse = function (e, t) {
        t = t || this;
        var r = new Yallist();
        for (var n = this.tail; n !== null; ) {
          r.push(e.call(t, n.value, this));
          n = n.prev;
        }
        return r;
      };
      Yallist.prototype.reduce = function (e, t) {
        var r;
        var n = this.head;
        if (arguments.length > 1) {
          r = t;
        } else if (this.head) {
          n = this.head.next;
          r = this.head.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var o = 0; n !== null; o++) {
          r = e(r, n.value, o);
          n = n.next;
        }
        return r;
      };
      Yallist.prototype.reduceReverse = function (e, t) {
        var r;
        var n = this.tail;
        if (arguments.length > 1) {
          r = t;
        } else if (this.tail) {
          n = this.tail.prev;
          r = this.tail.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var o = this.length - 1; n !== null; o--) {
          r = e(r, n.value, o);
          n = n.prev;
        }
        return r;
      };
      Yallist.prototype.toArray = function () {
        var e = new Array(this.length);
        for (var t = 0, r = this.head; r !== null; t++) {
          e[t] = r.value;
          r = r.next;
        }
        return e;
      };
      Yallist.prototype.toArrayReverse = function () {
        var e = new Array(this.length);
        for (var t = 0, r = this.tail; r !== null; t++) {
          e[t] = r.value;
          r = r.prev;
        }
        return e;
      };
      Yallist.prototype.slice = function (e, t) {
        t = t || this.length;
        if (t < 0) {
          t += this.length;
        }
        e = e || 0;
        if (e < 0) {
          e += this.length;
        }
        var r = new Yallist();
        if (t < e || t < 0) {
          return r;
        }
        if (e < 0) {
          e = 0;
        }
        if (t > this.length) {
          t = this.length;
        }
        for (var n = 0, o = this.head; o !== null && n < e; n++) {
          o = o.next;
        }
        for (; o !== null && n < t; n++, o = o.next) {
          r.push(o.value);
        }
        return r;
      };
      Yallist.prototype.sliceReverse = function (e, t) {
        t = t || this.length;
        if (t < 0) {
          t += this.length;
        }
        e = e || 0;
        if (e < 0) {
          e += this.length;
        }
        var r = new Yallist();
        if (t < e || t < 0) {
          return r;
        }
        if (e < 0) {
          e = 0;
        }
        if (t > this.length) {
          t = this.length;
        }
        for (var n = this.length, o = this.tail; o !== null && n > t; n--) {
          o = o.prev;
        }
        for (; o !== null && n > e; n--, o = o.prev) {
          r.push(o.value);
        }
        return r;
      };
      Yallist.prototype.reverse = function () {
        var e = this.head;
        var t = this.tail;
        for (var r = e; r !== null; r = r.prev) {
          var n = r.prev;
          r.prev = r.next;
          r.next = n;
        }
        this.head = t;
        this.tail = e;
        return this;
      };
      function push(e, t) {
        e.tail = new Node(t, e.tail, null, e);
        if (!e.head) {
          e.head = e.tail;
        }
        e.length++;
      }
      function unshift(e, t) {
        e.head = new Node(t, null, e.head, e);
        if (!e.tail) {
          e.tail = e.head;
        }
        e.length++;
      }
      function Node(e, t, r, n) {
        if (!(this instanceof Node)) {
          return new Node(e, t, r, n);
        }
        this.list = n;
        this.value = e;
        if (t) {
          t.next = this;
          this.prev = t;
        } else {
          this.prev = null;
        }
        if (r) {
          r.prev = this;
          this.next = r;
        } else {
          this.next = null;
        }
      }
    },
  };
  var t = {};
  function __webpack_require__(r) {
    var n = t[r];
    if (n !== undefined) {
      return n.exports;
    }
    var o = (t[r] = {
      exports: {},
    });
    e[r].call(o.exports, o, o.exports, __webpack_require__);
    return o.exports;
  }
  (() => {
    __webpack_require__.n = (e) => {
      var t = e && e.__esModule ? () => e["default"] : () => e;
      __webpack_require__.d(t, {
        a: t,
      });
      return t;
    };
  })();
  (() => {
    __webpack_require__.d = (e, t) => {
      for (var r in t) {
        if (__webpack_require__.o(t, r) && !__webpack_require__.o(e, r)) {
          Object.defineProperty(e, r, {
            enumerable: true,
            get: t[r],
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t);
  })();
  var r = {};
  (() => {
    "use strict";
    const e = 1;
    const t = 2;
    const r = 5;
    const n = 6;
    const o = 7;
    const i = 8;
    const a = 9;
    const s = 10;
    const l = 11;
    const c = 12;
    const u = 13;
    const f = 14;
    const p = 1;
    const d = 2;
    const m = 3;
    const h = 4;
    const g = 1;
    var y = __webpack_require__(3018);
    var b = __webpack_require__.n(y);
    var v = __webpack_require__(2954);
    const E = Symbol.for("react.element");
    const _ = Symbol.for("react.portal");
    const k = Symbol.for("react.fragment");
    const O = Symbol.for("react.strict_mode");
    const R = Symbol.for("react.profiler");
    const F = Symbol.for("react.provider");
    const D = Symbol.for("react.context");
    const x = Symbol.for("react.server_context");
    const N = Symbol.for("react.forward_ref");
    const A = Symbol.for("react.suspense");
    const $ = Symbol.for("react.suspense_list");
    const j = Symbol.for("react.memo");
    const B = Symbol.for("react.lazy");
    const V = Symbol.for("react.scope");
    const Y = Symbol.for("react.debug_trace_mode");
    const q = Symbol.for("react.offscreen");
    const X = Symbol.for("react.legacy_hidden");
    const Z = Symbol.for("react.cache");
    const ee = Symbol.for("react.tracing_marker");
    const te = Symbol.for("react.default_value");
    const re = Symbol.for("react.memo_cache_sentinel");
    const ne = Symbol.for("react.postpone");
    const oe = Symbol.iterator;
    const ie = "@@iterator";
    function getIteratorFn(e) {
      if (e === null || typeof e !== "object") {
        return null;
      }
      const t = (oe && e[oe]) || e[ie];
      if (typeof t === "function") {
        return t;
      }
      return null;
    }
    const ae = {
      inspectable: Symbol("inspectable"),
      inspected: Symbol("inspected"),
      name: Symbol("name"),
      preview_long: Symbol("preview_long"),
      preview_short: Symbol("preview_short"),
      readonly: Symbol("readonly"),
      size: Symbol("size"),
      type: Symbol("type"),
      unserializable: Symbol("unserializable"),
    };
    const se = 2;
    function createDehydrated(e, t, r, n, o) {
      n.push(o);
      const i = {
        inspectable: t,
        type: e,
        preview_long: formatDataForPreview(r, true),
        preview_short: formatDataForPreview(r, false),
        name:
          !r.constructor || r.constructor.name === "Object"
            ? ""
            : r.constructor.name,
      };
      if (e === "array" || e === "typed_array") {
        i.size = r.length;
      } else if (e === "object") {
        i.size = Object.keys(r).length;
      }
      if (e === "iterator" || e === "typed_array") {
        i.readonly = true;
      }
      return i;
    }
    function dehydrate(e, t, r, n, o, i = 0) {
      const a = getDataType(e);
      let s;
      switch (a) {
        case "html_element":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: e.tagName,
            type: a,
          };
        case "function":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: typeof e.name === "function" || !e.name ? "function" : e.name,
            type: a,
          };
        case "string":
          s = o(n);
          if (s) {
            return e;
          } else {
            return e.length <= 500 ? e : e.slice(0, 500) + "...";
          }
        case "bigint":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: e.toString(),
            type: a,
          };
        case "symbol":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: e.toString(),
            type: a,
          };
        case "react_element":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: getDisplayNameForReactElement(e) || "Unknown",
            type: a,
          };
        case "array_buffer":
        case "data_view":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: a === "data_view" ? "DataView" : "ArrayBuffer",
            size: e.byteLength,
            type: a,
          };
        case "array":
          s = o(n);
          if (i >= se && !s) {
            return createDehydrated(a, true, e, t, n);
          }
          return e.map((e, a) =>
            dehydrate(e, t, r, n.concat([a]), o, s ? 1 : i + 1)
          );
        case "html_all_collection":
        case "typed_array":
        case "iterator":
          s = o(n);
          if (i >= se && !s) {
            return createDehydrated(a, true, e, t, n);
          } else {
            const l = {
              unserializable: true,
              type: a,
              readonly: true,
              size: a === "typed_array" ? e.length : undefined,
              preview_short: formatDataForPreview(e, false),
              preview_long: formatDataForPreview(e, true),
              name:
                !e.constructor || e.constructor.name === "Object"
                  ? ""
                  : e.constructor.name,
            };
            Array.from(e).forEach(
              (e, a) =>
                (l[a] = dehydrate(e, t, r, n.concat([a]), o, s ? 1 : i + 1))
            );
            r.push(n);
            return l;
          }
        case "opaque_iterator":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: e[Symbol.toStringTag],
            type: a,
          };
        case "date":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: e.toString(),
            type: a,
          };
        case "regexp":
          t.push(n);
          return {
            inspectable: false,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: e.toString(),
            type: a,
          };
        case "object":
          s = o(n);
          if (i >= se && !s) {
            return createDehydrated(a, true, e, t, n);
          } else {
            const a = {};
            getAllEnumerableKeys(e).forEach((l) => {
              const c = l.toString();
              a[c] = dehydrate(e[l], t, r, n.concat([c]), o, s ? 1 : i + 1);
            });
            return a;
          }
        case "class_instance":
          s = o(n);
          if (i >= se && !s) {
            return createDehydrated(a, true, e, t, n);
          }
          const l = {
            unserializable: true,
            type: a,
            readonly: true,
            preview_short: formatDataForPreview(e, false),
            preview_long: formatDataForPreview(e, true),
            name: e.constructor.name,
          };
          getAllEnumerableKeys(e).forEach((a) => {
            const c = a.toString();
            l[c] = dehydrate(e[a], t, r, n.concat([c]), o, s ? 1 : i + 1);
          });
          r.push(n);
          return l;
        case "infinity":
        case "nan":
        case "undefined":
          t.push(n);
          return {
            type: a,
          };
        default:
          return e;
      }
    }
    function fillInPath(e, t, r, n) {
      const o = getInObject(e, r);
      if (o != null) {
        if (!o[ae.unserializable]) {
          delete o[ae.inspectable];
          delete o[ae.inspected];
          delete o[ae.name];
          delete o[ae.preview_long];
          delete o[ae.preview_short];
          delete o[ae.readonly];
          delete o[ae.size];
          delete o[ae.type];
        }
      }
      if (n !== null && t.unserializable.length > 0) {
        const e = t.unserializable[0];
        let o = e.length === r.length;
        for (let t = 0; t < r.length; t++) {
          if (r[t] !== e[t]) {
            o = false;
            break;
          }
        }
        if (o) {
          upgradeUnserializable(n, n);
        }
      }
      setInObject(e, r, n);
    }
    function hydrate(e, t, r) {
      t.forEach((t) => {
        const r = t.length;
        const n = t[r - 1];
        const o = getInObject(e, t.slice(0, r - 1));
        if (!o || !o.hasOwnProperty(n)) {
          return;
        }
        const i = o[n];
        if (!i) {
          return;
        } else if (i.type === "infinity") {
          o[n] = Infinity;
        } else if (i.type === "nan") {
          o[n] = NaN;
        } else if (i.type === "undefined") {
          o[n] = undefined;
        } else {
          const e = {};
          e[ae.inspectable] = !!i.inspectable;
          e[ae.inspected] = false;
          e[ae.name] = i.name;
          e[ae.preview_long] = i.preview_long;
          e[ae.preview_short] = i.preview_short;
          e[ae.size] = i.size;
          e[ae.readonly] = !!i.readonly;
          e[ae.type] = i.type;
          o[n] = e;
        }
      });
      r.forEach((t) => {
        const r = t.length;
        const n = t[r - 1];
        const o = getInObject(e, t.slice(0, r - 1));
        if (!o || !o.hasOwnProperty(n)) {
          return;
        }
        const i = o[n];
        const a = {
          ...i,
        };
        upgradeUnserializable(a, i);
        o[n] = a;
      });
      return e;
    }
    function upgradeUnserializable(e, t) {
      Object.defineProperties(e, {
        [ae.inspected]: {
          configurable: true,
          enumerable: false,
          value: !!t.inspected,
        },
        [ae.name]: {
          configurable: true,
          enumerable: false,
          value: t.name,
        },
        [ae.preview_long]: {
          configurable: true,
          enumerable: false,
          value: t.preview_long,
        },
        [ae.preview_short]: {
          configurable: true,
          enumerable: false,
          value: t.preview_short,
        },
        [ae.size]: {
          configurable: true,
          enumerable: false,
          value: t.size,
        },
        [ae.readonly]: {
          configurable: true,
          enumerable: false,
          value: !!t.readonly,
        },
        [ae.type]: {
          configurable: true,
          enumerable: false,
          value: t.type,
        },
        [ae.unserializable]: {
          configurable: true,
          enumerable: false,
          value: !!t.unserializable,
        },
      });
      delete e.inspected;
      delete e.name;
      delete e.preview_long;
      delete e.preview_short;
      delete e.size;
      delete e.readonly;
      delete e.type;
      delete e.unserializable;
    }
    const le = Array.isArray;
    const ce = le;
    const ue = Object.prototype.hasOwnProperty;
    const fe = new WeakMap();
    const pe = new (b())({
      max: 1e3,
    });
    function alphaSortKeys(e, t) {
      if (e.toString() > t.toString()) {
        return 1;
      } else if (t.toString() > e.toString()) {
        return -1;
      } else {
        return 0;
      }
    }
    function getAllEnumerableKeys(e) {
      const t = new Set();
      let r = e;
      while (r != null) {
        const e = [...Object.keys(r), ...Object.getOwnPropertySymbols(r)];
        const n = Object.getOwnPropertyDescriptors(r);
        e.forEach((e) => {
          if (n[e].enumerable) {
            t.add(e);
          }
        });
        r = Object.getPrototypeOf(r);
      }
      return t;
    }
    function getWrappedDisplayName(e, t, r, n) {
      const o = e.displayName;
      return o || `${r}(${getDisplayName(t, n)})`;
    }
    function getDisplayName(e, t = "Anonymous") {
      const r = fe.get(e);
      if (r != null) {
        return r;
      }
      let n = t;
      if (typeof e.displayName === "string") {
        n = e.displayName;
      } else if (typeof e.name === "string" && e.name !== "") {
        n = e.name;
      }
      fe.set(e, n);
      return n;
    }
    let de = 0;
    function getUID() {
      return ++de;
    }
    function utfDecodeString(e) {
      let t = "";
      for (let r = 0; r < e.length; r++) {
        const n = e[r];
        t += String.fromCodePoint(n);
      }
      return t;
    }
    function surrogatePairToCodePoint(e, t) {
      return ((e & 1023) << 10) + (t & 1023) + 65536;
    }
    function utfEncodeString(e) {
      const t = pe.get(e);
      if (t !== undefined) {
        return t;
      }
      const r = [];
      let n = 0;
      let o;
      while (n < e.length) {
        o = e.charCodeAt(n);
        if ((o & 63488) === 55296) {
          r.push(surrogatePairToCodePoint(o, e.charCodeAt(++n)));
        } else {
          r.push(o);
        }
        ++n;
      }
      pe.set(e, r);
      return r;
    }
    function printOperationsArray(e) {
      const t = e[0];
      const r = e[1];
      const n = [`operations for renderer:${t} and root:${r}`];
      let o = 2;
      const i = [null];
      const a = e[o++];
      const s = o + a;
      while (o < s) {
        const t = e[o++];
        const r = utfDecodeString(e.slice(o, o + t));
        i.push(r);
        o += t;
      }
      while (o < e.length) {
        const t = e[o];
        switch (t) {
          case TREE_OPERATION_ADD: {
            const t = e[o + 1];
            const r = e[o + 2];
            o += 3;
            if (r === ElementTypeRoot) {
              n.push(`Add new root node ${t}`);
              o++;
              o++;
              o++;
              o++;
            } else {
              const r = e[o];
              o++;
              o++;
              const a = e[o];
              const s = i[a];
              o++;
              o++;
              n.push(`Add node ${t} (${s || "null"}) as child of ${r}`);
            }
            break;
          }
          case TREE_OPERATION_REMOVE: {
            const t = e[o + 1];
            o += 2;
            for (let r = 0; r < t; r++) {
              const t = e[o];
              o += 1;
              n.push(`Remove node ${t}`);
            }
            break;
          }
          case TREE_OPERATION_REMOVE_ROOT: {
            o += 1;
            n.push(`Remove root ${r}`);
            break;
          }
          case TREE_OPERATION_SET_SUBTREE_MODE: {
            const t = e[o + 1];
            const r = e[o + 1];
            o += 3;
            n.push(`Mode ${r} set for subtree with root ${t}`);
            break;
          }
          case TREE_OPERATION_REORDER_CHILDREN: {
            const t = e[o + 1];
            const r = e[o + 2];
            o += 3;
            const i = e.slice(o, o + r);
            o += r;
            n.push(`Re-order node ${t} children ${i.join(",")}`);
            break;
          }
          case TREE_OPERATION_UPDATE_TREE_BASE_DURATION:
            o += 3;
            break;
          case TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS:
            const a = e[o + 1];
            const s = e[o + 2];
            const l = e[o + 3];
            o += 4;
            n.push(`Node ${a} has ${s} errors and ${l} warnings`);
            break;
          default:
            throw Error(`Unsupported Bridge operation "${t}"`);
        }
      }
      console.log(n.join("\n  "));
    }
    function getDefaultComponentFilters() {
      return [
        {
          type: p,
          value: o,
          isEnabled: true,
        },
      ];
    }
    function getSavedComponentFilters() {
      try {
        const e = localStorageGetItem(
          LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY
        );
        if (e != null) {
          return JSON.parse(e);
        }
      } catch (e) {}
      return getDefaultComponentFilters();
    }
    function setSavedComponentFilters(e) {
      localStorageSetItem(
        LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY,
        JSON.stringify(e)
      );
    }
    function parseBool(e) {
      if (e === "true") {
        return true;
      }
      if (e === "false") {
        return false;
      }
    }
    function castBool(e) {
      if (e === true || e === false) {
        return e;
      }
    }
    function castBrowserTheme(e) {
      if (e === "light" || e === "dark" || e === "auto") {
        return e;
      }
    }
    function getAppendComponentStack() {
      const e = localStorageGetItem(
        LOCAL_STORAGE_SHOULD_APPEND_COMPONENT_STACK_KEY
      );
      return parseBool(e) ?? true;
    }
    function getBreakOnConsoleErrors() {
      const e = localStorageGetItem(
        LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS
      );
      return parseBool(e) ?? false;
    }
    function getHideConsoleLogsInStrictMode() {
      const e = localStorageGetItem(
        LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE
      );
      return parseBool(e) ?? false;
    }
    function getShowInlineWarningsAndErrors() {
      const e = localStorageGetItem(
        LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY
      );
      return parseBool(e) ?? true;
    }
    function getDefaultOpenInEditorURL() {
      return false ? 0 : "";
    }
    function getOpenInEditorURL() {
      try {
        const e = localStorageGetItem(LOCAL_STORAGE_OPEN_IN_EDITOR_URL);
        if (e != null) {
          return JSON.parse(e);
        }
      } catch (e) {}
      return getDefaultOpenInEditorURL();
    }
    function separateDisplayNameAndHOCs(e, t) {
      if (e === null) {
        return [null, null];
      }
      let r = null;
      switch (t) {
        case ElementTypeClass:
        case ElementTypeForwardRef:
        case ElementTypeFunction:
        case ElementTypeMemo:
          if (e.indexOf("(") >= 0) {
            const t = e.match(/[^()]+/g);
            if (t != null) {
              e = t.pop();
              r = t;
            }
          }
          break;
        default:
          break;
      }
      return [e, r];
    }
    function shallowDiffers(e, t) {
      for (const r in e) {
        if (!(r in t)) {
          return true;
        }
      }
      for (const r in t) {
        if (e[r] !== t[r]) {
          return true;
        }
      }
      return false;
    }
    function utils_getInObject(e, t) {
      return t.reduce((e, t) => {
        if (e) {
          if (ue.call(e, t)) {
            return e[t];
          }
          if (typeof e[Symbol.iterator] === "function") {
            return Array.from(e)[t];
          }
        }
        return null;
      }, e);
    }
    function deletePathInObject(e, t) {
      const r = t.length;
      const n = t[r - 1];
      if (e != null) {
        const o = utils_getInObject(e, t.slice(0, r - 1));
        if (o) {
          if (ce(o)) {
            o.splice(n, 1);
          } else {
            delete o[n];
          }
        }
      }
    }
    function renamePathInObject(e, t, r) {
      const n = t.length;
      if (e != null) {
        const o = utils_getInObject(e, t.slice(0, n - 1));
        if (o) {
          const e = t[n - 1];
          const i = r[n - 1];
          o[i] = o[e];
          if (ce(o)) {
            o.splice(e, 1);
          } else {
            delete o[e];
          }
        }
      }
    }
    function utils_setInObject(e, t, r) {
      const n = t.length;
      const o = t[n - 1];
      if (e != null) {
        const i = utils_getInObject(e, t.slice(0, n - 1));
        if (i) {
          i[o] = r;
        }
      }
    }
    function getDataType(e) {
      if (e === null) {
        return "null";
      } else if (e === undefined) {
        return "undefined";
      }
      if ((0, v.isElement)(e)) {
        return "react_element";
      }
      if (typeof HTMLElement !== "undefined" && e instanceof HTMLElement) {
        return "html_element";
      }
      const t = typeof e;
      switch (t) {
        case "bigint":
          return "bigint";
        case "boolean":
          return "boolean";
        case "function":
          return "function";
        case "number":
          if (Number.isNaN(e)) {
            return "nan";
          } else if (!Number.isFinite(e)) {
            return "infinity";
          } else {
            return "number";
          }
        case "object":
          if (ce(e)) {
            return "array";
          } else if (ArrayBuffer.isView(e)) {
            return ue.call(e.constructor, "BYTES_PER_ELEMENT")
              ? "typed_array"
              : "data_view";
          } else if (e.constructor && e.constructor.name === "ArrayBuffer") {
            return "array_buffer";
          } else if (typeof e[Symbol.iterator] === "function") {
            const t = e[Symbol.iterator]();
            if (!t) {
            } else {
              return t === e ? "opaque_iterator" : "iterator";
            }
          } else if (e.constructor && e.constructor.name === "RegExp") {
            return "regexp";
          } else {
            const t = Object.prototype.toString.call(e);
            if (t === "[object Date]") {
              return "date";
            } else if (t === "[object HTMLAllCollection]") {
              return "html_all_collection";
            }
          }
          if (!isPlainObject(e)) {
            return "class_instance";
          }
          return "object";
        case "string":
          return "string";
        case "symbol":
          return "symbol";
        case "undefined":
          if (
            Object.prototype.toString.call(e) === "[object HTMLAllCollection]"
          ) {
            return "html_all_collection";
          }
          return "undefined";
        default:
          return "unknown";
      }
    }
    function getDisplayNameForReactElement(e) {
      const t = (0, v.typeOf)(e);
      switch (t) {
        case v.ContextConsumer:
          return "ContextConsumer";
        case v.ContextProvider:
          return "ContextProvider";
        case v.ForwardRef:
          return "ForwardRef";
        case v.Fragment:
          return "Fragment";
        case v.Lazy:
          return "Lazy";
        case v.Memo:
          return "Memo";
        case v.Portal:
          return "Portal";
        case v.Profiler:
          return "Profiler";
        case v.StrictMode:
          return "StrictMode";
        case v.Suspense:
          return "Suspense";
        case $:
          return "SuspenseList";
        case ee:
          return "TracingMarker";
        default:
          const { type: t } = e;
          if (typeof t === "string") {
            return t;
          } else if (typeof t === "function") {
            return getDisplayName(t, "Anonymous");
          } else if (t != null) {
            return "NotImplementedInDevtools";
          } else {
            return "Element";
          }
      }
    }
    const me = 50;
    function truncateForDisplay(e, t = me) {
      if (e.length > t) {
        return e.slice(0, t) + "…";
      } else {
        return e;
      }
    }
    function formatDataForPreview(e, t) {
      if (e != null && ue.call(e, ae.type)) {
        return t ? e[ae.preview_long] : e[ae.preview_short];
      }
      const r = getDataType(e);
      switch (r) {
        case "html_element":
          return `<${truncateForDisplay(e.tagName.toLowerCase())} />`;
        case "function":
          return truncateForDisplay(
            `ƒ ${typeof e.name === "function" ? "" : e.name}() {}`
          );
        case "string":
          return `"${e}"`;
        case "bigint":
          return truncateForDisplay(e.toString() + "n");
        case "regexp":
          return truncateForDisplay(e.toString());
        case "symbol":
          return truncateForDisplay(e.toString());
        case "react_element":
          return `<${truncateForDisplay(
            getDisplayNameForReactElement(e) || "Unknown"
          )} />`;
        case "array_buffer":
          return `ArrayBuffer(${e.byteLength})`;
        case "data_view":
          return `DataView(${e.buffer.byteLength})`;
        case "array":
          if (t) {
            let t = "";
            for (let r = 0; r < e.length; r++) {
              if (r > 0) {
                t += ", ";
              }
              t += formatDataForPreview(e[r], false);
              if (t.length > me) {
                break;
              }
            }
            return `[${truncateForDisplay(t)}]`;
          } else {
            const t = ue.call(e, ae.size) ? e[ae.size] : e.length;
            return `Array(${t})`;
          }
        case "typed_array":
          const r = `${e.constructor.name}(${e.length})`;
          if (t) {
            let t = "";
            for (let r = 0; r < e.length; r++) {
              if (r > 0) {
                t += ", ";
              }
              t += e[r];
              if (t.length > me) {
                break;
              }
            }
            return `${r} [${truncateForDisplay(t)}]`;
          } else {
            return r;
          }
        case "iterator":
          const n = e.constructor.name;
          if (t) {
            const t = Array.from(e);
            let r = "";
            for (let e = 0; e < t.length; e++) {
              const n = t[e];
              if (e > 0) {
                r += ", ";
              }
              if (ce(n)) {
                const e = formatDataForPreview(n[0], true);
                const t = formatDataForPreview(n[1], false);
                r += `${e} => ${t}`;
              } else {
                r += formatDataForPreview(n, false);
              }
              if (r.length > me) {
                break;
              }
            }
            return `${n}(${e.size}) {${truncateForDisplay(r)}}`;
          } else {
            return `${n}(${e.size})`;
          }
        case "opaque_iterator": {
          return e[Symbol.toStringTag];
        }
        case "date":
          return e.toString();
        case "class_instance":
          return e.constructor.name;
        case "object":
          if (t) {
            const t = Array.from(getAllEnumerableKeys(e)).sort(alphaSortKeys);
            let r = "";
            for (let n = 0; n < t.length; n++) {
              const o = t[n];
              if (n > 0) {
                r += ", ";
              }
              r += `${o.toString()}: ${formatDataForPreview(e[o], false)}`;
              if (r.length > me) {
                break;
              }
            }
            return `{${truncateForDisplay(r)}}`;
          } else {
            return "{…}";
          }
        case "boolean":
        case "number":
        case "infinity":
        case "nan":
        case "null":
        case "undefined":
          return e;
        default:
          try {
            return truncateForDisplay(String(e));
          } catch (e) {
            return "unserializable";
          }
      }
    }
    const isPlainObject = (e) => {
      const t = Object.getPrototypeOf(e);
      if (!t) return true;
      const r = Object.getPrototypeOf(t);
      return !r;
    };
    function storage_localStorageGetItem(e) {
      try {
        return localStorage.getItem(e);
      } catch (e) {
        return null;
      }
    }
    function localStorageRemoveItem(e) {
      try {
        localStorage.removeItem(e);
      } catch (e) {}
    }
    function storage_localStorageSetItem(e, t) {
      try {
        return localStorage.setItem(e, t);
      } catch (e) {}
    }
    function sessionStorageGetItem(e) {
      try {
        return sessionStorage.getItem(e);
      } catch (e) {
        return null;
      }
    }
    function sessionStorageRemoveItem(e) {
      try {
        sessionStorage.removeItem(e);
      } catch (e) {}
    }
    function sessionStorageSetItem(e, t) {
      try {
        return sessionStorage.setItem(e, t);
      } catch (e) {}
    }
    const compareVersions = (e, t) => {
      const r = validateAndParse(e);
      const n = validateAndParse(t);
      const o = r.pop();
      const i = n.pop();
      const a = compareSegments(r, n);
      if (a !== 0) return a;
      if (o && i) {
        return compareSegments(o.split("."), i.split("."));
      } else if (o || i) {
        return o ? -1 : 1;
      }
      return 0;
    };
    const validate = (e) =>
      typeof e === "string" && /^[v\d]/.test(e) && he.test(e);
    const compare = (e, t, r) => {
      assertValidOperator(r);
      const n = compareVersions(e, t);
      return ge[r].includes(n);
    };
    const satisfies = (e, t) => {
      const r = t.match(/^([<>=~^]+)/);
      const n = r ? r[1] : "=";
      if (n !== "^" && n !== "~") return compare(e, t, n);
      const [o, i, a, , s] = validateAndParse(e);
      const [l, c, u, , f] = validateAndParse(t);
      const p = [o, i, a];
      const d = [
        l,
        c !== null && c !== void 0 ? c : "x",
        u !== null && u !== void 0 ? u : "x",
      ];
      if (f) {
        if (!s) return false;
        if (compareSegments(p, d) !== 0) return false;
        if (compareSegments(s.split("."), f.split(".")) === -1) return false;
      }
      const m = d.findIndex((e) => e !== "0") + 1;
      const h = n === "~" ? 2 : m > 1 ? m : 1;
      if (compareSegments(p.slice(0, h), d.slice(0, h)) !== 0) return false;
      if (compareSegments(p.slice(h), d.slice(h)) === -1) return false;
      return true;
    };
    const he =
      /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
    const validateAndParse = (e) => {
      if (typeof e !== "string") {
        throw new TypeError("Invalid argument expected string");
      }
      const t = e.match(he);
      if (!t) {
        throw new Error(`Invalid argument not valid semver ('${e}' received)`);
      }
      t.shift();
      return t;
    };
    const isWildcard = (e) => e === "*" || e === "x" || e === "X";
    const tryParse = (e) => {
      const t = parseInt(e, 10);
      return isNaN(t) ? e : t;
    };
    const forceType = (e, t) =>
      typeof e !== typeof t ? [String(e), String(t)] : [e, t];
    const compareStrings = (e, t) => {
      if (isWildcard(e) || isWildcard(t)) return 0;
      const [r, n] = forceType(tryParse(e), tryParse(t));
      if (r > n) return 1;
      if (r < n) return -1;
      return 0;
    };
    const compareSegments = (e, t) => {
      for (let r = 0; r < Math.max(e.length, t.length); r++) {
        const n = compareStrings(e[r] || "0", t[r] || "0");
        if (n !== 0) return n;
      }
      return 0;
    };
    const ge = {
      ">": [1],
      ">=": [0, 1],
      "=": [0],
      "<=": [-1, 0],
      "<": [-1],
    };
    const ye = Object.keys(ge);
    const assertValidOperator = (e) => {
      if (typeof e !== "string") {
        throw new TypeError(
          `Invalid operator type, expected string but got ${typeof e}`
        );
      }
      if (ye.indexOf(e) === -1) {
        throw new Error(`Invalid operator, expected one of ${ye.join("|")}`);
      }
    };
    const be = Array.isArray;
    function isArray_isArray(e) {
      return be(e);
    }
    const ve = isArray_isArray;
    const Se = "999.9.9";
    function hasAssignedBackend(e) {
      if (e == null || e === "") {
        return false;
      }
      return gte(e, Se);
    }
    function cleanForBridge(e, t, r = []) {
      if (e !== null) {
        const n = [];
        const o = [];
        const i = dehydrate(e, n, o, r, t);
        return {
          data: i,
          cleaned: n,
          unserializable: o,
        };
      } else {
        return null;
      }
    }
    function copyWithDelete(e, t, r = 0) {
      const n = t[r];
      const o = ve(e)
        ? e.slice()
        : {
            ...e,
          };
      if (r + 1 === t.length) {
        if (ve(o)) {
          o.splice(n, 1);
        } else {
          delete o[n];
        }
      } else {
        o[n] = copyWithDelete(e[n], t, r + 1);
      }
      return o;
    }
    function copyWithRename(e, t, r, n = 0) {
      const o = t[n];
      const i = ve(e)
        ? e.slice()
        : {
            ...e,
          };
      if (n + 1 === t.length) {
        const e = r[n];
        i[e] = i[o];
        if (ve(i)) {
          i.splice(o, 1);
        } else {
          delete i[o];
        }
      } else {
        i[o] = copyWithRename(e[o], t, r, n + 1);
      }
      return i;
    }
    function copyWithSet(e, t, r, n = 0) {
      if (n >= t.length) {
        return r;
      }
      const o = t[n];
      const i = ve(e)
        ? e.slice()
        : {
            ...e,
          };
      i[o] = copyWithSet(e[o], t, r, n + 1);
      return i;
    }
    function getEffectDurations(e) {
      let t = null;
      let r = null;
      const n = e.current;
      if (n != null) {
        const e = n.stateNode;
        if (e != null) {
          t = e.effectDuration != null ? e.effectDuration : null;
          r = e.passiveEffectDuration != null ? e.passiveEffectDuration : null;
        }
      }
      return {
        effectDuration: t,
        passiveEffectDuration: r,
      };
    }
    function serializeToString(e) {
      if (e === undefined) {
        return "undefined";
      }
      const t = new Set();
      return JSON.stringify(
        e,
        (e, r) => {
          if (typeof r === "object" && r !== null) {
            if (t.has(r)) {
              return;
            }
            t.add(r);
          }
          if (typeof r === "bigint") {
            return r.toString() + "n";
          }
          return r;
        },
        2
      );
    }
    function formatWithStyles(e, t) {
      if (
        e === undefined ||
        e === null ||
        e.length === 0 ||
        (typeof e[0] === "string" && e[0].match(/([^%]|^)(%c)/g)) ||
        t === undefined
      ) {
        return e;
      }
      const r = /([^%]|^)((%%)*)(%([oOdisf]))/g;
      if (typeof e[0] === "string" && e[0].match(r)) {
        return [`%c ${e[0]}`, t, ...e.slice(1)];
      } else {
        const r = e.reduce((e, t, r) => {
          if (r > 0) {
            e += " ";
          }
          switch (typeof t) {
            case "string":
            case "boolean":
            case "symbol":
              return (e += "%s");
            case "number":
              const r = Number.isInteger(t) ? "%i" : "%f";
              return (e += r);
            default:
              return (e += "%o");
          }
        }, "%c");
        return [r, t, ...e];
      }
    }
    function format(e, ...t) {
      const r = t.slice();
      let n = String(e);
      if (typeof e === "string") {
        if (r.length) {
          const e = /(%?)(%([jds]))/g;
          n = n.replace(e, (e, t, n, o) => {
            let i = r.shift();
            switch (o) {
              case "s":
                i += "";
                break;
              case "d":
              case "i":
                i = parseInt(i, 10).toString();
                break;
              case "f":
                i = parseFloat(i).toString();
                break;
            }
            if (!t) {
              return i;
            }
            r.unshift(i);
            return e;
          });
        }
      }
      if (r.length) {
        for (let e = 0; e < r.length; e++) {
          n += " " + String(r[e]);
        }
      }
      n = n.replace(/%{2,2}/g, "%");
      return String(n);
    }
    function isSynchronousXHRSupported() {
      return !!(
        window.document &&
        window.document.featurePolicy &&
        window.document.featurePolicy.allowsFeature("sync-xhr")
      );
    }
    function gt(e = "", t = "") {
      return compareVersions(e, t) === 1;
    }
    function gte(e = "", t = "") {
      return compareVersions(e, t) > -1;
    }
    const we = "fmkadmapgofadopljbjfkapdkoienihi";
    const Ee = "dnjnjgbfilfphmojnmhliehogmojhclc";
    const Ce = "ikiahnapldjmdmpkmfhjdjilojjhgcbf";
    const _e = false;
    const ke = false;
    const Oe = 1;
    const Re = 2;
    const Fe = 3;
    const Te = 4;
    const Pe = 5;
    const De = 6;
    const Ie = 7;
    const xe = 1;
    const Ne = 2;
    const Ae = "React::DevTools::defaultTab";
    const Me = "React::DevTools::componentFilters";
    const Le = "React::DevTools::lastSelection";
    const Ue = "React::DevTools::openInEditorUrl";
    const $e = "React::DevTools::openInEditorUrlPreset";
    const ze = "React::DevTools::parseHookNames";
    const je = "React::DevTools::recordChangeDescriptions";
    const He = "React::DevTools::reloadAndProfile";
    const Be = "React::DevTools::breakOnConsoleErrors";
    const Ve = "React::DevTools::theme";
    const We = "React::DevTools::appendComponentStack";
    const Ge = "React::DevTools::showInlineWarningsAndErrors";
    const Ye = "React::DevTools::traceUpdatesEnabled";
    const Ke = "React::DevTools::hideConsoleLogsInStrictMode";
    const qe = "React::DevTools::supportsProfiling";
    const Je = 5;
    var Qe = __webpack_require__(8830);
    let Xe = 0;
    let Ze;
    let et;
    let tt;
    let rt;
    let nt;
    let ot;
    let it;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
      if (Xe === 0) {
        Ze = console.log;
        et = console.info;
        tt = console.warn;
        rt = console.error;
        nt = console.group;
        ot = console.groupCollapsed;
        it = console.groupEnd;
        const e = {
          configurable: true,
          enumerable: true,
          value: disabledLog,
          writable: true,
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e,
        });
      }
      Xe++;
    }
    function reenableLogs() {
      Xe--;
      if (Xe === 0) {
        const e = {
          configurable: true,
          enumerable: true,
          writable: true,
        };
        Object.defineProperties(console, {
          log: {
            ...e,
            value: Ze,
          },
          info: {
            ...e,
            value: et,
          },
          warn: {
            ...e,
            value: tt,
          },
          error: {
            ...e,
            value: rt,
          },
          group: {
            ...e,
            value: nt,
          },
          groupCollapsed: {
            ...e,
            value: ot,
          },
          groupEnd: {
            ...e,
            value: it,
          },
        });
      }
      if (Xe < 0) {
        console.error(
          "disabledDepth fell below zero. " +
            "This is a bug in React. Please file an issue."
        );
      }
    }
    let at;
    function describeBuiltInComponentFrame(e, t) {
      if (at === undefined) {
        try {
          throw Error();
        } catch (e) {
          const t = e.stack.trim().match(/\n( *(at )?)/);
          at = (t && t[1]) || "";
        }
      }
      return "\n" + at + e;
    }
    let st = false;
    let lt;
    if (false) {
    }
    function describeNativeComponentFrame(e, t, r) {
      if (!e || st) {
        return "";
      }
      if (false) {
      }
      let n;
      const o = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      st = true;
      const i = r.current;
      r.current = null;
      disableLogs();
      try {
        if (t) {
          const Fake = function () {
            throw Error();
          };
          Object.defineProperty(Fake.prototype, "props", {
            set: function () {
              throw Error();
            },
          });
          if (typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (e) {
              n = e;
            }
            Reflect.construct(e, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (e) {
              n = e;
            }
            e.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            n = e;
          }
          e();
        }
      } catch (e) {
        if (e && n && typeof e.stack === "string") {
          const t = e.stack.split("\n");
          const r = n.stack.split("\n");
          let o = t.length - 1;
          let i = r.length - 1;
          while (o >= 1 && i >= 0 && t[o] !== r[i]) {
            i--;
          }
          for (; o >= 1 && i >= 0; o--, i--) {
            if (t[o] !== r[i]) {
              if (o !== 1 || i !== 1) {
                do {
                  o--;
                  i--;
                  if (i < 0 || t[o] !== r[i]) {
                    const e = "\n" + t[o].replace(" at new ", " at ");
                    if (false) {
                    }
                    return e;
                  }
                } while (o >= 1 && i >= 0);
              }
              break;
            }
          }
        }
      } finally {
        st = false;
        Error.prepareStackTrace = o;
        r.current = i;
        reenableLogs();
      }
      const a = e ? e.displayName || e.name : "";
      const s = a ? describeBuiltInComponentFrame(a) : "";
      if (false) {
      }
      return s;
    }
    function describeClassComponentFrame(e, t, r) {
      return describeNativeComponentFrame(e, true, r);
    }
    function describeFunctionComponentFrame(e, t, r) {
      return describeNativeComponentFrame(e, false, r);
    }
    function shouldConstruct(e) {
      const t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(e, t, r) {
      if (true) {
        return "";
      }
      if (e == null) {
        return "";
      }
      if (typeof e === "function") {
        return describeNativeComponentFrame(e, shouldConstruct(e), r);
      }
      if (typeof e === "string") {
        return describeBuiltInComponentFrame(e, t);
      }
      switch (e) {
        case SUSPENSE_NUMBER:
        case SUSPENSE_SYMBOL_STRING:
          return describeBuiltInComponentFrame("Suspense", t);
        case SUSPENSE_LIST_NUMBER:
        case SUSPENSE_LIST_SYMBOL_STRING:
          return describeBuiltInComponentFrame("SuspenseList", t);
      }
      if (typeof e === "object") {
        switch (e.$$typeof) {
          case FORWARD_REF_NUMBER:
          case FORWARD_REF_SYMBOL_STRING:
            return describeFunctionComponentFrame(e.render, t, r);
          case MEMO_NUMBER:
          case MEMO_SYMBOL_STRING:
            return describeUnknownElementTypeFrameInDEV(e.type, t, r);
          case LAZY_NUMBER:
          case LAZY_SYMBOL_STRING: {
            const n = e;
            const o = n._payload;
            const i = n._init;
            try {
              return describeUnknownElementTypeFrameInDEV(i(o), t, r);
            } catch (e) {}
          }
        }
      }
      return "";
    }
    function describeFiber(e, t, r) {
      const {
        HostComponent: n,
        LazyComponent: o,
        SuspenseComponent: i,
        SuspenseListComponent: a,
        FunctionComponent: s,
        IndeterminateComponent: l,
        SimpleMemoComponent: c,
        ForwardRef: u,
        ClassComponent: f,
      } = e;
      const p = false ? 0 : null;
      switch (t.tag) {
        case n:
          return describeBuiltInComponentFrame(t.type, p);
        case o:
          return describeBuiltInComponentFrame("Lazy", p);
        case i:
          return describeBuiltInComponentFrame("Suspense", p);
        case a:
          return describeBuiltInComponentFrame("SuspenseList", p);
        case s:
        case l:
        case c:
          return describeFunctionComponentFrame(t.type, p, r);
        case u:
          return describeFunctionComponentFrame(t.type.render, p, r);
        case f:
          return describeClassComponentFrame(t.type, p, r);
        default:
          return "";
      }
    }
    function getStackByFiberInDevAndProd(e, t, r) {
      try {
        let n = "";
        let o = t;
        do {
          n += describeFiber(e, o, r);
          o = o.return;
        } while (o);
        return n;
      } catch (e) {
        return "\nError generating stack: " + e.message + "\n" + e.stack;
      }
    }
    const ct = true;
    const ut = false;
    const ft = false;
    const pt = false;
    null;
    const dt = ["error", "trace", "warn"];
    const mt = "[2m%s[0m";
    const ht = /\s{4}(in|at)\s{1}/;
    const yt = /:\d+:\d+(\n|$)/;
    function isStringComponentStack(e) {
      return ht.test(e) || yt.test(e);
    }
    const bt = /^%c/;
    function isStrictModeOverride(e, t) {
      return (
        e.length >= 2 &&
        bt.test(e[0]) &&
        e[1] === `color: ${getConsoleColor(t) || ""}`
      );
    }
    function getConsoleColor(e) {
      switch (e) {
        case "warn":
          return _t.browserTheme === "light"
            ? "rgba(250, 180, 50, 0.75)"
            : "rgba(250, 180, 50, 0.5)";
        case "error":
          return _t.browserTheme === "light"
            ? "rgba(250, 123, 130, 0.75)"
            : "rgba(250, 123, 130, 0.5)";
        case "log":
        default:
          return _t.browserTheme === "light"
            ? "rgba(125, 125, 125, 0.75)"
            : "rgba(125, 125, 125, 0.5)";
      }
    }
    const vt = new Map();
    let St = console;
    let wt = {};
    for (const e in console) {
      wt[e] = console[e];
    }
    let Et = null;
    let Ct = false;
    try {
      Ct = undefined === global;
    } catch (e) {}
    function dangerous_setTargetConsoleForTesting(e) {
      St = e;
      wt = {};
      for (const e in St) {
        wt[e] = console[e];
      }
    }
    function registerRenderer(e, t) {
      const {
        currentDispatcherRef: r,
        getCurrentFiber: n,
        findFiberByHostInstance: o,
        version: i,
      } = e;
      if (typeof o !== "function") {
        return;
      }
      if (r != null && typeof n === "function") {
        const { ReactTypeOfWork: o } = getInternalReactConstants(i);
        vt.set(e, {
          currentDispatcherRef: r,
          getCurrentFiber: n,
          workTagMap: o,
          onErrorOrWarning: t,
        });
      }
    }
    const _t = {
      appendComponentStack: false,
      breakOnConsoleErrors: false,
      showInlineWarningsAndErrors: false,
      hideConsoleLogsInStrictMode: false,
      browserTheme: "dark",
    };
    function patch({
      appendComponentStack: e,
      breakOnConsoleErrors: t,
      showInlineWarningsAndErrors: r,
      hideConsoleLogsInStrictMode: n,
      browserTheme: o,
    }) {
      _t.appendComponentStack = e;
      _t.breakOnConsoleErrors = t;
      _t.showInlineWarningsAndErrors = r;
      _t.hideConsoleLogsInStrictMode = n;
      _t.browserTheme = o;
      if (e || t || r) {
        if (Et !== null) {
          return;
        }
        const e = {};
        Et = () => {
          for (const t in e) {
            try {
              St[t] = e[t];
            } catch (e) {}
          }
        };
        dt.forEach((t) => {
          try {
            const r = (e[t] = St[t].__REACT_DEVTOOLS_ORIGINAL_METHOD__
              ? St[t].__REACT_DEVTOOLS_ORIGINAL_METHOD__
              : St[t]);
            const overrideMethod = (...e) => {
              let n = false;
              if (t !== "log") {
                if (_t.appendComponentStack) {
                  const t = e.length > 0 ? e[e.length - 1] : null;
                  const r = typeof t === "string" && isStringComponentStack(t);
                  n = !r;
                }
              }
              const o =
                _t.showInlineWarningsAndErrors &&
                (t === "error" || t === "warn");
              for (const {
                currentDispatcherRef: r,
                getCurrentFiber: i,
                onErrorOrWarning: a,
                workTagMap: s,
              } of vt.values()) {
                const l = i();
                if (l != null) {
                  try {
                    if (o) {
                      if (typeof a === "function") {
                        a(l, t, e.slice());
                      }
                    }
                    if (n) {
                      const n = getStackByFiberInDevAndProd(s, l, r);
                      if (n !== "") {
                        if (isStrictModeOverride(e, t)) {
                          e[0] = `${e[0]} %s`;
                          e.push(n);
                        } else {
                          e.push(n);
                        }
                      }
                    }
                  } catch (e) {
                    setTimeout(() => {
                      throw e;
                    }, 0);
                  } finally {
                    break;
                  }
                }
              }
              if (_t.breakOnConsoleErrors) {
                debugger;
              }
              r(...e);
            };
            overrideMethod.__REACT_DEVTOOLS_ORIGINAL_METHOD__ = r;
            r.__REACT_DEVTOOLS_OVERRIDE_METHOD__ = overrideMethod;
            St[t] = overrideMethod;
          } catch (e) {}
        });
      } else {
        unpatch();
      }
    }
    function unpatch() {
      if (Et !== null) {
        Et();
        Et = null;
      }
    }
    let kt = null;
    function patchForStrictMode() {
      if (ct) {
        const e = [
          "error",
          "group",
          "groupCollapsed",
          "info",
          "log",
          "trace",
          "warn",
        ];
        if (kt !== null) {
          return;
        }
        const t = {};
        kt = () => {
          for (const e in t) {
            try {
              St[e] = t[e];
            } catch (e) {}
          }
        };
        e.forEach((e) => {
          try {
            const r = (t[e] = St[e]
              .__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
              ? St[e].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
              : St[e]);
            const overrideMethod = (...t) => {
              if (!_t.hideConsoleLogsInStrictMode) {
                if (Ct) {
                  r(mt, format(...t));
                } else {
                  const n = getConsoleColor(e);
                  if (n) {
                    r(...formatWithStyles(t, `color: ${n}`));
                  } else {
                    throw Error("Console color is not defined");
                  }
                }
              }
            };
            overrideMethod.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ = r;
            r.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ = overrideMethod;
            St[e] = overrideMethod;
          } catch (e) {}
        });
      }
    }
    function unpatchForStrictMode() {
      if (ct) {
        if (kt !== null) {
          kt();
          kt = null;
        }
      }
    }
    function patchConsoleUsingWindowValues() {
      const e =
        castBool(window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__) ?? true;
      const t =
        castBool(window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__) ?? false;
      const r =
        castBool(window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__) ??
        true;
      const n =
        castBool(window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__) ??
        false;
      const o =
        castBrowserTheme(window.__REACT_DEVTOOLS_BROWSER_THEME__) ?? "dark";
      patch({
        appendComponentStack: e,
        breakOnConsoleErrors: t,
        showInlineWarningsAndErrors: r,
        hideConsoleLogsInStrictMode: n,
        browserTheme: o,
      });
    }
    function writeConsolePatchSettingsToWindow(e) {
      window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ = e.appendComponentStack;
      window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__ =
        e.breakOnConsoleErrors;
      window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__ =
        e.showInlineWarningsAndErrors;
      window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ =
        e.hideConsoleLogsInStrictMode;
      window.__REACT_DEVTOOLS_BROWSER_THEME__ = e.browserTheme;
    }
    function installConsoleFunctionsToWindow() {
      window.__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__ = {
        patchConsoleUsingWindowValues,
        registerRendererWithConsole: registerRenderer,
      };
    }
    const Ot = 60111;
    const Rt = "Symbol(react.concurrent_mode)";
    const Ft = 60110;
    const Tt = "Symbol(react.context)";
    const Pt = "Symbol(react.server_context)";
    const Dt = "Symbol(react.async_mode)";
    const It = 60103;
    const xt = "Symbol(react.element)";
    const Nt = 60129;
    const At = "Symbol(react.debug_trace_mode)";
    const Mt = 60112;
    const Lt = "Symbol(react.forward_ref)";
    const Ut = 60107;
    const $t = "Symbol(react.fragment)";
    const zt = 60116;
    const jt = "Symbol(react.lazy)";
    const Ht = 60115;
    const Bt = "Symbol(react.memo)";
    const Vt = 60106;
    const Wt = "Symbol(react.portal)";
    const Gt = 60114;
    const Yt = "Symbol(react.profiler)";
    const Kt = 60109;
    const qt = "Symbol(react.provider)";
    const Jt = 60119;
    const Qt = "Symbol(react.scope)";
    const Xt = 60108;
    const Zt = "Symbol(react.strict_mode)";
    const er = 60113;
    const tr = "Symbol(react.suspense)";
    const rr = 60120;
    const nr = "Symbol(react.suspense_list)";
    const or = "Symbol(react.server_context.defaultValue)";
    function is(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    const ir = typeof Object.is === "function" ? Object.is : is;
    const ar = ir;
    const sr = Object.prototype.hasOwnProperty;
    const lr = sr;
    const cr = new Map();
    function getStyleXData(e) {
      const t = new Set();
      const r = {};
      crawlData(e, t, r);
      return {
        sources: Array.from(t).sort(),
        resolvedStyles: r,
      };
    }
    function crawlData(e, t, r) {
      if (e == null) {
        return;
      }
      if (ce(e)) {
        e.forEach((e) => {
          if (e == null) {
            return;
          }
          if (ce(e)) {
            crawlData(e, t, r);
          } else {
            crawlObjectProperties(e, t, r);
          }
        });
      } else {
        crawlObjectProperties(e, t, r);
      }
      r = Object.fromEntries(Object.entries(r).sort());
    }
    function crawlObjectProperties(e, t, r) {
      const n = Object.keys(e);
      n.forEach((n) => {
        const o = e[n];
        if (typeof o === "string") {
          if (n === o) {
            t.add(n);
          } else {
            const e = getPropertyValueForStyleName(o);
            if (e != null) {
              r[n] = e;
            }
          }
        } else {
          const e = {};
          r[n] = e;
          crawlData([o], t, e);
        }
      });
    }
    function getPropertyValueForStyleName(e) {
      if (cr.has(e)) {
        return cr.get(e);
      }
      for (let t = 0; t < document.styleSheets.length; t++) {
        const r = document.styleSheets[t];
        let n = null;
        try {
          n = r.cssRules;
        } catch (e) {
          continue;
        }
        for (let t = 0; t < n.length; t++) {
          if (!(n[t] instanceof CSSStyleRule)) {
            continue;
          }
          const r = n[t];
          const { cssText: o, selectorText: i, style: a } = r;
          if (i != null) {
            if (i.startsWith(`.${e}`)) {
              const t = o.match(/{ *([a-z\-]+):/);
              if (t !== null) {
                const r = t[1];
                const n = a.getPropertyValue(r);
                cr.set(e, n);
                return n;
              } else {
                return null;
              }
            }
          }
        }
      }
      return null;
    }
    const ur =
      "https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md";
    const fr =
      "https://reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-old-version-back";
    const pr = "https://fburl.com/react-devtools-workplace-group";
    const dr = {
      light: {
        "--color-attribute-name": "#ef6632",
        "--color-attribute-name-not-editable": "#23272f",
        "--color-attribute-name-inverted": "rgba(255, 255, 255, 0.7)",
        "--color-attribute-value": "#1a1aa6",
        "--color-attribute-value-inverted": "#ffffff",
        "--color-attribute-editable-value": "#1a1aa6",
        "--color-background": "#ffffff",
        "--color-background-hover": "rgba(0, 136, 250, 0.1)",
        "--color-background-inactive": "#e5e5e5",
        "--color-background-invalid": "#fff0f0",
        "--color-background-selected": "#0088fa",
        "--color-button-background": "#ffffff",
        "--color-button-background-focus": "#ededed",
        "--color-button": "#5f6673",
        "--color-button-disabled": "#cfd1d5",
        "--color-button-active": "#0088fa",
        "--color-button-focus": "#23272f",
        "--color-button-hover": "#23272f",
        "--color-border": "#eeeeee",
        "--color-commit-did-not-render-fill": "#cfd1d5",
        "--color-commit-did-not-render-fill-text": "#000000",
        "--color-commit-did-not-render-pattern": "#cfd1d5",
        "--color-commit-did-not-render-pattern-text": "#333333",
        "--color-commit-gradient-0": "#37afa9",
        "--color-commit-gradient-1": "#63b19e",
        "--color-commit-gradient-2": "#80b393",
        "--color-commit-gradient-3": "#97b488",
        "--color-commit-gradient-4": "#abb67d",
        "--color-commit-gradient-5": "#beb771",
        "--color-commit-gradient-6": "#cfb965",
        "--color-commit-gradient-7": "#dfba57",
        "--color-commit-gradient-8": "#efbb49",
        "--color-commit-gradient-9": "#febc38",
        "--color-commit-gradient-text": "#000000",
        "--color-component-name": "#6a51b2",
        "--color-component-name-inverted": "#ffffff",
        "--color-component-badge-background": "rgba(0, 0, 0, 0.1)",
        "--color-component-badge-background-inverted":
          "rgba(255, 255, 255, 0.25)",
        "--color-component-badge-count": "#777d88",
        "--color-component-badge-count-inverted": "rgba(255, 255, 255, 0.7)",
        "--color-console-error-badge-text": "#ffffff",
        "--color-console-error-background": "#fff0f0",
        "--color-console-error-border": "#ffd6d6",
        "--color-console-error-icon": "#eb3941",
        "--color-console-error-text": "#fe2e31",
        "--color-console-warning-badge-text": "#000000",
        "--color-console-warning-background": "#fffbe5",
        "--color-console-warning-border": "#fff5c1",
        "--color-console-warning-icon": "#f4bd00",
        "--color-console-warning-text": "#64460c",
        "--color-context-background": "rgba(0,0,0,.9)",
        "--color-context-background-hover": "rgba(255, 255, 255, 0.1)",
        "--color-context-background-selected": "#178fb9",
        "--color-context-border": "#3d424a",
        "--color-context-text": "#ffffff",
        "--color-context-text-selected": "#ffffff",
        "--color-dim": "#777d88",
        "--color-dimmer": "#cfd1d5",
        "--color-dimmest": "#eff0f1",
        "--color-error-background": "hsl(0, 100%, 97%)",
        "--color-error-border": "hsl(0, 100%, 92%)",
        "--color-error-text": "#ff0000",
        "--color-expand-collapse-toggle": "#777d88",
        "--color-link": "#0000ff",
        "--color-modal-background": "rgba(255, 255, 255, 0.75)",
        "--color-bridge-version-npm-background": "#eff0f1",
        "--color-bridge-version-npm-text": "#000000",
        "--color-bridge-version-number": "#0088fa",
        "--color-primitive-hook-badge-background": "#e5e5e5",
        "--color-primitive-hook-badge-text": "#5f6673",
        "--color-record-active": "#fc3a4b",
        "--color-record-hover": "#3578e5",
        "--color-record-inactive": "#0088fa",
        "--color-resize-bar": "#eeeeee",
        "--color-resize-bar-active": "#dcdcdc",
        "--color-resize-bar-border": "#d1d1d1",
        "--color-resize-bar-dot": "#333333",
        "--color-timeline-internal-module": "#d1d1d1",
        "--color-timeline-internal-module-hover": "#c9c9c9",
        "--color-timeline-internal-module-text": "#444",
        "--color-timeline-native-event": "#ccc",
        "--color-timeline-native-event-hover": "#aaa",
        "--color-timeline-network-primary": "#fcf3dc",
        "--color-timeline-network-primary-hover": "#f0e7d1",
        "--color-timeline-network-secondary": "#efc457",
        "--color-timeline-network-secondary-hover": "#e3ba52",
        "--color-timeline-priority-background": "#f6f6f6",
        "--color-timeline-priority-border": "#eeeeee",
        "--color-timeline-user-timing": "#c9cacd",
        "--color-timeline-user-timing-hover": "#93959a",
        "--color-timeline-react-idle": "#d3e5f6",
        "--color-timeline-react-idle-hover": "#c3d9ef",
        "--color-timeline-react-render": "#9fc3f3",
        "--color-timeline-react-render-hover": "#83afe9",
        "--color-timeline-react-render-text": "#11365e",
        "--color-timeline-react-commit": "#c88ff0",
        "--color-timeline-react-commit-hover": "#b281d6",
        "--color-timeline-react-commit-text": "#3e2c4a",
        "--color-timeline-react-layout-effects": "#b281d6",
        "--color-timeline-react-layout-effects-hover": "#9d71bd",
        "--color-timeline-react-layout-effects-text": "#3e2c4a",
        "--color-timeline-react-passive-effects": "#b281d6",
        "--color-timeline-react-passive-effects-hover": "#9d71bd",
        "--color-timeline-react-passive-effects-text": "#3e2c4a",
        "--color-timeline-react-schedule": "#9fc3f3",
        "--color-timeline-react-schedule-hover": "#2683E2",
        "--color-timeline-react-suspense-rejected": "#f1cc14",
        "--color-timeline-react-suspense-rejected-hover": "#ffdf37",
        "--color-timeline-react-suspense-resolved": "#a6e59f",
        "--color-timeline-react-suspense-resolved-hover": "#89d281",
        "--color-timeline-react-suspense-unresolved": "#c9cacd",
        "--color-timeline-react-suspense-unresolved-hover": "#93959a",
        "--color-timeline-thrown-error": "#ee1638",
        "--color-timeline-thrown-error-hover": "#da1030",
        "--color-timeline-text-color": "#000000",
        "--color-timeline-text-dim-color": "#ccc",
        "--color-timeline-react-work-border": "#eeeeee",
        "--color-search-match": "yellow",
        "--color-search-match-current": "#f7923b",
        "--color-selected-tree-highlight-active": "rgba(0, 136, 250, 0.1)",
        "--color-selected-tree-highlight-inactive": "rgba(0, 0, 0, 0.05)",
        "--color-scroll-caret": "rgba(150, 150, 150, 0.5)",
        "--color-tab-selected-border": "#0088fa",
        "--color-text": "#000000",
        "--color-text-invalid": "#ff0000",
        "--color-text-selected": "#ffffff",
        "--color-toggle-background-invalid": "#fc3a4b",
        "--color-toggle-background-on": "#0088fa",
        "--color-toggle-background-off": "#cfd1d5",
        "--color-toggle-text": "#ffffff",
        "--color-warning-background": "#fb3655",
        "--color-warning-background-hover": "#f82042",
        "--color-warning-text-color": "#ffffff",
        "--color-warning-text-color-inverted": "#fd4d69",
        "--color-scroll-thumb": "#c2c2c2",
        "--color-scroll-track": "#fafafa",
        "--color-tooltip-background": "rgba(0, 0, 0, 0.9)",
        "--color-tooltip-text": "#ffffff",
      },
      dark: {
        "--color-attribute-name": "#9d87d2",
        "--color-attribute-name-not-editable": "#ededed",
        "--color-attribute-name-inverted": "#282828",
        "--color-attribute-value": "#cedae0",
        "--color-attribute-value-inverted": "#ffffff",
        "--color-attribute-editable-value": "yellow",
        "--color-background": "#282c34",
        "--color-background-hover": "rgba(255, 255, 255, 0.1)",
        "--color-background-inactive": "#3d424a",
        "--color-background-invalid": "#5c0000",
        "--color-background-selected": "#178fb9",
        "--color-button-background": "#282c34",
        "--color-button-background-focus": "#3d424a",
        "--color-button": "#afb3b9",
        "--color-button-active": "#61dafb",
        "--color-button-disabled": "#4f5766",
        "--color-button-focus": "#a2e9fc",
        "--color-button-hover": "#ededed",
        "--color-border": "#3d424a",
        "--color-commit-did-not-render-fill": "#777d88",
        "--color-commit-did-not-render-fill-text": "#000000",
        "--color-commit-did-not-render-pattern": "#666c77",
        "--color-commit-did-not-render-pattern-text": "#ffffff",
        "--color-commit-gradient-0": "#37afa9",
        "--color-commit-gradient-1": "#63b19e",
        "--color-commit-gradient-2": "#80b393",
        "--color-commit-gradient-3": "#97b488",
        "--color-commit-gradient-4": "#abb67d",
        "--color-commit-gradient-5": "#beb771",
        "--color-commit-gradient-6": "#cfb965",
        "--color-commit-gradient-7": "#dfba57",
        "--color-commit-gradient-8": "#efbb49",
        "--color-commit-gradient-9": "#febc38",
        "--color-commit-gradient-text": "#000000",
        "--color-component-name": "#61dafb",
        "--color-component-name-inverted": "#282828",
        "--color-component-badge-background": "rgba(255, 255, 255, 0.25)",
        "--color-component-badge-background-inverted": "rgba(0, 0, 0, 0.25)",
        "--color-component-badge-count": "#8f949d",
        "--color-component-badge-count-inverted": "rgba(255, 255, 255, 0.7)",
        "--color-console-error-badge-text": "#000000",
        "--color-console-error-background": "#290000",
        "--color-console-error-border": "#5c0000",
        "--color-console-error-icon": "#eb3941",
        "--color-console-error-text": "#fc7f7f",
        "--color-console-warning-badge-text": "#000000",
        "--color-console-warning-background": "#332b00",
        "--color-console-warning-border": "#665500",
        "--color-console-warning-icon": "#f4bd00",
        "--color-console-warning-text": "#f5f2ed",
        "--color-context-background": "rgba(255,255,255,.95)",
        "--color-context-background-hover": "rgba(0, 136, 250, 0.1)",
        "--color-context-background-selected": "#0088fa",
        "--color-context-border": "#eeeeee",
        "--color-context-text": "#000000",
        "--color-context-text-selected": "#ffffff",
        "--color-dim": "#8f949d",
        "--color-dimmer": "#777d88",
        "--color-dimmest": "#4f5766",
        "--color-error-background": "#200",
        "--color-error-border": "#900",
        "--color-error-text": "#f55",
        "--color-expand-collapse-toggle": "#8f949d",
        "--color-link": "#61dafb",
        "--color-modal-background": "rgba(0, 0, 0, 0.75)",
        "--color-bridge-version-npm-background": "rgba(0, 0, 0, 0.25)",
        "--color-bridge-version-npm-text": "#ffffff",
        "--color-bridge-version-number": "yellow",
        "--color-primitive-hook-badge-background": "rgba(0, 0, 0, 0.25)",
        "--color-primitive-hook-badge-text": "rgba(255, 255, 255, 0.7)",
        "--color-record-active": "#fc3a4b",
        "--color-record-hover": "#a2e9fc",
        "--color-record-inactive": "#61dafb",
        "--color-resize-bar": "#282c34",
        "--color-resize-bar-active": "#31363f",
        "--color-resize-bar-border": "#3d424a",
        "--color-resize-bar-dot": "#cfd1d5",
        "--color-timeline-internal-module": "#303542",
        "--color-timeline-internal-module-hover": "#363b4a",
        "--color-timeline-internal-module-text": "#7f8899",
        "--color-timeline-native-event": "#b2b2b2",
        "--color-timeline-native-event-hover": "#949494",
        "--color-timeline-network-primary": "#fcf3dc",
        "--color-timeline-network-primary-hover": "#e3dbc5",
        "--color-timeline-network-secondary": "#efc457",
        "--color-timeline-network-secondary-hover": "#d6af4d",
        "--color-timeline-priority-background": "#1d2129",
        "--color-timeline-priority-border": "#282c34",
        "--color-timeline-user-timing": "#c9cacd",
        "--color-timeline-user-timing-hover": "#93959a",
        "--color-timeline-react-idle": "#3d485b",
        "--color-timeline-react-idle-hover": "#465269",
        "--color-timeline-react-render": "#2683E2",
        "--color-timeline-react-render-hover": "#1a76d4",
        "--color-timeline-react-render-text": "#11365e",
        "--color-timeline-react-commit": "#731fad",
        "--color-timeline-react-commit-hover": "#611b94",
        "--color-timeline-react-commit-text": "#e5c1ff",
        "--color-timeline-react-layout-effects": "#611b94",
        "--color-timeline-react-layout-effects-hover": "#51167a",
        "--color-timeline-react-layout-effects-text": "#e5c1ff",
        "--color-timeline-react-passive-effects": "#611b94",
        "--color-timeline-react-passive-effects-hover": "#51167a",
        "--color-timeline-react-passive-effects-text": "#e5c1ff",
        "--color-timeline-react-schedule": "#2683E2",
        "--color-timeline-react-schedule-hover": "#1a76d4",
        "--color-timeline-react-suspense-rejected": "#f1cc14",
        "--color-timeline-react-suspense-rejected-hover": "#e4c00f",
        "--color-timeline-react-suspense-resolved": "#a6e59f",
        "--color-timeline-react-suspense-resolved-hover": "#89d281",
        "--color-timeline-react-suspense-unresolved": "#c9cacd",
        "--color-timeline-react-suspense-unresolved-hover": "#93959a",
        "--color-timeline-thrown-error": "#fb3655",
        "--color-timeline-thrown-error-hover": "#f82042",
        "--color-timeline-text-color": "#282c34",
        "--color-timeline-text-dim-color": "#555b66",
        "--color-timeline-react-work-border": "#3d424a",
        "--color-search-match": "yellow",
        "--color-search-match-current": "#f7923b",
        "--color-selected-tree-highlight-active": "rgba(23, 143, 185, 0.15)",
        "--color-selected-tree-highlight-inactive": "rgba(255, 255, 255, 0.05)",
        "--color-scroll-caret": "#4f5766",
        "--color-shadow": "rgba(0, 0, 0, 0.5)",
        "--color-tab-selected-border": "#178fb9",
        "--color-text": "#ffffff",
        "--color-text-invalid": "#ff8080",
        "--color-text-selected": "#ffffff",
        "--color-toggle-background-invalid": "#fc3a4b",
        "--color-toggle-background-on": "#178fb9",
        "--color-toggle-background-off": "#777d88",
        "--color-toggle-text": "#ffffff",
        "--color-warning-background": "#ee1638",
        "--color-warning-background-hover": "#da1030",
        "--color-warning-text-color": "#ffffff",
        "--color-warning-text-color-inverted": "#ee1638",
        "--color-scroll-thumb": "#afb3b9",
        "--color-scroll-track": "#313640",
        "--color-tooltip-background": "rgba(255, 255, 255, 0.95)",
        "--color-tooltip-text": "#000000",
      },
      compact: {
        "--font-size-monospace-small": "9px",
        "--font-size-monospace-normal": "11px",
        "--font-size-monospace-large": "15px",
        "--font-size-sans-small": "10px",
        "--font-size-sans-normal": "12px",
        "--font-size-sans-large": "14px",
        "--line-height-data": "18px",
      },
      comfortable: {
        "--font-size-monospace-small": "10px",
        "--font-size-monospace-normal": "13px",
        "--font-size-monospace-large": "17px",
        "--font-size-sans-small": "12px",
        "--font-size-sans-normal": "14px",
        "--font-size-sans-large": "16px",
        "--line-height-data": "22px",
      },
    };
    const mr = parseInt(dr.comfortable["--line-height-data"], 10);
    const hr = parseInt(dr.compact["--line-height-data"], 10);
    const gr = 31;
    const yr = 1;
    const br = 60;
    const vr = 10;
    let Sr = null;
    let wr =
      typeof performance !== "undefined" &&
      typeof performance.mark === "function" &&
      typeof performance.clearMarks === "function";
    let Er = false;
    if (wr) {
      const e = "__v3";
      const t = {};
      Object.defineProperty(t, "startTime", {
        get: function () {
          Er = true;
          return 0;
        },
        set: function () {},
      });
      try {
        performance.mark(e, t);
      } catch (e) {
      } finally {
        performance.clearMarks(e);
      }
    }
    if (Er) {
      Sr = performance;
    }
    const Cr =
      typeof performance === "object" && typeof performance.now === "function"
        ? () => performance.now()
        : () => Date.now();
    function setPerformanceMock_ONLY_FOR_TESTING(e) {
      Sr = e;
      wr = e !== null;
      Er = e !== null;
    }
    function createProfilingHooks({
      getDisplayNameForFiber: e,
      getIsProfiling: t,
      getLaneLabelMap: r,
      workTagMap: n,
      currentDispatcherRef: o,
      reactVersion: i,
    }) {
      let a = 0;
      let s = null;
      let l = [];
      let c = null;
      let u = new Map();
      let f = false;
      let p = false;
      function getRelativeTime() {
        const e = Cr();
        if (c) {
          if (c.startTime === 0) {
            c.startTime = e - vr;
          }
          return e - c.startTime;
        }
        return 0;
      }
      function getInternalModuleRanges() {
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges ===
            "function"
        ) {
          const e = __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges();
          if (ve(e)) {
            return e;
          }
        }
        return null;
      }
      function getTimelineData() {
        return c;
      }
      function laneToLanesArray(e) {
        const t = [];
        let r = 1;
        for (let n = 0; n < gr; n++) {
          if (r & e) {
            t.push(r);
          }
          r *= 2;
        }
        return t;
      }
      const d = typeof r === "function" ? r() : null;
      function markMetadata() {
        markAndClear(`--react-version-${i}`);
        markAndClear(`--profiler-version-${yr}`);
        const e = getInternalModuleRanges();
        if (e) {
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            if (ve(r) && r.length === 2) {
              const [r, n] = e[t];
              markAndClear(`--react-internal-module-start-${r}`);
              markAndClear(`--react-internal-module-stop-${n}`);
            }
          }
        }
        if (d != null) {
          const e = Array.from(d.values()).join(",");
          markAndClear(`--react-lane-labels-${e}`);
        }
      }
      function markAndClear(e) {
        Sr.mark(e);
        Sr.clearMarks(e);
      }
      function recordReactMeasureStarted(e, t) {
        let r = 0;
        if (l.length > 0) {
          const e = l[l.length - 1];
          r = e.type === "render-idle" ? e.depth : e.depth + 1;
        }
        const n = laneToLanesArray(t);
        const o = {
          type: e,
          batchUID: a,
          depth: r,
          lanes: n,
          timestamp: getRelativeTime(),
          duration: 0,
        };
        l.push(o);
        if (c) {
          const { batchUIDToMeasuresMap: e, laneToReactMeasureMap: t } = c;
          let r = e.get(a);
          if (r != null) {
            r.push(o);
          } else {
            e.set(a, [o]);
          }
          n.forEach((e) => {
            r = t.get(e);
            if (r) {
              r.push(o);
            }
          });
        }
      }
      function recordReactMeasureCompleted(e) {
        const t = getRelativeTime();
        if (l.length === 0) {
          console.error(
            'Unexpected type "%s" completed at %sms while currentReactMeasuresStack is empty.',
            e,
            t
          );
          return;
        }
        const r = l.pop();
        if (r.type !== e) {
          console.error(
            'Unexpected type "%s" completed at %sms before "%s" completed.',
            e,
            t,
            r.type
          );
        }
        r.duration = t - r.timestamp;
        if (c) {
          c.duration = getRelativeTime() + vr;
        }
      }
      function markCommitStarted(e) {
        if (f) {
          recordReactMeasureStarted("commit", e);
          p = true;
        }
        if (Er) {
          markAndClear(`--commit-start-${e}`);
          markMetadata();
        }
      }
      function markCommitStopped() {
        if (f) {
          recordReactMeasureCompleted("commit");
          recordReactMeasureCompleted("render-idle");
        }
        if (Er) {
          markAndClear("--commit-stop");
        }
      }
      function markComponentRenderStarted(t) {
        if (f || Er) {
          const r = e(t) || "Unknown";
          if (f) {
            if (f) {
              s = {
                componentName: r,
                duration: 0,
                timestamp: getRelativeTime(),
                type: "render",
                warning: null,
              };
            }
          }
          if (Er) {
            markAndClear(`--component-render-start-${r}`);
          }
        }
      }
      function markComponentRenderStopped() {
        if (f) {
          if (s) {
            if (c) {
              c.componentMeasures.push(s);
            }
            s.duration = getRelativeTime() - s.timestamp;
            s = null;
          }
        }
        if (Er) {
          markAndClear("--component-render-stop");
        }
      }
      function markComponentLayoutEffectMountStarted(t) {
        if (f || Er) {
          const r = e(t) || "Unknown";
          if (f) {
            if (f) {
              s = {
                componentName: r,
                duration: 0,
                timestamp: getRelativeTime(),
                type: "layout-effect-mount",
                warning: null,
              };
            }
          }
          if (Er) {
            markAndClear(`--component-layout-effect-mount-start-${r}`);
          }
        }
      }
      function markComponentLayoutEffectMountStopped() {
        if (f) {
          if (s) {
            if (c) {
              c.componentMeasures.push(s);
            }
            s.duration = getRelativeTime() - s.timestamp;
            s = null;
          }
        }
        if (Er) {
          markAndClear("--component-layout-effect-mount-stop");
        }
      }
      function markComponentLayoutEffectUnmountStarted(t) {
        if (f || Er) {
          const r = e(t) || "Unknown";
          if (f) {
            if (f) {
              s = {
                componentName: r,
                duration: 0,
                timestamp: getRelativeTime(),
                type: "layout-effect-unmount",
                warning: null,
              };
            }
          }
          if (Er) {
            markAndClear(`--component-layout-effect-unmount-start-${r}`);
          }
        }
      }
      function markComponentLayoutEffectUnmountStopped() {
        if (f) {
          if (s) {
            if (c) {
              c.componentMeasures.push(s);
            }
            s.duration = getRelativeTime() - s.timestamp;
            s = null;
          }
        }
        if (Er) {
          markAndClear("--component-layout-effect-unmount-stop");
        }
      }
      function markComponentPassiveEffectMountStarted(t) {
        if (f || Er) {
          const r = e(t) || "Unknown";
          if (f) {
            if (f) {
              s = {
                componentName: r,
                duration: 0,
                timestamp: getRelativeTime(),
                type: "passive-effect-mount",
                warning: null,
              };
            }
          }
          if (Er) {
            markAndClear(`--component-passive-effect-mount-start-${r}`);
          }
        }
      }
      function markComponentPassiveEffectMountStopped() {
        if (f) {
          if (s) {
            if (c) {
              c.componentMeasures.push(s);
            }
            s.duration = getRelativeTime() - s.timestamp;
            s = null;
          }
        }
        if (Er) {
          markAndClear("--component-passive-effect-mount-stop");
        }
      }
      function markComponentPassiveEffectUnmountStarted(t) {
        if (f || Er) {
          const r = e(t) || "Unknown";
          if (f) {
            if (f) {
              s = {
                componentName: r,
                duration: 0,
                timestamp: getRelativeTime(),
                type: "passive-effect-unmount",
                warning: null,
              };
            }
          }
          if (Er) {
            markAndClear(`--component-passive-effect-unmount-start-${r}`);
          }
        }
      }
      function markComponentPassiveEffectUnmountStopped() {
        if (f) {
          if (s) {
            if (c) {
              c.componentMeasures.push(s);
            }
            s.duration = getRelativeTime() - s.timestamp;
            s = null;
          }
        }
        if (Er) {
          markAndClear("--component-passive-effect-unmount-stop");
        }
      }
      function markComponentErrored(t, r, n) {
        if (f || Er) {
          const n = e(t) || "Unknown";
          const o = t.alternate === null ? "mount" : "update";
          let i = "";
          if (
            r !== null &&
            typeof r === "object" &&
            typeof r.message === "string"
          ) {
            i = r.message;
          } else if (typeof r === "string") {
            i = r;
          }
          if (f) {
            if (c) {
              c.thrownErrors.push({
                componentName: n,
                message: i,
                phase: o,
                timestamp: getRelativeTime(),
                type: "thrown-error",
              });
            }
          }
          if (Er) {
            markAndClear(`--error-${n}-${o}-${i}`);
          }
        }
      }
      const m = typeof WeakMap === "function" ? WeakMap : Map;
      const h = new m();
      let g = 0;
      function getWakeableID(e) {
        if (!h.has(e)) {
          h.set(e, g++);
        }
        return h.get(e);
      }
      function markComponentSuspended(t, r, n) {
        if (f || Er) {
          const o = h.has(r) ? "resuspend" : "suspend";
          const i = getWakeableID(r);
          const a = e(t) || "Unknown";
          const s = t.alternate === null ? "mount" : "update";
          const l = r.displayName || "";
          let u = null;
          if (f) {
            u = {
              componentName: a,
              depth: 0,
              duration: 0,
              id: `${i}`,
              phase: s,
              promiseName: l,
              resolution: "unresolved",
              timestamp: getRelativeTime(),
              type: "suspense",
              warning: null,
            };
            if (c) {
              c.suspenseEvents.push(u);
            }
          }
          if (Er) {
            markAndClear(`--suspense-${o}-${i}-${a}-${s}-${n}-${l}`);
          }
          r.then(
            () => {
              if (u) {
                u.duration = getRelativeTime() - u.timestamp;
                u.resolution = "resolved";
              }
              if (Er) {
                markAndClear(`--suspense-resolved-${i}-${a}`);
              }
            },
            () => {
              if (u) {
                u.duration = getRelativeTime() - u.timestamp;
                u.resolution = "rejected";
              }
              if (Er) {
                markAndClear(`--suspense-rejected-${i}-${a}`);
              }
            }
          );
        }
      }
      function markLayoutEffectsStarted(e) {
        if (f) {
          recordReactMeasureStarted("layout-effects", e);
        }
        if (Er) {
          markAndClear(`--layout-effects-start-${e}`);
        }
      }
      function markLayoutEffectsStopped() {
        if (f) {
          recordReactMeasureCompleted("layout-effects");
        }
        if (Er) {
          markAndClear("--layout-effects-stop");
        }
      }
      function markPassiveEffectsStarted(e) {
        if (f) {
          recordReactMeasureStarted("passive-effects", e);
        }
        if (Er) {
          markAndClear(`--passive-effects-start-${e}`);
        }
      }
      function markPassiveEffectsStopped() {
        if (f) {
          recordReactMeasureCompleted("passive-effects");
        }
        if (Er) {
          markAndClear("--passive-effects-stop");
        }
      }
      function markRenderStarted(e) {
        if (f) {
          if (p) {
            p = false;
            a++;
          }
          if (l.length === 0 || l[l.length - 1].type !== "render-idle") {
            recordReactMeasureStarted("render-idle", e);
          }
          recordReactMeasureStarted("render", e);
        }
        if (Er) {
          markAndClear(`--render-start-${e}`);
        }
      }
      function markRenderYielded() {
        if (f) {
          recordReactMeasureCompleted("render");
        }
        if (Er) {
          markAndClear("--render-yield");
        }
      }
      function markRenderStopped() {
        if (f) {
          recordReactMeasureCompleted("render");
        }
        if (Er) {
          markAndClear("--render-stop");
        }
      }
      function markRenderScheduled(e) {
        if (f) {
          if (c) {
            c.schedulingEvents.push({
              lanes: laneToLanesArray(e),
              timestamp: getRelativeTime(),
              type: "schedule-render",
              warning: null,
            });
          }
        }
        if (Er) {
          markAndClear(`--schedule-render-${e}`);
        }
      }
      function markForceUpdateScheduled(t, r) {
        if (f || Er) {
          const n = e(t) || "Unknown";
          if (f) {
            if (c) {
              c.schedulingEvents.push({
                componentName: n,
                lanes: laneToLanesArray(r),
                timestamp: getRelativeTime(),
                type: "schedule-force-update",
                warning: null,
              });
            }
          }
          if (Er) {
            markAndClear(`--schedule-forced-update-${r}-${n}`);
          }
        }
      }
      function getParentFibers(e) {
        const t = [];
        let r = e;
        while (r !== null) {
          t.push(r);
          r = r.return;
        }
        return t;
      }
      function markStateUpdateScheduled(t, r) {
        if (f || Er) {
          const n = e(t) || "Unknown";
          if (f) {
            if (c) {
              const e = {
                componentName: n,
                lanes: laneToLanesArray(r),
                timestamp: getRelativeTime(),
                type: "schedule-state-update",
                warning: null,
              };
              u.set(e, getParentFibers(t));
              c.schedulingEvents.push(e);
            }
          }
          if (Er) {
            markAndClear(`--schedule-state-update-${r}-${n}`);
          }
        }
      }
      function toggleProfilingStatus(e) {
        if (f !== e) {
          f = e;
          if (f) {
            const e = new Map();
            if (Er) {
              const e = getInternalModuleRanges();
              if (e) {
                for (let t = 0; t < e.length; t++) {
                  const r = e[t];
                  if (ve(r) && r.length === 2) {
                    const [r, n] = e[t];
                    markAndClear(`--react-internal-module-start-${r}`);
                    markAndClear(`--react-internal-module-stop-${n}`);
                  }
                }
              }
            }
            const t = new Map();
            let r = 1;
            for (let e = 0; e < gr; e++) {
              t.set(r, []);
              r *= 2;
            }
            a = 0;
            s = null;
            l = [];
            u = new Map();
            c = {
              internalModuleSourceToRanges: e,
              laneToLabelMap: d || new Map(),
              reactVersion: i,
              componentMeasures: [],
              schedulingEvents: [],
              suspenseEvents: [],
              thrownErrors: [],
              batchUIDToMeasuresMap: new Map(),
              duration: 0,
              laneToReactMeasureMap: t,
              startTime: 0,
              flamechart: [],
              nativeEvents: [],
              networkMeasures: [],
              otherUserTimingMarks: [],
              snapshots: [],
              snapshotHeight: 0,
            };
            p = true;
          } else {
            if (c !== null) {
              c.schedulingEvents.forEach((e) => {
                if (e.type === "schedule-state-update") {
                  const t = u.get(e);
                  if (t && o != null) {
                    e.componentStack = t.reduce(
                      (e, t) => e + describeFiber(n, t, o),
                      ""
                    );
                  }
                }
              });
            }
            u.clear();
          }
        }
      }
      return {
        getTimelineData,
        profilingHooks: {
          markCommitStarted,
          markCommitStopped,
          markComponentRenderStarted,
          markComponentRenderStopped,
          markComponentPassiveEffectMountStarted,
          markComponentPassiveEffectMountStopped,
          markComponentPassiveEffectUnmountStarted,
          markComponentPassiveEffectUnmountStopped,
          markComponentLayoutEffectMountStarted,
          markComponentLayoutEffectMountStopped,
          markComponentLayoutEffectUnmountStarted,
          markComponentLayoutEffectUnmountStopped,
          markComponentErrored,
          markComponentSuspended,
          markLayoutEffectsStarted,
          markLayoutEffectsStopped,
          markPassiveEffectsStarted,
          markPassiveEffectsStopped,
          markRenderStarted,
          markRenderYielded,
          markRenderStopped,
          markRenderScheduled,
          markForceUpdateScheduled,
          markStateUpdateScheduled,
        },
        toggleProfilingStatus,
      };
    }
    function getFiberFlags(e) {
      return e.flags !== undefined ? e.flags : e.effectTag;
    }
    const _r =
      typeof performance === "object" && typeof performance.now === "function"
        ? () => performance.now()
        : () => Date.now();
    function getInternalReactConstants(e) {
      let t = {
        ImmediatePriority: 99,
        UserBlockingPriority: 98,
        NormalPriority: 97,
        LowPriority: 96,
        IdlePriority: 95,
        NoPriority: 90,
      };
      if (gt(e, "17.0.2")) {
        t = {
          ImmediatePriority: 1,
          UserBlockingPriority: 2,
          NormalPriority: 3,
          LowPriority: 4,
          IdlePriority: 5,
          NoPriority: 0,
        };
      }
      let r = 0;
      if (gte(e, "18.0.0-alpha")) {
        r = 24;
      } else if (gte(e, "16.9.0")) {
        r = 1;
      } else if (gte(e, "16.3.0")) {
        r = 2;
      }
      let n = null;
      if (gt(e, "17.0.1")) {
        n = {
          CacheComponent: 24,
          ClassComponent: 1,
          ContextConsumer: 9,
          ContextProvider: 10,
          CoroutineComponent: -1,
          CoroutineHandlerPhase: -1,
          DehydratedSuspenseComponent: 18,
          ForwardRef: 11,
          Fragment: 7,
          FunctionComponent: 0,
          HostComponent: 5,
          HostPortal: 4,
          HostRoot: 3,
          HostHoistable: 26,
          HostSingleton: 27,
          HostText: 6,
          IncompleteClassComponent: 17,
          IndeterminateComponent: 2,
          LazyComponent: 16,
          LegacyHiddenComponent: 23,
          MemoComponent: 14,
          Mode: 8,
          OffscreenComponent: 22,
          Profiler: 12,
          ScopeComponent: 21,
          SimpleMemoComponent: 15,
          SuspenseComponent: 13,
          SuspenseListComponent: 19,
          TracingMarkerComponent: 25,
          YieldComponent: -1,
        };
      } else if (gte(e, "17.0.0-alpha")) {
        n = {
          CacheComponent: -1,
          ClassComponent: 1,
          ContextConsumer: 9,
          ContextProvider: 10,
          CoroutineComponent: -1,
          CoroutineHandlerPhase: -1,
          DehydratedSuspenseComponent: 18,
          ForwardRef: 11,
          Fragment: 7,
          FunctionComponent: 0,
          HostComponent: 5,
          HostPortal: 4,
          HostRoot: 3,
          HostHoistable: -1,
          HostSingleton: -1,
          HostText: 6,
          IncompleteClassComponent: 17,
          IndeterminateComponent: 2,
          LazyComponent: 16,
          LegacyHiddenComponent: 24,
          MemoComponent: 14,
          Mode: 8,
          OffscreenComponent: 23,
          Profiler: 12,
          ScopeComponent: 21,
          SimpleMemoComponent: 15,
          SuspenseComponent: 13,
          SuspenseListComponent: 19,
          TracingMarkerComponent: -1,
          YieldComponent: -1,
        };
      } else if (gte(e, "16.6.0-beta.0")) {
        n = {
          CacheComponent: -1,
          ClassComponent: 1,
          ContextConsumer: 9,
          ContextProvider: 10,
          CoroutineComponent: -1,
          CoroutineHandlerPhase: -1,
          DehydratedSuspenseComponent: 18,
          ForwardRef: 11,
          Fragment: 7,
          FunctionComponent: 0,
          HostComponent: 5,
          HostPortal: 4,
          HostRoot: 3,
          HostHoistable: -1,
          HostSingleton: -1,
          HostText: 6,
          IncompleteClassComponent: 17,
          IndeterminateComponent: 2,
          LazyComponent: 16,
          LegacyHiddenComponent: -1,
          MemoComponent: 14,
          Mode: 8,
          OffscreenComponent: -1,
          Profiler: 12,
          ScopeComponent: -1,
          SimpleMemoComponent: 15,
          SuspenseComponent: 13,
          SuspenseListComponent: 19,
          TracingMarkerComponent: -1,
          YieldComponent: -1,
        };
      } else if (gte(e, "16.4.3-alpha")) {
        n = {
          CacheComponent: -1,
          ClassComponent: 2,
          ContextConsumer: 11,
          ContextProvider: 12,
          CoroutineComponent: -1,
          CoroutineHandlerPhase: -1,
          DehydratedSuspenseComponent: -1,
          ForwardRef: 13,
          Fragment: 9,
          FunctionComponent: 0,
          HostComponent: 7,
          HostPortal: 6,
          HostRoot: 5,
          HostHoistable: -1,
          HostSingleton: -1,
          HostText: 8,
          IncompleteClassComponent: -1,
          IndeterminateComponent: 4,
          LazyComponent: -1,
          LegacyHiddenComponent: -1,
          MemoComponent: -1,
          Mode: 10,
          OffscreenComponent: -1,
          Profiler: 15,
          ScopeComponent: -1,
          SimpleMemoComponent: -1,
          SuspenseComponent: 16,
          SuspenseListComponent: -1,
          TracingMarkerComponent: -1,
          YieldComponent: -1,
        };
      } else {
        n = {
          CacheComponent: -1,
          ClassComponent: 2,
          ContextConsumer: 12,
          ContextProvider: 13,
          CoroutineComponent: 7,
          CoroutineHandlerPhase: 8,
          DehydratedSuspenseComponent: -1,
          ForwardRef: 14,
          Fragment: 10,
          FunctionComponent: 1,
          HostComponent: 5,
          HostPortal: 4,
          HostRoot: 3,
          HostHoistable: -1,
          HostSingleton: -1,
          HostText: 6,
          IncompleteClassComponent: -1,
          IndeterminateComponent: 0,
          LazyComponent: -1,
          LegacyHiddenComponent: -1,
          MemoComponent: -1,
          Mode: 11,
          OffscreenComponent: -1,
          Profiler: 15,
          ScopeComponent: -1,
          SimpleMemoComponent: -1,
          SuspenseComponent: 16,
          SuspenseListComponent: -1,
          TracingMarkerComponent: -1,
          YieldComponent: 9,
        };
      }
      function getTypeSymbol(e) {
        const t = typeof e === "object" && e !== null ? e.$$typeof : e;
        return typeof t === "symbol" ? t.toString() : t;
      }
      const {
        CacheComponent: o,
        ClassComponent: i,
        IncompleteClassComponent: a,
        FunctionComponent: s,
        IndeterminateComponent: l,
        ForwardRef: c,
        HostRoot: u,
        HostHoistable: f,
        HostSingleton: p,
        HostComponent: d,
        HostPortal: m,
        HostText: h,
        Fragment: g,
        LazyComponent: y,
        LegacyHiddenComponent: b,
        MemoComponent: v,
        OffscreenComponent: E,
        Profiler: _,
        ScopeComponent: k,
        SimpleMemoComponent: O,
        SuspenseComponent: R,
        SuspenseListComponent: F,
        TracingMarkerComponent: D,
      } = n;
      function resolveFiberType(e) {
        const t = getTypeSymbol(e);
        switch (t) {
          case Ht:
          case Bt:
            return resolveFiberType(e.type);
          case Mt:
          case Lt:
            return e.render;
          default:
            return e;
        }
      }
      function getDisplayNameForFiber(e) {
        const { elementType: t, type: r, tag: n } = e;
        let x = r;
        if (typeof r === "object" && r !== null) {
          x = resolveFiberType(r);
        }
        let N = null;
        switch (n) {
          case o:
            return "Cache";
          case i:
          case a:
            return getDisplayName(x);
          case s:
          case l:
            return getDisplayName(x);
          case c:
            return getWrappedDisplayName(t, x, "ForwardRef", "Anonymous");
          case u:
            const n = e.stateNode;
            if (n != null && n._debugRootType !== null) {
              return n._debugRootType;
            }
            return null;
          case d:
          case p:
          case f:
            return r;
          case m:
          case h:
            return null;
          case g:
            return "Fragment";
          case y:
            return "Lazy";
          case v:
          case O:
            return getWrappedDisplayName(t, x, "Memo", "Anonymous");
          case R:
            return "Suspense";
          case b:
            return "LegacyHidden";
          case E:
            return "Offscreen";
          case k:
            return "Scope";
          case F:
            return "SuspenseList";
          case _:
            return "Profiler";
          case D:
            return "TracingMarker";
          default:
            const A = getTypeSymbol(r);
            switch (A) {
              case Ot:
              case Rt:
              case Dt:
                return null;
              case Kt:
              case qt:
                N = e.type._context || e.type.context;
                return `${N.displayName || "Context"}.Provider`;
              case Ft:
              case Tt:
              case Pt:
                N = e.type._context || e.type;
                return `${N.displayName || "Context"}.Consumer`;
              case Xt:
              case Zt:
                return null;
              case Gt:
              case Yt:
                return `Profiler(${e.memoizedProps.id})`;
              case Jt:
              case Qt:
                return "Scope";
              default:
                return null;
            }
        }
      }
      return {
        getDisplayNameForFiber,
        getTypeSymbol,
        ReactPriorityLevels: t,
        ReactTypeOfWork: n,
        StrictModeBits: r,
      };
    }
    const kr = new Map();
    const Or = new Map();
    function attach(y, b, v, E) {
      const _ = v.reconcilerVersion || v.version;
      const {
        getDisplayNameForFiber: k,
        getTypeSymbol: O,
        ReactPriorityLevels: R,
        ReactTypeOfWork: F,
        StrictModeBits: D,
      } = getInternalReactConstants(_);
      const {
        CacheComponent: x,
        ClassComponent: N,
        ContextConsumer: A,
        DehydratedSuspenseComponent: $,
        ForwardRef: j,
        Fragment: B,
        FunctionComponent: V,
        HostRoot: Y,
        HostHoistable: q,
        HostSingleton: X,
        HostPortal: Z,
        HostComponent: ee,
        HostText: te,
        IncompleteClassComponent: re,
        IndeterminateComponent: ne,
        LegacyHiddenComponent: oe,
        MemoComponent: ie,
        OffscreenComponent: ae,
        SimpleMemoComponent: se,
        SuspenseComponent: le,
        SuspenseListComponent: ce,
        TracingMarkerComponent: ue,
      } = F;
      const {
        ImmediatePriority: fe,
        UserBlockingPriority: pe,
        NormalPriority: de,
        LowPriority: me,
        IdlePriority: he,
        NoPriority: ge,
      } = R;
      const {
        getLaneLabelMap: ye,
        injectProfilingHooks: be,
        overrideHookState: ve,
        overrideHookStateDeletePath: Se,
        overrideHookStateRenamePath: we,
        overrideProps: Ee,
        overridePropsDeletePath: Ce,
        overridePropsRenamePath: ke,
        scheduleRefresh: Ae,
        setErrorHandler: Me,
        setSuspenseHandler: Le,
        scheduleUpdate: Ue,
      } = v;
      const $e = typeof Me === "function" && typeof Ue === "function";
      const ze = typeof Le === "function" && typeof Ue === "function";
      if (typeof Ae === "function") {
        v.scheduleRefresh = (...e) => {
          try {
            y.emit("fastRefreshScheduled");
          } finally {
            return Ae(...e);
          }
        };
      }
      let Be = null;
      let Ve = null;
      if (typeof be === "function") {
        const e = createProfilingHooks({
          getDisplayNameForFiber: k,
          getIsProfiling: () => Pt,
          getLaneLabelMap: ye,
          currentDispatcherRef: v.currentDispatcherRef,
          workTagMap: F,
          reactVersion: _,
        });
        be(e.profilingHooks);
        Be = e.getTimelineData;
        Ve = e.toggleProfilingStatus;
      }
      const We = new Set();
      const Ge = new Map();
      const Ye = new Map();
      const Ke = new Map();
      const qe = new Map();
      function clearErrorsAndWarnings() {
        for (const e of Ke.keys()) {
          const t = Or.get(e);
          if (t != null) {
            We.add(t);
            updateMostRecentlyInspectedElementIfNecessary(e);
          }
        }
        for (const e of qe.keys()) {
          const t = Or.get(e);
          if (t != null) {
            We.add(t);
            updateMostRecentlyInspectedElementIfNecessary(e);
          }
        }
        Ke.clear();
        qe.clear();
        flushPendingEvents();
      }
      function clearMessageCountHelper(e, t, r) {
        const n = Or.get(e);
        if (n != null) {
          Ge.delete(n);
          if (r.has(e)) {
            r.delete(e);
            We.add(n);
            flushPendingEvents();
            updateMostRecentlyInspectedElementIfNecessary(e);
          } else {
            We.delete(n);
          }
        }
      }
      function clearErrorsForFiberID(e) {
        clearMessageCountHelper(e, Ge, Ke);
      }
      function clearWarningsForFiberID(e) {
        clearMessageCountHelper(e, Ye, qe);
      }
      function updateMostRecentlyInspectedElementIfNecessary(e) {
        if (bt !== null && bt.id === e) {
          vt = true;
        }
      }
      function onErrorOrWarning(e, t, r) {
        if (t === "error") {
          const t = getFiberIDUnsafe(e);
          if (t != null && At.get(t) === true) {
            return;
          }
        }
        const n = format(...r);
        if (_e) {
          debug("onErrorOrWarning", e, null, `${t}: "${n}"`);
        }
        We.add(e);
        const o = t === "error" ? Ge : Ye;
        const i = o.get(e);
        if (i != null) {
          const e = i.get(n) || 0;
          i.set(n, e + 1);
        } else {
          o.set(e, new Map([[n, 1]]));
        }
        flushPendingErrorsAndWarningsAfterDelay();
      }
      registerRenderer(v, onErrorOrWarning);
      patchConsoleUsingWindowValues();
      const debug = (e, t, r, n = "") => {
        if (_e) {
          const o = t.tag + ":" + (k(t) || "null");
          const i = getFiberIDUnsafe(t) || "<no id>";
          const a = r ? r.tag + ":" + (k(r) || "null") : "";
          const s = r ? getFiberIDUnsafe(r) || "<no-id>" : "";
          console.groupCollapsed(
            `[renderer] %c ${e} %c ${o} (${i}) %c ${
              r ? `${a} (${s})` : ""
            } %c ${n}`,
            "color: red; font-weight: bold;",
            "color: blue;",
            "color: purple;",
            "color: black;"
          );
          console.log(new Error().stack.split("\n").slice(1).join("\n"));
          console.groupEnd();
        }
      };
      const Je = new Set();
      const Xe = new Set();
      const Ze = new Set();
      let et = false;
      const tt = new Set();
      function applyComponentFilters(e) {
        Ze.clear();
        Je.clear();
        Xe.clear();
        e.forEach((e) => {
          if (!e.isEnabled) {
            return;
          }
          switch (e.type) {
            case d:
              if (e.isValid && e.value !== "") {
                Je.add(new RegExp(e.value, "i"));
              }
              break;
            case p:
              Ze.add(e.value);
              break;
            case m:
              if (e.isValid && e.value !== "") {
                Xe.add(new RegExp(e.value, "i"));
              }
              break;
            case h:
              Je.add(new RegExp("\\("));
              break;
            default:
              console.warn(`Invalid component filter type "${e.type}"`);
              break;
          }
        });
      }
      if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ != null) {
        applyComponentFilters(window.__REACT_DEVTOOLS_COMPONENT_FILTERS__);
      } else {
        applyComponentFilters(getDefaultComponentFilters());
      }
      function updateComponentFilters(e) {
        if (Pt) {
          throw Error("Cannot modify filter preferences while profiling");
        }
        y.getFiberRoots(b).forEach((e) => {
          ot = getOrGenerateFiberID(e.current);
          pushOperation(De);
          flushPendingEvents(e);
          ot = -1;
        });
        applyComponentFilters(e);
        Ht.clear();
        y.getFiberRoots(b).forEach((e) => {
          ot = getOrGenerateFiberID(e.current);
          setRootPseudoKey(ot, e.current);
          mountFiberRecursively(e.current, null, false, false);
          flushPendingEvents(e);
          ot = -1;
        });
        reevaluateErrorsAndWarnings();
        flushPendingEvents();
      }
      function shouldFilterFiber(e) {
        const { _debugSource: t, tag: r, type: n, key: o } = e;
        switch (r) {
          case $:
            return true;
          case Z:
          case te:
          case oe:
          case ae:
            return true;
          case Y:
            return false;
          case B:
            return o === null;
          default:
            const e = O(n);
            switch (e) {
              case Ot:
              case Rt:
              case Dt:
              case Xt:
              case Zt:
                return true;
              default:
                break;
            }
        }
        const i = getElementTypeForFiber(e);
        if (Ze.has(i)) {
          return true;
        }
        if (Je.size > 0) {
          const t = k(e);
          if (t != null) {
            for (const e of Je) {
              if (e.test(t)) {
                return true;
              }
            }
          }
        }
        if (t != null && Xe.size > 0) {
          const { fileName: e } = t;
          for (const t of Xe) {
            if (t.test(e)) {
              return true;
            }
          }
        }
        return false;
      }
      function getElementTypeForFiber(p) {
        const { type: d, tag: m } = p;
        switch (m) {
          case N:
          case re:
            return e;
          case V:
          case ne:
            return r;
          case j:
            return n;
          case Y:
            return l;
          case ee:
          case q:
          case X:
            return o;
          case Z:
          case te:
          case B:
            return a;
          case ie:
          case se:
            return i;
          case le:
            return c;
          case ce:
            return u;
          case ue:
            return f;
          default:
            const p = O(d);
            switch (p) {
              case Ot:
              case Rt:
              case Dt:
                return a;
              case Kt:
              case qt:
                return t;
              case Ft:
              case Tt:
                return t;
              case Xt:
              case Zt:
                return a;
              case Gt:
              case Yt:
                return s;
              default:
                return a;
            }
        }
      }
      const rt = new Map();
      const nt = new Map();
      let ot = -1;
      function getOrGenerateFiberID(e) {
        let t = null;
        if (kr.has(e)) {
          t = kr.get(e);
        } else {
          const { alternate: r } = e;
          if (r !== null && kr.has(r)) {
            t = kr.get(r);
          }
        }
        let r = false;
        if (t === null) {
          r = true;
          t = getUID();
        }
        const n = t;
        if (!kr.has(e)) {
          kr.set(e, n);
          Or.set(n, e);
        }
        const { alternate: o } = e;
        if (o !== null) {
          if (!kr.has(o)) {
            kr.set(o, n);
          }
        }
        if (_e) {
          if (r) {
            debug("getOrGenerateFiberID()", e, e.return, "Generated a new UID");
          }
        }
        return n;
      }
      function getFiberIDThrows(e) {
        const t = getFiberIDUnsafe(e);
        if (t !== null) {
          return t;
        }
        throw Error(`Could not find ID for Fiber "${k(e) || ""}"`);
      }
      function getFiberIDUnsafe(e) {
        if (kr.has(e)) {
          return kr.get(e);
        } else {
          const { alternate: t } = e;
          if (t !== null && kr.has(t)) {
            return kr.get(t);
          }
        }
        return null;
      }
      function untrackFiberID(e) {
        if (_e) {
          debug("untrackFiberID()", e, e.return, "schedule after delay");
        }
        it.add(e);
        const t = e.alternate;
        if (t !== null) {
          it.add(t);
        }
        if (at === null) {
          at = setTimeout(untrackFibers, 1e3);
        }
      }
      const it = new Set();
      let at = null;
      function untrackFibers() {
        if (at !== null) {
          clearTimeout(at);
          at = null;
        }
        it.forEach((e) => {
          const t = getFiberIDUnsafe(e);
          if (t !== null) {
            Or.delete(t);
            clearErrorsForFiberID(t);
            clearWarningsForFiberID(t);
          }
          kr.delete(e);
          const { alternate: r } = e;
          if (r !== null) {
            kr.delete(r);
          }
          if (At.has(t)) {
            At.delete(t);
            if (At.size === 0 && Me != null) {
              Me(shouldErrorFiberAlwaysNull);
            }
          }
        });
        it.clear();
      }
      function getChangeDescription(t, o) {
        switch (getElementTypeForFiber(o)) {
          case e:
          case r:
          case i:
          case n:
            if (t === null) {
              return {
                context: null,
                didHooksChange: false,
                isFirstMount: true,
                props: null,
                state: null,
              };
            } else {
              const e = {
                context: getContextChangedKeys(o),
                didHooksChange: false,
                isFirstMount: false,
                props: getChangedKeys(t.memoizedProps, o.memoizedProps),
                state: getChangedKeys(t.memoizedState, o.memoizedState),
              };
              const r = getChangedHooksIndices(
                t.memoizedState,
                o.memoizedState
              );
              e.hooks = r;
              e.didHooksChange = r !== null && r.length > 0;
              return e;
            }
          default:
            return null;
        }
      }
      function updateContextsForFiber(t) {
        switch (getElementTypeForFiber(t)) {
          case e:
          case n:
          case r:
          case i:
            if (Ct !== null) {
              const e = getFiberIDThrows(t);
              const r = getContextsForFiber(t);
              if (r !== null) {
                Ct.set(e, r);
              }
            }
            break;
          default:
            break;
        }
      }
      const st = {};
      function getContextsForFiber(t) {
        let o = st;
        let a = st;
        switch (getElementTypeForFiber(t)) {
          case e:
            const s = t.stateNode;
            if (s != null) {
              if (s.constructor && s.constructor.contextType != null) {
                a = s.context;
              } else {
                o = s.context;
                if (o && Object.keys(o).length === 0) {
                  o = st;
                }
              }
            }
            return [o, a];
          case n:
          case r:
          case i:
            const l = t.dependencies;
            if (l && l.firstContext) {
              a = l.firstContext;
            }
            return [o, a];
          default:
            return null;
        }
      }
      function crawlToInitializeContextsMap(e) {
        const t = getFiberIDUnsafe(e);
        if (t !== null) {
          updateContextsForFiber(e);
          let t = e.child;
          while (t !== null) {
            crawlToInitializeContextsMap(t);
            t = t.sibling;
          }
        }
      }
      function getContextChangedKeys(t) {
        if (Ct !== null) {
          const o = getFiberIDThrows(t);
          const a = Ct.has(o) ? Ct.get(o) : null;
          const s = getContextsForFiber(t);
          if (a == null || s == null) {
            return null;
          }
          const [l, c] = a;
          const [u, f] = s;
          switch (getElementTypeForFiber(t)) {
            case e:
              if (a && s) {
                if (u !== st) {
                  return getChangedKeys(l, u);
                } else if (f !== st) {
                  return c !== f;
                }
              }
              break;
            case n:
            case r:
            case i:
              if (f !== st) {
                let e = c;
                let t = f;
                while (e && t) {
                  if (!ar(e.memoizedValue, t.memoizedValue)) {
                    return true;
                  }
                  e = e.next;
                  t = t.next;
                }
                return false;
              }
              break;
            default:
              break;
          }
        }
        return null;
      }
      function isHookThatCanScheduleUpdate(e) {
        const t = e.queue;
        if (!t) {
          return false;
        }
        const r = lr.bind(t);
        if (r("pending")) {
          return true;
        }
        return (
          r("value") && r("getSnapshot") && typeof t.getSnapshot === "function"
        );
      }
      function didStatefulHookChange(e, t) {
        const r = e.memoizedState;
        const n = t.memoizedState;
        if (isHookThatCanScheduleUpdate(e)) {
          return r !== n;
        }
        return false;
      }
      function getChangedHooksIndices(e, t) {
        if (e == null || t == null) {
          return null;
        }
        const r = [];
        let n = 0;
        if (
          t.hasOwnProperty("baseState") &&
          t.hasOwnProperty("memoizedState") &&
          t.hasOwnProperty("next") &&
          t.hasOwnProperty("queue")
        ) {
          while (t !== null) {
            if (didStatefulHookChange(e, t)) {
              r.push(n);
            }
            t = t.next;
            e = e.next;
            n++;
          }
        }
        return r;
      }
      function getChangedKeys(e, t) {
        if (e == null || t == null) {
          return null;
        }
        if (
          t.hasOwnProperty("baseState") &&
          t.hasOwnProperty("memoizedState") &&
          t.hasOwnProperty("next") &&
          t.hasOwnProperty("queue")
        ) {
          return null;
        }
        const r = new Set([...Object.keys(e), ...Object.keys(t)]);
        const n = [];
        for (const o of r) {
          if (e[o] !== t[o]) {
            n.push(o);
          }
        }
        return n;
      }
      function didFiberRender(e, t) {
        switch (t.tag) {
          case N:
          case V:
          case A:
          case ie:
          case se:
          case j:
            const r = 1;
            return (getFiberFlags(t) & r) === r;
          default:
            return (
              e.memoizedProps !== t.memoizedProps ||
              e.memoizedState !== t.memoizedState ||
              e.ref !== t.ref
            );
        }
      }
      const lt = [];
      const ct = [];
      const ut = [];
      let pt = [];
      const dt = new Map();
      let mt = 0;
      let ht = null;
      function pushOperation(e) {
        if (false) {
        }
        lt.push(e);
      }
      function shouldBailoutWithPendingOperations() {
        if (Pt) {
          if (wt != null && wt.durations.length > 0) {
            return false;
          }
        }
        return (
          lt.length === 0 && ct.length === 0 && ut.length === 0 && ht === null
        );
      }
      function flushOrQueueOperations(e) {
        if (shouldBailoutWithPendingOperations()) {
          return;
        }
        if (pt !== null) {
          pt.push(e);
        } else {
          y.emit("operations", e);
        }
      }
      let yt = null;
      function clearPendingErrorsAndWarningsAfterDelay() {
        if (yt !== null) {
          clearTimeout(yt);
          yt = null;
        }
      }
      function flushPendingErrorsAndWarningsAfterDelay() {
        clearPendingErrorsAndWarningsAfterDelay();
        yt = setTimeout(() => {
          yt = null;
          if (lt.length > 0) {
            return;
          }
          recordPendingErrorsAndWarnings();
          if (shouldBailoutWithPendingOperations()) {
            return;
          }
          const e = new Array(3 + lt.length);
          e[0] = b;
          e[1] = ot;
          e[2] = 0;
          for (let t = 0; t < lt.length; t++) {
            e[3 + t] = lt[t];
          }
          flushOrQueueOperations(e);
          lt.length = 0;
        }, 1e3);
      }
      function reevaluateErrorsAndWarnings() {
        We.clear();
        Ke.forEach((e, t) => {
          const r = Or.get(t);
          if (r != null) {
            We.add(r);
          }
        });
        qe.forEach((e, t) => {
          const r = Or.get(t);
          if (r != null) {
            We.add(r);
          }
        });
        recordPendingErrorsAndWarnings();
      }
      function mergeMapsAndGetCountHelper(e, t, r, n) {
        let o = 0;
        let i = n.get(t);
        const a = r.get(e);
        if (a != null) {
          if (i == null) {
            i = a;
            n.set(t, a);
          } else {
            const e = i;
            a.forEach((t, r) => {
              const n = e.get(r) || 0;
              e.set(r, n + t);
            });
          }
        }
        if (!shouldFilterFiber(e)) {
          if (i != null) {
            i.forEach((e) => {
              o += e;
            });
          }
        }
        r.delete(e);
        return o;
      }
      function recordPendingErrorsAndWarnings() {
        clearPendingErrorsAndWarningsAfterDelay();
        We.forEach((e) => {
          const t = getFiberIDUnsafe(e);
          if (t === null) {
          } else {
            const r = mergeMapsAndGetCountHelper(e, t, Ge, Ke);
            const n = mergeMapsAndGetCountHelper(e, t, Ye, qe);
            pushOperation(Pe);
            pushOperation(t);
            pushOperation(r);
            pushOperation(n);
          }
          Ge.delete(e);
          Ye.delete(e);
        });
        We.clear();
      }
      function flushPendingEvents(e) {
        recordPendingErrorsAndWarnings();
        if (shouldBailoutWithPendingOperations()) {
          return;
        }
        const t = ct.length + ut.length + (ht === null ? 0 : 1);
        const r = new Array(2 + 1 + mt + (t > 0 ? 2 + t : 0) + lt.length);
        let n = 0;
        r[n++] = b;
        r[n++] = ot;
        r[n++] = mt;
        dt.forEach((e, t) => {
          const o = e.encodedString;
          const i = o.length;
          r[n++] = i;
          for (let e = 0; e < i; e++) {
            r[n + e] = o[e];
          }
          n += i;
        });
        if (t > 0) {
          r[n++] = Re;
          r[n++] = t;
          for (let e = ct.length - 1; e >= 0; e--) {
            r[n++] = ct[e];
          }
          for (let e = 0; e < ut.length; e++) {
            r[n + e] = ut[e];
          }
          n += ut.length;
          if (ht !== null) {
            r[n] = ht;
            n++;
          }
        }
        for (let e = 0; e < lt.length; e++) {
          r[n + e] = lt[e];
        }
        n += lt.length;
        flushOrQueueOperations(r);
        lt.length = 0;
        ct.length = 0;
        ut.length = 0;
        ht = null;
        dt.clear();
        mt = 0;
      }
      function getStringID(e) {
        if (e === null) {
          return 0;
        }
        const t = dt.get(e);
        if (t !== undefined) {
          return t.id;
        }
        const r = dt.size + 1;
        const n = utfEncodeString(e);
        dt.set(e, {
          encodedString: n,
          id: r,
        });
        mt += n.length + 1;
        return r;
      }
      function recordMount(e, t) {
        const r = e.tag === Y;
        const n = getOrGenerateFiberID(e);
        if (_e) {
          debug("recordMount()", e, t);
        }
        const o = e.hasOwnProperty("_debugOwner");
        const i = e.hasOwnProperty("treeBaseDuration");
        let a = 0;
        if (i) {
          a = xe;
          if (typeof be === "function") {
            a |= Ne;
          }
        }
        if (r) {
          pushOperation(Oe);
          pushOperation(n);
          pushOperation(l);
          pushOperation((e.mode & D) !== 0 ? 1 : 0);
          pushOperation(a);
          pushOperation(D !== 0 ? 1 : 0);
          pushOperation(o ? 1 : 0);
          if (Pt) {
            if (Et !== null) {
              Et.set(n, getDisplayNameForRoot(e));
            }
          }
        } else {
          const { key: r } = e;
          const o = k(e);
          const i = getElementTypeForFiber(e);
          const { _debugOwner: a } = e;
          const s = a != null ? getOrGenerateFiberID(a) : 0;
          const l = t ? getFiberIDThrows(t) : 0;
          const c = getStringID(o);
          const u = r === null ? null : String(r);
          const f = getStringID(u);
          pushOperation(Oe);
          pushOperation(n);
          pushOperation(i);
          pushOperation(l);
          pushOperation(s);
          pushOperation(c);
          pushOperation(f);
          if ((e.mode & D) !== 0 && (t.mode & D) === 0) {
            pushOperation(Ie);
            pushOperation(n);
            pushOperation(g);
          }
        }
        if (i) {
          nt.set(n, ot);
          recordProfilingDurations(e);
        }
      }
      function recordUnmount(e, t) {
        if (_e) {
          debug("recordUnmount()", e, null, t ? "unmount is simulated" : "");
        }
        if (Ut !== null) {
          if (e === Ut || e === Ut.alternate) {
            setTrackedPath(null);
          }
        }
        const r = getFiberIDUnsafe(e);
        if (r === null) {
          return;
        }
        const n = r;
        const o = e.tag === Y;
        if (o) {
          ht = n;
        } else if (!shouldFilterFiber(e)) {
          if (t) {
            ut.push(n);
          } else {
            ct.push(n);
          }
        }
        if (!e._debugNeedsRemount) {
          untrackFiberID(e);
          const t = e.hasOwnProperty("treeBaseDuration");
          if (t) {
            nt.delete(n);
            rt.delete(n);
          }
        }
      }
      function mountFiberRecursively(e, t, r, n) {
        let i = e;
        while (i !== null) {
          getOrGenerateFiberID(i);
          if (_e) {
            debug("mountFiberRecursively()", i, t);
          }
          const e = updateTrackedPathStateBeforeMount(i);
          const a = !shouldFilterFiber(i);
          if (a) {
            recordMount(i, t);
          }
          if (et) {
            if (n) {
              const e = getElementTypeForFiber(i);
              if (e === o) {
                tt.add(i.stateNode);
                n = false;
              }
            }
          }
          const s = i.tag === F.SuspenseComponent;
          if (s) {
            const e = i.memoizedState !== null;
            if (e) {
              const e = i.child;
              const r = e ? e.sibling : null;
              const o = r ? r.child : null;
              if (o !== null) {
                mountFiberRecursively(o, a ? i : t, true, n);
              }
            } else {
              let e = null;
              const r = ae === -1;
              if (r) {
                e = i.child;
              } else if (i.child !== null) {
                e = i.child.child;
              }
              if (e !== null) {
                mountFiberRecursively(e, a ? i : t, true, n);
              }
            }
          } else {
            if (i.child !== null) {
              mountFiberRecursively(i.child, a ? i : t, true, n);
            }
          }
          updateTrackedPathStateAfterMount(e);
          i = r ? i.sibling : null;
        }
      }
      function unmountFiberChildrenRecursively(e) {
        if (_e) {
          debug("unmountFiberChildrenRecursively()", e);
        }
        const t = e.tag === F.SuspenseComponent && e.memoizedState !== null;
        let r = e.child;
        if (t) {
          const t = e.child;
          const n = t ? t.sibling : null;
          r = n ? n.child : null;
        }
        while (r !== null) {
          if (r.return !== null) {
            unmountFiberChildrenRecursively(r);
            recordUnmount(r, true);
          }
          r = r.sibling;
        }
      }
      function recordProfilingDurations(e) {
        const t = getFiberIDThrows(e);
        const { actualDuration: r, treeBaseDuration: n } = e;
        rt.set(t, n || 0);
        if (Pt) {
          const { alternate: o } = e;
          if (o == null || n !== o.treeBaseDuration) {
            const e = Math.floor((n || 0) * 1e3);
            pushOperation(Te);
            pushOperation(t);
            pushOperation(e);
          }
          if (o == null || didFiberRender(o, e)) {
            if (r != null) {
              let n = r;
              let i = e.child;
              while (i !== null) {
                n -= i.actualDuration || 0;
                i = i.sibling;
              }
              const a = wt;
              a.durations.push(t, r, n);
              a.maxActualDuration = Math.max(a.maxActualDuration, r);
              if (xt) {
                const r = getChangeDescription(o, e);
                if (r !== null) {
                  if (a.changeDescriptions !== null) {
                    a.changeDescriptions.set(t, r);
                  }
                }
                updateContextsForFiber(e);
              }
            }
          }
        }
      }
      function recordResetChildren(e, t) {
        if (_e) {
          debug("recordResetChildren()", t, e);
        }
        const r = [];
        let n = t;
        while (n !== null) {
          findReorderedChildrenRecursively(n, r);
          n = n.sibling;
        }
        const o = r.length;
        if (o < 2) {
          return;
        }
        pushOperation(Fe);
        pushOperation(getFiberIDThrows(e));
        pushOperation(o);
        for (let e = 0; e < r.length; e++) {
          pushOperation(r[e]);
        }
      }
      function findReorderedChildrenRecursively(e, t) {
        if (!shouldFilterFiber(e)) {
          t.push(getFiberIDThrows(e));
        } else {
          let r = e.child;
          const n = e.tag === le && e.memoizedState !== null;
          if (n) {
            const t = e.child;
            const n = t ? t.sibling : null;
            const o = n ? n.child : null;
            if (o !== null) {
              r = o;
            }
          }
          while (r !== null) {
            findReorderedChildrenRecursively(r, t);
            r = r.sibling;
          }
        }
      }
      function updateFiberRecursively(a, s, l, c) {
        const u = getOrGenerateFiberID(a);
        if (_e) {
          debug("updateFiberRecursively()", a, l);
        }
        if (et) {
          const l = getElementTypeForFiber(a);
          if (c) {
            if (l === o) {
              tt.add(a.stateNode);
              c = false;
            }
          } else {
            if (l === r || l === e || l === t || l === i || l === n) {
              c = didFiberRender(s, a);
            }
          }
        }
        if (bt !== null && bt.id === u && didFiberRender(s, a)) {
          vt = true;
        }
        const f = !shouldFilterFiber(a);
        const p = a.tag === le;
        let d = false;
        const m = p && s.memoizedState !== null;
        const h = p && a.memoizedState !== null;
        if (m && h) {
          const e = a.child;
          const t = e ? e.sibling : null;
          const r = s.child;
          const n = r ? r.sibling : null;
          if (n == null && t != null) {
            mountFiberRecursively(t, f ? a : l, true, c);
            d = true;
          }
          if (t != null && n != null && updateFiberRecursively(t, n, a, c)) {
            d = true;
          }
        } else if (m && !h) {
          const e = a.child;
          if (e !== null) {
            mountFiberRecursively(e, f ? a : l, true, c);
          }
          d = true;
        } else if (!m && h) {
          unmountFiberChildrenRecursively(s);
          const e = a.child;
          const t = e ? e.sibling : null;
          if (t != null) {
            mountFiberRecursively(t, f ? a : l, true, c);
            d = true;
          }
        } else {
          if (a.child !== s.child) {
            let e = a.child;
            let t = s.child;
            while (e) {
              if (e.alternate) {
                const r = e.alternate;
                if (updateFiberRecursively(e, r, f ? a : l, c)) {
                  d = true;
                }
                if (r !== t) {
                  d = true;
                }
              } else {
                mountFiberRecursively(e, f ? a : l, false, c);
                d = true;
              }
              e = e.sibling;
              if (!d && t !== null) {
                t = t.sibling;
              }
            }
            if (t !== null) {
              d = true;
            }
          } else {
            if (et) {
              if (c) {
                const e = findAllCurrentHostFibers(getFiberIDThrows(a));
                e.forEach((e) => {
                  tt.add(e.stateNode);
                });
              }
            }
          }
        }
        if (f) {
          const e = a.hasOwnProperty("treeBaseDuration");
          if (e) {
            recordProfilingDurations(a);
          }
        }
        if (d) {
          if (f) {
            let e = a.child;
            if (h) {
              const t = a.child;
              e = t ? t.sibling : null;
            }
            if (e != null) {
              recordResetChildren(a, e);
            }
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      }
      function cleanup() {}
      function rootSupportsProfiling(e) {
        if (e.memoizedInteractions != null) {
          return true;
        } else if (
          e.current != null &&
          e.current.hasOwnProperty("treeBaseDuration")
        ) {
          return true;
        } else {
          return false;
        }
      }
      function flushInitialOperations() {
        const e = pt;
        pt = null;
        if (e !== null && e.length > 0) {
          e.forEach((e) => {
            y.emit("operations", e);
          });
        } else {
          if (Lt !== null) {
            zt = true;
          }
          y.getFiberRoots(b).forEach((e) => {
            ot = getOrGenerateFiberID(e.current);
            setRootPseudoKey(ot, e.current);
            if (Pt && rootSupportsProfiling(e)) {
              wt = {
                changeDescriptions: xt ? new Map() : null,
                durations: [],
                commitTime: _r() - It,
                maxActualDuration: 0,
                priorityLevel: null,
                updaters: getUpdatersList(e),
                effectDuration: null,
                passiveEffectDuration: null,
              };
            }
            mountFiberRecursively(e.current, null, false, false);
            flushPendingEvents(e);
            ot = -1;
          });
        }
      }
      function getUpdatersList(e) {
        return e.memoizedUpdaters != null
          ? Array.from(e.memoizedUpdaters)
              .filter((e) => getFiberIDUnsafe(e) !== null)
              .map(fiberToSerializedElement)
          : null;
      }
      function handleCommitFiberUnmount(e) {
        if (!it.has(e)) {
          recordUnmount(e, false);
        }
      }
      function handlePostCommitFiberRoot(e) {
        if (Pt && rootSupportsProfiling(e)) {
          if (wt !== null) {
            const { effectDuration: t, passiveEffectDuration: r } =
              getEffectDurations(e);
            wt.effectDuration = t;
            wt.passiveEffectDuration = r;
          }
        }
      }
      function handleCommitFiberRoot(e, t) {
        const r = e.current;
        const n = r.alternate;
        untrackFibers();
        ot = getOrGenerateFiberID(r);
        if (Lt !== null) {
          zt = true;
        }
        if (et) {
          tt.clear();
        }
        const o = rootSupportsProfiling(e);
        if (Pt && o) {
          wt = {
            changeDescriptions: xt ? new Map() : null,
            durations: [],
            commitTime: _r() - It,
            maxActualDuration: 0,
            priorityLevel: t == null ? null : formatPriorityLevel(t),
            updaters: getUpdatersList(e),
            effectDuration: null,
            passiveEffectDuration: null,
          };
        }
        if (n) {
          const e =
            n.memoizedState != null &&
            n.memoizedState.element != null &&
            n.memoizedState.isDehydrated !== true;
          const t =
            r.memoizedState != null &&
            r.memoizedState.element != null &&
            r.memoizedState.isDehydrated !== true;
          if (!e && t) {
            setRootPseudoKey(ot, r);
            mountFiberRecursively(r, null, false, false);
          } else if (e && t) {
            updateFiberRecursively(r, n, null, false);
          } else if (e && !t) {
            removeRootPseudoKey(ot);
            recordUnmount(r, false);
          }
        } else {
          setRootPseudoKey(ot, r);
          mountFiberRecursively(r, null, false, false);
        }
        if (Pt && o) {
          if (!shouldBailoutWithPendingOperations()) {
            const e = Nt.get(ot);
            if (e != null) {
              e.push(wt);
            } else {
              Nt.set(ot, [wt]);
            }
          }
        }
        flushPendingEvents(e);
        if (et) {
          y.emit("traceUpdates", tt);
        }
        ot = -1;
      }
      function findAllCurrentHostFibers(e) {
        const t = [];
        const r = findCurrentFiberUsingSlowPathById(e);
        if (!r) {
          return t;
        }
        let n = r;
        while (true) {
          if (n.tag === ee || n.tag === te) {
            t.push(n);
          } else if (n.child) {
            n.child.return = n;
            n = n.child;
            continue;
          }
          if (n === r) {
            return t;
          }
          while (!n.sibling) {
            if (!n.return || n.return === r) {
              return t;
            }
            n = n.return;
          }
          n.sibling.return = n.return;
          n = n.sibling;
        }
        return t;
      }
      function findNativeNodesForFiberID(e) {
        try {
          const t = findCurrentFiberUsingSlowPathById(e);
          if (t === null) {
            return null;
          }
          const r = findAllCurrentHostFibers(e);
          return r.map((e) => e.stateNode).filter(Boolean);
        } catch (e) {
          return null;
        }
      }
      function getDisplayNameForFiberID(e) {
        const t = Or.get(e);
        return t != null ? k(t) : null;
      }
      function getFiberForNative(e) {
        return v.findFiberByHostInstance(e);
      }
      function getFiberIDForNative(e, t = false) {
        let r = v.findFiberByHostInstance(e);
        if (r != null) {
          if (t) {
            while (r !== null && shouldFilterFiber(r)) {
              r = r.return;
            }
          }
          return getFiberIDThrows(r);
        }
        return null;
      }
      function assertIsMounted(e) {
        if (getNearestMountedFiber(e) !== e) {
          throw new Error("Unable to find node on an unmounted component.");
        }
      }
      function getNearestMountedFiber(e) {
        let t = e;
        let r = e;
        if (!e.alternate) {
          let e = t;
          do {
            t = e;
            const n = 2;
            const o = 4096;
            if ((t.flags & (n | o)) !== 0) {
              r = t.return;
            }
            e = t.return;
          } while (e);
        } else {
          while (t.return) {
            t = t.return;
          }
        }
        if (t.tag === Y) {
          return r;
        }
        return null;
      }
      function findCurrentFiberUsingSlowPathById(e) {
        const t = Or.get(e);
        if (t == null) {
          console.warn(`Could not find Fiber with id "${e}"`);
          return null;
        }
        const r = t.alternate;
        if (!r) {
          const e = getNearestMountedFiber(t);
          if (e === null) {
            throw new Error("Unable to find node on an unmounted component.");
          }
          if (e !== t) {
            return null;
          }
          return t;
        }
        let n = t;
        let o = r;
        while (true) {
          const e = n.return;
          if (e === null) {
            break;
          }
          const i = e.alternate;
          if (i === null) {
            const t = e.return;
            if (t !== null) {
              n = o = t;
              continue;
            }
            break;
          }
          if (e.child === i.child) {
            let i = e.child;
            while (i) {
              if (i === n) {
                assertIsMounted(e);
                return t;
              }
              if (i === o) {
                assertIsMounted(e);
                return r;
              }
              i = i.sibling;
            }
            throw new Error("Unable to find node on an unmounted component.");
          }
          if (n.return !== o.return) {
            n = e;
            o = i;
          } else {
            let t = false;
            let r = e.child;
            while (r) {
              if (r === n) {
                t = true;
                n = e;
                o = i;
                break;
              }
              if (r === o) {
                t = true;
                o = e;
                n = i;
                break;
              }
              r = r.sibling;
            }
            if (!t) {
              r = i.child;
              while (r) {
                if (r === n) {
                  t = true;
                  n = i;
                  o = e;
                  break;
                }
                if (r === o) {
                  t = true;
                  o = i;
                  n = e;
                  break;
                }
                r = r.sibling;
              }
              if (!t) {
                throw new Error(
                  "Child was not found in either parent set. This indicates a bug " +
                    "in React related to the return pointer. Please file an issue."
                );
              }
            }
          }
          if (n.alternate !== o) {
            throw new Error(
              "Return fibers should always be each others' alternates. " +
                "This error is likely caused by a bug in React. Please file an issue."
            );
          }
        }
        if (n.tag !== Y) {
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (n.stateNode.current === n) {
          return t;
        }
        return r;
      }
      function prepareViewAttributeSource(e, t) {
        if (isMostRecentlyInspectedElement(e)) {
          window.$attribute = utils_getInObject(bt, t);
        }
      }
      function prepareViewElementSource(e) {
        const t = Or.get(e);
        if (t == null) {
          console.warn(`Could not find Fiber with id "${e}"`);
          return;
        }
        const { elementType: r, tag: n, type: o } = t;
        switch (n) {
          case N:
          case re:
          case ne:
          case V:
            E.$type = o;
            break;
          case j:
            E.$type = o.render;
            break;
          case ie:
          case se:
            E.$type = r != null && r.type != null ? r.type : o;
            break;
          default:
            E.$type = null;
            break;
        }
      }
      function fiberToSerializedElement(e) {
        return {
          displayName: k(e) || "Anonymous",
          id: getFiberIDThrows(e),
          key: e.key,
          type: getElementTypeForFiber(e),
        };
      }
      function getOwnersList(e) {
        const t = findCurrentFiberUsingSlowPathById(e);
        if (t == null) {
          return null;
        }
        const { _debugOwner: r } = t;
        const n = [fiberToSerializedElement(t)];
        if (r) {
          let e = r;
          while (e !== null) {
            n.unshift(fiberToSerializedElement(e));
            e = e._debugOwner || null;
          }
        }
        return n;
      }
      function getInstanceAndStyle(e) {
        let t = null;
        let r = null;
        const n = findCurrentFiberUsingSlowPathById(e);
        if (n !== null) {
          t = n.stateNode;
          if (n.memoizedProps !== null) {
            r = n.memoizedProps.style;
          }
        }
        return {
          instance: t,
          style: r,
        };
      }
      function isErrorBoundary(e) {
        const { tag: t, type: r } = e;
        switch (t) {
          case N:
          case re:
            const t = e.stateNode;
            return (
              typeof r.getDerivedStateFromError === "function" ||
              (t !== null && typeof t.componentDidCatch === "function")
            );
          default:
            return false;
        }
      }
      function getNearestErrorBoundaryID(e) {
        let t = e.return;
        while (t !== null) {
          if (isErrorBoundary(t)) {
            return getFiberIDUnsafe(t);
          }
          t = t.return;
        }
        return null;
      }
      function inspectElementRaw(t) {
        const r = findCurrentFiberUsingSlowPathById(t);
        if (r == null) {
          return null;
        }
        const {
          _debugOwner: n,
          _debugSource: o,
          stateNode: i,
          key: a,
          memoizedProps: s,
          memoizedState: l,
          dependencies: c,
          tag: u,
          type: f,
        } = r;
        const p = getElementTypeForFiber(r);
        const d = (u === V || u === se || u === j) && (!!l || !!c);
        const m = !d && u !== x;
        const h = O(f);
        let g = false;
        let y = null;
        if (
          u === N ||
          u === V ||
          u === re ||
          u === ne ||
          u === ie ||
          u === j ||
          u === se
        ) {
          g = true;
          if (i && i.context != null) {
            const t = p === e && !(f.contextTypes || f.contextType);
            if (!t) {
              y = i.context;
            }
          }
        } else if (h === Ft || h === Tt) {
          const e = f._context || f;
          y = e._currentValue || null;
          let t = r.return;
          while (t !== null) {
            const r = t.type;
            const n = O(r);
            if (n === Kt || n === qt) {
              const n = r._context || r.context;
              if (n === e) {
                y = t.memoizedProps.value;
                break;
              }
            }
            t = t.return;
          }
        }
        let b = false;
        if (y !== null) {
          b = !!f.contextTypes;
          y = {
            value: y,
          };
        }
        let E = null;
        if (n) {
          E = [];
          let e = n;
          while (e !== null) {
            E.push(fiberToSerializedElement(e));
            e = e._debugOwner || null;
          }
        }
        const _ = u === le && l !== null;
        let R = null;
        if (d) {
          const e = {};
          for (const t in console) {
            try {
              e[t] = console[t];
              console[t] = () => {};
            } catch (e) {}
          }
          try {
            R = (0, Qe.inspectHooksOfFiber)(r, v.currentDispatcherRef, true);
          } finally {
            for (const t in e) {
              try {
                console[t] = e[t];
              } catch (e) {}
            }
          }
        }
        let F = null;
        let D = r;
        while (D.return !== null) {
          D = D.return;
        }
        const A = D.stateNode;
        if (A != null && A._debugRootType !== null) {
          F = A._debugRootType;
        }
        const $ = Ke.get(t) || new Map();
        const B = qe.get(t) || new Map();
        let Y = false;
        let q;
        if (isErrorBoundary(r)) {
          const e = 128;
          Y = (r.flags & e) !== 0 || At.get(t) === true;
          q = Y ? t : getNearestErrorBoundaryID(r);
        } else {
          q = getNearestErrorBoundaryID(r);
        }
        const X = {
          stylex: null,
        };
        if (ft) {
          if (s != null && s.hasOwnProperty("xstyle")) {
            X.stylex = getStyleXData(s.xstyle);
          }
        }
        return {
          id: t,
          canEditHooks: typeof ve === "function",
          canEditFunctionProps: typeof Ee === "function",
          canEditHooksAndDeletePaths: typeof Se === "function",
          canEditHooksAndRenamePaths: typeof we === "function",
          canEditFunctionPropsDeletePaths: typeof Ce === "function",
          canEditFunctionPropsRenamePaths: typeof ke === "function",
          canToggleError: $e && q != null,
          isErrored: Y,
          targetErrorBoundaryID: q,
          canToggleSuspense: ze && (!_ || Mt.has(t)),
          canViewSource: g,
          hasLegacyContext: b,
          key: a != null ? a : null,
          displayName: k(r),
          type: p,
          context: y,
          hooks: R,
          props: s,
          state: m ? l : null,
          errors: Array.from($.entries()),
          warnings: Array.from(B.entries()),
          owners: E,
          source: o || null,
          rootType: F,
          rendererPackageName: v.rendererPackageName,
          rendererVersion: v.version,
          plugins: X,
        };
      }
      let bt = null;
      let vt = false;
      let St = {};
      function isMostRecentlyInspectedElement(e) {
        return bt !== null && bt.id === e;
      }
      function isMostRecentlyInspectedElementCurrent(e) {
        return isMostRecentlyInspectedElement(e) && !vt;
      }
      function mergeInspectedPaths(e) {
        let t = St;
        e.forEach((e) => {
          if (!t[e]) {
            t[e] = {};
          }
          t = t[e];
        });
      }
      function createIsPathAllowed(e, t) {
        return function isPathAllowed(r) {
          switch (t) {
            case "hooks":
              if (r.length === 1) {
                return true;
              }
              if (
                r[r.length - 2] === "hookSource" &&
                r[r.length - 1] === "fileName"
              ) {
                return true;
              }
              if (
                r[r.length - 1] === "subHooks" ||
                r[r.length - 2] === "subHooks"
              ) {
                return true;
              }
              break;
            default:
              break;
          }
          let n = e === null ? St : St[e];
          if (!n) {
            return false;
          }
          for (let e = 0; e < r.length; e++) {
            n = n[r[e]];
            if (!n) {
              return false;
            }
          }
          return true;
        };
      }
      function updateSelectedElement(e) {
        const { hooks: t, id: r, props: n } = e;
        const o = Or.get(r);
        if (o == null) {
          console.warn(`Could not find Fiber with id "${r}"`);
          return;
        }
        const { elementType: i, stateNode: a, tag: s, type: l } = o;
        switch (s) {
          case N:
          case re:
          case ne:
            E.$r = a;
            break;
          case V:
            E.$r = {
              hooks: t,
              props: n,
              type: l,
            };
            break;
          case j:
            E.$r = {
              hooks: t,
              props: n,
              type: l.render,
            };
            break;
          case ie:
          case se:
            E.$r = {
              hooks: t,
              props: n,
              type: i != null && i.type != null ? i.type : l,
            };
            break;
          default:
            E.$r = null;
            break;
        }
      }
      function storeAsGlobal(e, t, r) {
        if (isMostRecentlyInspectedElement(e)) {
          const e = utils_getInObject(bt, t);
          const n = `$reactTemp ${r}`;
          window[n] = e;
          console.log(n);
          console.log(e);
        }
      }
      function getSerializedElementValueByPath(e, t) {
        if (isMostRecentlyInspectedElement(e)) {
          const e = utils_getInObject(bt, t);
          return serializeToString(e);
        }
      }
      function inspectElement(e, t, r, n) {
        if (r !== null) {
          mergeInspectedPaths(r);
        }
        if (isMostRecentlyInspectedElement(t) && !n) {
          if (!vt) {
            if (r !== null) {
              let n = null;
              if (r[0] === "hooks") {
                n = "hooks";
              }
              return {
                id: t,
                responseID: e,
                type: "hydrated-path",
                path: r,
                value: cleanForBridge(
                  utils_getInObject(bt, r),
                  createIsPathAllowed(null, n),
                  r
                ),
              };
            } else {
              return {
                id: t,
                responseID: e,
                type: "no-change",
              };
            }
          }
        } else {
          St = {};
        }
        vt = false;
        try {
          bt = inspectElementRaw(t);
        } catch (r) {
          if (r.name === "ReactDebugToolsRenderError") {
            let n = "Error rendering inspected element.";
            let o;
            console.error(n + "\n\n", r);
            if (r.cause != null) {
              const e = findCurrentFiberUsingSlowPathById(t);
              const i = e != null ? k(e) : null;
              console.error(
                "React DevTools encountered an error while trying to inspect hooks. " +
                  "This is most likely caused by an error in current inspected component" +
                  (i != null ? `: "${i}".` : ".") +
                  "\nThe error thrown in the component is: \n\n",
                r.cause
              );
              if (r.cause instanceof Error) {
                n = r.cause.message || n;
                o = r.cause.stack;
              }
            }
            return {
              type: "error",
              errorType: "user",
              id: t,
              responseID: e,
              message: n,
              stack: o,
            };
          }
          if (r.name === "ReactDebugToolsUnsupportedHookError") {
            return {
              type: "error",
              errorType: "unknown-hook",
              id: t,
              responseID: e,
              message:
                "Unsupported hook in the react-debug-tools package: " +
                r.message,
            };
          }
          console.error("Error inspecting element.\n\n", r);
          return {
            type: "error",
            errorType: "uncaught",
            id: t,
            responseID: e,
            message: r.message,
            stack: r.stack,
          };
        }
        if (bt === null) {
          return {
            id: t,
            responseID: e,
            type: "not-found",
          };
        }
        updateSelectedElement(bt);
        const o = {
          ...bt,
        };
        o.context = cleanForBridge(
          o.context,
          createIsPathAllowed("context", null)
        );
        o.hooks = cleanForBridge(
          o.hooks,
          createIsPathAllowed("hooks", "hooks")
        );
        o.props = cleanForBridge(o.props, createIsPathAllowed("props", null));
        o.state = cleanForBridge(o.state, createIsPathAllowed("state", null));
        return {
          id: t,
          responseID: e,
          type: "full-data",
          value: o,
        };
      }
      function logElementToConsole(e) {
        const t = isMostRecentlyInspectedElementCurrent(e)
          ? bt
          : inspectElementRaw(e);
        if (t === null) {
          console.warn(`Could not find Fiber with id "${e}"`);
          return;
        }
        const r = typeof console.groupCollapsed === "function";
        if (r) {
          console.groupCollapsed(
            `[Click to expand] %c<${t.displayName || "Component"} />`,
            "color: var(--dom-tag-name-color); font-weight: normal;"
          );
        }
        if (t.props !== null) {
          console.log("Props:", t.props);
        }
        if (t.state !== null) {
          console.log("State:", t.state);
        }
        if (t.hooks !== null) {
          console.log("Hooks:", t.hooks);
        }
        const n = findNativeNodesForFiberID(e);
        if (n !== null) {
          console.log("Nodes:", n);
        }
        if (t.source !== null) {
          console.log("Location:", t.source);
        }
        if (window.chrome || /firefox/i.test(navigator.userAgent)) {
          console.log(
            "Right-click any value to save it as a global variable for further inspection."
          );
        }
        if (r) {
          console.groupEnd();
        }
      }
      function deletePath(e, t, r, n) {
        const o = findCurrentFiberUsingSlowPathById(t);
        if (o !== null) {
          const t = o.stateNode;
          switch (e) {
            case "context":
              n = n.slice(1);
              switch (o.tag) {
                case N:
                  if (n.length === 0) {
                  } else {
                    deletePathInObject(t.context, n);
                  }
                  t.forceUpdate();
                  break;
                case V:
                  break;
              }
              break;
            case "hooks":
              if (typeof Se === "function") {
                Se(o, r, n);
              }
              break;
            case "props":
              if (t === null) {
                if (typeof Ce === "function") {
                  Ce(o, n);
                }
              } else {
                o.pendingProps = copyWithDelete(t.props, n);
                t.forceUpdate();
              }
              break;
            case "state":
              deletePathInObject(t.state, n);
              t.forceUpdate();
              break;
          }
        }
      }
      function renamePath(e, t, r, n, o) {
        const i = findCurrentFiberUsingSlowPathById(t);
        if (i !== null) {
          const t = i.stateNode;
          switch (e) {
            case "context":
              n = n.slice(1);
              o = o.slice(1);
              switch (i.tag) {
                case N:
                  if (n.length === 0) {
                  } else {
                    renamePathInObject(t.context, n, o);
                  }
                  t.forceUpdate();
                  break;
                case V:
                  break;
              }
              break;
            case "hooks":
              if (typeof we === "function") {
                we(i, r, n, o);
              }
              break;
            case "props":
              if (t === null) {
                if (typeof ke === "function") {
                  ke(i, n, o);
                }
              } else {
                i.pendingProps = copyWithRename(t.props, n, o);
                t.forceUpdate();
              }
              break;
            case "state":
              renamePathInObject(t.state, n, o);
              t.forceUpdate();
              break;
          }
        }
      }
      function overrideValueAtPath(e, t, r, n, o) {
        const i = findCurrentFiberUsingSlowPathById(t);
        if (i !== null) {
          const t = i.stateNode;
          switch (e) {
            case "context":
              n = n.slice(1);
              switch (i.tag) {
                case N:
                  if (n.length === 0) {
                    t.context = o;
                  } else {
                    utils_setInObject(t.context, n, o);
                  }
                  t.forceUpdate();
                  break;
                case V:
                  break;
              }
              break;
            case "hooks":
              if (typeof ve === "function") {
                ve(i, r, n, o);
              }
              break;
            case "props":
              switch (i.tag) {
                case N:
                  i.pendingProps = copyWithSet(t.props, n, o);
                  t.forceUpdate();
                  break;
                default:
                  if (typeof Ee === "function") {
                    Ee(i, n, o);
                  }
                  break;
              }
              break;
            case "state":
              switch (i.tag) {
                case N:
                  utils_setInObject(t.state, n, o);
                  t.forceUpdate();
                  break;
              }
              break;
          }
        }
      }
      let wt = null;
      let Et = null;
      let Ct = null;
      let _t = null;
      let kt = null;
      let Pt = false;
      let It = 0;
      let xt = false;
      let Nt = null;
      function getProfilingData() {
        const e = [];
        if (Nt === null) {
          throw Error(
            "getProfilingData() called before any profiling data was recorded"
          );
        }
        Nt.forEach((t, r) => {
          const n = [];
          const o = [];
          const i = (Et !== null && Et.get(r)) || "Unknown";
          if (_t != null) {
            _t.forEach((e, t) => {
              if (kt != null && kt.get(t) === r) {
                o.push([t, e]);
              }
            });
          }
          t.forEach((e, t) => {
            const {
              changeDescriptions: r,
              durations: o,
              effectDuration: i,
              maxActualDuration: a,
              passiveEffectDuration: s,
              priorityLevel: l,
              commitTime: c,
              updaters: u,
            } = e;
            const f = [];
            const p = [];
            for (let e = 0; e < o.length; e += 3) {
              const t = o[e];
              f.push([t, o[e + 1]]);
              p.push([t, o[e + 2]]);
            }
            n.push({
              changeDescriptions: r !== null ? Array.from(r.entries()) : null,
              duration: a,
              effectDuration: i,
              fiberActualDurations: f,
              fiberSelfDurations: p,
              passiveEffectDuration: s,
              priorityLevel: l,
              timestamp: c,
              updaters: u,
            });
          });
          e.push({
            commitData: n,
            displayName: i,
            initialTreeBaseDurations: o,
            rootID: r,
          });
        });
        let t = null;
        if (typeof Be === "function") {
          const e = Be();
          if (e) {
            const {
              batchUIDToMeasuresMap: r,
              internalModuleSourceToRanges: n,
              laneToLabelMap: o,
              laneToReactMeasureMap: i,
              ...a
            } = e;
            t = {
              ...a,
              batchUIDToMeasuresKeyValueArray: Array.from(r.entries()),
              internalModuleSourceToRanges: Array.from(n.entries()),
              laneToLabelKeyValueArray: Array.from(o.entries()),
              laneToReactMeasureKeyValueArray: Array.from(i.entries()),
            };
          }
        }
        return {
          dataForRoots: e,
          rendererID: b,
          timelineData: t,
        };
      }
      function startProfiling(e) {
        if (Pt) {
          return;
        }
        xt = e;
        Et = new Map();
        _t = new Map(rt);
        kt = new Map(nt);
        Ct = new Map();
        y.getFiberRoots(b).forEach((t) => {
          const r = getFiberIDThrows(t.current);
          Et.set(r, getDisplayNameForRoot(t.current));
          if (e) {
            crawlToInitializeContextsMap(t.current);
          }
        });
        Pt = true;
        It = _r();
        Nt = new Map();
        if (Ve !== null) {
          Ve(true);
        }
      }
      function stopProfiling() {
        Pt = false;
        xt = false;
        if (Ve !== null) {
          Ve(false);
        }
      }
      if (sessionStorageGetItem(He) === "true") {
        startProfiling(sessionStorageGetItem(je) === "true");
      }
      function shouldErrorFiberAlwaysNull() {
        return null;
      }
      const At = new Map();
      function shouldErrorFiberAccordingToMap(e) {
        if (typeof Me !== "function") {
          throw new Error(
            "Expected overrideError() to not get called for earlier React versions."
          );
        }
        const t = getFiberIDUnsafe(e);
        if (t === null) {
          return null;
        }
        let r = null;
        if (At.has(t)) {
          r = At.get(t);
          if (r === false) {
            At.delete(t);
            if (At.size === 0) {
              Me(shouldErrorFiberAlwaysNull);
            }
          }
        }
        return r;
      }
      function overrideError(e, t) {
        if (typeof Me !== "function" || typeof Ue !== "function") {
          throw new Error(
            "Expected overrideError() to not get called for earlier React versions."
          );
        }
        At.set(e, t);
        if (At.size === 1) {
          Me(shouldErrorFiberAccordingToMap);
        }
        const r = Or.get(e);
        if (r != null) {
          Ue(r);
        }
      }
      function shouldSuspendFiberAlwaysFalse() {
        return false;
      }
      const Mt = new Set();
      function shouldSuspendFiberAccordingToSet(e) {
        const t = getFiberIDUnsafe(e);
        return t !== null && Mt.has(t);
      }
      function overrideSuspense(e, t) {
        if (typeof Le !== "function" || typeof Ue !== "function") {
          throw new Error(
            "Expected overrideSuspense() to not get called for earlier React versions."
          );
        }
        if (t) {
          Mt.add(e);
          if (Mt.size === 1) {
            Le(shouldSuspendFiberAccordingToSet);
          }
        } else {
          Mt.delete(e);
          if (Mt.size === 0) {
            Le(shouldSuspendFiberAlwaysFalse);
          }
        }
        const r = Or.get(e);
        if (r != null) {
          Ue(r);
        }
      }
      let Lt = null;
      let Ut = null;
      let $t = -1;
      let zt = false;
      function setTrackedPath(e) {
        if (e === null) {
          Ut = null;
          $t = -1;
          zt = false;
        }
        Lt = e;
      }
      function updateTrackedPathStateBeforeMount(e) {
        if (Lt === null || !zt) {
          return false;
        }
        const t = e.return;
        const r = t !== null ? t.alternate : null;
        if (Ut === t || (Ut === r && r !== null)) {
          const t = getPathFrame(e);
          const r = Lt[$t + 1];
          if (r === undefined) {
            throw new Error("Expected to see a frame at the next depth.");
          }
          if (
            t.index === r.index &&
            t.key === r.key &&
            t.displayName === r.displayName
          ) {
            Ut = e;
            $t++;
            if ($t === Lt.length - 1) {
              zt = false;
            } else {
              zt = true;
            }
            return false;
          }
        }
        zt = false;
        return true;
      }
      function updateTrackedPathStateAfterMount(e) {
        zt = e;
      }
      const jt = new Map();
      const Ht = new Map();
      function setRootPseudoKey(e, t) {
        const r = getDisplayNameForRoot(t);
        const n = Ht.get(r) || 0;
        Ht.set(r, n + 1);
        const o = `${r}:${n}`;
        jt.set(e, o);
      }
      function removeRootPseudoKey(e) {
        const t = jt.get(e);
        if (t === undefined) {
          throw new Error("Expected root pseudo key to be known.");
        }
        const r = t.slice(0, t.lastIndexOf(":"));
        const n = Ht.get(r);
        if (n === undefined) {
          throw new Error("Expected counter to be known.");
        }
        if (n > 1) {
          Ht.set(r, n - 1);
        } else {
          Ht.delete(r);
        }
        jt.delete(e);
      }
      function getDisplayNameForRoot(e) {
        let t = null;
        let r = null;
        let n = e.child;
        for (let e = 0; e < 3; e++) {
          if (n === null) {
            break;
          }
          const e = k(n);
          if (e !== null) {
            if (typeof n.type === "function") {
              t = e;
            } else if (r === null) {
              r = e;
            }
          }
          if (t !== null) {
            break;
          }
          n = n.child;
        }
        return t || r || "Anonymous";
      }
      function getPathFrame(e) {
        const { key: t } = e;
        let r = k(e);
        const n = e.index;
        switch (e.tag) {
          case Y:
            const t = getFiberIDThrows(e);
            const n = jt.get(t);
            if (n === undefined) {
              throw new Error(
                "Expected mounted root to have known pseudo key."
              );
            }
            r = n;
            break;
          case ee:
            r = e.type;
            break;
          default:
            break;
        }
        return {
          displayName: r,
          key: t,
          index: n,
        };
      }
      function getPathForElement(e) {
        let t = Or.get(e);
        if (t == null) {
          return null;
        }
        const r = [];
        while (t !== null) {
          r.push(getPathFrame(t));
          t = t.return;
        }
        r.reverse();
        return r;
      }
      function getBestMatchForTrackedPath() {
        if (Lt === null) {
          return null;
        }
        if (Ut === null) {
          return null;
        }
        let e = Ut;
        while (e !== null && shouldFilterFiber(e)) {
          e = e.return;
        }
        if (e === null) {
          return null;
        }
        return {
          id: getFiberIDThrows(e),
          isFullMatch: $t === Lt.length - 1,
        };
      }
      const formatPriorityLevel = (e) => {
        if (e == null) {
          return "Unknown";
        }
        switch (e) {
          case fe:
            return "Immediate";
          case pe:
            return "User-Blocking";
          case de:
            return "Normal";
          case me:
            return "Low";
          case he:
            return "Idle";
          case ge:
          default:
            return "Unknown";
        }
      };
      function setTraceUpdatesEnabled(e) {
        et = e;
      }
      function hasFiberWithId(e) {
        return Or.has(e);
      }
      return {
        cleanup,
        clearErrorsAndWarnings,
        clearErrorsForFiberID,
        clearWarningsForFiberID,
        getSerializedElementValueByPath,
        deletePath,
        findNativeNodesForFiberID,
        flushInitialOperations,
        getBestMatchForTrackedPath,
        getDisplayNameForFiberID,
        getFiberForNative,
        getFiberIDForNative,
        getInstanceAndStyle,
        getOwnersList,
        getPathForElement,
        getProfilingData,
        handleCommitFiberRoot,
        handleCommitFiberUnmount,
        handlePostCommitFiberRoot,
        hasFiberWithId,
        inspectElement,
        logElementToConsole,
        patchConsoleForStrictMode: patchForStrictMode,
        prepareViewAttributeSource,
        prepareViewElementSource,
        overrideError,
        overrideSuspense,
        overrideValueAtPath,
        renamePath,
        renderer: v,
        setTraceUpdatesEnabled,
        setTrackedPath,
        startProfiling,
        stopProfiling,
        storeAsGlobal,
        unpatchConsoleForStrictMode: unpatchForStrictMode,
        updateComponentFilters,
      };
    }
    if (
      sessionStorageGetItem(He) === "true" &&
      !window.hasOwnProperty("__REACT_DEVTOOLS_ATTACH__")
    ) {
      Object.defineProperty(window, "__REACT_DEVTOOLS_ATTACH__", {
        enumerable: false,
        configurable: true,
        get() {
          return attach;
        },
      });
    }
  })();
})();
