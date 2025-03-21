// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"56AJI":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f3e508fdb828852a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lhpGb":[function(require,module,exports,__globalThis) {
var _cskTeamJs = require("./cskTeam.js");
var _kkrTeamJs = require("./kkrTeam.js");
var _gtTeamJs = require("./gtTeam.js");
var _lsgTeamJs = require("./lsgTeam.js");
var _rrTeamJs = require("./rrTeam.js");
var _miTeamJs = require("./miTeam.js");
var _rcbTeamJs = require("./rcbTeam.js");
var _pbksTeamJs = require("./pbksTeam.js");
var _dcTeamJs = require("./dcTeam.js");
var _srhTeamJs = require("./srhTeam.js");
const teamsMap = {
    'Chennai Super Kings': (0, _cskTeamJs.CSK),
    'Kolkata Knight Riders': (0, _kkrTeamJs.KKR),
    'Mumbai Indians': (0, _miTeamJs.MI),
    'Royal Challengers Bangalore': (0, _rcbTeamJs.RCB),
    'Punjab Kings': (0, _pbksTeamJs.PBKS),
    'Delhi Capitals': (0, _dcTeamJs.DC),
    'Sunrisers Hyderabad': (0, _srhTeamJs.SRH),
    'Rajasthan Royals': (0, _rrTeamJs.RR),
    'Gujarat Titans': (0, _gtTeamJs.GT),
    'Lucknow Super Giants': (0, _lsgTeamJs.LSG)
};
const teamImages = document.querySelectorAll('.teams img');
teamImages.forEach((image)=>{
    image.addEventListener('click', ()=>{
        const teamClass = teamsMap[image.alt];
        if (teamClass) {
            const team = new teamClass();
            team.displayTeamDetails();
        } else console.log('Team not found');
    });
});
//  GSAP timeline
const tl = gsap.timeline();
tl.from('.logo img', {
    opacity: 0,
    scale: 5,
    z: -1000,
    duration: 2,
    ease: 'power3.out',
    delay: 0.5,
    rotationX: 90,
    rotationY: 90
}).from('.teams img', {
    opacity: 0,
    y: 50,
    scale: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.1
}).to('.background', {
    scale: 1.1,
    duration: 5,
    ease: 'power3.inOut',
    repeat: -1,
    yoyo: true
});

},{"./cskTeam.js":"2P1b1","./kkrTeam.js":"bbsBT","./miTeam.js":"bbBQr","./rcbTeam.js":"7znpZ","./pbksTeam.js":"7NvmE","./dcTeam.js":"awUeN","./gtTeam.js":"ixFnz","./lsgTeam.js":"5CCCm","./rrTeam.js":"2WEnT","./srhTeam.js":"gV2DV"}],"2P1b1":[function(require,module,exports,__globalThis) {
// cskTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSK", ()=>CSK);
var _teamJs = require("./team.js");
class CSK extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/csk-bg.png', 'Chennai Super Kings', 'Ruturaj Gaikwad', [
            {
                thumb: '../images/csk/rg.png',
                name: 'Ruturaj Gaikwad',
                role: 'Captain/Batsman',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/csk/Devon-conway.png',
                name: 'Devon Conway',
                role: 'Batsman',
                country: 'New Zealand',
                age: 32
            },
            {
                thumb: '../images/csk/ms.png',
                name: 'MS Dhoni',
                role: 'Batsman',
                country: 'India',
                age: 40
            },
            {
                thumb: '../images/csk/rachin.png',
                name: 'Rachin Ravindra',
                role: 'Batsman',
                country: 'New Zealand',
                age: 31
            },
            {
                thumb: '../images/csk/khaleel.png',
                name: 'Khaleel Ahmed',
                role: 'Bowler',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/csk/rana.png',
                name: 'Pathirana',
                role: 'Bowler',
                country: 'Sri Lanka',
                age: 24
            },
            {
                thumb: '../images/csk/mukesh.png',
                name: 'Mukesh Choudhary',
                role: 'Bowler',
                country: 'India',
                age: 24
            },
            {
                thumb: '../images/csk/bapu.png',
                name: 'Ravindra Jadeja',
                role: 'All-Rounder',
                country: 'India',
                age: 36
            },
            {
                thumb: '../images/csk/sam.png',
                name: 'Sam Curran',
                role: 'All-Rounder',
                country: 'England',
                age: 24
            },
            {
                thumb: '../images/csk/dube.png',
                name: 'Shivam Dube',
                role: 'All-Rounder',
                country: 'India',
                age: 27
            },
            {
                thumb: '../images/csk/ashwin.png',
                name: 'Ashwin',
                role: 'All-Rounder',
                country: 'India',
                age: 37
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eQpRv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Team", ()=>Team);
class Team {
    constructor(backgroundImage, name, captain, players){
        this.backgroundImage = backgroundImage;
        this.name = name;
        this.captain = captain;
        this.players = players;
    }
    displayTeamDetails() {
        console.log('Background Image:', this.backgroundImage);
        const teamInfo = `
            <div class="team-container">
                <h1 class="team-name">${this.name}</h1>
                <div class="team-background" style="background-image: url('${this.backgroundImage}')">
                    <h2 class="team-captain">Captain: ${this.captain}</h2>
                    <ul class="player-list">
                        ${this.players.map((player)=>`
                            <li class="player-card">
                                <img src="${player.thumb}" alt="${player.name}" class="player-image"/>
                                <div class="player-info">
                                    <p class="player-name">${player.name}</p>
                                    <p class="player-role">${player.role}</p>
                                    <p class="player-country">${player.country}</p>
                                    <p class="player-age">Age: ${player.age}</p>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                    <!-- Back to Home Button -->
                    <button class="back-button">Back to Home</button>
                </div>
            </div>
        `;
        document.body.innerHTML = teamInfo;
        const backButton = document.querySelector('.back-button');
        if (backButton) backButton.addEventListener('click', ()=>{
            window.location.href = 'index.html';
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bbsBT":[function(require,module,exports,__globalThis) {
// kkrTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KKR", ()=>KKR);
var _teamJs = require("./team.js");
class KKR extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/kkr-bg.png', 'Kolkata Knight Riders', 'Ajinkya Rahane', [
            {
                thumb: '../images/kkr/ar.png',
                name: 'Ajinkya Rahane',
                role: 'Captain/Batsman',
                country: 'India',
                age: 33
            },
            {
                thumb: '../images/kkr/cock.png',
                name: 'Quinton de Kock',
                role: 'Batsman',
                country: 'South Africa',
                age: 36
            },
            {
                thumb: '../images/kkr/manish.png',
                name: 'Manish Pandey',
                role: 'Batsman',
                country: 'India',
                age: 34
            },
            {
                thumb: '../images/kkr/iyer.png',
                name: 'Venkatesh Iyer',
                role: 'Batsman',
                country: 'India',
                age: 26
            },
            {
                thumb: '../images/kkr/andre.png',
                name: 'Andre Russell',
                role: 'All Rounder',
                country: 'West Indies',
                age: 34
            },
            {
                thumb: '../images/kkr/sunil.png',
                name: 'Sunil Narine',
                role: 'All Rounder',
                country: 'West Indies',
                age: 35
            },
            {
                thumb: '../images/kkr/rinku.png',
                name: 'Rinku Singh',
                role: 'All Rounder',
                country: 'India',
                age: 24
            },
            {
                thumb: '../images/kkr/ali.png',
                name: 'Moeen Ali',
                role: 'All Rounder',
                country: 'England',
                age: 33
            },
            {
                thumb: '../images/kkr/varun.png',
                name: 'Varun',
                role: 'Bowler',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/kkr/rana.png',
                name: 'Harshit Rana',
                role: 'Bowler',
                country: 'India',
                age: 26
            },
            {
                thumb: '../images/kkr/anrich.png',
                name: 'Anrich Nortje',
                role: 'Bowler',
                country: 'South Africa',
                age: 31
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bbBQr":[function(require,module,exports,__globalThis) {
// miTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MI", ()=>MI);
var _teamJs = require("./team.js");
class MI extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/mi-bg.png', 'Mumbai Indians', 'Hardik Pandya', [
            {
                thumb: '../images/mi/hr.png',
                name: 'Hardik Pandya',
                role: 'Captain/All Rounder',
                country: 'India',
                age: 30
            },
            {
                thumb: '../images/mi/rs.png',
                name: 'Rohit Sharma',
                role: 'Batsman',
                country: 'India',
                age: 37
            },
            {
                thumb: '../images/mi/tv.png',
                name: 'Tilak Verma',
                role: 'Batsman',
                country: 'India',
                age: 26
            },
            {
                thumb: '../images/mi/sy.png',
                name: 'Suryakumar Yadav',
                role: 'Batsman',
                country: 'India',
                age: 33
            },
            {
                thumb: '../images/mi/wj.png',
                name: 'Will Jacks',
                role: 'Batsman',
                country: 'England',
                age: 28
            },
            {
                thumb: '../images/mi/rr.png',
                name: 'Ryan Rickleton',
                role: 'Batsman',
                country: 'South Africa',
                age: 28
            },
            {
                thumb: '../images/mi/san.png',
                name: 'Mitchell Santner',
                role: 'All Rounder',
                country: 'New Zealand',
                age: 32
            },
            {
                thumb: '../images/mi/deepak.png',
                name: 'Deepak Chahar',
                role: 'All Rounder',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/mi/jas.png',
                name: 'Jasprit Bumrah',
                role: 'Bowler',
                country: 'India',
                age: 29
            },
            {
                thumb: '../images/mi/tb.png',
                name: 'Trent Boult',
                role: 'Bowler',
                country: 'New Zealand',
                age: 33
            },
            {
                thumb: '../images/mi/karn.png',
                name: 'Karn Sharma',
                role: 'Bowler',
                country: 'India',
                age: 31
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7znpZ":[function(require,module,exports,__globalThis) {
// rcbTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RCB", ()=>RCB);
var _teamJs = require("./team.js");
class RCB extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/rcb-bg.png', 'Royal Challengers Bangalore', 'Rajat Patidar', [
            {
                thumb: '../images/rcb/rp.png',
                name: 'Rajat Patidar',
                role: 'Captain/Batsman',
                country: 'India',
                age: 26
            },
            {
                thumb: '../images/rcb/vk.png',
                name: 'Virat Kohli',
                role: 'Batsman',
                country: 'India',
                age: 36
            },
            {
                thumb: '../images/rcb/dp.png',
                name: 'Devdutt Padikkal',
                role: 'Batsman',
                country: 'India',
                age: 26
            },
            {
                thumb: '../images/rcb/ps.png',
                name: 'Phil Salt',
                role: 'Batsman',
                country: 'England',
                age: 28
            },
            {
                thumb: '../images/rcb/js.png',
                name: 'Jitesh Sharma',
                role: 'Batsman',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/rcb/td.png',
                name: 'Tim David',
                role: 'All Rounder',
                country: 'Australia',
                age: 28
            },
            {
                thumb: '../images/rcb/ll.png',
                name: 'Liam Livingstone',
                role: 'All Rounder',
                country: 'England',
                age: 29
            },
            {
                thumb: '../images/rcb/kp.png',
                name: 'Krunal Pandya',
                role: 'All Rounder',
                country: 'India',
                age: 30
            },
            {
                thumb: '../images/rcb/jh.png',
                name: 'Josh Hazelwood',
                role: 'Bowler',
                country: 'Australia',
                age: 30
            },
            {
                thumb: '../images/rcb/yd.png',
                name: 'Yash Dayal',
                role: 'Bowler',
                country: 'India',
                age: 27
            },
            {
                thumb: '../images/rcb/bhuvi.png',
                name: 'Bhuvi',
                role: 'Bowler',
                country: 'India',
                age: 32
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7NvmE":[function(require,module,exports,__globalThis) {
// pbksTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PBKS", ()=>PBKS);
var _teamJs = require("./team.js");
class PBKS extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/pbks-bg.png', 'Punjab Kings', 'Shreyas Iyer', [
            {
                thumb: '../images/pbks/si.png',
                name: 'Shreyas Iyer',
                role: 'Captain/Batsman',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/pbks/ji.png',
                name: 'Josh Inglis',
                role: 'Batsman',
                country: 'Australia',
                age: 29
            },
            {
                thumb: '../images/pbks/ps.png',
                name: 'Prabhsimran Singh',
                role: 'Batsman',
                country: 'India',
                age: 26
            },
            {
                thumb: '../images/pbks/nw.png',
                name: 'Nehal Wadhera',
                role: 'Batsman',
                country: 'India',
                age: 24
            },
            {
                thumb: '../images/pbks/ms.png',
                name: 'Marcus Stoinis',
                role: 'All-Rounder',
                country: 'Australia',
                age: 34
            },
            {
                thumb: '../images/pbks/gm.png',
                name: 'Glenn Maxwell',
                role: 'All-Rounder',
                country: 'Australia',
                age: 34
            },
            {
                thumb: '../images/pbks/mj.png',
                name: 'Marco Jansen',
                role: 'All-Rounder',
                country: 'South Africa',
                age: 29
            },
            {
                thumb: '../images/pbks/yc.png',
                name: 'Yuzvendra Chahal',
                role: 'Bowler',
                country: 'India',
                age: 30
            },
            {
                thumb: '../images/pbks/hb.png',
                name: 'Harpreet Brar',
                role: 'Bowler',
                country: 'India',
                age: 25
            },
            {
                thumb: '../images/pbks/lf.png',
                name: 'Lockie Ferguson',
                role: 'Bowler',
                country: 'New Zealand',
                age: 32
            },
            {
                thumb: '../images/pbks/as.png',
                name: 'Arshdeep Singh',
                role: 'Bowler',
                country: 'India',
                age: 26
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"awUeN":[function(require,module,exports,__globalThis) {
// dcTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DC", ()=>DC);
var _teamJs = require("./team.js");
class DC extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/dc-bg.png', 'Delhi Capitals', 'Axar Patel', [
            {
                thumb: '../images/dc/patel.png',
                name: 'Axar Patel',
                role: 'Captain/All Rounder',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/dc/faf.png',
                name: 'Faf du Plessis',
                role: 'Batsman',
                country: 'South Africa',
                age: 35
            },
            {
                thumb: '../images/dc/jake.png',
                name: 'Jake',
                role: 'Batsman',
                country: 'Australia',
                age: 23
            },
            {
                thumb: '../images/dc/nair.png',
                name: 'Karun Nair',
                role: 'Batsman',
                country: 'India',
                age: 35
            },
            {
                thumb: '../images/dc/kl.png',
                name: 'KL Rahul',
                role: 'Batsman',
                country: 'India',
                age: 29
            },
            {
                thumb: '../images/dc/stubbs.png',
                name: 'Tristan Stubbs',
                role: 'Batsman',
                country: 'Australia',
                age: 27
            },
            {
                thumb: '../images/dc/kumar.png',
                name: 'Mukesh Kumar',
                role: 'Bowler',
                country: 'India',
                age: 31
            },
            {
                thumb: '../images/dc/yadav.png',
                name: 'Kuldeep Yadav',
                role: 'Bowler',
                country: 'India',
                age: 27
            },
            {
                thumb: '../images/dc/starc.png',
                name: 'Starc',
                role: 'Bowler',
                country: 'Australia',
                age: 34
            },
            {
                thumb: '../images/dc/raj.png',
                name: 'Natarajan',
                role: 'Bowler',
                country: 'India',
                age: 30
            },
            {
                thumb: '../images/dc/mohit.png',
                name: 'Mohit Kumar',
                role: 'Bowler',
                country: 'India',
                age: 35
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ixFnz":[function(require,module,exports,__globalThis) {
// gtTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GT", ()=>GT);
var _teamJs = require("./team.js");
class GT extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/gt-bg.png', 'Gujarat Titans', 'Shubman Gill', [
            {
                thumb: '../images/gt/gill.png',
                name: 'Shubman Gill',
                role: 'Captain / Batsman',
                country: 'India',
                age: 24
            },
            {
                thumb: '../images/gt/rawat.png',
                name: 'Anuj Rawat',
                role: 'Batsman',
                country: 'India',
                age: 25
            },
            {
                thumb: '../images/gt/joss.png',
                name: 'Jos Buttler',
                role: 'Batsman',
                country: 'England',
                age: 32
            },
            {
                thumb: '../images/gt/khan.png',
                name: 'Rashid Khan',
                role: 'All Rounder',
                country: 'Afghanistan',
                age: 24
            },
            {
                thumb: '../images/gt/rahul.png',
                name: 'Rahul Tewatia',
                role: 'All Rounder',
                country: 'India',
                age: 29
            },
            {
                thumb: '../images/gt/sunder.png',
                name: 'Washington Sundar',
                role: 'All Rounder',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/gt/glenn.png',
                name: 'Glenn Phillips',
                role: 'All Rounder',
                country: 'New Zealand',
                age: 30
            },
            {
                thumb: '../images/gt/rabada.png',
                name: 'Kagiso Rabada',
                role: 'Bowler',
                country: 'South Africa',
                age: 29
            },
            {
                thumb: '../images/gt/ishant.png',
                name: 'Ishant Sharma',
                role: 'Bowler',
                country: 'India',
                age: 35
            },
            {
                thumb: '../images/gt/pb.png',
                name: 'Prasidh Krishna',
                role: 'Bowler',
                country: 'India',
                age: 27
            },
            {
                thumb: '../images/gt/siraj.png',
                name: 'Mohammed Siraj',
                role: 'Bowler',
                country: 'India',
                age: 28
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5CCCm":[function(require,module,exports,__globalThis) {
// lsgTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LSG", ()=>LSG);
var _teamJs = require("./team.js");
class LSG extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/lsg-bg.png', 'Lucknow Super Giants', 'Rishabh Pant', [
            {
                thumb: '../images/lsg/pant.png',
                name: 'Rishabh Pant',
                role: 'Captain/Batsman',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/lsg/aiden.png',
                name: 'Aiden Markram',
                role: 'Batsman',
                country: 'India',
                age: 32
            },
            {
                thumb: '../images/lsg/david.png',
                name: 'David Miller',
                role: 'Batsman',
                country: 'India',
                age: 33
            },
            {
                thumb: '../images/lsg/ayush.png',
                name: 'Ayush Badoni',
                role: 'Batsman',
                country: 'India',
                age: 21
            },
            {
                thumb: '../images/lsg/pooran.png',
                name: 'Nicholas Pooran',
                role: 'Batsman',
                country: 'West Indies',
                age: 31
            },
            {
                thumb: '../images/lsg/ravi.png',
                name: 'Ravi Bishnoi',
                role: 'Bowler',
                country: 'India',
                age: 25
            },
            {
                thumb: '../images/lsg/khan.png',
                name: 'Avesh Khan',
                role: 'Bowler',
                country: 'India',
                age: 27
            },
            {
                thumb: '../images/lsg/yadav.png',
                name: 'Mayank Yadav',
                role: 'Bowler',
                country: 'India',
                age: 25
            },
            {
                thumb: '../images/lsg/marsh.png',
                name: 'Mitchell Marsh',
                role: 'All Rounder',
                country: 'Australia',
                age: 34
            },
            {
                thumb: '../images/lsg/deep.png',
                name: 'Akash Deep',
                role: 'All Rounder',
                country: 'India',
                age: 32
            },
            {
                thumb: '../images/lsg/ahmed.png',
                name: 'Shabaz Ahmed',
                role: 'All Rounder',
                country: 'India',
                age: 26
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2WEnT":[function(require,module,exports,__globalThis) {
// rrTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RR", ()=>RR);
var _teamJs = require("./team.js");
class RR extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/rr-bg.png', 'Rajasthan Royals', 'Sanju Samson', [
            {
                thumb: '../images/rr/sanju.png',
                name: 'Sanju Samson',
                role: 'Captain/Batsman',
                country: 'India',
                age: 32
            },
            {
                thumb: '../images/rr/dr.png',
                name: 'Dhruv Jurel',
                role: 'Batsman',
                country: 'India',
                age: 24
            },
            {
                thumb: '../images/rr/sh.png',
                name: 'Shimron Hetmyer',
                role: 'Batsman',
                country: 'West Indies',
                age: 28
            },
            {
                thumb: '../images/rr/nr.png',
                name: 'Nitish Rana',
                role: 'Batsman',
                country: 'India',
                age: 29
            },
            {
                thumb: '../images/rr/rp.png',
                name: 'Riyan Parag',
                role: 'Batsman',
                country: 'India',
                age: 24
            },
            {
                thumb: '../images/rr/yj.png',
                name: 'Yashasvi Jaiswal',
                role: 'Batsman',
                country: 'India',
                age: 22
            },
            {
                thumb: '../images/rr/hs.png',
                name: 'Hasaranga',
                role: 'All Rounder',
                country: 'Sri Lanka',
                age: 27
            },
            {
                thumb: '../images/rr/mah.png',
                name: 'Maheesh',
                role: 'Bowler',
                country: 'Sri Lanka',
                age: 28
            },
            {
                thumb: '../images/rr/ja.png',
                name: 'Jofra Archer',
                role: 'Bowler',
                country: 'England',
                age: 32
            },
            {
                thumb: '../images/rr/ts.png',
                name: 'Tushar',
                role: 'Bowler',
                country: 'India',
                age: 27
            },
            {
                thumb: '../images/rr/ss.png',
                name: 'Sandeep Sharma',
                role: 'Bowler',
                country: 'India',
                age: 35
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gV2DV":[function(require,module,exports,__globalThis) {
// srhTeam.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SRH", ()=>SRH);
var _teamJs = require("./team.js");
class SRH extends (0, _teamJs.Team) {
    constructor(){
        super('../images/bg/srh-bg.png', 'Sunrisers Hyderabad', 'Pat Cummins', [
            {
                thumb: '../images/srh/pc.png',
                name: 'Pat Cummins',
                role: 'All Rounder / Captain',
                country: 'Australia',
                age: 34
            },
            {
                thumb: '../images/srh/ik.png',
                name: 'Ishan Kishan',
                role: 'Batsman',
                country: 'India',
                age: 26
            },
            {
                thumb: '../images/srh/th.png',
                name: 'Travis Head',
                role: 'Batsman',
                country: 'Australia',
                age: 29
            },
            {
                thumb: '../images/srh/as.png',
                name: 'Abhishek Sharma',
                role: 'Batsman',
                country: 'India',
                age: 24
            },
            {
                thumb: '../images/srh/hk.png',
                name: 'Heinrich Klaasen',
                role: 'Batsman',
                country: 'South Africa',
                age: 33
            },
            {
                thumb: '../images/srh/nk.png',
                name: 'Nitish Kumar Reddy',
                role: 'All Rounder',
                country: 'India',
                age: 24
            },
            {
                thumb: '../images/srh/ms.png',
                name: 'Mohammed Shami',
                role: 'Bowler',
                country: 'India',
                age: 34
            },
            {
                thumb: '../images/srh/az.png',
                name: 'Adam Zampa',
                role: 'Bowler',
                country: 'Australia',
                age: 29
            },
            {
                thumb: '../images/srh/rc.png',
                name: 'Rahul Chahar',
                role: 'Bowler',
                country: 'India',
                age: 28
            },
            {
                thumb: '../images/srh/hp.png',
                name: 'Harshal Patel',
                role: 'Bowler',
                country: 'India',
                age: 31
            },
            {
                thumb: '../images/srh/ju.png',
                name: 'Jaydev Unadkat',
                role: 'Bowler',
                country: 'India',
                age: 34
            }
        ]);
    }
}

},{"./team.js":"eQpRv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["56AJI","lhpGb"], "lhpGb", "parcelRequire557d")

//# sourceMappingURL=Lav_Patel_Het_Shah_OOP_JS.b828852a.js.map
