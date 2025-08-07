"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const Path = __importStar(require("node:path"));
const sdkgen_1 = require("@voxgig/sdkgen");
const EntityOperation_seneca_provider_1 = require("./EntityOperation_seneca_provider");
const Entity = (0, sdkgen_1.cmp)(function Entity(props) {
    const { model, stdrep } = props.ctx$;
    const { target, entity } = props;
    const entrep = {
        ...stdrep,
    };
    (0, sdkgen_1.names)(entrep, entity.Name, 'EntityName');
    const ff = Path.normalize(__dirname + '/../../../src/cmp/seneca_provider/fragment/');
    (0, sdkgen_1.Folder)({ name: 'src/entity' }, () => {
        (0, sdkgen_1.File)({ name: entity.Name + 'Entity.' + target.ext }, () => {
            (0, sdkgen_1.Line)(`// ${entity.Name} A`);
            const opnames = Object.keys(entity.op);
            const opfrags = opnames
                .reduce((a, opname) => (a['#' + (0, sdkgen_1.camelify)(opname) + 'Op'] =
                ({ indent }) => {
                    (0, EntityOperation_seneca_provider_1.EntityOperation)({ ff, opname, indent, entity, entrep });
                }, a), {});
            (0, sdkgen_1.Fragment)({
                from: ff + 'Entity.fragment.ts',
                indent: 2,
                replace: {
                    ...entrep,
                    EntityName: entity.Name,
                    entityname: entity.name,
                    ...opfrags,
                }
            });
        });
    });
});
exports.Entity = Entity;
//# sourceMappingURL=Entity_seneca_provider.js.map