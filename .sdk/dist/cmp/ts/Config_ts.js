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
exports.Config = void 0;
const Path = __importStar(require("node:path"));
const sdkgen_1 = require("@voxgig/sdkgen");
const Config = (0, sdkgen_1.cmp)(async function Config(props) {
    const { target, ctx$: { model } } = props;
    const { main: { sdk: { entity } } } = model;
    const ff = Path.normalize(__dirname + '/../../../src/cmp/ts/fragment/');
    const headers = model?.main?.sdk?.config?.headers || {};
    (0, sdkgen_1.File)({ name: 'Config.' + target.ext }, () => {
        (0, sdkgen_1.Fragment)({
            from: ff + 'Config.fragment.ts',
            replace: {
                "'HEADERS'": (0, sdkgen_1.indent)(JSON.stringify(headers, null, 2), 4).trim(),
                '// #EntityConfigs': () => (0, sdkgen_1.each)(entity, (entity) => {
                    (0, sdkgen_1.Content)(`
      ${entity.name}: {
      },
`);
                })
            }
        });
    });
});
exports.Config = Config;
//# sourceMappingURL=Config_ts.js.map