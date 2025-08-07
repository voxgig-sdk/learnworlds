"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityOperation = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const EntityOperation = (0, sdkgen_1.cmp)(function Operation(props) {
    const { model } = props.ctx$;
    const { ff, opname, entity, entrep } = props;
    let { indent } = props;
    indent = indent.substring(2);
    if ('' == indent) {
        indent = undefined;
    }
    (0, sdkgen_1.Fragment)({
        from: ff + 'Entity' + (0, sdkgen_1.camelify)(opname) + 'Op.fragment.ts',
        indent,
        replace: {
            ...entrep,
            EntityName: entity.Name,
            entityname: entity.name,
        }
    });
});
exports.EntityOperation = EntityOperation;
//# sourceMappingURL=EntityOperation_seneca_provider.js.map