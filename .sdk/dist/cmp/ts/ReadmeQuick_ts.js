"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadmeQuick = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const ReadmeQuick = (0, sdkgen_1.cmp)(function ReadmeQuick(props) {
    const { target, ctx$: { model } } = props;
    (0, sdkgen_1.Content)('```ts');
    (0, sdkgen_1.Content)(`
const { ${model.const.Name}SDK } = require('${target.module.name}')

const client = ${model.const.Name}SDK.make({
  apikey: process.env.${model.NAME}_APIKEY,
})

`);
    (0, sdkgen_1.Content)('```');
});
exports.ReadmeQuick = ReadmeQuick;
//# sourceMappingURL=ReadmeQuick_ts.js.map