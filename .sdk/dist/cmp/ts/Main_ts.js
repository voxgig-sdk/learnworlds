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
exports.Main = void 0;
const Path = __importStar(require("node:path"));
const sdkgen_1 = require("@voxgig/sdkgen");
const Package_ts_1 = require("./Package_ts");
const Config_ts_1 = require("./Config_ts");
const MainEntity_ts_1 = require("./MainEntity_ts");
const Test_ts_1 = require("./Test_ts");
const Main = (0, sdkgen_1.cmp)(async function Main(props) {
    const { target } = props;
    const { model } = props.ctx$;
    const { entity } = model.main.api;
    const { feature } = model.main.sdk;
    (0, Package_ts_1.Package)({ target });
    (0, Test_ts_1.Test)({ target });
    (0, sdkgen_1.Folder)({ name: 'src' }, () => {
        (0, sdkgen_1.File)({ name: model.const.Name + 'SDK.' + target.name }, () => {
            (0, sdkgen_1.Line)(`// ${model.const.Name} ${target.Name} SDK\n`);
            (0, sdkgen_1.List)({ item: feature }, ({ item }) => (0, sdkgen_1.Line)(`import { ${item.Name + 'Feature'} } ` +
                `from './feature/${item.name}/${item.Name}Feature'`));
            (0, sdkgen_1.List)({ item: entity }, ({ item }) => (0, sdkgen_1.Line)(`import { ${item.Name}Entity } from './entity/${item.Name}Entity'`));
            (0, sdkgen_1.Fragment)({
                from: Path.normalize(__dirname + '/../../../src/cmp/ts/fragment/Main.fragment.ts'),
                replace: {
                    ...props.ctx$.stdrep,
                    '#BuildFeatures': ({ indent }) => {
                        (0, sdkgen_1.List)({ item: feature, line: false }, ({ item }) => (0, sdkgen_1.Line)({ indent }, `addfeature(this._rootctx, new ${item.Name}Feature())`));
                    },
                    '#Feature-Hook': ({ name, indent }) => (0, sdkgen_1.Content)({ indent }, `
fres = featurehook(ctx, '${name}')
if (fres instanceof Promise) { await fres }
`),
                    '#TestOptions': ({ indent }) => {
                        const topts = {
                            feature: (0, sdkgen_1.cmap)(feature, {
                                active: false
                            }),
                        };
                        (0, sdkgen_1.Content)({ indent }, JSON.stringify(topts, null, 2)
                            .replace(/^{\n  /, '').replace(/\n}$/, ',\n').replace(/\n  /g, '\n'));
                    }
                }
            }, 
            // Entities
            () => {
                (0, sdkgen_1.each)(entity, (entity) => {
                    const entprops = { target, entity, entitySDK: model.main.api.entity[entity.name] };
                    (0, MainEntity_ts_1.MainEntity)(entprops);
                });
            });
        });
        (0, Config_ts_1.Config)({ target });
    });
});
exports.Main = Main;
//# sourceMappingURL=Main_ts.js.map