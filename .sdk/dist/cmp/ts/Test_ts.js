"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const sdkgen_1 = require("@voxgig/sdkgen");
// import { Quick } from './Quick_ts'
const TestMain_ts_1 = require("./TestMain_ts");
const Test = (0, sdkgen_1.cmp)(function Test(props) {
    const { target } = props;
    (0, sdkgen_1.Folder)({ name: 'test' }, () => {
        // Quick({ target })
        (0, TestMain_ts_1.TestMain)({ target });
    });
});
exports.Test = Test;
//# sourceMappingURL=Test_ts.js.map