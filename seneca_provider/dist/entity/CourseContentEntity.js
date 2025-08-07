"use strict";
// CourseContent A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCourseContentActions = makeCourseContentActions;
function makeCourseContentActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_course_content(entize, msg) {
            const course_contentEntity = this.shared.sdk.CourseContent();
            const q = msg.q || {};
            const resdata = await course_contentEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    // #ListOp
    // Create operation is implemented by seneca entity save
    // #UpdateOp
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=CourseContentEntity.js.map