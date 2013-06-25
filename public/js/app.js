(function(window, undefined) {
    var readyList, rootjQuery, core_strundefined = typeof undefined, location = window.location, document = window.document, docElem = document.documentElement, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = "1.10.1", core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context, rootjQuery);
    }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rvalidchars = /^[\],:{}\s]*$/, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    }, completed = function(event) {
        if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
            detach();
            jQuery.ready();
        }
    }, detach = function() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", completed, false);
            window.removeEventListener("load", completed, false);
        } else {
            document.detachEvent("onreadystatechange", completed);
            window.detachEvent("onload", completed);
        }
    };
    jQuery.fn = jQuery.prototype = {
        jquery: core_version,
        constructor: jQuery,
        init: function(selector, context, rootjQuery) {
            var match, elem;
            if (!selector) {
                return this;
            }
            if (typeof selector === "string") {
                if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                    match = [ null, selector, null ];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match]);
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem && elem.parentNode) {
                            if (elem.id !== match[2]) {
                                return rootjQuery.find(selector);
                            }
                            this.length = 1;
                            this[0] = elem;
                        }
                        this.context = document;
                        this.selector = selector;
                        return this;
                    }
                } else if (!context || context.jquery) {
                    return (context || rootjQuery).find(selector);
                } else {
                    return this.constructor(context).find(selector);
                }
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            } else if (jQuery.isFunction(selector)) {
                return rootjQuery.ready(selector);
            }
            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context;
            }
            return jQuery.makeArray(selector, this);
        },
        selector: "",
        length: 0,
        toArray: function() {
            return core_slice.call(this);
        },
        get: function(num) {
            return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num];
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        ready: function(fn) {
            jQuery.ready.promise().done(fn);
            return this;
        },
        slice: function() {
            return this.pushStack(core_slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: core_push,
        sort: [].sort,
        splice: [].splice
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function() {
        var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        noConflict: function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            if (!document.body) {
                return setTimeout(jQuery.ready);
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [ jQuery ]);
            if (jQuery.fn.trigger) {
                jQuery(document).trigger("ready").off("ready");
            }
        },
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray || function(obj) {
            return jQuery.type(obj) === "array";
        },
        isWindow: function(obj) {
            return obj != null && obj == obj.window;
        },
        isNumeric: function(obj) {
            return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        type: function(obj) {
            if (obj == null) {
                return String(obj);
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
        },
        isPlainObject: function(obj) {
            var key;
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            try {
                if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            if (jQuery.support.ownLast) {
                for (key in obj) {
                    return core_hasOwn.call(obj, key);
                }
            }
            for (key in obj) {}
            return key === undefined || core_hasOwn.call(obj, key);
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        error: function(msg) {
            throw new Error(msg);
        },
        parseHTML: function(data, context, keepScripts) {
            if (!data || typeof data !== "string") {
                return null;
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
            }
            context = context || document;
            var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
            if (parsed) {
                return [ context.createElement(parsed[1]) ];
            }
            parsed = jQuery.buildFragment([ data ], context, scripts);
            if (scripts) {
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        },
        parseJSON: function(data) {
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(data);
            }
            if (data === null) {
                return data;
            }
            if (typeof data === "string") {
                data = jQuery.trim(data);
                if (data) {
                    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                        return new Function("return " + data)();
                    }
                }
            }
            jQuery.error("Invalid JSON: " + data);
        },
        parseXML: function(data) {
            var xml, tmp;
            if (!data || typeof data !== "string") {
                return null;
            }
            try {
                if (window.DOMParser) {
                    tmp = new DOMParser();
                    xml = tmp.parseFromString(data, "text/xml");
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = "false";
                    xml.loadXML(data);
                }
            } catch (e) {
                xml = undefined;
            }
            if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        },
        noop: function() {},
        globalEval: function(data) {
            if (data && jQuery.trim(data)) {
                (window.execScript || function(data) {
                    window["eval"].call(window, data);
                })(data);
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        trim: core_trim && !core_trim.call("﻿ ") ? function(text) {
            return text == null ? "" : core_trim.call(text);
        } : function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                } else {
                    core_push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            var len;
            if (arr) {
                if (core_indexOf) {
                    return core_indexOf.call(arr, elem, i);
                }
                len = arr.length;
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                for (;i < len; i++) {
                    if (i in arr && arr[i] === elem) {
                        return i;
                    }
                }
            }
            return -1;
        },
        merge: function(first, second) {
            var l = second.length, i = first.length, j = 0;
            if (typeof l === "number") {
                for (;j < l; j++) {
                    first[i++] = second[j];
                }
            } else {
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, inv) {
            var retVal, ret = [], i = 0, length = elems.length;
            inv = !!inv;
            for (;i < length; i++) {
                retVal = !!callback(elems[i], i);
                if (inv !== retVal) {
                    ret.push(elems[i]);
                }
            }
            return ret;
        },
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            if (isArray) {
                for (;i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            }
            return core_concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var args, proxy, tmp;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = core_slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(core_slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        access: function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0, length = elems.length, bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = true;
                for (i in key) {
                    jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
                }
            } else if (value !== undefined) {
                chainable = true;
                if (!jQuery.isFunction(value)) {
                    raw = true;
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null;
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value);
                        };
                    }
                }
                if (fn) {
                    for (;i < length; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                }
            }
            return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        }
    });
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete") {
                setTimeout(jQuery.ready);
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", completed, false);
                window.addEventListener("load", completed, false);
            } else {
                document.attachEvent("onreadystatechange", completed);
                window.attachEvent("onload", completed);
                var top = false;
                try {
                    top = window.frameElement == null && document.documentElement;
                } catch (e) {}
                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!jQuery.isReady) {
                            try {
                                top.doScroll("left");
                            } catch (e) {
                                return setTimeout(doScrollCheck, 50);
                            }
                            detach();
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise(obj);
    };
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
        var length = obj.length, type = jQuery.type(obj);
        if (jQuery.isWindow(obj)) {
            return false;
        }
        if (obj.nodeType === 1 && length) {
            return true;
        }
        return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
    }
    rootjQuery = jQuery(document);
    (function(window, undefined) {
        var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), hasDuplicate = false, sortOrder = function() {
            return 0;
        }, strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function(elem) {
            var i = 0, len = this.length;
            for (;i < len; i++) {
                if (this[i] === elem) {
                    return i;
                }
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rsibling = new RegExp(whitespace + "*[+~]"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    var j = target.length, i = 0;
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context);
            }
            context = context || document;
            results = results || [];
            if (!selector || typeof selector !== "string") {
                return results;
            }
            if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                return [];
            }
            if (documentIsHTML && !seed) {
                if (match = rquickExpr.exec(selector)) {
                    if (m = match[1]) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            if (elem && elem.parentNode) {
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }
                    } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;
                    } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                        push.apply(results, context.getElementsByClassName(m));
                        return results;
                    }
                }
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    nid = old = expando;
                    newContext = context;
                    newSelector = nodeType === 9 && selector;
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector);
                        if (old = context.getAttribute("id")) {
                            nid = old.replace(rescape, "\\$&");
                        } else {
                            context.setAttribute("id", nid);
                        }
                        nid = "[id='" + nid + "'] ";
                        i = groups.length;
                        while (i--) {
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        newContext = rsibling.test(selector) && context.parentNode || context;
                        newSelector = groups.join(",");
                    }
                    if (newSelector) {
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {} finally {
                            if (!old) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function isNative(fn) {
            return rnative.test(fn + "");
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                if (keys.push(key += " ") > Expr.cacheLength) {
                    delete cache[keys.shift()];
                }
                return cache[key] = value;
            }
            return cache;
        }
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                div = null;
            }
        }
        function addHandle(attrs, handler, test) {
            attrs = attrs.split("|");
            var current, i = attrs.length, setHandle = test ? null : handler;
            while (i--) {
                if (!(current = Expr.attrHandle[attrs[i]]) || current === handler) {
                    Expr.attrHandle[attrs[i]] = setHandle;
                }
            }
        }
        function boolHandler(elem, name) {
            var val = elem.getAttributeNode(name);
            return val && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null;
        }
        function interpolationHandler(elem, name) {
            return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
        function valueHandler(elem) {
            if (elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
            }
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
                return diff;
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        support = Sizzle.support = {};
        setDocument = Sizzle.setDocument = function(node) {
            var doc = node ? node.ownerDocument || node : preferredDoc, parent = doc.parentWindow;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }
            document = doc;
            docElem = doc.documentElement;
            documentIsHTML = !isXML(doc);
            if (parent && parent.frameElement) {
                parent.attachEvent("onbeforeunload", function() {
                    setDocument();
                });
            }
            support.attributes = assert(function(div) {
                div.innerHTML = "<a href='#'></a>";
                addHandle("type|href|height|width", interpolationHandler, div.firstChild.getAttribute("href") === "#");
                addHandle(booleans, boolHandler, div.getAttribute("disabled") == null);
                div.className = "i";
                return !div.getAttribute("className");
            });
            support.input = assert(function(div) {
                div.innerHTML = "<input>";
                div.firstChild.setAttribute("value", "");
                return div.firstChild.getAttribute("value") === "";
            });
            addHandle("value", valueHandler, support.attributes && support.input);
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length;
            });
            support.getElementsByClassName = assert(function(div) {
                div.innerHTML = "<div class='a'></div><div class='a i'></div>";
                div.firstChild.className = "i";
                return div.getElementsByClassName("i").length === 2;
            });
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !doc.getElementsByName || !doc.getElementsByName(expando).length;
            });
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== strundefined && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [ m ] : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== strundefined) {
                    return context.getElementsByTagName(tag);
                }
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    while (elem = results[i++]) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }
                    return tmp;
                }
                return results;
            };
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = isNative(doc.querySelectorAll)) {
                assert(function(div) {
                    div.innerHTML = "<select><option selected=''></option></select>";
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }
                });
                assert(function(div) {
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("t", "");
                    if (div.querySelectorAll("[t^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = isNative(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            contains = isNative(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            support.sortDetached = assert(function(div1) {
                return div1.compareDocumentPosition(doc.createElement("div")) & 1;
            });
            sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                if (compare) {
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        if (a === doc || contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === doc || contains(preferredDoc, b)) {
                            return 1;
                        }
                        return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                }
                return a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                } else if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur);
                }
                while (ap[i] === bp[i]) {
                    i++;
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };
            return doc;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context);
            }
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val;
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }
            return results;
        };
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                for (;node = elem[i]; i++) {
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent;
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
            }
            return ret;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[5] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }
                    if (match[3] && match[4] !== undefined) {
                        match[2] = match[4];
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            if (forward && useCache) {
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        outerCache[type] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                diff = cache[1];
                            } else {
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        if (useCache) {
                                            (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                        }
                                        if (node === elem) {
                                            break;
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument);
                    }
                    if (fn.length > 1) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;--i >= 0; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;++i < length; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for (;i < len; i++) {
                selector += tokens[i].value;
            }
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                if ((data = cache[1]) === true || data === cachedruns) {
                                    return data === true;
                                }
                            } else {
                                cache = outerCache[dir] = [ dirkey ];
                                cache[1] = matcher(elem, context, xml) || cachedruns;
                                if (cache[1] === true) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            } ];
            for (;i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (;j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var matcherCachedRuns = 0, bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, expandContext) {
                var elem, j, matcher, setMatched = [], matchedCount = 0, i = "0", unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
                if (outermost) {
                    outermostContext = context !== document && context;
                    cachedruns = matcherCachedRuns;
                }
                for (;(elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        while (matcher = elementMatchers[j++]) {
                            if (matcher(elem, context, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            cachedruns = ++matcherCachedRuns;
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while (matcher = setMatchers[j++]) {
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, group) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                if (!group) {
                    group = tokenize(selector);
                }
                i = group.length;
                while (i--) {
                    cached = matcherFromTokens(group[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            }
            return cached;
        };
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function select(selector, context, results, seed) {
            var i, tokens, token, type, find, match = tokenize(selector);
            if (!seed) {
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break;
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
            return results;
        }
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        [ 0, 0 ].sort(sortOrder);
        support.detectDuplicates = hasDuplicate;
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
    })(window);
    var optionsCache = {};
    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, firingLength, firingIndex, firingStart, list = [], stack = !options.once && [], fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (;list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    memory = false;
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    if (stack.length) {
                        fire(stack.shift());
                    }
                } else if (memory) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && type !== "string") {
                                add(arg);
                            }
                        });
                    })(arguments);
                    if (firing) {
                        firingLength = list.length;
                    } else if (memory) {
                        firingStart = start;
                        fire(memory);
                    }
                }
                return this;
            },
            remove: function() {
                if (list) {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (firing) {
                                if (index <= firingLength) {
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
            },
            empty: function() {
                list = [];
                firingLength = 0;
                return this;
            },
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                args = args || [];
                args = [ context, args.slice ? args.slice() : args ];
                if (list && (!fired || stack)) {
                    if (firing) {
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var action = tuple[0], fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                } else {
                                    newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = core_slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values);
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    jQuery.support = function(support) {
        var all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
        div.setAttribute("className", "t");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        all = div.getElementsByTagName("*") || [];
        a = div.getElementsByTagName("a")[0];
        if (!a || !a.style || !all.length) {
            return support;
        }
        select = document.createElement("select");
        opt = select.appendChild(document.createElement("option"));
        input = div.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px;float:left;opacity:.5";
        support.getSetAttribute = div.className !== "t";
        support.leadingWhitespace = div.firstChild.nodeType === 3;
        support.tbody = !div.getElementsByTagName("tbody").length;
        support.htmlSerialize = !!div.getElementsByTagName("link").length;
        support.style = /top/.test(a.getAttribute("style"));
        support.hrefNormalized = a.getAttribute("href") === "/a";
        support.opacity = /^0.5/.test(a.style.opacity);
        support.cssFloat = !!a.style.cssFloat;
        support.checkOn = !!input.value;
        support.optSelected = opt.selected;
        support.enctype = !!document.createElement("form").enctype;
        support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        support.inlineBlockNeedsLayout = false;
        support.shrinkWrapBlocks = false;
        support.pixelPosition = false;
        support.deleteExpando = true;
        support.noCloneEvent = true;
        support.reliableMarginRight = true;
        support.boxSizingReliable = true;
        input.checked = true;
        support.noCloneChecked = input.cloneNode(true).checked;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        try {
            delete div.test;
        } catch (e) {
            support.deleteExpando = false;
        }
        input = document.createElement("input");
        input.setAttribute("value", "");
        support.input = input.getAttribute("value") === "";
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";
        input.setAttribute("checked", "t");
        input.setAttribute("name", "t");
        fragment = document.createDocumentFragment();
        fragment.appendChild(input);
        support.appendChecked = input.checked;
        support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
        if (div.attachEvent) {
            div.attachEvent("onclick", function() {
                support.noCloneEvent = false;
            });
            div.cloneNode(true).click();
        }
        for (i in {
            submit: true,
            change: true,
            focusin: true
        }) {
            div.setAttribute(eventName = "on" + i, "t");
            support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        for (i in jQuery(support)) {
            break;
        }
        support.ownLast = i !== "0";
        jQuery(function() {
            var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", body = document.getElementsByTagName("body")[0];
            if (!body) {
                return;
            }
            container = document.createElement("div");
            container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            body.appendChild(container).appendChild(div);
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            tds = div.getElementsByTagName("td");
            tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            isSupported = tds[0].offsetHeight === 0;
            tds[0].style.display = "";
            tds[1].style.display = "none";
            support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
            div.innerHTML = "";
            div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            jQuery.swap(body, body.style.zoom != null ? {
                zoom: 1
            } : {}, function() {
                support.boxSizing = div.offsetWidth === 4;
            });
            if (window.getComputedStyle) {
                support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                    width: "4px"
                }).width === "4px";
                marginDiv = div.appendChild(document.createElement("div"));
                marginDiv.style.cssText = div.style.cssText = divReset;
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
            }
            if (typeof div.style.zoom !== core_strundefined) {
                div.innerHTML = "";
                div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                div.style.display = "block";
                div.innerHTML = "<div></div>";
                div.firstChild.style.width = "5px";
                support.shrinkWrapBlocks = div.offsetWidth !== 3;
                if (support.inlineBlockNeedsLayout) {
                    body.style.zoom = 1;
                }
            }
            body.removeChild(container);
            container = div = tds = marginDiv = null;
        });
        all = select = fragment = opt = a = input = null;
        return support;
    }({});
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    function internalData(elem, name, data, pvt) {
        if (!jQuery.acceptData(elem)) {
            return;
        }
        var ret, thisCache, internalKey = jQuery.expando, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
            return;
        }
        if (!id) {
            if (isNode) {
                id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++;
            } else {
                id = internalKey;
            }
        }
        if (!cache[id]) {
            cache[id] = isNode ? {} : {
                toJSON: jQuery.noop
            };
        }
        if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
                cache[id] = jQuery.extend(cache[id], name);
            } else {
                cache[id].data = jQuery.extend(cache[id].data, name);
            }
        }
        thisCache = cache[id];
        if (!pvt) {
            if (!thisCache.data) {
                thisCache.data = {};
            }
            thisCache = thisCache.data;
        }
        if (data !== undefined) {
            thisCache[jQuery.camelCase(name)] = data;
        }
        if (typeof name === "string") {
            ret = thisCache[name];
            if (ret == null) {
                ret = thisCache[jQuery.camelCase(name)];
            }
        } else {
            ret = thisCache;
        }
        return ret;
    }
    function internalRemoveData(elem, name, pvt) {
        if (!jQuery.acceptData(elem)) {
            return;
        }
        var thisCache, i, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
        if (!cache[id]) {
            return;
        }
        if (name) {
            thisCache = pvt ? cache[id] : cache[id].data;
            if (thisCache) {
                if (!jQuery.isArray(name)) {
                    if (name in thisCache) {
                        name = [ name ];
                    } else {
                        name = jQuery.camelCase(name);
                        if (name in thisCache) {
                            name = [ name ];
                        } else {
                            name = name.split(" ");
                        }
                    }
                } else {
                    name = name.concat(jQuery.map(name, jQuery.camelCase));
                }
                i = name.length;
                while (i--) {
                    delete thisCache[name[i]];
                }
                if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                    return;
                }
            }
        }
        if (!pvt) {
            delete cache[id].data;
            if (!isEmptyDataObject(cache[id])) {
                return;
            }
        }
        if (isNode) {
            jQuery.cleanData([ elem ], true);
        } else if (jQuery.support.deleteExpando || cache != cache.window) {
            delete cache[id];
        } else {
            cache[id] = null;
        }
    }
    jQuery.extend({
        cache: {},
        noData: {
            applet: true,
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            return !!elem && !isEmptyDataObject(elem);
        },
        data: function(elem, name, data) {
            return internalData(elem, name, data);
        },
        removeData: function(elem, name) {
            return internalRemoveData(elem, name);
        },
        _data: function(elem, name, data) {
            return internalData(elem, name, data, true);
        },
        _removeData: function(elem, name) {
            return internalRemoveData(elem, name, true);
        },
        acceptData: function(elem) {
            if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
                return false;
            }
            var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
            return !noData || noData !== true && elem.getAttribute("classid") === noData;
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var attrs, name, data = null, i = 0, elem = this[0];
            if (key === undefined) {
                if (this.length) {
                    data = jQuery.data(elem);
                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        attrs = elem.attributes;
                        for (;i < attrs.length; i++) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = jQuery.camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        jQuery._data(elem, "parsedAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    jQuery.data(this, key);
                });
            }
            return arguments.length > 1 ? this.each(function() {
                jQuery.data(this, key, value);
            }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
        },
        removeData: function(key) {
            return this.each(function() {
                jQuery.removeData(this, key);
            });
        }
    });
    function dataAttr(elem, key, data) {
        if (data === undefined && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                jQuery.data(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    function isEmptyDataObject(obj) {
        var name;
        for (name in obj) {
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                continue;
            }
            if (name !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = jQuery._data(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = jQuery._data(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData(elem, type + "queue");
                    jQuery._removeData(elem, key);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        delay: function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    clearTimeout(timeout);
                };
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = jQuery._data(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var nodeHook, boolHook, rclass = /[\t\r\n\f]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = jQuery.support.getSetAttribute, getSetInput = jQuery.support.input;
    jQuery.fn.extend({
        attr: function(name, value) {
            return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        },
        prop: function(name, value) {
            return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            name = jQuery.propFix[name] || name;
            return this.each(function() {
                try {
                    this[name] = undefined;
                    delete this[name];
                } catch (e) {}
            });
        },
        addClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }
                        elem.className = jQuery.trim(cur);
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        elem.className = value ? jQuery.trim(cur) : "";
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value, isBool = typeof stateVal === "boolean";
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            return this.each(function() {
                if (type === "string") {
                    var className, i = 0, self = jQuery(this), state = stateVal, classNames = value.match(core_rnotwhite) || [];
                    while (className = classNames[i++]) {
                        state = isBool ? state : !self.hasClass(className);
                        self[state ? "addClass" : "removeClass"](className);
                    }
                } else if (type === core_strundefined || type === "boolean") {
                    if (this.className) {
                        jQuery._data(this, "__className__", this.className);
                    }
                    this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                }
            });
        },
        hasClass: function(selector) {
            var className = " " + selector + " ", i = 0, l = this.length;
            for (;i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true;
                }
            }
            return false;
        },
        val: function(value) {
            var ret, hooks, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : elem.text;
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (;i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
                            optionSet = true;
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        },
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (typeof elem.getAttribute === core_strundefined) {
                return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    elem.setAttribute(name, value + "");
                    return value;
                }
            } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            } else {
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(core_rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                            elem[propName] = false;
                        } else {
                            elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
                        }
                    } else {
                        jQuery.attr(elem, name, "");
                    }
                    elem.removeAttribute(getSetAttribute ? name : propName);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
            } else {
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
            } else {
                elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
        jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
            var fn = jQuery.expr.attrHandle[name], ret = isXML ? undefined : (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
            jQuery.expr.attrHandle[name] = fn;
            return ret;
        } : function(elem, name, isXML) {
            return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
        };
    });
    if (!getSetInput || !getSetAttribute) {
        jQuery.attrHooks.value = {
            set: function(elem, value, name) {
                if (jQuery.nodeName(elem, "input")) {
                    elem.defaultValue = value;
                } else {
                    return nodeHook && nodeHook.set(elem, value, name);
                }
            }
        };
    }
    if (!getSetAttribute) {
        nodeHook = {
            set: function(elem, value, name) {
                var ret = elem.getAttributeNode(name);
                if (!ret) {
                    elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
                }
                ret.value = value += "";
                return name === "value" || value === elem.getAttribute(name) ? value : undefined;
            }
        };
        jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = function(elem, name, isXML) {
            var ret;
            return isXML ? undefined : (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
        };
        jQuery.valHooks.button = {
            get: function(elem, name) {
                var ret = elem.getAttributeNode(name);
                return ret && ret.specified ? ret.value : undefined;
            },
            set: nodeHook.set
        };
        jQuery.attrHooks.contenteditable = {
            set: function(elem, value, name) {
                nodeHook.set(elem, value === "" ? false : value, name);
            }
        };
        jQuery.each([ "width", "height" ], function(i, name) {
            jQuery.attrHooks[name] = {
                set: function(elem, value) {
                    if (value === "") {
                        elem.setAttribute(name, "auto");
                        return value;
                    }
                }
            };
        });
    }
    if (!jQuery.support.hrefNormalized) {
        jQuery.each([ "href", "src" ], function(i, name) {
            jQuery.propHooks[name] = {
                get: function(elem) {
                    return elem.getAttribute(name, 4);
                }
            };
        });
    }
    if (!jQuery.support.style) {
        jQuery.attrHooks.style = {
            get: function(elem) {
                return elem.style.cssText || undefined;
            },
            set: function(elem, value) {
                return elem.style.cssText = value + "";
            }
        };
    }
    if (!jQuery.support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        };
    }
    jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    if (!jQuery.support.enctype) {
        jQuery.propFix.enctype = "encoding";
    }
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        };
        if (!jQuery.support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
            if (!elemData) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
                };
                eventHandle.elem = elem;
            }
            types = (types || "").match(core_rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
            elem = null;
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = (types || "").match(core_rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                jQuery._removeData(elem, "events");
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [ elem || document ], type = core_hasOwn.call(event, "type") ? event.type : event, namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") >= 0) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (;cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                    event.preventDefault();
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        try {
                            elem[type]();
                        } catch (e) {}
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, ret, handleObj, matched, j, handlerQueue = [], args = core_slice.call(arguments), handlers = (jQuery._data(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                for (;cur != this; cur = cur.parentNode || this) {
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = originalEvent.srcElement || document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.relatedTarget && fromElement) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        try {
                            this.focus();
                            return false;
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false;
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem);
            } else {
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };
    jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false);
        }
    } : function(elem, type, handle) {
        var name = "on" + type;
        if (elem.detachEvent) {
            if (typeof elem[name] === core_strundefined) {
                elem[name] = null;
            }
            elem.detachEvent(name, handle);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (!e) {
                return;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (!e) {
                return;
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    if (!jQuery.support.submitBubbles) {
        jQuery.event.special.submit = {
            setup: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    var elem = e.target, form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                    if (form && !jQuery._data(form, "submitBubbles")) {
                        jQuery.event.add(form, "submit._submit", function(event) {
                            event._submit_bubble = true;
                        });
                        jQuery._data(form, "submitBubbles", true);
                    }
                });
            },
            postDispatch: function(event) {
                if (event._submit_bubble) {
                    delete event._submit_bubble;
                    if (this.parentNode && !event.isTrigger) {
                        jQuery.event.simulate("submit", this.parentNode, event, true);
                    }
                }
            },
            teardown: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.remove(this, "._submit");
            }
        };
    }
    if (!jQuery.support.changeBubbles) {
        jQuery.event.special.change = {
            setup: function() {
                if (rformElems.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        jQuery.event.add(this, "propertychange._change", function(event) {
                            if (event.originalEvent.propertyName === "checked") {
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add(this, "click._change", function(event) {
                            if (this._just_changed && !event.isTrigger) {
                                this._just_changed = false;
                            }
                            jQuery.event.simulate("change", this, event, true);
                        });
                    }
                    return false;
                }
                jQuery.event.add(this, "beforeactivate._change", function(e) {
                    var elem = e.target;
                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                        jQuery.event.add(elem, "change._change", function(event) {
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                jQuery.event.simulate("change", this.parentNode, event, true);
                            }
                        });
                        jQuery._data(elem, "changeBubbles", true);
                    }
                });
            },
            handle: function(event) {
                var elem = event.target;
                if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                    return event.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                jQuery.event.remove(this, "._change");
                return !rformElems.test(this.nodeName);
            }
        };
    }
    if (!jQuery.support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var attaches = 0, handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    if (attaches++ === 0) {
                        document.addEventListener(orig, handler, true);
                    }
                },
                teardown: function() {
                    if (--attaches === 0) {
                        document.removeEventListener(orig, handler, true);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var type, origFn;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return this;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    var isSimple = /^.[^:#\[\.,]*$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret = [], self = this, len = self.length;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        has: function(target) {
            var i, targets = jQuery(target, this), len = targets.length;
            return this.filter(function() {
                for (i = 0; i < len; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        cur = ret.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return jQuery.inArray(this[0], jQuery(elem));
            }
            return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
        },
        add: function(selector, context) {
            var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [ selector ] : selector), all = jQuery.merge(this.get(), set);
            return this.pushStack(jQuery.unique(all));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        do {
            cur = cur[dir];
        } while (cur && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var ret = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret);
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    ret = jQuery.unique(ret);
                }
                if (rparentsprev.test(name)) {
                    ret = ret.reverse();
                }
            }
            return this.pushStack(ret);
        };
    });
    jQuery.extend({
        filter: function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")";
            }
            return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1;
            }));
        },
        dir: function(elem, dir, until) {
            var matched = [], cur = elem[dir];
            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                if (cur.nodeType === 1) {
                    matched.push(cur);
                }
                cur = cur[dir];
            }
            return matched;
        },
        sibling: function(n, elem) {
            var r = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    r.push(n);
                }
            }
            return r;
        }
    });
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
            });
        }
        if (typeof qualifier === "string") {
            if (isSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return jQuery.inArray(elem, qualifier) >= 0 !== not;
        });
    }
    function createSafeFragment(document) {
        var list = nodeNames.split("|"), safeFrag = document.createDocumentFragment();
        if (safeFrag.createElement) {
            while (list.length) {
                safeFrag.createElement(list.pop());
            }
        }
        return safeFrag;
    }
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div"));
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    jQuery.fn.extend({
        text: function(value) {
            return jQuery.access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
            }, null, value, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        remove: function(selector, keepData) {
            var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
            for (;(elem = elems[i]) != null; i++) {
                if (!keepData && elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem));
                }
                if (elem.parentNode) {
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        setGlobalEval(getAll(elem, "script"));
                    }
                    elem.parentNode.removeChild(elem);
                }
            }
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                }
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
                if (elem.options && jQuery.nodeName(elem, "select")) {
                    elem.options.length = 0;
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return jQuery.access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined) {
                    return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (;i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var args = jQuery.map(this, function(elem) {
                return [ elem.nextSibling, elem.parentNode ];
            }), i = 0;
            this.domManip(arguments, function(elem) {
                var next = args[i++], parent = args[i++];
                if (parent) {
                    if (next && next.parentNode !== parent) {
                        next = this.nextSibling;
                    }
                    jQuery(this).remove();
                    parent.insertBefore(elem, next);
                }
            }, true);
            return i ? this : this.remove();
        },
        detach: function(selector) {
            return this.remove(selector, true);
        },
        domManip: function(args, callback, allowIntersection) {
            args = core_concat.apply([], args);
            var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                return this.each(function(index) {
                    var self = set.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    self.domManip(args, callback, allowIntersection);
                });
            }
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(this[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    jQuery._evalUrl(node.src);
                                } else {
                                    jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                    fragment = first = null;
                }
            }
            return this;
        }
    });
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }
    function setGlobalEval(elems, refElements) {
        var elem, i = 0;
        for (;(elem = elems[i]) != null; i++) {
            jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
        }
    }
    function cloneCopyEvent(src, dest) {
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            return;
        }
        var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
        if (events) {
            delete curData.handle;
            curData.events = {};
            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
        if (curData.data) {
            curData.data = jQuery.extend({}, curData.data);
        }
    }
    function fixCloneNodeIssues(src, dest) {
        var nodeName, e, data;
        if (dest.nodeType !== 1) {
            return;
        }
        nodeName = dest.nodeName.toLowerCase();
        if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
            data = jQuery._data(dest);
            for (e in data.events) {
                jQuery.removeEvent(dest, e, data.handle);
            }
            dest.removeAttribute(jQuery.expando);
        }
        if (nodeName === "script" && dest.text !== src.text) {
            disableScript(dest).text = src.text;
            restoreScript(dest);
        } else if (nodeName === "object") {
            if (dest.parentNode) {
                dest.outerHTML = src.outerHTML;
            }
            if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
                dest.innerHTML = src.innerHTML;
            }
        } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
            dest.defaultChecked = dest.checked = src.checked;
            if (dest.value !== src.value) {
                dest.value = src.value;
            }
        } else if (nodeName === "option") {
            dest.defaultSelected = dest.selected = src.defaultSelected;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
            for (;i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                core_push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    function getAll(context, tag) {
        var elems, elem, i = 0, found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
        if (!found) {
            for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
                if (!tag || jQuery.nodeName(elem, tag)) {
                    found.push(elem);
                } else {
                    jQuery.merge(found, getAll(elem, tag));
                }
            }
        }
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], found) : found;
    }
    function fixDefaultChecked(elem) {
        if (manipulation_rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked;
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                clone = elem.cloneNode(true);
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0; (node = srcElements[i]) != null; ++i) {
                    if (destElements[i]) {
                        fixCloneNodeIssues(node, destElements[i]);
                    }
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0; (node = srcElements[i]) != null; i++) {
                        cloneCopyEvent(node, destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            destElements = srcElements = node = null;
            return clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || safe.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                            nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                        }
                        if (!jQuery.support.tbody) {
                            elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                            j = elem && elem.childNodes.length;
                            while (j--) {
                                if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                                    elem.removeChild(tbody);
                                }
                            }
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp.textContent = "";
                        while (tmp.firstChild) {
                            tmp.removeChild(tmp.firstChild);
                        }
                        tmp = safe.lastChild;
                    }
                }
            }
            if (tmp) {
                safe.removeChild(tmp);
            }
            if (!jQuery.support.appendChecked) {
                jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
            }
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(safe.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            tmp = null;
            return safe;
        },
        cleanData: function(elems, acceptData) {
            var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special;
            for (;(elem = elems[i]) != null; i++) {
                if (acceptData || jQuery.acceptData(elem)) {
                    id = elem[internalKey];
                    data = id && cache[id];
                    if (data) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (cache[id]) {
                            delete cache[id];
                            if (deleteExpando) {
                                delete elem[internalKey];
                            } else if (typeof elem.removeAttribute !== core_strundefined) {
                                elem.removeAttribute(internalKey);
                            } else {
                                elem[internalKey] = null;
                            }
                            core_deletedIds.push(id);
                        }
                    }
                }
            }
        },
        _evalUrl: function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
            });
        }
    });
    jQuery.fn.extend({
        wrapAll: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rposition = /^(top|right|bottom|left)$/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {
        BODY: "block"
    }, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: 0,
        fontWeight: 400
    }, cssExpand = [ "Top", "Right", "Bottom", "Left" ], cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    function vendorPropName(style, name) {
        if (name in style) {
            return name;
        }
        var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name;
            }
        }
        return origName;
    }
    function isHidden(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    }
    function showHide(elements, show) {
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = jQuery._data(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
                }
            } else {
                if (!values[index]) {
                    hidden = isHidden(elem);
                    if (display && display !== "none" || !hidden) {
                        jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                    }
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.fn.extend({
        css: function(name, value) {
            return jQuery.access(this, function(elem, name, value) {
                var len, styles, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (;i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            var bool = typeof state === "boolean";
            return this.each(function() {
                if (bool ? state : isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    type = "number";
                }
                if (value == null || type === "number" && isNaN(value)) {
                    return;
                }
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }
                if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    try {
                        style[name] = value;
                    } catch (e) {}
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var num, val, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        }
    });
    if (window.getComputedStyle) {
        getStyles = function(elem) {
            return window.getComputedStyle(elem, null);
        };
        curCSS = function(elem, name, _computed) {
            var width, minWidth, maxWidth, computed = _computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, style = elem.style;
            if (computed) {
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name);
                }
                if (rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret;
        };
    } else if (document.documentElement.currentStyle) {
        getStyles = function(elem) {
            return elem.currentStyle;
        };
        curCSS = function(elem, name, _computed) {
            var left, rs, rsLeft, computed = _computed || getStyles(elem), ret = computed ? computed[name] : undefined, style = elem.style;
            if (ret == null && style && style[name]) {
                ret = style[name];
            }
            if (rnumnonpx.test(ret) && !rposition.test(name)) {
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;
                if (rsLeft) {
                    rs.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";
                style.left = left;
                if (rsLeft) {
                    rs.left = rsLeft;
                }
            }
            return ret === "" ? "auto" : ret;
        };
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function css_defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
                doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                doc.write("<!doctype html><html><body>");
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
        elem.remove();
        return display;
    }
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });
    if (!jQuery.support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
            },
            set: function(elem, value) {
                var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
                style.zoom = 1;
                if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                    style.removeAttribute("filter");
                    if (value === "" || currentStyle && !currentStyle.filter) {
                        return;
                    }
                }
                style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
            }
        };
    }
    jQuery(function() {
        if (!jQuery.support.reliableMarginRight) {
            jQuery.cssHooks.marginRight = {
                get: function(elem, computed) {
                    if (computed) {
                        return jQuery.swap(elem, {
                            display: "inline-block"
                        }, curCSS, [ elem, "marginRight" ]);
                    }
                }
            };
        }
        if (!jQuery.support.pixelPosition && jQuery.fn.position) {
            jQuery.each([ "top", "left" ], function(i, prop) {
                jQuery.cssHooks[prop] = {
                    get: function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }
                };
            });
        }
    });
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function(elem) {
            return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
        };
        jQuery.expr.filters.visible = function(elem) {
            return !jQuery.expr.filters.hidden(elem);
        };
    }
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                for (;i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href;
    } catch (e) {
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, response, type, self = this, off = url.indexOf(" ");
        if (off >= 0) {
            selector = url.slice(off, url.length);
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).complete(callback && function(jqXHR, status) {
                self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }
        return this;
    };
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [ "" ];
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data;
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";
                    } else if (status === 304) {
                        statusText = "notmodified";
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                }
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    function ajaxHandleResponses(s, jqXHR, responses) {
        var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev;
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
            s.global = false;
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, head = document.head || jQuery("head")[0] || document.documentElement;
            return {
                send: function(_, callback) {
                    script = document.createElement("script");
                    script.async = true;
                    if (s.scriptCharset) {
                        script.charset = s.scriptCharset;
                    }
                    script.src = s.url;
                    script.onload = script.onreadystatechange = function(_, isAbort) {
                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                            script.onload = script.onreadystatechange = null;
                            if (script.parentNode) {
                                script.parentNode.removeChild(script);
                            }
                            script = null;
                            if (!isAbort) {
                                callback(200, "success");
                            }
                        }
                    };
                    head.insertBefore(script, head.firstChild);
                },
                abort: function() {
                    if (script) {
                        script.onload(undefined, true);
                    }
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                window[callbackName] = overwritten;
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    var xhrCallbacks, xhrSupported, xhrId = 0, xhrOnUnloadAbort = window.ActiveXObject && function() {
        var key;
        for (key in xhrCallbacks) {
            xhrCallbacks[key](undefined, true);
        }
    };
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    }
    function createActiveXHR() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
        return !this.isLocal && createStandardXHR() || createActiveXHR();
    } : createStandardXHR;
    xhrSupported = jQuery.ajaxSettings.xhr();
    jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    xhrSupported = jQuery.support.ajax = !!xhrSupported;
    if (xhrSupported) {
        jQuery.ajaxTransport(function(s) {
            if (!s.crossDomain || jQuery.support.cors) {
                var callback;
                return {
                    send: function(headers, complete) {
                        var handle, i, xhr = s.xhr();
                        if (s.username) {
                            xhr.open(s.type, s.url, s.async, s.username, s.password);
                        } else {
                            xhr.open(s.type, s.url, s.async);
                        }
                        if (s.xhrFields) {
                            for (i in s.xhrFields) {
                                xhr[i] = s.xhrFields[i];
                            }
                        }
                        if (s.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(s.mimeType);
                        }
                        if (!s.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (i in headers) {
                                xhr.setRequestHeader(i, headers[i]);
                            }
                        } catch (err) {}
                        xhr.send(s.hasContent && s.data || null);
                        callback = function(_, isAbort) {
                            var status, responseHeaders, statusText, responses;
                            try {
                                if (callback && (isAbort || xhr.readyState === 4)) {
                                    callback = undefined;
                                    if (handle) {
                                        xhr.onreadystatechange = jQuery.noop;
                                        if (xhrOnUnloadAbort) {
                                            delete xhrCallbacks[handle];
                                        }
                                    }
                                    if (isAbort) {
                                        if (xhr.readyState !== 4) {
                                            xhr.abort();
                                        }
                                    } else {
                                        responses = {};
                                        status = xhr.status;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        if (typeof xhr.responseText === "string") {
                                            responses.text = xhr.responseText;
                                        }
                                        try {
                                            statusText = xhr.statusText;
                                        } catch (e) {
                                            statusText = "";
                                        }
                                        if (!status && s.isLocal && !s.crossDomain) {
                                            status = responses.text ? 200 : 404;
                                        } else if (status === 1223) {
                                            status = 204;
                                        }
                                    }
                                }
                            } catch (firefoxAccessException) {
                                if (!isAbort) {
                                    complete(-1, firefoxAccessException);
                                }
                            }
                            if (responses) {
                                complete(status, statusText, responses, responseHeaders);
                            }
                        };
                        if (!s.async) {
                            callback();
                        } else if (xhr.readyState === 4) {
                            setTimeout(callback);
                        } else {
                            handle = ++xhrId;
                            if (xhrOnUnloadAbort) {
                                if (!xhrCallbacks) {
                                    xhrCallbacks = {};
                                    jQuery(window).unload(xhrOnUnloadAbort);
                                }
                                xhrCallbacks[handle] = callback;
                            }
                            xhr.onreadystatechange = callback;
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback(undefined, true);
                        }
                    }
                };
            }
        });
    }
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
            if (start && start[3] !== unit) {
                unit = unit || start[3];
                parts = parts || [];
                start = +target || 1;
                do {
                    scale = scale || ".5";
                    start = start / scale;
                    jQuery.style(tween.elem, prop, start + unit);
                } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            if (parts) {
                start = tween.start = +start || +target || 0;
                tween.unit = unit;
                tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
            }
            return tween;
        } ]
    };
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    }
    function createTween(value, prop, animation) {
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
        for (;index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
                return tween;
            }
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (;index < length; index++) {
                    animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },
        prefilter: function(callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback);
            } else {
                animationPrefilters.push(callback);
            }
        }
    });
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery._data(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                    style.display = "inline-block";
                } else {
                    style.zoom = 1;
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            if (!jQuery.support.shrinkWrapBlocks) {
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = jQuery._data(elem, "fxshow", {});
            }
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                jQuery._removeData(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        }
    }
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || jQuery._data(this, "finish")) {
                    anim.stop(true);
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = jQuery._data(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = jQuery._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }
                delete data.finish;
            });
        }
    });
    function genFx(type, includeWidth) {
        var which, attrs = {
            height: type
        }, i = 0;
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    jQuery.timers = [];
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers, i = 0;
        fxNow = jQuery.now();
        for (;i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        if (timer() && jQuery.timers.push(timer)) {
            jQuery.fx.start();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fx.step = {};
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem;
            }).length;
        };
    }
    jQuery.fn.offset = function(options) {
        if (arguments.length) {
            return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
        }
        var docElem, win, box = {
            top: 0,
            left: 0
        }, elem = this[0], doc = elem && elem.ownerDocument;
        if (!doc) {
            return;
        }
        docElem = doc.documentElement;
        if (!jQuery.contains(docElem, elem)) {
            return box;
        }
        if (typeof elem.getBoundingClientRect !== core_strundefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        };
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var position = jQuery.css(elem, "position");
            if (position === "static") {
                elem.style.position = "relative";
            }
            var curElem = jQuery(elem), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [ curCSSTop, curCSSLeft ]) > -1, props = {}, curPosition = {}, curTop, curLeft;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, parentOffset = {
                top: 0,
                left: 0
            }, elem = this[0];
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;
                while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = /Y/.test(prop);
        jQuery.fn[method] = function(val) {
            return jQuery.access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
    }
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return jQuery.access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    jQuery.fn.size = function() {
        return this.length;
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = jQuery;
    } else {
        window.jQuery = window.$ = jQuery;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return jQuery;
            });
        }
    }
})(window);

