"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Top = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const Top = (0, sdkgen_1.cmp)(function Top(props) {
    const { ctx$ } = props;
    const { model } = ctx$;
    (0, sdkgen_1.File)({ name: 'README.md' }, () => {
        (0, sdkgen_1.Content)(`# ${model.Name} SDKs

## API Entities

\`\`\`mermaid 
flowchart LR
`);
        const entityMap = model.main.api.entity;
        (0, sdkgen_1.each)(entityMap, (entity) => {
            const ancestors = entity.ancestors || [];
            if (0 < ancestors.length) {
                const pname = ancestors[ancestors.length - 1];
                const parent = entityMap[pname];
                if (null != parent) {
                    (0, sdkgen_1.Line)(`  ${parent.Name} --> ${entity.Name}`);
                }
            }
        });
        (0, sdkgen_1.Content)(`
\`\`\`

`);
    });
});
exports.Top = Top;
//# sourceMappingURL=Top.js.map