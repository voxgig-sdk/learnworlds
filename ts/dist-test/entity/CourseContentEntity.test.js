"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('CourseContentEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CourseContent();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_course_content0 - load course_content
            const load_course_content0 = (0, utility_1.makeStepData)(dm, 'load_course_content0');
            load_course_content0.entity = client.CourseContent();
            load_course_content0.match = (0, utility_1.makeMatch)(dm, transform, {
                "course_id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`",
                "id": "`dm$=p.LEARNWORLDS_TEST_COURSE_CONTENT_ENTID.course_content01`"
            });
            load_course_content0.resdata =
                await load_course_content0.entity.load(load_course_content0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_course_content0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_course_content0.resdata, {
                "`$OPEN`": true,
                "course_id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`",
                "id": "`dm$=s.load_course_content0.match.id`"
            });
        }
        catch (err) {
            console.dir(dm, { depth: null });
            if (explain) {
                console.dir(ctrl.explain, { depth: null });
            }
            console.log(err);
            throw err;
        }
    });
});
function basicSetup(extra) {
    extra = extra || {};
    const options = {
        "entity": {
            "course_content": {
                "COURSE_CONTENT01": {
                    "id": "COURSE_CONTENT01",
                    "title": "s1",
                    "sections": [],
                    "course_id": "COURSE01"
                },
                "COURSE_CONTENT02": {
                    "id": "COURSE_CONTENT02",
                    "title": "s1f",
                    "sections": []
                },
                "COURSE_CONTENT03": {
                    "id": "COURSE_CONTENT03",
                    "title": "s3d",
                    "sections": []
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_COURSE_CONTENT_ENTID": {
                    "course_content01": "COURSE_CONTENT01",
                    "course_content02": "COURSE_CONTENT02",
                    "course_content03": "COURSE_CONTENT03"
                },
                "LEARNWORLDS_TEST_LIVE": "FALSE",
                "LEARNWORLDS_TEST_EXPLAIN": "FALSE",
                "LEARNWORLDS_TEST_COURSE_ENTID": {
                    "course01": "COURSE01"
                }
            }),
            s: {},
        },
        options,
    };
    const { merge } = __1.utility.struct;
    let client = __1.LearnworldsSDK.test(options, extra);
    if ('TRUE' === setup.dm.p.LEARNWORLDS_TEST_LIVE) {
        client = new __1.LearnworldsSDK(merge([
            {
                apikey: process.env.LEARNWORLDS_APIKEY,
            },
            extra
        ]));
    }
    setup.client = client;
    setup.struct = client.utility().struct;
    setup.explain = 'TRUE' === setup.dm.p.LEARNWORLDS_TEST_EXPLAIN;
    return setup;
}
//# sourceMappingURL=CourseContentEntity.test.js.map