window.CodeMirror = function() {
    "use strict";
    var gecko = /gecko\/\d/i.test(navigator.userAgent);
    var ie = /MSIE \d/.test(navigator.userAgent);
    var ie_lt8 = ie && (document.documentMode == null || document.documentMode < 8);
    var ie_lt9 = ie && (document.documentMode == null || document.documentMode < 9);
    var webkit = /WebKit\//.test(navigator.userAgent);
    var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent);
    var chrome = /Chrome\//.test(navigator.userAgent);
    var opera = /Opera\//.test(navigator.userAgent);
    var safari = /Apple Computer/.test(navigator.vendor);
    var khtml = /KHTML\//.test(navigator.userAgent);
    var mac_geLion = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent);
    var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
    var phantom = /PhantomJS/.test(navigator.userAgent);
    var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
    var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
    var mac = ios || /Mac/.test(navigator.platform);
    var windows = /windows/i.test(navigator.platform);
    var opera_version = opera && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    if (opera_version) opera_version = Number(opera_version[1]);
    var flipCtrlCmd = mac && (qtwebkit || opera && (opera_version == null || opera_version < 12.11));
    var captureMiddleClick = gecko || ie && !ie_lt9;
    var sawReadOnlySpans = false, sawCollapsedSpans = false;
    function CodeMirror(place, options) {
        if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);
        this.options = options = options || {};
        for (var opt in defaults) if (!options.hasOwnProperty(opt) && defaults.hasOwnProperty(opt)) options[opt] = defaults[opt];
        setGuttersForLineNumbers(options);
        var docStart = typeof options.value == "string" ? 0 : options.value.first;
        var display = this.display = makeDisplay(place, docStart);
        display.wrapper.CodeMirror = this;
        updateGutters(this);
        if (options.autofocus && !mobile) focusInput(this);
        this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: false,
            focused: false,
            suppressEdits: false,
            pasteIncoming: false,
            draggingText: false,
            highlight: new Delayed()
        };
        themeChanged(this);
        if (options.lineWrapping) this.display.wrapper.className += " CodeMirror-wrap";
        var doc = options.value;
        if (typeof doc == "string") doc = new Doc(options.value, options.mode);
        operation(this, attachDoc)(this, doc);
        if (ie) setTimeout(bind(resetInput, this, true), 20);
        registerEventHandlers(this);
        var hasFocus;
        try {
            hasFocus = document.activeElement == display.input;
        } catch (e) {}
        if (hasFocus || options.autofocus && !mobile) setTimeout(bind(onFocus, this), 20); else onBlur(this);
        operation(this, function() {
            for (var opt in optionHandlers) if (optionHandlers.propertyIsEnumerable(opt)) optionHandlers[opt](this, options[opt], Init);
            for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
        })();
    }
    function makeDisplay(place, docStart) {
        var d = {};
        var input = d.input = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;");
        if (webkit) input.style.width = "1000px"; else input.setAttribute("wrap", "off");
        if (ios) input.style.border = "1px solid black";
        input.setAttribute("autocorrect", "off");
        input.setAttribute("autocapitalize", "off");
        input.setAttribute("spellcheck", "false");
        d.inputDiv = elt("div", [ input ], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        d.scrollbarH = elt("div", [ elt("div", null, null, "height: 1px") ], "CodeMirror-hscrollbar");
        d.scrollbarV = elt("div", [ elt("div", null, null, "width: 1px") ], "CodeMirror-vscrollbar");
        d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
        d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
        d.lineDiv = elt("div", null, "CodeMirror-code");
        d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
        d.cursor = elt("div", " ", "CodeMirror-cursor");
        d.otherCursor = elt("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor");
        d.measure = elt("div", null, "CodeMirror-measure");
        d.lineSpace = elt("div", [ d.measure, d.selectionDiv, d.lineDiv, d.cursor, d.otherCursor ], null, "position: relative; outline: none");
        d.mover = elt("div", [ elt("div", [ d.lineSpace ], "CodeMirror-lines") ], null, "position: relative");
        d.sizer = elt("div", [ d.mover ], "CodeMirror-sizer");
        d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerCutOff + "px; width: 1px;");
        d.gutters = elt("div", null, "CodeMirror-gutters");
        d.lineGutter = null;
        d.scroller = elt("div", [ d.sizer, d.heightForcer, d.gutters ], "CodeMirror-scroll");
        d.scroller.setAttribute("tabIndex", "-1");
        d.wrapper = elt("div", [ d.inputDiv, d.scrollbarH, d.scrollbarV, d.scrollbarFiller, d.gutterFiller, d.scroller ], "CodeMirror");
        if (ie_lt8) {
            d.gutters.style.zIndex = -1;
            d.scroller.style.paddingRight = 0;
        }
        if (place.appendChild) place.appendChild(d.wrapper); else place(d.wrapper);
        if (ios) input.style.width = "0px";
        if (!webkit) d.scroller.draggable = true;
        if (khtml) {
            d.inputDiv.style.height = "1px";
            d.inputDiv.style.position = "absolute";
        } else if (ie_lt8) d.scrollbarH.style.minWidth = d.scrollbarV.style.minWidth = "18px";
        d.viewOffset = d.lastSizeC = 0;
        d.showingFrom = d.showingTo = docStart;
        d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
        d.prevInput = "";
        d.alignWidgets = false;
        d.pollingFast = false;
        d.poll = new Delayed();
        d.cachedCharWidth = d.cachedTextHeight = null;
        d.measureLineCache = [];
        d.measureLineCachePos = 0;
        d.inaccurateSelection = false;
        d.maxLine = null;
        d.maxLineLength = 0;
        d.maxLineChanged = false;
        d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;
        return d;
    }
    function loadMode(cm) {
        cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
        cm.doc.iter(function(line) {
            if (line.stateAfter) line.stateAfter = null;
            if (line.styles) line.styles = null;
        });
        cm.doc.frontier = cm.doc.first;
        startWorker(cm, 100);
        cm.state.modeGen++;
        if (cm.curOp) regChange(cm);
    }
    function wrappingChanged(cm) {
        if (cm.options.lineWrapping) {
            cm.display.wrapper.className += " CodeMirror-wrap";
            cm.display.sizer.style.minWidth = "";
        } else {
            cm.display.wrapper.className = cm.display.wrapper.className.replace(" CodeMirror-wrap", "");
            computeMaxLength(cm);
        }
        estimateLineHeights(cm);
        regChange(cm);
        clearCaches(cm);
        setTimeout(function() {
            updateScrollbars(cm);
        }, 100);
    }
    function estimateHeight(cm) {
        var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
        var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
        return function(line) {
            if (lineIsHidden(cm.doc, line)) return 0; else if (wrapping) return (Math.ceil(line.text.length / perLine) || 1) * th; else return th;
        };
    }
    function estimateLineHeights(cm) {
        var doc = cm.doc, est = estimateHeight(cm);
        doc.iter(function(line) {
            var estHeight = est(line);
            if (estHeight != line.height) updateLineHeight(line, estHeight);
        });
    }
    function keyMapChanged(cm) {
        var map = keyMap[cm.options.keyMap], style = map.style;
        cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (style ? " cm-keymap-" + style : "");
        cm.state.disableInput = map.disableInput;
    }
    function themeChanged(cm) {
        cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
        clearCaches(cm);
    }
    function guttersChanged(cm) {
        updateGutters(cm);
        regChange(cm);
        setTimeout(function() {
            alignHorizontally(cm);
        }, 20);
    }
    function updateGutters(cm) {
        var gutters = cm.display.gutters, specs = cm.options.gutters;
        removeChildren(gutters);
        for (var i = 0; i < specs.length; ++i) {
            var gutterClass = specs[i];
            var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
            if (gutterClass == "CodeMirror-linenumbers") {
                cm.display.lineGutter = gElt;
                gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
            }
        }
        gutters.style.display = i ? "" : "none";
    }
    function lineLength(doc, line) {
        if (line.height == 0) return 0;
        var len = line.text.length, merged, cur = line;
        while (merged = collapsedSpanAtStart(cur)) {
            var found = merged.find();
            cur = getLine(doc, found.from.line);
            len += found.from.ch - found.to.ch;
        }
        cur = line;
        while (merged = collapsedSpanAtEnd(cur)) {
            var found = merged.find();
            len -= cur.text.length - found.from.ch;
            cur = getLine(doc, found.to.line);
            len += cur.text.length - found.to.ch;
        }
        return len;
    }
    function computeMaxLength(cm) {
        var d = cm.display, doc = cm.doc;
        d.maxLine = getLine(doc, doc.first);
        d.maxLineLength = lineLength(doc, d.maxLine);
        d.maxLineChanged = true;
        doc.iter(function(line) {
            var len = lineLength(doc, line);
            if (len > d.maxLineLength) {
                d.maxLineLength = len;
                d.maxLine = line;
            }
        });
    }
    function setGuttersForLineNumbers(options) {
        var found = false;
        for (var i = 0; i < options.gutters.length; ++i) {
            if (options.gutters[i] == "CodeMirror-linenumbers") {
                if (options.lineNumbers) found = true; else options.gutters.splice(i--, 1);
            }
        }
        if (!found && options.lineNumbers) options.gutters.push("CodeMirror-linenumbers");
    }
    function updateScrollbars(cm) {
        var d = cm.display, docHeight = cm.doc.height;
        var totalHeight = docHeight + paddingVert(d);
        d.sizer.style.minHeight = d.heightForcer.style.top = totalHeight + "px";
        d.gutters.style.height = Math.max(totalHeight, d.scroller.clientHeight - scrollerCutOff) + "px";
        var scrollHeight = Math.max(totalHeight, d.scroller.scrollHeight);
        var needsH = d.scroller.scrollWidth > d.scroller.clientWidth + 1;
        var needsV = scrollHeight > d.scroller.clientHeight + 1;
        if (needsV) {
            d.scrollbarV.style.display = "block";
            d.scrollbarV.style.bottom = needsH ? scrollbarWidth(d.measure) + "px" : "0";
            d.scrollbarV.firstChild.style.height = scrollHeight - d.scroller.clientHeight + d.scrollbarV.clientHeight + "px";
        } else d.scrollbarV.style.display = "";
        if (needsH) {
            d.scrollbarH.style.display = "block";
            d.scrollbarH.style.right = needsV ? scrollbarWidth(d.measure) + "px" : "0";
            d.scrollbarH.firstChild.style.width = d.scroller.scrollWidth - d.scroller.clientWidth + d.scrollbarH.clientWidth + "px";
        } else d.scrollbarH.style.display = "";
        if (needsH && needsV) {
            d.scrollbarFiller.style.display = "block";
            d.scrollbarFiller.style.height = d.scrollbarFiller.style.width = scrollbarWidth(d.measure) + "px";
        } else d.scrollbarFiller.style.display = "";
        if (needsH && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
            d.gutterFiller.style.display = "block";
            d.gutterFiller.style.height = scrollbarWidth(d.measure) + "px";
            d.gutterFiller.style.width = d.gutters.offsetWidth + "px";
        } else d.gutterFiller.style.display = "";
        if (mac_geLion && scrollbarWidth(d.measure) === 0) d.scrollbarV.style.minWidth = d.scrollbarH.style.minHeight = mac_geMountainLion ? "18px" : "12px";
    }
    function visibleLines(display, doc, viewPort) {
        var top = display.scroller.scrollTop, height = display.wrapper.clientHeight;
        if (typeof viewPort == "number") top = viewPort; else if (viewPort) {
            top = viewPort.top;
            height = viewPort.bottom - viewPort.top;
        }
        top = Math.floor(top - paddingTop(display));
        var bottom = Math.ceil(top + height);
        return {
            from: lineAtHeight(doc, top),
            to: lineAtHeight(doc, bottom)
        };
    }
    function alignHorizontally(cm) {
        var display = cm.display;
        if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
        var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
        var gutterW = display.gutters.offsetWidth, l = comp + "px";
        for (var n = display.lineDiv.firstChild; n; n = n.nextSibling) if (n.alignable) {
            for (var i = 0, a = n.alignable; i < a.length; ++i) a[i].style.left = l;
        }
        if (cm.options.fixedGutter) display.gutters.style.left = comp + gutterW + "px";
    }
    function maybeUpdateLineNumberWidth(cm) {
        if (!cm.options.lineNumbers) return false;
        var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
        if (last.length != display.lineNumChars) {
            var test = display.measure.appendChild(elt("div", [ elt("div", last) ], "CodeMirror-linenumber CodeMirror-gutter-elt"));
            var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
            display.lineGutter.style.width = "";
            display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding);
            display.lineNumWidth = display.lineNumInnerWidth + padding;
            display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
            display.lineGutter.style.width = display.lineNumWidth + "px";
            return true;
        }
        return false;
    }
    function lineNumberFor(options, i) {
        return String(options.lineNumberFormatter(i + options.firstLineNumber));
    }
    function compensateForHScroll(display) {
        return getRect(display.scroller).left - getRect(display.sizer).left;
    }
    function updateDisplay(cm, changes, viewPort) {
        var oldFrom = cm.display.showingFrom, oldTo = cm.display.showingTo, updated;
        var visible = visibleLines(cm.display, cm.doc, viewPort);
        for (;;) {
            if (!updateDisplayInner(cm, changes, visible)) break;
            updated = true;
            updateSelection(cm);
            updateScrollbars(cm);
            if (viewPort) viewPort = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, typeof viewPort == "number" ? viewPort : viewPort.top);
            visible = visibleLines(cm.display, cm.doc, viewPort);
            if (visible.from >= cm.display.showingFrom && visible.to <= cm.display.showingTo) break;
            changes = [];
        }
        if (updated) {
            signalLater(cm, "update", cm);
            if (cm.display.showingFrom != oldFrom || cm.display.showingTo != oldTo) signalLater(cm, "viewportChange", cm, cm.display.showingFrom, cm.display.showingTo);
        }
        return updated;
    }
    function updateDisplayInner(cm, changes, visible) {
        var display = cm.display, doc = cm.doc;
        if (!display.wrapper.clientWidth) {
            display.showingFrom = display.showingTo = doc.first;
            display.viewOffset = 0;
            return;
        }
        if (changes.length == 0 && visible.from > display.showingFrom && visible.to < display.showingTo) return;
        if (maybeUpdateLineNumberWidth(cm)) changes = [ {
            from: doc.first,
            to: doc.first + doc.size
        } ];
        var gutterW = display.sizer.style.marginLeft = display.gutters.offsetWidth + "px";
        display.scrollbarH.style.left = cm.options.fixedGutter ? gutterW : "0";
        var positionsChangedFrom = Infinity;
        if (cm.options.lineNumbers) for (var i = 0; i < changes.length; ++i) if (changes[i].diff) {
            positionsChangedFrom = changes[i].from;
            break;
        }
        var end = doc.first + doc.size;
        var from = Math.max(visible.from - cm.options.viewportMargin, doc.first);
        var to = Math.min(end, visible.to + cm.options.viewportMargin);
        if (display.showingFrom < from && from - display.showingFrom < 20) from = Math.max(doc.first, display.showingFrom);
        if (display.showingTo > to && display.showingTo - to < 20) to = Math.min(end, display.showingTo);
        if (sawCollapsedSpans) {
            from = lineNo(visualLine(doc, getLine(doc, from)));
            while (to < end && lineIsHidden(doc, getLine(doc, to))) ++to;
        }
        var intact = [ {
            from: Math.max(display.showingFrom, doc.first),
            to: Math.min(display.showingTo, end)
        } ];
        if (intact[0].from >= intact[0].to) intact = []; else intact = computeIntact(intact, changes);
        if (sawCollapsedSpans) for (var i = 0; i < intact.length; ++i) {
            var range = intact[i], merged;
            while (merged = collapsedSpanAtEnd(getLine(doc, range.to - 1))) {
                var newTo = merged.find().from.line;
                if (newTo > range.from) range.to = newTo; else {
                    intact.splice(i--, 1);
                    break;
                }
            }
        }
        var intactLines = 0;
        for (var i = 0; i < intact.length; ++i) {
            var range = intact[i];
            if (range.from < from) range.from = from;
            if (range.to > to) range.to = to;
            if (range.from >= range.to) intact.splice(i--, 1); else intactLines += range.to - range.from;
        }
        if (intactLines == to - from && from == display.showingFrom && to == display.showingTo) {
            updateViewOffset(cm);
            return;
        }
        intact.sort(function(a, b) {
            return a.from - b.from;
        });
        try {
            var focused = document.activeElement;
        } catch (e) {}
        if (intactLines < (to - from) * .7) display.lineDiv.style.display = "none";
        patchDisplay(cm, from, to, intact, positionsChangedFrom);
        display.lineDiv.style.display = "";
        if (focused && document.activeElement != focused && focused.offsetHeight) focused.focus();
        var different = from != display.showingFrom || to != display.showingTo || display.lastSizeC != display.wrapper.clientHeight;
        if (different) {
            display.lastSizeC = display.wrapper.clientHeight;
            startWorker(cm, 400);
        }
        display.showingFrom = from;
        display.showingTo = to;
        var prevBottom = display.lineDiv.offsetTop;
        for (var node = display.lineDiv.firstChild, height; node; node = node.nextSibling) if (node.lineObj) {
            if (ie_lt8) {
                var bot = node.offsetTop + node.offsetHeight;
                height = bot - prevBottom;
                prevBottom = bot;
            } else {
                var box = getRect(node);
                height = box.bottom - box.top;
            }
            var diff = node.lineObj.height - height;
            if (height < 2) height = textHeight(display);
            if (diff > .001 || diff < -.001) {
                updateLineHeight(node.lineObj, height);
                var widgets = node.lineObj.widgets;
                if (widgets) for (var i = 0; i < widgets.length; ++i) widgets[i].height = widgets[i].node.offsetHeight;
            }
        }
        updateViewOffset(cm);
        return true;
    }
    function updateViewOffset(cm) {
        var off = cm.display.viewOffset = heightAtLine(cm, getLine(cm.doc, cm.display.showingFrom));
        cm.display.mover.style.top = off + "px";
    }
    function computeIntact(intact, changes) {
        for (var i = 0, l = changes.length || 0; i < l; ++i) {
            var change = changes[i], intact2 = [], diff = change.diff || 0;
            for (var j = 0, l2 = intact.length; j < l2; ++j) {
                var range = intact[j];
                if (change.to <= range.from && change.diff) {
                    intact2.push({
                        from: range.from + diff,
                        to: range.to + diff
                    });
                } else if (change.to <= range.from || change.from >= range.to) {
                    intact2.push(range);
                } else {
                    if (change.from > range.from) intact2.push({
                        from: range.from,
                        to: change.from
                    });
                    if (change.to < range.to) intact2.push({
                        from: change.to + diff,
                        to: range.to + diff
                    });
                }
            }
            intact = intact2;
        }
        return intact;
    }
    function getDimensions(cm) {
        var d = cm.display, left = {}, width = {};
        for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
            left[cm.options.gutters[i]] = n.offsetLeft;
            width[cm.options.gutters[i]] = n.offsetWidth;
        }
        return {
            fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth
        };
    }
    function patchDisplay(cm, from, to, intact, updateNumbersFrom) {
        var dims = getDimensions(cm);
        var display = cm.display, lineNumbers = cm.options.lineNumbers;
        if (!intact.length && (!webkit || !cm.display.currentWheelTarget)) removeChildren(display.lineDiv);
        var container = display.lineDiv, cur = container.firstChild;
        function rm(node) {
            var next = node.nextSibling;
            if (webkit && mac && cm.display.currentWheelTarget == node) {
                node.style.display = "none";
                node.lineObj = null;
            } else {
                node.parentNode.removeChild(node);
            }
            return next;
        }
        var nextIntact = intact.shift(), lineN = from;
        cm.doc.iter(from, to, function(line) {
            if (nextIntact && nextIntact.to == lineN) nextIntact = intact.shift();
            if (lineIsHidden(cm.doc, line)) {
                if (line.height != 0) updateLineHeight(line, 0);
                if (line.widgets && cur.previousSibling) for (var i = 0; i < line.widgets.length; ++i) {
                    var w = line.widgets[i];
                    if (w.showIfHidden) {
                        var prev = cur.previousSibling;
                        if (/pre/i.test(prev.nodeName)) {
                            var wrap = elt("div", null, null, "position: relative");
                            prev.parentNode.replaceChild(wrap, prev);
                            wrap.appendChild(prev);
                            prev = wrap;
                        }
                        var wnode = prev.appendChild(elt("div", [ w.node ], "CodeMirror-linewidget"));
                        if (!w.handleMouseEvents) wnode.ignoreEvents = true;
                        positionLineWidget(w, wnode, prev, dims);
                    }
                }
            } else if (nextIntact && nextIntact.from <= lineN && nextIntact.to > lineN) {
                while (cur.lineObj != line) cur = rm(cur);
                if (lineNumbers && updateNumbersFrom <= lineN && cur.lineNumber) setTextContent(cur.lineNumber, lineNumberFor(cm.options, lineN));
                cur = cur.nextSibling;
            } else {
                if (line.widgets) for (var j = 0, search = cur, reuse; search && j < 20; ++j, search = search.nextSibling) if (search.lineObj == line && /div/i.test(search.nodeName)) {
                    reuse = search;
                    break;
                }
                var lineNode = buildLineElement(cm, line, lineN, dims, reuse);
                if (lineNode != reuse) {
                    container.insertBefore(lineNode, cur);
                } else {
                    while (cur != reuse) cur = rm(cur);
                    cur = cur.nextSibling;
                }
                lineNode.lineObj = line;
            }
            ++lineN;
        });
        while (cur) cur = rm(cur);
    }
    function buildLineElement(cm, line, lineNo, dims, reuse) {
        var lineElement = lineContent(cm, line);
        var markers = line.gutterMarkers, display = cm.display, wrap;
        if (!cm.options.lineNumbers && !markers && !line.bgClass && !line.wrapClass && !line.widgets) return lineElement;
        if (reuse) {
            reuse.alignable = null;
            var isOk = true, widgetsSeen = 0, insertBefore = null;
            for (var n = reuse.firstChild, next; n; n = next) {
                next = n.nextSibling;
                if (!/\bCodeMirror-linewidget\b/.test(n.className)) {
                    reuse.removeChild(n);
                } else {
                    for (var i = 0, first = true; i < line.widgets.length; ++i) {
                        var widget = line.widgets[i];
                        if (!widget.above) {
                            insertBefore = n;
                            first = false;
                        }
                        if (widget.node == n.firstChild) {
                            positionLineWidget(widget, n, reuse, dims);
                            ++widgetsSeen;
                            break;
                        }
                    }
                    if (i == line.widgets.length) {
                        isOk = false;
                        break;
                    }
                }
            }
            reuse.insertBefore(lineElement, insertBefore);
            if (isOk && widgetsSeen == line.widgets.length) {
                wrap = reuse;
                reuse.className = line.wrapClass || "";
            }
        }
        if (!wrap) {
            wrap = elt("div", null, line.wrapClass, "position: relative");
            wrap.appendChild(lineElement);
        }
        if (line.bgClass) wrap.insertBefore(elt("div", null, line.bgClass + " CodeMirror-linebackground"), wrap.firstChild);
        if (cm.options.lineNumbers || markers) {
            var gutterWrap = wrap.insertBefore(elt("div", null, null, "position: absolute; left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"), wrap.firstChild);
            if (cm.options.fixedGutter) (wrap.alignable || (wrap.alignable = [])).push(gutterWrap);
            if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"])) wrap.lineNumber = gutterWrap.appendChild(elt("div", lineNumberFor(cm.options, lineNo), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + display.lineNumInnerWidth + "px"));
            if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
                var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
                if (found) gutterWrap.appendChild(elt("div", [ found ], "CodeMirror-gutter-elt", "left: " + dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
            }
        }
        if (ie_lt8) wrap.style.zIndex = 2;
        if (line.widgets && wrap != reuse) for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
            var widget = ws[i], node = elt("div", [ widget.node ], "CodeMirror-linewidget");
            if (!widget.handleMouseEvents) node.ignoreEvents = true;
            positionLineWidget(widget, node, wrap, dims);
            if (widget.above) wrap.insertBefore(node, cm.options.lineNumbers && line.height != 0 ? gutterWrap : lineElement); else wrap.appendChild(node);
            signalLater(widget, "redraw");
        }
        return wrap;
    }
    function positionLineWidget(widget, node, wrap, dims) {
        if (widget.noHScroll) {
            (wrap.alignable || (wrap.alignable = [])).push(node);
            var width = dims.wrapperWidth;
            node.style.left = dims.fixedPos + "px";
            if (!widget.coverGutter) {
                width -= dims.gutterTotalWidth;
                node.style.paddingLeft = dims.gutterTotalWidth + "px";
            }
            node.style.width = width + "px";
        }
        if (widget.coverGutter) {
            node.style.zIndex = 5;
            node.style.position = "relative";
            if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
        }
    }
    function updateSelection(cm) {
        var display = cm.display;
        var collapsed = posEq(cm.doc.sel.from, cm.doc.sel.to);
        if (collapsed || cm.options.showCursorWhenSelecting) updateSelectionCursor(cm); else display.cursor.style.display = display.otherCursor.style.display = "none";
        if (!collapsed) updateSelectionRange(cm); else display.selectionDiv.style.display = "none";
        if (cm.options.moveInputWithCursor) {
            var headPos = cursorCoords(cm, cm.doc.sel.head, "div");
            var wrapOff = getRect(display.wrapper), lineOff = getRect(display.lineDiv);
            display.inputDiv.style.top = Math.max(0, Math.min(display.wrapper.clientHeight - 10, headPos.top + lineOff.top - wrapOff.top)) + "px";
            display.inputDiv.style.left = Math.max(0, Math.min(display.wrapper.clientWidth - 10, headPos.left + lineOff.left - wrapOff.left)) + "px";
        }
    }
    function updateSelectionCursor(cm) {
        var display = cm.display, pos = cursorCoords(cm, cm.doc.sel.head, "div");
        display.cursor.style.left = pos.left + "px";
        display.cursor.style.top = pos.top + "px";
        display.cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
        display.cursor.style.display = "";
        if (pos.other) {
            display.otherCursor.style.display = "";
            display.otherCursor.style.left = pos.other.left + "px";
            display.otherCursor.style.top = pos.other.top + "px";
            display.otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
        } else {
            display.otherCursor.style.display = "none";
        }
    }
    function updateSelectionRange(cm) {
        var display = cm.display, doc = cm.doc, sel = cm.doc.sel;
        var fragment = document.createDocumentFragment();
        var clientWidth = display.lineSpace.offsetWidth, pl = paddingLeft(cm.display);
        function add(left, top, width, bottom) {
            if (top < 0) top = 0;
            fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left + "px; top: " + top + "px; width: " + (width == null ? clientWidth - left : width) + "px; height: " + (bottom - top) + "px"));
        }
        function drawForLine(line, fromArg, toArg) {
            var lineObj = getLine(doc, line);
            var lineLen = lineObj.text.length;
            var start, end;
            function coords(ch, bias) {
                return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
            }
            iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
                var leftPos = coords(from, "left"), rightPos, left, right;
                if (from == to) {
                    rightPos = leftPos;
                    left = right = leftPos.left;
                } else {
                    rightPos = coords(to - 1, "right");
                    if (dir == "rtl") {
                        var tmp = leftPos;
                        leftPos = rightPos;
                        rightPos = tmp;
                    }
                    left = leftPos.left;
                    right = rightPos.right;
                }
                if (fromArg == null && from == 0) left = pl;
                if (rightPos.top - leftPos.top > 3) {
                    add(left, leftPos.top, null, leftPos.bottom);
                    left = pl;
                    if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
                }
                if (toArg == null && to == lineLen) right = clientWidth;
                if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left) start = leftPos;
                if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right) end = rightPos;
                if (left < pl + 1) left = pl;
                add(left, rightPos.top, right - left, rightPos.bottom);
            });
            return {
                start: start,
                end: end
            };
        }
        if (sel.from.line == sel.to.line) {
            drawForLine(sel.from.line, sel.from.ch, sel.to.ch);
        } else {
            var fromLine = getLine(doc, sel.from.line), toLine = getLine(doc, sel.to.line);
            var singleVLine = visualLine(doc, fromLine) == visualLine(doc, toLine);
            var leftEnd = drawForLine(sel.from.line, sel.from.ch, singleVLine ? fromLine.text.length : null).end;
            var rightStart = drawForLine(sel.to.line, singleVLine ? 0 : null, sel.to.ch).start;
            if (singleVLine) {
                if (leftEnd.top < rightStart.top - 2) {
                    add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
                    add(pl, rightStart.top, rightStart.left, rightStart.bottom);
                } else {
                    add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
                }
            }
            if (leftEnd.bottom < rightStart.top) add(pl, leftEnd.bottom, null, rightStart.top);
        }
        removeChildrenAndAdd(display.selectionDiv, fragment);
        display.selectionDiv.style.display = "";
    }
    function restartBlink(cm) {
        if (!cm.state.focused) return;
        var display = cm.display;
        clearInterval(display.blinker);
        var on = true;
        display.cursor.style.visibility = display.otherCursor.style.visibility = "";
        display.blinker = setInterval(function() {
            display.cursor.style.visibility = display.otherCursor.style.visibility = (on = !on) ? "" : "hidden";
        }, cm.options.cursorBlinkRate);
    }
    function startWorker(cm, time) {
        if (cm.doc.mode.startState && cm.doc.frontier < cm.display.showingTo) cm.state.highlight.set(time, bind(highlightWorker, cm));
    }
    function highlightWorker(cm) {
        var doc = cm.doc;
        if (doc.frontier < doc.first) doc.frontier = doc.first;
        if (doc.frontier >= cm.display.showingTo) return;
        var end = +new Date() + cm.options.workTime;
        var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
        var changed = [], prevChange;
        doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.showingTo + 500), function(line) {
            if (doc.frontier >= cm.display.showingFrom) {
                var oldStyles = line.styles;
                line.styles = highlightLine(cm, line, state);
                var ischange = !oldStyles || oldStyles.length != line.styles.length;
                for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
                if (ischange) {
                    if (prevChange && prevChange.end == doc.frontier) prevChange.end++; else changed.push(prevChange = {
                        start: doc.frontier,
                        end: doc.frontier + 1
                    });
                }
                line.stateAfter = copyState(doc.mode, state);
            } else {
                processLine(cm, line, state);
                line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
            }
            ++doc.frontier;
            if (+new Date() > end) {
                startWorker(cm, cm.options.workDelay);
                return true;
            }
        });
        if (changed.length) operation(cm, function() {
            for (var i = 0; i < changed.length; ++i) regChange(this, changed[i].start, changed[i].end);
        })();
    }
    function findStartLine(cm, n, precise) {
        var minindent, minline, doc = cm.doc;
        for (var search = n, lim = n - 100; search > lim; --search) {
            if (search <= doc.first) return doc.first;
            var line = getLine(doc, search - 1);
            if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
            var indented = countColumn(line.text, null, cm.options.tabSize);
            if (minline == null || minindent > indented) {
                minline = search - 1;
                minindent = indented;
            }
        }
        return minline;
    }
    function getStateBefore(cm, n, precise) {
        var doc = cm.doc, display = cm.display;
        if (!doc.mode.startState) return true;
        var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos - 1).stateAfter;
        if (!state) state = startState(doc.mode); else state = copyState(doc.mode, state);
        doc.iter(pos, n, function(line) {
            processLine(cm, line, state);
            var save = pos == n - 1 || pos % 5 == 0 || pos >= display.showingFrom && pos < display.showingTo;
            line.stateAfter = save ? copyState(doc.mode, state) : null;
            ++pos;
        });
        return state;
    }
    function paddingTop(display) {
        return display.lineSpace.offsetTop;
    }
    function paddingVert(display) {
        return display.mover.offsetHeight - display.lineSpace.offsetHeight;
    }
    function paddingLeft(display) {
        var e = removeChildrenAndAdd(display.measure, elt("pre", null, null, "text-align: left")).appendChild(elt("span", "x"));
        return e.offsetLeft;
    }
    function measureChar(cm, line, ch, data, bias) {
        var dir = -1;
        data = data || measureLine(cm, line);
        for (var pos = ch; ;pos += dir) {
            var r = data[pos];
            if (r) break;
            if (dir < 0 && pos == 0) dir = 1;
        }
        var rightV = (pos < ch || bias == "right") && r.topRight != null;
        return {
            left: pos < ch ? r.right : r.left,
            right: pos > ch ? r.left : r.right,
            top: rightV ? r.topRight : r.top,
            bottom: rightV ? r.bottomRight : r.bottom
        };
    }
    function findCachedMeasurement(cm, line) {
        var cache = cm.display.measureLineCache;
        for (var i = 0; i < cache.length; ++i) {
            var memo = cache[i];
            if (memo.text == line.text && memo.markedSpans == line.markedSpans && cm.display.scroller.clientWidth == memo.width && memo.classes == line.textClass + "|" + line.bgClass + "|" + line.wrapClass) return memo;
        }
    }
    function clearCachedMeasurement(cm, line) {
        var exists = findCachedMeasurement(cm, line);
        if (exists) exists.text = exists.measure = exists.markedSpans = null;
    }
    function measureLine(cm, line) {
        var cached = findCachedMeasurement(cm, line);
        if (cached) return cached.measure;
        var measure = measureLineInner(cm, line);
        var cache = cm.display.measureLineCache;
        var memo = {
            text: line.text,
            width: cm.display.scroller.clientWidth,
            markedSpans: line.markedSpans,
            measure: measure,
            classes: line.textClass + "|" + line.bgClass + "|" + line.wrapClass
        };
        if (cache.length == 16) cache[++cm.display.measureLineCachePos % 16] = memo; else cache.push(memo);
        return measure;
    }
    function measureLineInner(cm, line) {
        var display = cm.display, measure = emptyArray(line.text.length);
        var pre = lineContent(cm, line, measure);
        if (ie && !ie_lt8 && !cm.options.lineWrapping && pre.childNodes.length > 100) {
            var fragment = document.createDocumentFragment();
            var chunk = 10, n = pre.childNodes.length;
            for (var i = 0, chunks = Math.ceil(n / chunk); i < chunks; ++i) {
                var wrap = elt("div", null, null, "display: inline-block");
                for (var j = 0; j < chunk && n; ++j) {
                    wrap.appendChild(pre.firstChild);
                    --n;
                }
                fragment.appendChild(wrap);
            }
            pre.appendChild(fragment);
        }
        removeChildrenAndAdd(display.measure, pre);
        var outer = getRect(display.lineDiv);
        var vranges = [], data = emptyArray(line.text.length), maxBot = pre.offsetHeight;
        if (ie_lt9 && display.measure.first != pre) removeChildrenAndAdd(display.measure, pre);
        function categorizeVSpan(top, bot) {
            if (bot > maxBot) bot = maxBot;
            if (top < 0) top = 0;
            for (var j = 0; j < vranges.length; j += 2) {
                var rtop = vranges[j], rbot = vranges[j + 1];
                if (rtop > bot || rbot < top) continue;
                if (rtop <= top && rbot >= bot || top <= rtop && bot >= rbot || Math.min(bot, rbot) - Math.max(top, rtop) >= bot - top >> 1) {
                    vranges[j] = Math.min(top, rtop);
                    vranges[j + 1] = Math.max(bot, rbot);
                    return j;
                }
            }
            vranges.push(top, bot);
            return j;
        }
        for (var i = 0, cur; i < measure.length; ++i) if (cur = measure[i]) {
            var size, node = cur;
            if (/\bCodeMirror-widget\b/.test(cur.className) && cur.getClientRects) {
                if (cur.firstChild.nodeType == 1) node = cur.firstChild;
                var rects = node.getClientRects(), rLeft = rects[0], rRight = rects[rects.length - 1];
                if (rects.length > 1) {
                    var vCatLeft = categorizeVSpan(rLeft.top - outer.top, rLeft.bottom - outer.top);
                    var vCatRight = categorizeVSpan(rRight.top - outer.top, rRight.bottom - outer.top);
                    data[i] = {
                        left: rLeft.left - outer.left,
                        right: rRight.right - outer.left,
                        top: vCatLeft,
                        topRight: vCatRight
                    };
                    continue;
                }
            }
            size = getRect(node);
            var vCat = categorizeVSpan(size.top - outer.top, size.bottom - outer.top);
            var right = size.right;
            if (cur.measureRight) right = getRect(cur.measureRight).left;
            data[i] = {
                left: size.left - outer.left,
                right: right - outer.left,
                top: vCat
            };
        }
        for (var i = 0, cur; i < data.length; ++i) if (cur = data[i]) {
            var vr = cur.top, vrRight = cur.topRight;
            cur.top = vranges[vr];
            cur.bottom = vranges[vr + 1];
            if (vrRight != null) {
                cur.topRight = vranges[vrRight];
                cur.bottomRight = vranges[vrRight + 1];
            }
        }
        return data;
    }
    function measureLineWidth(cm, line) {
        var hasBadSpan = false;
        if (line.markedSpans) for (var i = 0; i < line.markedSpans; ++i) {
            var sp = line.markedSpans[i];
            if (sp.collapsed && (sp.to == null || sp.to == line.text.length)) hasBadSpan = true;
        }
        var cached = !hasBadSpan && findCachedMeasurement(cm, line);
        if (cached) return measureChar(cm, line, line.text.length, cached.measure, "right").right;
        var pre = lineContent(cm, line);
        var end = pre.appendChild(zeroWidthElement(cm.display.measure));
        removeChildrenAndAdd(cm.display.measure, pre);
        return getRect(end).right - getRect(cm.display.lineDiv).left;
    }
    function clearCaches(cm) {
        cm.display.measureLineCache.length = cm.display.measureLineCachePos = 0;
        cm.display.cachedCharWidth = cm.display.cachedTextHeight = null;
        if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
        cm.display.lineNumChars = null;
    }
    function pageScrollX() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
    }
    function pageScrollY() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop;
    }
    function intoCoordSystem(cm, lineObj, rect, context) {
        if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
            var size = widgetHeight(lineObj.widgets[i]);
            rect.top += size;
            rect.bottom += size;
        }
        if (context == "line") return rect;
        if (!context) context = "local";
        var yOff = heightAtLine(cm, lineObj);
        if (context == "local") yOff += paddingTop(cm.display); else yOff -= cm.display.viewOffset;
        if (context == "page" || context == "window") {
            var lOff = getRect(cm.display.lineSpace);
            yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
            var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
            rect.left += xOff;
            rect.right += xOff;
        }
        rect.top += yOff;
        rect.bottom += yOff;
        return rect;
    }
    function fromCoordSystem(cm, coords, context) {
        if (context == "div") return coords;
        var left = coords.left, top = coords.top;
        if (context == "page") {
            left -= pageScrollX();
            top -= pageScrollY();
        } else if (context == "local" || !context) {
            var localBox = getRect(cm.display.sizer);
            left += localBox.left;
            top += localBox.top;
        }
        var lineSpaceBox = getRect(cm.display.lineSpace);
        return {
            left: left - lineSpaceBox.left,
            top: top - lineSpaceBox.top
        };
    }
    function charCoords(cm, pos, context, lineObj, bias) {
        if (!lineObj) lineObj = getLine(cm.doc, pos.line);
        return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, null, bias), context);
    }
    function cursorCoords(cm, pos, context, lineObj, measurement) {
        lineObj = lineObj || getLine(cm.doc, pos.line);
        if (!measurement) measurement = measureLine(cm, lineObj);
        function get(ch, right) {
            var m = measureChar(cm, lineObj, ch, measurement, right ? "right" : "left");
            if (right) m.left = m.right; else m.right = m.left;
            return intoCoordSystem(cm, lineObj, m, context);
        }
        function getBidi(ch, partPos) {
            var part = order[partPos], right = part.level % 2;
            if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
                part = order[--partPos];
                ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
                right = true;
            } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
                part = order[++partPos];
                ch = bidiLeft(part) - part.level % 2;
                right = false;
            }
            if (right && ch == part.to && ch > part.from) return get(ch - 1);
            return get(ch, right);
        }
        var order = getOrder(lineObj), ch = pos.ch;
        if (!order) return get(ch);
        var partPos = getBidiPartAt(order, ch);
        var val = getBidi(ch, partPos);
        if (bidiOther != null) val.other = getBidi(ch, bidiOther);
        return val;
    }
    function PosWithInfo(line, ch, outside, xRel) {
        var pos = new Pos(line, ch);
        pos.xRel = xRel;
        if (outside) pos.outside = true;
        return pos;
    }
    function coordsChar(cm, x, y) {
        var doc = cm.doc;
        y += cm.display.viewOffset;
        if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
        var lineNo = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
        if (lineNo > last) return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
        if (x < 0) x = 0;
        for (;;) {
            var lineObj = getLine(doc, lineNo);
            var found = coordsCharInner(cm, lineObj, lineNo, x, y);
            var merged = collapsedSpanAtEnd(lineObj);
            var mergedPos = merged && merged.find();
            if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0)) lineNo = mergedPos.to.line; else return found;
        }
    }
    function coordsCharInner(cm, lineObj, lineNo, x, y) {
        var innerOff = y - heightAtLine(cm, lineObj);
        var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
        var measurement = measureLine(cm, lineObj);
        function getX(ch) {
            var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, measurement);
            wrongLine = true;
            if (innerOff > sp.bottom) return sp.left - adjust; else if (innerOff < sp.top) return sp.left + adjust; else wrongLine = false;
            return sp.left;
        }
        var bidi = getOrder(lineObj), dist = lineObj.text.length;
        var from = lineLeft(lineObj), to = lineRight(lineObj);
        var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;
        if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
        for (;;) {
            if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
                var ch = x < fromX || x - fromX <= toX - x ? from : to;
                var xDiff = x - (ch == from ? fromX : toX);
                while (isExtendingChar.test(lineObj.text.charAt(ch))) ++ch;
                var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside, xDiff < 0 ? -1 : xDiff ? 1 : 0);
                return pos;
            }
            var step = Math.ceil(dist / 2), middle = from + step;
            if (bidi) {
                middle = from;
                for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
            }
            var middleX = getX(middle);
            if (middleX > x) {
                to = middle;
                toX = middleX;
                if (toOutside = wrongLine) toX += 1e3;
                dist = step;
            } else {
                from = middle;
                fromX = middleX;
                fromOutside = wrongLine;
                dist -= step;
            }
        }
    }
    var measureText;
    function textHeight(display) {
        if (display.cachedTextHeight != null) return display.cachedTextHeight;
        if (measureText == null) {
            measureText = elt("pre");
            for (var i = 0; i < 49; ++i) {
                measureText.appendChild(document.createTextNode("x"));
                measureText.appendChild(elt("br"));
            }
            measureText.appendChild(document.createTextNode("x"));
        }
        removeChildrenAndAdd(display.measure, measureText);
        var height = measureText.offsetHeight / 50;
        if (height > 3) display.cachedTextHeight = height;
        removeChildren(display.measure);
        return height || 1;
    }
    function charWidth(display) {
        if (display.cachedCharWidth != null) return display.cachedCharWidth;
        var anchor = elt("span", "x");
        var pre = elt("pre", [ anchor ]);
        removeChildrenAndAdd(display.measure, pre);
        var width = anchor.offsetWidth;
        if (width > 2) display.cachedCharWidth = width;
        return width || 10;
    }
    var nextOpId = 0;
    function startOperation(cm) {
        cm.curOp = {
            changes: [],
            updateInput: null,
            userSelChange: null,
            textChanged: null,
            selectionChanged: false,
            cursorActivity: false,
            updateMaxLine: false,
            updateScrollPos: false,
            id: ++nextOpId
        };
        if (!delayedCallbackDepth++) delayedCallbacks = [];
    }
    function endOperation(cm) {
        var op = cm.curOp, doc = cm.doc, display = cm.display;
        cm.curOp = null;
        if (op.updateMaxLine) computeMaxLength(cm);
        if (display.maxLineChanged && !cm.options.lineWrapping && display.maxLine) {
            var width = measureLineWidth(cm, display.maxLine);
            display.sizer.style.minWidth = Math.max(0, width + 3 + scrollerCutOff) + "px";
            display.maxLineChanged = false;
            var maxScrollLeft = Math.max(0, display.sizer.offsetLeft + display.sizer.offsetWidth - display.scroller.clientWidth);
            if (maxScrollLeft < doc.scrollLeft && !op.updateScrollPos) setScrollLeft(cm, Math.min(display.scroller.scrollLeft, maxScrollLeft), true);
        }
        var newScrollPos, updated;
        if (op.updateScrollPos) {
            newScrollPos = op.updateScrollPos;
        } else if (op.selectionChanged && display.scroller.clientHeight) {
            var coords = cursorCoords(cm, doc.sel.head);
            newScrollPos = calculateScrollPos(cm, coords.left, coords.top, coords.left, coords.bottom);
        }
        if (op.changes.length || newScrollPos && newScrollPos.scrollTop != null) {
            updated = updateDisplay(cm, op.changes, newScrollPos && newScrollPos.scrollTop);
            if (cm.display.scroller.offsetHeight) cm.doc.scrollTop = cm.display.scroller.scrollTop;
        }
        if (!updated && op.selectionChanged) updateSelection(cm);
        if (op.updateScrollPos) {
            display.scroller.scrollTop = display.scrollbarV.scrollTop = doc.scrollTop = newScrollPos.scrollTop;
            display.scroller.scrollLeft = display.scrollbarH.scrollLeft = doc.scrollLeft = newScrollPos.scrollLeft;
            alignHorizontally(cm);
            if (op.scrollToPos) scrollPosIntoView(cm, clipPos(cm.doc, op.scrollToPos), op.scrollToPosMargin);
        } else if (newScrollPos) {
            scrollCursorIntoView(cm);
        }
        if (op.selectionChanged) restartBlink(cm);
        if (cm.state.focused && op.updateInput) resetInput(cm, op.userSelChange);
        var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
        if (hidden) for (var i = 0; i < hidden.length; ++i) if (!hidden[i].lines.length) signal(hidden[i], "hide");
        if (unhidden) for (var i = 0; i < unhidden.length; ++i) if (unhidden[i].lines.length) signal(unhidden[i], "unhide");
        var delayed;
        if (!--delayedCallbackDepth) {
            delayed = delayedCallbacks;
            delayedCallbacks = null;
        }
        if (op.textChanged) signal(cm, "change", cm, op.textChanged);
        if (op.cursorActivity) signal(cm, "cursorActivity", cm);
        if (delayed) for (var i = 0; i < delayed.length; ++i) delayed[i]();
    }
    function operation(cm1, f) {
        return function() {
            var cm = cm1 || this, withOp = !cm.curOp;
            if (withOp) startOperation(cm);
            try {
                var result = f.apply(cm, arguments);
            } finally {
                if (withOp) endOperation(cm);
            }
            return result;
        };
    }
    function docOperation(f) {
        return function() {
            var withOp = this.cm && !this.cm.curOp, result;
            if (withOp) startOperation(this.cm);
            try {
                result = f.apply(this, arguments);
            } finally {
                if (withOp) endOperation(this.cm);
            }
            return result;
        };
    }
    function runInOp(cm, f) {
        var withOp = !cm.curOp, result;
        if (withOp) startOperation(cm);
        try {
            result = f();
        } finally {
            if (withOp) endOperation(cm);
        }
        return result;
    }
    function regChange(cm, from, to, lendiff) {
        if (from == null) from = cm.doc.first;
        if (to == null) to = cm.doc.first + cm.doc.size;
        cm.curOp.changes.push({
            from: from,
            to: to,
            diff: lendiff
        });
    }
    function slowPoll(cm) {
        if (cm.display.pollingFast) return;
        cm.display.poll.set(cm.options.pollInterval, function() {
            readInput(cm);
            if (cm.state.focused) slowPoll(cm);
        });
    }
    function fastPoll(cm) {
        var missed = false;
        cm.display.pollingFast = true;
        function p() {
            var changed = readInput(cm);
            if (!changed && !missed) {
                missed = true;
                cm.display.poll.set(60, p);
            } else {
                cm.display.pollingFast = false;
                slowPoll(cm);
            }
        }
        cm.display.poll.set(20, p);
    }
    function readInput(cm) {
        var input = cm.display.input, prevInput = cm.display.prevInput, doc = cm.doc, sel = doc.sel;
        if (!cm.state.focused || hasSelection(input) || isReadOnly(cm) || cm.state.disableInput) return false;
        var text = input.value;
        if (text == prevInput && posEq(sel.from, sel.to)) return false;
        if (ie && !ie_lt9 && cm.display.inputHasSelection === text) {
            resetInput(cm, true);
            return false;
        }
        var withOp = !cm.curOp;
        if (withOp) startOperation(cm);
        sel.shift = false;
        var same = 0, l = Math.min(prevInput.length, text.length);
        while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;
        var from = sel.from, to = sel.to;
        if (same < prevInput.length) from = Pos(from.line, from.ch - (prevInput.length - same)); else if (cm.state.overwrite && posEq(from, to) && !cm.state.pasteIncoming) to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + (text.length - same)));
        var updateInput = cm.curOp.updateInput;
        var changeEvent = {
            from: from,
            to: to,
            text: splitLines(text.slice(same)),
            origin: cm.state.pasteIncoming ? "paste" : "+input"
        };
        makeChange(cm.doc, changeEvent, "end");
        cm.curOp.updateInput = updateInput;
        signalLater(cm, "inputRead", cm, changeEvent);
        if (text.length > 1e3 || text.indexOf("\n") > -1) input.value = cm.display.prevInput = ""; else cm.display.prevInput = text;
        if (withOp) endOperation(cm);
        cm.state.pasteIncoming = false;
        return true;
    }
    function resetInput(cm, user) {
        var minimal, selected, doc = cm.doc;
        if (!posEq(doc.sel.from, doc.sel.to)) {
            cm.display.prevInput = "";
            minimal = hasCopyEvent && (doc.sel.to.line - doc.sel.from.line > 100 || (selected = cm.getSelection()).length > 1e3);
            var content = minimal ? "-" : selected || cm.getSelection();
            cm.display.input.value = content;
            if (cm.state.focused) selectInput(cm.display.input);
            if (ie && !ie_lt9) cm.display.inputHasSelection = content;
        } else if (user) {
            cm.display.prevInput = cm.display.input.value = "";
            if (ie && !ie_lt9) cm.display.inputHasSelection = null;
        }
        cm.display.inaccurateSelection = minimal;
    }
    function focusInput(cm) {
        if (cm.options.readOnly != "nocursor" && (!mobile || document.activeElement != cm.display.input)) cm.display.input.focus();
    }
    function isReadOnly(cm) {
        return cm.options.readOnly || cm.doc.cantEdit;
    }
    function registerEventHandlers(cm) {
        var d = cm.display;
        on(d.scroller, "mousedown", operation(cm, onMouseDown));
        if (ie) on(d.scroller, "dblclick", operation(cm, function(e) {
            if (signalDOMEvent(cm, e)) return;
            var pos = posFromMouse(cm, e);
            if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
            e_preventDefault(e);
            var word = findWordAt(getLine(cm.doc, pos.line).text, pos);
            extendSelection(cm.doc, word.from, word.to);
        })); else on(d.scroller, "dblclick", function(e) {
            signalDOMEvent(cm, e) || e_preventDefault(e);
        });
        on(d.lineSpace, "selectstart", function(e) {
            if (!eventInWidget(d, e)) e_preventDefault(e);
        });
        if (!captureMiddleClick) on(d.scroller, "contextmenu", function(e) {
            onContextMenu(cm, e);
        });
        on(d.scroller, "scroll", function() {
            if (d.scroller.clientHeight) {
                setScrollTop(cm, d.scroller.scrollTop);
                setScrollLeft(cm, d.scroller.scrollLeft, true);
                signal(cm, "scroll", cm);
            }
        });
        on(d.scrollbarV, "scroll", function() {
            if (d.scroller.clientHeight) setScrollTop(cm, d.scrollbarV.scrollTop);
        });
        on(d.scrollbarH, "scroll", function() {
            if (d.scroller.clientHeight) setScrollLeft(cm, d.scrollbarH.scrollLeft);
        });
        on(d.scroller, "mousewheel", function(e) {
            onScrollWheel(cm, e);
        });
        on(d.scroller, "DOMMouseScroll", function(e) {
            onScrollWheel(cm, e);
        });
        function reFocus() {
            if (cm.state.focused) setTimeout(bind(focusInput, cm), 0);
        }
        on(d.scrollbarH, "mousedown", reFocus);
        on(d.scrollbarV, "mousedown", reFocus);
        on(d.wrapper, "scroll", function() {
            d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
        });
        var resizeTimer;
        function onResize() {
            if (resizeTimer == null) resizeTimer = setTimeout(function() {
                resizeTimer = null;
                d.cachedCharWidth = d.cachedTextHeight = knownScrollbarWidth = null;
                clearCaches(cm);
                runInOp(cm, bind(regChange, cm));
            }, 100);
        }
        on(window, "resize", onResize);
        function unregister() {
            for (var p = d.wrapper.parentNode; p && p != document.body; p = p.parentNode) {}
            if (p) setTimeout(unregister, 5e3); else off(window, "resize", onResize);
        }
        setTimeout(unregister, 5e3);
        on(d.input, "keyup", operation(cm, function(e) {
            if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
            if (e.keyCode == 16) cm.doc.sel.shift = false;
        }));
        on(d.input, "input", bind(fastPoll, cm));
        on(d.input, "keydown", operation(cm, onKeyDown));
        on(d.input, "keypress", operation(cm, onKeyPress));
        on(d.input, "focus", bind(onFocus, cm));
        on(d.input, "blur", bind(onBlur, cm));
        function drag_(e) {
            if (signalDOMEvent(cm, e) || cm.options.onDragEvent && cm.options.onDragEvent(cm, addStop(e))) return;
            e_stop(e);
        }
        if (cm.options.dragDrop) {
            on(d.scroller, "dragstart", function(e) {
                onDragStart(cm, e);
            });
            on(d.scroller, "dragenter", drag_);
            on(d.scroller, "dragover", drag_);
            on(d.scroller, "drop", operation(cm, onDrop));
        }
        on(d.scroller, "paste", function(e) {
            if (eventInWidget(d, e)) return;
            focusInput(cm);
            fastPoll(cm);
        });
        on(d.input, "paste", function() {
            cm.state.pasteIncoming = true;
            fastPoll(cm);
        });
        function prepareCopy() {
            if (d.inaccurateSelection) {
                d.prevInput = "";
                d.inaccurateSelection = false;
                d.input.value = cm.getSelection();
                selectInput(d.input);
            }
        }
        on(d.input, "cut", prepareCopy);
        on(d.input, "copy", prepareCopy);
        if (khtml) on(d.sizer, "mouseup", function() {
            if (document.activeElement == d.input) d.input.blur();
            focusInput(cm);
        });
    }
    function eventInWidget(display, e) {
        for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
            if (!n || n.ignoreEvents || n.parentNode == display.sizer && n != display.mover) return true;
        }
    }
    function posFromMouse(cm, e, liberal) {
        var display = cm.display;
        if (!liberal) {
            var target = e_target(e);
            if (target == display.scrollbarH || target == display.scrollbarH.firstChild || target == display.scrollbarV || target == display.scrollbarV.firstChild || target == display.scrollbarFiller || target == display.gutterFiller) return null;
        }
        var x, y, space = getRect(display.lineSpace);
        try {
            x = e.clientX;
            y = e.clientY;
        } catch (e) {
            return null;
        }
        return coordsChar(cm, x - space.left, y - space.top);
    }
    var lastClick, lastDoubleClick;
    function onMouseDown(e) {
        if (signalDOMEvent(this, e)) return;
        var cm = this, display = cm.display, doc = cm.doc, sel = doc.sel;
        sel.shift = e.shiftKey;
        if (eventInWidget(display, e)) {
            if (!webkit) {
                display.scroller.draggable = false;
                setTimeout(function() {
                    display.scroller.draggable = true;
                }, 100);
            }
            return;
        }
        if (clickInGutter(cm, e)) return;
        var start = posFromMouse(cm, e);
        switch (e_button(e)) {
          case 3:
            if (captureMiddleClick) onContextMenu.call(cm, cm, e);
            return;

          case 2:
            if (start) extendSelection(cm.doc, start);
            setTimeout(bind(focusInput, cm), 20);
            e_preventDefault(e);
            return;
        }
        if (!start) {
            if (e_target(e) == display.scroller) e_preventDefault(e);
            return;
        }
        if (!cm.state.focused) onFocus(cm);
        var now = +new Date(), type = "single";
        if (lastDoubleClick && lastDoubleClick.time > now - 400 && posEq(lastDoubleClick.pos, start)) {
            type = "triple";
            e_preventDefault(e);
            setTimeout(bind(focusInput, cm), 20);
            selectLine(cm, start.line);
        } else if (lastClick && lastClick.time > now - 400 && posEq(lastClick.pos, start)) {
            type = "double";
            lastDoubleClick = {
                time: now,
                pos: start
            };
            e_preventDefault(e);
            var word = findWordAt(getLine(doc, start.line).text, start);
            extendSelection(cm.doc, word.from, word.to);
        } else {
            lastClick = {
                time: now,
                pos: start
            };
        }
        var last = start;
        if (cm.options.dragDrop && dragAndDrop && !isReadOnly(cm) && !posEq(sel.from, sel.to) && !posLess(start, sel.from) && !posLess(sel.to, start) && type == "single") {
            var dragEnd = operation(cm, function(e2) {
                if (webkit) display.scroller.draggable = false;
                cm.state.draggingText = false;
                off(document, "mouseup", dragEnd);
                off(display.scroller, "drop", dragEnd);
                if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
                    e_preventDefault(e2);
                    extendSelection(cm.doc, start);
                    focusInput(cm);
                }
            });
            if (webkit) display.scroller.draggable = true;
            cm.state.draggingText = dragEnd;
            if (display.scroller.dragDrop) display.scroller.dragDrop();
            on(document, "mouseup", dragEnd);
            on(display.scroller, "drop", dragEnd);
            return;
        }
        e_preventDefault(e);
        if (type == "single") extendSelection(cm.doc, clipPos(doc, start));
        var startstart = sel.from, startend = sel.to, lastPos = start;
        function doSelect(cur) {
            if (posEq(lastPos, cur)) return;
            lastPos = cur;
            if (type == "single") {
                extendSelection(cm.doc, clipPos(doc, start), cur);
                return;
            }
            startstart = clipPos(doc, startstart);
            startend = clipPos(doc, startend);
            if (type == "double") {
                var word = findWordAt(getLine(doc, cur.line).text, cur);
                if (posLess(cur, startstart)) extendSelection(cm.doc, word.from, startend); else extendSelection(cm.doc, startstart, word.to);
            } else if (type == "triple") {
                if (posLess(cur, startstart)) extendSelection(cm.doc, startend, clipPos(doc, Pos(cur.line, 0))); else extendSelection(cm.doc, startstart, clipPos(doc, Pos(cur.line + 1, 0)));
            }
        }
        var editorSize = getRect(display.wrapper);
        var counter = 0;
        function extend(e) {
            var curCount = ++counter;
            var cur = posFromMouse(cm, e, true);
            if (!cur) return;
            if (!posEq(cur, last)) {
                if (!cm.state.focused) onFocus(cm);
                last = cur;
                doSelect(cur);
                var visible = visibleLines(display, doc);
                if (cur.line >= visible.to || cur.line < visible.from) setTimeout(operation(cm, function() {
                    if (counter == curCount) extend(e);
                }), 150);
            } else {
                var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
                if (outside) setTimeout(operation(cm, function() {
                    if (counter != curCount) return;
                    display.scroller.scrollTop += outside;
                    extend(e);
                }), 50);
            }
        }
        function done(e) {
            counter = Infinity;
            e_preventDefault(e);
            focusInput(cm);
            off(document, "mousemove", move);
            off(document, "mouseup", up);
        }
        var move = operation(cm, function(e) {
            if (!ie && !e_button(e)) done(e); else extend(e);
        });
        var up = operation(cm, done);
        on(document, "mousemove", move);
        on(document, "mouseup", up);
    }
    function clickInGutter(cm, e) {
        var display = cm.display;
        try {
            var mX = e.clientX, mY = e.clientY;
        } catch (e) {
            return false;
        }
        if (mX >= Math.floor(getRect(display.gutters).right)) return false;
        e_preventDefault(e);
        if (!hasHandler(cm, "gutterClick")) return true;
        var lineBox = getRect(display.lineDiv);
        if (mY > lineBox.bottom) return true;
        mY -= lineBox.top - display.viewOffset;
        for (var i = 0; i < cm.options.gutters.length; ++i) {
            var g = display.gutters.childNodes[i];
            if (g && getRect(g).right >= mX) {
                var line = lineAtHeight(cm.doc, mY);
                var gutter = cm.options.gutters[i];
                signalLater(cm, "gutterClick", cm, line, gutter, e);
                break;
            }
        }
        return true;
    }
    var lastDrop = 0;
    function onDrop(e) {
        var cm = this;
        if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e) || cm.options.onDragEvent && cm.options.onDragEvent(cm, addStop(e))) return;
        e_preventDefault(e);
        if (ie) lastDrop = +new Date();
        var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
        if (!pos || isReadOnly(cm)) return;
        if (files && files.length && window.FileReader && window.File) {
            var n = files.length, text = Array(n), read = 0;
            var loadFile = function(file, i) {
                var reader = new FileReader();
                reader.onload = function() {
                    text[i] = reader.result;
                    if (++read == n) {
                        pos = clipPos(cm.doc, pos);
                        makeChange(cm.doc, {
                            from: pos,
                            to: pos,
                            text: splitLines(text.join("\n")),
                            origin: "paste"
                        }, "around");
                    }
                };
                reader.readAsText(file);
            };
            for (var i = 0; i < n; ++i) loadFile(files[i], i);
        } else {
            if (cm.state.draggingText && !(posLess(pos, cm.doc.sel.from) || posLess(cm.doc.sel.to, pos))) {
                cm.state.draggingText(e);
                setTimeout(bind(focusInput, cm), 20);
                return;
            }
            try {
                var text = e.dataTransfer.getData("Text");
                if (text) {
                    var curFrom = cm.doc.sel.from, curTo = cm.doc.sel.to;
                    setSelection(cm.doc, pos, pos);
                    if (cm.state.draggingText) replaceRange(cm.doc, "", curFrom, curTo, "paste");
                    cm.replaceSelection(text, null, "paste");
                    focusInput(cm);
                    onFocus(cm);
                }
            } catch (e) {}
        }
    }
    function onDragStart(cm, e) {
        if (ie && (!cm.state.draggingText || +new Date() - lastDrop < 100)) {
            e_stop(e);
            return;
        }
        if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;
        var txt = cm.getSelection();
        e.dataTransfer.setData("Text", txt);
        if (e.dataTransfer.setDragImage && !safari) {
            var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
            if (opera) {
                img.width = img.height = 1;
                cm.display.wrapper.appendChild(img);
                img._top = img.offsetTop;
            }
            e.dataTransfer.setDragImage(img, 0, 0);
            if (opera) img.parentNode.removeChild(img);
        }
    }
    function setScrollTop(cm, val) {
        if (Math.abs(cm.doc.scrollTop - val) < 2) return;
        cm.doc.scrollTop = val;
        if (!gecko) updateDisplay(cm, [], val);
        if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
        if (cm.display.scrollbarV.scrollTop != val) cm.display.scrollbarV.scrollTop = val;
        if (gecko) updateDisplay(cm, []);
        startWorker(cm, 100);
    }
    function setScrollLeft(cm, val, isScroller) {
        if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
        val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
        cm.doc.scrollLeft = val;
        alignHorizontally(cm);
        if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
        if (cm.display.scrollbarH.scrollLeft != val) cm.display.scrollbarH.scrollLeft = val;
    }
    var wheelSamples = 0, wheelPixelsPerUnit = null;
    if (ie) wheelPixelsPerUnit = -.53; else if (gecko) wheelPixelsPerUnit = 15; else if (chrome) wheelPixelsPerUnit = -.7; else if (safari) wheelPixelsPerUnit = -1 / 3;
    function onScrollWheel(cm, e) {
        var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
        if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
        if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail; else if (dy == null) dy = e.wheelDelta;
        var display = cm.display, scroll = display.scroller;
        if (!(dx && scroll.scrollWidth > scroll.clientWidth || dy && scroll.scrollHeight > scroll.clientHeight)) return;
        if (dy && mac && webkit) {
            for (var cur = e.target; cur != scroll; cur = cur.parentNode) {
                if (cur.lineObj) {
                    cm.display.currentWheelTarget = cur;
                    break;
                }
            }
        }
        if (dx && !gecko && !opera && wheelPixelsPerUnit != null) {
            if (dy) setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
            setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
            e_preventDefault(e);
            display.wheelStartX = null;
            return;
        }
        if (dy && wheelPixelsPerUnit != null) {
            var pixels = dy * wheelPixelsPerUnit;
            var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
            if (pixels < 0) top = Math.max(0, top + pixels - 50); else bot = Math.min(cm.doc.height, bot + pixels + 50);
            updateDisplay(cm, [], {
                top: top,
                bottom: bot
            });
        }
        if (wheelSamples < 20) {
            if (display.wheelStartX == null) {
                display.wheelStartX = scroll.scrollLeft;
                display.wheelStartY = scroll.scrollTop;
                display.wheelDX = dx;
                display.wheelDY = dy;
                setTimeout(function() {
                    if (display.wheelStartX == null) return;
                    var movedX = scroll.scrollLeft - display.wheelStartX;
                    var movedY = scroll.scrollTop - display.wheelStartY;
                    var sample = movedY && display.wheelDY && movedY / display.wheelDY || movedX && display.wheelDX && movedX / display.wheelDX;
                    display.wheelStartX = display.wheelStartY = null;
                    if (!sample) return;
                    wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
                    ++wheelSamples;
                }, 200);
            } else {
                display.wheelDX += dx;
                display.wheelDY += dy;
            }
        }
    }
    function doHandleBinding(cm, bound, dropShift) {
        if (typeof bound == "string") {
            bound = commands[bound];
            if (!bound) return false;
        }
        if (cm.display.pollingFast && readInput(cm)) cm.display.pollingFast = false;
        var doc = cm.doc, prevShift = doc.sel.shift, done = false;
        try {
            if (isReadOnly(cm)) cm.state.suppressEdits = true;
            if (dropShift) doc.sel.shift = false;
            done = bound(cm) != Pass;
        } finally {
            doc.sel.shift = prevShift;
            cm.state.suppressEdits = false;
        }
        return done;
    }
    function allKeyMaps(cm) {
        var maps = cm.state.keyMaps.slice(0);
        if (cm.options.extraKeys) maps.push(cm.options.extraKeys);
        maps.push(cm.options.keyMap);
        return maps;
    }
    var maybeTransition;
    function handleKeyBinding(cm, e) {
        var startMap = getKeyMap(cm.options.keyMap), next = startMap.auto;
        clearTimeout(maybeTransition);
        if (next && !isModifierKey(e)) maybeTransition = setTimeout(function() {
            if (getKeyMap(cm.options.keyMap) == startMap) {
                cm.options.keyMap = next.call ? next.call(null, cm) : next;
                keyMapChanged(cm);
            }
        }, 50);
        var name = keyName(e, true), handled = false;
        if (!name) return false;
        var keymaps = allKeyMaps(cm);
        if (e.shiftKey) {
            handled = lookupKey("Shift-" + name, keymaps, function(b) {
                return doHandleBinding(cm, b, true);
            }) || lookupKey(name, keymaps, function(b) {
                if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion) return doHandleBinding(cm, b);
            });
        } else {
            handled = lookupKey(name, keymaps, function(b) {
                return doHandleBinding(cm, b);
            });
        }
        if (handled) {
            e_preventDefault(e);
            restartBlink(cm);
            if (ie_lt9) {
                e.oldKeyCode = e.keyCode;
                e.keyCode = 0;
            }
            signalLater(cm, "keyHandled", cm, name, e);
        }
        return handled;
    }
    function handleCharBinding(cm, e, ch) {
        var handled = lookupKey("'" + ch + "'", allKeyMaps(cm), function(b) {
            return doHandleBinding(cm, b, true);
        });
        if (handled) {
            e_preventDefault(e);
            restartBlink(cm);
            signalLater(cm, "keyHandled", cm, "'" + ch + "'", e);
        }
        return handled;
    }
    var lastStoppedKey = null;
    function onKeyDown(e) {
        var cm = this;
        if (!cm.state.focused) onFocus(cm);
        if (ie && e.keyCode == 27) {
            e.returnValue = false;
        }
        if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
        var code = e.keyCode;
        cm.doc.sel.shift = code == 16 || e.shiftKey;
        var handled = handleKeyBinding(cm, e);
        if (opera) {
            lastStoppedKey = handled ? code : null;
            if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey)) cm.replaceSelection("");
        }
    }
    function onKeyPress(e) {
        var cm = this;
        if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
        var keyCode = e.keyCode, charCode = e.charCode;
        if (opera && keyCode == lastStoppedKey) {
            lastStoppedKey = null;
            e_preventDefault(e);
            return;
        }
        if ((opera && (!e.which || e.which < 10) || khtml) && handleKeyBinding(cm, e)) return;
        var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
        if (this.options.electricChars && this.doc.mode.electricChars && this.options.smartIndent && !isReadOnly(this) && this.doc.mode.electricChars.indexOf(ch) > -1) setTimeout(operation(cm, function() {
            indentLine(cm, cm.doc.sel.to.line, "smart");
        }), 75);
        if (handleCharBinding(cm, e, ch)) return;
        if (ie && !ie_lt9) cm.display.inputHasSelection = null;
        fastPoll(cm);
    }
    function onFocus(cm) {
        if (cm.options.readOnly == "nocursor") return;
        if (!cm.state.focused) {
            signal(cm, "focus", cm);
            cm.state.focused = true;
            if (cm.display.wrapper.className.search(/\bCodeMirror-focused\b/) == -1) cm.display.wrapper.className += " CodeMirror-focused";
            resetInput(cm, true);
        }
        slowPoll(cm);
        restartBlink(cm);
    }
    function onBlur(cm) {
        if (cm.state.focused) {
            signal(cm, "blur", cm);
            cm.state.focused = false;
            cm.display.wrapper.className = cm.display.wrapper.className.replace(" CodeMirror-focused", "");
        }
        clearInterval(cm.display.blinker);
        setTimeout(function() {
            if (!cm.state.focused) cm.doc.sel.shift = false;
        }, 150);
    }
    var detectingSelectAll;
    function onContextMenu(cm, e) {
        var display = cm.display, sel = cm.doc.sel;
        if (eventInWidget(display, e)) return;
        var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
        if (!pos || opera) return;
        if (posEq(sel.from, sel.to) || posLess(pos, sel.from) || !posLess(pos, sel.to)) operation(cm, setSelection)(cm.doc, pos, pos);
        var oldCSS = display.input.style.cssText;
        display.inputDiv.style.position = "absolute";
        display.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) + "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: white; outline: none;" + "border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);";
        focusInput(cm);
        resetInput(cm, true);
        if (posEq(sel.from, sel.to)) display.input.value = display.prevInput = " ";
        function prepareSelectAllHack() {
            if (display.input.selectionStart != null) {
                var extval = display.input.value = " " + (posEq(sel.from, sel.to) ? "" : display.input.value);
                display.prevInput = " ";
                display.input.selectionStart = 1;
                display.input.selectionEnd = extval.length;
            }
        }
        function rehide() {
            display.inputDiv.style.position = "relative";
            display.input.style.cssText = oldCSS;
            if (ie_lt9) display.scrollbarV.scrollTop = display.scroller.scrollTop = scrollPos;
            slowPoll(cm);
            if (display.input.selectionStart != null) {
                if (!ie || ie_lt9) prepareSelectAllHack();
                clearTimeout(detectingSelectAll);
                var i = 0, poll = function() {
                    if (display.prevInput == " " && display.input.selectionStart == 0) operation(cm, commands.selectAll)(cm); else if (i++ < 10) detectingSelectAll = setTimeout(poll, 500); else resetInput(cm);
                };
                detectingSelectAll = setTimeout(poll, 200);
            }
        }
        if (ie && !ie_lt9) prepareSelectAllHack();
        if (captureMiddleClick) {
            e_stop(e);
            var mouseup = function() {
                off(window, "mouseup", mouseup);
                setTimeout(rehide, 20);
            };
            on(window, "mouseup", mouseup);
        } else {
            setTimeout(rehide, 50);
        }
    }
    var changeEnd = CodeMirror.changeEnd = function(change) {
        if (!change.text) return change.to;
        return Pos(change.from.line + change.text.length - 1, lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
    };
    function clipPostChange(doc, change, pos) {
        if (!posLess(change.from, pos)) return clipPos(doc, pos);
        var diff = change.text.length - 1 - (change.to.line - change.from.line);
        if (pos.line > change.to.line + diff) {
            var preLine = pos.line - diff, lastLine = doc.first + doc.size - 1;
            if (preLine > lastLine) return Pos(lastLine, getLine(doc, lastLine).text.length);
            return clipToLen(pos, getLine(doc, preLine).text.length);
        }
        if (pos.line == change.to.line + diff) return clipToLen(pos, lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0) + getLine(doc, change.to.line).text.length - change.to.ch);
        var inside = pos.line - change.from.line;
        return clipToLen(pos, change.text[inside].length + (inside ? 0 : change.from.ch));
    }
    function computeSelAfterChange(doc, change, hint) {
        if (hint && typeof hint == "object") return {
            anchor: clipPostChange(doc, change, hint.anchor),
            head: clipPostChange(doc, change, hint.head)
        };
        if (hint == "start") return {
            anchor: change.from,
            head: change.from
        };
        var end = changeEnd(change);
        if (hint == "around") return {
            anchor: change.from,
            head: end
        };
        if (hint == "end") return {
            anchor: end,
            head: end
        };
        var adjustPos = function(pos) {
            if (posLess(pos, change.from)) return pos;
            if (!posLess(change.to, pos)) return end;
            var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
            if (pos.line == change.to.line) ch += end.ch - change.to.ch;
            return Pos(line, ch);
        };
        return {
            anchor: adjustPos(doc.sel.anchor),
            head: adjustPos(doc.sel.head)
        };
    }
    function filterChange(doc, change, update) {
        var obj = {
            canceled: false,
            from: change.from,
            to: change.to,
            text: change.text,
            origin: change.origin,
            cancel: function() {
                this.canceled = true;
            }
        };
        if (update) obj.update = function(from, to, text, origin) {
            if (from) this.from = clipPos(doc, from);
            if (to) this.to = clipPos(doc, to);
            if (text) this.text = text;
            if (origin !== undefined) this.origin = origin;
        };
        signal(doc, "beforeChange", doc, obj);
        if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);
        if (obj.canceled) return null;
        return {
            from: obj.from,
            to: obj.to,
            text: obj.text,
            origin: obj.origin
        };
    }
    function makeChange(doc, change, selUpdate, ignoreReadOnly) {
        if (doc.cm) {
            if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, selUpdate, ignoreReadOnly);
            if (doc.cm.state.suppressEdits) return;
        }
        if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
            change = filterChange(doc, change, true);
            if (!change) return;
        }
        var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
        if (split) {
            for (var i = split.length - 1; i >= 1; --i) makeChangeNoReadonly(doc, {
                from: split[i].from,
                to: split[i].to,
                text: [ "" ]
            });
            if (split.length) makeChangeNoReadonly(doc, {
                from: split[0].from,
                to: split[0].to,
                text: change.text
            }, selUpdate);
        } else {
            makeChangeNoReadonly(doc, change, selUpdate);
        }
    }
    function makeChangeNoReadonly(doc, change, selUpdate) {
        var selAfter = computeSelAfterChange(doc, change, selUpdate);
        addToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);
        makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
        var rebased = [];
        linkedDocs(doc, function(doc, sharedHist) {
            if (!sharedHist && indexOf(rebased, doc.history) == -1) {
                rebaseHist(doc.history, change);
                rebased.push(doc.history);
            }
            makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
        });
    }
    function makeChangeFromHistory(doc, type) {
        if (doc.cm && doc.cm.state.suppressEdits) return;
        var hist = doc.history;
        var event = (type == "undo" ? hist.done : hist.undone).pop();
        if (!event) return;
        var anti = {
            changes: [],
            anchorBefore: event.anchorAfter,
            headBefore: event.headAfter,
            anchorAfter: event.anchorBefore,
            headAfter: event.headBefore,
            generation: hist.generation
        };
        (type == "undo" ? hist.undone : hist.done).push(anti);
        hist.generation = event.generation || ++hist.maxGeneration;
        var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");
        for (var i = event.changes.length - 1; i >= 0; --i) {
            var change = event.changes[i];
            change.origin = type;
            if (filter && !filterChange(doc, change, false)) {
                (type == "undo" ? hist.done : hist.undone).length = 0;
                return;
            }
            anti.changes.push(historyChangeFromChange(doc, change));
            var after = i ? computeSelAfterChange(doc, change, null) : {
                anchor: event.anchorBefore,
                head: event.headBefore
            };
            makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
            var rebased = [];
            linkedDocs(doc, function(doc, sharedHist) {
                if (!sharedHist && indexOf(rebased, doc.history) == -1) {
                    rebaseHist(doc.history, change);
                    rebased.push(doc.history);
                }
                makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
            });
        }
    }
    function shiftDoc(doc, distance) {
        function shiftPos(pos) {
            return Pos(pos.line + distance, pos.ch);
        }
        doc.first += distance;
        if (doc.cm) regChange(doc.cm, doc.first, doc.first, distance);
        doc.sel.head = shiftPos(doc.sel.head);
        doc.sel.anchor = shiftPos(doc.sel.anchor);
        doc.sel.from = shiftPos(doc.sel.from);
        doc.sel.to = shiftPos(doc.sel.to);
    }
    function makeChangeSingleDoc(doc, change, selAfter, spans) {
        if (doc.cm && !doc.cm.curOp) return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);
        if (change.to.line < doc.first) {
            shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
            return;
        }
        if (change.from.line > doc.lastLine()) return;
        if (change.from.line < doc.first) {
            var shift = change.text.length - 1 - (doc.first - change.from.line);
            shiftDoc(doc, shift);
            change = {
                from: Pos(doc.first, 0),
                to: Pos(change.to.line + shift, change.to.ch),
                text: [ lst(change.text) ],
                origin: change.origin
            };
        }
        var last = doc.lastLine();
        if (change.to.line > last) {
            change = {
                from: change.from,
                to: Pos(last, getLine(doc, last).text.length),
                text: [ change.text[0] ],
                origin: change.origin
            };
        }
        change.removed = getBetween(doc, change.from, change.to);
        if (!selAfter) selAfter = computeSelAfterChange(doc, change, null);
        if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans, selAfter); else updateDoc(doc, change, spans, selAfter);
    }
    function makeChangeSingleDocInEditor(cm, change, spans, selAfter) {
        var doc = cm.doc, display = cm.display, from = change.from, to = change.to;
        var recomputeMaxLength = false, checkWidthStart = from.line;
        if (!cm.options.lineWrapping) {
            checkWidthStart = lineNo(visualLine(doc, getLine(doc, from.line)));
            doc.iter(checkWidthStart, to.line + 1, function(line) {
                if (line == display.maxLine) {
                    recomputeMaxLength = true;
                    return true;
                }
            });
        }
        if (!posLess(doc.sel.head, change.from) && !posLess(change.to, doc.sel.head)) cm.curOp.cursorActivity = true;
        updateDoc(doc, change, spans, selAfter, estimateHeight(cm));
        if (!cm.options.lineWrapping) {
            doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
                var len = lineLength(doc, line);
                if (len > display.maxLineLength) {
                    display.maxLine = line;
                    display.maxLineLength = len;
                    display.maxLineChanged = true;
                    recomputeMaxLength = false;
                }
            });
            if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
        }
        doc.frontier = Math.min(doc.frontier, from.line);
        startWorker(cm, 400);
        var lendiff = change.text.length - (to.line - from.line) - 1;
        regChange(cm, from.line, to.line + 1, lendiff);
        if (hasHandler(cm, "change")) {
            var changeObj = {
                from: from,
                to: to,
                text: change.text,
                removed: change.removed,
                origin: change.origin
            };
            if (cm.curOp.textChanged) {
                for (var cur = cm.curOp.textChanged; cur.next; cur = cur.next) {}
                cur.next = changeObj;
            } else cm.curOp.textChanged = changeObj;
        }
    }
    function replaceRange(doc, code, from, to, origin) {
        if (!to) to = from;
        if (posLess(to, from)) {
            var tmp = to;
            to = from;
            from = tmp;
        }
        if (typeof code == "string") code = splitLines(code);
        makeChange(doc, {
            from: from,
            to: to,
            text: code,
            origin: origin
        }, null);
    }
    function Pos(line, ch) {
        if (!(this instanceof Pos)) return new Pos(line, ch);
        this.line = line;
        this.ch = ch;
    }
    CodeMirror.Pos = Pos;
    function posEq(a, b) {
        return a.line == b.line && a.ch == b.ch;
    }
    function posLess(a, b) {
        return a.line < b.line || a.line == b.line && a.ch < b.ch;
    }
    function copyPos(x) {
        return Pos(x.line, x.ch);
    }
    function clipLine(doc, n) {
        return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));
    }
    function clipPos(doc, pos) {
        if (pos.line < doc.first) return Pos(doc.first, 0);
        var last = doc.first + doc.size - 1;
        if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
        return clipToLen(pos, getLine(doc, pos.line).text.length);
    }
    function clipToLen(pos, linelen) {
        var ch = pos.ch;
        if (ch == null || ch > linelen) return Pos(pos.line, linelen); else if (ch < 0) return Pos(pos.line, 0); else return pos;
    }
    function isLine(doc, l) {
        return l >= doc.first && l < doc.first + doc.size;
    }
    function extendSelection(doc, pos, other, bias) {
        if (doc.sel.shift || doc.sel.extend) {
            var anchor = doc.sel.anchor;
            if (other) {
                var posBefore = posLess(pos, anchor);
                if (posBefore != posLess(other, anchor)) {
                    anchor = pos;
                    pos = other;
                } else if (posBefore != posLess(pos, other)) {
                    pos = other;
                }
            }
            setSelection(doc, anchor, pos, bias);
        } else {
            setSelection(doc, pos, other || pos, bias);
        }
        if (doc.cm) doc.cm.curOp.userSelChange = true;
    }
    function filterSelectionChange(doc, anchor, head) {
        var obj = {
            anchor: anchor,
            head: head
        };
        signal(doc, "beforeSelectionChange", doc, obj);
        if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
        obj.anchor = clipPos(doc, obj.anchor);
        obj.head = clipPos(doc, obj.head);
        return obj;
    }
    function setSelection(doc, anchor, head, bias, checkAtomic) {
        if (!checkAtomic && hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) {
            var filtered = filterSelectionChange(doc, anchor, head);
            head = filtered.head;
            anchor = filtered.anchor;
        }
        var sel = doc.sel;
        sel.goalColumn = null;
        if (checkAtomic || !posEq(anchor, sel.anchor)) anchor = skipAtomic(doc, anchor, bias, checkAtomic != "push");
        if (checkAtomic || !posEq(head, sel.head)) head = skipAtomic(doc, head, bias, checkAtomic != "push");
        if (posEq(sel.anchor, anchor) && posEq(sel.head, head)) return;
        sel.anchor = anchor;
        sel.head = head;
        var inv = posLess(head, anchor);
        sel.from = inv ? head : anchor;
        sel.to = inv ? anchor : head;
        if (doc.cm) doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = doc.cm.curOp.cursorActivity = true;
        signalLater(doc, "cursorActivity", doc);
    }
    function reCheckSelection(cm) {
        setSelection(cm.doc, cm.doc.sel.from, cm.doc.sel.to, null, "push");
    }
    function skipAtomic(doc, pos, bias, mayClear) {
        var flipped = false, curPos = pos;
        var dir = bias || 1;
        doc.cantEdit = false;
        search: for (;;) {
            var line = getLine(doc, curPos.line);
            if (line.markedSpans) {
                for (var i = 0; i < line.markedSpans.length; ++i) {
                    var sp = line.markedSpans[i], m = sp.marker;
                    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) && (sp.to == null || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
                        if (mayClear) {
                            signal(m, "beforeCursorEnter");
                            if (m.explicitlyCleared) {
                                if (!line.markedSpans) break; else {
                                    --i;
                                    continue;
                                }
                            }
                        }
                        if (!m.atomic) continue;
                        var newPos = m.find()[dir < 0 ? "from" : "to"];
                        if (posEq(newPos, curPos)) {
                            newPos.ch += dir;
                            if (newPos.ch < 0) {
                                if (newPos.line > doc.first) newPos = clipPos(doc, Pos(newPos.line - 1)); else newPos = null;
                            } else if (newPos.ch > line.text.length) {
                                if (newPos.line < doc.first + doc.size - 1) newPos = Pos(newPos.line + 1, 0); else newPos = null;
                            }
                            if (!newPos) {
                                if (flipped) {
                                    if (!mayClear) return skipAtomic(doc, pos, bias, true);
                                    doc.cantEdit = true;
                                    return Pos(doc.first, 0);
                                }
                                flipped = true;
                                newPos = pos;
                                dir = -dir;
                            }
                        }
                        curPos = newPos;
                        continue search;
                    }
                }
            }
            return curPos;
        }
    }
    function scrollCursorIntoView(cm) {
        var coords = scrollPosIntoView(cm, cm.doc.sel.head, cm.options.cursorScrollMargin);
        if (!cm.state.focused) return;
        var display = cm.display, box = getRect(display.sizer), doScroll = null;
        if (coords.top + box.top < 0) doScroll = true; else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
        if (doScroll != null && !phantom) {
            var hidden = display.cursor.style.display == "none";
            if (hidden) {
                display.cursor.style.display = "";
                display.cursor.style.left = coords.left + "px";
                display.cursor.style.top = coords.top - display.viewOffset + "px";
            }
            display.cursor.scrollIntoView(doScroll);
            if (hidden) display.cursor.style.display = "none";
        }
    }
    function scrollPosIntoView(cm, pos, margin) {
        if (margin == null) margin = 0;
        for (;;) {
            var changed = false, coords = cursorCoords(cm, pos);
            var scrollPos = calculateScrollPos(cm, coords.left, coords.top - margin, coords.left, coords.bottom + margin);
            var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
            if (scrollPos.scrollTop != null) {
                setScrollTop(cm, scrollPos.scrollTop);
                if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
            }
            if (scrollPos.scrollLeft != null) {
                setScrollLeft(cm, scrollPos.scrollLeft);
                if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
            }
            if (!changed) return coords;
        }
    }
    function scrollIntoView(cm, x1, y1, x2, y2) {
        var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
        if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
        if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
    }
    function calculateScrollPos(cm, x1, y1, x2, y2) {
        var display = cm.display, snapMargin = textHeight(cm.display);
        if (y1 < 0) y1 = 0;
        var screen = display.scroller.clientHeight - scrollerCutOff, screentop = display.scroller.scrollTop, result = {};
        var docBottom = cm.doc.height + paddingVert(display);
        var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
        if (y1 < screentop) {
            result.scrollTop = atTop ? 0 : y1;
        } else if (y2 > screentop + screen) {
            var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
            if (newTop != screentop) result.scrollTop = newTop;
        }
        var screenw = display.scroller.clientWidth - scrollerCutOff, screenleft = display.scroller.scrollLeft;
        x1 += display.gutters.offsetWidth;
        x2 += display.gutters.offsetWidth;
        var gutterw = display.gutters.offsetWidth;
        var atLeft = x1 < gutterw + 10;
        if (x1 < screenleft + gutterw || atLeft) {
            if (atLeft) x1 = 0;
            result.scrollLeft = Math.max(0, x1 - 10 - gutterw);
        } else if (x2 > screenw + screenleft - 3) {
            result.scrollLeft = x2 + 10 - screenw;
        }
        return result;
    }
    function updateScrollPos(cm, left, top) {
        cm.curOp.updateScrollPos = {
            scrollLeft: left == null ? cm.doc.scrollLeft : left,
            scrollTop: top == null ? cm.doc.scrollTop : top
        };
    }
    function addToScrollPos(cm, left, top) {
        var pos = cm.curOp.updateScrollPos || (cm.curOp.updateScrollPos = {
            scrollLeft: cm.doc.scrollLeft,
            scrollTop: cm.doc.scrollTop
        });
        var scroll = cm.display.scroller;
        pos.scrollTop = Math.max(0, Math.min(scroll.scrollHeight - scroll.clientHeight, pos.scrollTop + top));
        pos.scrollLeft = Math.max(0, Math.min(scroll.scrollWidth - scroll.clientWidth, pos.scrollLeft + left));
    }
    function indentLine(cm, n, how, aggressive) {
        var doc = cm.doc;
        if (how == null) how = "add";
        if (how == "smart") {
            if (!cm.doc.mode.indent) how = "prev"; else var state = getStateBefore(cm, n);
        }
        var tabSize = cm.options.tabSize;
        var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
        var curSpaceString = line.text.match(/^\s*/)[0], indentation;
        if (how == "smart") {
            indentation = cm.doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
            if (indentation == Pass) {
                if (!aggressive) return;
                how = "prev";
            }
        }
        if (how == "prev") {
            if (n > doc.first) indentation = countColumn(getLine(doc, n - 1).text, null, tabSize); else indentation = 0;
        } else if (how == "add") {
            indentation = curSpace + cm.options.indentUnit;
        } else if (how == "subtract") {
            indentation = curSpace - cm.options.indentUnit;
        } else if (typeof how == "number") {
            indentation = curSpace + how;
        }
        indentation = Math.max(0, indentation);
        var indentString = "", pos = 0;
        if (cm.options.indentWithTabs) for (var i = Math.floor(indentation / tabSize); i; --i) {
            pos += tabSize;
            indentString += "	";
        }
        if (pos < indentation) indentString += spaceStr(indentation - pos);
        if (indentString != curSpaceString) replaceRange(cm.doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
        line.stateAfter = null;
    }
    function changeLine(cm, handle, op) {
        var no = handle, line = handle, doc = cm.doc;
        if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle)); else no = lineNo(handle);
        if (no == null) return null;
        if (op(line, no)) regChange(cm, no, no + 1); else return null;
        return line;
    }
    function findPosH(doc, pos, dir, unit, visually) {
        var line = pos.line, ch = pos.ch, origDir = dir;
        var lineObj = getLine(doc, line);
        var possible = true;
        function findNextLine() {
            var l = line + dir;
            if (l < doc.first || l >= doc.first + doc.size) return possible = false;
            line = l;
            return lineObj = getLine(doc, l);
        }
        function moveOnce(boundToLine) {
            var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
            if (next == null) {
                if (!boundToLine && findNextLine()) {
                    if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj); else ch = dir < 0 ? lineObj.text.length : 0;
                } else return possible = false;
            } else ch = next;
            return true;
        }
        if (unit == "char") moveOnce(); else if (unit == "column") moveOnce(true); else if (unit == "word" || unit == "group") {
            var sawType = null, group = unit == "group";
            for (var first = true; ;first = false) {
                if (dir < 0 && !moveOnce(!first)) break;
                var cur = lineObj.text.charAt(ch) || "\n";
                var type = isWordChar(cur) ? "w" : !group ? null : /\s/.test(cur) ? null : "p";
                if (sawType && sawType != type) {
                    if (dir < 0) {
                        dir = 1;
                        moveOnce();
                    }
                    break;
                }
                if (type) sawType = type;
                if (dir > 0 && !moveOnce(!first)) break;
            }
        }
        var result = skipAtomic(doc, Pos(line, ch), origDir, true);
        if (!possible) result.hitSide = true;
        return result;
    }
    function findPosV(cm, pos, dir, unit) {
        var doc = cm.doc, x = pos.left, y;
        if (unit == "page") {
            var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
        } else if (unit == "line") {
            y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
        }
        for (;;) {
            var target = coordsChar(cm, x, y);
            if (!target.outside) break;
            if (dir < 0 ? y <= 0 : y >= doc.height) {
                target.hitSide = true;
                break;
            }
            y += dir * 5;
        }
        return target;
    }
    function findWordAt(line, pos) {
        var start = pos.ch, end = pos.ch;
        if (line) {
            if (pos.xRel < 0 || end == line.length) --start; else ++end;
            var startChar = line.charAt(start);
            var check = isWordChar(startChar) ? isWordChar : /\s/.test(startChar) ? function(ch) {
                return /\s/.test(ch);
            } : function(ch) {
                return !/\s/.test(ch) && !isWordChar(ch);
            };
            while (start > 0 && check(line.charAt(start - 1))) --start;
            while (end < line.length && check(line.charAt(end))) ++end;
        }
        return {
            from: Pos(pos.line, start),
            to: Pos(pos.line, end)
        };
    }
    function selectLine(cm, line) {
        extendSelection(cm.doc, Pos(line, 0), clipPos(cm.doc, Pos(line + 1, 0)));
    }
    CodeMirror.prototype = {
        constructor: CodeMirror,
        focus: function() {
            window.focus();
            focusInput(this);
            onFocus(this);
            fastPoll(this);
        },
        setOption: function(option, value) {
            var options = this.options, old = options[option];
            if (options[option] == value && option != "mode") return;
            options[option] = value;
            if (optionHandlers.hasOwnProperty(option)) operation(this, optionHandlers[option])(this, value, old);
        },
        getOption: function(option) {
            return this.options[option];
        },
        getDoc: function() {
            return this.doc;
        },
        addKeyMap: function(map, bottom) {
            this.state.keyMaps[bottom ? "push" : "unshift"](map);
        },
        removeKeyMap: function(map) {
            var maps = this.state.keyMaps;
            for (var i = 0; i < maps.length; ++i) if ((typeof map == "string" ? maps[i].name : maps[i]) == map) {
                maps.splice(i, 1);
                return true;
            }
        },
        addOverlay: operation(null, function(spec, options) {
            var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
            if (mode.startState) throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({
                mode: mode,
                modeSpec: spec,
                opaque: options && options.opaque
            });
            this.state.modeGen++;
            regChange(this);
        }),
        removeOverlay: operation(null, function(spec) {
            var overlays = this.state.overlays;
            for (var i = 0; i < overlays.length; ++i) {
                var cur = overlays[i].modeSpec;
                if (cur == spec || typeof spec == "string" && cur.name == spec) {
                    overlays.splice(i, 1);
                    this.state.modeGen++;
                    regChange(this);
                    return;
                }
            }
        }),
        indentLine: operation(null, function(n, dir, aggressive) {
            if (typeof dir != "string" && typeof dir != "number") {
                if (dir == null) dir = this.options.smartIndent ? "smart" : "prev"; else dir = dir ? "add" : "subtract";
            }
            if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
        }),
        indentSelection: operation(null, function(how) {
            var sel = this.doc.sel;
            if (posEq(sel.from, sel.to)) return indentLine(this, sel.from.line, how);
            var e = sel.to.line - (sel.to.ch ? 0 : 1);
            for (var i = sel.from.line; i <= e; ++i) indentLine(this, i, how);
        }),
        getTokenAt: function(pos, precise) {
            var doc = this.doc;
            pos = clipPos(doc, pos);
            var state = getStateBefore(this, pos.line, precise), mode = this.doc.mode;
            var line = getLine(doc, pos.line);
            var stream = new StringStream(line.text, this.options.tabSize);
            while (stream.pos < pos.ch && !stream.eol()) {
                stream.start = stream.pos;
                var style = mode.token(stream, state);
            }
            return {
                start: stream.start,
                end: stream.pos,
                string: stream.current(),
                className: style || null,
                type: style || null,
                state: state
            };
        },
        getTokenTypeAt: function(pos) {
            pos = clipPos(this.doc, pos);
            var styles = getLineStyles(this, getLine(this.doc, pos.line));
            var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
            for (;;) {
                var mid = before + after >> 1;
                if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid; else if (styles[mid * 2 + 1] < ch) before = mid + 1; else return styles[mid * 2 + 2];
            }
        },
        getStateAfter: function(line, precise) {
            var doc = this.doc;
            line = clipLine(doc, line == null ? doc.first + doc.size - 1 : line);
            return getStateBefore(this, line + 1, precise);
        },
        cursorCoords: function(start, mode) {
            var pos, sel = this.doc.sel;
            if (start == null) pos = sel.head; else if (typeof start == "object") pos = clipPos(this.doc, start); else pos = start ? sel.from : sel.to;
            return cursorCoords(this, pos, mode || "page");
        },
        charCoords: function(pos, mode) {
            return charCoords(this, clipPos(this.doc, pos), mode || "page");
        },
        coordsChar: function(coords, mode) {
            coords = fromCoordSystem(this, coords, mode || "page");
            return coordsChar(this, coords.left, coords.top);
        },
        lineAtHeight: function(height, mode) {
            height = fromCoordSystem(this, {
                top: height,
                left: 0
            }, mode || "page").top;
            return lineAtHeight(this.doc, height + this.display.viewOffset);
        },
        heightAtLine: function(line, mode) {
            var end = false, last = this.doc.first + this.doc.size - 1;
            if (line < this.doc.first) line = this.doc.first; else if (line > last) {
                line = last;
                end = true;
            }
            var lineObj = getLine(this.doc, line);
            return intoCoordSystem(this, getLine(this.doc, line), {
                top: 0,
                left: 0
            }, mode || "page").top + (end ? lineObj.height : 0);
        },
        defaultTextHeight: function() {
            return textHeight(this.display);
        },
        defaultCharWidth: function() {
            return charWidth(this.display);
        },
        setGutterMarker: operation(null, function(line, gutterID, value) {
            return changeLine(this, line, function(line) {
                var markers = line.gutterMarkers || (line.gutterMarkers = {});
                markers[gutterID] = value;
                if (!value && isEmpty(markers)) line.gutterMarkers = null;
                return true;
            });
        }),
        clearGutter: operation(null, function(gutterID) {
            var cm = this, doc = cm.doc, i = doc.first;
            doc.iter(function(line) {
                if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
                    line.gutterMarkers[gutterID] = null;
                    regChange(cm, i, i + 1);
                    if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
                }
                ++i;
            });
        }),
        addLineClass: operation(null, function(handle, where, cls) {
            return changeLine(this, handle, function(line) {
                var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
                if (!line[prop]) line[prop] = cls; else if (new RegExp("(?:^|\\s)" + cls + "(?:$|\\s)").test(line[prop])) return false; else line[prop] += " " + cls;
                return true;
            });
        }),
        removeLineClass: operation(null, function(handle, where, cls) {
            return changeLine(this, handle, function(line) {
                var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
                var cur = line[prop];
                if (!cur) return false; else if (cls == null) line[prop] = null; else {
                    var found = cur.match(new RegExp("(?:^|\\s+)" + cls + "(?:$|\\s+)"));
                    if (!found) return false;
                    var end = found.index + found[0].length;
                    line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
                }
                return true;
            });
        }),
        addLineWidget: operation(null, function(handle, node, options) {
            return addLineWidget(this, handle, node, options);
        }),
        removeLineWidget: function(widget) {
            widget.clear();
        },
        lineInfo: function(line) {
            if (typeof line == "number") {
                if (!isLine(this.doc, line)) return null;
                var n = line;
                line = getLine(this.doc, line);
                if (!line) return null;
            } else {
                var n = lineNo(line);
                if (n == null) return null;
            }
            return {
                line: n,
                handle: line,
                text: line.text,
                gutterMarkers: line.gutterMarkers,
                textClass: line.textClass,
                bgClass: line.bgClass,
                wrapClass: line.wrapClass,
                widgets: line.widgets
            };
        },
        getViewport: function() {
            return {
                from: this.display.showingFrom,
                to: this.display.showingTo
            };
        },
        addWidget: function(pos, node, scroll, vert, horiz) {
            var display = this.display;
            pos = cursorCoords(this, clipPos(this.doc, pos));
            var top = pos.bottom, left = pos.left;
            node.style.position = "absolute";
            display.sizer.appendChild(node);
            if (vert == "over") {
                top = pos.top;
            } else if (vert == "above" || vert == "near") {
                var vspace = Math.max(display.wrapper.clientHeight, this.doc.height), hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
                if ((vert == "above" || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight) top = pos.top - node.offsetHeight; else if (pos.bottom + node.offsetHeight <= vspace) top = pos.bottom;
                if (left + node.offsetWidth > hspace) left = hspace - node.offsetWidth;
            }
            node.style.top = top + "px";
            node.style.left = node.style.right = "";
            if (horiz == "right") {
                left = display.sizer.clientWidth - node.offsetWidth;
                node.style.right = "0px";
            } else {
                if (horiz == "left") left = 0; else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
                node.style.left = left + "px";
            }
            if (scroll) scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
        },
        triggerOnKeyDown: operation(null, onKeyDown),
        execCommand: function(cmd) {
            return commands[cmd](this);
        },
        findPosH: function(from, amount, unit, visually) {
            var dir = 1;
            if (amount < 0) {
                dir = -1;
                amount = -amount;
            }
            for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
                cur = findPosH(this.doc, cur, dir, unit, visually);
                if (cur.hitSide) break;
            }
            return cur;
        },
        moveH: operation(null, function(dir, unit) {
            var sel = this.doc.sel, pos;
            if (sel.shift || sel.extend || posEq(sel.from, sel.to)) pos = findPosH(this.doc, sel.head, dir, unit, this.options.rtlMoveVisually); else pos = dir < 0 ? sel.from : sel.to;
            extendSelection(this.doc, pos, pos, dir);
        }),
        deleteH: operation(null, function(dir, unit) {
            var sel = this.doc.sel;
            if (!posEq(sel.from, sel.to)) replaceRange(this.doc, "", sel.from, sel.to, "+delete"); else replaceRange(this.doc, "", sel.from, findPosH(this.doc, sel.head, dir, unit, false), "+delete");
            this.curOp.userSelChange = true;
        }),
        findPosV: function(from, amount, unit, goalColumn) {
            var dir = 1, x = goalColumn;
            if (amount < 0) {
                dir = -1;
                amount = -amount;
            }
            for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
                var coords = cursorCoords(this, cur, "div");
                if (x == null) x = coords.left; else coords.left = x;
                cur = findPosV(this, coords, dir, unit);
                if (cur.hitSide) break;
            }
            return cur;
        },
        moveV: operation(null, function(dir, unit) {
            var sel = this.doc.sel;
            var pos = cursorCoords(this, sel.head, "div");
            if (sel.goalColumn != null) pos.left = sel.goalColumn;
            var target = findPosV(this, pos, dir, unit);
            if (unit == "page") addToScrollPos(this, 0, charCoords(this, target, "div").top - pos.top);
            extendSelection(this.doc, target, target, dir);
            sel.goalColumn = pos.left;
        }),
        toggleOverwrite: function(value) {
            if (value != null && value == this.state.overwrite) return;
            if (this.state.overwrite = !this.state.overwrite) this.display.cursor.className += " CodeMirror-overwrite"; else this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", "");
        },
        hasFocus: function() {
            return this.state.focused;
        },
        scrollTo: operation(null, function(x, y) {
            updateScrollPos(this, x, y);
        }),
        getScrollInfo: function() {
            var scroller = this.display.scroller, co = scrollerCutOff;
            return {
                left: scroller.scrollLeft,
                top: scroller.scrollTop,
                height: scroller.scrollHeight - co,
                width: scroller.scrollWidth - co,
                clientHeight: scroller.clientHeight - co,
                clientWidth: scroller.clientWidth - co
            };
        },
        scrollIntoView: operation(null, function(pos, margin) {
            if (typeof pos == "number") pos = Pos(pos, 0);
            if (!margin) margin = 0;
            var coords = pos;
            if (!pos || pos.line != null) {
                this.curOp.scrollToPos = pos ? clipPos(this.doc, pos) : this.doc.sel.head;
                this.curOp.scrollToPosMargin = margin;
                coords = cursorCoords(this, this.curOp.scrollToPos);
            }
            var sPos = calculateScrollPos(this, coords.left, coords.top - margin, coords.right, coords.bottom + margin);
            updateScrollPos(this, sPos.scrollLeft, sPos.scrollTop);
        }),
        setSize: function(width, height) {
            function interpret(val) {
                return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
            }
            if (width != null) this.display.wrapper.style.width = interpret(width);
            if (height != null) this.display.wrapper.style.height = interpret(height);
            this.refresh();
        },
        on: function(type, f) {
            on(this, type, f);
        },
        off: function(type, f) {
            off(this, type, f);
        },
        operation: function(f) {
            return runInOp(this, f);
        },
        refresh: operation(null, function() {
            clearCaches(this);
            updateScrollPos(this, this.doc.scrollLeft, this.doc.scrollTop);
            regChange(this);
        }),
        swapDoc: operation(null, function(doc) {
            var old = this.doc;
            old.cm = null;
            attachDoc(this, doc);
            clearCaches(this);
            resetInput(this, true);
            updateScrollPos(this, doc.scrollLeft, doc.scrollTop);
            return old;
        }),
        getInputField: function() {
            return this.display.input;
        },
        getWrapperElement: function() {
            return this.display.wrapper;
        },
        getScrollerElement: function() {
            return this.display.scroller;
        },
        getGutterElement: function() {
            return this.display.gutters;
        }
    };
    var optionHandlers = CodeMirror.optionHandlers = {};
    var defaults = CodeMirror.defaults = {};
    function option(name, deflt, handle, notOnInit) {
        CodeMirror.defaults[name] = deflt;
        if (handle) optionHandlers[name] = notOnInit ? function(cm, val, old) {
            if (old != Init) handle(cm, val, old);
        } : handle;
    }
    var Init = CodeMirror.Init = {
        toString: function() {
            return "CodeMirror.Init";
        }
    };
    option("value", "", function(cm, val) {
        cm.setValue(val);
    }, true);
    option("mode", null, function(cm, val) {
        cm.doc.modeOption = val;
        loadMode(cm);
    }, true);
    option("indentUnit", 2, loadMode, true);
    option("indentWithTabs", false);
    option("smartIndent", true);
    option("tabSize", 4, function(cm) {
        loadMode(cm);
        clearCaches(cm);
        regChange(cm);
    }, true);
    option("electricChars", true);
    option("rtlMoveVisually", !windows);
    option("theme", "default", function(cm) {
        themeChanged(cm);
        guttersChanged(cm);
    }, true);
    option("keyMap", "default", keyMapChanged);
    option("extraKeys", null);
    option("onKeyEvent", null);
    option("onDragEvent", null);
    option("lineWrapping", false, wrappingChanged, true);
    option("gutters", [], function(cm) {
        setGuttersForLineNumbers(cm.options);
        guttersChanged(cm);
    }, true);
    option("fixedGutter", true, function(cm, val) {
        cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
        cm.refresh();
    }, true);
    option("coverGutterNextToScrollbar", false, updateScrollbars, true);
    option("lineNumbers", false, function(cm) {
        setGuttersForLineNumbers(cm.options);
        guttersChanged(cm);
    }, true);
    option("firstLineNumber", 1, guttersChanged, true);
    option("lineNumberFormatter", function(integer) {
        return integer;
    }, guttersChanged, true);
    option("showCursorWhenSelecting", false, updateSelection, true);
    option("readOnly", false, function(cm, val) {
        if (val == "nocursor") {
            onBlur(cm);
            cm.display.input.blur();
        } else if (!val) resetInput(cm, true);
    });
    option("dragDrop", true);
    option("cursorBlinkRate", 530);
    option("cursorScrollMargin", 0);
    option("cursorHeight", 1);
    option("workTime", 100);
    option("workDelay", 100);
    option("flattenSpans", true);
    option("pollInterval", 100);
    option("undoDepth", 40, function(cm, val) {
        cm.doc.history.undoDepth = val;
    });
    option("historyEventDelay", 500);
    option("viewportMargin", 10, function(cm) {
        cm.refresh();
    }, true);
    option("maxHighlightLength", 1e4, function(cm) {
        loadMode(cm);
        cm.refresh();
    }, true);
    option("moveInputWithCursor", true, function(cm, val) {
        if (!val) cm.display.inputDiv.style.top = cm.display.inputDiv.style.left = 0;
    });
    option("tabindex", null, function(cm, val) {
        cm.display.input.tabIndex = val || "";
    });
    option("autofocus", null);
    var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};
    CodeMirror.defineMode = function(name, mode) {
        if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
        if (arguments.length > 2) {
            mode.dependencies = [];
            for (var i = 2; i < arguments.length; ++i) mode.dependencies.push(arguments[i]);
        }
        modes[name] = mode;
    };
    CodeMirror.defineMIME = function(mime, spec) {
        mimeModes[mime] = spec;
    };
    CodeMirror.resolveMode = function(spec) {
        if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
            spec = mimeModes[spec];
        } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
            var found = mimeModes[spec.name];
            spec = createObj(found, spec);
            spec.name = found.name;
        } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
            return CodeMirror.resolveMode("application/xml");
        }
        if (typeof spec == "string") return {
            name: spec
        }; else return spec || {
            name: "null"
        };
    };
    CodeMirror.getMode = function(options, spec) {
        spec = CodeMirror.resolveMode(spec);
        var mfactory = modes[spec.name];
        if (!mfactory) return CodeMirror.getMode(options, "text/plain");
        var modeObj = mfactory(options, spec);
        if (modeExtensions.hasOwnProperty(spec.name)) {
            var exts = modeExtensions[spec.name];
            for (var prop in exts) {
                if (!exts.hasOwnProperty(prop)) continue;
                if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
                modeObj[prop] = exts[prop];
            }
        }
        modeObj.name = spec.name;
        return modeObj;
    };
    CodeMirror.defineMode("null", function() {
        return {
            token: function(stream) {
                stream.skipToEnd();
            }
        };
    });
    CodeMirror.defineMIME("text/plain", "null");
    var modeExtensions = CodeMirror.modeExtensions = {};
    CodeMirror.extendMode = function(mode, properties) {
        var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : modeExtensions[mode] = {};
        copyObj(properties, exts);
    };
    CodeMirror.defineExtension = function(name, func) {
        CodeMirror.prototype[name] = func;
    };
    CodeMirror.defineDocExtension = function(name, func) {
        Doc.prototype[name] = func;
    };
    CodeMirror.defineOption = option;
    var initHooks = [];
    CodeMirror.defineInitHook = function(f) {
        initHooks.push(f);
    };
    function copyState(mode, state) {
        if (state === true) return state;
        if (mode.copyState) return mode.copyState(state);
        var nstate = {};
        for (var n in state) {
            var val = state[n];
            if (val instanceof Array) val = val.concat([]);
            nstate[n] = val;
        }
        return nstate;
    }
    CodeMirror.copyState = copyState;
    function startState(mode, a1, a2) {
        return mode.startState ? mode.startState(a1, a2) : true;
    }
    CodeMirror.startState = startState;
    CodeMirror.innerMode = function(mode, state) {
        while (mode.innerMode) {
            var info = mode.innerMode(state);
            state = info.state;
            mode = info.mode;
        }
        return info || {
            mode: mode,
            state: state
        };
    };
    var commands = CodeMirror.commands = {
        selectAll: function(cm) {
            cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()));
        },
        killLine: function(cm) {
            var from = cm.getCursor(true), to = cm.getCursor(false), sel = !posEq(from, to);
            if (!sel && cm.getLine(from.line).length == from.ch) cm.replaceRange("", from, Pos(from.line + 1, 0), "+delete"); else cm.replaceRange("", from, sel ? to : Pos(from.line), "+delete");
        },
        deleteLine: function(cm) {
            var l = cm.getCursor().line;
            cm.replaceRange("", Pos(l, 0), Pos(l), "+delete");
        },
        delLineLeft: function(cm) {
            var cur = cm.getCursor();
            cm.replaceRange("", Pos(cur.line, 0), cur, "+delete");
        },
        undo: function(cm) {
            cm.undo();
        },
        redo: function(cm) {
            cm.redo();
        },
        goDocStart: function(cm) {
            cm.extendSelection(Pos(cm.firstLine(), 0));
        },
        goDocEnd: function(cm) {
            cm.extendSelection(Pos(cm.lastLine()));
        },
        goLineStart: function(cm) {
            cm.extendSelection(lineStart(cm, cm.getCursor().line));
        },
        goLineStartSmart: function(cm) {
            var cur = cm.getCursor(), start = lineStart(cm, cur.line);
            var line = cm.getLineHandle(start.line);
            var order = getOrder(line);
            if (!order || order[0].level == 0) {
                var firstNonWS = Math.max(0, line.text.search(/\S/));
                var inWS = cur.line == start.line && cur.ch <= firstNonWS && cur.ch;
                cm.extendSelection(Pos(start.line, inWS ? 0 : firstNonWS));
            } else cm.extendSelection(start);
        },
        goLineEnd: function(cm) {
            cm.extendSelection(lineEnd(cm, cm.getCursor().line));
        },
        goLineRight: function(cm) {
            var top = cm.charCoords(cm.getCursor(), "div").top + 5;
            cm.extendSelection(cm.coordsChar({
                left: cm.display.lineDiv.offsetWidth + 100,
                top: top
            }, "div"));
        },
        goLineLeft: function(cm) {
            var top = cm.charCoords(cm.getCursor(), "div").top + 5;
            cm.extendSelection(cm.coordsChar({
                left: 0,
                top: top
            }, "div"));
        },
        goLineUp: function(cm) {
            cm.moveV(-1, "line");
        },
        goLineDown: function(cm) {
            cm.moveV(1, "line");
        },
        goPageUp: function(cm) {
            cm.moveV(-1, "page");
        },
        goPageDown: function(cm) {
            cm.moveV(1, "page");
        },
        goCharLeft: function(cm) {
            cm.moveH(-1, "char");
        },
        goCharRight: function(cm) {
            cm.moveH(1, "char");
        },
        goColumnLeft: function(cm) {
            cm.moveH(-1, "column");
        },
        goColumnRight: function(cm) {
            cm.moveH(1, "column");
        },
        goWordLeft: function(cm) {
            cm.moveH(-1, "word");
        },
        goGroupRight: function(cm) {
            cm.moveH(1, "group");
        },
        goGroupLeft: function(cm) {
            cm.moveH(-1, "group");
        },
        goWordRight: function(cm) {
            cm.moveH(1, "word");
        },
        delCharBefore: function(cm) {
            cm.deleteH(-1, "char");
        },
        delCharAfter: function(cm) {
            cm.deleteH(1, "char");
        },
        delWordBefore: function(cm) {
            cm.deleteH(-1, "word");
        },
        delWordAfter: function(cm) {
            cm.deleteH(1, "word");
        },
        delGroupBefore: function(cm) {
            cm.deleteH(-1, "group");
        },
        delGroupAfter: function(cm) {
            cm.deleteH(1, "group");
        },
        indentAuto: function(cm) {
            cm.indentSelection("smart");
        },
        indentMore: function(cm) {
            cm.indentSelection("add");
        },
        indentLess: function(cm) {
            cm.indentSelection("subtract");
        },
        insertTab: function(cm) {
            cm.replaceSelection("	", "end", "+input");
        },
        defaultTab: function(cm) {
            if (cm.somethingSelected()) cm.indentSelection("add"); else cm.replaceSelection("	", "end", "+input");
        },
        transposeChars: function(cm) {
            var cur = cm.getCursor(), line = cm.getLine(cur.line);
            if (cur.ch > 0 && cur.ch < line.length - 1) cm.replaceRange(line.charAt(cur.ch) + line.charAt(cur.ch - 1), Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1));
        },
        newlineAndIndent: function(cm) {
            operation(cm, function() {
                cm.replaceSelection("\n", "end", "+input");
                cm.indentLine(cm.getCursor().line, null, true);
            })();
        },
        toggleOverwrite: function(cm) {
            cm.toggleOverwrite();
        }
    };
    var keyMap = CodeMirror.keyMap = {};
    keyMap.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite"
    };
    keyMap.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Alt-Up": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Down": "goDocEnd",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        fallthrough: "basic"
    };
    keyMap.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineStart",
        "Cmd-Right": "goLineEnd",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delLineLeft",
        fallthrough: [ "basic", "emacsy" ]
    };
    keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
    keyMap.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    };
    function getKeyMap(val) {
        if (typeof val == "string") return keyMap[val]; else return val;
    }
    function lookupKey(name, maps, handle) {
        function lookup(map) {
            map = getKeyMap(map);
            var found = map[name];
            if (found === false) return "stop";
            if (found != null && handle(found)) return true;
            if (map.nofallthrough) return "stop";
            var fallthrough = map.fallthrough;
            if (fallthrough == null) return false;
            if (Object.prototype.toString.call(fallthrough) != "[object Array]") return lookup(fallthrough);
            for (var i = 0, e = fallthrough.length; i < e; ++i) {
                var done = lookup(fallthrough[i]);
                if (done) return done;
            }
            return false;
        }
        for (var i = 0; i < maps.length; ++i) {
            var done = lookup(maps[i]);
            if (done) return done != "stop";
        }
    }
    function isModifierKey(event) {
        var name = keyNames[event.keyCode];
        return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
    }
    function keyName(event, noShift) {
        if (opera && event.keyCode == 34 && event["char"]) return false;
        var name = keyNames[event.keyCode];
        if (name == null || event.altGraphKey) return false;
        if (event.altKey) name = "Alt-" + name;
        if (flipCtrlCmd ? event.metaKey : event.ctrlKey) name = "Ctrl-" + name;
        if (flipCtrlCmd ? event.ctrlKey : event.metaKey) name = "Cmd-" + name;
        if (!noShift && event.shiftKey) name = "Shift-" + name;
        return name;
    }
    CodeMirror.lookupKey = lookupKey;
    CodeMirror.isModifierKey = isModifierKey;
    CodeMirror.keyName = keyName;
    CodeMirror.fromTextArea = function(textarea, options) {
        if (!options) options = {};
        options.value = textarea.value;
        if (!options.tabindex && textarea.tabindex) options.tabindex = textarea.tabindex;
        if (!options.placeholder && textarea.placeholder) options.placeholder = textarea.placeholder;
        if (options.autofocus == null) {
            var hasFocus = document.body;
            try {
                hasFocus = document.activeElement;
            } catch (e) {}
            options.autofocus = hasFocus == textarea || textarea.getAttribute("autofocus") != null && hasFocus == document.body;
        }
        function save() {
            textarea.value = cm.getValue();
        }
        if (textarea.form) {
            on(textarea.form, "submit", save);
            if (!options.leaveSubmitMethodAlone) {
                var form = textarea.form, realSubmit = form.submit;
                try {
                    var wrappedSubmit = form.submit = function() {
                        save();
                        form.submit = realSubmit;
                        form.submit();
                        form.submit = wrappedSubmit;
                    };
                } catch (e) {}
            }
        }
        textarea.style.display = "none";
        var cm = CodeMirror(function(node) {
            textarea.parentNode.insertBefore(node, textarea.nextSibling);
        }, options);
        cm.save = save;
        cm.getTextArea = function() {
            return textarea;
        };
        cm.toTextArea = function() {
            save();
            textarea.parentNode.removeChild(cm.getWrapperElement());
            textarea.style.display = "";
            if (textarea.form) {
                off(textarea.form, "submit", save);
                if (typeof textarea.form.submit == "function") textarea.form.submit = realSubmit;
            }
        };
        return cm;
    };
    function StringStream(string, tabSize) {
        this.pos = this.start = 0;
        this.string = string;
        this.tabSize = tabSize || 8;
        this.lastColumnPos = this.lastColumnValue = 0;
    }
    StringStream.prototype = {
        eol: function() {
            return this.pos >= this.string.length;
        },
        sol: function() {
            return this.pos == 0;
        },
        peek: function() {
            return this.string.charAt(this.pos) || undefined;
        },
        next: function() {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++);
        },
        eat: function(match) {
            var ch = this.string.charAt(this.pos);
            if (typeof match == "string") var ok = ch == match; else var ok = ch && (match.test ? match.test(ch) : match(ch));
            if (ok) {
                ++this.pos;
                return ch;
            }
        },
        eatWhile: function(match) {
            var start = this.pos;
            while (this.eat(match)) {}
            return this.pos > start;
        },
        eatSpace: function() {
            var start = this.pos;
            while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
            return this.pos > start;
        },
        skipToEnd: function() {
            this.pos = this.string.length;
        },
        skipTo: function(ch) {
            var found = this.string.indexOf(ch, this.pos);
            if (found > -1) {
                this.pos = found;
                return true;
            }
        },
        backUp: function(n) {
            this.pos -= n;
        },
        column: function() {
            if (this.lastColumnPos < this.start) {
                this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
                this.lastColumnPos = this.start;
            }
            return this.lastColumnValue;
        },
        indentation: function() {
            return countColumn(this.string, null, this.tabSize);
        },
        match: function(pattern, consume, caseInsensitive) {
            if (typeof pattern == "string") {
                var cased = function(str) {
                    return caseInsensitive ? str.toLowerCase() : str;
                };
                var substr = this.string.substr(this.pos, pattern.length);
                if (cased(substr) == cased(pattern)) {
                    if (consume !== false) this.pos += pattern.length;
                    return true;
                }
            } else {
                var match = this.string.slice(this.pos).match(pattern);
                if (match && match.index > 0) return null;
                if (match && consume !== false) this.pos += match[0].length;
                return match;
            }
        },
        current: function() {
            return this.string.slice(this.start, this.pos);
        }
    };
    CodeMirror.StringStream = StringStream;
    function TextMarker(doc, type) {
        this.lines = [];
        this.type = type;
        this.doc = doc;
    }
    CodeMirror.TextMarker = TextMarker;
    TextMarker.prototype.clear = function() {
        if (this.explicitlyCleared) return;
        var cm = this.doc.cm, withOp = cm && !cm.curOp;
        if (withOp) startOperation(cm);
        var min = null, max = null;
        for (var i = 0; i < this.lines.length; ++i) {
            var line = this.lines[i];
            var span = getMarkedSpanFor(line.markedSpans, this);
            if (span.to != null) max = lineNo(line);
            line.markedSpans = removeMarkedSpan(line.markedSpans, span);
            if (span.from != null) min = lineNo(line); else if (this.collapsed && !lineIsHidden(this.doc, line) && cm) updateLineHeight(line, textHeight(cm.display));
        }
        if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
            var visual = visualLine(cm.doc, this.lines[i]), len = lineLength(cm.doc, visual);
            if (len > cm.display.maxLineLength) {
                cm.display.maxLine = visual;
                cm.display.maxLineLength = len;
                cm.display.maxLineChanged = true;
            }
        }
        if (min != null && cm) regChange(cm, min, max + 1);
        this.lines.length = 0;
        this.explicitlyCleared = true;
        if (this.atomic && this.doc.cantEdit) {
            this.doc.cantEdit = false;
            if (cm) reCheckSelection(cm);
        }
        if (withOp) endOperation(cm);
        signalLater(this, "clear");
    };
    TextMarker.prototype.find = function() {
        var from, to;
        for (var i = 0; i < this.lines.length; ++i) {
            var line = this.lines[i];
            var span = getMarkedSpanFor(line.markedSpans, this);
            if (span.from != null || span.to != null) {
                var found = lineNo(line);
                if (span.from != null) from = Pos(found, span.from);
                if (span.to != null) to = Pos(found, span.to);
            }
        }
        if (this.type == "bookmark") return from;
        return from && {
            from: from,
            to: to
        };
    };
    TextMarker.prototype.changed = function() {
        var pos = this.find(), cm = this.doc.cm;
        if (!pos || !cm) return;
        var line = getLine(this.doc, pos.from.line);
        clearCachedMeasurement(cm, line);
        if (pos.from.line >= cm.display.showingFrom && pos.from.line < cm.display.showingTo) {
            for (var node = cm.display.lineDiv.firstChild; node; node = node.nextSibling) if (node.lineObj == line) {
                if (node.offsetHeight != line.height) updateLineHeight(line, node.offsetHeight);
                break;
            }
            runInOp(cm, function() {
                cm.curOp.selectionChanged = true;
            });
        }
    };
    TextMarker.prototype.attachLine = function(line) {
        if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1) (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(line);
    };
    TextMarker.prototype.detachLine = function(line) {
        this.lines.splice(indexOf(this.lines, line), 1);
        if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
        }
    };
    function markText(doc, from, to, options, type) {
        if (options && options.shared) return markTextShared(doc, from, to, options, type);
        if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);
        var marker = new TextMarker(doc, type);
        if (type == "range" && !posLess(from, to)) return marker;
        if (options) copyObj(options, marker);
        if (marker.replacedWith) {
            marker.collapsed = true;
            marker.replacedWith = elt("span", [ marker.replacedWith ], "CodeMirror-widget");
            if (!options.handleMouseEvents) marker.replacedWith.ignoreEvents = true;
        }
        if (marker.collapsed) sawCollapsedSpans = true;
        if (marker.addToHistory) addToHistory(doc, {
            from: from,
            to: to,
            origin: "markText"
        }, {
            head: doc.sel.head,
            anchor: doc.sel.anchor
        }, NaN);
        var curLine = from.line, size = 0, collapsedAtStart, collapsedAtEnd, cm = doc.cm, updateMaxLine;
        doc.iter(curLine, to.line + 1, function(line) {
            if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(doc, line) == cm.display.maxLine) updateMaxLine = true;
            var span = {
                from: null,
                to: null,
                marker: marker
            };
            size += line.text.length;
            if (curLine == from.line) {
                span.from = from.ch;
                size -= from.ch;
            }
            if (curLine == to.line) {
                span.to = to.ch;
                size -= line.text.length - to.ch;
            }
            if (marker.collapsed) {
                if (curLine == to.line) collapsedAtEnd = collapsedSpanAt(line, to.ch);
                if (curLine == from.line) collapsedAtStart = collapsedSpanAt(line, from.ch); else updateLineHeight(line, 0);
            }
            addMarkedSpan(line, span);
            ++curLine;
        });
        if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
            if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
        });
        if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() {
            marker.clear();
        });
        if (marker.readOnly) {
            sawReadOnlySpans = true;
            if (doc.history.done.length || doc.history.undone.length) doc.clearHistory();
        }
        if (marker.collapsed) {
            if (collapsedAtStart != collapsedAtEnd) throw new Error("Inserting collapsed marker overlapping an existing one");
            marker.size = size;
            marker.atomic = true;
        }
        if (cm) {
            if (updateMaxLine) cm.curOp.updateMaxLine = true;
            if (marker.className || marker.startStyle || marker.endStyle || marker.collapsed) regChange(cm, from.line, to.line + 1);
            if (marker.atomic) reCheckSelection(cm);
        }
        return marker;
    }
    function SharedTextMarker(markers, primary) {
        this.markers = markers;
        this.primary = primary;
        for (var i = 0, me = this; i < markers.length; ++i) {
            markers[i].parent = this;
            on(markers[i], "clear", function() {
                me.clear();
            });
        }
    }
    CodeMirror.SharedTextMarker = SharedTextMarker;
    SharedTextMarker.prototype.clear = function() {
        if (this.explicitlyCleared) return;
        this.explicitlyCleared = true;
        for (var i = 0; i < this.markers.length; ++i) this.markers[i].clear();
        signalLater(this, "clear");
    };
    SharedTextMarker.prototype.find = function() {
        return this.primary.find();
    };
    function markTextShared(doc, from, to, options, type) {
        options = copyObj(options);
        options.shared = false;
        var markers = [ markText(doc, from, to, options, type) ], primary = markers[0];
        var widget = options.replacedWith;
        linkedDocs(doc, function(doc) {
            if (widget) options.replacedWith = widget.cloneNode(true);
            markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
            for (var i = 0; i < doc.linked.length; ++i) if (doc.linked[i].isParent) return;
            primary = lst(markers);
        });
        return new SharedTextMarker(markers, primary);
    }
    function getMarkedSpanFor(spans, marker) {
        if (spans) for (var i = 0; i < spans.length; ++i) {
            var span = spans[i];
            if (span.marker == marker) return span;
        }
    }
    function removeMarkedSpan(spans, span) {
        for (var r, i = 0; i < spans.length; ++i) if (spans[i] != span) (r || (r = [])).push(spans[i]);
        return r;
    }
    function addMarkedSpan(line, span) {
        line.markedSpans = line.markedSpans ? line.markedSpans.concat([ span ]) : [ span ];
        span.marker.attachLine(line);
    }
    function markedSpansBefore(old, startCh, isInsert) {
        if (old) for (var i = 0, nw; i < old.length; ++i) {
            var span = old[i], marker = span.marker;
            var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
            if (startsBefore || marker.type == "bookmark" && span.from == startCh && (!isInsert || !span.marker.insertLeft)) {
                var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
                (nw || (nw = [])).push({
                    from: span.from,
                    to: endsAfter ? null : span.to,
                    marker: marker
                });
            }
        }
        return nw;
    }
    function markedSpansAfter(old, endCh, isInsert) {
        if (old) for (var i = 0, nw; i < old.length; ++i) {
            var span = old[i], marker = span.marker;
            var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
            if (endsAfter || marker.type == "bookmark" && span.from == endCh && (!isInsert || span.marker.insertLeft)) {
                var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
                (nw || (nw = [])).push({
                    from: startsBefore ? null : span.from - endCh,
                    to: span.to == null ? null : span.to - endCh,
                    marker: marker
                });
            }
        }
        return nw;
    }
    function stretchSpansOverChange(doc, change) {
        var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
        var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
        if (!oldFirst && !oldLast) return null;
        var startCh = change.from.ch, endCh = change.to.ch, isInsert = posEq(change.from, change.to);
        var first = markedSpansBefore(oldFirst, startCh, isInsert);
        var last = markedSpansAfter(oldLast, endCh, isInsert);
        var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
        if (first) {
            for (var i = 0; i < first.length; ++i) {
                var span = first[i];
                if (span.to == null) {
                    var found = getMarkedSpanFor(last, span.marker);
                    if (!found) span.to = startCh; else if (sameLine) span.to = found.to == null ? null : found.to + offset;
                }
            }
        }
        if (last) {
            for (var i = 0; i < last.length; ++i) {
                var span = last[i];
                if (span.to != null) span.to += offset;
                if (span.from == null) {
                    var found = getMarkedSpanFor(first, span.marker);
                    if (!found) {
                        span.from = offset;
                        if (sameLine) (first || (first = [])).push(span);
                    }
                } else {
                    span.from += offset;
                    if (sameLine) (first || (first = [])).push(span);
                }
            }
        }
        if (sameLine && first) {
            for (var i = 0; i < first.length; ++i) if (first[i].from != null && first[i].from == first[i].to && first[i].marker.type != "bookmark") first.splice(i--, 1);
            if (!first.length) first = null;
        }
        var newMarkers = [ first ];
        if (!sameLine) {
            var gap = change.text.length - 2, gapMarkers;
            if (gap > 0 && first) for (var i = 0; i < first.length; ++i) if (first[i].to == null) (gapMarkers || (gapMarkers = [])).push({
                from: null,
                to: null,
                marker: first[i].marker
            });
            for (var i = 0; i < gap; ++i) newMarkers.push(gapMarkers);
            newMarkers.push(last);
        }
        return newMarkers;
    }
    function mergeOldSpans(doc, change) {
        var old = getOldSpans(doc, change);
        var stretched = stretchSpansOverChange(doc, change);
        if (!old) return stretched;
        if (!stretched) return old;
        for (var i = 0; i < old.length; ++i) {
            var oldCur = old[i], stretchCur = stretched[i];
            if (oldCur && stretchCur) {
                spans: for (var j = 0; j < stretchCur.length; ++j) {
                    var span = stretchCur[j];
                    for (var k = 0; k < oldCur.length; ++k) if (oldCur[k].marker == span.marker) continue spans;
                    oldCur.push(span);
                }
            } else if (stretchCur) {
                old[i] = stretchCur;
            }
        }
        return old;
    }
    function removeReadOnlyRanges(doc, from, to) {
        var markers = null;
        doc.iter(from.line, to.line + 1, function(line) {
            if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
                var mark = line.markedSpans[i].marker;
                if (mark.readOnly && (!markers || indexOf(markers, mark) == -1)) (markers || (markers = [])).push(mark);
            }
        });
        if (!markers) return null;
        var parts = [ {
            from: from,
            to: to
        } ];
        for (var i = 0; i < markers.length; ++i) {
            var mk = markers[i], m = mk.find();
            for (var j = 0; j < parts.length; ++j) {
                var p = parts[j];
                if (posLess(p.to, m.from) || posLess(m.to, p.from)) continue;
                var newParts = [ j, 1 ];
                if (posLess(p.from, m.from) || !mk.inclusiveLeft && posEq(p.from, m.from)) newParts.push({
                    from: p.from,
                    to: m.from
                });
                if (posLess(m.to, p.to) || !mk.inclusiveRight && posEq(p.to, m.to)) newParts.push({
                    from: m.to,
                    to: p.to
                });
                parts.splice.apply(parts, newParts);
                j += newParts.length - 1;
            }
        }
        return parts;
    }
    function collapsedSpanAt(line, ch) {
        var sps = sawCollapsedSpans && line.markedSpans, found;
        if (sps) for (var sp, i = 0; i < sps.length; ++i) {
            sp = sps[i];
            if (!sp.marker.collapsed) continue;
            if ((sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) && (!found || found.width < sp.marker.width)) found = sp.marker;
        }
        return found;
    }
    function collapsedSpanAtStart(line) {
        return collapsedSpanAt(line, -1);
    }
    function collapsedSpanAtEnd(line) {
        return collapsedSpanAt(line, line.text.length + 1);
    }
    function visualLine(doc, line) {
        var merged;
        while (merged = collapsedSpanAtStart(line)) line = getLine(doc, merged.find().from.line);
        return line;
    }
    function lineIsHidden(doc, line) {
        var sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var sp, i = 0; i < sps.length; ++i) {
            sp = sps[i];
            if (!sp.marker.collapsed) continue;
            if (sp.from == null) return true;
            if (sp.marker.replacedWith) continue;
            if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp)) return true;
        }
    }
    function lineIsHiddenInner(doc, line, span) {
        if (span.to == null) {
            var end = span.marker.find().to, endLine = getLine(doc, end.line);
            return lineIsHiddenInner(doc, endLine, getMarkedSpanFor(endLine.markedSpans, span.marker));
        }
        if (span.marker.inclusiveRight && span.to == line.text.length) return true;
        for (var sp, i = 0; i < line.markedSpans.length; ++i) {
            sp = line.markedSpans[i];
            if (sp.marker.collapsed && !sp.marker.replacedWith && sp.from == span.to && (sp.marker.inclusiveLeft || span.marker.inclusiveRight) && lineIsHiddenInner(doc, line, sp)) return true;
        }
    }
    function detachMarkedSpans(line) {
        var spans = line.markedSpans;
        if (!spans) return;
        for (var i = 0; i < spans.length; ++i) spans[i].marker.detachLine(line);
        line.markedSpans = null;
    }
    function attachMarkedSpans(line, spans) {
        if (!spans) return;
        for (var i = 0; i < spans.length; ++i) spans[i].marker.attachLine(line);
        line.markedSpans = spans;
    }
    var LineWidget = CodeMirror.LineWidget = function(cm, node, options) {
        for (var opt in options) if (options.hasOwnProperty(opt)) this[opt] = options[opt];
        this.cm = cm;
        this.node = node;
    };
    function widgetOperation(f) {
        return function() {
            var withOp = !this.cm.curOp;
            if (withOp) startOperation(this.cm);
            try {
                var result = f.apply(this, arguments);
            } finally {
                if (withOp) endOperation(this.cm);
            }
            return result;
        };
    }
    LineWidget.prototype.clear = widgetOperation(function() {
        var ws = this.line.widgets, no = lineNo(this.line);
        if (no == null || !ws) return;
        for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
        if (!ws.length) this.line.widgets = null;
        updateLineHeight(this.line, Math.max(0, this.line.height - widgetHeight(this)));
        regChange(this.cm, no, no + 1);
    });
    LineWidget.prototype.changed = widgetOperation(function() {
        var oldH = this.height;
        this.height = null;
        var diff = widgetHeight(this) - oldH;
        if (!diff) return;
        updateLineHeight(this.line, this.line.height + diff);
        var no = lineNo(this.line);
        regChange(this.cm, no, no + 1);
    });
    function widgetHeight(widget) {
        if (widget.height != null) return widget.height;
        if (!widget.node.parentNode || widget.node.parentNode.nodeType != 1) removeChildrenAndAdd(widget.cm.display.measure, elt("div", [ widget.node ], null, "position: relative"));
        return widget.height = widget.node.offsetHeight;
    }
    function addLineWidget(cm, handle, node, options) {
        var widget = new LineWidget(cm, node, options);
        if (widget.noHScroll) cm.display.alignWidgets = true;
        changeLine(cm, handle, function(line) {
            (line.widgets || (line.widgets = [])).push(widget);
            widget.line = line;
            if (!lineIsHidden(cm.doc, line) || widget.showIfHidden) {
                var aboveVisible = heightAtLine(cm, line) < cm.display.scroller.scrollTop;
                updateLineHeight(line, line.height + widgetHeight(widget));
                if (aboveVisible) addToScrollPos(cm, 0, widget.height);
            }
            return true;
        });
        return widget;
    }
    function makeLine(text, markedSpans, estimateHeight) {
        var line = {
            text: text
        };
        attachMarkedSpans(line, markedSpans);
        line.height = estimateHeight ? estimateHeight(line) : 1;
        return line;
    }
    function updateLine(line, text, markedSpans, estimateHeight) {
        line.text = text;
        if (line.stateAfter) line.stateAfter = null;
        if (line.styles) line.styles = null;
        if (line.order != null) line.order = null;
        detachMarkedSpans(line);
        attachMarkedSpans(line, markedSpans);
        var estHeight = estimateHeight ? estimateHeight(line) : 1;
        if (estHeight != line.height) updateLineHeight(line, estHeight);
    }
    function cleanUpLine(line) {
        line.parent = null;
        detachMarkedSpans(line);
    }
    function runMode(cm, text, mode, state, f) {
        var flattenSpans = mode.flattenSpans;
        if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
        var curStart = 0, curStyle = null;
        var stream = new StringStream(text, cm.options.tabSize), style;
        if (text == "" && mode.blankLine) mode.blankLine(state);
        while (!stream.eol()) {
            if (stream.pos > cm.options.maxHighlightLength) {
                flattenSpans = false;
                stream.pos = Math.min(text.length, stream.start + 5e4);
                style = null;
            } else {
                style = mode.token(stream, state);
            }
            if (!flattenSpans || curStyle != style) {
                if (curStart < stream.start) f(stream.start, curStyle);
                curStart = stream.start;
                curStyle = style;
            }
            stream.start = stream.pos;
        }
        if (curStart < stream.pos) f(stream.pos, curStyle);
    }
    function highlightLine(cm, line, state) {
        var st = [ cm.state.modeGen ];
        runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
            st.push(end, style);
        });
        for (var o = 0; o < cm.state.overlays.length; ++o) {
            var overlay = cm.state.overlays[o], i = 1, at = 0;
            runMode(cm, line.text, overlay.mode, true, function(end, style) {
                var start = i;
                while (at < end) {
                    var i_end = st[i];
                    if (i_end > end) st.splice(i, 1, end, st[i + 1], i_end);
                    i += 2;
                    at = Math.min(end, i_end);
                }
                if (!style) return;
                if (overlay.opaque) {
                    st.splice(start, i - start, end, style);
                    i = start + 2;
                } else {
                    for (;start < i; start += 2) {
                        var cur = st[start + 1];
                        st[start + 1] = cur ? cur + " " + style : style;
                    }
                }
            });
        }
        return st;
    }
    function getLineStyles(cm, line) {
        if (!line.styles || line.styles[0] != cm.state.modeGen) line.styles = highlightLine(cm, line, line.stateAfter = getStateBefore(cm, lineNo(line)));
        return line.styles;
    }
    function processLine(cm, line, state) {
        var mode = cm.doc.mode;
        var stream = new StringStream(line.text, cm.options.tabSize);
        if (line.text == "" && mode.blankLine) mode.blankLine(state);
        while (!stream.eol() && stream.pos <= cm.options.maxHighlightLength) {
            mode.token(stream, state);
            stream.start = stream.pos;
        }
    }
    var styleToClassCache = {};
    function styleToClass(style) {
        if (!style) return null;
        return styleToClassCache[style] || (styleToClassCache[style] = "cm-" + style.replace(/ +/g, " cm-"));
    }
    function lineContent(cm, realLine, measure) {
        var merged, line = realLine, empty = true;
        while (merged = collapsedSpanAtStart(line)) line = getLine(cm.doc, merged.find().from.line);
        var builder = {
            pre: elt("pre"),
            col: 0,
            pos: 0,
            display: !measure,
            measure: null,
            measuredSomething: false,
            cm: cm
        };
        if (line.textClass) builder.pre.className = line.textClass;
        do {
            if (line.text) empty = false;
            builder.measure = line == realLine && measure;
            builder.pos = 0;
            builder.addToken = builder.measure ? buildTokenMeasure : buildToken;
            if ((ie || webkit) && cm.getOption("lineWrapping")) builder.addToken = buildTokenSplitSpaces(builder.addToken);
            var next = insertLineContent(line, builder, getLineStyles(cm, line));
            if (measure && line == realLine && !builder.measuredSomething) {
                measure[0] = builder.pre.appendChild(zeroWidthElement(cm.display.measure));
                builder.measuredSomething = true;
            }
            if (next) line = getLine(cm.doc, next.to.line);
        } while (next);
        if (measure && !builder.measuredSomething && !measure[0]) measure[0] = builder.pre.appendChild(empty ? elt("span", " ") : zeroWidthElement(cm.display.measure));
        if (!builder.pre.firstChild && !lineIsHidden(cm.doc, realLine)) builder.pre.appendChild(document.createTextNode(" "));
        var order;
        if (measure && ie && (order = getOrder(line))) {
            var l = order.length - 1;
            if (order[l].from == order[l].to) --l;
            var last = order[l], prev = order[l - 1];
            if (last.from + 1 == last.to && prev && last.level < prev.level) {
                var span = measure[builder.pos - 1];
                if (span) span.parentNode.insertBefore(span.measureRight = zeroWidthElement(cm.display.measure), span.nextSibling);
            }
        }
        signal(cm, "renderLine", cm, realLine, builder.pre);
        return builder.pre;
    }
    var tokenSpecialChars = /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\uFEFF]/g;
    function buildToken(builder, text, style, startStyle, endStyle) {
        if (!text) return;
        if (!tokenSpecialChars.test(text)) {
            builder.col += text.length;
            var content = document.createTextNode(text);
        } else {
            var content = document.createDocumentFragment(), pos = 0;
            while (true) {
                tokenSpecialChars.lastIndex = pos;
                var m = tokenSpecialChars.exec(text);
                var skipped = m ? m.index - pos : text.length - pos;
                if (skipped) {
                    content.appendChild(document.createTextNode(text.slice(pos, pos + skipped)));
                    builder.col += skipped;
                }
                if (!m) break;
                pos += skipped + 1;
                if (m[0] == "	") {
                    var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
                    content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
                    builder.col += tabWidth;
                } else {
                    var token = elt("span", "•", "cm-invalidchar");
                    token.title = "\\u" + m[0].charCodeAt(0).toString(16);
                    content.appendChild(token);
                    builder.col += 1;
                }
            }
        }
        if (style || startStyle || endStyle || builder.measure) {
            var fullStyle = style || "";
            if (startStyle) fullStyle += startStyle;
            if (endStyle) fullStyle += endStyle;
            return builder.pre.appendChild(elt("span", [ content ], fullStyle));
        }
        builder.pre.appendChild(content);
    }
    function buildTokenMeasure(builder, text, style, startStyle, endStyle) {
        var wrapping = builder.cm.options.lineWrapping;
        for (var i = 0; i < text.length; ++i) {
            var ch = text.charAt(i), start = i == 0;
            if (ch >= "���" && ch < "���" && i < text.length - 1) {
                ch = text.slice(i, i + 2);
                ++i;
            } else if (i && wrapping && spanAffectsWrapping(text, i)) {
                builder.pre.appendChild(elt("wbr"));
            }
            var span = builder.measure[builder.pos] = buildToken(builder, ch, style, start && startStyle, i == text.length - 1 && endStyle);
            if (ie && wrapping && ch == " " && i && !/\s/.test(text.charAt(i - 1)) && i < text.length - 1 && !/\s/.test(text.charAt(i + 1))) span.style.whiteSpace = "normal";
            builder.pos += ch.length;
        }
        if (text.length) builder.measuredSomething = true;
    }
    function buildTokenSplitSpaces(inner) {
        function split(old) {
            var out = " ";
            for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : " ";
            out += " ";
            return out;
        }
        return function(builder, text, style, startStyle, endStyle) {
            return inner(builder, text.replace(/ {3,}/, split), style, startStyle, endStyle);
        };
    }
    function buildCollapsedSpan(builder, size, widget) {
        if (widget) {
            if (!builder.display) widget = widget.cloneNode(true);
            if (builder.measure) {
                builder.measure[builder.pos] = size ? widget : builder.pre.appendChild(zeroWidthElement(builder.cm.display.measure));
                builder.measuredSomething = true;
            }
            builder.pre.appendChild(widget);
        }
        builder.pos += size;
    }
    function insertLineContent(line, builder, styles) {
        var spans = line.markedSpans, allText = line.text, at = 0;
        if (!spans) {
            for (var i = 1; i < styles.length; i += 2) builder.addToken(builder, allText.slice(at, at = styles[i]), styleToClass(styles[i + 1]));
            return;
        }
        var len = allText.length, pos = 0, i = 1, text = "", style;
        var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed;
        for (;;) {
            if (nextChange == pos) {
                spanStyle = spanEndStyle = spanStartStyle = "";
                collapsed = null;
                nextChange = Infinity;
                var foundBookmark = null;
                for (var j = 0; j < spans.length; ++j) {
                    var sp = spans[j], m = sp.marker;
                    if (sp.from <= pos && (sp.to == null || sp.to > pos)) {
                        if (sp.to != null && nextChange > sp.to) {
                            nextChange = sp.to;
                            spanEndStyle = "";
                        }
                        if (m.className) spanStyle += " " + m.className;
                        if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
                        if (m.endStyle && sp.to == nextChange) spanEndStyle += " " + m.endStyle;
                        if (m.collapsed && (!collapsed || collapsed.marker.size < m.size)) collapsed = sp;
                    } else if (sp.from > pos && nextChange > sp.from) {
                        nextChange = sp.from;
                    }
                    if (m.type == "bookmark" && sp.from == pos && m.replacedWith) foundBookmark = m.replacedWith;
                }
                if (collapsed && (collapsed.from || 0) == pos) {
                    buildCollapsedSpan(builder, (collapsed.to == null ? len : collapsed.to) - pos, collapsed.from != null && collapsed.marker.replacedWith);
                    if (collapsed.to == null) return collapsed.marker.find();
                }
                if (foundBookmark && !collapsed) buildCollapsedSpan(builder, 0, foundBookmark);
            }
            if (pos >= len) break;
            var upto = Math.min(len, nextChange);
            while (true) {
                if (text) {
                    var end = pos + text.length;
                    if (!collapsed) {
                        var tokenText = end > upto ? text.slice(0, upto - pos) : text;
                        builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle, spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "");
                    }
                    if (end >= upto) {
                        text = text.slice(upto - pos);
                        pos = upto;
                        break;
                    }
                    pos = end;
                    spanStartStyle = "";
                }
                text = allText.slice(at, at = styles[i++]);
                style = styleToClass(styles[i++]);
            }
        }
    }
    function updateDoc(doc, change, markedSpans, selAfter, estimateHeight) {
        function spansFor(n) {
            return markedSpans ? markedSpans[n] : null;
        }
        function update(line, text, spans) {
            updateLine(line, text, spans, estimateHeight);
            signalLater(line, "change", line, change);
        }
        var from = change.from, to = change.to, text = change.text;
        var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
        var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;
        if (from.ch == 0 && to.ch == 0 && lastText == "") {
            for (var i = 0, e = text.length - 1, added = []; i < e; ++i) added.push(makeLine(text[i], spansFor(i), estimateHeight));
            update(lastLine, lastLine.text, lastSpans);
            if (nlines) doc.remove(from.line, nlines);
            if (added.length) doc.insert(from.line, added);
        } else if (firstLine == lastLine) {
            if (text.length == 1) {
                update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
            } else {
                for (var added = [], i = 1, e = text.length - 1; i < e; ++i) added.push(makeLine(text[i], spansFor(i), estimateHeight));
                added.push(makeLine(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
                update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
                doc.insert(from.line + 1, added);
            }
        } else if (text.length == 1) {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
            doc.remove(from.line + 1, nlines);
        } else {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
            update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
            for (var i = 1, e = text.length - 1, added = []; i < e; ++i) added.push(makeLine(text[i], spansFor(i), estimateHeight));
            if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
            doc.insert(from.line + 1, added);
        }
        signalLater(doc, "change", doc, change);
        setSelection(doc, selAfter.anchor, selAfter.head, null, true);
    }
    function LeafChunk(lines) {
        this.lines = lines;
        this.parent = null;
        for (var i = 0, e = lines.length, height = 0; i < e; ++i) {
            lines[i].parent = this;
            height += lines[i].height;
        }
        this.height = height;
    }
    LeafChunk.prototype = {
        chunkSize: function() {
            return this.lines.length;
        },
        removeInner: function(at, n) {
            for (var i = at, e = at + n; i < e; ++i) {
                var line = this.lines[i];
                this.height -= line.height;
                cleanUpLine(line);
                signalLater(line, "delete");
            }
            this.lines.splice(at, n);
        },
        collapse: function(lines) {
            lines.splice.apply(lines, [ lines.length, 0 ].concat(this.lines));
        },
        insertInner: function(at, lines, height) {
            this.height += height;
            this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
            for (var i = 0, e = lines.length; i < e; ++i) lines[i].parent = this;
        },
        iterN: function(at, n, op) {
            for (var e = at + n; at < e; ++at) if (op(this.lines[at])) return true;
        }
    };
    function BranchChunk(children) {
        this.children = children;
        var size = 0, height = 0;
        for (var i = 0, e = children.length; i < e; ++i) {
            var ch = children[i];
            size += ch.chunkSize();
            height += ch.height;
            ch.parent = this;
        }
        this.size = size;
        this.height = height;
        this.parent = null;
    }
    BranchChunk.prototype = {
        chunkSize: function() {
            return this.size;
        },
        removeInner: function(at, n) {
            this.size -= n;
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (at < sz) {
                    var rm = Math.min(n, sz - at), oldHeight = child.height;
                    child.removeInner(at, rm);
                    this.height -= oldHeight - child.height;
                    if (sz == rm) {
                        this.children.splice(i--, 1);
                        child.parent = null;
                    }
                    if ((n -= rm) == 0) break;
                    at = 0;
                } else at -= sz;
            }
            if (this.size - n < 25) {
                var lines = [];
                this.collapse(lines);
                this.children = [ new LeafChunk(lines) ];
                this.children[0].parent = this;
            }
        },
        collapse: function(lines) {
            for (var i = 0, e = this.children.length; i < e; ++i) this.children[i].collapse(lines);
        },
        insertInner: function(at, lines, height) {
            this.size += lines.length;
            this.height += height;
            for (var i = 0, e = this.children.length; i < e; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (at <= sz) {
                    child.insertInner(at, lines, height);
                    if (child.lines && child.lines.length > 50) {
                        while (child.lines.length > 50) {
                            var spilled = child.lines.splice(child.lines.length - 25, 25);
                            var newleaf = new LeafChunk(spilled);
                            child.height -= newleaf.height;
                            this.children.splice(i + 1, 0, newleaf);
                            newleaf.parent = this;
                        }
                        this.maybeSpill();
                    }
                    break;
                }
                at -= sz;
            }
        },
        maybeSpill: function() {
            if (this.children.length <= 10) return;
            var me = this;
            do {
                var spilled = me.children.splice(me.children.length - 5, 5);
                var sibling = new BranchChunk(spilled);
                if (!me.parent) {
                    var copy = new BranchChunk(me.children);
                    copy.parent = me;
                    me.children = [ copy, sibling ];
                    me = copy;
                } else {
                    me.size -= sibling.size;
                    me.height -= sibling.height;
                    var myIndex = indexOf(me.parent.children, me);
                    me.parent.children.splice(myIndex + 1, 0, sibling);
                }
                sibling.parent = me.parent;
            } while (me.children.length > 10);
            me.parent.maybeSpill();
        },
        iterN: function(at, n, op) {
            for (var i = 0, e = this.children.length; i < e; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (at < sz) {
                    var used = Math.min(n, sz - at);
                    if (child.iterN(at, used, op)) return true;
                    if ((n -= used) == 0) break;
                    at = 0;
                } else at -= sz;
            }
        }
    };
    var nextDocId = 0;
    var Doc = CodeMirror.Doc = function(text, mode, firstLine) {
        if (!(this instanceof Doc)) return new Doc(text, mode, firstLine);
        if (firstLine == null) firstLine = 0;
        BranchChunk.call(this, [ new LeafChunk([ makeLine("", null) ]) ]);
        this.first = firstLine;
        this.scrollTop = this.scrollLeft = 0;
        this.cantEdit = false;
        this.history = makeHistory();
        this.cleanGeneration = 1;
        this.frontier = firstLine;
        var start = Pos(firstLine, 0);
        this.sel = {
            from: start,
            to: start,
            head: start,
            anchor: start,
            shift: false,
            extend: false,
            goalColumn: null
        };
        this.id = ++nextDocId;
        this.modeOption = mode;
        if (typeof text == "string") text = splitLines(text);
        updateDoc(this, {
            from: start,
            to: start,
            text: text
        }, null, {
            head: start,
            anchor: start
        });
    };
    Doc.prototype = createObj(BranchChunk.prototype, {
        constructor: Doc,
        iter: function(from, to, op) {
            if (op) this.iterN(from - this.first, to - from, op); else this.iterN(this.first, this.first + this.size, from);
        },
        insert: function(at, lines) {
            var height = 0;
            for (var i = 0, e = lines.length; i < e; ++i) height += lines[i].height;
            this.insertInner(at - this.first, lines, height);
        },
        remove: function(at, n) {
            this.removeInner(at - this.first, n);
        },
        getValue: function(lineSep) {
            var lines = getLines(this, this.first, this.first + this.size);
            if (lineSep === false) return lines;
            return lines.join(lineSep || "\n");
        },
        setValue: function(code) {
            var top = Pos(this.first, 0), last = this.first + this.size - 1;
            makeChange(this, {
                from: top,
                to: Pos(last, getLine(this, last).text.length),
                text: splitLines(code),
                origin: "setValue"
            }, {
                head: top,
                anchor: top
            }, true);
        },
        replaceRange: function(code, from, to, origin) {
            from = clipPos(this, from);
            to = to ? clipPos(this, to) : from;
            replaceRange(this, code, from, to, origin);
        },
        getRange: function(from, to, lineSep) {
            var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
            if (lineSep === false) return lines;
            return lines.join(lineSep || "\n");
        },
        getLine: function(line) {
            var l = this.getLineHandle(line);
            return l && l.text;
        },
        setLine: function(line, text) {
            if (isLine(this, line)) replaceRange(this, text, Pos(line, 0), clipPos(this, Pos(line)));
        },
        removeLine: function(line) {
            if (line) replaceRange(this, "", clipPos(this, Pos(line - 1)), clipPos(this, Pos(line))); else replaceRange(this, "", Pos(0, 0), clipPos(this, Pos(1, 0)));
        },
        getLineHandle: function(line) {
            if (isLine(this, line)) return getLine(this, line);
        },
        getLineNumber: function(line) {
            return lineNo(line);
        },
        lineCount: function() {
            return this.size;
        },
        firstLine: function() {
            return this.first;
        },
        lastLine: function() {
            return this.first + this.size - 1;
        },
        clipPos: function(pos) {
            return clipPos(this, pos);
        },
        getCursor: function(start) {
            var sel = this.sel, pos;
            if (start == null || start == "head") pos = sel.head; else if (start == "anchor") pos = sel.anchor; else if (start == "end" || start === false) pos = sel.to; else pos = sel.from;
            return copyPos(pos);
        },
        somethingSelected: function() {
            return !posEq(this.sel.head, this.sel.anchor);
        },
        setCursor: docOperation(function(line, ch, extend) {
            var pos = clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line);
            if (extend) extendSelection(this, pos); else setSelection(this, pos, pos);
        }),
        setSelection: docOperation(function(anchor, head) {
            setSelection(this, clipPos(this, anchor), clipPos(this, head || anchor));
        }),
        extendSelection: docOperation(function(from, to) {
            extendSelection(this, clipPos(this, from), to && clipPos(this, to));
        }),
        getSelection: function(lineSep) {
            return this.getRange(this.sel.from, this.sel.to, lineSep);
        },
        replaceSelection: function(code, collapse, origin) {
            makeChange(this, {
                from: this.sel.from,
                to: this.sel.to,
                text: splitLines(code),
                origin: origin
            }, collapse || "around");
        },
        undo: docOperation(function() {
            makeChangeFromHistory(this, "undo");
        }),
        redo: docOperation(function() {
            makeChangeFromHistory(this, "redo");
        }),
        setExtending: function(val) {
            this.sel.extend = val;
        },
        historySize: function() {
            var hist = this.history;
            return {
                undo: hist.done.length,
                redo: hist.undone.length
            };
        },
        clearHistory: function() {
            this.history = makeHistory(this.history.maxGeneration);
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration();
        },
        changeGeneration: function() {
            this.history.lastOp = this.history.lastOrigin = null;
            return this.history.generation;
        },
        isClean: function(gen) {
            return this.history.generation == (gen || this.cleanGeneration);
        },
        getHistory: function() {
            return {
                done: copyHistoryArray(this.history.done),
                undone: copyHistoryArray(this.history.undone)
            };
        },
        setHistory: function(histData) {
            var hist = this.history = makeHistory(this.history.maxGeneration);
            hist.done = histData.done.slice(0);
            hist.undone = histData.undone.slice(0);
        },
        markText: function(from, to, options) {
            return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
        },
        setBookmark: function(pos, options) {
            var realOpts = {
                replacedWith: options && (options.nodeType == null ? options.widget : options),
                insertLeft: options && options.insertLeft
            };
            pos = clipPos(this, pos);
            return markText(this, pos, pos, realOpts, "bookmark");
        },
        findMarksAt: function(pos) {
            pos = clipPos(this, pos);
            var markers = [], spans = getLine(this, pos.line).markedSpans;
            if (spans) for (var i = 0; i < spans.length; ++i) {
                var span = spans[i];
                if ((span.from == null || span.from <= pos.ch) && (span.to == null || span.to >= pos.ch)) markers.push(span.marker.parent || span.marker);
            }
            return markers;
        },
        getAllMarks: function() {
            var markers = [];
            this.iter(function(line) {
                var sps = line.markedSpans;
                if (sps) for (var i = 0; i < sps.length; ++i) if (sps[i].from != null) markers.push(sps[i].marker);
            });
            return markers;
        },
        posFromIndex: function(off) {
            var ch, lineNo = this.first;
            this.iter(function(line) {
                var sz = line.text.length + 1;
                if (sz > off) {
                    ch = off;
                    return true;
                }
                off -= sz;
                ++lineNo;
            });
            return clipPos(this, Pos(lineNo, ch));
        },
        indexFromPos: function(coords) {
            coords = clipPos(this, coords);
            var index = coords.ch;
            if (coords.line < this.first || coords.ch < 0) return 0;
            this.iter(this.first, coords.line, function(line) {
                index += line.text.length + 1;
            });
            return index;
        },
        copy: function(copyHistory) {
            var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first);
            doc.scrollTop = this.scrollTop;
            doc.scrollLeft = this.scrollLeft;
            doc.sel = {
                from: this.sel.from,
                to: this.sel.to,
                head: this.sel.head,
                anchor: this.sel.anchor,
                shift: this.sel.shift,
                extend: false,
                goalColumn: this.sel.goalColumn
            };
            if (copyHistory) {
                doc.history.undoDepth = this.history.undoDepth;
                doc.setHistory(this.getHistory());
            }
            return doc;
        },
        linkedDoc: function(options) {
            if (!options) options = {};
            var from = this.first, to = this.first + this.size;
            if (options.from != null && options.from > from) from = options.from;
            if (options.to != null && options.to < to) to = options.to;
            var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from);
            if (options.sharedHist) copy.history = this.history;
            (this.linked || (this.linked = [])).push({
                doc: copy,
                sharedHist: options.sharedHist
            });
            copy.linked = [ {
                doc: this,
                isParent: true,
                sharedHist: options.sharedHist
            } ];
            return copy;
        },
        unlinkDoc: function(other) {
            if (other instanceof CodeMirror) other = other.doc;
            if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
                var link = this.linked[i];
                if (link.doc != other) continue;
                this.linked.splice(i, 1);
                other.unlinkDoc(this);
                break;
            }
            if (other.history == this.history) {
                var splitIds = [ other.id ];
                linkedDocs(other, function(doc) {
                    splitIds.push(doc.id);
                }, true);
                other.history = makeHistory();
                other.history.done = copyHistoryArray(this.history.done, splitIds);
                other.history.undone = copyHistoryArray(this.history.undone, splitIds);
            }
        },
        iterLinkedDocs: function(f) {
            linkedDocs(this, f);
        },
        getMode: function() {
            return this.mode;
        },
        getEditor: function() {
            return this.cm;
        }
    });
    Doc.prototype.eachLine = Doc.prototype.iter;
    var dontDelegate = "iter insert remove copy getEditor".split(" ");
    for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0) CodeMirror.prototype[prop] = function(method) {
        return function() {
            return method.apply(this.doc, arguments);
        };
    }(Doc.prototype[prop]);
    function linkedDocs(doc, f, sharedHistOnly) {
        function propagate(doc, skip, sharedHist) {
            if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
                var rel = doc.linked[i];
                if (rel.doc == skip) continue;
                var shared = sharedHist && rel.sharedHist;
                if (sharedHistOnly && !shared) continue;
                f(rel.doc, shared);
                propagate(rel.doc, doc, shared);
            }
        }
        propagate(doc, null, true);
    }
    function attachDoc(cm, doc) {
        if (doc.cm) throw new Error("This document is already in use.");
        cm.doc = doc;
        doc.cm = cm;
        estimateLineHeights(cm);
        loadMode(cm);
        if (!cm.options.lineWrapping) computeMaxLength(cm);
        cm.options.mode = doc.modeOption;
        regChange(cm);
    }
    function getLine(chunk, n) {
        n -= chunk.first;
        while (!chunk.lines) {
            for (var i = 0; ;++i) {
                var child = chunk.children[i], sz = child.chunkSize();
                if (n < sz) {
                    chunk = child;
                    break;
                }
                n -= sz;
            }
        }
        return chunk.lines[n];
    }
    function getBetween(doc, start, end) {
        var out = [], n = start.line;
        doc.iter(start.line, end.line + 1, function(line) {
            var text = line.text;
            if (n == end.line) text = text.slice(0, end.ch);
            if (n == start.line) text = text.slice(start.ch);
            out.push(text);
            ++n;
        });
        return out;
    }
    function getLines(doc, from, to) {
        var out = [];
        doc.iter(from, to, function(line) {
            out.push(line.text);
        });
        return out;
    }
    function updateLineHeight(line, height) {
        var diff = height - line.height;
        for (var n = line; n; n = n.parent) n.height += diff;
    }
    function lineNo(line) {
        if (line.parent == null) return null;
        var cur = line.parent, no = indexOf(cur.lines, line);
        for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
            for (var i = 0; ;++i) {
                if (chunk.children[i] == cur) break;
                no += chunk.children[i].chunkSize();
            }
        }
        return no + cur.first;
    }
    function lineAtHeight(chunk, h) {
        var n = chunk.first;
        outer: do {
            for (var i = 0, e = chunk.children.length; i < e; ++i) {
                var child = chunk.children[i], ch = child.height;
                if (h < ch) {
                    chunk = child;
                    continue outer;
                }
                h -= ch;
                n += child.chunkSize();
            }
            return n;
        } while (!chunk.lines);
        for (var i = 0, e = chunk.lines.length; i < e; ++i) {
            var line = chunk.lines[i], lh = line.height;
            if (h < lh) break;
            h -= lh;
        }
        return n + i;
    }
    function heightAtLine(cm, lineObj) {
        lineObj = visualLine(cm.doc, lineObj);
        var h = 0, chunk = lineObj.parent;
        for (var i = 0; i < chunk.lines.length; ++i) {
            var line = chunk.lines[i];
            if (line == lineObj) break; else h += line.height;
        }
        for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
            for (var i = 0; i < p.children.length; ++i) {
                var cur = p.children[i];
                if (cur == chunk) break; else h += cur.height;
            }
        }
        return h;
    }
    function getOrder(line) {
        var order = line.order;
        if (order == null) order = line.order = bidiOrdering(line.text);
        return order;
    }
    function makeHistory(startGen) {
        return {
            done: [],
            undone: [],
            undoDepth: Infinity,
            lastTime: 0,
            lastOp: null,
            lastOrigin: null,
            generation: startGen || 1,
            maxGeneration: startGen || 1
        };
    }
    function attachLocalSpans(doc, change, from, to) {
        var existing = change["spans_" + doc.id], n = 0;
        doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
            if (line.markedSpans) (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
            ++n;
        });
    }
    function historyChangeFromChange(doc, change) {
        var histChange = {
            from: change.from,
            to: changeEnd(change),
            text: getBetween(doc, change.from, change.to)
        };
        attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
        linkedDocs(doc, function(doc) {
            attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
        }, true);
        return histChange;
    }
    function addToHistory(doc, change, selAfter, opId) {
        var hist = doc.history;
        hist.undone.length = 0;
        var time = +new Date(), cur = lst(hist.done);
        if (cur && (hist.lastOp == opId || hist.lastOrigin == change.origin && change.origin && (change.origin.charAt(0) == "+" && doc.cm && hist.lastTime > time - doc.cm.options.historyEventDelay || change.origin.charAt(0) == "*"))) {
            var last = lst(cur.changes);
            if (posEq(change.from, change.to) && posEq(change.from, last.to)) {
                last.to = changeEnd(change);
            } else {
                cur.changes.push(historyChangeFromChange(doc, change));
            }
            cur.anchorAfter = selAfter.anchor;
            cur.headAfter = selAfter.head;
        } else {
            cur = {
                changes: [ historyChangeFromChange(doc, change) ],
                generation: hist.generation,
                anchorBefore: doc.sel.anchor,
                headBefore: doc.sel.head,
                anchorAfter: selAfter.anchor,
                headAfter: selAfter.head
            };
            hist.done.push(cur);
            hist.generation = ++hist.maxGeneration;
            while (hist.done.length > hist.undoDepth) hist.done.shift();
        }
        hist.lastTime = time;
        hist.lastOp = opId;
        hist.lastOrigin = change.origin;
    }
    function removeClearedSpans(spans) {
        if (!spans) return null;
        for (var i = 0, out; i < spans.length; ++i) {
            if (spans[i].marker.explicitlyCleared) {
                if (!out) out = spans.slice(0, i);
            } else if (out) out.push(spans[i]);
        }
        return !out ? spans : out.length ? out : null;
    }
    function getOldSpans(doc, change) {
        var found = change["spans_" + doc.id];
        if (!found) return null;
        for (var i = 0, nw = []; i < change.text.length; ++i) nw.push(removeClearedSpans(found[i]));
        return nw;
    }
    function copyHistoryArray(events, newGroup) {
        for (var i = 0, copy = []; i < events.length; ++i) {
            var event = events[i], changes = event.changes, newChanges = [];
            copy.push({
                changes: newChanges,
                anchorBefore: event.anchorBefore,
                headBefore: event.headBefore,
                anchorAfter: event.anchorAfter,
                headAfter: event.headAfter
            });
            for (var j = 0; j < changes.length; ++j) {
                var change = changes[j], m;
                newChanges.push({
                    from: change.from,
                    to: change.to,
                    text: change.text
                });
                if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
                    if (indexOf(newGroup, Number(m[1])) > -1) {
                        lst(newChanges)[prop] = change[prop];
                        delete change[prop];
                    }
                }
            }
        }
        return copy;
    }
    function rebaseHistSel(pos, from, to, diff) {
        if (to < pos.line) {
            pos.line += diff;
        } else if (from < pos.line) {
            pos.line = from;
            pos.ch = 0;
        }
    }
    function rebaseHistArray(array, from, to, diff) {
        for (var i = 0; i < array.length; ++i) {
            var sub = array[i], ok = true;
            for (var j = 0; j < sub.changes.length; ++j) {
                var cur = sub.changes[j];
                if (!sub.copied) {
                    cur.from = copyPos(cur.from);
                    cur.to = copyPos(cur.to);
                }
                if (to < cur.from.line) {
                    cur.from.line += diff;
                    cur.to.line += diff;
                } else if (from <= cur.to.line) {
                    ok = false;
                    break;
                }
            }
            if (!sub.copied) {
                sub.anchorBefore = copyPos(sub.anchorBefore);
                sub.headBefore = copyPos(sub.headBefore);
                sub.anchorAfter = copyPos(sub.anchorAfter);
                sub.readAfter = copyPos(sub.headAfter);
                sub.copied = true;
            }
            if (!ok) {
                array.splice(0, i + 1);
                i = 0;
            } else {
                rebaseHistSel(sub.anchorBefore);
                rebaseHistSel(sub.headBefore);
                rebaseHistSel(sub.anchorAfter);
                rebaseHistSel(sub.headAfter);
            }
        }
    }
    function rebaseHist(hist, change) {
        var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
        rebaseHistArray(hist.done, from, to, diff);
        rebaseHistArray(hist.undone, from, to, diff);
    }
    function stopMethod() {
        e_stop(this);
    }
    function addStop(event) {
        if (!event.stop) event.stop = stopMethod;
        return event;
    }
    function e_preventDefault(e) {
        if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
    }
    function e_stopPropagation(e) {
        if (e.stopPropagation) e.stopPropagation(); else e.cancelBubble = true;
    }
    function e_defaultPrevented(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
    }
    function e_stop(e) {
        e_preventDefault(e);
        e_stopPropagation(e);
    }
    CodeMirror.e_stop = e_stop;
    CodeMirror.e_preventDefault = e_preventDefault;
    CodeMirror.e_stopPropagation = e_stopPropagation;
    function e_target(e) {
        return e.target || e.srcElement;
    }
    function e_button(e) {
        var b = e.which;
        if (b == null) {
            if (e.button & 1) b = 1; else if (e.button & 2) b = 3; else if (e.button & 4) b = 2;
        }
        if (mac && e.ctrlKey && b == 1) b = 3;
        return b;
    }
    function on(emitter, type, f) {
        if (emitter.addEventListener) emitter.addEventListener(type, f, false); else if (emitter.attachEvent) emitter.attachEvent("on" + type, f); else {
            var map = emitter._handlers || (emitter._handlers = {});
            var arr = map[type] || (map[type] = []);
            arr.push(f);
        }
    }
    function off(emitter, type, f) {
        if (emitter.removeEventListener) emitter.removeEventListener(type, f, false); else if (emitter.detachEvent) emitter.detachEvent("on" + type, f); else {
            var arr = emitter._handlers && emitter._handlers[type];
            if (!arr) return;
            for (var i = 0; i < arr.length; ++i) if (arr[i] == f) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    function signal(emitter, type) {
        var arr = emitter._handlers && emitter._handlers[type];
        if (!arr) return;
        var args = Array.prototype.slice.call(arguments, 2);
        for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
    }
    var delayedCallbacks, delayedCallbackDepth = 0;
    function signalLater(emitter, type) {
        var arr = emitter._handlers && emitter._handlers[type];
        if (!arr) return;
        var args = Array.prototype.slice.call(arguments, 2);
        if (!delayedCallbacks) {
            ++delayedCallbackDepth;
            delayedCallbacks = [];
            setTimeout(fireDelayed, 0);
        }
        function bnd(f) {
            return function() {
                f.apply(null, args);
            };
        }
        for (var i = 0; i < arr.length; ++i) delayedCallbacks.push(bnd(arr[i]));
    }
    function signalDOMEvent(cm, e) {
        signal(cm, e.type, cm, e);
        return e_defaultPrevented(e);
    }
    function fireDelayed() {
        --delayedCallbackDepth;
        var delayed = delayedCallbacks;
        delayedCallbacks = null;
        for (var i = 0; i < delayed.length; ++i) delayed[i]();
    }
    function hasHandler(emitter, type) {
        var arr = emitter._handlers && emitter._handlers[type];
        return arr && arr.length > 0;
    }
    CodeMirror.on = on;
    CodeMirror.off = off;
    CodeMirror.signal = signal;
    var scrollerCutOff = 30;
    var Pass = CodeMirror.Pass = {
        toString: function() {
            return "CodeMirror.Pass";
        }
    };
    function Delayed() {
        this.id = null;
    }
    Delayed.prototype = {
        set: function(ms, f) {
            clearTimeout(this.id);
            this.id = setTimeout(f, ms);
        }
    };
    function countColumn(string, end, tabSize, startIndex, startValue) {
        if (end == null) {
            end = string.search(/[^\s\u00a0]/);
            if (end == -1) end = string.length;
        }
        for (var i = startIndex || 0, n = startValue || 0; i < end; ++i) {
            if (string.charAt(i) == "	") n += tabSize - n % tabSize; else ++n;
        }
        return n;
    }
    CodeMirror.countColumn = countColumn;
    var spaceStrs = [ "" ];
    function spaceStr(n) {
        while (spaceStrs.length <= n) spaceStrs.push(lst(spaceStrs) + " ");
        return spaceStrs[n];
    }
    function lst(arr) {
        return arr[arr.length - 1];
    }
    function selectInput(node) {
        if (ios) {
            node.selectionStart = 0;
            node.selectionEnd = node.value.length;
        } else {
            try {
                node.select();
            } catch (_e) {}
        }
    }
    function indexOf(collection, elt) {
        if (collection.indexOf) return collection.indexOf(elt);
        for (var i = 0, e = collection.length; i < e; ++i) if (collection[i] == elt) return i;
        return -1;
    }
    function createObj(base, props) {
        function Obj() {}
        Obj.prototype = base;
        var inst = new Obj();
        if (props) copyObj(props, inst);
        return inst;
    }
    function copyObj(obj, target) {
        if (!target) target = {};
        for (var prop in obj) if (obj.hasOwnProperty(prop)) target[prop] = obj[prop];
        return target;
    }
    function emptyArray(size) {
        for (var a = [], i = 0; i < size; ++i) a.push(undefined);
        return a;
    }
    function bind(f) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return f.apply(null, args);
        };
    }
    var nonASCIISingleCaseWordChar = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function isWordChar(ch) {
        return /\w/.test(ch) || ch > "" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
    }
    function isEmpty(obj) {
        for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
        return true;
    }
    var isExtendingChar = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff]/;
    function elt(tag, content, className, style) {
        var e = document.createElement(tag);
        if (className) e.className = className;
        if (style) e.style.cssText = style;
        if (typeof content == "string") setTextContent(e, content); else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
        return e;
    }
    function removeChildren(e) {
        for (var count = e.childNodes.length; count > 0; --count) e.removeChild(e.firstChild);
        return e;
    }
    function removeChildrenAndAdd(parent, e) {
        return removeChildren(parent).appendChild(e);
    }
    function setTextContent(e, str) {
        if (ie_lt9) {
            e.innerHTML = "";
            e.appendChild(document.createTextNode(str));
        } else e.textContent = str;
    }
    function getRect(node) {
        return node.getBoundingClientRect();
    }
    CodeMirror.replaceGetRect = function(f) {
        getRect = f;
    };
    var dragAndDrop = function() {
        if (ie_lt9) return false;
        var div = elt("div");
        return "draggable" in div || "dragDrop" in div;
    }();
    function spanAffectsWrapping() {
        return false;
    }
    if (gecko) spanAffectsWrapping = function(str, i) {
        return str.charCodeAt(i - 1) == 36 && str.charCodeAt(i) == 39;
    }; else if (safari && !/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent)) spanAffectsWrapping = function(str, i) {
        return /\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(str.slice(i - 1, i + 1));
    }; else if (webkit) spanAffectsWrapping = function(str, i) {
        if (i > 1 && str.charCodeAt(i - 1) == 45 && /\w/.test(str.charAt(i - 2)) && /[^\-?\.]/.test(str.charAt(i))) return true;
        return /[~!#%&*)=+}\]|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|…[\w~`@#$%\^&*(_=+{[><]/.test(str.slice(i - 1, i + 1));
    };
    var knownScrollbarWidth;
    function scrollbarWidth(measure) {
        if (knownScrollbarWidth != null) return knownScrollbarWidth;
        var test = elt("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
        removeChildrenAndAdd(measure, test);
        if (test.offsetWidth) knownScrollbarWidth = test.offsetHeight - test.clientHeight;
        return knownScrollbarWidth || 0;
    }
    var zwspSupported;
    function zeroWidthElement(measure) {
        if (zwspSupported == null) {
            var test = elt("span", "​");
            removeChildrenAndAdd(measure, elt("span", [ test, document.createTextNode("x") ]));
            if (measure.firstChild.offsetHeight != 0) zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !ie_lt8;
        }
        if (zwspSupported) return elt("span", "​"); else return elt("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
    }
    var splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
        var pos = 0, result = [], l = string.length;
        while (pos <= l) {
            var nl = string.indexOf("\n", pos);
            if (nl == -1) nl = string.length;
            var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
            var rt = line.indexOf("\r");
            if (rt != -1) {
                result.push(line.slice(0, rt));
                pos += rt + 1;
            } else {
                result.push(line);
                pos = nl + 1;
            }
        }
        return result;
    } : function(string) {
        return string.split(/\r\n?|\n/);
    };
    CodeMirror.splitLines = splitLines;
    var hasSelection = window.getSelection ? function(te) {
        try {
            return te.selectionStart != te.selectionEnd;
        } catch (e) {
            return false;
        }
    } : function(te) {
        try {
            var range = te.ownerDocument.selection.createRange();
        } catch (e) {}
        if (!range || range.parentElement() != te) return false;
        return range.compareEndPoints("StartToEnd", range) != 0;
    };
    var hasCopyEvent = function() {
        var e = elt("div");
        if ("oncopy" in e) return true;
        e.setAttribute("oncopy", "return;");
        return typeof e.oncopy == "function";
    }();
    var keyNames = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        109: "-",
        107: "=",
        127: "Delete",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63276: "PageUp",
        63277: "PageDown",
        63275: "End",
        63273: "Home",
        63234: "Left",
        63232: "Up",
        63235: "Right",
        63233: "Down",
        63302: "Insert",
        63272: "Delete"
    };
    CodeMirror.keyNames = keyNames;
    (function() {
        for (var i = 0; i < 10; i++) keyNames[i + 48] = String(i);
        for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
        for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
    })();
    function iterateBidiSections(order, from, to, f) {
        if (!order) return f(from, to, "ltr");
        for (var i = 0; i < order.length; ++i) {
            var part = order[i];
            if (part.from < to && part.to > from || from == to && part.to == from) f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
        }
    }
    function bidiLeft(part) {
        return part.level % 2 ? part.to : part.from;
    }
    function bidiRight(part) {
        return part.level % 2 ? part.from : part.to;
    }
    function lineLeft(line) {
        var order = getOrder(line);
        return order ? bidiLeft(order[0]) : 0;
    }
    function lineRight(line) {
        var order = getOrder(line);
        if (!order) return line.text.length;
        return bidiRight(lst(order));
    }
    function lineStart(cm, lineN) {
        var line = getLine(cm.doc, lineN);
        var visual = visualLine(cm.doc, line);
        if (visual != line) lineN = lineNo(visual);
        var order = getOrder(visual);
        var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
        return Pos(lineN, ch);
    }
    function lineEnd(cm, lineN) {
        var merged, line;
        while (merged = collapsedSpanAtEnd(line = getLine(cm.doc, lineN))) lineN = merged.find().to.line;
        var order = getOrder(line);
        var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
        return Pos(lineN, ch);
    }
    function compareBidiLevel(order, a, b) {
        var linedir = order[0].level;
        if (a == linedir) return true;
        if (b == linedir) return false;
        return a < b;
    }
    var bidiOther;
    function getBidiPartAt(order, pos) {
        for (var i = 0, found; i < order.length; ++i) {
            var cur = order[i];
            if (cur.from < pos && cur.to > pos) {
                bidiOther = null;
                return i;
            }
            if (cur.from == pos || cur.to == pos) {
                if (found == null) {
                    found = i;
                } else if (compareBidiLevel(order, cur.level, order[found].level)) {
                    bidiOther = found;
                    return i;
                } else {
                    bidiOther = i;
                    return found;
                }
            }
        }
        bidiOther = null;
        return found;
    }
    function moveInLine(line, pos, dir, byUnit) {
        if (!byUnit) return pos + dir;
        do pos += dir; while (pos > 0 && isExtendingChar.test(line.text.charAt(pos)));
        return pos;
    }
    function moveVisually(line, start, dir, byUnit) {
        var bidi = getOrder(line);
        if (!bidi) return moveLogically(line, start, dir, byUnit);
        var pos = getBidiPartAt(bidi, start), part = bidi[pos];
        var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);
        for (;;) {
            if (target > part.from && target < part.to) return target;
            if (target == part.from || target == part.to) {
                if (getBidiPartAt(bidi, target) == pos) return target;
                part = bidi[pos += dir];
                return dir > 0 == part.level % 2 ? part.to : part.from;
            } else {
                part = bidi[pos += dir];
                if (!part) return null;
                if (dir > 0 == part.level % 2) target = moveInLine(line, part.to, -1, byUnit); else target = moveInLine(line, part.from, 1, byUnit);
            }
        }
    }
    function moveLogically(line, start, dir, byUnit) {
        var target = start + dir;
        if (byUnit) while (target > 0 && isExtendingChar.test(line.text.charAt(target))) target += dir;
        return target < 0 || target > line.text.length ? null : target;
    }
    var bidiOrdering = function() {
        var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL";
        var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr";
        function charType(code) {
            if (code <= 255) return lowTypes.charAt(code); else if (1424 <= code && code <= 1524) return "R"; else if (1536 <= code && code <= 1791) return arabicTypes.charAt(code - 1536); else if (1792 <= code && code <= 2220) return "r"; else return "L";
        }
        var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
        var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
        var outerType = "L";
        return function(str) {
            if (!bidiRE.test(str)) return false;
            var len = str.length, types = [];
            for (var i = 0, type; i < len; ++i) types.push(type = charType(str.charCodeAt(i)));
            for (var i = 0, prev = outerType; i < len; ++i) {
                var type = types[i];
                if (type == "m") types[i] = prev; else prev = type;
            }
            for (var i = 0, cur = outerType; i < len; ++i) {
                var type = types[i];
                if (type == "1" && cur == "r") types[i] = "n"; else if (isStrong.test(type)) {
                    cur = type;
                    if (type == "r") types[i] = "R";
                }
            }
            for (var i = 1, prev = types[0]; i < len - 1; ++i) {
                var type = types[i];
                if (type == "+" && prev == "1" && types[i + 1] == "1") types[i] = "1"; else if (type == "," && prev == types[i + 1] && (prev == "1" || prev == "n")) types[i] = prev;
                prev = type;
            }
            for (var i = 0; i < len; ++i) {
                var type = types[i];
                if (type == ",") types[i] = "N"; else if (type == "%") {
                    for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
                    var replace = i && types[i - 1] == "!" || end < len - 1 && types[end] == "1" ? "1" : "N";
                    for (var j = i; j < end; ++j) types[j] = replace;
                    i = end - 1;
                }
            }
            for (var i = 0, cur = outerType; i < len; ++i) {
                var type = types[i];
                if (cur == "L" && type == "1") types[i] = "L"; else if (isStrong.test(type)) cur = type;
            }
            for (var i = 0; i < len; ++i) {
                if (isNeutral.test(types[i])) {
                    for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
                    var before = (i ? types[i - 1] : outerType) == "L";
                    var after = (end < len - 1 ? types[end] : outerType) == "L";
                    var replace = before || after ? "L" : "R";
                    for (var j = i; j < end; ++j) types[j] = replace;
                    i = end - 1;
                }
            }
            var order = [], m;
            for (var i = 0; i < len; ) {
                if (countsAsLeft.test(types[i])) {
                    var start = i;
                    for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
                    order.push({
                        from: start,
                        to: i,
                        level: 0
                    });
                } else {
                    var pos = i, at = order.length;
                    for (++i; i < len && types[i] != "L"; ++i) {}
                    for (var j = pos; j < i; ) {
                        if (countsAsNum.test(types[j])) {
                            if (pos < j) order.splice(at, 0, {
                                from: pos,
                                to: j,
                                level: 1
                            });
                            var nstart = j;
                            for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
                            order.splice(at, 0, {
                                from: nstart,
                                to: j,
                                level: 2
                            });
                            pos = j;
                        } else ++j;
                    }
                    if (pos < i) order.splice(at, 0, {
                        from: pos,
                        to: i,
                        level: 1
                    });
                }
            }
            if (order[0].level == 1 && (m = str.match(/^\s+/))) {
                order[0].from = m[0].length;
                order.unshift({
                    from: 0,
                    to: m[0].length,
                    level: 0
                });
            }
            if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
                lst(order).to -= m[0].length;
                order.push({
                    from: len - m[0].length,
                    to: len,
                    level: 0
                });
            }
            if (order[0].level != lst(order).level) order.push({
                from: len,
                to: len,
                level: order[0].level
            });
            return order;
        };
    }();
    CodeMirror.version = "3.14.0";
    return CodeMirror;
}();

