/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/output.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/output.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/BoldenaBold-VGjmz.ttf */ "./src/fonts/BoldenaBold-VGjmz.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.left-auto {\n  left: auto;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.top-10 {\n  top: 2.5rem;\n}\n\n.top-20 {\n  top: 5rem;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.m-5 {\n  margin: 1.25rem;\n}\n\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n\n.mt-5 {\n  margin-top: 1.25rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.hidden {\n  display: none;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-3\\/4 {\n  height: 75%;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.w-1\\/3 {\n  width: 33.333333%;\n}\n\n.w-14 {\n  width: 3.5rem;\n}\n\n.w-3\\/4 {\n  width: 75%;\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.w-5\\/6 {\n  width: 83.333333%;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-screen {\n  width: 100vw;\n}\n\n.max-w-sm {\n  max-width: 24rem;\n}\n\n.flex-none {\n  flex: none;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.place-content-between {\n  place-content: space-between;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.gap-5 {\n  gap: 1.25rem;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\n\n.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\n\n.bg-slate-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-5 {\n  padding: 1.25rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\n\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n\n.pl-1 {\n  padding-left: 0.25rem;\n}\n\n.pt-5 {\n  padding-top: 1.25rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.drop-shadow-md {\n  --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.drop-shadow-xl {\n  --tw-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.scrollbar-hide::-webkit-scrollbar {\n  display: none;\n}\n\n@font-face {\n  font-family: 'Boldena';\n\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nh1 {\n  font-family: 'Boldena';\n}\n\n.odd\\:bg-slate-200:nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.even\\:bg-slate-100:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 202 202 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-slate-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-slate-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n\n.hover\\:drop-shadow-lg:hover {\n  --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.active\\:bg-slate-400:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n\n@media (min-width: 640px) {\n  .sm\\:w-80 {\n    width: 20rem;\n  }\n}", "",{"version":3,"sources":["webpack://./dist/output.css"],"names":[],"mappings":"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","sourcesContent":["/*\n! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.left-auto {\n  left: auto;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.top-10 {\n  top: 2.5rem;\n}\n\n.top-20 {\n  top: 5rem;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.m-5 {\n  margin: 1.25rem;\n}\n\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n\n.mt-5 {\n  margin-top: 1.25rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.hidden {\n  display: none;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-3\\/4 {\n  height: 75%;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.w-1\\/3 {\n  width: 33.333333%;\n}\n\n.w-14 {\n  width: 3.5rem;\n}\n\n.w-3\\/4 {\n  width: 75%;\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.w-5\\/6 {\n  width: 83.333333%;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-screen {\n  width: 100vw;\n}\n\n.max-w-sm {\n  max-width: 24rem;\n}\n\n.flex-none {\n  flex: none;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.place-content-between {\n  place-content: space-between;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.gap-5 {\n  gap: 1.25rem;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\n\n.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\n\n.bg-slate-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-5 {\n  padding: 1.25rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\n\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n\n.pl-1 {\n  padding-left: 0.25rem;\n}\n\n.pt-5 {\n  padding-top: 1.25rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.drop-shadow-md {\n  --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.drop-shadow-xl {\n  --tw-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.scrollbar-hide::-webkit-scrollbar {\n  display: none;\n}\n\n@font-face {\n  font-family: 'Boldena';\n\n  src: url('../src/fonts/BoldenaBold-VGjmz.ttf');\n}\n\nh1 {\n  font-family: 'Boldena';\n}\n\n.odd\\:bg-slate-200:nth-child(odd) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.even\\:bg-slate-100:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 202 202 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-slate-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-slate-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n\n.hover\\:drop-shadow-lg:hover {\n  --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.active\\:bg-slate-400:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n\n@media (min-width: 640px) {\n  .sm\\:w-80 {\n    width: 20rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/input.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/input.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/BoldenaBold-VGjmz.ttf */ "./src/fonts/BoldenaBold-VGjmz.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@font-face {\n  font-family: 'Boldena';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nh1 {\n  font-family: 'Boldena';\n}", "",{"version":3,"sources":["webpack://./src/input.css"],"names":[],"mappings":"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB;;AAEnB;EACE,sBAAsB;EACtB,4CAA8C;AAChD;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@font-face {\n  font-family: 'Boldena';\n  src: url('../src/fonts/BoldenaBold-VGjmz.ttf');\n}\n\nh1 {\n  font-family: 'Boldena';\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./dist/output.css":
/*!*************************!*\
  !*** ./dist/output.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./output.css */ "./node_modules/css-loader/dist/cjs.js!./dist/output.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/input.css":
/*!***********************!*\
  !*** ./src/input.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./input.css */ "./node_modules/css-loader/dist/cjs.js!./src/input.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonSelect": () => (/* binding */ buttonSelect),
/* harmony export */   "newTaskButton": () => (/* binding */ newTaskButton),
/* harmony export */   "rightCounters": () => (/* binding */ rightCounters),
/* harmony export */   "taskAdder": () => (/* binding */ taskAdder),
/* harmony export */   "taskButtonDeleter": () => (/* binding */ taskButtonDeleter),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/layout.js");



const rightCounters = (() => {
  let rightTask = 0;
  let taskArr = [];
  let selected = 0;
  return {rightTask, taskArr, selected};
})();

const rightTaskLocal = (toStore) => {
  const stored = localStorage.setItem('tasks', toStore);
  const retrieve = localStorage.getItem('tasks');
  return {stored, retrieve};
};

const rightLocalStorageCheck = (() => {
  if (localStorage.getItem('tasks')) {
    let toLoad = localStorage.getItem('tasks');
    let converted = JSON.parse(toLoad);
    let loaded = false;
    // console.log(converted);

    function loader() {
      if (loaded === false) {
        for (let i = 0; i < converted.length; i++) {
          for (let j = 0; j < converted[i].length; j++) {
            rightCounters.taskArr[i].push(converted[i][j]);
          }
      }
      // console.log(rightCounters.taskArr);
      loaded = true;
      }
    }

    // function updateStorage(newStorage) {
    //   toLoad = localStorage.getItem('tasks');
    //   converted = JSON.parse(toLoad);
    //   console.log(`New converted ${converted}`);
    // }

    function pin() {
      while (taskAdder.taskSpace.lastElementChild) {
        taskAdder.taskSpace.removeChild(taskAdder.taskSpace.lastChild);
        // console.log('ran');
      }

      for (let i = 0; i < rightLocalStorageCheck.converted[rightCounters.rightTask].length; i++) {
        const name = rightLocalStorageCheck.converted[rightCounters.rightTask][i][0];
        const des = rightLocalStorageCheck.converted[rightCounters.rightTask][i][1];
        const pri = rightLocalStorageCheck.converted[rightCounters.rightTask][i][2];
        const addTask = item(name, des, pri);
        // rightCounters.taskArr[rightCounters.rightTask].push([name, des, pri]);

        // console.log(rightLocalStorageCheck.converted);
        taskAdder.taskSpace.appendChild(addTask.newTask);
        // console.log('pinned');
      }
    }

    return {converted, loader, pin, toLoad};
  }
})();

const leftTaskGenerator = (() => {
  for (let i = 0; i < _task__WEBPACK_IMPORTED_MODULE_0__.counters.taskArr.length; i++) {
    rightCounters.taskArr.push([]);
    
  }
  // console.log(rightCounters.taskArr);
  // console.log(counters.taskArr);
  
})();

const textPiece = (id, text, type) => {
  const title = document.createElement('label');
  title.setAttribute('for', id);
  title.textContent = text;
  title.classList.add('text-xl')

  const name = document.createElement('input');
  name.type = type;
  name.name = id;
  name.setAttribute('id', id);
  name.classList.add('m-5', 'border', 'pl-1');

  return {title, name};
};

const textAreaPiece = (id, text, type) => {
  const title = document.createElement('label');
  title.setAttribute('for', id);
  title.textContent = text;
  title.classList.add('text-xl');

  const name = document.createElement(type);
  name.name = id;
  name.setAttribute('id', id);
  name.classList.add('m-5', 'border', 'pl-1');

  return {title, name};
};

const taskButton = (name, num) => {
  const task = document.createElement('button');
  const text = name;
  task.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-14', 'w-5/6', 'rounded-lg', 'flex-none', 'shadow-md', 'text-ellipsis', 'overflow-hidden', 'p-2', 'taskButton');
  task.textContent = text;
  const counter = num;

  return {task, counter, text};
};

const priority = () => {

  const priority = document.createElement('div');
  const priDrop = document.createElement('select');
  priority.classList.add('pb-5');
  priDrop.name = 'priority';
  const pri = document.createElement('option');
  pri.textContent = 'Priority';
  pri.selected = true;
  pri.disabled = true;
  pri.hidden = true;
  const low = document.createElement('option');
  low.textContent = 'Low';
  low.value = 'Low';
  const med = document.createElement('option');
  med.textContent = 'Medium';
  med.value = 'Medium';
  const high = document.createElement('option');
  high.textContent = 'High';
  high.value = 'High';
  priDrop.add(pri);
  priDrop.add(low);
  priDrop.add(med);
  priDrop.add(high);
  
  priority.appendChild(priDrop);
  return {priority, priDrop}
}

const taskForm = (() => {
  const form = document.createElement('form');
  form.classList.add('bg-slate-300', 'flex', 'flex-col', 'w-64', 'sm:w-80', 'items-center', 'p-5', 'absolute', 'top-10', 'left-auto', 'hidden', 'z-10', 'drop-shadow-xl');
  const title = textPiece('name', 'Task Name', 'text');
  const des = textAreaPiece('des', 'Description', 'textarea');
  const level = priority();
  const cancel = taskButton('Cancel', -2);
  cancel.task.classList.add('mt-5');
  cancel.task.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
  });

  const submit = taskButton('Add Task', -1);

  form.appendChild(title.title);
  form.appendChild(title.name);
  form.appendChild(des.title);
  form.appendChild(des.name);
  form.appendChild(level.priority);

  form.appendChild(submit.task);
  form.appendChild(cancel.task);
  return {form, submit, title, des, level};
})();

// Creates task item for the right area of the UI
const item = (title, description, priority) => {
  
const name = document.createElement('h2');
name.textContent = title;
const des = document.createElement('p');
des.textContent = description;
// const date = document.createElement('p');
// date.textContent = dueDate;
const pri = document.createElement('p');
pri.textContent = priority;

const newTask = document.createElement('div');
newTask.classList.add('flex', 'gap-5', 'flex-wrap', 'p-5', 'odd:bg-slate-200', 'even:bg-slate-100', 'hover:drop-shadow-lg');
const check = document.createElement('input');
check.type = 'checkbox';
newTask.appendChild(check);
newTask.appendChild(name);
newTask.appendChild(des);
// newTask.appendChild(date);
newTask.appendChild(pri);
return {newTask, name, des, pri};
};


const newTaskButton = (() => {
  const newTask = document.createElement('button');
  newTask.textContent = 'New Task +';
  newTask.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-14', 'w-40', 'rounded-lg', 'flex-none', 'shadow-md', 'text-ellipsis', 'overflow-hidden', 'p-2', 'taskButton', 'mb-5');
  newTask.addEventListener('click', () => {
    taskForm.form.classList.remove('hidden');
  });

  const taskTitle = document.createElement('h3');
  taskTitle.classList.add('text-3xl', 'my-5');
  taskTitle.textContent = 'Task Title';
  return {newTask, taskTitle};
})();

const buttonSelect = (() => {
  function isSelected() {
    if (rightCounters.selected > 0) {
      document.getElementById('main').classList.remove('bg-slate-400', 'hover:bg-slate-400');
      document.getElementById('main').removeAttribute('id');
      rightCounters.selected = 0;
      // console.log('function run');
    }
  }
  let idAssignBreaker = false;

  function buttonCheck() {
    for (let i = 0; i < _task__WEBPACK_IMPORTED_MODULE_0__.counters.taskArr.length; i++) {
      _task__WEBPACK_IMPORTED_MODULE_0__.counters.taskArr[i].task.addEventListener('click', () => {
        taskAdder.taskOuter.classList.remove('hidden');
        isSelected();

        // if (idAssignBreaker === true) {
        //   idAssignBreaker = false;
        //   return;
        // }
        
        _layout__WEBPACK_IMPORTED_MODULE_1__.core.top.classList.remove('hidden');
        _task__WEBPACK_IMPORTED_MODULE_0__.counters.taskArr[i].task.setAttribute('id', 'main');
        document.getElementById('main').classList.add('bg-slate-400', 'hover:bg-slate-400');
        rightCounters.selected++;
        rightCounters.rightTask = _task__WEBPACK_IMPORTED_MODULE_0__.counters.taskArr[i].counter;
        // rightLocalStorageCheck.updateStorage();
        rightLocalStorageCheck.pin();
        // console.log(rightCounters.rightTask);
        newTaskButton.taskTitle.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.counters.taskArr[i].text;
        taskButtonDeleter.deleteLeft();
      });
    }
  }
  return {buttonCheck, isSelected, idAssignBreaker};
})();

const taskAdder = (() => {
  const taskSpace = document.createElement('div');
  const taskOuter = document.createElement('div');
  taskOuter.classList.add('drop-shadow-xl', 'w-3/4');
  taskOuter.appendChild(taskSpace);
  
  taskForm.submit.task.addEventListener('click', (e) => {
    e.preventDefault();
    let value = taskForm.level.priDrop.value;
    console.log(`Priority is ${value}`);
    if (taskForm.title.name.value === '' || taskForm.des.name.value === '' || value === 'Priority') {
      alert('Please fill in all the information');
    } else {
      const newItem = item(taskForm.title.name.value, taskForm.des.name.value, value);
      rightCounters.taskArr[rightCounters.rightTask].push([taskForm.title.name.value, taskForm.des.name.value, value]);
      console.log(rightCounters.taskArr);
      let position = 0;

      for (let i = 0; i < rightCounters.taskArr[rightCounters.rightTask].length; i++) {
        position = i;
      }

      // need to add pin()
      rightLocalStorageCheck.loader();

      // taskSpace.appendChild(newItem.newTask);

      const itemStorage = rightTaskLocal(JSON.stringify(rightCounters.taskArr));
      console.log(`In storage we have ${itemStorage.retrieve}`);
      rightLocalStorageCheck.toLoad = localStorage.getItem('tasks');
      rightLocalStorageCheck.converted = JSON.parse(rightLocalStorageCheck.toLoad);
      console.log(rightLocalStorageCheck.converted);
      rightLocalStorageCheck.pin();
  
      taskForm.title.name.value = '';
      taskForm.des.name.value = '';
      taskForm.level.priDrop.value = 'Priority'
      taskForm.form.classList.add('hidden');
    }
  });
  return {taskSpace, taskOuter};
})();

const taskButtonDeleter = (() => {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('bg-red-400', 'hover:bg-red-200', 'text-xl', 'rounded-lg', 'px-5', 'py-2');

  function deleteLeft() {
    rightLocalStorageCheck.loader();
    deleteBtn.addEventListener('click', () => {

      // buttonSelect.isSelected();

      // counters.taskArr.splice(rightCounters.rightTask, 1);
      // rightCounters.taskArr.splice(rightCounters.rightTask, 1);

      // for (let i = 0; i < counters.taskArr.length; i++) {
      //   counters.taskArr[i].counter = i;
      // }
      
      _layout__WEBPACK_IMPORTED_MODULE_1__.core.top.classList.add('hidden');
      // while (taskAdder.taskOuter.lastElementChild) {
      //   taskAdder.taskOuter.removeChild(taskAdder.taskOuter.lastChild);
      //   console.log('ran');
      // }
      for (let i = 0; i < rightCounters.taskArr[rightCounters.rightTask].length; i++) {
        taskAdder.taskOuter.classList.add('hidden');
      }
      _task__WEBPACK_IMPORTED_MODULE_0__.counters.taskArr[rightCounters.rightTask].task.classList.add('hidden');
      _layout__WEBPACK_IMPORTED_MODULE_1__.side.addTask();
      // console.log(counters.taskArr);
      // console.log(rightCounters.taskArr);
    });
  }



  return {deleteBtn, deleteLeft};
})();



/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "area": () => (/* binding */ area),
/* harmony export */   "core": () => (/* binding */ core),
/* harmony export */   "side": () => (/* binding */ side),
/* harmony export */   "top": () => (/* binding */ top)
/* harmony export */ });
/* harmony import */ var _dist_output_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../dist/output.css */ "./dist/output.css");
/* harmony import */ var _src_input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/input.css */ "./src/input.css");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");






