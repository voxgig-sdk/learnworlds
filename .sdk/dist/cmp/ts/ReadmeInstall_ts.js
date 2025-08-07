"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadmeInstall = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const ReadmeInstall = (0, sdkgen_1.cmp)(function ReadmeInstall(props) {
    const { target } = props;
    (0, sdkgen_1.Content)('```ts');
    (0, sdkgen_1.Content)(`
npm install ${target.module.name}
`);
    (0, sdkgen_1.Content)('```');
});
exports.ReadmeInstall = ReadmeInstall;
//# sourceMappingURL=ReadmeInstall_ts.js.map