CodeMirror.defineMode("xml", function(config, parserConfig) {
    var indentUnit = config.indentUnit;
    var multilineTagIndentFactor = parserConfig.multilineTagIndentFactor || 1;
    var Kludges = parserConfig.htmlMode ? {
        autoSelfClosers: {
            area: true,
            base: true,
            br: true,
            col: true,
            command: true,
            embed: true,
            frame: true,
            hr: true,
            img: true,
            input: true,
            keygen: true,
            link: true,
            meta: true,
            param: true,
            source: true,
            track: true,
            wbr: true
        },
        implicitlyClosed: {
            dd: true,
            li: true,
            optgroup: true,
            option: true,
            p: true,
            rp: true,
            rt: true,
            tbody: true,
            td: true,
            tfoot: true,
            th: true,
            tr: true
        },
        contextGrabbers: {
            dd: {
                dd: true,
                dt: true
            },
            dt: {
                dd: true,
                dt: true
            },
            li: {
                li: true
            },
            option: {
                option: true,
                optgroup: true
            },
            optgroup: {
                optgroup: true
            },
            p: {
                address: true,
                article: true,
                aside: true,
                blockquote: true,
                dir: true,
                div: true,
                dl: true,
                fieldset: true,
                footer: true,
                form: true,
                h1: true,
                h2: true,
                h3: true,
                h4: true,
                h5: true,
                h6: true,
                header: true,
                hgroup: true,
                hr: true,
                menu: true,
                nav: true,
                ol: true,
                p: true,
                pre: true,
                section: true,
                table: true,
                ul: true
            },
            rp: {
                rp: true,
                rt: true
            },
            rt: {
                rp: true,
                rt: true
            },
            tbody: {
                tbody: true,
                tfoot: true
            },
            td: {
                td: true,
                th: true
            },
            tfoot: {
                tbody: true
            },
            th: {
                td: true,
                th: true
            },
            thead: {
                tbody: true,
                tfoot: true
            },
            tr: {
                tr: true
            }
        },
        doNotIndent: {
            pre: true
        },
        allowUnquoted: true,
        allowMissing: true
    } : {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: false,
        allowMissing: false
    };
    var alignCDATA = parserConfig.alignCDATA;
    var tagName, type;
    function inText(stream, state) {
        function chain(parser) {
            state.tokenize = parser;
            return parser(stream, state);
        }
        var ch = stream.next();
        if (ch == "<") {
            if (stream.eat("!")) {
                if (stream.eat("[")) {
                    if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>")); else return null;
                } else if (stream.match("--")) {
                    return chain(inBlock("comment", "-->"));
                } else if (stream.match("DOCTYPE", true, true)) {
                    stream.eatWhile(/[\w\._\-]/);
                    return chain(doctype(1));
                } else {
                    return null;
                }
            } else if (stream.eat("?")) {
                stream.eatWhile(/[\w\._\-]/);
                state.tokenize = inBlock("meta", "?>");
                return "meta";
            } else {
                var isClose = stream.eat("/");
                tagName = "";
                var c;
                while (c = stream.eat(/[^\s\u00a0=<>\"\'\/?]/)) tagName += c;
                if (!tagName) return "error";
                type = isClose ? "closeTag" : "openTag";
                state.tokenize = inTag;
                return "tag";
            }
        } else if (ch == "&") {
            var ok;
            if (stream.eat("#")) {
                if (stream.eat("x")) {
                    ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
                } else {
                    ok = stream.eatWhile(/[\d]/) && stream.eat(";");
                }
            } else {
                ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
            }
            return ok ? "atom" : "error";
        } else {
            stream.eatWhile(/[^&<]/);
            return null;
        }
    }
    function inTag(stream, state) {
        var ch = stream.next();
        if (ch == ">" || ch == "/" && stream.eat(">")) {
            state.tokenize = inText;
            type = ch == ">" ? "endTag" : "selfcloseTag";
            return "tag";
        } else if (ch == "=") {
            type = "equals";
            return null;
        } else if (ch == "<") {
            return "error";
        } else if (/[\'\"]/.test(ch)) {
            state.tokenize = inAttribute(ch);
            return state.tokenize(stream, state);
        } else {
            stream.eatWhile(/[^\s\u00a0=<>\"\']/);
            return "word";
        }
    }
    function inAttribute(quote) {
        return function(stream, state) {
            while (!stream.eol()) {
                if (stream.next() == quote) {
                    state.tokenize = inTag;
                    break;
                }
            }
            return "string";
        };
    }
    function inBlock(style, terminator) {
        return function(stream, state) {
            while (!stream.eol()) {
                if (stream.match(terminator)) {
                    state.tokenize = inText;
                    break;
                }
                stream.next();
            }
            return style;
        };
    }
    function doctype(depth) {
        return function(stream, state) {
            var ch;
            while ((ch = stream.next()) != null) {
                if (ch == "<") {
                    state.tokenize = doctype(depth + 1);
                    return state.tokenize(stream, state);
                } else if (ch == ">") {
                    if (depth == 1) {
                        state.tokenize = inText;
                        break;
                    } else {
                        state.tokenize = doctype(depth - 1);
                        return state.tokenize(stream, state);
                    }
                }
            }
            return "meta";
        };
    }
    var curState, curStream, setStyle;
    function pass() {
        for (var i = arguments.length - 1; i >= 0; i--) curState.cc.push(arguments[i]);
    }
    function cont() {
        pass.apply(null, arguments);
        return true;
    }
    function pushContext(tagName, startOfLine) {
        var noIndent = Kludges.doNotIndent.hasOwnProperty(tagName) || curState.context && curState.context.noIndent;
        curState.context = {
            prev: curState.context,
            tagName: tagName,
            indent: curState.indented,
            startOfLine: startOfLine,
            noIndent: noIndent
        };
    }
    function popContext() {
        if (curState.context) curState.context = curState.context.prev;
    }
    function element(type) {
        if (type == "openTag") {
            curState.tagName = tagName;
            curState.tagStart = curStream.column();
            return cont(attributes, endtag(curState.startOfLine));
        } else if (type == "closeTag") {
            var err = false;
            if (curState.context) {
                if (curState.context.tagName != tagName) {
                    if (Kludges.implicitlyClosed.hasOwnProperty(curState.context.tagName.toLowerCase())) {
                        popContext();
                    }
                    err = !curState.context || curState.context.tagName != tagName;
                }
            } else {
                err = true;
            }
            if (err) setStyle = "error";
            return cont(endclosetag(err));
        }
        return cont();
    }
    function endtag(startOfLine) {
        return function(type) {
            var tagName = curState.tagName;
            curState.tagName = curState.tagStart = null;
            if (type == "selfcloseTag" || type == "endTag" && Kludges.autoSelfClosers.hasOwnProperty(tagName.toLowerCase())) {
                maybePopContext(tagName.toLowerCase());
                return cont();
            }
            if (type == "endTag") {
                maybePopContext(tagName.toLowerCase());
                pushContext(tagName, startOfLine);
                return cont();
            }
            return cont();
        };
    }
    function endclosetag(err) {
        return function(type) {
            if (err) setStyle = "error";
            if (type == "endTag") {
                popContext();
                return cont();
            }
            setStyle = "error";
            return cont(arguments.callee);
        };
    }
    function maybePopContext(nextTagName) {
        var parentTagName;
        while (true) {
            if (!curState.context) {
                return;
            }
            parentTagName = curState.context.tagName.toLowerCase();
            if (!Kludges.contextGrabbers.hasOwnProperty(parentTagName) || !Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
                return;
            }
            popContext();
        }
    }
    function attributes(type) {
        if (type == "word") {
            setStyle = "attribute";
            return cont(attribute, attributes);
        }
        if (type == "endTag" || type == "selfcloseTag") return pass();
        setStyle = "error";
        return cont(attributes);
    }
    function attribute(type) {
        if (type == "equals") return cont(attvalue, attributes);
        if (!Kludges.allowMissing) setStyle = "error"; else if (type == "word") setStyle = "attribute";
        return type == "endTag" || type == "selfcloseTag" ? pass() : cont();
    }
    function attvalue(type) {
        if (type == "string") return cont(attvaluemaybe);
        if (type == "word" && Kludges.allowUnquoted) {
            setStyle = "string";
            return cont();
        }
        setStyle = "error";
        return type == "endTag" || type == "selfCloseTag" ? pass() : cont();
    }
    function attvaluemaybe(type) {
        if (type == "string") return cont(attvaluemaybe); else return pass();
    }
    return {
        startState: function() {
            return {
                tokenize: inText,
                cc: [],
                indented: 0,
                startOfLine: true,
                tagName: null,
                tagStart: null,
                context: null
            };
        },
        token: function(stream, state) {
            if (!state.tagName && stream.sol()) {
                state.startOfLine = true;
                state.indented = stream.indentation();
            }
            if (stream.eatSpace()) return null;
            setStyle = type = tagName = null;
            var style = state.tokenize(stream, state);
            state.type = type;
            if ((style || type) && style != "comment") {
                curState = state;
                curStream = stream;
                while (true) {
                    var comb = state.cc.pop() || element;
                    if (comb(type || style)) break;
                }
            }
            state.startOfLine = false;
            return setStyle || style;
        },
        indent: function(state, textAfter, fullLine) {
            var context = state.context;
            if (state.tokenize != inTag && state.tokenize != inText || context && context.noIndent) return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
            if (state.tagName) return state.tagStart + indentUnit * multilineTagIndentFactor;
            if (alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
            if (context && /^<\//.test(textAfter)) context = context.prev;
            while (context && !context.startOfLine) context = context.prev;
            if (context) return context.indent + indentUnit; else return 0;
        },
        electricChars: "/",
        blockCommentStart: "<!--",
        blockCommentEnd: "-->",
        configuration: parserConfig.htmlMode ? "html" : "xml"
    };
});

CodeMirror.defineMIME("text/xml", "xml");

CodeMirror.defineMIME("application/xml", "xml");

if (!CodeMirror.mimeModes.hasOwnProperty("text/html")) CodeMirror.defineMIME("text/html", {
    name: "xml",
    htmlMode: true
});

CodeMirror.defineMode("javascript", function(config, parserConfig) {
    var indentUnit = config.indentUnit;
    var statementIndent = parserConfig.statementIndent;
    var jsonMode = parserConfig.json;
    var isTS = parserConfig.typescript;
    var keywords = function() {
        function kw(type) {
            return {
                type: type,
                style: "keyword"
            };
        }
        var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
        var operator = kw("operator"), atom = {
            type: "atom",
            style: "atom"
        };
        var jsKeywords = {
            "if": kw("if"),
            "while": A,
            "with": A,
            "else": B,
            "do": B,
            "try": B,
            "finally": B,
            "return": C,
            "break": C,
            "continue": C,
            "new": C,
            "delete": C,
            "throw": C,
            "var": kw("var"),
            "const": kw("var"),
            let: kw("var"),
            "function": kw("function"),
            "catch": kw("catch"),
            "for": kw("for"),
            "switch": kw("switch"),
            "case": kw("case"),
            "default": kw("default"),
            "in": operator,
            "typeof": operator,
            "instanceof": operator,
            "true": atom,
            "false": atom,
            "null": atom,
            undefined: atom,
            NaN: atom,
            Infinity: atom,
            "this": kw("this")
        };
        if (isTS) {
            var type = {
                type: "variable",
                style: "variable-3"
            };
            var tsKeywords = {
                "interface": kw("interface"),
                "class": kw("class"),
                "extends": kw("extends"),
                constructor: kw("constructor"),
                "public": kw("public"),
                "private": kw("private"),
                "protected": kw("protected"),
                "static": kw("static"),
                "super": kw("super"),
                string: type,
                number: type,
                bool: type,
                any: type
            };
            for (var attr in tsKeywords) {
                jsKeywords[attr] = tsKeywords[attr];
            }
        }
        return jsKeywords;
    }();
    var isOperatorChar = /[+\-*&%=<>!?|~^]/;
    function chain(stream, state, f) {
        state.tokenize = f;
        return f(stream, state);
    }
    function nextUntilUnescaped(stream, end) {
        var escaped = false, next;
        while ((next = stream.next()) != null) {
            if (next == end && !escaped) return false;
            escaped = !escaped && next == "\\";
        }
        return escaped;
    }
    var type, content;
    function ret(tp, style, cont) {
        type = tp;
        content = cont;
        return style;
    }
    function jsTokenBase(stream, state) {
        var ch = stream.next();
        if (ch == '"' || ch == "'") return chain(stream, state, jsTokenString(ch)); else if (/[\[\]{}\(\),;\:\.]/.test(ch)) return ret(ch); else if (ch == "0" && stream.eat(/x/i)) {
            stream.eatWhile(/[\da-f]/i);
            return ret("number", "number");
        } else if (/\d/.test(ch) || ch == "-" && stream.eat(/\d/)) {
            stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
            return ret("number", "number");
        } else if (ch == "/") {
            if (stream.eat("*")) {
                return chain(stream, state, jsTokenComment);
            } else if (stream.eat("/")) {
                stream.skipToEnd();
                return ret("comment", "comment");
            } else if (state.lastType == "operator" || state.lastType == "keyword c" || /^[\[{}\(,;:]$/.test(state.lastType)) {
                nextUntilUnescaped(stream, "/");
                stream.eatWhile(/[gimy]/);
                return ret("regexp", "string-2");
            } else {
                stream.eatWhile(isOperatorChar);
                return ret("operator", null, stream.current());
            }
        } else if (ch == "#") {
            stream.skipToEnd();
            return ret("error", "error");
        } else if (isOperatorChar.test(ch)) {
            stream.eatWhile(isOperatorChar);
            return ret("operator", null, stream.current());
        } else {
            stream.eatWhile(/[\w\$_]/);
            var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
            return known && state.lastType != "." ? ret(known.type, known.style, word) : ret("variable", "variable", word);
        }
    }
    function jsTokenString(quote) {
        return function(stream, state) {
            if (!nextUntilUnescaped(stream, quote)) state.tokenize = jsTokenBase;
            return ret("string", "string");
        };
    }
    function jsTokenComment(stream, state) {
        var maybeEnd = false, ch;
        while (ch = stream.next()) {
            if (ch == "/" && maybeEnd) {
                state.tokenize = jsTokenBase;
                break;
            }
            maybeEnd = ch == "*";
        }
        return ret("comment", "comment");
    }
    var atomicTypes = {
        atom: true,
        number: true,
        variable: true,
        string: true,
        regexp: true,
        "this": true
    };
    function JSLexical(indented, column, type, align, prev, info) {
        this.indented = indented;
        this.column = column;
        this.type = type;
        this.prev = prev;
        this.info = info;
        if (align != null) this.align = align;
    }
    function inScope(state, varname) {
        for (var v = state.localVars; v; v = v.next) if (v.name == varname) return true;
    }
    function parseJS(state, style, type, content, stream) {
        var cc = state.cc;
        cx.state = state;
        cx.stream = stream;
        cx.marked = null, cx.cc = cc;
        if (!state.lexical.hasOwnProperty("align")) state.lexical.align = true;
        while (true) {
            var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
            if (combinator(type, content)) {
                while (cc.length && cc[cc.length - 1].lex) cc.pop()();
                if (cx.marked) return cx.marked;
                if (type == "variable" && inScope(state, content)) return "variable-2";
                return style;
            }
        }
    }
    var cx = {
        state: null,
        column: null,
        marked: null,
        cc: null
    };
    function pass() {
        for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
    }
    function cont() {
        pass.apply(null, arguments);
        return true;
    }
    function register(varname) {
        function inList(list) {
            for (var v = list; v; v = v.next) if (v.name == varname) return true;
            return false;
        }
        var state = cx.state;
        if (state.context) {
            cx.marked = "def";
            if (inList(state.localVars)) return;
            state.localVars = {
                name: varname,
                next: state.localVars
            };
        } else {
            if (inList(state.globalVars)) return;
            state.globalVars = {
                name: varname,
                next: state.globalVars
            };
        }
    }
    var defaultVars = {
        name: "this",
        next: {
            name: "arguments"
        }
    };
    function pushcontext() {
        cx.state.context = {
            prev: cx.state.context,
            vars: cx.state.localVars
        };
        cx.state.localVars = defaultVars;
    }
    function popcontext() {
        cx.state.localVars = cx.state.context.vars;
        cx.state.context = cx.state.context.prev;
    }
    function pushlex(type, info) {
        var result = function() {
            var state = cx.state, indent = state.indented;
            if (state.lexical.type == "stat") indent = state.lexical.indented;
            state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
        };
        result.lex = true;
        return result;
    }
    function poplex() {
        var state = cx.state;
        if (state.lexical.prev) {
            if (state.lexical.type == ")") state.indented = state.lexical.indented;
            state.lexical = state.lexical.prev;
        }
    }
    poplex.lex = true;
    function expect(wanted) {
        return function(type) {
            if (type == wanted) return cont(); else if (wanted == ";") return pass(); else return cont(arguments.callee);
        };
    }
    function statement(type) {
        if (type == "var") return cont(pushlex("vardef"), vardef1, expect(";"), poplex);
        if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
        if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
        if (type == "{") return cont(pushlex("}"), block, poplex);
        if (type == ";") return cont();
        if (type == "if") return cont(pushlex("form"), expression, statement, poplex, maybeelse(cx.state.indented));
        if (type == "function") return cont(functiondef);
        if (type == "for") return cont(pushlex("form"), expect("("), pushlex(")"), forspec1, expect(")"), poplex, statement, poplex);
        if (type == "variable") return cont(pushlex("stat"), maybelabel);
        if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"), block, poplex, poplex);
        if (type == "case") return cont(expression, expect(":"));
        if (type == "default") return cont(expect(":"));
        if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"), statement, poplex, popcontext);
        return pass(pushlex("stat"), expression, expect(";"), poplex);
    }
    function expression(type) {
        return expressionInner(type, false);
    }
    function expressionNoComma(type) {
        return expressionInner(type, true);
    }
    function expressionInner(type, noComma) {
        var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
        if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
        if (type == "function") return cont(functiondef);
        if (type == "keyword c") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
        if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
        if (type == "operator") return cont(noComma ? expressionNoComma : expression);
        if (type == "[") return cont(pushlex("]"), commasep(expressionNoComma, "]"), poplex, maybeop);
        if (type == "{") return cont(pushlex("}"), commasep(objprop, "}"), poplex, maybeop);
        return cont();
    }
    function maybeexpression(type) {
        if (type.match(/[;\}\)\],]/)) return pass();
        return pass(expression);
    }
    function maybeexpressionNoComma(type) {
        if (type.match(/[;\}\)\],]/)) return pass();
        return pass(expressionNoComma);
    }
    function maybeoperatorComma(type, value) {
        if (type == ",") return cont(expression);
        return maybeoperatorNoComma(type, value, maybeoperatorComma);
    }
    function maybeoperatorNoComma(type, value, me) {
        if (!me) me = maybeoperatorNoComma;
        if (type == "operator") {
            if (/\+\+|--/.test(value)) return cont(me);
            if (value == "?") return cont(expression, expect(":"), expression);
            return cont(expression);
        }
        if (type == ";") return;
        if (type == "(") return cont(pushlex(")", "call"), commasep(expressionNoComma, ")"), poplex, me);
        if (type == ".") return cont(property, me);
        if (type == "[") return cont(pushlex("]"), expression, expect("]"), poplex, me);
    }
    function maybelabel(type) {
        if (type == ":") return cont(poplex, statement);
        return pass(maybeoperatorComma, expect(";"), poplex);
    }
    function property(type) {
        if (type == "variable") {
            cx.marked = "property";
            return cont();
        }
    }
    function objprop(type, value) {
        if (type == "variable") {
            cx.marked = "property";
            if (value == "get" || value == "set") return cont(getterSetter);
        } else if (type == "number" || type == "string") {
            cx.marked = type + " property";
        }
        if (atomicTypes.hasOwnProperty(type)) return cont(expect(":"), expressionNoComma);
    }
    function getterSetter(type) {
        if (type == ":") return cont(expression);
        if (type != "variable") return cont(expect(":"), expression);
        cx.marked = "property";
        return cont(functiondef);
    }
    function commasep(what, end) {
        function proceed(type) {
            if (type == ",") {
                var lex = cx.state.lexical;
                if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
                return cont(what, proceed);
            }
            if (type == end) return cont();
            return cont(expect(end));
        }
        return function(type) {
            if (type == end) return cont(); else return pass(what, proceed);
        };
    }
    function block(type) {
        if (type == "}") return cont();
        return pass(statement, block);
    }
    function maybetype(type) {
        if (type == ":") return cont(typedef);
        return pass();
    }
    function typedef(type) {
        if (type == "variable") {
            cx.marked = "variable-3";
            return cont();
        }
        return pass();
    }
    function vardef1(type, value) {
        if (type == "variable") {
            register(value);
            return isTS ? cont(maybetype, vardef2) : cont(vardef2);
        }
        return pass();
    }
    function vardef2(type, value) {
        if (value == "=") return cont(expressionNoComma, vardef2);
        if (type == ",") return cont(vardef1);
    }
    function maybeelse(indent) {
        return function(type, value) {
            if (type == "keyword b" && value == "else") {
                cx.state.lexical = new JSLexical(indent, 0, "form", null, cx.state.lexical);
                return cont(statement, poplex);
            }
            return pass();
        };
    }
    function forspec1(type) {
        if (type == "var") return cont(vardef1, expect(";"), forspec2);
        if (type == ";") return cont(forspec2);
        if (type == "variable") return cont(formaybein);
        return pass(expression, expect(";"), forspec2);
    }
    function formaybein(_type, value) {
        if (value == "in") return cont(expression);
        return cont(maybeoperatorComma, forspec2);
    }
    function forspec2(type, value) {
        if (type == ";") return cont(forspec3);
        if (value == "in") return cont(expression);
        return pass(expression, expect(";"), forspec3);
    }
    function forspec3(type) {
        if (type != ")") cont(expression);
    }
    function functiondef(type, value) {
        if (type == "variable") {
            register(value);
            return cont(functiondef);
        }
        if (type == "(") return cont(pushlex(")"), pushcontext, commasep(funarg, ")"), poplex, statement, popcontext);
    }
    function funarg(type, value) {
        if (type == "variable") {
            register(value);
            return isTS ? cont(maybetype) : cont();
        }
    }
    return {
        startState: function(basecolumn) {
            return {
                tokenize: jsTokenBase,
                lastType: null,
                cc: [],
                lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
                localVars: parserConfig.localVars,
                globalVars: parserConfig.globalVars,
                context: parserConfig.localVars && {
                    vars: parserConfig.localVars
                },
                indented: 0
            };
        },
        token: function(stream, state) {
            if (stream.sol()) {
                if (!state.lexical.hasOwnProperty("align")) state.lexical.align = false;
                state.indented = stream.indentation();
            }
            if (state.tokenize != jsTokenComment && stream.eatSpace()) return null;
            var style = state.tokenize(stream, state);
            if (type == "comment") return style;
            state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
            return parseJS(state, style, type, content, stream);
        },
        indent: function(state, textAfter) {
            if (state.tokenize == jsTokenComment) return CodeMirror.Pass;
            if (state.tokenize != jsTokenBase) return 0;
            var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
            if (lexical.type == "stat" && firstChar == "}") lexical = lexical.prev;
            if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat") lexical = lexical.prev;
            var type = lexical.type, closing = firstChar == type;
            if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? 4 : 0); else if (type == "form" && firstChar == "{") return lexical.indented; else if (type == "form") return lexical.indented + indentUnit; else if (type == "stat") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? statementIndent || indentUnit : 0); else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false) return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit); else if (lexical.align) return lexical.column + (closing ? 0 : 1); else return lexical.indented + (closing ? 0 : indentUnit);
        },
        electricChars: ":{}",
        blockCommentStart: jsonMode ? null : "/*",
        blockCommentEnd: jsonMode ? null : "*/",
        lineComment: jsonMode ? null : "//",
        jsonMode: jsonMode
    };
});