const top = (() => {
  const topBar = document.createElement('div');
  topBar.classList.add('bg-slate-200', 'drop-shadow-md', 'p-5', 'fixed', 'w-screen', 'top-0', 'z-10', 'flex', 'place-content-between');
  const taskDisplayButton = document.createElement('button');
  taskDisplayButton.textContent = '<';
  taskDisplayButton.classList.add('font-sans', 'text-3xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-18', 'w-14', 'rounded-lg', 'shadow-md', 'p-2', 'pb-3');
  let closed = false;
  taskDisplayButton.addEventListener('click', () => {
    if (closed === false) {
      taskDisplayButton.textContent = '>'
      closed = true;
      side.sideBar.classList.add('hidden');
    } else {
      taskDisplayButton.textContent = '<'
      side.sideBar.classList.remove('hidden');
      closed = false;
    }
  });

  const title = document.createElement('h1');
  title.classList.add('text-5xl');
  title.textContent = "Kimeru";
  title.addEventListener('click', () => {
    _task__WEBPACK_IMPORTED_MODULE_3__.clear.wipe();
    console.log('Local Storage Wiped');
  });
  topBar.appendChild(taskDisplayButton);
  topBar.appendChild(title);
  return {topBar};
})();



// Makes the side bar
const side = (() => {
  const sideBar = document.createElement('div');
  sideBar.classList.add('bg-slate-300', 'w-1/3', 'max-w-sm', 'h-screen', 'drop-shadow-md');
  const title = document.createElement('h2');
  title.textContent = 'Tasks';
  title.classList.add('text-center', 'font-sans', 'text-3xl', 'py-5');
  
  const tasks = document.createElement('div');
  tasks.setAttribute('id', 'taskButtons');
  tasks.classList.add('flex', 'flex-col', 'items-center', 'h-3/4', 'overflow-y-auto', 'pb-5', 'gap-5', 'scrollbar-hide');
  _task__WEBPACK_IMPORTED_MODULE_3__.plus.plus.task.classList.remove('p-2', 'h-14', 'w-5/6');
  _task__WEBPACK_IMPORTED_MODULE_3__.plus.plus.task.classList.add('px-2', 'h-8', 'pb-1');

  // console.log(counters.taskArr);
  let run = false;
  function addTask() {
    for ( let i = 0; i < _task__WEBPACK_IMPORTED_MODULE_3__.counters.taskArr.length; i++) {
      tasks.appendChild(_task__WEBPACK_IMPORTED_MODULE_3__.counters.taskArr[i].task);
    }
  }

  addTask();

  const titlePlusDiv = document.createElement('div');
  titlePlusDiv.classList.add('flex', 'gap-5', 'justify-center', 'items-center', 'pt-5');
  titlePlusDiv.appendChild(title);
  titlePlusDiv.appendChild(_task__WEBPACK_IMPORTED_MODULE_3__.plus.plus.task);

  sideBar.appendChild(titlePlusDiv);
  sideBar.appendChild(tasks);  
  return {sideBar, tasks, title, run, addTask};
})();

