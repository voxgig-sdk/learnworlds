"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
const HEADER_auth = 'authorization';
const OPTION_apikey = 'apikey';
const NOTFOUND = '';
function auth(ctx) {
    const utility = ctx.utility;
    const struct = utility.struct;
    const getprop = struct.getprop;
    const setprop = struct.setprop;
    const delprop = struct.delprop;
    const client = ctx.client;
    const spec = ctx.spec;
    const headers = spec.headers;
    const options = client.options();
    const apikey = getprop(options, OPTION_apikey, NOTFOUND);
    if (NOTFOUND === apikey) {
        delprop(headers, HEADER_auth);
    }
    else {
        setprop(headers, HEADER_auth, options.auth.prefix + ' ' + apikey);
    }
    return spec;
}
//# sourceMappingURL=AuthUtility.js.map