CodeMirror.defineMIME("text/javascript", "javascript");

CodeMirror.defineMIME("text/ecmascript", "javascript");

CodeMirror.defineMIME("application/javascript", "javascript");

CodeMirror.defineMIME("application/ecmascript", "javascript");

CodeMirror.defineMIME("application/json", {
    name: "javascript",
    json: true
});

CodeMirror.defineMIME("application/x-json", {
    name: "javascript",
    json: true
});

CodeMirror.defineMIME("text/typescript", {
    name: "javascript",
    typescript: true
});

CodeMirror.defineMIME("application/typescript", {
    name: "javascript",
    typescript: true
});

(function() {
    "use strict";
    function doFold(cm, pos, options) {
        var finder = options.call ? options : options && options.rangeFinder;
        if (!finder) return;
        if (typeof pos == "number") pos = CodeMirror.Pos(pos, 0);
        var minSize = options && options.minFoldSize || 0;
        function getRange(allowFolded) {
            var range = finder(cm, pos);
            if (!range || range.to.line - range.from.line < minSize) return null;
            var marks = cm.findMarksAt(range.from);
            for (var i = 0; i < marks.length; ++i) {
                if (marks[i].__isFold) {
                    if (!allowFolded) return null;
                    range.cleared = true;
                    marks[i].clear();
                }
            }
            return range;
        }
        var range = getRange(true);
        if (options && options.scanUp) while (!range && pos.line > cm.firstLine()) {
            pos = CodeMirror.Pos(pos.line - 1, 0);
            range = getRange(false);
        }
        if (!range || range.cleared) return;
        var myWidget = makeWidget(options);
        CodeMirror.on(myWidget, "mousedown", function() {
            myRange.clear();
        });
        var myRange = cm.markText(range.from, range.to, {
            replacedWith: myWidget,
            clearOnEnter: true,
            __isFold: true
        });
    }
    function makeWidget(options) {
        var widget = options && options.widget || "↔";
        if (typeof widget == "string") {
            var text = document.createTextNode(widget);
            widget = document.createElement("span");
            widget.appendChild(text);
            widget.className = "CodeMirror-foldmarker";
        }
        return widget;
    }
    CodeMirror.newFoldFunction = function(rangeFinder, widget) {
        return function(cm, pos) {
            doFold(cm, pos, {
                rangeFinder: rangeFinder,
                widget: widget
            });
        };
    };
    CodeMirror.defineExtension("foldCode", function(pos, options) {
        doFold(this, pos, options);
    });
    CodeMirror.combineRangeFinders = function() {
        var funcs = Array.prototype.slice.call(arguments, 0);
        return function(cm, start) {
            for (var i = 0; i < funcs.length; ++i) {
                var found = funcs[i](cm, start);
                if (found) return found;
            }
        };
    };
})();