// TODO make factory to generate Task buttons


// Right area of the UI
const core = (() => {
  const area = document.createElement('div');
  // const taskSpace = document.createElement('div');
  const top = document.createElement('div');
  const topRow = document.createElement('div');
  topRow.classList.add('flex', 'gap-5', 'items-center');
  topRow.appendChild(_core__WEBPACK_IMPORTED_MODULE_2__.newTaskButton.taskTitle);
  topRow.appendChild(_core__WEBPACK_IMPORTED_MODULE_2__.taskButtonDeleter.deleteBtn);

  top.classList.add('flex', 'flex-col', 'items-center', 'self-center', 'hidden');

  top.appendChild(topRow);
  top.appendChild(_core__WEBPACK_IMPORTED_MODULE_2__.newTaskButton.newTask);

  area.appendChild(top);
  area.classList.add('h-3/4', 'w-screen', 'overflow-y-auto', 'p-5', 'flex', 'flex-col', 'items-center');
  area.appendChild(_task__WEBPACK_IMPORTED_MODULE_3__.form.form);
  area.appendChild(_core__WEBPACK_IMPORTED_MODULE_2__.taskForm.form);
  area.appendChild(_core__WEBPACK_IMPORTED_MODULE_2__.taskAdder.taskOuter);
  _core__WEBPACK_IMPORTED_MODULE_2__.buttonSelect.buttonCheck();

  return {area, top};
})();


// Combined left nav and right area
const area = (() => {
  const main = document.createElement('main');
  main.classList.add('flex', 'fixed', 'top-20');
  main.appendChild(side.sideBar);
  main.appendChild(core.area);

  return {main};

})();



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "counters": () => (/* binding */ counters),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "plus": () => (/* binding */ plus)
/* harmony export */ });
/* harmony import */ var _dist_output_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../dist/output.css */ "./dist/output.css");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./src/core.js");




const counters = (() => {
  let leftTask = 0;
  let taskArr = [];
  return {leftTask, taskArr};
})();

const clear = (() => {
  function wipe() {
    localStorage.clear();
  }

  return {wipe};
})();

// Creates a task button on the left side bar
const taskButton = (name, num) => {
  const task = document.createElement('button');
  const text = name;
  task.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-18', 'w-5/6', 'rounded-lg', 'flex-none', 'shadow-md', 'text-ellipsis', 'overflow-hidden', 'p-2', 'taskButton');
  task.textContent = text;
  const counter = num;

  return {task, counter, text};
};

const leftTaskLocal = (toStore) => {
  const stored = localStorage.setItem('title', toStore);
  const retrieve = localStorage.getItem('title');
  return {stored, retrieve};
};


const textPiece = (id, text, type) => {
  const title = document.createElement('label');
  title.setAttribute('for', id);
  title.textContent = text;
  title.classList.add('text-xl')

  const name = document.createElement('input');
  name.type = type;
  name.name = id;
  name.setAttribute('id', id);
  name.classList.add('m-5', 'border', 'pl-1');

  return {title, name};
};

const textAreaPiece = (id, text, type) => {
  const title = document.createElement('label');
  title.setAttribute('for', id);
  title.textContent = text;
  title.classList.add('text-xl');

  const name = document.createElement(type);
  name.name = id;
  name.setAttribute('id', id);
  name.classList.add('m-5', 'border', 'pl-1');

  return {title, name};
};


// Create form that sends info to the "item" factory
const form = (() => {

  const form = document.createElement('form');
  form.classList.add('bg-slate-300', 'drop-shadow-xl', 'flex', 'flex-col', 'w-64', 'sm:w-80', 'items-center', 'p-5', 'hidden', 'absolute', 'z-10', 'top-10', 'left-auto', 'border');

  const title = textPiece('name', 'New Task', 'text');
  const submit = taskButton('Add Task', -1);
  const cancel = taskButton('Cancel', -2);
  cancel.task.classList.add('mt-5');
  cancel.task.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
  });
  form.appendChild(title.title);
  form.appendChild(title.name);
  form.appendChild(submit.task);
  form.appendChild(cancel.task);
  return {form, submit, title};
})();

const leftLocalStorageCheck = (() => {
  if (localStorage.getItem('title')) {
    const toLoad = localStorage.getItem('title');
    const converted = JSON.parse(toLoad);
    // console.log(converted);
    for (let i = 0; i < converted.length; i++) {
      const addTask = taskButton(converted[i].text, converted[i].counter);
      counters.taskArr.push(addTask);
      counters.leftTask++;
    }
    // console.log(counters.taskArr);
    // append over in layout.js

    return {converted};
  }
})();

// receives info from "form"
// creates and adds task to right column
// clears textbox
const taskButtonMaker = (() => {
  form.submit.task.addEventListener('click', (e) => {
    e.preventDefault();
    if (form.title.name.value === '') {
      alert('Task must have a name');
    } else {
      const addTask = taskButton(form.title.name.value, counters.leftTask);
      counters.taskArr.push(addTask);
      _core__WEBPACK_IMPORTED_MODULE_2__.buttonSelect.buttonCheck();

      console.log(counters.taskArr);
      const storage = leftTaskLocal(JSON.stringify(counters.taskArr));
      _layout__WEBPACK_IMPORTED_MODULE_1__.side.tasks.appendChild(counters.taskArr[counters.leftTask].task);
      counters.leftTask++;
      _core__WEBPACK_IMPORTED_MODULE_2__.rightCounters.taskArr.push([]);
      console.log(_core__WEBPACK_IMPORTED_MODULE_2__.rightCounters.taskArr);
      // console.log(counters.taskArr);
      // console.log(storage.retrieve);
  
      //split into separate function later
      form.title.name.value = '';
      form.form.classList.add('hidden');
      return {storage};
    }
  

  });

})();

const plus = (() => {
  const plus = taskButton('+', -1);
  plus.task.addEventListener('click', (e) => {
    form.form.classList.remove('hidden');
  });
  return {plus};
})();



/***/ }),

/***/ "./src/fonts/BoldenaBold-VGjmz.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/BoldenaBold-VGjmz.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2a37a3d9c9a7f82178a.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");


