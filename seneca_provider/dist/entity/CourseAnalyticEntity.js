"use strict";
// CourseAnalytic A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCourseAnalyticActions = makeCourseAnalyticActions;
function makeCourseAnalyticActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_course_analytic(entize, msg) {
            const course_analyticEntity = this.shared.sdk.CourseAnalytic();
            const q = msg.q || {};
            const resdata = await course_analyticEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    // #ListOp
    // #CreateOp
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=CourseAnalyticEntity.js.map