CodeMirror.braceRangeFinder = function(cm, start) {
    var line = start.line, lineText = cm.getLine(line);
    var startCh, tokenType;
    function findOpening(openCh) {
        for (var at = start.ch, pass = 0; ;) {
            var found = lineText.lastIndexOf(openCh, at - 1);
            if (found == -1) {
                if (pass == 1) break;
                pass = 1;
                at = lineText.length;
                continue;
            }
            if (pass == 1 && found < start.ch) break;
            tokenType = cm.getTokenAt(CodeMirror.Pos(line, found + 1)).type;
            if (!/^(comment|string)/.test(tokenType)) return found + 1;
            at = found - 1;
        }
    }
    var startToken = "{", endToken = "}", startCh = findOpening("{");
    if (startCh == null) {
        startToken = "[", endToken = "]";
        startCh = findOpening("[");
    }
    if (startCh == null) return;
    var count = 1, lastLine = cm.lastLine(), end, endCh;
    outer: for (var i = line; i <= lastLine; ++i) {
        var text = cm.getLine(i), pos = i == line ? startCh : 0;
        for (;;) {
            var nextOpen = text.indexOf(startToken, pos), nextClose = text.indexOf(endToken, pos);
            if (nextOpen < 0) nextOpen = text.length;
            if (nextClose < 0) nextClose = text.length;
            pos = Math.min(nextOpen, nextClose);
            if (pos == text.length) break;
            if (cm.getTokenAt(CodeMirror.Pos(i, pos + 1)).type == tokenType) {
                if (pos == nextOpen) ++count; else if (!--count) {
                    end = i;
                    endCh = pos;
                    break outer;
                }
            }
            ++pos;
        }
    }
    if (end == null || line == end && endCh == startCh) return;
    return {
        from: CodeMirror.Pos(line, startCh),
        to: CodeMirror.Pos(end, endCh)
    };
};

