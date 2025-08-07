"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEntity = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
const MainEntity = (0, sdkgen_1.cmp)(async function MainEntity(props) {
    const { entity } = props;
    (0, sdkgen_1.Content)(`
  entdef.${entity.name} = make${entity.Name}Actions()
`);
});
exports.MainEntity = MainEntity;
//# sourceMappingURL=MainEntity_seneca_provider.js.map