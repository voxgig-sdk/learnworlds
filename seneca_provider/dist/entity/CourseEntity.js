"use strict";
// Course A
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCourseActions = makeCourseActions;
function makeCourseActions() {
    const cmd = {};
    cmd.load = {
        action: async function load_course(entize, msg) {
            const courseEntity = this.shared.sdk.Course();
            const q = msg.q || {};
            const resdata = await courseEntity.load(q);
            let item = entize(resdata);
            return item;
        }
    };
    cmd.list = {
        action: async function list_course(entize, msg) {
            const courseEntity = this.shared.sdk.Course();
            const q = msg.q || {};
            const courseList = await courseEntity.list(q);
            const dataList = courseList.map((n) => n.data());
            let items = dataList.map((data) => entize(data));
            return items;
        }
    };
    // Create operation is implemented by seneca entity save
    cmd.save = {
        action: async function update_course(entize, msg) {
            const courseEntity = this.shared.sdk.Course();
            let reqdata = msg.ent.data$();
            const update = null !== reqdata.id;
            const resdata = await (update ?
                courseEntity.update(reqdata) :
                courseEntity.create(reqdata));
            let item = null;
            if (resdata) {
                item = entize(resdata);
            }
            return item;
        }
    };
    // #RemoveOp
    return { cmd };
}
//# sourceMappingURL=CourseEntity.js.map