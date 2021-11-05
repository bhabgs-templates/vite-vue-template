var vitevuu = (function (exports, axios) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    /*
     * @abstract: JianJie
     * @version: 0.0.1
     * @Author: bhabgs
     * @Date: 2020-12-02 11:21:27
     * @LastEditors: bhabgs
     * @LastEditTime: 2021-02-24 09:44:31
     */
    var getQueryUrl = function () {
        return window.location.search.substr(1) || window.location.hash.split('?')[1];
    };
    var getQueryString = function (name, search) {
        search = search || getQueryUrl();
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = search.match(reg);
        if (r != null)
            return unescape(r[2]);
        return '';
    };
    var getAllQuery = function (s) {
        var queryData = {};
        var src = s || getQueryUrl();
        if (!src) {
            return queryData;
        }
        src = src.split('&');
        for (var _i = 0, src_1 = src; _i < src_1.length; _i++) {
            var i = src_1[_i];
            var oneQuery = i.split('=');
            // eslint-disable-next-line prefer-destructuring
            queryData[oneQuery[0]] = oneQuery[1];
        }
        return queryData;
    };

    /*
     * @abstract: JianJie
     * @version: 0.0.1
     * @Author: bhabgs
     * @Date: 2021-02-24 11:15:54
     * @LastEditors: bhabgs
     * @LastEditTime: 2021-02-24 11:19:34
     */
    // 深拷贝
    var deepCopy = function (source) {
        var target = Array.isArray(source) ? [] : {};
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (typeof source[key] === 'object' && source[key] !== null) {
                    target[key] = deepCopy(source[key]);
                }
                else {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    // 转为unicode 编码
    function encodeUnicode(str) {
        var res = [];
        for (var i = 0; i < str.length; i += 1) {
            res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
        }
        return "\\u" + res.join('\\u');
    }
    // 解码
    function decodeUnicode(str) {
        str = str.replace(/\\/g, '%');
        return unescape(str);
    }
    // 生成id
    var guid = function () {
        return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
    };
    var platForm = function () {
        var phoneMatch = /phone|iPhone|Moto|SM|Pixel/;
        var padMatch = /pad|iPod|Mobile/;
        if (navigator.userAgent.match(phoneMatch))
            return 'app';
        if (navigator.userAgent.match(padMatch))
            return 'pad';
        return 'web';
    };

    var clientType = 'app';
    var headers = {
        'X-Custom-Header': 'foobar',
        clientType: clientType,
        platForm: platForm(),
        'Content-Type': 'application/json;charset=UTF-8',
    };
    var instance = axios__default['default'].create({
        baseURL: '/api/',
        timeout: 60000,
        validateStatus: function (status) {
            if (status > 400 && status < 500) {
                console.error("\u8BF7\u6C42\u5931\u8D25. status:" + status);
            }
            return status < 500;
        },
        headers: headers,
    });
    var getToken = function () {
        return "Bearer " + sessionStorage.getItem('token');
    };
    instance.interceptors.request.use(function (conf) {
        var corpId = sessionStorage.getItem('corpId');
        conf.headers.Authorization = getToken();
        if (corpId) {
            conf.headers.corpId = corpId;
        }
        return conf;
    }, function (err) {
        return Promise.reject(err);
    });
    var status = false;
    instance.interceptors.response.use(function (res) { return __awaiter(void 0, void 0, void 0, function () {
        var resData;
        return __generator(this, function (_a) {
            resData = res.data;
            status = resData.code === 'M0000';
            if (status) {
                return [2 /*return*/, Promise.resolve(resData)];
            }
            if (resData.code === 'O_T_001' && !getAllQuery().prevpath) ;
            return [2 /*return*/, Promise.resolve(resData)];
        });
    }); }, function (err) {
        return Promise.reject(err);
    });

    var _a = getAllQuery(), netType = _a.netType, corpId = _a.corpId;
    var config = {
        netType: netType || 1,
    };
    var checkUser = {
        // 检查用户信息
        checkToken: function (token) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            token = token || window.sessionStorage.getItem('token') || '';
                            if (!token)
                                return [2 /*return*/, this.baseCallData('failure', null, 'token不存在')];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, instance.get("/auth/oauth/check_token?token=" + token)];
                        case 2:
                            res = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _a.sent();
                            return [2 /*return*/, this.baseCallData('failure', res, 'token检查失败.')];
                        case 4: return [2 /*return*/, this.baseCallData('ok', res, 'token有效')];
                    }
                });
            });
        },
        getTokenByCode: function (code) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, instance.get("/auth/oauth/getTokenByCode?code=" + code + "&netType=" + config.netType)];
                        case 1:
                            res = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, this.baseCallData('failure', res, 'token检查失败. 接口请求错误 500+')];
                        case 3:
                            if (res.code === 'M0000') {
                                window.sessionStorage.setItem('token', res.data.access_token);
                                window.sessionStorage.setItem('rf_token', res.data.refresh_token);
                            }
                            else {
                                return [2 /*return*/, this.baseCallData('failure', res, "token\u68C0\u67E5\u5931\u8D25. \u63A5\u53E3\u8FD4\u56DE\u9519\u8BEF code:" + res.code)];
                            }
                            return [2 /*return*/, this.baseCallData('ok', res, 'token有效')];
                    }
                });
            });
        },
        check: function (checkCorpId) {
            return __awaiter(this, void 0, void 0, function () {
                var res, sessionCorpId, userCode;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.checkToken()];
                        case 1:
                            res = _a.sent();
                            sessionCorpId = sessionStorage.getItem('corpId');
                            if (!(res.type === 'failure')) return [3 /*break*/, 3];
                            userCode = getAllQuery().userCode;
                            if (!userCode)
                                return [2 /*return*/, this.baseCallData('failure', {}, '客户端没有传递userCode')];
                            return [4 /*yield*/, this.getTokenByCode(userCode)];
                        case 2:
                            res = _a.sent();
                            _a.label = 3;
                        case 3:
                            if (!corpId && !sessionCorpId && checkCorpId) {
                                return [2 /*return*/, this.baseCallData('failure', {}, '客户端没有传递corpId')];
                            }
                            window.sessionStorage.setItem('corpId', corpId || sessionCorpId);
                            return [2 /*return*/, res];
                    }
                });
            });
        },
        baseCallData: function (type, data, msg) {
            // Promise.reject
            return Promise.resolve({ type: type, data: data, msg: msg });
        },
        refreshToken: function (cb) {
            return __awaiter(this, void 0, void 0, function () {
                var rfToken, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            rfToken = sessionStorage.getItem('rf_token');
                            return [4 /*yield*/, instance.get("/refresh/token?refresh_token=" + rfToken)];
                        case 1:
                            res = _a.sent();
                            sessionStorage.setItem('token', res.data.access_token);
                            sessionStorage.setItem('rf_token', res.data.refresh_token);
                            if (cb)
                                cb();
                            return [2 /*return*/, this.baseCallData('ok', res, '')];
                    }
                });
            });
        },
    };

    /*
     * @abstract: JianJie
     * @version: 0.0.1
     * @Author: bhabgs
     * @Date: 2021-02-21 16:56:15
     * @LastEditors: bhabgs
     * @LastEditTime: 2021-02-26 10:54:34
     */
    var _default = {
        axios: axios__default['default'],
        instance: instance,
        getAllQuery: getAllQuery,
        getQueryString: getQueryString,
        platForm: platForm,
        checkUser: checkUser,
        deepCopy: deepCopy,
        decodeUnicode: decodeUnicode,
        encodeUnicode: encodeUnicode,
        guid: guid,
    };

    Object.defineProperty(exports, 'axios', {
        enumerable: true,
        get: function () {
            return axios__default['default'];
        }
    });
    exports.checkUser = checkUser;
    exports.decodeUnicode = decodeUnicode;
    exports.deepCopy = deepCopy;
    exports.default = _default;
    exports.encodeUnicode = encodeUnicode;
    exports.getAllQuery = getAllQuery;
    exports.getQueryString = getQueryString;
    exports.guid = guid;
    exports.instance = instance;
    exports.platForm = platForm;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, axios));