CodeMirror.importRangeFinder = function(cm, start) {
    function hasImport(line) {
        if (line < cm.firstLine() || line > cm.lastLine()) return null;
        var start = cm.getTokenAt(CodeMirror.Pos(line, 1));
        if (!/\S/.test(start.string)) start = cm.getTokenAt(CodeMirror.Pos(line, start.end + 1));
        if (start.type != "keyword" || start.string != "import") return null;
        for (var i = line, e = Math.min(cm.lastLine(), line + 10); i <= e; ++i) {
            var text = cm.getLine(i), semi = text.indexOf(";");
            if (semi != -1) return {
                startCh: start.end,
                end: CodeMirror.Pos(i, semi)
            };
        }
    }
    var start = start.line, has = hasImport(start), prev;
    if (!has || hasImport(start - 1) || (prev = hasImport(start - 2)) && prev.end.line == start - 1) return null;
    for (var end = has.end; ;) {
        var next = hasImport(end.line + 1);
        if (next == null) break;
        end = next.end;
    }
    return {
        from: cm.clipPos(CodeMirror.Pos(start, has.startCh + 1)),
        to: end
    };
};

CodeMirror.includeRangeFinder = function(cm, start) {
    function hasInclude(line) {
        if (line < cm.firstLine() || line > cm.lastLine()) return null;
        var start = cm.getTokenAt(CodeMirror.Pos(line, 1));
        if (!/\S/.test(start.string)) start = cm.getTokenAt(CodeMirror.Pos(line, start.end + 1));
        if (start.type == "meta" && start.string.slice(0, 8) == "#include") return start.start + 8;
    }
    var start = start.line, has = hasInclude(start);
    if (has == null || hasInclude(start - 1) != null) return null;
    for (var end = start; ;) {
        var next = hasInclude(end + 1);
        if (next == null) break;
        ++end;
    }
    return {
        from: CodeMirror.Pos(start, has + 1),
        to: cm.clipPos(CodeMirror.Pos(end))
    };
};

