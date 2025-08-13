"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = options;
function options(ctx) {
    const utility = ctx.utility;
    const options = ctx.options;
    const struct = utility.struct;
    let opts = { ...(options || {}) };
    const customUtils = opts.utility || {};
    for (let key of Object.keys(customUtils)) {
        struct.setprop(utility, key, customUtils[key]);
    }
    const { merge, validate } = utility.struct;
    let config = ctx.config || {};
    let cfgopts = config.options || {};
    // Standard SDK option values.
    const optspec = {
        apikey: '',
        base: 'http://localhost:8000',
        prefix: '',
        suffix: '',
        auth: {
            prefix: ''
        },
        headers: {
            '`$CHILD`': '`$STRING`'
        },
        allow: {
            method: 'GET,PUT,POST,PATCH,DELETE,OPTIONS',
            op: 'create,update,load,list,remove,command,direct'
        },
        entity: {
            '`$CHILD`': {
                '`$OPEN`': true,
                active: false,
                alias: {}
            }
        },
        feature: {
            '`$CHILD`': {
                '`$OPEN`': true,
                active: false,
            }
        },
        utility: {},
        system: {
            fetch: undefined
        },
        test: {
            active: false,
            entity: {
                '`$OPEN`': true,
            }
        },
        clean: {
            keys: 'key,token,id'
        }
    };
    // JavaScript specific option values.
    optspec.system.fetch = opts.system?.fetch || global.fetch;
    opts = merge([{}, cfgopts, opts]);
    opts = validate(opts, optspec);
    opts.__derived__ = {
        clean: {
            keyre: undefined
        }
    };
    const keyre = opts.clean.keys
        .split(/\s*,\s*/)
        .filter((s) => null != s && '' !== s)
        .map((key) => struct.escre(key)).join('|');
    if ('' != keyre) {
        opts.__derived__.clean.keyre = keyre;
    }
    return opts;
}
//# sourceMappingURL=OptionsUtility.js.map