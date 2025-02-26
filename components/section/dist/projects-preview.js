"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var spotlight_button_1 = require("../ui/spotlight-button");
var HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL;
function ProjectsAll() {
    var _a = react_1.useState([]), projects = _a[0], setProjects = _a[1];
    react_1.useEffect(function () {
        function fetchProjects() {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var response, json;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, fetch(HYGRAPH_ENDPOINT, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer " + process.env.NEXT_PUBLIC_HYGRAPH_TOKEN
                                },
                                body: JSON.stringify({
                                    query: "\n                        query GetProjects {\n                            projects(where: { featured: true }, orderBy: publishDate_DESC) {\n                                title\n                                description\n                                slug\n                                tag\n                                publishDate\n                                featuredImage {\n                                    url\n                                }\n                            }\n                        }\n                    "
                                })
                            })];
                        case 1:
                            response = _c.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            json = _c.sent();
                            setProjects((_b = (_a = json === null || json === void 0 ? void 0 : json.data) === null || _a === void 0 ? void 0 : _a.projects) !== null && _b !== void 0 ? _b : []);
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchProjects();
    }, []);
    return (React.createElement("div", null,
        React.createElement("div", { className: "z-10" },
            React.createElement("div", { className: "px-8 md:px-20 2xl:px-52 py-5" },
                React.createElement("h2", { className: "flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit" },
                    React.createElement(lucide_react_1.Pickaxe, { className: "mr-2" }),
                    "Projects")),
            React.createElement("div", { className: "relative px-8 md:px-20 2xl:px-52 pb-10 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between" },
                React.createElement("div", { className: "sm:w-2/3 xl:w-1/2 flex flex-col gap-4" },
                    React.createElement("h3", { className: "flex text-4xl sm:text-3xl lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]" }, "Design-Driven Development"),
                    React.createElement("p", { className: "text-zinc-500 body-light text-md lg:text-lg" }, "These projects highlight my journey of merging aesthetics with functionality. Started as a visual enthusiast, I went through many challenges to build functional yet visually pleasing projects.")),
                React.createElement(link_1["default"], { href: "/projects", rel: "canonical", className: "sm:w-1/3 xl:w-1/2 text-zinc-200 flex justify-start items-start sm:justify-end" },
                    React.createElement(spotlight_button_1.SpotlightButton, null))),
            React.createElement("div", { className: "relative flex flex-col items-center px-8 md:px-20 2xl:px-52 pb-20 bg-background", id: "projects" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-8 items-start" }, projects.map(function (project) { return (React.createElement(link_1["default"], { rel: "canonical", key: project.slug, href: "/projects/" + project.slug, className: "group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200" },
                    React.createElement("div", { className: "overflow-hidden rounded-xl" },
                        React.createElement(image_1["default"], { src: project.featuredImage.url, width: 1000, height: 1000, className: "w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all", alt: project.title })),
                    React.createElement("div", { className: "flex flex-wrap gap-2 text-xs body-light text-zinc-400 items-center" }, project.tag.map(function (tag, index) { return (React.createElement("p", { key: index, className: "bg-zinc-200/10 px-3 py-2 text-xs rounded-sm" }, tag)); })),
                    React.createElement("h3", { className: "text-xl sm:text-2xl" }, project.title),
                    React.createElement("p", { className: "body-light text-sm text-zinc-500" }, project.description),
                    React.createElement("div", { className: "flex justify-between w-full text-purple-600 mt-2 sm:mt-4 " },
                        React.createElement("p", { className: "link-hover-animation group-hover:link-hovered-animation w-fit text-sm" },
                            "View details",
                            React.createElement(lucide_react_1.ArrowRight, { className: 'ml-1 inline-block transition-all duration-300 group-hover:ml-2' }))))); }))))));
}
exports["default"] = ProjectsAll;
