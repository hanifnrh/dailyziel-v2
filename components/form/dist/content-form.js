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
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var use_toast_1 = require("@/components/ui/use-toast");
var add_1 = require("@/utils/action/add");
var react_icons_1 = require("@radix-ui/react-icons");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var ContentForm = function (_a) {
    var user = _a.user;
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var toast = use_toast_1.useToast().toast;
    console.log("User in ContentForm:", user);
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formData, userId, response, formElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    formData = new FormData(e.currentTarget);
                    userId = user.id;
                    return [4 /*yield*/, add_1.addContent(formData, userId)];
                case 1:
                    response = _a.sent();
                    formElement = document.getElementById("content-form");
                    if (formElement) {
                        formElement.reset();
                    }
                    // Handle response
                    if (response === null || response === void 0 ? void 0 : response.error) {
                        console.error(response.error);
                        toast({
                            title: "Failed to send message",
                            description: response.error
                        });
                    }
                    else if (response.data) {
                        toast({
                            title: "Content sent!",
                            description: response.data
                        });
                    }
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("form", { className: "mt-2 flex w-full flex-col", onSubmit: handleSubmit, id: "content-form" },
        React.createElement("p", { className: "mb-2 text-balance body-light text-sm text-zinc-500" },
            "Signed in as ",
            React.createElement("span", { className: "text-zinc-200" }, user.email)),
        React.createElement("div", { className: "flex items-center gap-x-2" },
            React.createElement(input_1.Input, { placeholder: "", name: "content", id: "content", type: "text" }),
            React.createElement(button_1.Button, { disabled: loading, type: "submit", className: "w-fit anim aspect-square border px-2 py-2 text-purple-600 bg-purple-600/20" },
                "Send",
                loading ? (React.createElement(react_icons_1.SymbolIcon, { className: "h-4 w-4 animate-spin" })) : (React.createElement(lucide_react_1.Send, { className: "h-4 w-4" }))))));
};
exports["default"] = ContentForm;
