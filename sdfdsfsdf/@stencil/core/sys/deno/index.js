/*! Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
 *  https://github.com/denoland/deno/blob/master/LICENSE
 *  https://deno.land/  */
function assertPath(e) {
 if ("string" != typeof e) throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`);
}

function isPosixPathSeparator(e) {
 return 47 === e;
}

function isPathSeparator(e) {
 return isPosixPathSeparator(e) || 92 === e;
}

function isWindowsDeviceRoot(e) {
 return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}

function normalizeString(e, t, r, n) {
 let o, i = "", a = 0, s = -1, l = 0;
 for (let c = 0, h = e.length; c <= h; ++c) {
  if (c < h) o = e.charCodeAt(c); else {
   if (n(o)) break;
   o = 47;
  }
  if (n(o)) {
   if (s === c - 1 || 1 === l) ; else if (s !== c - 1 && 2 === l) {
    if (i.length < 2 || 2 !== a || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
     if (i.length > 2) {
      const e = i.lastIndexOf(r);
      -1 === e ? (i = "", a = 0) : (i = i.slice(0, e), a = i.length - 1 - i.lastIndexOf(r)), 
      s = c, l = 0;
      continue;
     }
     if (2 === i.length || 1 === i.length) {
      i = "", a = 0, s = c, l = 0;
      continue;
     }
    }
    t && (i.length > 0 ? i += `${r}..` : i = "..", a = 2);
   } else i.length > 0 ? i += r + e.slice(s + 1, c) : i = e.slice(s + 1, c), a = c - s - 1;
   s = c, l = 0;
  } else 46 === o && -1 !== l ? ++l : l = -1;
 }
 return i;
}

function _format(e, t) {
 const r = t.dir || t.root, n = t.base || (t.name || "") + (t.ext || "");
 return r ? r === t.root ? r + n : r + e + n : n;
}

function assert(e, t = "") {
 if (!e) throw new DenoStdInternalError(t);
}

function resolve(...e) {
 let t = "", r = "", n = !1;
 for (let o = e.length - 1; o >= -1; o--) {
  let i;
  if (o >= 0) i = e[o]; else if (t) {
   if (null == globalThis.Deno) throw new TypeError("Resolved a relative path without a CWD.");
   i = Deno.env.get(`=${t}`) || Deno.cwd(), void 0 !== i && i.slice(0, 3).toLowerCase() === `${t.toLowerCase()}\\` || (i = `${t}\\`);
  } else {
   if (null == globalThis.Deno) throw new TypeError("Resolved a drive-letter-less path without a CWD.");
   i = Deno.cwd();
  }
  assertPath(i);
  const a = i.length;
  if (0 === a) continue;
  let s = 0, l = "", c = !1;
  const h = i.charCodeAt(0);
  if (a > 1) if (isPathSeparator(h)) if (c = !0, isPathSeparator(i.charCodeAt(1))) {
   let e = 2, t = e;
   for (;e < a && !isPathSeparator(i.charCodeAt(e)); ++e) ;
   if (e < a && e !== t) {
    const r = i.slice(t, e);
    for (t = e; e < a && isPathSeparator(i.charCodeAt(e)); ++e) ;
    if (e < a && e !== t) {
     for (t = e; e < a && !isPathSeparator(i.charCodeAt(e)); ++e) ;
     e === a ? (l = `\\\\${r}\\${i.slice(t)}`, s = e) : e !== t && (l = `\\\\${r}\\${i.slice(t, e)}`, 
     s = e);
    }
   }
  } else s = 1; else isWindowsDeviceRoot(h) && 58 === i.charCodeAt(1) && (l = i.slice(0, 2), 
  s = 2, a > 2 && isPathSeparator(i.charCodeAt(2)) && (c = !0, s = 3)); else isPathSeparator(h) && (s = 1, 
  c = !0);
  if (!(l.length > 0 && t.length > 0 && l.toLowerCase() !== t.toLowerCase()) && (0 === t.length && l.length > 0 && (t = l), 
  n || (r = `${i.slice(s)}\\${r}`, n = c), n && t.length > 0)) break;
 }
 return r = normalizeString(r, !n, "\\", isPathSeparator), t + (n ? "\\" : "") + r || ".";
}

function normalize(e) {
 assertPath(e);
 const t = e.length;
 if (0 === t) return ".";
 let r, n = 0, o = !1;
 const i = e.charCodeAt(0);
 if (t > 1) if (isPathSeparator(i)) if (o = !0, isPathSeparator(e.charCodeAt(1))) {
  let o = 2, i = o;
  for (;o < t && !isPathSeparator(e.charCodeAt(o)); ++o) ;
  if (o < t && o !== i) {
   const a = e.slice(i, o);
   for (i = o; o < t && isPathSeparator(e.charCodeAt(o)); ++o) ;
   if (o < t && o !== i) {
    for (i = o; o < t && !isPathSeparator(e.charCodeAt(o)); ++o) ;
    if (o === t) return `\\\\${a}\\${e.slice(i)}\\`;
    o !== i && (r = `\\\\${a}\\${e.slice(i, o)}`, n = o);
   }
  }
 } else n = 1; else isWindowsDeviceRoot(i) && 58 === e.charCodeAt(1) && (r = e.slice(0, 2), 
 n = 2, t > 2 && isPathSeparator(e.charCodeAt(2)) && (o = !0, n = 3)); else if (isPathSeparator(i)) return "\\";
 let a;
 return a = n < t ? normalizeString(e.slice(n), !o, "\\", isPathSeparator) : "", 
 0 !== a.length || o || (a = "."), a.length > 0 && isPathSeparator(e.charCodeAt(t - 1)) && (a += "\\"), 
 void 0 === r ? o ? a.length > 0 ? `\\${a}` : "\\" : a.length > 0 ? a : "" : o ? a.length > 0 ? `${r}\\${a}` : `${r}\\` : a.length > 0 ? r + a : r;
}

function resolve$1(...e) {
 let t = "", r = !1;
 for (let n = e.length - 1; n >= -1 && !r; n--) {
  let o;
  if (n >= 0) o = e[n]; else {
   if (null == globalThis.Deno) throw new TypeError("Resolved a relative path without a CWD.");
   o = Deno.cwd();
  }
  assertPath(o), 0 !== o.length && (t = `${o}/${t}`, r = 47 === o.charCodeAt(0));
 }
 return t = normalizeString(t, !r, "/", isPosixPathSeparator), r ? t.length > 0 ? `/${t}` : "/" : t.length > 0 ? t : ".";
}

function normalize$1(e) {
 if (assertPath(e), 0 === e.length) return ".";
 const t = 47 === e.charCodeAt(0), r = 47 === e.charCodeAt(e.length - 1);
 return 0 !== (e = normalizeString(e, !t, "/", isPosixPathSeparator)).length || t || (e = "."), 
 e.length > 0 && r && (e += "/"), t ? `/${e}` : e;
}

function globToRegExp(e, {extended: t = !1, globstar: r = !0} = {}) {
 const n = function o(e, {extended: t = !1, globstar: r = !1, strict: n = !1, filepath: i = !1, flags: a = ""} = {}) {
  function s(e, t = {
   split: !1,
   last: !1,
   only: ""
  }) {
   const {split: r, last: n, only: o} = t;
   "path" !== o && (c += e), i && "regex" !== o && (u += e.match(l) ? SEP$1 : e, r ? (n && (h += e), 
   "" !== h && (a.includes("g") || (h = `^${h}$`), d.push(new RegExp(h, a))), h = "") : h += e);
  }
  const l = new RegExp(`^${SEP$1}${n ? "" : "+"}$`);
  let c = "", h = "", u = "";
  const d = [];
  let f = !1, m = !1;
  const g = [];
  let p, y;
  for (let o = 0; o < e.length; o++) if (p = e[o], y = e[o + 1], [ "\\", "$", "^", ".", "=" ].includes(p)) s(`\\${p}`); else if (p.match(l)) s(SEP$1, {
   split: !0
  }), null != y && y.match(l) && !n && (c += "?"); else if ("(" !== p) if (")" !== p) if ("|" !== p) if ("+" !== p) if ("@" === p && t && "(" === y) g.push(p); else if ("!" !== p) if ("?" !== p) if ("[" !== p) if ("]" !== p) if ("{" !== p) if ("}" !== p) if ("," !== p) if ("*" !== p) s(p); else {
   if ("(" === y && t) {
    g.push(p);
    continue;
   }
   const n = e[o - 1];
   let i = 1;
   for (;"*" === e[o + 1]; ) i++, o++;
   const a = e[o + 1];
   r ? i > 1 && [ SEP_RAW, "/", void 0 ].includes(n) && [ SEP_RAW, "/", void 0 ].includes(a) ? (s(GLOBSTAR, {
    only: "regex"
   }), s(GLOBSTAR_SEGMENT, {
    only: "path",
    last: !0,
    split: !0
   }), o++) : (s(WILDCARD, {
    only: "regex"
   }), s(WILDCARD_SEGMENT, {
    only: "path"
   })) : s(".*");
  } else {
   if (f) {
    s("|");
    continue;
   }
   s(`\\${p}`);
  } else {
   if (t) {
    f = !1, s(")");
    continue;
   }
   s(`\\${p}`);
  } else {
   if (t) {
    f = !0, s("(?:");
    continue;
   }
   s(`\\${p}`);
  } else {
   if (t) {
    m = !1, s(p);
    continue;
   }
   s(`\\${p}`);
  } else {
   if (m && ":" === y) {
    o++;
    let t = "";
    for (;":" !== e[++o]; ) t += e[o];
    "alnum" === t ? s("(?:\\w|\\d)") : "space" === t ? s("\\s") : "digit" === t && s("\\d"), 
    o++;
    continue;
   }
   if (t) {
    m = !0, s(p);
    continue;
   }
   s(`\\${p}`);
  } else {
   if (t) {
    "(" === y ? g.push(p) : s(".");
    continue;
   }
   s(`\\${p}`);
  } else {
   if (t) {
    if (m) {
     s("^");
     continue;
    }
    if ("(" === y) {
     g.push(p), s("(?!"), o++;
     continue;
    }
    s(`\\${p}`);
    continue;
   }
   s(`\\${p}`);
  } else {
   if ("(" === y && t) {
    g.push(p);
    continue;
   }
   s(`\\${p}`);
  } else {
   if (g.length) {
    s(p);
    continue;
   }
   s(`\\${p}`);
  } else {
   if (g.length) {
    s(p);
    const e = g.pop();
    s("@" === e ? "{1}" : "!" === e ? WILDCARD : e);
    continue;
   }
   s(`\\${p}`);
  } else {
   if (g.length) {
    s(`${p}?:`);
    continue;
   }
   s(`\\${p}`);
  }
  a.includes("g") || (c = `^${c}$`, h = `^${h}$`, i && (u = `^${u}$`));
  const w = {
   regex: new RegExp(c, a)
  };
  return i && (d.push(new RegExp(h, a)), w.path = {
   regex: new RegExp(u, a),
   segments: d,
   globstar: new RegExp(a.includes("g") ? GLOBSTAR_SEGMENT : `^${GLOBSTAR_SEGMENT}$`, a)
  }), w;
 }(e, {
  extended: t,
  globstar: r,
  strict: !1,
  filepath: !0
 });
 return assert(null != n.path), n.path.regex;
}

function isGlob(e) {
 const t = {
  "{": "}",
  "(": ")",
  "[": "]"
 }, r = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
 if ("" === e) return !1;
 let n;
 for (;n = r.exec(e); ) {
  if (n[2]) return !0;
  let r = n.index + n[0].length;
  const o = n[1], i = o ? t[o] : null;
  if (o && i) {
   const t = e.indexOf(i, r);
   -1 !== t && (r = t + 1);
  }
  e = e.slice(r);
 }
 return !1;
}

function joinGlobs(e, {extended: t = !1, globstar: r = !1} = {}) {
 if (!r || 0 == e.length) return join$2(...e);
 if (0 === e.length) return ".";
 let n;
 for (const t of e) {
  const e = t;
  e.length > 0 && (n ? n += `${SEP}${e}` : n = e);
 }
 return n ? function o(e, {globstar: t = !1} = {}) {
  if (e.match(/\0/g)) throw new Error(`Glob contains invalid characters: "${e}"`);
  if (!t) return normalize$2(e);
  const r = SEP_PATTERN.source, n = new RegExp(`(?<=(${r}|^)\\*\\*${r})\\.\\.(?=${r}|$)`, "g");
  return normalize$2(e.replace(n, "\0")).replace(/\0/g, "..");
 }(n, {
  extended: t,
  globstar: r
 }) : ".";
}

function code(e, t) {
 return {
  open: `[${e.join(";")}m`,
  close: `[${t}m`,
  regexp: new RegExp(`\\x1b\\[${t}m`, "g")
 };
}

function run(e, t) {
 return enabled ? `${t.open}${e.replace(t.regexp, t.open)}${t.close}` : e;
}

async function createWalkEntry(e) {
 e = normalize$2(e);
 const t = basename$2(e), r = await Deno.stat(e);
 return {
  path: e,
  name: t,
  isFile: r.isFile,
  isDirectory: r.isDirectory,
  isSymlink: r.isSymlink
 };
}

function include(e, t, r, n) {
 return !(t && !t.some((t => e.endsWith(t))) || r && !r.some((t => !!e.match(t))) || n && n.some((t => !!e.match(t))));
}

async function* walk(e, {maxDepth: t = 1 / 0, includeFiles: r = !0, includeDirs: n = !0, followSymlinks: o = !1, exts: i, match: a, skip: s} = {}) {
 if (!(t < 0) && (n && include(e, i, a, s) && (yield await createWalkEntry(e)), !(t < 1) && include(e, void 0, void 0, s))) for await (const l of Deno.readDir(e)) {
  if (l.isSymlink) {
   if (o) throw new Error("unimplemented");
   continue;
  }
  assert(null != l.name);
  const c = join$2(e, l.name);
  l.isFile ? r && include(c, i, a, s) && (yield {
   path: c,
   ...l
  }) : yield* walk(c, {
   maxDepth: t - 1,
   includeFiles: r,
   includeDirs: n,
   followSymlinks: o,
   exts: i,
   match: a,
   skip: s
  });
 }
}

function throwUnlessNotFound(e) {
 if (!(e instanceof Deno.errors.NotFound)) throw e;
}

function comparePath(e, t) {
 return e.path < t.path ? -1 : e.path > t.path ? 1 : 0;
}

async function denoCopyTasks(e, t, r) {
 const n = {
  diagnostics: [],
  dirPaths: [],
  filePaths: []
 };
 try {
  i = await Promise.all(t.map((e => async function t(e, r) {
   return isGlob(e.src) ? await async function n(e, t) {
    const r = [];
    for await (const n of async function* n(e, {root: t = Deno.cwd(), exclude: r = [], includeDirs: o = !0, extended: i = !1, globstar: a = !1} = {}) {
     async function* s(e, t) {
      if (e.isDirectory) if (".." != t) {
       if ("**" == t) return yield* walk(e.path, {
        includeFiles: !1,
        skip: u
       });
       yield* walk(e.path, {
        maxDepth: 1,
        match: [ globToRegExp(joinGlobs([ e.path, t ], l), l) ],
        skip: u
       });
      } else {
       const t = joinGlobs([ e.path, ".." ], l);
       try {
        if ((e => !u.some((t => !!e.match(t))))(t)) return yield await createWalkEntry(t);
       } catch (e) {
        throwUnlessNotFound(e);
       }
      }
     }
     const l = {
      extended: i,
      globstar: a
     }, c = isAbsolute$2(t) ? normalize$2(t) : joinGlobs([ Deno.cwd(), t ], l), h = e => isAbsolute$2(e) ? normalize$2(e) : joinGlobs([ c, e ], l), u = r.map(h).map((e => globToRegExp(e, l))), {segments: d, hasTrailingSep: f, winRoot: m} = function g(e) {
      const t = SEP_PATTERN.source, r = e.replace(new RegExp(`^${t}|${t}$`, "g"), "").split(SEP_PATTERN), n = isAbsolute$2(e);
      return {
       segments: r,
       isAbsolute: n,
       hasTrailingSep: !!e.match(new RegExp(`${t}$`)),
       winRoot: isWindows$1 && n ? r.shift() : void 0
      };
     }(h(e));
     let p, y = null != m ? m : "/";
     for (;d.length > 0 && !isGlob(d[0]); ) {
      const e = d.shift();
      assert(null != e), y = joinGlobs([ y, e ], l);
     }
     try {
      p = await createWalkEntry(y);
     } catch (e) {
      return throwUnlessNotFound(e);
     }
     let w = [ p ];
     for (const e of d) {
      const t = new Map;
      for (const r of w) for await (const n of s(r, e)) t.set(n.path, n);
      w = [ ...t.values() ].sort(comparePath);
     }
     f && (w = w.filter((e => e.isDirectory))), o || (w = w.filter((e => !e.isDirectory))), 
     yield* w;
    }(e.src, {
     root: t
    })) {
     const o = createGlobCopyTask(e, t, n.name);
     r.push(o);
    }
    return r;
   }(e, r) : [ {
    src: getSrcAbsPath(r, e.src),
    dest: e.keepDirStructure ? join$2(e.dest, e.src) : e.dest,
    warn: e.warn,
    keepDirStructure: e.keepDirStructure
   } ];
  }(e, r)))), t = i.flat ? i.flat(1) : i.reduce(((e, t) => (e.push(...t), e)), []);
  const o = [];
  for (;t.length > 0; ) {
   const r = t.splice(0, 100);
   await Promise.all(r.map((t => processCopyTask(e, n, o, t))));
  }
  const a = function o(e) {
   const t = [];
   return e.forEach((e => {
    !function r(e, t) {
     (t = normalizePath(t)) !== ROOT_DIR && t + "/" !== ROOT_DIR && "" !== t && (e.includes(t) || e.push(t));
    }(t, dirname$2(e.dest));
   })), t.sort(((e, t) => {
    const r = e.split("/").length, n = t.split("/").length;
    return r < n ? -1 : r > n ? 1 : e < t ? -1 : e > t ? 1 : 0;
   })), t;
  }(o);
  try {
   await Promise.all(a.map((t => e.mkdir(t, {
    recursive: !0
   }))));
  } catch (e) {}
  for (;o.length > 0; ) {
   const t = o.splice(0, 100);
   await Promise.all(t.map((t => e.copyFile(t.src, t.dest))));
  }
 } catch (e) {
  catchError(n.diagnostics, e);
 }
 var i;
 return n;
}

function getSrcAbsPath(e, t) {
 return isAbsolute$2(t) ? t : join$2(e, t);
}

function createGlobCopyTask(e, t, r) {
 const n = join$2(e.dest, e.keepDirStructure ? r : basename$2(r));
 return {
  src: join$2(t, r),
  dest: n,
  warn: e.warn,
  keepDirStructure: e.keepDirStructure
 };
}

async function processCopyTask(e, t, r, n) {
 try {
  n.src = normalizePath(n.src), n.dest = normalizePath(n.dest), (await e.stat(n.src)).isDirectory ? (t.dirPaths.includes(n.dest) || t.dirPaths.push(n.dest), 
  await async function o(e, t, r, n) {
   try {
    for await (const o of e.readDir(n.src)) {
     const i = {
      src: join$2(n.src, o.name),
      dest: join$2(n.dest, o.name),
      warn: n.warn
     };
     await processCopyTask(e, t, r, i);
    }
   } catch (e) {
    catchError(t.diagnostics, e);
   }
  }(e, t, r, n)) : function i(e) {
   return e = e.trim().toLowerCase(), IGNORE.some((t => e.endsWith(t)));
  }(n.src) || (t.filePaths.includes(n.dest) || t.filePaths.push(n.dest), r.push(n));
 } catch (e) {
  !1 !== n.warn && (buildError(t.diagnostics).messageText = e.message);
 }
}

function createDenoSys(e = {}) {
 let t, r, n, o, i = null, a = new URL("../../compiler/stencil.js", import.meta.url).href;
 const s = e.Deno || globalThis.Deno, l = new Set, c = isRemoteUrl(import.meta.url), h = async (e, t, r) => {
  try {
   return void await s.stat(r);
  } catch (e) {}
  try {
   const n = await fetch(t);
   if (n.ok) {
    const e = dirname$2(r);
    try {
     await s.mkdir(e, {
      recursive: !0
     });
    } catch (e) {}
    const t = await n.clone().text(), o = new TextEncoder;
    await s.writeFile(r, o.encode(t));
   } else buildError(e).messageText = `Unable to fetch: ${t}, ${n.status}`;
  } catch (t) {
   catchError(e, t);
  }
 }, u = {
  name: "deno",
  version: s.version.deno,
  async access(e) {
   try {
    return await s.stat(e), !0;
   } catch (e) {
    return !1;
   }
  },
  accessSync(e) {
   try {
    return s.statSync(e), !0;
   } catch (e) {
    return !1;
   }
  },
  addDestory(e) {
   l.add(e);
  },
  removeDestory(e) {
   l.delete(e);
  },
  async copyFile(e, t) {
   try {
    return await s.copyFile(e, t), !0;
   } catch (e) {
    return !1;
   }
  },
  async createDir(e, t) {
   const r = {
    basename: basename$2(e),
    dirname: dirname$2(e),
    path: e,
    newDirs: [],
    error: null
   };
   try {
    await s.mkdir(e, t);
   } catch (e) {
    r.error = e;
   }
   return r;
  },
  createDirSync(e, t) {
   const r = {
    basename: basename$2(e),
    dirname: dirname$2(e),
    path: e,
    newDirs: [],
    error: null
   };
   try {
    s.mkdirSync(e, t);
   } catch (e) {
    r.error = e;
   }
   return r;
  },
  createWorkerController: e => ((e, t) => {
   let r = 0, n = !1, o = !1, i = 0;
   const a = new Map, s = [], l = [], c = Math.max(Math.min(t, e.hardwareConcurrency), 2) - 1, h = new Map, u = e => console.error(e), d = () => {
    const e = new URL("./worker.js", import.meta.url).href, t = {
     name: "stencil.worker." + i++,
     type: "module",
     deno: !0
    }, r = new Worker(e, t), o = {
     worker: r,
     activeTasks: 0,
     sendQueue: []
    };
    return r.onerror = u, r.onmessage = e => ((e, t) => {
     if (!n) {
      const r = t.data;
      if (Array.isArray(r)) for (const t of r) if (t) {
       const r = a.get(t.stencilId);
       r ? (a.delete(t.stencilId), t.stencilRtnError ? r.reject(t.stencilRtnError) : r.resolve(t.stencilRtnValue), 
       e.activeTasks--, (e.activeTasks < 0 || e.activeTasks > 50) && (e.activeTasks = 0)) : t.stencilRtnError && console.error(t.stencilRtnError);
      }
     }
    })(o, e), o;
   }, f = e => {
    e.sendQueue.length > 0 && (e.worker.postMessage(e.sendQueue), e.sendQueue.length = 0);
   }, m = e => {
    let t;
    if (l.length > 0) {
     if (t = l[0], c > 1) {
      for (const e of l) e.activeTasks < t.activeTasks && (t = e);
      t.activeTasks > 0 && l.length < c && (t = d(), l.push(t));
     }
    } else t = d(), l.push(t);
    t.activeTasks++, t.sendQueue.push(e);
   }, g = () => {
    o = !1, s.forEach(m), s.length = 0, l.forEach(f);
   }, p = (...e) => new Promise(((t, i) => {
    if (n) i(TASK_CANCELED_MSG); else {
     const n = {
      stencilId: r++,
      args: e
     };
     s.push(n), h.set(n.stencilId, Date.now()), a.set(n.stencilId, {
      resolve: t,
      reject: i
     }), o || (o = !0, queueMicrotask(g));
    }
   }));
   return {
    send: p,
    destroy: () => {
     n = !0, a.forEach((e => e.reject(TASK_CANCELED_MSG))), a.clear(), l.forEach((e => e.worker.terminate())), 
     l.length = 0;
    },
    handler: e => function(...t) {
     return p(e, ...t);
    },
    maxWorkers: c
   };
  })(u, e),
  async destroy() {
   const e = [];
   l.forEach((t => {
    try {
     const r = t();
     r && r.then && e.push(r);
    } catch (e) {
     console.error(`node sys destroy: ${e}`);
    }
   })), await Promise.all(e), l.clear();
  },
  dynamicImport: e => (c && (e = (e => (!isString(e) || isRemoteUrl(e) || isFileUrl(e) || (e = isFileUrl(e) ? new URL(e).href : (e = normalizePath(e)).startsWith("/") ? "file://" + e : "file:///" + e), 
  e))(e)), import(`${e}?2.4.0`)),
  encodeToBase64: e => Buffer.from(e).toString("base64"),
  async ensureDependencies(e) {
   const i = e.logger.createTimeSpan("ensure dependencies start", !0), s = [], l = e.dependencies.find((e => "@stencil/core" === e.name)), c = e.dependencies.find((e => "typescript" === e.name));
   r = new URL("../../compiler/stencil.js", import.meta.url).href, isRemoteUrl(r) || (r = u.getRemoteModuleUrl({
    moduleId: l.name,
    version: l.version,
    path: l.main
   })), t = new URL("../../", r), a = u.getLocalModulePath({
    rootDir: e.rootDir,
    moduleId: l.name,
    path: l.main
   }), n = u.getRemoteModuleUrl({
    moduleId: c.name,
    version: c.version,
    path: c.main
   }), o = u.getLocalModulePath({
    rootDir: e.rootDir,
    moduleId: c.name,
    path: c.main
   });
   const d = h(s, r, a), f = h(s, n, o);
   return await Promise.all([ d, f ]), u.getCompilerExecutingPath = () => a, i.finish("ensure dependencies end"), 
   {
    stencilPath: a,
    typescriptPath: o,
    diagnostics: s
   };
  },
  async ensureResources(e) {
   const r = e.dependencies.find((e => "@stencil/core" === e.name)), n = e.dependencies.find((e => "typescript" === e.name)), o = [], i = u.getLocalModulePath({
    rootDir: e.rootDir,
    moduleId: r.name,
    path: "package.json"
   }), a = u.getLocalModulePath({
    rootDir: e.rootDir,
    moduleId: n.name,
    path: "package.json"
   }), s = u.access(i), l = u.access(a), c = await s, h = await l;
   if (c || (e.logger.debug(`stencilBaseUrl: ${t.href}`), r.resources.forEach((n => {
    o.push({
     url: new URL(n, t).href,
     path: u.getLocalModulePath({
      rootDir: e.rootDir,
      moduleId: r.name,
      path: n
     })
    });
   }))), h || n.resources.forEach((t => {
    o.push({
     url: u.getRemoteModuleUrl({
      moduleId: n.name,
      version: n.version,
      path: t
     }),
     path: u.getLocalModulePath({
      rootDir: e.rootDir,
      moduleId: n.name,
      path: t
     })
    });
   })), o.length > 0) {
    console.log(o);
    const t = new Set, r = e.logger.createTimeSpan("ensure resources start", !0);
    await Promise.all(o.map((async r => {
     const n = await fetch(r.url);
     if (n.ok) {
      const e = n.text(), o = dirname$2(r.path);
      t.has(o) || (u.createDir(o, {
       recursive: !0
      }), t.add(o)), await u.writeFile(r.path, await e);
     } else e.logger.error(`unable to fetch: ${r.url}`);
    }))), r.finish(`ensure resources end: ${o.length}`);
   }
  },
  exit: async e => {
   s.exit(e);
  },
  getCompilerExecutingPath: () => a,
  getCurrentDirectory: () => normalizePath(s.cwd()),
  getEnvironmentVar: e => s.env.get(e),
  getLocalModulePath: e => join$2(e.rootDir, "node_modules", e.moduleId, e.path),
  getRemoteModuleUrl: e => {
   const t = `${e.moduleId}${e.version ? "@" + e.version : ""}/${e.path}`;
   return new URL(t, "https://cdn.jsdelivr.net/npm/").href;
  },
  glob: (e, t) => null,
  hardwareConcurrency: 0,
  async isSymbolicLink(e) {
   try {
    return (await s.stat(e)).isSymlink;
   } catch (e) {
    return !1;
   }
  },
  nextTick: queueMicrotask,
  normalizePath,
  platformPath: {
   basename: basename$2,
   dirname: dirname$2,
   extname: extname$2,
   isAbsolute: isAbsolute$2,
   join: join$2,
   normalize: normalize$2,
   parse: parse$2,
   relative: relative$2,
   resolve: resolve$2,
   sep: sep$2,
   delimiter: delimiter$2,
   posix,
   win32
  },
  async readDir(e) {
   const t = [];
   try {
    for await (const r of s.readDir(e)) t.push(join$2(e, r.name));
   } catch (e) {}
   return t;
  },
  readDirSync(e) {
   const t = [];
   try {
    for (const r of s.readDirSync(e)) t.push(join$2(e, r.name));
   } catch (e) {}
   return t;
  },
  async readFile(e, t) {
   try {
    const r = await s.readFile(e);
    return "binary" === t ? r : new TextDecoder("utf-8").decode(r);
   } catch (e) {}
  },
  readFileSync(e) {
   try {
    const t = new TextDecoder("utf-8"), r = s.readFileSync(e);
    return t.decode(r);
   } catch (e) {}
  },
  async realpath(e) {
   const t = {
    error: null,
    path: void 0
   };
   try {
    t.path = await s.realPath(e);
   } catch (e) {
    t.error = e;
   }
   return t;
  },
  realpathSync(e) {
   const t = {
    error: null,
    path: void 0
   };
   try {
    t.path = s.realPathSync(e);
   } catch (e) {
    t.error = e;
   }
   return t;
  },
  async rename(e, t) {
   const r = {
    oldPath: e,
    newPath: t,
    error: null,
    oldDirs: [],
    oldFiles: [],
    newDirs: [],
    newFiles: [],
    renamed: [],
    isFile: !1,
    isDirectory: !1
   };
   try {
    await s.rename(e, t);
   } catch (e) {
    r.error = e;
   }
   return r;
  },
  resolvePath: e => normalizePath(e),
  async removeDir(e, t) {
   const r = {
    basename: basename$2(e),
    dirname: dirname$2(e),
    path: e,
    removedDirs: [],
    removedFiles: [],
    error: null
   };
   try {
    await s.remove(e, t);
   } catch (e) {
    r.error = e;
   }
   return r;
  },
  removeDirSync(e, t) {
   const r = {
    basename: basename$2(e),
    dirname: dirname$2(e),
    path: e,
    removedDirs: [],
    removedFiles: [],
    error: null
   };
   try {
    s.removeSync(e, t);
   } catch (e) {
    r.error = e;
   }
   return r;
  },
  async removeFile(e) {
   const t = {
    basename: basename$2(e),
    dirname: dirname$2(e),
    path: e,
    error: null
   };
   try {
    await s.remove(e);
   } catch (e) {
    t.error = e;
   }
   return t;
  },
  removeFileSync(e) {
   const t = {
    basename: basename$2(e),
    dirname: dirname$2(e),
    path: e,
    error: null
   };
   try {
    s.removeSync(e);
   } catch (e) {
    t.error = e;
   }
   return t;
  },
  async stat(e) {
   try {
    const t = s.statSync(e);
    return {
     isDirectory: t.isDirectory,
     isFile: t.isFile,
     isSymbolicLink: t.isSymlink,
     size: t.size,
     mtimeMs: t.mtime.getTime(),
     error: null
    };
   } catch (e) {
    return {
     isDirectory: !1,
     isFile: !1,
     isSymbolicLink: !1,
     size: 0,
     mtimeMs: 0,
     error: e
    };
   }
  },
  statSync(e) {
   try {
    const t = s.statSync(e);
    return {
     isDirectory: t.isDirectory,
     isFile: t.isFile,
     isSymbolicLink: t.isSymlink,
     size: t.size,
     mtimeMs: t.mtime.getTime(),
     error: null
    };
   } catch (e) {
    return {
     isDirectory: !1,
     isFile: !1,
     isSymbolicLink: !1,
     size: 0,
     mtimeMs: 0,
     error: e
    };
   }
  },
  tmpDirSync: () => (null == i && (i = dirname$2(s.makeTempDirSync())), i),
  async writeFile(e, t) {
   const r = {
    path: e,
    error: null
   };
   try {
    const r = new TextEncoder;
    await s.writeFile(e, r.encode(t));
   } catch (e) {
    r.error = e;
   }
   return r;
  },
  writeFileSync(e, t) {
   const r = {
    path: e,
    error: null
   };
   try {
    const r = new TextEncoder;
    s.writeFileSync(e, r.encode(t));
   } catch (e) {
    r.error = e;
   }
   return r;
  },
  watchDirectory(e, t, r) {
   const n = s.watchFs(e, {
    recursive: r
   });
   (async () => {
    try {
     for await (const e of n) for (const r of e.paths) {
      const n = normalizePath(r);
      "create" === e.kind ? (t(n, "dirAdd"), u.events.emit("dirAdd", n)) : "modify" === e.kind ? (t(n, "fileUpdate"), 
      u.events.emit("fileUpdate", n)) : "remove" === e.kind && (t(n, "dirDelete"), u.events.emit("dirDelete", n));
     }
    } catch (e) {}
   })();
   const o = async () => {
    try {
     await n.return();
    } catch (e) {}
   };
   return u.addDestory(o), {
    close: o
   };
  },
  watchFile(e, t) {
   const r = s.watchFs(e, {
    recursive: !1
   });
   (async () => {
    try {
     for await (const e of r) for (const r of e.paths) {
      const n = normalizePath(r);
      "create" === e.kind ? (t(n, "fileAdd"), u.events.emit("fileAdd", n)) : "modify" === e.kind ? (t(n, "fileUpdate"), 
      u.events.emit("fileUpdate", n)) : "remove" === e.kind && (t(n, "fileDelete"), u.events.emit("fileDelete", n));
     }
    } catch (e) {}
   })();
   const n = async () => {
    try {
     await r.return();
    } catch (e) {}
   };
   return u.addDestory(n), {
    close: n
   };
  },
  async generateContentHash(e) {
   const t = e.length;
   if (0 === t) return "";
   let r = 0;
   for (let n = 0; n < t; n++) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
   return r < 0 && (r *= -1), r + "";
  },
  copy: (e, t) => denoCopyTasks(s, e, t),
  details: {
   cpuModel: "cpu-model",
   freemem: () => 0,
   platform: s.build.os,
   release: s.build.vendor,
   totalmem: 0
  },
  applyGlobalPatch: async e => {
   const {applyNodeCompat: t} = await import("./node-compat.js");
   t({
    fromDir: e
   });
  }
 };
 return u;
}

const createTerminalLogger = e => {
 let t = "info", r = null;
 const n = [], o = e => {
  if (e.length) {
   const t = new Date, r = "[" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + "." + Math.floor(t.getMilliseconds() / 1e3 * 10) + "]";
   e[0] = f(r) + e[0].substr(r.length);
  }
 }, i = e => {
  if (e.length) {
   const t = "[ WARN  ]";
   e[0] = d(h(t)) + e[0].substr(t.length);
  }
 }, a = e => {
  if (e.length) {
   const t = "[ ERROR ]";
   e[0] = d(c(t)) + e[0].substr(t.length);
  }
 }, s = e => {
  if (e.length) {
   const t = new Date, r = "[" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + "." + Math.floor(t.getMilliseconds() / 1e3 * 10) + "]";
   e[0] = u(r) + e[0].substr(r.length);
  }
 }, l = (t, o) => {
  if (r) {
   const r = new Date, i = ("0" + r.getHours()).slice(-2) + ":" + ("0" + r.getMinutes()).slice(-2) + ":" + ("0" + r.getSeconds()).slice(-2) + ".0" + Math.floor(r.getMilliseconds() / 1e3 * 10) + "  " + ("000" + (e.memoryUsage() / 1e6).toFixed(1)).slice(-6) + "MB  " + t + "  " + o.join(", ");
   n.push(i);
  }
 }, c = t => e.color(t, "red"), h = t => e.color(t, "yellow"), u = t => e.color(t, "cyan"), d = t => e.color(t, "bold"), f = t => e.color(t, "dim"), m = t => e.color(t, "bgRed"), g = e => LOG_LEVELS.indexOf(e) >= LOG_LEVELS.indexOf(t), p = (t, r, n) => {
  var o, i;
  let a = t.length - r + n - 1;
  for (;t.length + INDENT.length > e.getColumns(); ) if (r > t.length - r + n && r > 5) t = t.substr(1), 
  r--; else {
   if (!(a > 1)) break;
   t = t.substr(0, t.length - 1), a--;
  }
  const s = [], l = Math.max(t.length, r + n);
  for (o = 0; o < l; o++) i = t.charAt(o), o >= r && o < r + n && (i = m("" === i ? " " : i)), 
  s.push(i);
  return s.join("");
 }, y = e => e.trim().startsWith("//") ? f(e) : e.split(" ").map((e => JS_KEYWORDS.indexOf(e) > -1 ? u(e) : e)).join(" "), w = e => {
  let t = !0;
  const r = [];
  for (var n = 0; n < e.length; n++) {
   const o = e.charAt(n);
   ";" === o || "{" === o ? t = !0 : ".#,:}@$[]/*".indexOf(o) > -1 && (t = !1), t && "abcdefghijklmnopqrstuvwxyz-_".indexOf(o.toLowerCase()) > -1 ? r.push(u(o)) : r.push(o);
  }
  return r.join("");
 };
 return {
  enableColors: e.enableColors,
  emoji: e.emoji,
  getLevel: () => t,
  setLevel: e => t = e,
  debug: (...t) => {
   if (g("debug")) {
    e.memoryUsage() > 0 && t.push(f(` MEM: ${(e.memoryUsage() / 1e6).toFixed(1)}MB`));
    const r = wordWrap(t, e.getColumns());
    s(r), console.log(r.join("\n"));
   }
   l("D", t);
  },
  info: (...t) => {
   if (g("info")) {
    const r = wordWrap(t, e.getColumns());
    o(r), console.log(r.join("\n"));
   }
   l("I", t);
  },
  warn: (...t) => {
   if (g("warn")) {
    const r = wordWrap(t, e.getColumns());
    i(r), console.warn("\n" + r.join("\n") + "\n");
   }
   l("W", t);
  },
  error: (...t) => {
   for (let e = 0; e < t.length; e++) if (t[e] instanceof Error) {
    const r = t[e];
    t[e] = r.message, r.stack && (t[e] += "\n" + r.stack);
   }
   if (g("error")) {
    const r = wordWrap(t, e.getColumns());
    a(r), console.error("\n" + r.join("\n") + "\n");
   }
   l("E", t);
  },
  createTimeSpan: (t, r = !1, n) => {
   const i = Date.now(), a = () => Date.now() - i, c = {
    duration: a,
    finish: (t, i, c, h) => {
     const u = a();
     let m;
     return m = u > 1e3 ? "in " + (u / 1e3).toFixed(2) + " s" : parseFloat(u.toFixed(3)) > 0 ? "in " + u + " ms" : "in less than 1 ms", 
     ((t, r, n, i, a, c, h) => {
      let u = t;
      if (n && (u = e.color(t, n)), i && (u = d(u)), u += " " + f(r), c) {
       if (g("debug")) {
        const t = [ u ], r = e.memoryUsage();
        r > 0 && t.push(f(` MEM: ${(r / 1e6).toFixed(1)}MB`));
        const n = wordWrap(t, e.getColumns());
        s(n), console.log(n.join("\n"));
       }
       l("D", [ `${t} ${r}` ]);
      } else {
       const n = wordWrap([ u ], e.getColumns());
       o(n), console.log(n.join("\n")), l("I", [ `${t} ${r}` ]), h && h.push(`${t} ${r}`);
      }
      a && console.log("");
     })(t, m, i, c, h, r, n), u;
    }
   };
   return ((t, r, n) => {
    const i = [ `${t} ${f("...")}` ];
    if (r) {
     if (g("debug")) {
      e.memoryUsage() > 0 && i.push(f(` MEM: ${(e.memoryUsage() / 1e6).toFixed(1)}MB`));
      const r = wordWrap(i, e.getColumns());
      s(r), console.log(r.join("\n")), l("D", [ `${t} ...` ]);
     }
    } else {
     const r = wordWrap(i, e.getColumns());
     o(r), console.log(r.join("\n")), l("I", [ `${t} ...` ]), n && n.push(`${t} ...`);
    }
   })(t, r, n), c;
  },
  printDiagnostics: (r, n) => {
   if (!r || 0 === r.length) return;
   let l = [ "" ];
   r.forEach((r => {
    l = l.concat(((r, n) => {
     const l = wordWrap([ r.messageText ], e.getColumns());
     let c = "";
     r.header && "Build Error" !== r.header && (c += r.header), "string" == typeof r.absFilePath && "string" != typeof r.relFilePath && ("string" != typeof n && (n = e.cwd()), 
     r.relFilePath = e.relativePath(n, r.absFilePath), r.relFilePath.includes("/") || (r.relFilePath = "./" + r.relFilePath));
     let d = r.relFilePath;
     return "string" != typeof d && (d = r.absFilePath), "string" == typeof d && (c.length > 0 && (c += ": "), 
     c += u(d), "number" == typeof r.lineNumber && r.lineNumber > -1 && (c += f(":"), 
     c += h(`${r.lineNumber}`), "number" == typeof r.columnNumber && r.columnNumber > -1 && (c += f(":"), 
     c += h(`${r.columnNumber}`)))), c.length > 0 && l.unshift(INDENT + c), l.push(""), 
     r.lines && r.lines.length && (prepareLines(r.lines).forEach((e => {
      if (!isMeaningfulLine(e.text)) return;
      let t = "";
      for (e.lineNumber > -1 && (t = `L${e.lineNumber}:  `); t.length < INDENT.length; ) t = " " + t;
      let n = e.text;
      e.errorCharStart > -1 && (n = p(n, e.errorCharStart, e.errorLength)), t = f(t), 
      "typescript" === r.language || "javascript" === r.language ? t += y(n) : "scss" === r.language || "css" === r.language ? t += w(n) : t += n, 
      l.push(t);
     })), l.push("")), "error" === r.level ? a(l) : "warn" === r.level ? i(l) : "debug" === r.level ? s(l) : o(l), 
     null != r.debugText && "debug" === t && (l.push(r.debugText), s(wordWrap([ r.debugText ], e.getColumns()))), 
     l;
    })(r, n));
   })), console.log(l.join("\n"));
  },
  red: c,
  green: t => e.color(t, "green"),
  yellow: h,
  blue: t => e.color(t, "blue"),
  magenta: t => e.color(t, "magenta"),
  cyan: u,
  gray: t => e.color(t, "gray"),
  bold: d,
  dim: f,
  bgRed: m,
  setLogFilePath: e => r = e,
  writeLogs: t => {
   if (r) try {
    l("F", [ "--------------------------------------" ]), e.writeLogs(r, n.join("\n"), t);
   } catch (e) {}
   n.length = 0;
  }
 };
}, LOG_LEVELS = [ "debug", "info", "warn", "error" ], wordWrap = (e, t) => {
 const r = [], n = [];
 e.forEach((e => {
  null === e ? n.push("null") : void 0 === e ? n.push("undefined") : "string" == typeof e ? e.replace(/\s/gm, " ").split(" ").forEach((e => {
   e.trim().length && n.push(e.trim());
  })) : "number" == typeof e || "boolean" == typeof e || "function" == typeof e ? n.push(e.toString()) : Array.isArray(e) || Object(e) === e ? n.push((() => e.toString())) : n.push(e.toString());
 }));
 let o = INDENT;
 return n.forEach((e => {
  r.length > 25 || ("function" == typeof e ? (o.trim().length && r.push(o), r.push(e()), 
  o = INDENT) : INDENT.length + e.length > t - 1 ? (o.trim().length && r.push(o), 
  r.push(INDENT + e), o = INDENT) : e.length + o.length > t - 1 ? (r.push(o), o = INDENT + e + " ") : o += e + " ");
 })), o.trim().length && r.push(o), r.map((e => e.trimRight()));
}, prepareLines = e => {
 const t = JSON.parse(JSON.stringify(e));
 for (let e = 0; e < 100; e++) {
  if (!eachLineHasLeadingWhitespace(t)) return t;
  for (let e = 0; e < t.length; e++) if (t[e].text = t[e].text.substr(1), t[e].errorCharStart--, 
  !t[e].text.length) return t;
 }
 return t;
}, eachLineHasLeadingWhitespace = e => {
 if (!e.length) return !1;
 for (var t = 0; t < e.length; t++) {
  if (!e[t].text || e[t].text.length < 1) return !1;
  const r = e[t].text.charAt(0);
  if (" " !== r && "\t" !== r) return !1;
 }
 return !0;
}, isMeaningfulLine = e => !!e && (e = e.trim()).length > 0, JS_KEYWORDS = [ "abstract", "any", "as", "break", "boolean", "case", "catch", "class", "console", "const", "continue", "debugger", "declare", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "from", "function", "get", "if", "import", "in", "implements", "Infinity", "instanceof", "let", "module", "namespace", "NaN", "new", "number", "null", "public", "private", "protected", "require", "return", "static", "set", "string", "super", "switch", "this", "throw", "try", "true", "type", "typeof", "undefined", "var", "void", "with", "while", "yield" ], INDENT = "           ", navigator = globalThis.navigator;

let isWindows = !1;

null != globalThis.Deno ? isWindows = "windows" == Deno.build.os : null != (null == navigator ? void 0 : navigator.appVersion) && (isWindows = navigator.appVersion.includes("Win"));

class DenoStdInternalError extends Error {
 constructor(e) {
  super(e), this.name = "DenoStdInternalError";
 }
}

const _win32 = {
 __proto__: null,
 sep: "\\",
 delimiter: ";",
 resolve,
 normalize,
 isAbsolute: function isAbsolute(e) {
  assertPath(e);
  const t = e.length;
  if (0 === t) return !1;
  const r = e.charCodeAt(0);
  return !!isPathSeparator(r) || !!(isWindowsDeviceRoot(r) && t > 2 && 58 === e.charCodeAt(1) && isPathSeparator(e.charCodeAt(2)));
 },
 join: function join(...e) {
  const t = e.length;
  if (0 === t) return ".";
  let r, n = null;
  for (let o = 0; o < t; ++o) {
   const t = e[o];
   assertPath(t), t.length > 0 && (void 0 === r ? r = n = t : r += `\\${t}`);
  }
  if (void 0 === r) return ".";
  let o = !0, i = 0;
  if (assert(null != n), isPathSeparator(n.charCodeAt(0))) {
   ++i;
   const e = n.length;
   e > 1 && isPathSeparator(n.charCodeAt(1)) && (++i, e > 2 && (isPathSeparator(n.charCodeAt(2)) ? ++i : o = !1));
  }
  if (o) {
   for (;i < r.length && isPathSeparator(r.charCodeAt(i)); ++i) ;
   i >= 2 && (r = `\\${r.slice(i)}`);
  }
  return normalize(r);
 },
 relative: function relative(e, t) {
  if (assertPath(e), assertPath(t), e === t) return "";
  const r = resolve(e), n = resolve(t);
  if (r === n) return "";
  if ((e = r.toLowerCase()) === (t = n.toLowerCase())) return "";
  let o = 0, i = e.length;
  for (;o < i && 92 === e.charCodeAt(o); ++o) ;
  for (;i - 1 > o && 92 === e.charCodeAt(i - 1); --i) ;
  const a = i - o;
  let s = 0, l = t.length;
  for (;s < l && 92 === t.charCodeAt(s); ++s) ;
  for (;l - 1 > s && 92 === t.charCodeAt(l - 1); --l) ;
  const c = l - s, h = a < c ? a : c;
  let u = -1, d = 0;
  for (;d <= h; ++d) {
   if (d === h) {
    if (c > h) {
     if (92 === t.charCodeAt(s + d)) return n.slice(s + d + 1);
     if (2 === d) return n.slice(s + d);
    }
    a > h && (92 === e.charCodeAt(o + d) ? u = d : 2 === d && (u = 3));
    break;
   }
   const r = e.charCodeAt(o + d);
   if (r !== t.charCodeAt(s + d)) break;
   92 === r && (u = d);
  }
  if (d !== h && -1 === u) return n;
  let f = "";
  for (-1 === u && (u = 0), d = o + u + 1; d <= i; ++d) d !== i && 92 !== e.charCodeAt(d) || (0 === f.length ? f += ".." : f += "\\..");
  return f.length > 0 ? f + n.slice(s + u, l) : (s += u, 92 === n.charCodeAt(s) && ++s, 
  n.slice(s, l));
 },
 toNamespacedPath: function toNamespacedPath(e) {
  if ("string" != typeof e) return e;
  if (0 === e.length) return "";
  const t = resolve(e);
  if (t.length >= 3) if (92 === t.charCodeAt(0)) {
   if (92 === t.charCodeAt(1)) {
    const e = t.charCodeAt(2);
    if (63 !== e && 46 !== e) return `\\\\?\\UNC\\${t.slice(2)}`;
   }
  } else if (isWindowsDeviceRoot(t.charCodeAt(0)) && 58 === t.charCodeAt(1) && 92 === t.charCodeAt(2)) return `\\\\?\\${t}`;
  return e;
 },
 dirname: function dirname(e) {
  assertPath(e);
  const t = e.length;
  if (0 === t) return ".";
  let r = -1, n = -1, o = !0, i = 0;
  const a = e.charCodeAt(0);
  if (t > 1) if (isPathSeparator(a)) {
   if (r = i = 1, isPathSeparator(e.charCodeAt(1))) {
    let n = 2, o = n;
    for (;n < t && !isPathSeparator(e.charCodeAt(n)); ++n) ;
    if (n < t && n !== o) {
     for (o = n; n < t && isPathSeparator(e.charCodeAt(n)); ++n) ;
     if (n < t && n !== o) {
      for (o = n; n < t && !isPathSeparator(e.charCodeAt(n)); ++n) ;
      if (n === t) return e;
      n !== o && (r = i = n + 1);
     }
    }
   }
  } else isWindowsDeviceRoot(a) && 58 === e.charCodeAt(1) && (r = i = 2, t > 2 && isPathSeparator(e.charCodeAt(2)) && (r = i = 3)); else if (isPathSeparator(a)) return e;
  for (let r = t - 1; r >= i; --r) if (isPathSeparator(e.charCodeAt(r))) {
   if (!o) {
    n = r;
    break;
   }
  } else o = !1;
  if (-1 === n) {
   if (-1 === r) return ".";
   n = r;
  }
  return e.slice(0, n);
 },
 basename: function basename(e, t = "") {
  if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
  assertPath(e);
  let r, n = 0, o = -1, i = !0;
  if (e.length >= 2 && isWindowsDeviceRoot(e.charCodeAt(0)) && 58 === e.charCodeAt(1) && (n = 2), 
  void 0 !== t && t.length > 0 && t.length <= e.length) {
   if (t.length === e.length && t === e) return "";
   let a = t.length - 1, s = -1;
   for (r = e.length - 1; r >= n; --r) {
    const l = e.charCodeAt(r);
    if (isPathSeparator(l)) {
     if (!i) {
      n = r + 1;
      break;
     }
    } else -1 === s && (i = !1, s = r + 1), a >= 0 && (l === t.charCodeAt(a) ? -1 == --a && (o = r) : (a = -1, 
    o = s));
   }
   return n === o ? o = s : -1 === o && (o = e.length), e.slice(n, o);
  }
  for (r = e.length - 1; r >= n; --r) if (isPathSeparator(e.charCodeAt(r))) {
   if (!i) {
    n = r + 1;
    break;
   }
  } else -1 === o && (i = !1, o = r + 1);
  return -1 === o ? "" : e.slice(n, o);
 },
 extname: function extname(e) {
  assertPath(e);
  let t = 0, r = -1, n = 0, o = -1, i = !0, a = 0;
  e.length >= 2 && 58 === e.charCodeAt(1) && isWindowsDeviceRoot(e.charCodeAt(0)) && (t = n = 2);
  for (let s = e.length - 1; s >= t; --s) {
   const t = e.charCodeAt(s);
   if (isPathSeparator(t)) {
    if (!i) {
     n = s + 1;
     break;
    }
   } else -1 === o && (i = !1, o = s + 1), 46 === t ? -1 === r ? r = s : 1 !== a && (a = 1) : -1 !== r && (a = -1);
  }
  return -1 === r || -1 === o || 0 === a || 1 === a && r === o - 1 && r === n + 1 ? "" : e.slice(r, o);
 },
 format: function format(e) {
  if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
  return _format("\\", e);
 },
 parse: function parse(e) {
  assertPath(e);
  const t = {
   root: "",
   dir: "",
   base: "",
   ext: "",
   name: ""
  }, r = e.length;
  if (0 === r) return t;
  let n = 0, o = e.charCodeAt(0);
  if (r > 1) {
   if (isPathSeparator(o)) {
    if (n = 1, isPathSeparator(e.charCodeAt(1))) {
     let t = 2, o = t;
     for (;t < r && !isPathSeparator(e.charCodeAt(t)); ++t) ;
     if (t < r && t !== o) {
      for (o = t; t < r && isPathSeparator(e.charCodeAt(t)); ++t) ;
      if (t < r && t !== o) {
       for (o = t; t < r && !isPathSeparator(e.charCodeAt(t)); ++t) ;
       t === r ? n = t : t !== o && (n = t + 1);
      }
     }
    }
   } else if (isWindowsDeviceRoot(o) && 58 === e.charCodeAt(1)) {
    if (n = 2, !(r > 2)) return t.root = t.dir = e, t;
    if (isPathSeparator(e.charCodeAt(2))) {
     if (3 === r) return t.root = t.dir = e, t;
     n = 3;
    }
   }
  } else if (isPathSeparator(o)) return t.root = t.dir = e, t;
  n > 0 && (t.root = e.slice(0, n));
  let i = -1, a = n, s = -1, l = !0, c = e.length - 1, h = 0;
  for (;c >= n; --c) if (o = e.charCodeAt(c), isPathSeparator(o)) {
   if (!l) {
    a = c + 1;
    break;
   }
  } else -1 === s && (l = !1, s = c + 1), 46 === o ? -1 === i ? i = c : 1 !== h && (h = 1) : -1 !== i && (h = -1);
  return -1 === i || -1 === s || 0 === h || 1 === h && i === s - 1 && i === a + 1 ? -1 !== s && (t.base = t.name = e.slice(a, s)) : (t.name = e.slice(a, i), 
  t.base = e.slice(a, s), t.ext = e.slice(i, s)), t.dir = a > 0 && a !== n ? e.slice(0, a - 1) : t.root, 
  t;
 },
 fromFileUrl: function fromFileUrl(e) {
  if ("file:" != (e = e instanceof URL ? e : new URL(e)).protocol) throw new TypeError("Must be a file URL.");
  let t = decodeURIComponent(e.pathname.replace(/^\/*([A-Za-z]:)(\/|$)/, "$1/").replace(/\//g, "\\"));
  return "" != e.hostname && (t = `\\\\${e.hostname}${t}`), t;
 }
}, _posix = {
 __proto__: null,
 sep: "/",
 delimiter: ":",
 resolve: resolve$1,
 normalize: normalize$1,
 isAbsolute: function isAbsolute$1(e) {
  return assertPath(e), e.length > 0 && 47 === e.charCodeAt(0);
 },
 join: function join$1(...e) {
  if (0 === e.length) return ".";
  let t;
  for (let r = 0, n = e.length; r < n; ++r) {
   const n = e[r];
   assertPath(n), n.length > 0 && (t ? t += `/${n}` : t = n);
  }
  return t ? normalize$1(t) : ".";
 },
 relative: function relative$1(e, t) {
  if (assertPath(e), assertPath(t), e === t) return "";
  if ((e = resolve$1(e)) === (t = resolve$1(t))) return "";
  let r = 1;
  const n = e.length;
  for (;r < n && 47 === e.charCodeAt(r); ++r) ;
  const o = n - r;
  let i = 1;
  const a = t.length;
  for (;i < a && 47 === t.charCodeAt(i); ++i) ;
  const s = a - i, l = o < s ? o : s;
  let c = -1, h = 0;
  for (;h <= l; ++h) {
   if (h === l) {
    if (s > l) {
     if (47 === t.charCodeAt(i + h)) return t.slice(i + h + 1);
     if (0 === h) return t.slice(i + h);
    } else o > l && (47 === e.charCodeAt(r + h) ? c = h : 0 === h && (c = 0));
    break;
   }
   const n = e.charCodeAt(r + h);
   if (n !== t.charCodeAt(i + h)) break;
   47 === n && (c = h);
  }
  let u = "";
  for (h = r + c + 1; h <= n; ++h) h !== n && 47 !== e.charCodeAt(h) || (0 === u.length ? u += ".." : u += "/..");
  return u.length > 0 ? u + t.slice(i + c) : (i += c, 47 === t.charCodeAt(i) && ++i, 
  t.slice(i));
 },
 toNamespacedPath: function toNamespacedPath$1(e) {
  return e;
 },
 dirname: function dirname$1(e) {
  if (assertPath(e), 0 === e.length) return ".";
  const t = 47 === e.charCodeAt(0);
  let r = -1, n = !0;
  for (let t = e.length - 1; t >= 1; --t) if (47 === e.charCodeAt(t)) {
   if (!n) {
    r = t;
    break;
   }
  } else n = !1;
  return -1 === r ? t ? "/" : "." : t && 1 === r ? "//" : e.slice(0, r);
 },
 basename: function basename$1(e, t = "") {
  if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
  assertPath(e);
  let r, n = 0, o = -1, i = !0;
  if (void 0 !== t && t.length > 0 && t.length <= e.length) {
   if (t.length === e.length && t === e) return "";
   let a = t.length - 1, s = -1;
   for (r = e.length - 1; r >= 0; --r) {
    const l = e.charCodeAt(r);
    if (47 === l) {
     if (!i) {
      n = r + 1;
      break;
     }
    } else -1 === s && (i = !1, s = r + 1), a >= 0 && (l === t.charCodeAt(a) ? -1 == --a && (o = r) : (a = -1, 
    o = s));
   }
   return n === o ? o = s : -1 === o && (o = e.length), e.slice(n, o);
  }
  for (r = e.length - 1; r >= 0; --r) if (47 === e.charCodeAt(r)) {
   if (!i) {
    n = r + 1;
    break;
   }
  } else -1 === o && (i = !1, o = r + 1);
  return -1 === o ? "" : e.slice(n, o);
 },
 extname: function extname$1(e) {
  assertPath(e);
  let t = -1, r = 0, n = -1, o = !0, i = 0;
  for (let a = e.length - 1; a >= 0; --a) {
   const s = e.charCodeAt(a);
   if (47 !== s) -1 === n && (o = !1, n = a + 1), 46 === s ? -1 === t ? t = a : 1 !== i && (i = 1) : -1 !== t && (i = -1); else if (!o) {
    r = a + 1;
    break;
   }
  }
  return -1 === t || -1 === n || 0 === i || 1 === i && t === n - 1 && t === r + 1 ? "" : e.slice(t, n);
 },
 format: function format$1(e) {
  if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
  return _format("/", e);
 },
 parse: function parse$1(e) {
  assertPath(e);
  const t = {
   root: "",
   dir: "",
   base: "",
   ext: "",
   name: ""
  };
  if (0 === e.length) return t;
  const r = 47 === e.charCodeAt(0);
  let n;
  r ? (t.root = "/", n = 1) : n = 0;
  let o = -1, i = 0, a = -1, s = !0, l = e.length - 1, c = 0;
  for (;l >= n; --l) {
   const t = e.charCodeAt(l);
   if (47 !== t) -1 === a && (s = !1, a = l + 1), 46 === t ? -1 === o ? o = l : 1 !== c && (c = 1) : -1 !== o && (c = -1); else if (!s) {
    i = l + 1;
    break;
   }
  }
  return -1 === o || -1 === a || 0 === c || 1 === c && o === a - 1 && o === i + 1 ? -1 !== a && (t.base = t.name = 0 === i && r ? e.slice(1, a) : e.slice(i, a)) : (0 === i && r ? (t.name = e.slice(1, o), 
  t.base = e.slice(1, a)) : (t.name = e.slice(i, o), t.base = e.slice(i, a)), t.ext = e.slice(o, a)), 
  i > 0 ? t.dir = e.slice(0, i - 1) : r && (t.dir = "/"), t;
 },
 fromFileUrl: function fromFileUrl$1(e) {
  if ("file:" != (e = e instanceof URL ? e : new URL(e)).protocol) throw new TypeError("Must be a file URL.");
  return decodeURIComponent(e.pathname);
 }
}, SEP = isWindows ? "\\" : "/", SEP_PATTERN = isWindows ? /[\\/]+/ : /\/+/, SEP$1 = isWindows ? "(?:\\\\|\\/)" : "\\/", SEP_ESC = isWindows ? "\\\\" : "/", SEP_RAW = isWindows ? "\\" : "/", GLOBSTAR = `(?:(?:[^${SEP_ESC}/]*(?:${SEP_ESC}|/|$))*)`, WILDCARD = `(?:[^${SEP_ESC}/]*)`, GLOBSTAR_SEGMENT = `((?:[^${SEP_ESC}/]*(?:${SEP_ESC}|/|$))*)`, WILDCARD_SEGMENT = `(?:[^${SEP_ESC}/]*)`, path = isWindows ? _win32 : _posix, win32 = _win32, posix = _posix, {basename: basename$2, delimiter: delimiter$2, dirname: dirname$2, extname: extname$2, format: format$2, fromFileUrl: fromFileUrl$2, isAbsolute: isAbsolute$2, join: join$2, normalize: normalize$2, parse: parse$2, relative: relative$2, resolve: resolve$2, sep: sep$2, toNamespacedPath: toNamespacedPath$2} = path;

var _a, _b;

let enabled = !(null === (_b = null === (_a = globalThis.Deno) || void 0 === _a ? void 0 : _a.noColor) || void 0 === _b || _b);

const isWindows$1 = "windows" == Deno.build.os, createDenoLogger = e => {
 let t = !0;
 const r = e.Deno;
 return createTerminalLogger({
  color: (e, n) => {
   if (t && !r.noColor) switch (n) {
   case "bgRed":
    return function o(e) {
     return run(e, code([ 41 ], 49));
    }(e);

   case "blue":
    return function i(e) {
     return run(e, code([ 34 ], 39));
    }(e);

   case "bold":
    return function a(e) {
     return run(e, code([ 1 ], 22));
    }(e);

   case "cyan":
    return function s(e) {
     return run(e, code([ 36 ], 39));
    }(e);

   case "dim":
    return function l(e) {
     return run(e, code([ 2 ], 22));
    }(e);

   case "gray":
    return function c(e) {
     return run(e, code([ 90 ], 39));
    }(e);

   case "green":
    return function h(e) {
     return run(e, code([ 32 ], 39));
    }(e);

   case "magenta":
    return function u(e) {
     return run(e, code([ 35 ], 39));
    }(e);

   case "red":
    return function d(e) {
     return run(e, code([ 31 ], 39));
    }(e);

   case "yellow":
    return function f(e) {
     return run(e, code([ 33 ], 39));
    }(e);
   }
   return e;
  },
  cwd: () => r.cwd(),
  emoji: e => "windows" !== r.build.os ? e : "",
  enableColors: e => t = e,
  getColumns: () => {
   const e = r.stdout && r.stdout.columns || 80;
   return Math.max(Math.min(120, e), 60);
  },
  memoryUsage: () => -1,
  relativePath: (e, t) => t,
  writeLogs: (e, t, n) => {
   const o = (new TextEncoder).encode(t);
   r.writeFileSync(e, o, {
    append: n
   });
  }
 });
}, isString = e => "string" == typeof e, buildError = e => {
 const t = {
  level: "error",
  type: "build",
  header: "Build Error",
  messageText: "build error",
  relFilePath: null,
  absFilePath: null,
  lines: []
 };
 return e && e.push(t), t;
}, catchError = (e, t, r) => {
 const n = {
  level: "error",
  type: "build",
  header: "Build Error",
  messageText: "build error",
  relFilePath: null,
  absFilePath: null,
  lines: []
 };
 return isString(r) ? n.messageText = r : null != t && (null != t.stack ? n.messageText = t.stack.toString() : null != t.message ? n.messageText = t.message.toString() : n.messageText = t.toString()), 
 null == e || shouldIgnoreError(n.messageText) || e.push(n), n;
}, shouldIgnoreError = e => e === TASK_CANCELED_MSG, TASK_CANCELED_MSG = "task canceled", normalizePath = e => {
 if ("string" != typeof e) throw new Error("invalid path to normalize");
 e = normalizeSlashes(e.trim());
 const t = pathComponents(e, getRootLength(e)), r = reducePathComponents(t), n = r[0], o = r[1], i = n + r.slice(1).join("/");
 return "" === i ? "." : "" === n && o && e.includes("/") && !o.startsWith(".") && !o.startsWith("@") ? "./" + i : i;
}, normalizeSlashes = e => e.replace(backslashRegExp, "/"), backslashRegExp = /\\/g, reducePathComponents = e => {
 if (!Array.isArray(e) || 0 === e.length) return [];
 const t = [ e[0] ];
 for (let r = 1; r < e.length; r++) {
  const n = e[r];
  if (n && "." !== n) {
   if (".." === n) if (t.length > 1) {
    if (".." !== t[t.length - 1]) {
     t.pop();
     continue;
    }
   } else if (t[0]) continue;
   t.push(n);
  }
 }
 return t;
}, getRootLength = e => {
 const t = getEncodedRootLength(e);
 return t < 0 ? ~t : t;
}, getEncodedRootLength = e => {
 if (!e) return 0;
 const t = e.charCodeAt(0);
 if (47 === t || 92 === t) {
  if (e.charCodeAt(1) !== t) return 1;
  const r = e.indexOf(47 === t ? "/" : "\\", 2);
  return r < 0 ? e.length : r + 1;
 }
 if (isVolumeCharacter(t) && 58 === e.charCodeAt(1)) {
  const t = e.charCodeAt(2);
  if (47 === t || 92 === t) return 3;
  if (2 === e.length) return 2;
 }
 const r = e.indexOf("://");
 if (-1 !== r) {
  const t = r + "://".length, n = e.indexOf("/", t);
  if (-1 !== n) {
   const o = e.slice(0, r), i = e.slice(t, n);
   if ("file" === o && ("" === i || "localhost" === i) && isVolumeCharacter(e.charCodeAt(n + 1))) {
    const t = getFileUrlVolumeSeparatorEnd(e, n + 2);
    if (-1 !== t) {
     if (47 === e.charCodeAt(t)) return ~(t + 1);
     if (t === e.length) return ~t;
    }
   }
   return ~(n + 1);
  }
  return ~e.length;
 }
 return 0;
}, isVolumeCharacter = e => e >= 97 && e <= 122 || e >= 65 && e <= 90, getFileUrlVolumeSeparatorEnd = (e, t) => {
 const r = e.charCodeAt(t);
 if (58 === r) return t + 1;
 if (37 === r && 51 === e.charCodeAt(t + 1)) {
  const r = e.charCodeAt(t + 2);
  if (97 === r || 65 === r) return t + 3;
 }
 return -1;
}, pathComponents = (e, t) => {
 const r = e.substring(0, t), n = e.substring(t).split("/"), o = n.length;
 return o > 0 && !n[o - 1] && n.pop(), [ r, ...n ];
}, isRemoteUrl = e => !!isString(e) && ((e = e.toLowerCase()).startsWith("https://") || e.startsWith("http://")), isFileUrl = e => !!isString(e) && e.toLowerCase().startsWith("file:/"), ROOT_DIR = normalizePath(resolve$2("/")), IGNORE = [ ".ds_store", ".gitignore", "desktop.ini", "thumbs.db" ];

export { createDenoLogger, createDenoSys };