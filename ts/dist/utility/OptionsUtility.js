"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = options;
function options(ctx) {
    const { options, utility } = ctx;
    const struct = utility.struct;
    const setprop = struct.setprop;
    let opts = { ...(options || {}) };
    const customUtils = opts.utility || {};
    for (let key of Object.keys(customUtils)) {
        setprop(utility, key, customUtils[key]);
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
        }
    };
    // JavaScript specific option values.
    optspec.system.fetch = opts.system?.fetch || global.fetch;
    opts = merge([{}, cfgopts, opts]);
    opts = validate(opts, optspec);
    return opts;
}
//# sourceMappingURL=OptionsUtility.js.map