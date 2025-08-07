"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityOperation = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const struct_1 = require("@voxgig/struct");
const utility_ts_1 = require("./utility_ts");
const EntityOperation = (0, sdkgen_1.cmp)(function Operation(props) {
    const { model } = props.ctx$;
    const { ff, opname, entity, entrep } = props;
    let { indent } = props;
    indent = indent.substring(2);
    if ('' == indent) {
        indent = undefined;
    }
    const entop = entity.op[opname];
    const path = entop.path;
    // // TODO: move up to to common Entity
    // const params = JSON.stringify((path.match(/\{[^}]+\}/g) || [])
    //   .map((p: string) => p.substring(1, p.length - 1))
    //   .filter((p: string) => null != p && '' !== p))
    // const aliasmap = JSON.stringify(entitySDK.alias.field)
    const aliasmap = JSON.stringify(entity.alias.field);
    // const hasp = '' != entop.place
    (0, sdkgen_1.Fragment)({
        from: ff + '/Entity' + (0, sdkgen_1.camelify)(opname) + 'Op.fragment.ts',
        eject: ['// EJECT-START', '// EJECT-END'],
        indent,
        replace: {
            ...entrep,
            SdkName: model.const.Name,
            EntityName: entity.Name,
            entityname: entity.name,
            PATH: entop.path,
            "['PATHALT']": entop.pathalt,
            "['PARAM-LIST']": (0, struct_1.jsonify)(Object.keys(entop.param)),
            "{ 'ALIAS': 'MAP' }": aliasmap,
            "'REQFORM'": (0, utility_ts_1.formatJSONSrc)(JSON.stringify(entop.reqform)),
            "'RESFORM'": (0, utility_ts_1.formatJSONSrc)(JSON.stringify(entop.resform)),
            "'VALIDATE'": (0, utility_ts_1.formatJSONSrc)(JSON.stringify(entop.validate)),
            '#Feature-Hook': ({ name, indent }) => (0, sdkgen_1.Content)({ indent }, `
fres = featurehook(ctx, '${name}')
if (fres instanceof Promise) { await fres }
`)
        }
    });
});
exports.EntityOperation = EntityOperation;
//# sourceMappingURL=EntityOperation_ts.js.map