document.body.appendChild(_layout__WEBPACK_IMPORTED_MODULE_0__.top.topBar);
document.body.appendChild(_layout__WEBPACK_IMPORTED_MODULE_0__.area.main);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sUUFBUSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFFBQVEsTUFBTSxTQUFTLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLFFBQVEsTUFBTSxZQUFZLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyw2V0FBNlcsMkJBQTJCLCtCQUEr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QUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0FxQzs7QUFFckMsMEJBQTBCLCtDQUFVO0FBQ3BDLDBCQUEwQiw4Q0FBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2ltZXJ1Ly4vZGlzdC9vdXRwdXQuY3NzIiwid2VicGFjazovL2tpbWVydS8uL3NyYy9pbnB1dC5jc3MiLCJ3ZWJwYWNrOi8va2ltZXJ1Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9raW1lcnUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2tpbWVydS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tpbWVydS8uL2Rpc3Qvb3V0cHV0LmNzcz9hNmE5Iiwid2VicGFjazovL2tpbWVydS8uL3NyYy9pbnB1dC5jc3M/ZWQ0NSIsIndlYnBhY2s6Ly9raW1lcnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2ltZXJ1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9raW1lcnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2ltZXJ1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2tpbWVydS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tpbWVydS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tpbWVydS8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL2tpbWVydS8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8va2ltZXJ1Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8va2ltZXJ1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tpbWVydS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9raW1lcnUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tpbWVydS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tpbWVydS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tpbWVydS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tpbWVydS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9raW1lcnUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va2ltZXJ1L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9raW1lcnUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9Cb2xkZW5hQm9sZC1WR2ptei50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMy4xIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovXFxuXFxuLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7XFxuICAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViO1xcbiAgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0O1xcbiAgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDtcXG4gIC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuICAvKiA0ICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXG4gIC8qIDUgKi9cXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7XFxuICAvKiA2ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxuICAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmO1xcbiAgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcblxcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5sZWZ0LWF1dG8ge1xcbiAgbGVmdDogYXV0bztcXG59XFxuXFxuLnRvcC0wIHtcXG4gIHRvcDogMHB4O1xcbn1cXG5cXG4udG9wLTEwIHtcXG4gIHRvcDogMi41cmVtO1xcbn1cXG5cXG4udG9wLTIwIHtcXG4gIHRvcDogNXJlbTtcXG59XFxuXFxuLnotMTAge1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiAxLjI1cmVtO1xcbn1cXG5cXG4ubXktNSB7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuLm1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuLm10LTUge1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaC0xNCB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLmgtM1xcXFwvNCB7XFxuICBoZWlnaHQ6IDc1JTtcXG59XFxuXFxuLmgtOCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udy0xXFxcXC8zIHtcXG4gIHdpZHRoOiAzMy4zMzMzMzMlO1xcbn1cXG5cXG4udy0xNCB7XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG4udy0zXFxcXC80IHtcXG4gIHdpZHRoOiA3NSU7XFxufVxcblxcbi53LTQwIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLnctNVxcXFwvNiB7XFxuICB3aWR0aDogODMuMzMzMzMzJTtcXG59XFxuXFxuLnctNjQge1xcbiAgd2lkdGg6IDE2cmVtO1xcbn1cXG5cXG4udy1zY3JlZW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWF4LXctc20ge1xcbiAgbWF4LXdpZHRoOiAyNHJlbTtcXG59XFxuXFxuLmZsZXgtbm9uZSB7XFxuICBmbGV4OiBub25lO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZXgtd3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGFjZS1jb250ZW50LWJldHdlZW4ge1xcbiAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nYXAtNSB7XFxuICBnYXA6IDEuMjVyZW07XFxufVxcblxcbi5zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5vdmVyZmxvdy1oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJmbG93LXktYXV0byB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGV4dC1lbGxpcHNpcyB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4uYmctcmVkLTQwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4IDExMyAxMTMgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1zbGF0ZS0xMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSAyNDUgMjQ5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctc2xhdGUtMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXNsYXRlLTMwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1zbGF0ZS00MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbn1cXG5cXG4ucHgtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnB4LTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcXG59XFxuXFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5weS01IHtcXG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XFxufVxcblxcbi5wYi0xIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXG5cXG4ucGItMyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLnBiLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XFxufVxcblxcbi5wbC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG59XFxuXFxuLnB0LTUge1xcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb250LXNhbnMge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG59XFxuXFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLnRleHQtNXhsIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuXFxuLnNoYWRvdy1tZCB7XFxuICAtLXR3LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgNHB4IDZweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG5cXG4uZHJvcC1zaGFkb3ctbWQge1xcbiAgLS10dy1kcm9wLXNoYWRvdzogZHJvcC1zaGFkb3coMCA0cHggM3B4IHJnYigwIDAgMCAvIDAuMDcpKSBkcm9wLXNoYWRvdygwIDJweCAycHggcmdiKDAgMCAwIC8gMC4wNikpO1xcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXG5cXG4uZHJvcC1zaGFkb3cteGwge1xcbiAgLS10dy1kcm9wLXNoYWRvdzogZHJvcC1zaGFkb3coMCAyMHB4IDEzcHggcmdiKDAgMCAwIC8gMC4wMykpIGRyb3Atc2hhZG93KDAgOHB4IDVweCByZ2IoMCAwIDAgLyAwLjA4KSk7XFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcblxcbi5zY3JvbGxiYXItaGlkZSB7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbi5zY3JvbGxiYXItaGlkZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0JvbGRlbmEnO1xcblxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ0JvbGRlbmEnO1xcbn1cXG5cXG4ub2RkXFxcXDpiZy1zbGF0ZS0yMDA6bnRoLWNoaWxkKG9kZCkge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uZXZlblxcXFw6Ymctc2xhdGUtMTAwOm50aC1jaGlsZChldmVuKSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxIDI0NSAyNDkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6YmctcmVkLTIwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0IDIwMiAyMDIgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6Ymctc2xhdGUtMjAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy1zbGF0ZS00MDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmRyb3Atc2hhZG93LWxnOmhvdmVyIHtcXG4gIC0tdHctZHJvcC1zaGFkb3c6IGRyb3Atc2hhZG93KDAgMTBweCA4cHggcmdiKDAgMCAwIC8gMC4wNCkpIGRyb3Atc2hhZG93KDAgNHB4IDNweCByZ2IoMCAwIDAgLyAwLjEpKTtcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuXFxuLmFjdGl2ZVxcXFw6Ymctc2xhdGUtNDAwOmFjdGl2ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgLnNtXFxcXDp3LTgwIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L291dHB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7O0FBRUQ7OztDQUdDOztBQUVEOzs7RUFHRSxzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLGVBQWU7RUFDZixNQUFNO0VBQ04sbUJBQW1CO0VBQ25CLE1BQU07RUFDTixxQkFBcUI7RUFDckIsTUFBTTtBQUNSOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7OztDQU9DOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTiw4QkFBOEI7RUFDOUIsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sY0FBYztLQUNYLFdBQVc7RUFDZCxNQUFNO0VBQ04sNE5BQTROO0VBQzVOLE1BQU07RUFDTiw2QkFBNkI7RUFDN0IsTUFBTTtFQUNOLCtCQUErQjtFQUMvQixNQUFNO0FBQ1I7O0FBRUE7OztDQUdDOztBQUVEO0VBQ0UsU0FBUztFQUNULE1BQU07RUFDTixvQkFBb0I7RUFDcEIsTUFBTTtBQUNSOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsTUFBTTtFQUNOLGNBQWM7RUFDZCxNQUFNO0VBQ04scUJBQXFCO0VBQ3JCLE1BQU07QUFDUjs7QUFFQTs7Q0FFQzs7QUFFRDtFQUNFLHlDQUF5QztVQUNqQyxpQ0FBaUM7QUFDM0M7O0FBRUE7O0NBRUM7O0FBRUQ7Ozs7OztFQU1FLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7O0NBRUM7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCOztBQUVBOztDQUVDOztBQUVEOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0NBR0M7O0FBRUQ7Ozs7RUFJRSwrR0FBK0c7RUFDL0csTUFBTTtFQUNOLGNBQWM7RUFDZCxN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aUw7QUFDbkw7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMy4xIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovXFxuXFxuLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7XFxuICAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViO1xcbiAgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0O1xcbiAgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDtcXG4gIC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuICAvKiA0ICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXG4gIC8qIDUgKi9cXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7XFxuICAvKiA2ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxuICAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmO1xcbiAgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcblxcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5sZWZ0LWF1dG8ge1xcbiAgbGVmdDogYXV0bztcXG59XFxuXFxuLnRvcC0wIHtcXG4gIHRvcDogMHB4O1xcbn1cXG5cXG4udG9wLTEwIHtcXG4gIHRvcDogMi41cmVtO1xcbn1cXG5cXG4udG9wLTIwIHtcXG4gIHRvcDogNXJlbTtcXG59XFxuXFxuLnotMTAge1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiAxLjI1cmVtO1xcbn1cXG5cXG4ubXktNSB7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuLm1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuLm10LTUge1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaC0xNCB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLmgtM1xcXFwvNCB7XFxuICBoZWlnaHQ6IDc1JTtcXG59XFxuXFxuLmgtOCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udy0xXFxcXC8zIHtcXG4gIHdpZHRoOiAzMy4zMzMzMzMlO1xcbn1cXG5cXG4udy0xNCB7XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG4udy0zXFxcXC80IHtcXG4gIHdpZHRoOiA3NSU7XFxufVxcblxcbi53LTQwIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLnctNVxcXFwvNiB7XFxuICB3aWR0aDogODMuMzMzMzMzJTtcXG59XFxuXFxuLnctNjQge1xcbiAgd2lkdGg6IDE2cmVtO1xcbn1cXG5cXG4udy1zY3JlZW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWF4LXctc20ge1xcbiAgbWF4LXdpZHRoOiAyNHJlbTtcXG59XFxuXFxuLmZsZXgtbm9uZSB7XFxuICBmbGV4OiBub25lO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZXgtd3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wbGFjZS1jb250ZW50LWJldHdlZW4ge1xcbiAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nYXAtNSB7XFxuICBnYXA6IDEuMjVyZW07XFxufVxcblxcbi5zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5vdmVyZmxvdy1oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJmbG93LXktYXV0byB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGV4dC1lbGxpcHNpcyB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4uYmctcmVkLTQwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4IDExMyAxMTMgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1zbGF0ZS0xMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSAyNDUgMjQ5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctc2xhdGUtMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXNsYXRlLTMwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1zbGF0ZS00MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbn1cXG5cXG4ucHgtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnB4LTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcXG59XFxuXFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5weS01IHtcXG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XFxufVxcblxcbi5wYi0xIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXG5cXG4ucGItMyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLnBiLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XFxufVxcblxcbi5wbC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG59XFxuXFxuLnB0LTUge1xcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb250LXNhbnMge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG59XFxuXFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLnRleHQtNXhsIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuXFxuLnNoYWRvdy1tZCB7XFxuICAtLXR3LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgNHB4IDZweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG5cXG4uZHJvcC1zaGFkb3ctbWQge1xcbiAgLS10dy1kcm9wLXNoYWRvdzogZHJvcC1zaGFkb3coMCA0cHggM3B4IHJnYigwIDAgMCAvIDAuMDcpKSBkcm9wLXNoYWRvdygwIDJweCAycHggcmdiKDAgMCAwIC8gMC4wNikpO1xcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXG5cXG4uZHJvcC1zaGFkb3cteGwge1xcbiAgLS10dy1kcm9wLXNoYWRvdzogZHJvcC1zaGFkb3coMCAyMHB4IDEzcHggcmdiKDAgMCAwIC8gMC4wMykpIGRyb3Atc2hhZG93KDAgOHB4IDVweCByZ2IoMCAwIDAgLyAwLjA4KSk7XFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcblxcbi5zY3JvbGxiYXItaGlkZSB7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbi5zY3JvbGxiYXItaGlkZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0JvbGRlbmEnO1xcblxcbiAgc3JjOiB1cmwoJy4uL3NyYy9mb250cy9Cb2xkZW5hQm9sZC1WR2ptei50dGYnKTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6ICdCb2xkZW5hJztcXG59XFxuXFxuLm9kZFxcXFw6Ymctc2xhdGUtMjAwOm50aC1jaGlsZChvZGQpIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmV2ZW5cXFxcOmJnLXNsYXRlLTEwMDpudGgtY2hpbGQoZXZlbikge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSAyNDUgMjQ5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLXJlZC0yMDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCAyMDIgMjAyIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLXNsYXRlLTIwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6Ymctc2xhdGUtNDAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpkcm9wLXNoYWRvdy1sZzpob3ZlciB7XFxuICAtLXR3LWRyb3Atc2hhZG93OiBkcm9wLXNoYWRvdygwIDEwcHggOHB4IHJnYigwIDAgMCAvIDAuMDQpKSBkcm9wLXNoYWRvdygwIDRweCAzcHggcmdiKDAgMCAwIC8gMC4xKSk7XFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcblxcbi5hY3RpdmVcXFxcOmJnLXNsYXRlLTQwMDphY3RpdmUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIC5zbVxcXFw6dy04MCB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvQm9sZGVuYUJvbGQtVkdqbXoudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQm9sZGVuYSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQm9sZGVuYSc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkLG9CQUFvQjtBQUNwQixtQkFBbUI7O0FBRW5CO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUE4QztBQUNoRDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdCb2xkZW5hJztcXG4gIHNyYzogdXJsKCcuLi9zcmMvZm9udHMvQm9sZGVuYUJvbGQtVkdqbXoudHRmJyk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQm9sZGVuYSc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdXRwdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdXRwdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjb3VudGVycyB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGNvcmUsIHNpZGUgfSBmcm9tIFwiLi9sYXlvdXRcIjtcblxuY29uc3QgcmlnaHRDb3VudGVycyA9ICgoKSA9PiB7XG4gIGxldCByaWdodFRhc2sgPSAwO1xuICBsZXQgdGFza0FyciA9IFtdO1xuICBsZXQgc2VsZWN0ZWQgPSAwO1xuICByZXR1cm4ge3JpZ2h0VGFzaywgdGFza0Fyciwgc2VsZWN0ZWR9O1xufSkoKTtcblxuY29uc3QgcmlnaHRUYXNrTG9jYWwgPSAodG9TdG9yZSkgPT4ge1xuICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCB0b1N0b3JlKTtcbiAgY29uc3QgcmV0cmlldmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbiAgcmV0dXJuIHtzdG9yZWQsIHJldHJpZXZlfTtcbn07XG5cbmNvbnN0IHJpZ2h0TG9jYWxTdG9yYWdlQ2hlY2sgPSAoKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHtcbiAgICBsZXQgdG9Mb2FkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJyk7XG4gICAgbGV0IGNvbnZlcnRlZCA9IEpTT04ucGFyc2UodG9Mb2FkKTtcbiAgICBsZXQgbG9hZGVkID0gZmFsc2U7XG4gICAgLy8gY29uc29sZS5sb2coY29udmVydGVkKTtcblxuICAgIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgICAgIGlmIChsb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udmVydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb252ZXJ0ZWRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHJpZ2h0Q291bnRlcnMudGFza0FycltpXS5wdXNoKGNvbnZlcnRlZFtpXVtqXSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2cocmlnaHRDb3VudGVycy50YXNrQXJyKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlU3RvcmFnZShuZXdTdG9yYWdlKSB7XG4gICAgLy8gICB0b0xvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbiAgICAvLyAgIGNvbnZlcnRlZCA9IEpTT04ucGFyc2UodG9Mb2FkKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGBOZXcgY29udmVydGVkICR7Y29udmVydGVkfWApO1xuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHBpbigpIHtcbiAgICAgIHdoaWxlICh0YXNrQWRkZXIudGFza1NwYWNlLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgdGFza0FkZGVyLnRhc2tTcGFjZS5yZW1vdmVDaGlsZCh0YXNrQWRkZXIudGFza1NwYWNlLmxhc3RDaGlsZCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyYW4nKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaWdodExvY2FsU3RvcmFnZUNoZWNrLmNvbnZlcnRlZFtyaWdodENvdW50ZXJzLnJpZ2h0VGFza10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJpZ2h0TG9jYWxTdG9yYWdlQ2hlY2suY29udmVydGVkW3JpZ2h0Q291bnRlcnMucmlnaHRUYXNrXVtpXVswXTtcbiAgICAgICAgY29uc3QgZGVzID0gcmlnaHRMb2NhbFN0b3JhZ2VDaGVjay5jb252ZXJ0ZWRbcmlnaHRDb3VudGVycy5yaWdodFRhc2tdW2ldWzFdO1xuICAgICAgICBjb25zdCBwcmkgPSByaWdodExvY2FsU3RvcmFnZUNoZWNrLmNvbnZlcnRlZFtyaWdodENvdW50ZXJzLnJpZ2h0VGFza11baV1bMl07XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBpdGVtKG5hbWUsIGRlcywgcHJpKTtcbiAgICAgICAgLy8gcmlnaHRDb3VudGVycy50YXNrQXJyW3JpZ2h0Q291bnRlcnMucmlnaHRUYXNrXS5wdXNoKFtuYW1lLCBkZXMsIHByaV0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJpZ2h0TG9jYWxTdG9yYWdlQ2hlY2suY29udmVydGVkKTtcbiAgICAgICAgdGFza0FkZGVyLnRhc2tTcGFjZS5hcHBlbmRDaGlsZChhZGRUYXNrLm5ld1Rhc2spO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncGlubmVkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjb252ZXJ0ZWQsIGxvYWRlciwgcGluLCB0b0xvYWR9O1xuICB9XG59KSgpO1xuXG5jb25zdCBsZWZ0VGFza0dlbmVyYXRvciA9ICgoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRlcnMudGFza0Fyci5sZW5ndGg7IGkrKykge1xuICAgIHJpZ2h0Q291bnRlcnMudGFza0Fyci5wdXNoKFtdKTtcbiAgICBcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhyaWdodENvdW50ZXJzLnRhc2tBcnIpO1xuICAvLyBjb25zb2xlLmxvZyhjb3VudGVycy50YXNrQXJyKTtcbiAgXG59KSgpO1xuXG5jb25zdCB0ZXh0UGllY2UgPSAoaWQsIHRleHQsIHR5cGUpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJylcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZS50eXBlID0gdHlwZTtcbiAgbmFtZS5uYW1lID0gaWQ7XG4gIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCdtLTUnLCAnYm9yZGVyJywgJ3BsLTEnKTtcblxuICByZXR1cm4ge3RpdGxlLCBuYW1lfTtcbn07XG5cbmNvbnN0IHRleHRBcmVhUGllY2UgPSAoaWQsIHRleHQsIHR5cGUpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJyk7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIG5hbWUubmFtZSA9IGlkO1xuICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgnbS01JywgJ2JvcmRlcicsICdwbC0xJyk7XG5cbiAgcmV0dXJuIHt0aXRsZSwgbmFtZX07XG59O1xuXG5jb25zdCB0YXNrQnV0dG9uID0gKG5hbWUsIG51bSkgPT4ge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHRleHQgPSBuYW1lO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtc2FucycsICd0ZXh0LXhsJywgJ2JnLXNsYXRlLTEwMCcsICdob3ZlcjpiZy1zbGF0ZS0yMDAnLCAnYWN0aXZlOmJnLXNsYXRlLTQwMCcgLCAnaC0xNCcsICd3LTUvNicsICdyb3VuZGVkLWxnJywgJ2ZsZXgtbm9uZScsICdzaGFkb3ctbWQnLCAndGV4dC1lbGxpcHNpcycsICdvdmVyZmxvdy1oaWRkZW4nLCAncC0yJywgJ3Rhc2tCdXR0b24nKTtcbiAgdGFzay50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGNvbnN0IGNvdW50ZXIgPSBudW07XG5cbiAgcmV0dXJuIHt0YXNrLCBjb3VudGVyLCB0ZXh0fTtcbn07XG5cbmNvbnN0IHByaW9yaXR5ID0gKCkgPT4ge1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByaURyb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncGItNScpO1xuICBwcmlEcm9wLm5hbWUgPSAncHJpb3JpdHknO1xuICBjb25zdCBwcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgcHJpLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgcHJpLnNlbGVjdGVkID0gdHJ1ZTtcbiAgcHJpLmRpc2FibGVkID0gdHJ1ZTtcbiAgcHJpLmhpZGRlbiA9IHRydWU7XG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBsb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgbG93LnZhbHVlID0gJ0xvdyc7XG4gIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBtZWQudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgbWVkLnZhbHVlID0gJ01lZGl1bSc7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgaGlnaC52YWx1ZSA9ICdIaWdoJztcbiAgcHJpRHJvcC5hZGQocHJpKTtcbiAgcHJpRHJvcC5hZGQobG93KTtcbiAgcHJpRHJvcC5hZGQobWVkKTtcbiAgcHJpRHJvcC5hZGQoaGlnaCk7XG4gIFxuICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlEcm9wKTtcbiAgcmV0dXJuIHtwcmlvcml0eSwgcHJpRHJvcH1cbn1cblxuY29uc3QgdGFza0Zvcm0gPSAoKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2JnLXNsYXRlLTMwMCcsICdmbGV4JywgJ2ZsZXgtY29sJywgJ3ctNjQnLCAnc206dy04MCcsICdpdGVtcy1jZW50ZXInLCAncC01JywgJ2Fic29sdXRlJywgJ3RvcC0xMCcsICdsZWZ0LWF1dG8nLCAnaGlkZGVuJywgJ3otMTAnLCAnZHJvcC1zaGFkb3cteGwnKTtcbiAgY29uc3QgdGl0bGUgPSB0ZXh0UGllY2UoJ25hbWUnLCAnVGFzayBOYW1lJywgJ3RleHQnKTtcbiAgY29uc3QgZGVzID0gdGV4dEFyZWFQaWVjZSgnZGVzJywgJ0Rlc2NyaXB0aW9uJywgJ3RleHRhcmVhJyk7XG4gIGNvbnN0IGxldmVsID0gcHJpb3JpdHkoKTtcbiAgY29uc3QgY2FuY2VsID0gdGFza0J1dHRvbignQ2FuY2VsJywgLTIpO1xuICBjYW5jZWwudGFzay5jbGFzc0xpc3QuYWRkKCdtdC01Jyk7XG4gIGNhbmNlbC50YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gdGFza0J1dHRvbignQWRkIFRhc2snLCAtMSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZS50aXRsZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUubmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzLnRpdGxlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXMubmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGV2ZWwucHJpb3JpdHkpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LnRhc2spO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbC50YXNrKTtcbiAgcmV0dXJuIHtmb3JtLCBzdWJtaXQsIHRpdGxlLCBkZXMsIGxldmVsfTtcbn0pKCk7XG5cbi8vIENyZWF0ZXMgdGFzayBpdGVtIGZvciB0aGUgcmlnaHQgYXJlYSBvZiB0aGUgVUlcbmNvbnN0IGl0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkgPT4ge1xuICBcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xubmFtZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuY29uc3QgZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuZGVzLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4vLyBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuLy8gZGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5jb25zdCBwcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5wcmkudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmV3VGFzay5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2dhcC01JywgJ2ZsZXgtd3JhcCcsICdwLTUnLCAnb2RkOmJnLXNsYXRlLTIwMCcsICdldmVuOmJnLXNsYXRlLTEwMCcsICdob3Zlcjpkcm9wLXNoYWRvdy1sZycpO1xuY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG5uZXdUYXNrLmFwcGVuZENoaWxkKGNoZWNrKTtcbm5ld1Rhc2suYXBwZW5kQ2hpbGQobmFtZSk7XG5uZXdUYXNrLmFwcGVuZENoaWxkKGRlcyk7XG4vLyBuZXdUYXNrLmFwcGVuZENoaWxkKGRhdGUpO1xubmV3VGFzay5hcHBlbmRDaGlsZChwcmkpO1xucmV0dXJuIHtuZXdUYXNrLCBuYW1lLCBkZXMsIHByaX07XG59O1xuXG5cbmNvbnN0IG5ld1Rhc2tCdXR0b24gPSAoKCkgPT4ge1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Rhc2sudGV4dENvbnRlbnQgPSAnTmV3IFRhc2sgKyc7XG4gIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnZm9udC1zYW5zJywgJ3RleHQteGwnLCAnYmctc2xhdGUtMTAwJywgJ2hvdmVyOmJnLXNsYXRlLTIwMCcsICdhY3RpdmU6Ymctc2xhdGUtNDAwJyAsICdoLTE0JywgJ3ctNDAnLCAncm91bmRlZC1sZycsICdmbGV4LW5vbmUnLCAnc2hhZG93LW1kJywgJ3RleHQtZWxsaXBzaXMnLCAnb3ZlcmZsb3ctaGlkZGVuJywgJ3AtMicsICd0YXNrQnV0dG9uJywgJ21iLTUnKTtcbiAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRm9ybS5mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9KTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGV4dC0zeGwnLCAnbXktNScpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSAnVGFzayBUaXRsZSc7XG4gIHJldHVybiB7bmV3VGFzaywgdGFza1RpdGxlfTtcbn0pKCk7XG5cbmNvbnN0IGJ1dHRvblNlbGVjdCA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGlzU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHJpZ2h0Q291bnRlcnMuc2VsZWN0ZWQgPiAwKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXNsYXRlLTQwMCcsICdob3ZlcjpiZy1zbGF0ZS00MDAnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgcmlnaHRDb3VudGVycy5zZWxlY3RlZCA9IDA7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZnVuY3Rpb24gcnVuJyk7XG4gICAgfVxuICB9XG4gIGxldCBpZEFzc2lnbkJyZWFrZXIgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBidXR0b25DaGVjaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ZXJzLnRhc2tBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvdW50ZXJzLnRhc2tBcnJbaV0udGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0FkZGVyLnRhc2tPdXRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgaXNTZWxlY3RlZCgpO1xuXG4gICAgICAgIC8vIGlmIChpZEFzc2lnbkJyZWFrZXIgPT09IHRydWUpIHtcbiAgICAgICAgLy8gICBpZEFzc2lnbkJyZWFrZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIGNvcmUudG9wLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBjb3VudGVycy50YXNrQXJyW2ldLnRhc2suc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuY2xhc3NMaXN0LmFkZCgnYmctc2xhdGUtNDAwJywgJ2hvdmVyOmJnLXNsYXRlLTQwMCcpO1xuICAgICAgICByaWdodENvdW50ZXJzLnNlbGVjdGVkKys7XG4gICAgICAgIHJpZ2h0Q291bnRlcnMucmlnaHRUYXNrID0gY291bnRlcnMudGFza0FycltpXS5jb3VudGVyO1xuICAgICAgICAvLyByaWdodExvY2FsU3RvcmFnZUNoZWNrLnVwZGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgcmlnaHRMb2NhbFN0b3JhZ2VDaGVjay5waW4oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmlnaHRDb3VudGVycy5yaWdodFRhc2spO1xuICAgICAgICBuZXdUYXNrQnV0dG9uLnRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGNvdW50ZXJzLnRhc2tBcnJbaV0udGV4dDtcbiAgICAgICAgdGFza0J1dHRvbkRlbGV0ZXIuZGVsZXRlTGVmdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7YnV0dG9uQ2hlY2ssIGlzU2VsZWN0ZWQsIGlkQXNzaWduQnJlYWtlcn07XG59KSgpO1xuXG5jb25zdCB0YXNrQWRkZXIgPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza091dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tPdXRlci5jbGFzc0xpc3QuYWRkKCdkcm9wLXNoYWRvdy14bCcsICd3LTMvNCcpO1xuICB0YXNrT3V0ZXIuYXBwZW5kQ2hpbGQodGFza1NwYWNlKTtcbiAgXG4gIHRhc2tGb3JtLnN1Ym1pdC50YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHZhbHVlID0gdGFza0Zvcm0ubGV2ZWwucHJpRHJvcC52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhgUHJpb3JpdHkgaXMgJHt2YWx1ZX1gKTtcbiAgICBpZiAodGFza0Zvcm0udGl0bGUubmFtZS52YWx1ZSA9PT0gJycgfHwgdGFza0Zvcm0uZGVzLm5hbWUudmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnUHJpb3JpdHknKSB7XG4gICAgICBhbGVydCgnUGxlYXNlIGZpbGwgaW4gYWxsIHRoZSBpbmZvcm1hdGlvbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdJdGVtID0gaXRlbSh0YXNrRm9ybS50aXRsZS5uYW1lLnZhbHVlLCB0YXNrRm9ybS5kZXMubmFtZS52YWx1ZSwgdmFsdWUpO1xuICAgICAgcmlnaHRDb3VudGVycy50YXNrQXJyW3JpZ2h0Q291bnRlcnMucmlnaHRUYXNrXS5wdXNoKFt0YXNrRm9ybS50aXRsZS5uYW1lLnZhbHVlLCB0YXNrRm9ybS5kZXMubmFtZS52YWx1ZSwgdmFsdWVdKTtcbiAgICAgIGNvbnNvbGUubG9nKHJpZ2h0Q291bnRlcnMudGFza0Fycik7XG4gICAgICBsZXQgcG9zaXRpb24gPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0Q291bnRlcnMudGFza0FycltyaWdodENvdW50ZXJzLnJpZ2h0VGFza10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHRvIGFkZCBwaW4oKVxuICAgICAgcmlnaHRMb2NhbFN0b3JhZ2VDaGVjay5sb2FkZXIoKTtcblxuICAgICAgLy8gdGFza1NwYWNlLmFwcGVuZENoaWxkKG5ld0l0ZW0ubmV3VGFzayk7XG5cbiAgICAgIGNvbnN0IGl0ZW1TdG9yYWdlID0gcmlnaHRUYXNrTG9jYWwoSlNPTi5zdHJpbmdpZnkocmlnaHRDb3VudGVycy50YXNrQXJyKSk7XG4gICAgICBjb25zb2xlLmxvZyhgSW4gc3RvcmFnZSB3ZSBoYXZlICR7aXRlbVN0b3JhZ2UucmV0cmlldmV9YCk7XG4gICAgICByaWdodExvY2FsU3RvcmFnZUNoZWNrLnRvTG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuICAgICAgcmlnaHRMb2NhbFN0b3JhZ2VDaGVjay5jb252ZXJ0ZWQgPSBKU09OLnBhcnNlKHJpZ2h0TG9jYWxTdG9yYWdlQ2hlY2sudG9Mb2FkKTtcbiAgICAgIGNvbnNvbGUubG9nKHJpZ2h0TG9jYWxTdG9yYWdlQ2hlY2suY29udmVydGVkKTtcbiAgICAgIHJpZ2h0TG9jYWxTdG9yYWdlQ2hlY2sucGluKCk7XG4gIFxuICAgICAgdGFza0Zvcm0udGl0bGUubmFtZS52YWx1ZSA9ICcnO1xuICAgICAgdGFza0Zvcm0uZGVzLm5hbWUudmFsdWUgPSAnJztcbiAgICAgIHRhc2tGb3JtLmxldmVsLnByaURyb3AudmFsdWUgPSAnUHJpb3JpdHknXG4gICAgICB0YXNrRm9ybS5mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7dGFza1NwYWNlLCB0YXNrT3V0ZXJ9O1xufSkoKTtcblxuY29uc3QgdGFza0J1dHRvbkRlbGV0ZXIgPSAoKCkgPT4ge1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYmctcmVkLTQwMCcsICdob3ZlcjpiZy1yZWQtMjAwJywgJ3RleHQteGwnLCAncm91bmRlZC1sZycsICdweC01JywgJ3B5LTInKTtcblxuICBmdW5jdGlvbiBkZWxldGVMZWZ0KCkge1xuICAgIHJpZ2h0TG9jYWxTdG9yYWdlQ2hlY2subG9hZGVyKCk7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAvLyBidXR0b25TZWxlY3QuaXNTZWxlY3RlZCgpO1xuXG4gICAgICAvLyBjb3VudGVycy50YXNrQXJyLnNwbGljZShyaWdodENvdW50ZXJzLnJpZ2h0VGFzaywgMSk7XG4gICAgICAvLyByaWdodENvdW50ZXJzLnRhc2tBcnIuc3BsaWNlKHJpZ2h0Q291bnRlcnMucmlnaHRUYXNrLCAxKTtcblxuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudGVycy50YXNrQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAgIGNvdW50ZXJzLnRhc2tBcnJbaV0uY291bnRlciA9IGk7XG4gICAgICAvLyB9XG4gICAgICBcbiAgICAgIGNvcmUudG9wLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgLy8gd2hpbGUgKHRhc2tBZGRlci50YXNrT3V0ZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgLy8gICB0YXNrQWRkZXIudGFza091dGVyLnJlbW92ZUNoaWxkKHRhc2tBZGRlci50YXNrT3V0ZXIubGFzdENoaWxkKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ3JhbicpO1xuICAgICAgLy8gfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaWdodENvdW50ZXJzLnRhc2tBcnJbcmlnaHRDb3VudGVycy5yaWdodFRhc2tdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhc2tBZGRlci50YXNrT3V0ZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgICBjb3VudGVycy50YXNrQXJyW3JpZ2h0Q291bnRlcnMucmlnaHRUYXNrXS50YXNrLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgc2lkZS5hZGRUYXNrKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjb3VudGVycy50YXNrQXJyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJpZ2h0Q291bnRlcnMudGFza0Fycik7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgcmV0dXJuIHtkZWxldGVCdG4sIGRlbGV0ZUxlZnR9O1xufSkoKTtcblxuZXhwb3J0IHtyaWdodENvdW50ZXJzLCBidXR0b25TZWxlY3QsIG5ld1Rhc2tCdXR0b24sIHRhc2tGb3JtLCB0YXNrQWRkZXIsIHRhc2tCdXR0b25EZWxldGVyfTsiLCJpbXBvcnQgJy9kaXN0L291dHB1dC5jc3MnO1xuaW1wb3J0ICcvc3JjL2lucHV0LmNzcyc7XG5pbXBvcnQgeyBidXR0b25TZWxlY3QsIG5ld1Rhc2tCdXR0b24sIHRhc2tGb3JtLCB0YXNrQWRkZXIsIHRhc2tCdXR0b25EZWxldGVyIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7IHBsdXMsIGNsZWFyLCBjb3VudGVycywgZm9ybSAgfSBmcm9tICcuL3Rhc2snO1xuXG5cbmNvbnN0IHRvcCA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b3BCYXIuY2xhc3NMaXN0LmFkZCgnYmctc2xhdGUtMjAwJywgJ2Ryb3Atc2hhZG93LW1kJywgJ3AtNScsICdmaXhlZCcsICd3LXNjcmVlbicsICd0b3AtMCcsICd6LTEwJywgJ2ZsZXgnLCAncGxhY2UtY29udGVudC1iZXR3ZWVuJyk7XG4gIGNvbnN0IHRhc2tEaXNwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRhc2tEaXNwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xuICB0YXNrRGlzcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb250LXNhbnMnLCAndGV4dC0zeGwnLCAnYmctc2xhdGUtMTAwJywgJ2hvdmVyOmJnLXNsYXRlLTIwMCcsICdhY3RpdmU6Ymctc2xhdGUtNDAwJyAsICdoLTE4JywgJ3ctMTQnLCAncm91bmRlZC1sZycsICdzaGFkb3ctbWQnLCAncC0yJywgJ3BiLTMnKTtcbiAgbGV0IGNsb3NlZCA9IGZhbHNlO1xuICB0YXNrRGlzcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY2xvc2VkID09PSBmYWxzZSkge1xuICAgICAgdGFza0Rpc3BsYXlCdXR0b24udGV4dENvbnRlbnQgPSAnPidcbiAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICBzaWRlLnNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tEaXNwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gJzwnXG4gICAgICBzaWRlLnNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBjbG9zZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGV4dC01eGwnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIktpbWVydVwiO1xuICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhci53aXBlKCk7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIFN0b3JhZ2UgV2lwZWQnKTtcbiAgfSk7XG4gIHRvcEJhci5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheUJ1dHRvbik7XG4gIHRvcEJhci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJldHVybiB7dG9wQmFyfTtcbn0pKCk7XG5cblxuXG4vLyBNYWtlcyB0aGUgc2lkZSBiYXJcbmNvbnN0IHNpZGUgPSAoKCkgPT4ge1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnYmctc2xhdGUtMzAwJywgJ3ctMS8zJywgJ21heC13LXNtJywgJ2gtc2NyZWVuJywgJ2Ryb3Atc2hhZG93LW1kJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGFza3MnO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNlbnRlcicsICdmb250LXNhbnMnLCAndGV4dC0zeGwnLCAncHktNScpO1xuICBcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3Muc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrQnV0dG9ucycpO1xuICB0YXNrcy5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ2l0ZW1zLWNlbnRlcicsICdoLTMvNCcsICdvdmVyZmxvdy15LWF1dG8nLCAncGItNScsICdnYXAtNScsICdzY3JvbGxiYXItaGlkZScpO1xuICBwbHVzLnBsdXMudGFzay5jbGFzc0xpc3QucmVtb3ZlKCdwLTInLCAnaC0xNCcsICd3LTUvNicpO1xuICBwbHVzLnBsdXMudGFzay5jbGFzc0xpc3QuYWRkKCdweC0yJywgJ2gtOCcsICdwYi0xJyk7XG5cbiAgLy8gY29uc29sZS5sb2coY291bnRlcnMudGFza0Fycik7XG4gIGxldCBydW4gPSBmYWxzZTtcbiAgZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjb3VudGVycy50YXNrQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXNrcy5hcHBlbmRDaGlsZChjb3VudGVycy50YXNrQXJyW2ldLnRhc2spO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRhc2soKTtcblxuICBjb25zdCB0aXRsZVBsdXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVQbHVzRGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZ2FwLTUnLCAnanVzdGlmeS1jZW50ZXInLCAnaXRlbXMtY2VudGVyJywgJ3B0LTUnKTtcbiAgdGl0bGVQbHVzRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGVQbHVzRGl2LmFwcGVuZENoaWxkKHBsdXMucGx1cy50YXNrKTtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKHRpdGxlUGx1c0Rpdik7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQodGFza3MpOyAgXG4gIHJldHVybiB7c2lkZUJhciwgdGFza3MsIHRpdGxlLCBydW4sIGFkZFRhc2t9O1xufSkoKTtcblxuLy8gVE9ETyBtYWtlIGZhY3RvcnkgdG8gZ2VuZXJhdGUgVGFzayBidXR0b25zXG5cblxuLy8gUmlnaHQgYXJlYSBvZiB0aGUgVUlcbmNvbnN0IGNvcmUgPSAoKCkgPT4ge1xuICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIGNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdG9wUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvcFJvdy5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2dhcC01JywgJ2l0ZW1zLWNlbnRlcicpO1xuICB0b3BSb3cuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbi50YXNrVGl0bGUpO1xuICB0b3BSb3cuYXBwZW5kQ2hpbGQodGFza0J1dHRvbkRlbGV0ZXIuZGVsZXRlQnRuKTtcblxuICB0b3AuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICdpdGVtcy1jZW50ZXInLCAnc2VsZi1jZW50ZXInLCAnaGlkZGVuJyk7XG5cbiAgdG9wLmFwcGVuZENoaWxkKHRvcFJvdyk7XG4gIHRvcC5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uLm5ld1Rhc2spO1xuXG4gIGFyZWEuYXBwZW5kQ2hpbGQodG9wKTtcbiAgYXJlYS5jbGFzc0xpc3QuYWRkKCdoLTMvNCcsICd3LXNjcmVlbicsICdvdmVyZmxvdy15LWF1dG8nLCAncC01JywgJ2ZsZXgnLCAnZmxleC1jb2wnLCAnaXRlbXMtY2VudGVyJyk7XG4gIGFyZWEuYXBwZW5kQ2hpbGQoZm9ybS5mb3JtKTtcbiAgYXJlYS5hcHBlbmRDaGlsZCh0YXNrRm9ybS5mb3JtKTtcbiAgYXJlYS5hcHBlbmRDaGlsZCh0YXNrQWRkZXIudGFza091dGVyKTtcbiAgYnV0dG9uU2VsZWN0LmJ1dHRvbkNoZWNrKCk7XG5cbiAgcmV0dXJuIHthcmVhLCB0b3B9O1xufSkoKTtcblxuXG4vLyBDb21iaW5lZCBsZWZ0IG5hdiBhbmQgcmlnaHQgYXJlYVxuY29uc3QgYXJlYSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmaXhlZCcsICd0b3AtMjAnKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChzaWRlLnNpZGVCYXIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvcmUuYXJlYSk7XG5cbiAgcmV0dXJuIHttYWlufTtcblxufSkoKTtcblxuZXhwb3J0IHt0b3AsIGNvcmUsIGFyZWEsIHNpZGV9OyIsImltcG9ydCAnL2Rpc3Qvb3V0cHV0LmNzcyc7XG5pbXBvcnQgeyBzaWRlIH0gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHsgYnV0dG9uU2VsZWN0LCByaWdodENvdW50ZXJzIH0gZnJvbSAnLi9jb3JlJztcblxuY29uc3QgY291bnRlcnMgPSAoKCkgPT4ge1xuICBsZXQgbGVmdFRhc2sgPSAwO1xuICBsZXQgdGFza0FyciA9IFtdO1xuICByZXR1cm4ge2xlZnRUYXNrLCB0YXNrQXJyfTtcbn0pKCk7XG5cbmNvbnN0IGNsZWFyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gd2lwZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxuXG4gIHJldHVybiB7d2lwZX07XG59KSgpO1xuXG4vLyBDcmVhdGVzIGEgdGFzayBidXR0b24gb24gdGhlIGxlZnQgc2lkZSBiYXJcbmNvbnN0IHRhc2tCdXR0b24gPSAobmFtZSwgbnVtKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgdGV4dCA9IG5hbWU7XG4gIHRhc2suY2xhc3NMaXN0LmFkZCgnZm9udC1zYW5zJywgJ3RleHQteGwnLCAnYmctc2xhdGUtMTAwJywgJ2hvdmVyOmJnLXNsYXRlLTIwMCcsICdhY3RpdmU6Ymctc2xhdGUtNDAwJyAsICdoLTE4JywgJ3ctNS82JywgJ3JvdW5kZWQtbGcnLCAnZmxleC1ub25lJywgJ3NoYWRvdy1tZCcsICd0ZXh0LWVsbGlwc2lzJywgJ292ZXJmbG93LWhpZGRlbicsICdwLTInLCAndGFza0J1dHRvbicpO1xuICB0YXNrLnRleHRDb250ZW50ID0gdGV4dDtcbiAgY29uc3QgY291bnRlciA9IG51bTtcblxuICByZXR1cm4ge3Rhc2ssIGNvdW50ZXIsIHRleHR9O1xufTtcblxuY29uc3QgbGVmdFRhc2tMb2NhbCA9ICh0b1N0b3JlKSA9PiB7XG4gIGNvbnN0IHN0b3JlZCA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aXRsZScsIHRvU3RvcmUpO1xuICBjb25zdCByZXRyaWV2ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aXRsZScpO1xuICByZXR1cm4ge3N0b3JlZCwgcmV0cmlldmV9O1xufTtcblxuXG5jb25zdCB0ZXh0UGllY2UgPSAoaWQsIHRleHQsIHR5cGUpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJylcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZS50eXBlID0gdHlwZTtcbiAgbmFtZS5uYW1lID0gaWQ7XG4gIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCdtLTUnLCAnYm9yZGVyJywgJ3BsLTEnKTtcblxuICByZXR1cm4ge3RpdGxlLCBuYW1lfTtcbn07XG5cbmNvbnN0IHRleHRBcmVhUGllY2UgPSAoaWQsIHRleHQsIHR5cGUpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJyk7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIG5hbWUubmFtZSA9IGlkO1xuICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgnbS01JywgJ2JvcmRlcicsICdwbC0xJyk7XG5cbiAgcmV0dXJuIHt0aXRsZSwgbmFtZX07XG59O1xuXG5cbi8vIENyZWF0ZSBmb3JtIHRoYXQgc2VuZHMgaW5mbyB0byB0aGUgXCJpdGVtXCIgZmFjdG9yeVxuY29uc3QgZm9ybSA9ICgoKSA9PiB7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdiZy1zbGF0ZS0zMDAnLCAnZHJvcC1zaGFkb3cteGwnLCAnZmxleCcsICdmbGV4LWNvbCcsICd3LTY0JywgJ3NtOnctODAnLCAnaXRlbXMtY2VudGVyJywgJ3AtNScsICdoaWRkZW4nLCAnYWJzb2x1dGUnLCAnei0xMCcsICd0b3AtMTAnLCAnbGVmdC1hdXRvJywgJ2JvcmRlcicpO1xuXG4gIGNvbnN0IHRpdGxlID0gdGV4dFBpZWNlKCduYW1lJywgJ05ldyBUYXNrJywgJ3RleHQnKTtcbiAgY29uc3Qgc3VibWl0ID0gdGFza0J1dHRvbignQWRkIFRhc2snLCAtMSk7XG4gIGNvbnN0IGNhbmNlbCA9IHRhc2tCdXR0b24oJ0NhbmNlbCcsIC0yKTtcbiAgY2FuY2VsLnRhc2suY2xhc3NMaXN0LmFkZCgnbXQtNScpO1xuICBjYW5jZWwudGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0pO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlLnRpdGxlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZS5uYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQudGFzayk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLnRhc2spO1xuICByZXR1cm4ge2Zvcm0sIHN1Ym1pdCwgdGl0bGV9O1xufSkoKTtcblxuY29uc3QgbGVmdExvY2FsU3RvcmFnZUNoZWNrID0gKCgpID0+IHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aXRsZScpKSB7XG4gICAgY29uc3QgdG9Mb2FkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpdGxlJyk7XG4gICAgY29uc3QgY29udmVydGVkID0gSlNPTi5wYXJzZSh0b0xvYWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbnZlcnRlZCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb252ZXJ0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFkZFRhc2sgPSB0YXNrQnV0dG9uKGNvbnZlcnRlZFtpXS50ZXh0LCBjb252ZXJ0ZWRbaV0uY291bnRlcik7XG4gICAgICBjb3VudGVycy50YXNrQXJyLnB1c2goYWRkVGFzayk7XG4gICAgICBjb3VudGVycy5sZWZ0VGFzaysrO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhjb3VudGVycy50YXNrQXJyKTtcbiAgICAvLyBhcHBlbmQgb3ZlciBpbiBsYXlvdXQuanNcblxuICAgIHJldHVybiB7Y29udmVydGVkfTtcbiAgfVxufSkoKTtcblxuLy8gcmVjZWl2ZXMgaW5mbyBmcm9tIFwiZm9ybVwiXG4vLyBjcmVhdGVzIGFuZCBhZGRzIHRhc2sgdG8gcmlnaHQgY29sdW1uXG4vLyBjbGVhcnMgdGV4dGJveFxuY29uc3QgdGFza0J1dHRvbk1ha2VyID0gKCgpID0+IHtcbiAgZm9ybS5zdWJtaXQudGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtLnRpdGxlLm5hbWUudmFsdWUgPT09ICcnKSB7XG4gICAgICBhbGVydCgnVGFzayBtdXN0IGhhdmUgYSBuYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFkZFRhc2sgPSB0YXNrQnV0dG9uKGZvcm0udGl0bGUubmFtZS52YWx1ZSwgY291bnRlcnMubGVmdFRhc2spO1xuICAgICAgY291bnRlcnMudGFza0Fyci5wdXNoKGFkZFRhc2spO1xuICAgICAgYnV0dG9uU2VsZWN0LmJ1dHRvbkNoZWNrKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGNvdW50ZXJzLnRhc2tBcnIpO1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IGxlZnRUYXNrTG9jYWwoSlNPTi5zdHJpbmdpZnkoY291bnRlcnMudGFza0FycikpO1xuICAgICAgc2lkZS50YXNrcy5hcHBlbmRDaGlsZChjb3VudGVycy50YXNrQXJyW2NvdW50ZXJzLmxlZnRUYXNrXS50YXNrKTtcbiAgICAgIGNvdW50ZXJzLmxlZnRUYXNrKys7XG4gICAgICByaWdodENvdW50ZXJzLnRhc2tBcnIucHVzaChbXSk7XG4gICAgICBjb25zb2xlLmxvZyhyaWdodENvdW50ZXJzLnRhc2tBcnIpO1xuICAgICAgLy8gY29uc29sZS5sb2coY291bnRlcnMudGFza0Fycik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlLnJldHJpZXZlKTtcbiAgXG4gICAgICAvL3NwbGl0IGludG8gc2VwYXJhdGUgZnVuY3Rpb24gbGF0ZXJcbiAgICAgIGZvcm0udGl0bGUubmFtZS52YWx1ZSA9ICcnO1xuICAgICAgZm9ybS5mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgcmV0dXJuIHtzdG9yYWdlfTtcbiAgICB9XG4gIFxuXG4gIH0pO1xuXG59KSgpO1xuXG5jb25zdCBwbHVzID0gKCgpID0+IHtcbiAgY29uc3QgcGx1cyA9IHRhc2tCdXR0b24oJysnLCAtMSk7XG4gIHBsdXMudGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZm9ybS5mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9KTtcbiAgcmV0dXJuIHtwbHVzfTtcbn0pKCk7XG5cbmV4cG9ydCB7Zm9ybSwgcGx1cywgY2xlYXIsIGNvdW50ZXJzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHRvcCwgYXJlYSB9IGZyb20gJy4vbGF5b3V0JztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3AudG9wQmFyKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXJlYS5tYWluKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=