CodeMirror.indentRangeFinder = function(cm, start) {
    var tabSize = cm.getOption("tabSize"), firstLine = cm.getLine(start.line);
    var myIndent = CodeMirror.countColumn(firstLine, null, tabSize);
    for (var i = start.line + 1, end = cm.lineCount(); i < end; ++i) {
        var curLine = cm.getLine(i);
        if (CodeMirror.countColumn(curLine, null, tabSize) < myIndent && CodeMirror.countColumn(cm.getLine(i - 1), null, tabSize) > myIndent) return {
            from: CodeMirror.Pos(start.line, firstLine.length),
            to: CodeMirror.Pos(i, curLine.length)
        };
    }
};

(function() {
    "use strict";
    var Pos = CodeMirror.Pos;
    var nameStartChar = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var xmlTagStart = new RegExp("<(/?)([" + nameStartChar + "][" + nameChar + "]*)", "g");
    function Iter(cm, line, ch) {
        this.line = line;
        this.ch = ch;
        this.cm = cm;
        this.text = cm.getLine(line);
    }
    function tagAt(iter, ch) {
        var type = iter.cm.getTokenTypeAt(Pos(iter.line, ch));
        return type && /\btag\b/.test(type);
    }
    function nextLine(iter) {
        if (iter.line >= iter.cm.lastLine()) return;
        iter.ch = 0;
        iter.text = iter.cm.getLine(++iter.line);
        return true;
    }
    function prevLine(iter) {
        if (iter.line <= iter.cm.firstLine()) return;
        iter.text = iter.cm.getLine(--iter.line);
        iter.ch = iter.text.length;
        return true;
    }
    function toTagEnd(iter) {
        for (;;) {
            var gt = iter.text.indexOf(">", iter.ch);
            if (gt == -1) {
                if (nextLine(iter)) continue; else return;
            }
            if (!tagAt(iter, gt + 1)) {
                iter.ch = gt + 1;
                continue;
            }
            var lastSlash = iter.text.lastIndexOf("/", gt);
            var selfClose = lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
            iter.ch = gt + 1;
            return selfClose ? "selfClose" : "regular";
        }
    }
    function toTagStart(iter) {
        for (;;) {
            var lt = iter.text.lastIndexOf("<", iter.ch - 1);
            if (lt == -1) {
                if (prevLine(iter)) continue; else return;
            }
            if (!tagAt(iter, lt + 1)) {
                iter.ch = lt;
                continue;
            }
            xmlTagStart.lastIndex = lt;
            iter.ch = lt;
            var match = xmlTagStart.exec(iter.text);
            if (match && match.index == lt) return match;
        }
    }
    function toNextTag(iter) {
        for (;;) {
            xmlTagStart.lastIndex = iter.ch;
            var found = xmlTagStart.exec(iter.text);
            if (!found) {
                if (nextLine(iter)) continue; else return;
            }
            if (!tagAt(iter, found.index + 1)) {
                iter.ch = found.index + 1;
                continue;
            }
            iter.ch = found.index + found[0].length;
            return found;
        }
    }
    function toPrevTag(iter) {
        for (;;) {
            var gt = iter.text.lastIndexOf(">", iter.ch - 1);
            if (gt == -1) {
                if (prevLine(iter)) continue; else return;
            }
            if (!tagAt(iter, gt + 1)) {
                iter.ch = gt;
                continue;
            }
            var lastSlash = iter.text.lastIndexOf("/", gt);
            var selfClose = lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
            iter.ch = gt + 1;
            return selfClose ? "selfClose" : "regular";
        }
    }
    function findMatchingClose(iter, tag) {
        var stack = [];
        for (;;) {
            var next = toNextTag(iter), end, startLine = iter.line, startCh = iter.ch - (next ? next[0].length : 0);
            if (!next || !(end = toTagEnd(iter))) return;
            if (end == "selfClose") continue;
            if (next[1]) {
                for (var i = stack.length - 1; i >= 0; --i) if (stack[i] == next[2]) {
                    stack.length = i;
                    break;
                }
                if (i < 0 && (!tag || tag == next[2])) return {
                    tag: next[2],
                    from: Pos(startLine, startCh),
                    to: Pos(iter.line, iter.ch)
                };
            } else {
                stack.push(next[2]);
            }
        }
    }
    function findMatchingOpen(iter, tag) {
        var stack = [];
        for (;;) {
            var prev = toPrevTag(iter);
            if (!prev) return;
            if (prev == "selfClose") {
                toTagStart(iter);
                continue;
            }
            var endLine = iter.line, endCh = iter.ch;
            var start = toTagStart(iter);
            if (!start) return;
            if (start[1]) {
                stack.push(start[2]);
            } else {
                for (var i = stack.length - 1; i >= 0; --i) if (stack[i] == start[2]) {
                    stack.length = i;
                    break;
                }
                if (i < 0 && (!tag || tag == start[2])) return {
                    tag: start[2],
                    from: Pos(iter.line, iter.ch),
                    to: Pos(endLine, endCh)
                };
            }
        }
    }
    CodeMirror.tagRangeFinder = function(cm, start) {
        var iter = new Iter(cm, start.line, 0);
        for (;;) {
            var openTag = toNextTag(iter), end;
            if (!openTag || iter.line != start.line || !(end = toTagEnd(iter))) return;
            if (!openTag[1] && end != "selfClose") {
                var start = Pos(iter.line, iter.ch);
                var close = findMatchingClose(iter, openTag[2]);
                return close && {
                    from: start,
                    to: close.from
                };
            }
        }
    };
    CodeMirror.findMatchingTag = function(cm, pos) {
        var iter = new Iter(cm, pos.line, pos.ch);
        var end = toTagEnd(iter), start = toTagStart(iter);
        if (!end || end == "selfClose" || !start) return;
        if (start[1]) {
            return findMatchingOpen(iter, start[2]);
        } else {
            toTagEnd(iter);
            return findMatchingClose(iter, start[2]);
        }
    };
    CodeMirror.findEnclosingTag = function(cm, pos) {
        var iter = new Iter(cm, pos.line, pos.ch);
        for (;;) {
            var open = findMatchingOpen(iter);
            if (!open) break;
            var forward = new Iter(cm, pos.line, pos.ch);
            var close = findMatchingClose(forward, open.tag);
            if (close) return {
                open: open,
                close: close
            };
        }
    };
})();

