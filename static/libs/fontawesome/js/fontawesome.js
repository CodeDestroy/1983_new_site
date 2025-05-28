/*!
 * Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
(function () {
    'use strict';
    function ownKeys(object, enumerableOnly) {
        let keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            let symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for (let i = 1; i < arguments.length; i++) {
            let source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
    }
    function _wrapRegExp() {
        _wrapRegExp = function (re, groups) { return new BabelRegExp(re, void 0, groups); };
        let _super = RegExp.prototype, _groups = new WeakMap();
        function BabelRegExp(re, flags, groups) {
            let _this = new RegExp(re, flags);
            return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
        }
        function buildGroups(result, re) {
            let g = _groups.get(re);
            return Object.keys(g).reduce(function (groups, name) { return groups[name] = result[g[name]], groups; }, Object.create(null));
        }
        return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
            let result = _super.exec.call(this, str);
            return result && (result.groups = buildGroups(result, this)), result;
        }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
            if ("string" == typeof substitution) {
                let groups = _groups.get(this);
                return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; }));
            }
            if ("function" == typeof substitution) {
                let _this = this;
                return _super[Symbol.replace].call(this, str, function () {
                    let args = arguments;
                    return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
                });
            }
            return _super[Symbol.replace].call(this, str, substitution);
        }, _wrapRegExp.apply(this, arguments);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            let descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {writable: false});
        return Constructor;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
        else obj[key] = value;
        return obj;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
        Object.defineProperty(subClass, "prototype", {writable: false});
        if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function _iterableToArrayLimit(arr, i) {
        let _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null) return;
        let _arr = [], _n = true, _d = false, _s, _e;
        try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        let n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (let i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    let noop = function noop() {}, _WINDOW = {}, _DOCUMENT = {}, _MUTATION_OBSERVER = null;
    let _PERFORMANCE = {mark: noop, measure: noop};
    try {
        if (typeof window !== 'undefined') _WINDOW = window;
        if (typeof document !== 'undefined') _DOCUMENT = document;
        if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
        if (typeof performance !== 'undefined') _PERFORMANCE = performance;
    } catch (e) {}
    let _ref = _WINDOW.navigator || {}, _ref$userAgent = _ref.userAgent,
        userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
    let WINDOW = _WINDOW, DOCUMENT = _DOCUMENT, MUTATION_OBSERVER = _MUTATION_OBSERVER;
    let PERFORMANCE = _PERFORMANCE, IS_BROWSER = !!WINDOW.document;
    let IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
    let IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
    let _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;
    let NAMESPACE_IDENTIFIER = '___FONT_AWESOME___', UNITS_IN_GRID = 16;
    let DEFAULT_CSS_PREFIX = 'fa', DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
    let DATA_FA_I2SVG = 'data-fa-i2svg', DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
    let DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending', DATA_PREFIX = 'data-prefix';
    let DATA_ICON = 'data-icon', HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
    let MUTATION_APPROACH_ASYNC = 'async', TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
    let PRODUCTION = function () {
        try {
            return "production" === 'production';
        } catch (e) {
            return false;
        }
    }();
    let FAMILY_CLASSIC = 'classic', FAMILY_SHARP = 'sharp', FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
    function familyProxy(obj) {
        // Defaults to the classic family if family is not available
        return new Proxy(obj, {get: function get(target, prop) { return prop in target ? target[prop] : target[FAMILY_CLASSIC]; }});
    }
    let PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
        'fa': 'solid', 'fas': 'solid', 'fa-solid': 'solid', 'far': 'regular', 'fa-regular': 'regular', 'fal': 'light',
        'fa-light': 'light', 'fat': 'thin', 'fa-thin': 'thin', 'fad': 'duotone', 'fa-duotone': 'duotone',
        'fab': 'brands', 'fa-brands': 'brands', 'fak': 'kit', 'fa-kit': 'kit'
    }), _defineProperty(_familyProxy, FAMILY_SHARP, {
        'fa': 'solid', 'fass': 'solid', 'fa-solid': 'solid', 'fasr': 'regular',
        'fa-regular': 'regular', 'fasl': 'light', 'fa-light': 'light'
    }), _familyProxy));
    let STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
        'solid': 'fas', 'regular': 'far', 'light': 'fal', 'thin': 'fat',
        'duotone': 'fad', 'brands': 'fab', 'kit': 'fak'
    }), _defineProperty(_familyProxy2, FAMILY_SHARP, {'solid': 'fass', 'regular': 'fasr', 'light': 'fasl'}), _familyProxy2));
    let PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
        'fab': 'fa-brands', 'fad': 'fa-duotone', 'fak': 'fa-kit', 'fal': 'fa-light',
        'far': 'fa-regular', 'fas': 'fa-solid', 'fat': 'fa-thin'
    }), _defineProperty(_familyProxy3, FAMILY_SHARP, {'fass': 'fa-solid', 'fasr': 'fa-regular', 'fasl': 'fa-light'}), _familyProxy3));
    let LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
        'fa-brands': 'fab', 'fa-duotone': 'fad', 'fa-kit': 'fak', 'fa-light': 'fal',
        'fa-regular': 'far', 'fa-solid': 'fas', 'fa-thin': 'fat'
    }), _defineProperty(_familyProxy4, FAMILY_SHARP, {'fa-solid': 'fass', 'fa-regular': 'fasr', 'fa-light': 'fasl'}), _familyProxy4));
    let ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/; // eslint-disable-line no-useless-escape
    let LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
    let FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
    let FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
        '900': 'fas', '400': 'far', 'normal': 'far', '300': 'fal', '100': 'fat'
    }), _defineProperty(_familyProxy5, FAMILY_SHARP, {'900': 'fass', '400': 'fasr', '300': 'fasl'}), _familyProxy5));
    let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    let ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
    let DUOTONE_CLASSES = {GROUP: 'duotone-group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary'};
    let prefixes = new Set();
    Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
    Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
    let RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
        return "".concat(n, "x");
    })).concat(oneToTwenty.map(function (n) {
        return "w-".concat(n);
    }));
    let initial = WINDOW.FontAwesomeConfig || {};
    function getAttrConfig(attr) {
        let element = DOCUMENT.querySelector('script[' + attr + ']');
        if (element) return element.getAttribute(attr);
    }
    function coerce(val) {
        // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
        // We'll assume that this is an indication that it should be toggled to true
        if (val === '') return true;
        if (val === 'false') return false;
        if (val === 'true') return true;
        return val;
    }
    if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
        let attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
        attrs.forEach(function (_ref) {
            let _ref2 = _slicedToArray(_ref, 2);
            let val = coerce(getAttrConfig(_ref2[0]));
            if (val !== undefined && val !== null) initial[_ref2[1]] = val;
        });
    }
    let _default = {
        styleDefault: 'solid', familyDefault: 'classic', cssPrefix: DEFAULT_CSS_PREFIX,
        replacementClass: DEFAULT_REPLACEMENT_CLASS, autoReplaceSvg: true, autoAddCss: true, autoA11y: true,
        searchPseudoElements: false, observeMutations: true, mutateApproach: 'async', keepOriginalSource: true,
        measurePerformance: false, showMissingIcons: true
    }; // familyPrefix is deprecated but we must still support it if present
    if (initial.familyPrefix) initial.cssPrefix = initial.familyPrefix;
    let _config = _objectSpread2(_objectSpread2({}, _default), initial);
    if (!_config.autoReplaceSvg) _config.observeMutations = false;
    let config = {};
    Object.keys(_default).forEach(function (key) {
        Object.defineProperty(config, key, {
            enumerable: true,
            set: function set(val) {
                _config[key] = val;
                _onChangeCb.forEach(function (cb) { return cb(config); });
            },
            get: function get() { return _config[key]; }
        });
    }); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
    Object.defineProperty(config, 'familyPrefix', {
        enumerable: true,
        set: function set(val) {
            _config.cssPrefix = val;
            _onChangeCb.forEach(function (cb) { return cb(config); });
        },
        get: function get() { return _config.cssPrefix; }
    });
    WINDOW.FontAwesomeConfig = config;
    let _onChangeCb = [];
    function onChange(cb) {
        _onChangeCb.push(cb);
        return function () { _onChangeCb.splice(_onChangeCb.indexOf(cb), 1); };
    }
    let d = UNITS_IN_GRID;
    let meaninglessTransform = {size: 16, x: 0, y: 0, rotate: 0, flipX: false, flipY: false};
    function bunker(fn) {
        try {
            for (let _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }
            fn.apply(void 0, args);
        } catch (e) {
            if (!PRODUCTION) throw e;
        }
    }
    function insertCss(css) {
        if (!css || !IS_DOM) return;
        let style = DOCUMENT.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = css;
        let beforeChild = null;
        for (let i = DOCUMENT.head.childNodes.length - 1; i > -1; i--) {
            let child = DOCUMENT.head.childNodes[i], tagName = (child.tagName || '').toUpperCase();
            if (['STYLE', 'LINK'].indexOf(tagName) > -1) beforeChild = child;
        }
        DOCUMENT.head.insertBefore(style, beforeChild);
        return css;
    }
    let idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function nextUniqueId() {
        let size = 12, id = '';
        while (size-- > 0) {
            id += idPool[Math.random() * 62 | 0];
        }
        return id;
    }
    function toArray(obj) {
        let array = [];
        for (let i = (obj || []).length >>> 0; i--;) {
            array[i] = obj[i];
        }
        return array;
    }
    function classArray(node) {
        if (node.classList) return toArray(node.classList);
        return (node.getAttribute('class') || '').split(' ').filter(function (i) { return i; });
    }
    function htmlEscape(str) { return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    function joinAttributes(attributes) { return Object.keys(attributes || {}).reduce(function (acc, attributeName) {return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");}, '').trim(); }
    function joinStyles(styles) { return Object.keys(styles || {}).reduce(function (acc, styleName) { return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";"); }, ''); }
    function transformIsMeaningful(transform) { return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY; }
    function transformForSvg(_ref) {
        let outer = {transform: "translate(".concat(_ref.containerWidth / 2, " 256)")};
        let innerTranslate = "translate(".concat(_ref.transform.x * 32, ", ").concat(_ref.transform.y * 32, ") ");
        let innerScale = "scale(".concat(_ref.transform.size / 16 * (_ref.transform.flipX ? -1 : 1), ", ").concat(_ref.transform.size / 16 * (_ref.transform.flipY ? -1 : 1), ") ");
        let innerRotate = "rotate(".concat(_ref.transform.rotate, " 0 0)");
        let inner = {transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)};
        let path = {transform: "translate(".concat(_ref.iconWidth / 2 * -1, " -256)")};
        return {outer: outer, inner: inner, path: path};
    }
    function transformForCss(_ref2) {
        let width = _ref2.width === void 0 ? UNITS_IN_GRID : _ref2.width,
            height = _ref2.height === void 0 ? UNITS_IN_GRID : _ref2.height,
            startCentered = _ref2.startCentered === void 0 ? false : _ref2.startCentered;
        let val = '';
        if (startCentered && IS_IE) val += "translate(".concat(_ref2.transform.x / d - width / 2, "em, ").concat(_ref2.transform.y / d - height / 2, "em) ");
        else if (startCentered) val += "translate(calc(-50% + ".concat(_ref2.transform.x / d, "em), calc(-50% + ").concat(_ref2.transform.y / d, "em)) ");
        else val += "translate(".concat(_ref2.transform.x / d, "em, ").concat(_ref2.transform.y / d, "em) ");
        val += "scale(".concat(_ref2.transform.size / d * (_ref2.transform.flipX ? -1 : 1), ", ").concat(_ref2.transform.size / d * (_ref2.transform.flipY ? -1 : 1), ") ");
        val += "rotate(".concat(_ref2.transform.rotate, "deg) ");
        return val;
    }
    let baseStyles = ":host,:root{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Solid\";--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Regular\";--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Light\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Thin\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\";--fa-font-sharp-solid:normal 900 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-regular:normal 400 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-light:normal 300 1em/1 \"Font Awesome 6 Sharp\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}";
    function css() {
        let dcp = DEFAULT_CSS_PREFIX, drc = DEFAULT_REPLACEMENT_CLASS, fp = config.cssPrefix;
        let rc = config.replacementClass, s = baseStyles;
        if (fp !== dcp || rc !== drc) {
            let dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
            let customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
            let rPatt = new RegExp("\\.".concat(drc), 'g');
            s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
        }
        return s;
    }
    let _cssInserted = false;
    function ensureCss() {
        if (config.autoAddCss && !_cssInserted) {
            insertCss(css());
            _cssInserted = true;
        }
    }
    let InjectCSS = {
        mixout: function mixout() { return {dom: {css: css, insertCss: ensureCss}}; },
        hooks: function hooks() {
            return {
                beforeDOMElementCreation: function beforeDOMElementCreation() { ensureCss(); },
                beforeI2svg: function beforeI2svg() { ensureCss(); }
            };
        }
    };
    let w = WINDOW || {};
    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
    let namespace = w[NAMESPACE_IDENTIFIER], functions = [];
    let listener = function listener() {
        DOCUMENT.removeEventListener('DOMContentLoaded', listener);
        loaded = 1;
        functions.map(function (fn) { return fn(); });
    };
    let loaded = false;
    if (IS_DOM) {
        loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
        if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
    }
    function domready(fn) {
        if (!IS_DOM) return;
        loaded ? setTimeout(fn, 0) : functions.push(fn);
    }
    function toHtml(abstractNodes) {
        let tag = abstractNodes.tag,
            attributes = abstractNodes.attributes === void 0 ? {} : abstractNodes.attributes,
            children = abstractNodes.children === void 0 ? [] : abstractNodes.children;
        if (typeof abstractNodes === 'string') return htmlEscape(abstractNodes);
        return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
    function iconFromMapping(mapping, prefix, iconName) {
        if (mapping && mapping[prefix] && mapping[prefix][iconName]) return {prefix: prefix, iconName: iconName, icon: mapping[prefix][iconName]};
    }
    /**
     * Internal helper to bind a function known to have 4 arguments to a given context.
     */
    let bindInternal4 = function bindInternal4(func, thisContext) { return function (a, b, c, d) { return func.call(thisContext, a, b, c, d); }; };
    /**
     * # Reduce
     *
     * A fast object `.reduce()` implementation.
     *
     * @param  {Object}   subject      The object to reduce over.
     * @param  {Function} fn           The reducer function.
     * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
     * @param  {Object}   thisContext  The context for the reducer.
     * @return {mixed}                 The final result.
     */
    let reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
        let keys = Object.keys(subject),
            iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
            i, key, result;
        if (initialValue === undefined) {
            i = 1;
            result = subject[keys[0]];
        } else {
            i = 0;
            result = initialValue;
        }
        for (; i < keys.length; i++) {
            key = keys[i];
            result = iterator(result, subject[key], key, subject);
        }
        return result;
    };
    /**
     * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
     *
     * Copyright Mathias Bynens <https://mathiasbynens.be/>
     * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
     * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
     * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
     * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
     * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
     * the Software.
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
     * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
     * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
     * IN THE SOFTWARE.
     */
    function ucs2decode(string) {
        let output = [], counter = 0;
        while (counter < string.length) {
            let value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < string.length) {
                let extra = string.charCodeAt(counter++);
                // eslint-disable-line eqeqeq
                if ((extra & 0xFC00) === 0xDC00) output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                else {
                    output.push(value);
                    counter--;
                }
            } else output.push(value);
        }
        return output;
    }
    function toHex(unicode) {
        let decoded = ucs2decode(unicode);
        return decoded.length === 1 ? decoded[0].toString(16) : null;
    }
    function codePointAt(string, index) {
        let second;
        if (string.charCodeAt(index) >= 0xD800 && string.charCodeAt(index) <= 0xDBFF && string.length > index + 1) {
            second = string.charCodeAt(index + 1);
            if (second >= 0xDC00 && second <= 0xDFFF) return (string.charCodeAt(index) - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
        return string.charCodeAt(index);
    }
    function normalizeIcons(icons) {
        return Object.keys(icons).reduce(function (acc, iconName) {
            if (!!icons[iconName].icon) acc[icons[iconName].iconName] = icons[iconName].icon;
            else acc[iconName] = icons[iconName];
            return acc;
        }, {});
    }
    function defineIcons(prefix, icons) {
        let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        let skipHooks = params.skipHooks === void 0 ? false : params.skipHooks;
        let normalized = normalizeIcons(icons);
        if (typeof namespace.hooks.addPack === 'function' && !skipHooks) namespace.hooks.addPack(prefix, normalizeIcons(icons));
        else namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
        /**
         * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction of new styles we needed to
         * differentiate between them. Prefix `fa` is now an alias for `fas` so we'll ease the upgrade process for our
         * users by automatically defining this as well.
         */
        if (prefix === 'fas') defineIcons('fa', icons);
    }
    let duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
        d1: 1, d2: 2
    }), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
        cls1: 1, d1: 2, cls2: 3, d2: 4
    }), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
        cls1: 1, d1: 2
    })];
    let _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY, styles = namespace.styles, shims = namespace.shims;
    let LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
    let _defaultUsablePrefix = null, _byUnicode = {}, _byLigature = {}, _byOldName = {};
    let _byOldUnicode = {}, _byAlias = {};
    let PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
    function isReserved(name) { return ~RESERVED_CLASSES.indexOf(name); }
    function getIconName(cssPrefix, cls) {
        let parts = cls.split('-'), iconName = parts.slice(1).join('-');
        if (parts[0] === cssPrefix && iconName !== '' && !isReserved(iconName)) return iconName;
        return null;
    }
    let build = function build() {
        let lookup = function lookup(reducer) {
            return reduce(styles, function (o, style, prefix) {
                o[prefix] = reduce(style, reducer, {});
                return o;
            }, {});
        };
        _byUnicode = lookup(function (acc, icon, iconName) {
            if (icon[3]) acc[icon[3]] = iconName;
            if (icon[2]) {
                let aliases = icon[2].filter(function (a) { return typeof a === 'number'; });
                aliases.forEach(function (alias) {
                    acc[alias.toString(16)] = iconName;
                });
            }
            return acc;
        });
        _byLigature = lookup(function (acc, icon, iconName) {
            acc[iconName] = iconName;
            if (icon[2]) {
                let aliases = icon[2].filter(function (a) { return typeof a === 'string'; });
                aliases.forEach(function (alias) {
                    acc[alias] = iconName;
                });
            }
            return acc;
        });
        _byAlias = lookup(function (acc, icon, iconName) {
            let aliases = icon[2];
            acc[iconName] = iconName;
            aliases.forEach(function (alias) {
                acc[alias] = iconName;
            });
            return acc;
        });
        // If we have a Kit, we can't determine if regular is available since we could be auto-fetching it. We'll have to assume that it is available.
        let hasRegular = 'far' in styles || config.autoFetchSvg;
        let shimLookups = reduce(shims, function (acc, shim) {
            let prefix = shim[1];
            if (prefix === 'far' && !hasRegular) prefix = 'fas';
            if (typeof shim[0] === 'string') acc.names[shim[0]] = {prefix: prefix, iconName: shim[2]};
            if (typeof shim[0] === 'number') acc.unicodes[shim[0].toString(16)] = {prefix: prefix, iconName: shim[2]};
            return acc;
        }, {names: {}, unicodes: {}});
        _byOldName = shimLookups.names;
        _byOldUnicode = shimLookups.unicodes;
        _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {family: config.familyDefault});
    };
    onChange(function (c) {
        _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {family: config.familyDefault});
    });
    build();
    function byUnicode(prefix, unicode) { return (_byUnicode[prefix] || {})[unicode]; }
    function byLigature(prefix, ligature) { return (_byLigature[prefix] || {})[ligature]; }
    function byAlias(prefix, alias) { return (_byAlias[prefix] || {})[alias]; }
    function byOldName(name) { return _byOldName[name] || {prefix: null, iconName: null}; }
    function byOldUnicode(unicode) { return _byOldUnicode[unicode] || (byUnicode('fas', unicode) ? {prefix: 'fas', iconName: byUnicode('fas', unicode)} : null) || {prefix: null, iconName: null}; }
    function getDefaultUsablePrefix() { return _defaultUsablePrefix; }
    let emptyCanonicalIcon = function emptyCanonicalIcon() { return {prefix: null, iconName: null, rest: []}; };
    function getCanonicalPrefix(styleOrPrefix) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let family = params.family === void 0 ? FAMILY_CLASSIC : params.family;
        let style = PREFIX_TO_STYLE[family][styleOrPrefix];
        let prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
        let defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
        return prefix || defined || null;
    }
    let PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
    function getCanonicalIcon(values) {
        let _famProps;
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let skipLookups = params.skipLookups === void 0 ? false : params.skipLookups;
        let famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
        let givenPrefix = null, family = FAMILY_CLASSIC;
        if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) { return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v); })) family = FAMILY_CLASSIC;
        if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) { return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v); })) family = FAMILY_SHARP;
        let canonical = values.reduce(function (acc, cls) {
            let iconName = getIconName(config.cssPrefix, cls);
            if (styles[cls]) {
                cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
                givenPrefix = cls;
                acc.prefix = cls;
            } else if (PREFIXES[family].indexOf(cls) > -1) {
                givenPrefix = cls;
                acc.prefix = getCanonicalPrefix(cls, {family: family});
            } else if (iconName) acc.iconName = iconName;
            else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) acc.rest.push(cls);
            if (!skipLookups && acc.prefix && acc.iconName) {
                let shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {}, aliasIconName = byAlias(acc.prefix, acc.iconName);
                if (shim.prefix) givenPrefix = null;
                acc.iconName = shim.iconName || aliasIconName || acc.iconName;
                acc.prefix = shim.prefix || acc.prefix;
                // Allow a fallback from the regular style to solid if regular is not available but only if we aren't auto-fetching SVGs
                if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) acc.prefix = 'fas';
            }
            return acc;
        }, emptyCanonicalIcon());
        if (values.includes('fa-brands') || values.includes('fab')) canonical.prefix = 'fab';
        if (values.includes('fa-duotone') || values.includes('fad')) canonical.prefix = 'fad';
        if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
            canonical.prefix = 'fass';
            canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
        }
        // The fa prefix is not canonical. So if it has made it through until this point we will shift it to the correct prefix.
        if (canonical.prefix === 'fa' || givenPrefix === 'fa') canonical.prefix = getDefaultUsablePrefix() || 'fas';
        return canonical;
    }
    let Library = /*#__PURE__*/function () {
        function Library() {
            _classCallCheck(this, Library);
            this.definitions = {};
        }
        _createClass(Library, [{
            key: "add",
            value: function add() {
                let _this = this;
                for (let _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
                    definitions[_key] = arguments[_key];
                }
                let additions = definitions.reduce(this._pullDefinitions, {});
                Object.keys(additions).forEach(function (key) {
                    _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
                    defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change
                    let longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
                    if (longPrefix) defineIcons(longPrefix, additions[key]);
                    build();
                });
            }
        }, {
            key: "reset",
            value: function reset() {
                this.definitions = {};
            }
        }, {
            key: "_pullDefinitions",
            value: function _pullDefinitions(additions, definition) {
                let normalized = definition.prefix && definition.iconName && definition.icon ? {
                    0: definition
                } : definition;
                Object.keys(normalized).map(function (key) {
                    let aliases = normalized[key].icon[2];
                    if (!additions[normalized[key].prefix]) additions[normalized[key].prefix] = {};
                    if (aliases.length > 0) {
                        aliases.forEach(function (alias) {
                            if (typeof alias === 'string') additions[normalized[key].prefix][alias] = normalized[key].icon;
                        });
                    }
                    additions[normalized[key].prefix][normalized[key].iconName] = normalized[key].icon;
                });
                return additions;
            }
        }]);
        return Library;
    }();
    let _plugins = [], _hooks = {}, providers = {}, defaultProviderKeys = Object.keys(providers);
    function registerPlugins(nextPlugins, _ref) {
        let obj = _ref.mixoutsTo;
        _plugins = nextPlugins;
        _hooks = {};
        Object.keys(providers).forEach(function (k) {
            if (defaultProviderKeys.indexOf(k) === -1) delete providers[k];
        });
        _plugins.forEach(function (plugin) {
            let mixout = plugin.mixout ? plugin.mixout() : {};
            Object.keys(mixout).forEach(function (tk) {
                if (typeof mixout[tk] === 'function') obj[tk] = mixout[tk];
                if (_typeof(mixout[tk]) === 'object') {
                    Object.keys(mixout[tk]).forEach(function (sk) {
                        if (!obj[tk]) obj[tk] = {};
                        obj[tk][sk] = mixout[tk][sk];
                    });
                }
            });
            if (plugin.hooks) {
                let hooks = plugin.hooks();
                Object.keys(hooks).forEach(function (hook) {
                    if (!_hooks[hook]) _hooks[hook] = [];
                    _hooks[hook].push(hooks[hook]);
                });
            }
            if (plugin.provides) plugin.provides(providers);
        });
        return obj;
    }
    function chainHooks(hook, accumulator) {
        for (let _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }
        let hookFns = _hooks[hook] || [];
        hookFns.forEach(function (hookFn) {
            accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
        });
        return accumulator;
    }
    function callHooks(hook) {
        for (let _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }
        let hookFns = _hooks[hook] || [];
        hookFns.forEach(function (hookFn) { hookFn.apply(null, args); });
        return undefined;
    }
    function callProvided() {
        let hook = arguments[0];
        let args = Array.prototype.slice.call(arguments, 1);
        return providers[hook] ? providers[hook].apply(null, args) : undefined;
    }
    function findIconDefinition(iconLookup) {
        if (iconLookup.prefix === 'fa') iconLookup.prefix = 'fas';
        let prefix = iconLookup.prefix || getDefaultUsablePrefix();
        if (!iconLookup.iconName) return;
        let iconName = byAlias(prefix, iconLookup.iconName) || iconLookup.iconName;
        return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
    }
    let library = new Library();
    let noAuto = function noAuto() {
        config.autoReplaceSvg = false;
        config.observeMutations = false;
        callHooks('noAuto');
    };
    let dom = {
        i2svg: function i2svg() {
            let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (IS_DOM) {
                callHooks('beforeI2svg', params);
                callProvided('pseudoElements2svg', params);
                return callProvided('i2svg', params);
            }
            return Promise.reject('Operation requires a DOM of some kind.');
        },
        watch: function watch() {
            let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            let autoReplaceSvgRoot = params.autoReplaceSvgRoot;
            if (config.autoReplaceSvg === false) config.autoReplaceSvg = true;
            config.observeMutations = true;
            domready(function () {
                autoReplace({autoReplaceSvgRoot: autoReplaceSvgRoot});
                callHooks('watch', params);
            });
        }
    };
    let parse = {
        icon: function icon(_icon) {
            if (_icon === null) return null;
            if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) return {prefix: _icon.prefix, iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName};
            if (Array.isArray(_icon) && _icon.length === 2) {
                let iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
                let prefix = getCanonicalPrefix(_icon[0]);
                return {prefix: prefix, iconName: byAlias(prefix, iconName) || iconName};
            }
            if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
                let canonicalIcon = getCanonicalIcon(_icon.split(' '), {skipLookups: true});
                return {prefix: canonicalIcon.prefix || getDefaultUsablePrefix(), iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName};
            }
            if (typeof _icon === 'string') {
                let _prefix = getDefaultUsablePrefix();
                return {prefix: _prefix, iconName: byAlias(_prefix, _icon) || _icon};
            }
        }
    };
    let api = {noAuto: noAuto, config: config, dom: dom, parse: parse, library: library, findIconDefinition: findIconDefinition, toHtml: toHtml};
    let autoReplace = function autoReplace() {
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        let _params$autoReplaceSv = params.autoReplaceSvgRoot,
            autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
        if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
            node: autoReplaceSvgRoot
        });
    };
    function bootstrap(plugins) {
        if (IS_BROWSER) {
            if (!WINDOW.FontAwesome) WINDOW.FontAwesome = api;
            domready(function () {
                autoReplace();
                callHooks('bootstrap');
            });
        }
        namespace.hooks = _objectSpread2(_objectSpread2({}, namespace.hooks), {}, {
            addPack: function addPack(prefix, icons) {
                namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
                build();
                autoReplace();
            },
            addPacks: function addPacks(packs) {
                packs.forEach(function (_ref) {
                    let _ref2 = _slicedToArray(_ref, 2);
                    namespace.styles[_ref2[0]] = _objectSpread2(_objectSpread2({}, namespace.styles[_ref2[0]] || {}), _ref2[1]);
                });
                build();
                autoReplace();
            },
            addShims: function addShims(shims) {
                let _namespace$shims;
                (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));
                build();
                autoReplace();
            }
        });
    }
    function domVariants(val, abstractCreator) {
        Object.defineProperty(val, 'abstract', {get: abstractCreator});
        Object.defineProperty(val, 'html', {get: function get() {return val.abstract.map(function (a) { return toHtml(a); });}});
        Object.defineProperty(val, 'node', {
            get: function get() {
                if (!IS_DOM) return;
                let container = DOCUMENT.createElement('div');
                container.innerHTML = val.html;
                return container.children;
            }
        });
        return val;
    }
    function asIcon(_ref) {
        if (transformIsMeaningful(_ref.transform) && _ref.main.found && !_ref.mask.found) {
            let offset = {x: _ref.main.width / _ref.main.height / 2, y: 0.5};
            _ref.attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, _ref.styles), {}, {
                'transform-origin': "".concat(offset.x + _ref.transform.x / 16, "em ").concat(offset.y + _ref.transform.y / 16, "em")
            }));
        }
        return [{tag: 'svg', attributes: _ref.attributes, children: _ref.children}];
    }
    function asSymbol(_ref) {
        let id = _ref.symbol === true ? "".concat(_ref.prefix, "-").concat(config.cssPrefix, "-").concat(_ref.iconName) : _ref.symbol;
        return [{
            tag: 'svg',
            attributes: {style: 'display: none;'},
            children: [{
                tag: 'symbol',
                attributes: _objectSpread2(_objectSpread2({}, _ref.attributes), {}, {id: id}),
                children: _ref.children
            }]
        }];
    }
    function makeInlineSvgAbstract(params) {
        let _ref = params.icons.mask.found ? params.icons.mask : params.icons.main;
        let isUploadedIcon = params.prefix === 'fak';
        let attrClass = [config.replacementClass, params.iconName ? "".concat(config.cssPrefix, "-").concat(params.iconName) : ''].filter(function (c) {
            return params.extra.classes.indexOf(c) === -1;
        }).filter(function (c) {
            return c !== '' || !!c;
        }).concat(params.extra.classes).join(' ');
        let content = {
            children: [],
            attributes: _objectSpread2(_objectSpread2({}, params.extra.attributes), {}, {
                'data-prefix': params.prefix,
                'data-icon': params.iconName,
                'class': attrClass,
                'role': params.extra.attributes.role || 'img',
                'xmlns': 'http://www.w3.org/2000/svg',
                'viewBox': "0 0 ".concat(_ref.width, " ").concat(_ref.height)
            })
        };
        let uploadedIconWidthStyle = isUploadedIcon && !~params.extra.classes.indexOf('fa-fw') ? {width: "".concat(_ref.width / _ref.height * 16 * 0.0625, "em")} : {};
        if (params.watchable === void 0 ? false : params.watchable) content.attributes[DATA_FA_I2SVG] = '';
        if (params.title) {
            content.children.push({
                tag: 'title',
                attributes: {id: content.attributes['aria-labelledby'] || "title-".concat(params.titleId || nextUniqueId())},
                children: [params.title]
            });
            delete content.attributes.title;
        }
        let args = _objectSpread2(_objectSpread2({}, content), {}, {
            prefix: params.prefix, iconName: params.iconName, main: params.icons.main, mask: params.icons.mask,
            maskId: params.maskId, transform: params.transform, symbol: params.symbol,
            styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), params.extra.styles)
        });
        let _ref2 = params.icons.mask.found && params.icons.main.found ? callProvided('generateAbstractMask', args) || {children: [], attributes: {}} :
            callProvided('generateAbstractIcon', args) || {children: [], attributes: {}};
        args.children = _ref2.children;
        args.attributes = _ref2.attributes;
        if (params.symbol) return asSymbol(args);
        return asIcon(args);
    }
    function makeLayersTextAbstract(params) {
        let attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, params.extra.attributes), params.title ? {
            'title': params.title
        } : {}), {}, {
            'class': params.extra.classes.join(' ')
        });
        if (params.watchable === void 0 ? false : params.watchable) attributes[DATA_FA_I2SVG] = '';
        let styles = _objectSpread2({}, params.extra.styles);
        if (transformIsMeaningful(params.transform)) {
            styles['transform'] = transformForCss({transform: params.transform, startCentered: true, width: params.width, height: params.height});
            styles['-webkit-transform'] = styles['transform'];
        }
        let styleString = joinStyles(styles);
        if (styleString.length > 0) attributes['style'] = styleString;
        let val = [];
        val.push({tag: 'span', attributes: attributes, children: [params.content]});
        if (params.title) val.push({tag: 'span', attributes: {class: 'sr-only'}, children: [params.title]});
        return val;
    }
    function makeLayersCounterAbstract(params) {
        let attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, params.extra.attributes), params.title ? {
            'title': params.title
        } : {}), {}, {'class': params.extra.classes.join(' ')});
        let styleString = joinStyles(params.extra.styles);
        if (styleString.length > 0) attributes['style'] = styleString;
        let val = [];
        val.push({tag: 'span', attributes: attributes, children: [params.content]});
        if (params.title) val.push({tag: 'span', attributes: {class: 'sr-only'}, children: [params.title]});
        return val;
    }
    let styles$1 = namespace.styles;
    function asFoundIcon(icon) {
        let _icon$slice = _slicedToArray(icon.slice(4), 1);
        let element = null;
        if (Array.isArray(_icon$slice[0])) {
            element = {
                tag: 'g',
                attributes: {class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)},
                children: [
                    {tag: 'path', attributes: {class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY), fill: 'currentColor', d: _icon$slice[0][0]}},
                    {tag: 'path', attributes: {class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY), fill: 'currentColor', d: _icon$slice[0][1]}}
                ]
            };
        } else element = {tag: 'path', attributes: {fill: 'currentColor', d: _icon$slice[0]}};
        return {found: true, width: icon[0], height: icon[1], icon: element};
    }
    let missingIconResolutionMixin = {found: false, width: 512, height: 512};
    function maybeNotifyMissing(iconName, prefix) {
        if (!PRODUCTION && !config.showMissingIcons && iconName) console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
    }
    function findIcon(iconName, prefix) {
        let givenPrefix = prefix;
        if (prefix === 'fa' && config.styleDefault !== null) prefix = getDefaultUsablePrefix();
        return new Promise(function (resolve, reject) {
            let val = {found: false, width: 512, height: 512, icon: callProvided('missingIconAbstract') || {}};
            if (givenPrefix === 'fa') {
                let shim = byOldName(iconName) || {};
                iconName = shim.iconName || iconName;
                prefix = shim.prefix || prefix;
            }
            if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) return resolve(asFoundIcon(styles$1[prefix][iconName]));
            maybeNotifyMissing(iconName, prefix);
            resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}}));
        });
    }
    let noop$1 = function noop() {};
    let p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {mark: noop$1, measure: noop$1};
    let preamble = "FA \"6.4.2\"";
    let begin = function begin(name) {
        p.mark("".concat(preamble, " ").concat(name, " begins"));
        return function () { return end(name); };
    };
    let end = function end(name) {
        p.mark("".concat(preamble, " ").concat(name, " ends"));
        p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
    };
    let perf = {begin: begin, end: end};
    let noop$2 = function noop() {};
    function isWatched(node) {
        let i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
        return typeof i2svg === 'string';
    }
    function hasPrefixAndIcon(node) {
        let prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
        let icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
        return prefix && icon;
    }
    function hasBeenReplaced(node) { return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass); }
    function getMutator() {
        if (config.autoReplaceSvg === true) return mutators.replace;
        let mutator = mutators[config.autoReplaceSvg];
        return mutator || mutators.replace;
    }
    function createElementNS(tag) { return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag); }
    function createElement(tag) { return DOCUMENT.createElement(tag); }
    function convertSVG(abstractObj) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;
        if (typeof abstractObj === 'string') return DOCUMENT.createTextNode(abstractObj);
        let tag = ceFn(abstractObj.tag);
        Object.keys(abstractObj.attributes || []).forEach(function (key) {
            tag.setAttribute(key, abstractObj.attributes[key]);
        });
        let children = abstractObj.children || [];
        children.forEach(function (child) {
            tag.appendChild(convertSVG(child, {ceFn: ceFn}));
        });
        return tag;
    }
    function nodeAsComment(node) {
        let comment = " ".concat(node.outerHTML, " ");
        /* BEGIN.ATTRIBUTION */
        comment = "".concat(comment, "Font Awesome fontawesome.com ");
        /* END.ATTRIBUTION */
        return comment;
    }
    let mutators = {
        replace: function replace(mutation) {
            if (mutation[0].parentNode) {
                mutation[1].forEach(function (_abstract) { mutation[0].parentNode.insertBefore(convertSVG(_abstract), mutation[0]); });
                if (mutation[0].getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
                    let comment = DOCUMENT.createComment(nodeAsComment(mutation[0]));
                    mutation[0].parentNode.replaceChild(comment, mutation[0]);
                } else mutation[0].remove();
            }
        },
        nest: function nest(mutation) {
            // If we already have a replaced node we do not want to continue nesting within it.
            // Short-circuit to the standard replacement
            if (~classArray(mutation[0]).indexOf(config.replacementClass)) return mutators.replace(mutation);
            let forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
            delete mutation[1][0].attributes.id;
            if (mutation[1][0].attributes.class) {
                let splitClasses = mutation[1][0].attributes.class.split(' ').reduce(function (acc, cls) {
                    if (cls === config.replacementClass || cls.match(forSvg)) acc.toSvg.push(cls);
                    else acc.toNode.push(cls);
                    return acc;
                }, {toNode: [], toSvg: []});
                mutation[1][0].attributes.class = splitClasses.toSvg.join(' ');
                if (splitClasses.toNode.length === 0) mutation[0].removeAttribute('class');
                else mutation[0].setAttribute('class', splitClasses.toNode.join(' '));
            }
            let newInnerHTML = mutation[1].map(function (a) { return toHtml(a); }).join('\n');
            mutation[0].setAttribute(DATA_FA_I2SVG, '');
            mutation[0].innerHTML = newInnerHTML;
        }
    };
    function performOperationSync(op) { op(); }
    function perform(mutations, callback) {
        let callbackFunction = typeof callback === 'function' ? callback : noop$2;
        if (mutations.length === 0) callbackFunction();
        else {
            let frame = performOperationSync;
            if (config.mutateApproach === MUTATION_APPROACH_ASYNC) frame = WINDOW.requestAnimationFrame || performOperationSync;
            frame(function () {
                let mutator = getMutator(), mark = perf.begin('mutate');
                mutations.map(mutator);
                mark();
                callbackFunction();
            });
        }
    }
    let disabled = false;
    function disableObservation() {
        disabled = true;
    }
    function enableObservation() {
        disabled = false;
    }
    let mo = null;
    function observe(options) {
        if (!MUTATION_OBSERVER) return;
        if (!config.observeMutations) return;
        let treeCallback = options.treeCallback === void 0 ? noop$2 : options.treeCallback,
            nodeCallback = options.nodeCallback === void 0 ? noop$2 : options.nodeCallback,
            pseudoElementsCallback = options.pseudoElementsCallback === void 0 ? noop$2 : options.pseudoElementsCallback,
            observeMutationsRoot = options.observeMutationsRoot === void 0 ? DOCUMENT : options.observeMutationsRoot;
        mo = new MUTATION_OBSERVER(function (objects) {
            if (disabled) return;
            let defaultPrefix = getDefaultUsablePrefix();
            toArray(objects).forEach(function (mutationRecord) {
                if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
                    if (config.searchPseudoElements) pseudoElementsCallback(mutationRecord.target);
                    treeCallback(mutationRecord.target);
                }
                if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) pseudoElementsCallback(mutationRecord.target.parentNode);
                if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
                    if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
                        let _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target));
                        mutationRecord.target.setAttribute(DATA_PREFIX, _getCanonicalIcon.prefix || defaultPrefix);
                        if (_getCanonicalIcon.iconName) mutationRecord.target.setAttribute(DATA_ICON, _getCanonicalIcon.iconName);
                    } else if (hasBeenReplaced(mutationRecord.target)) nodeCallback(mutationRecord.target);
                }
            });
        });
        if (!IS_DOM) return;
        mo.observe(observeMutationsRoot, {childList: true, attributes: true, characterData: true, subtree: true});
    }
    function disconnect() {
        if (!mo) return;
        mo.disconnect();
    }
    function styleParser(node) {
        let style = node.getAttribute('style'), val = [];
        if (style) {
            val = style.split(';').reduce(function (acc, style) {
                let styles = style.split(':');
                if (styles[0] && styles.slice(1).length > 0) acc[styles[0]] = styles.slice(1).join(':').trim();
                return acc;
            }, {});
        }
        return val;
    }
    function classParser(node) {
        let existingPrefix = node.getAttribute('data-prefix');
        let existingIconName = node.getAttribute('data-icon');
        let innerText = node.innerText !== undefined ? node.innerText.trim() : '';
        let val = getCanonicalIcon(classArray(node));
        if (!val.prefix) val.prefix = getDefaultUsablePrefix();
        if (existingPrefix && existingIconName) {
            val.prefix = existingPrefix;
            val.iconName = existingIconName;
        }
        if (val.iconName && val.prefix) return val;
        if (val.prefix && innerText.length > 0) val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
        if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) val.iconName = node.firstChild.data;
        return val;
    }

    function attributesParser(node) {
        let extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
            if (acc.name !== 'class' && acc.name !== 'style') acc[attr.name] = attr.value;
            return acc;
        }, {});
        let title = node.getAttribute('title'), titleId = node.getAttribute('data-fa-title-id');
        if (config.autoA11y) {
            if (title) extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
            else {
                extraAttributes['aria-hidden'] = 'true';
                extraAttributes['focusable'] = 'false';
            }
        }
        return extraAttributes;
    }
    function blankMeta() {
        return {
            iconName: null,
            title: null,
            titleId: null,
            prefix: null,
            transform: meaninglessTransform,
            symbol: false,
            mask: {iconName: null, prefix: null, rest: []},
            maskId: null,
            extra: {classes: [], styles: {}, attributes: {}}
        };
    }
    function parseMeta(node) {
        let parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {styleParser: true};
        let _classParser = classParser(node);
        return _objectSpread2({
            iconName: _classParser.iconName,
            title: node.getAttribute('title'),
            titleId: node.getAttribute('data-fa-title-id'),
            prefix: _classParser.prefix,
            transform: meaninglessTransform,
            mask: {iconName: null, prefix: null, rest: []},
            maskId: null,
            symbol: false,
            extra: {
                classes: _classParser.rest,
                styles: parser.styleParser ? styleParser(node) : [],
                attributes: attributesParser(node)
            }
        }, chainHooks('parseNodeAttributes', {}, node));
    }
    let styles$2 = namespace.styles;
    function generateMutation(node) {
        let nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {styleParser: false}) : parseMeta(node);
        if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) return callProvided('generateLayersText', node, nodeMeta);
        return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
    let knownPrefixes = new Set();
    FAMILIES.map(function (family) {
        knownPrefixes.add("fa-".concat(family));
    });
    Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
    Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
    knownPrefixes = _toConsumableArray(knownPrefixes);
    function onTree(root) {
        let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!IS_DOM) return Promise.resolve();
        let htmlClassList = DOCUMENT.documentElement.classList;
        let hclAdd = function hclAdd(suffix) { return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix)); };
        let hclRemove = function hclRemove(suffix) { return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix)); };
        let prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) { return "fa-".concat(f); }).concat(Object.keys(styles$2));
        if (!prefixes.includes('fa')) prefixes.push('fa');
        let prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) { return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])"); })).join(', ');
        if (prefixesDomQuery.length === 0) return Promise.resolve();
        let candidates = [];
        try {
            candidates = toArray(root.querySelectorAll(prefixesDomQuery));
        } catch (e) {} // noop
        if (candidates.length > 0) {
            hclAdd('pending');
            hclRemove('complete');
        } else return Promise.resolve();
        let mark = perf.begin('onTree');
        let mutations = candidates.reduce(function (acc, node) {
            try {
                let mutation = generateMutation(node);
                if (mutation) acc.push(mutation);
            } catch (e) {
                if (!PRODUCTION) {
                    if (e.name === 'MissingIcon') console.error(e);
                }
            }
            return acc;
        }, []);
        return new Promise(function (resolve, reject) {
            Promise.all(mutations).then(function (resolvedMutations) {
                perform(resolvedMutations, function () {
                    hclAdd('active');
                    hclAdd('complete');
                    hclRemove('pending');
                    if (typeof callback === 'function') callback();
                    mark();
                    resolve();
                });
            }).catch(function (e) {
                mark();
                reject(e);
            });
        });
    }
    function onNode(node) {
        let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        generateMutation(node).then(function (mutation) {
            if (mutation) perform([mutation], callback);
        });
    }
    function resolveIcons(next) {
        return function (maybeIconDefinition) {
            let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            let iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
            let mask = params.mask;
            if (mask) mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
            return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {mask: mask}));
        };
    }
    let render = function render(iconDefinition) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let transform = params.transform === void 0 ? meaninglessTransform : params.transform,
            symbol = params.symbol === void 0 ? false : params.symbol,
            mask = params.mask === void 0 ? null : params.mask,
            maskId = params.maskId === void 0 ? null : params.maskId,
            title = params.title === void 0 ? null : params.title,
            titleId = params.titleId === void 0 ? null : params.titleId,
            classes = params.classes === void 0 ? [] : params.classes,
            attributes = params.attributes === void 0 ? {} : params.attributes,
            styles = params.styles === void 0 ? {} : params.styles;
        if (!iconDefinition) return;
        return domVariants(_objectSpread2({type: 'icon'}, iconDefinition), function () {
            callHooks('beforeDOMElementCreation', {iconDefinition: iconDefinition, params: params});
            if (config.autoA11y) {
                if (title) attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
                else {
                    attributes['aria-hidden'] = 'true';
                    attributes['focusable'] = 'false';
                }
            }
            return makeInlineSvgAbstract({
                icons: {main: asFoundIcon(iconDefinition.icon), mask: mask ? asFoundIcon(mask.icon) : {found: false, width: null, height: null, icon: {}}},
                prefix: iconDefinition.prefix,
                iconName: iconDefinition.iconName,
                transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
                symbol: symbol,
                title: title,
                maskId: maskId,
                titleId: titleId,
                extra: {attributes: attributes, styles: styles, classes: classes}
            });
        });
    };
    let ReplaceElements = {
        mixout: function mixout() { return {icon: resolveIcons(render)}; },
        hooks: function hooks() {
            return {
                mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
                    accumulator.treeCallback = onTree;
                    accumulator.nodeCallback = onNode;
                    return accumulator;
                }
            };
        },
        provides: function provides(providers$$1) {
            providers$$1.i2svg = function (params) {
                let node = params.node === void 0 ? DOCUMENT : params.node,
                    callback = params.callback === void 0 ? function () {} : params.callback;
                return onTree(node, callback);
            };
            providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
                return new Promise(function (resolve, reject) {
                    Promise.all([findIcon(nodeMeta.iconName, nodeMeta.prefix), nodeMeta.mask.iconName ? findIcon(nodeMeta.mask.iconName, nodeMeta.mask.prefix) : Promise.resolve({
                        found: false,
                        width: 512,
                        height: 512,
                        icon: {}
                    })]).then(function (_ref) {
                        let _ref2 = _slicedToArray(_ref, 2);
                        resolve([node, makeInlineSvgAbstract({
                            icons: {main: _ref2[0], mask: _ref2[1]},
                            prefix: nodeMeta.prefix,
                            iconName: nodeMeta.iconName,
                            transform: nodeMeta.transform,
                            symbol: nodeMeta.symbol,
                            maskId: nodeMeta.maskId,
                            title: nodeMeta.title,
                            titleId: nodeMeta.titleId,
                            extra: nodeMeta.extra,
                            watchable: true
                        })]);
                    }).catch(reject);
                });
            };
            providers$$1.generateAbstractIcon = function (_ref3) {
                let styleString = joinStyles(_ref3.styles);
                if (styleString.length > 0) _ref3.attributes['style'] = styleString;
                let nextChild;
                if (transformIsMeaningful(_ref3.transform)) {
                    nextChild = callProvided('generateAbstractTransformGrouping', {
                        main: _ref3.main,
                        transform: _ref3.transform,
                        containerWidth: _ref3.main.width,
                        iconWidth: _ref3.main.width
                    });
                }
                _ref3.children.push(nextChild || _ref3.main.icon);
                return {children: _ref3.children, attributes: _ref3.attributes};
            };
        }
    };
    let Layers = {
        mixout: function mixout() {
            return {
                layer: function layer(assembler) {
                    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    let classes = params.classes === void 0 ? [] : params.classes;
                    return domVariants({type: 'layer'}, function () {
                        callHooks('beforeDOMElementCreation', {
                            assembler: assembler,
                            params: params
                        });
                        let children = [];
                        assembler(function (args) {
                            Array.isArray(args) ? args.map(function (a) {
                                children = children.concat(a.abstract);
                            }) : children = children.concat(args.abstract);
                        });
                        return [{
                            tag: 'span',
                            attributes: {
                                class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
                            },
                            children: children
                        }];
                    });
                }
            };
        }
    };
    let LayersCounter = {
        mixout: function mixout() {
            return {
                counter: function counter(content) {
                    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    let title = params.title === void 0 ? null : params.title,
                        classes = params.classes === void 0 ? [] : params.classes,
                        attributes = params.attributes === void 0 ? {} : params.attributes,
                        styles = params.styles === void 0 ? {} : params.styles;
                    return domVariants({type: 'counter', content: content}, function () {
                        callHooks('beforeDOMElementCreation', {content: content, params: params});
                        return makeLayersCounterAbstract({
                            content: content.toString(),
                            title: title,
                            extra: {
                                attributes: attributes,
                                styles: styles,
                                classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
                            }
                        });
                    });
                }
            };
        }
    };
    let LayersText = {
        mixout: function mixout() {
            return {
                text: function text(content) {
                    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    let transform = params.transform === void 0 ? meaninglessTransform : params.transform,
                        title = params.title === void 0 ? null : params.title,
                        classes = params.classes === void 0 ? [] : params.classes,
                        attributes = params.attributes === void 0 ? {} : params.attributes,
                        styles = params.styles === void 0 ? {} : params.styles;
                    return domVariants({type: 'text', content: content}, function () {
                        callHooks('beforeDOMElementCreation', {content: content, params: params});
                        return makeLayersTextAbstract({
                            content: content,
                            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
                            title: title,
                            extra: {
                                attributes: attributes,
                                styles: styles,
                                classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
                            }
                        });
                    });
                }
            };
        },
        provides: function provides(providers$$1) {
            providers$$1.generateLayersText = function (node, nodeMeta) {
                let width = null;
                let height = null;
                if (IS_IE) {
                    let boundingClientRect = node.getBoundingClientRect();
                    width = boundingClientRect.width / parseInt(getComputedStyle(node).fontSize, 10);
                    height = boundingClientRect.height / parseInt(getComputedStyle(node).fontSize, 10);
                }
                if (config.autoA11y && !nodeMeta.title) nodeMeta.extra.attributes['aria-hidden'] = 'true';
                return Promise.resolve([node, makeLayersTextAbstract({
                    content: node.innerHTML,
                    width: width,
                    height: height,
                    transform: nodeMeta.transform,
                    title: nodeMeta.title,
                    extra: nodeMeta.extra,
                    watchable: true
                })]);
            };
        }
    };
    let CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
    let SECONDARY_UNICODE_RANGE = [1105920, 1112319];

    function hexValueFromContent(content) {
        let cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
        let codePoint = codePointAt(cleaned, 0);
        let isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
        let isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
        return {value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned), isSecondary: isPrependTen || isDoubled};
    }
    function replaceForPosition(node, position) {
        let pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
        return new Promise(function (resolve, reject) {
            // This node is already being processed
            if (node.getAttribute(pendingAttribute) !== null) return resolve();
            let children = toArray(node.children);
            let alreadyProcessedPseudoElement = children.filter(function (c) {
                return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
            })[0];
            let styles = WINDOW.getComputedStyle(node, position);
            let fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
            let fontWeight = styles.getPropertyValue('font-weight');
            let content = styles.getPropertyValue('content');
            if (alreadyProcessedPseudoElement && !fontFamily) {
                // If we've already processed it but the current computed style does not result in a font-family,
                // that probably means that a class name that was previously present to make the icon has been
                // removed. So we now should delete the icon.
                node.removeChild(alreadyProcessedPseudoElement);
                return resolve();
            } else if (fontFamily && content !== 'none' && content !== '') {
                let _content = styles.getPropertyValue('content');
                let family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
                let prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];
                let _hexValueFromContent = hexValueFromContent(_content),
                    hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary;
                let isV4 = fontFamily[0].startsWith('FontAwesome'), iconName = byUnicode(prefix, hexValue);
                let iconIdentifier = iconName;
                if (isV4) {
                    let iconName4 = byOldUnicode(hexValue);
                    if (iconName4.iconName && iconName4.prefix) {
                        iconName = iconName4.iconName;
                        prefix = iconName4.prefix;
                    }
                } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
                // already done so with the same prefix and iconName
                if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
                    node.setAttribute(pendingAttribute, iconIdentifier);
                    // Delete the old one, since we're replacing it with a new one
                    if (alreadyProcessedPseudoElement) node.removeChild(alreadyProcessedPseudoElement);
                    let meta = blankMeta();
                    meta.extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
                    findIcon(iconName, prefix).then(function (main) {
                        let _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
                            icons: {main: main, mask: emptyCanonicalIcon()},
                            prefix: prefix,
                            iconName: iconIdentifier,
                            extra: meta.extra,
                            watchable: true
                        }));
                        let element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        if (position === '::before') node.insertBefore(element, node.firstChild);
                        else node.appendChild(element);
                        element.outerHTML = _abstract.map(function (a) { return toHtml(a); }).join('\n');
                        node.removeAttribute(pendingAttribute);
                        resolve();
                    }).catch(reject);
                } else resolve();
            } else resolve();
        });
    }
    function replace(node) { return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]); }
    function processable(node) { return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg'); }
    function searchPseudoElements(root) {
        if (!IS_DOM) return;
        return new Promise(function (resolve, reject) {
            let operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
            let end = perf.begin('searchPseudoElements');
            disableObservation();
            Promise.all(operations).then(function () {
                end();
                enableObservation();
                resolve();
            }).catch(function () {
                end();
                enableObservation();
                reject();
            });
        });
    }
    let PseudoElements = {
        hooks: function hooks() {
            return {
                mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
                    accumulator.pseudoElementsCallback = searchPseudoElements;
                    return accumulator;
                }
            };
        },
        provides: function provides(providers$$1) {
            providers$$1.pseudoElements2svg = function (params) {
                if (config.searchPseudoElements) searchPseudoElements(params.node === void 0 ? DOCUMENT : params.node);
            };
        }
    };
    let _unwatched = false;
    let MutationObserver$1 = {
        mixout: function mixout() {
            return {
                dom: {
                    unwatch: function unwatch() {
                        disableObservation();
                        _unwatched = true;
                    }
                }
            };
        },
        hooks: function hooks() {
            return {
                bootstrap: function bootstrap() { observe(chainHooks('mutationObserverCallbacks', {})); },
                noAuto: function noAuto() { disconnect(); },
                watch: function watch(params) {
                    if (_unwatched) enableObservation();
                    else observe(chainHooks('mutationObserverCallbacks', {observeMutationsRoot: params.observeMutationsRoot}));
                }
            };
        }
    };
    let parseTransformString = function parseTransformString(transformString) {
        let transform = {size: 16, x: 0, y: 0, flipX: false, flipY: false, rotate: 0};
        return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
            let parts = n.toLowerCase().split('-');
            let rest = parts.slice(1).join('-');
            if (parts[0] && rest === 'h') {
                acc.flipX = true;
                return acc;
            }
            if (parts[0] && rest === 'v') {
                acc.flipY = true;
                return acc;
            }
            rest = parseFloat(rest);
            if (isNaN(rest)) return acc;
            switch (parts[0]) {
                case 'grow': acc.size = acc.size + rest; break;
                case 'shrink': acc.size = acc.size - rest; break;
                case 'left': acc.x = acc.x - rest; break;
                case 'right': acc.x = acc.x + rest; break;
                case 'up': acc.y = acc.y - rest; break;
                case 'down': acc.y = acc.y + rest; break;
                case 'rotate': acc.rotate = acc.rotate + rest; break;
            }
            return acc;
        }, transform);
    };
    let PowerTransforms = {
        mixout: function mixout() {
            return {
                parse: {
                    transform: function transform(transformString) { return parseTransformString(transformString); }
                }
            };
        },
        hooks: function hooks() {
            return {
                parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                    let transformString = node.getAttribute('data-fa-transform');
                    if (transformString) accumulator.transform = parseTransformString(transformString);
                    return accumulator;
                }
            };
        },
        provides: function provides(providers) {
            providers.generateAbstractTransformGrouping = function (_ref) {
                let outer = {transform: "translate(".concat(_ref.containerWidth / 2, " 256)")};
                let innerTranslate = "translate(".concat(_ref.transform.x * 32, ", ").concat(_ref.transform.y * 32, ") ");
                let innerScale = "scale(".concat(_ref.transform.size / 16 * (_ref.transform.flipX ? -1 : 1), ", ").concat(_ref.transform.size / 16 * (_ref.transform.flipY ? -1 : 1), ") ");
                let innerRotate = "rotate(".concat(_ref.transform.rotate, " 0 0)");
                let inner = {transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)};
                let path = {transform: "translate(".concat(_ref.iconWidth / 2 * -1, " -256)")};
                return {
                    tag: 'g',
                    attributes: _objectSpread2({}, outer),
                    children: [{
                        tag: 'g',
                        attributes: _objectSpread2({}, inner),
                        children: [{
                            tag: _ref.main.icon.tag,
                            children: _ref.main.icon.children,
                            attributes: _objectSpread2(_objectSpread2({}, _ref.main.icon.attributes), path)
                        }]
                    }]
                };
            };
        }
    };
    let ALL_SPACE = {x: 0, y: 0, width: '100%', height: '100%'};
    function fillBlack(_abstract) {
        let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (_abstract.attributes && (_abstract.attributes.fill || force)) _abstract.attributes.fill = 'black';
        return _abstract;
    }
    function deGroup(_abstract2) {
        if (_abstract2.tag === 'g') return _abstract2.children;
        return [_abstract2];
    }
    let Masks = {
        hooks: function hooks() {
            return {
                parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                    let maskData = node.getAttribute('data-fa-mask');
                    let mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
                        return i.trim();
                    }));
                    if (!mask.prefix) mask.prefix = getDefaultUsablePrefix();
                    accumulator.mask = mask;
                    accumulator.maskId = node.getAttribute('data-fa-mask-id');
                    return accumulator;
                }
            };
        },
        provides: function provides(providers) {
            providers.generateAbstractMask = function (_ref) {
                let trans = transformForSvg({
                    transform: _ref.transform,
                    containerWidth: _ref.mask.width,
                    iconWidth: _ref.main.width
                });
                let maskRect = {tag: 'rect', attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {fill: 'white'})};
                let maskInnerGroupChildrenMixin = _ref.main.icon.children ? {children: _ref.main.icon.children.map(fillBlack)} : {};
                let maskInnerGroup = {
                    tag: 'g',
                    attributes: _objectSpread2({}, trans.inner),
                    children: [fillBlack(_objectSpread2({
                        tag: _ref.main.icon.tag,
                        attributes: _objectSpread2(_objectSpread2({}, _ref.main.icon.attributes), trans.path)
                    }, maskInnerGroupChildrenMixin))]
                };
                let maskOuterGroup = {
                    tag: 'g',
                    attributes: _objectSpread2({}, trans.outer),
                    children: [maskInnerGroup]
                };
                let maskId = "mask-".concat(_ref.maskId || nextUniqueId());
                let clipId = "clip-".concat(_ref.maskId || nextUniqueId());
                let maskTag = {
                    tag: 'mask',
                    attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
                        id: maskId,
                        maskUnits: 'userSpaceOnUse',
                        maskContentUnits: 'userSpaceOnUse'
                    }),
                    children: [maskRect, maskOuterGroup]
                };
                let defs = {
                    tag: 'defs',
                    children: [{
                        tag: 'clipPath',
                        attributes: {id: clipId},
                        children: deGroup(_ref.mask.icon)
                    }, maskTag]
                };
                _ref.children.push(defs, {
                    tag: 'rect',
                    attributes: _objectSpread2({
                        fill: 'currentColor',
                        'clip-path': "url(#".concat(clipId, ")"),
                        mask: "url(#".concat(maskId, ")")
                    }, ALL_SPACE)
                });
                return {children: _ref.children, attributes: _ref.attributes};
            };
        }
    };
    let MissingIconIndicator = {
        provides: function provides(providers) {
            let reduceMotion = false;
            if (WINDOW.matchMedia) reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
            providers.missingIconAbstract = function () {
                let gChildren = [];
                let FILL = {fill: 'currentColor'};
                let ANIMATION_BASE = {attributeType: 'XML', repeatCount: 'indefinite', dur: '2s'}; // Ring
                gChildren.push({
                    tag: 'path',
                    attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                        d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
                    })
                });
                let OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {attributeName: 'opacity'});
                let dot = {tag: 'circle', attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {cx: '256', cy: '364', r: '28'}), children: []};
                if (!reduceMotion) {
                    dot.children.push(
                        {tag: 'animate', attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {attributeName: 'r', values: '28;14;28;28;14;28;'})},
                        {tag: 'animate', attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {values: '1;0;1;1;0;1;'})}
                    );
                }
                gChildren.push(dot);
                gChildren.push({
                    tag: 'path',
                    attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
                        opacity: '1',
                        d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
                    }),
                    children: reduceMotion ? [] : [{tag: 'animate', attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {values: '1;0;0;0;0;1;'})}]
                });
                if (!reduceMotion) {
                    // Exclamation
                    gChildren.push({
                        tag: 'path',
                        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {opacity: '0', d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'}),
                        children: [{tag: 'animate', attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {values: '0;0;1;1;0;0;'})}]
                    });
                }
                return {tag: 'g', attributes: {'class': 'missing'}, children: gChildren};
            };
        }
    };
    let SvgSymbols = {
        hooks: function hooks() {
            return {
                parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                    let symbolData = node.getAttribute('data-fa-symbol');
                    accumulator['symbol'] = symbolData === null ? false : symbolData === '' ? true : symbolData;
                    return accumulator;
                }
            };
        }
    };
    let plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
    registerPlugins(plugins, {mixoutsTo: api});
    bunker(bootstrap);
}());