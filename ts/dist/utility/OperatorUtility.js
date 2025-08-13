"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opify = opify;
exports.operator = operator;
const StructUtility_1 = require("./StructUtility");
const OPKIND = {
    create: 'req',
    update: 'req',
    remove: 'req',
    load: 'res',
    list: 'res',
};
function opify(opmap) {
    const validate = (0, StructUtility_1.getprop)(opmap, 'validate', {});
    const op = {
        name: (0, StructUtility_1.getprop)(opmap, 'name', '_'),
        kind: (0, StructUtility_1.getprop)(opmap, 'kind', '_'),
        path: (0, StructUtility_1.getprop)(opmap, 'path', '_'),
        pathalt: (0, StructUtility_1.getprop)(opmap, 'pathalt', []),
        entity: (0, StructUtility_1.getprop)(opmap, 'entity', '_'),
        reqform: (0, StructUtility_1.getprop)(opmap, 'reqform', '_'),
        resform: (0, StructUtility_1.getprop)(opmap, 'resform', '_'),
        validate: {
            params: (0, StructUtility_1.getprop)(validate, 'params', { '`$OPEN`': true }),
        },
        params: (0, StructUtility_1.getprop)(opmap, 'params', []),
        alias: (0, StructUtility_1.getprop)(opmap, 'alias', {}),
        state: (0, StructUtility_1.getprop)(opmap, 'state', {}),
        check: (0, StructUtility_1.getprop)(opmap, 'check', {}),
    };
    return op;
}
// Ensure standard operation definition.
function operator(ctx) {
    if (ctx.out.operator) {
        return ctx.out.operator;
    }
    const { op, utility, options } = ctx;
    const { validate } = utility.struct;
    if (!options.allow.op.includes(op.name)) {
        return Error('Operation "' + op.name +
            '" not allowed by SDK option allow.op value: "' + options.allow.op + '"');
    }
    const opspec = {
        // Required.
        name: '`$STRING`',
        kind: ['`$ONE`', 'req', 'res'],
        path: '`$STRING`',
        entity: '`$STRING`',
        reqform: ['`$ONE`', '`$STRING`', '`$OBJECT`', '`$ARRAY`', '`$FUNCTION`'],
        resform: ['`$ONE`', '`$STRING`', '`$OBJECT`', '`$ARRAY`', '`$FUNCTION`'],
        validate: {
            params: '`$OBJECT`'
        },
        // Optional.
        pathalt: ['`$CHILD`', {
                path: '`$STRING`',
                '`$OPEN`': true,
                // '`$CHILD`': '`$BOOLEAN`'
            }],
        params: ['`$CHILD`', '`$STRING`'],
        alias: { '`$CHILD`': '`$STRING`' },
        state: {},
        check: {},
    };
    ctx.op.kind = OPKIND[op.name];
    const opv = ctx.op.validate;
    ctx.op = validate(ctx.op, opspec);
    ctx.op.validate = opv;
    if (ctx.ctrl.explain) {
        ctx.ctrl.explain.op = ctx.op;
    }
    return ctx.op;
}
//# sourceMappingURL=OperatorUtility.js.map