(function($) {
    $.fn.Dropdown = function(options) {
        var defaults = {};
        var $this = $(this);
        var clearDropdown = function() {
            $(".dropdown-menu").each(function() {
                if ($(this).css("position") == "static") return;
                $(this).slideUp("fast", function() {});
                $(this).parent().removeClass("active");
            });
        };
        var initSelectors = function(selectors) {
            selectors.off("click.dropdown");
            selectors.on("click.dropdown", function(e) {
                if ($(e.originalEvent.target).parent().is("[data-role]")) e.stopPropagation();
                clearDropdown();
                $(this).parents("ul").css("overflow", "visible");
                var $m = $(this).children(".dropdown-menu, .sidebar-dropdown-menu");
                $(this).parents("ul").children(".dropdown").children(".dropdown-menu, .sidebar-dropdown-menu").each(function() {
                    if (!$(this).hasClass("keep-opened") && !$m.hasClass("keep-opened")) {
                        $(this).slideUp("fast");
                        $(this).parents("li").removeClass("active");
                    }
                });
                if ($m.css("display") == "block") {
                    $m.slideUp("fast");
                    $(this).removeClass("active");
                } else {
                    $m.slideDown("fast");
                    $(this).addClass("active");
                }
            }).on("mouseleave", function() {});
            $("html").on("click", function(e) {
                if (e.originalEvent && $(e.originalEvent.target).parents('[data-role="dropdown"]').length == 0) clearDropdown();
            });
        };
        return this.each(function() {
            if (options) {
                $.extend(defaults, options);
            }
            initSelectors($this);
        });
    };
    $(function() {
        $('[data-role="dropdown"]').each(function() {
            $(this).Dropdown();
        });
    });
})(window.jQuery);

(function($) {
    $.fn.PullDown = function(options) {
        var defaults = {};
        var $this = $(this);
        var initSelectors = function(selectors) {
            selectors.on("click", function(e) {
                e.preventDefault();
                var $m = $this.parent().children("ul");
                if ($m.css("display") == "block") {
                    $m.slideUp("fast");
                } else {
                    $m.slideDown("fast");
                }
            });
        };
        return this.each(function() {
            if (options) {
                $.extend(defaults, options);
            }
            initSelectors($this);
        });
    };
    $(function() {
        $(".pull-menu, .menu-pull").each(function() {
            $(this).PullDown();
        });
    });
})(window.jQuery);

(function($) {
    var pluginName = "Input", initAllSelector = ".input-control", paramKeys = [];
    $[pluginName] = function(element, options) {
        if (!element) {
            return $()[pluginName]({
                initAll: true
            });
        }
        var defaults = {};
        var plugin = this;
        plugin.settings = {};
        var $element = $(element);
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            if ($element.hasClass("text")) {
                initTextInput();
            } else if ($element.hasClass("password")) {
                initPasswordInput();
            }
        };
        var initTextInput = function() {
            var $helper, input;
            $helper = $element.children(".helper, .btn-clear");
            if (!$helper.get(0)) {
                return;
            }
            $helper.attr("tabindex", "-1");
            $helper.attr("type", "button");
            $helper.on("click", function() {
                input = $element.children("input");
                if (input.prop("readonly")) {
                    return;
                }
                input.val("");
                input.focus();
            });
        };
        var initPasswordInput = function() {
            var $helper, password, text;
            $helper = $element.children(".helper, .btn-reveal");
            if (!$helper.get(0)) {
                return;
            }
            text = $('<input type="text" />');
            password = $element.children("input");
            $helper.attr("tabindex", "-1");
            $helper.attr("type", "button");
            $helper.on("mousedown", function() {
                password.hide();
                text.insertAfter(password);
                text.val(password.val());
            });
            $helper.on("mouseup, mouseout", function() {
                text.detach();
                password.show();
                password.focus();
            });
        };
        plugin.init();
    };
    $.fn[pluginName] = function(options) {
        var elements = options && options.initAll ? $(initAllSelector) : this;
        return elements.each(function() {
            var that = $(this), params = {}, plugin;
            if (undefined == that.data(pluginName)) {
                $.each(paramKeys, function(index, key) {
                    params[key[0].toLowerCase() + key.slice(1)] = that.data("param" + key);
                });
                plugin = new $[pluginName](this, params);
                that.data(pluginName, plugin);
            }
        });
    };
    $(function() {
        $()["Input"]({
            initAll: true
        });
    });
})(jQuery);

(function(window, document, $, undefined) {
    $(document).ready(function() {
        jQuery.fn.selText = function() {
            var obj = this[0];
            var range, selection;
            if ($.browser.msie) {
                range = obj.offsetParent.createTextRange();
                range.moveToElementText(obj);
                range.select();
                console.log("msie");
            } else if ($.browser.mozilla || $.browser.opera) {
                selection = obj.ownerDocument.defaultView.getSelection();
                range = obj.ownerDocument.createRange();
                range.selectNodeContents(obj);
                selection.removeAllRanges();
                selection.addRange(range);
                console.log("mozilla/opera");
            } else if ($.browser.safari) {
                selection = obj.ownerDocument.defaultView.getSelection();
                selection.setBaseAndExtent(obj, 0, obj, 1);
                console.log("safari");
            }
            return this;
        };
        if (document.getElementById("code-xml")) {
            var foldFunc_xml = CodeMirror.newFoldFunction(CodeMirror.tagRangeFinder);
            var xml = CodeMirror.fromTextArea(document.getElementById("code-xml"), {
                mode: {
                    name: "xml",
                    alignCDATA: true
                },
                lineNumbers: true
            });
            xml.on("gutterClick", foldFunc_xml);
        }
        if (document.getElementById("code-json")) {
            var foldFunc_json = CodeMirror.newFoldFunction(CodeMirror.braceRangeFinder);
            var json = CodeMirror.fromTextArea(document.getElementById("code-json"), {
                mode: {
                    name: "javascript"
                },
                lineNumbers: true
            });
            json.on("gutterClick", foldFunc_json);
        }
        $("input.autoselect").focus(function() {
            $(this).select();
        }).mouseup(function(e) {
            e.preventDefault();
        });
        $(".url-shorten-message").on("click", ".close", function(e) {
            $(".url-shorten-message").fadeOut(200);
        });
        $(".btn-shorten").click(function(e) {
            var btn = $(this);
            var shorten_status = $(".url-shorten-message").find(".notices > div");
            if (btn.hasClass("disabled")) {
                event.preventDefault();
                return false;
            }
            $.ajax({
                url: base_url + "/page/shorten",
                type: "post",
                data: {
                    long_url: $("input.long-url").val()
                },
                dataType: "json"
            }).success(function(data, status) {
                if (data.status === "ok") {
                    shorten_status.find(".notice-header").html("Success!");
                    shorten_status.find(".notice-text").html(data.message);
                    shorten_status.removeClass("bg-color-redLight").addClass("bg-color-green");
                    $("input.long-url").val(data.short_url).focus().select();
                } else if (data.status === "error") {
                    shorten_status.find(".notice-header").html("Validation Error!");
                    shorten_status.find(".notice-text").html(data.message);
                    shorten_status.removeClass("bg-color-green").addClass("bg-color-redLight");
                } else {
                    shorten_status.find(".notice-header").html("Server Error!");
                    shorten_status.find(".notice-text").html("Received malformed data from server.");
                    shorten_status.removeClass("bg-color-green").addClass("bg-color-redLight");
                }
                btn.addClass("disabled");
                $(".url-shorten-message").fadeIn(200);
            }).error(function(data, status) {
                shorten_status.find(".notice-header").html("Connection Error!");
                shorten_status.find(".notice-text").html("Something went wrong while connecting to the server.");
                shorten_status.removeClass("bg-color-green").addClass("bg-color-redLight");
                btn.addClass("disabled");
                $(".url-shorten-message").fadeIn(200);
            });
            event.preventDefault();
            return false;
        });
        $(document).on("input.long-url", "input", function(e) {
            var btn = $(".btn-shorten");
            if (event.keyCode == 13) {
                if (btn.hasClass("disabled")) {
                    event.preventDefault();
                    return false;
                }
                btn.trigger("click");
            } else {
                btn.removeClass("disabled");
            }
        });
        $("input.long-url").click(function(e) {
            if ($(".btn-shorten").hasClass("disabled")) {
                $(this).focus().select();
            }
        });
        $(".shorten-status").on("i.short-url", "click", function(e) {
            $(this).selText();
        });
    });
})(window, document, jQuery);
//# sourceMappingURL=app.map