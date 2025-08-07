"use strict";
/* Utility functions.
 *
 * Many of these functions expect the operation context as the first argument, and
 * assume the following top level properties of the context:
 *   * client: SDK client instance
 *   * op: operation definition
 *   * utility: map of these utility functions
 *   * entity?: SDK entity instance
 *   * spec?: request specification
 *   * response?: unprocessed response
 *   * result?: processed result built from response
 *   * config?: SDK builtin configuration
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const AddfeatureUtility_1 = require("./AddfeatureUtility");
const AuthUtility_1 = require("./AuthUtility");
const BodyUtility_1 = require("./BodyUtility");
const CleanUtility_1 = require("./CleanUtility");
const ContextUtility_1 = require("./ContextUtility");
const DoneUtility_1 = require("./DoneUtility");
const ErrorUtility_1 = require("./ErrorUtility");
const FeaturehookUtility_1 = require("./FeaturehookUtility");
const FetcherUtility_1 = require("./FetcherUtility");
const FindparamUtility_1 = require("./FindparamUtility");
const FullurlUtility_1 = require("./FullurlUtility");
const HeadersUtility_1 = require("./HeadersUtility");
const InitfeatureUtility_1 = require("./InitfeatureUtility");
const MethodUtility_1 = require("./MethodUtility");
const OperatorUtility_1 = require("./OperatorUtility");
const OptionsUtility_1 = require("./OptionsUtility");
const ParamsUtility_1 = require("./ParamsUtility");
const QueryUtility_1 = require("./QueryUtility");
const ReqformUtility_1 = require("./ReqformUtility");
const RequestUtility_1 = require("./RequestUtility");
const ResbasicUtility_1 = require("./ResbasicUtility");
const ResbodyUtility_1 = require("./ResbodyUtility");
const ResformUtility_1 = require("./ResformUtility");
const ResheadersUtility_1 = require("./ResheadersUtility");
const ResponseUtility_1 = require("./ResponseUtility");
const ResultUtility_1 = require("./ResultUtility");
const SpecUtility_1 = require("./SpecUtility");
const StructUtility_1 = require("./StructUtility");
class Utility {
    addfeature = AddfeatureUtility_1.addfeature;
    auth = AuthUtility_1.auth;
    body = BodyUtility_1.body;
    clean = CleanUtility_1.clean;
    contextify = ContextUtility_1.contextify;
    done = DoneUtility_1.done;
    error = ErrorUtility_1.error;
    featurehook = FeaturehookUtility_1.featurehook;
    fetcher = FetcherUtility_1.fetcher;
    findparam = FindparamUtility_1.findparam;
    fullurl = FullurlUtility_1.fullurl;
    headers = HeadersUtility_1.headers;
    initfeature = InitfeatureUtility_1.initfeature;
    method = MethodUtility_1.method;
    operator = OperatorUtility_1.operator;
    opify = OperatorUtility_1.opify;
    options = OptionsUtility_1.options;
    params = ParamsUtility_1.params;
    query = QueryUtility_1.query;
    reqform = ReqformUtility_1.reqform;
    request = RequestUtility_1.request;
    resbasic = ResbasicUtility_1.resbasic;
    resbody = ResbodyUtility_1.resbody;
    resform = ResformUtility_1.resform;
    resheaders = ResheadersUtility_1.resheaders;
    response = ResponseUtility_1.response;
    result = ResultUtility_1.result;
    spec = SpecUtility_1.spec;
    struct = new StructUtility_1.StructUtility();
}
exports.Utility = Utility;
//# sourceMappingURL=Utility.js.map