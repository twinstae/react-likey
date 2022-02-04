"use strict";
// import puppeteer from "puppeteer";
// import { NaverApp } from "trackpurchase";
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
// import readline from "readline";
// const printNaverPayHistory = async (id: string, password: string) => {
//   const MOBILE_UA =
//     "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1";
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ["--start-maximized"]
//   });
//   const page = await browser.newPage();
//   await page.setViewport({ height: 800, width: 1200 });
//   await page.setUserAgent(MOBILE_UA);
//   const module = NaverApp.ModuleFactory.create(page);
//   const crawlService = new NaverApp.Service(module);
//   await crawlService.login(id, password);
//   const history = await crawlService.getHistory();
//   console.log(history);
// };
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const id = "sugar9438";
// const password = "sugar9438#n";
// rl.question("Naver ID: ", (id) => {
//   rl.question("Naver Password: ", (password) => {
//     printNaverPayHistory(id, password);
//   });
// });
// import { launch } from "puppeteer";
var puppeteer_1 = require("puppeteer");
// import * as puppeteer from "puppeteer";
var trackpurchase_1 = require("trackpurchase");
var readline = require("readline");
var rxjs_1 = require("rxjs");
// import { CaptchaStatus } from "app/naver";
var printNaverPayHistory = function (id, password) { return __awaiter(void 0, void 0, void 0, function () {
    var MOBILE_UA, browser, page, module, crawlService, loginEvent$, history$, closePage$, closeBrowser$, final$;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                MOBILE_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1";
                return [4 /*yield*/, puppeteer_1["default"].launch({
                        headless: false,
                        args: ["--start-maximized"]
                    })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.setViewport({ height: 800, width: 1200 })];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.setUserAgent(MOBILE_UA)];
            case 4:
                _a.sent();
                module = trackpurchase_1.NaverApp.ModuleFactory.create(page);
                crawlService = new trackpurchase_1.NaverApp.Service(module);
                loginEvent$ = crawlService.interactiveLogin(id, password);
                history$ = (0, rxjs_1.defer)(function () { return (0, rxjs_1.from)(crawlService.getHistory()); });
                closePage$ = (0, rxjs_1.defer)(function () { return (0, rxjs_1.from)(page.close()); });
                closeBrowser$ = (0, rxjs_1.defer)(function () { return (0, rxjs_1.from)(browser.close()); });
                final$ = (0, rxjs_1.concat)(loginEvent$, history$, closePage$, closeBrowser$).pipe((0, rxjs_1.tap)(function (event) {
                    if (event === "otp-required") {
                        console.log("스마트폰 앱에서 OTP 인증을 완료해주세요.");
                    }
                }), (0, rxjs_1.tap)(function (event) {
                    if (event === "manual-otp-required") {
                        rl.question("otp code: ", function (code) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                module.pageInteractor.fillManualOTPInput(code);
                                return [2 /*return*/];
                            });
                        }); });
                    }
                }), (0, rxjs_1.tap)(function (event) {
                    function instanceOfCaptchaStatus(object) {
                        if (object) {
                            return "imageData" in object && "question" in object;
                        }
                        return false;
                    }
                    if (instanceOfCaptchaStatus(event)) {
                        console.log("encodedImage: ".concat(event.imageData));
                        console.log("question: ".concat(event.question));
                        rl.question("captcha code: ", function (code) {
                            module.pageInteractor.fillCaptchaInput(code, password);
                        });
                    }
                }), (0, rxjs_1.filter)(function (event) { return event instanceof Array; }));
                final$.subscribe(function (event) {
                    console.log(event);
                });
                return [2 /*return*/];
        }
    });
}); };
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Naver ID: ", function (id) {
    rl.question("Naver Password: ", function (password) {
        printNaverPayHistory(id, password);
    });
});
