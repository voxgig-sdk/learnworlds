"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_test_1 = require("node:test");
const node_assert_1 = require("node:assert");
const __1 = require("../..");
const utility_1 = require("../utility");
(0, node_test_1.describe)('CourseAnalyticEntity', async () => {
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LearnworldsSDK.test();
        const ent = testsdk.CourseAnalytic();
        (0, node_assert_1.equal)(null !== ent, true);
    });
    (0, node_test_1.test)('basic', async () => {
        const setup = basicSetup();
        const { dm, options, client, struct, explain } = setup;
        const { validate, transform } = struct;
        let ctrl = {};
        try {
            // Step: load_course_analytic0 - load course_analytic
            const load_course_analytic0 = (0, utility_1.makeStepData)(dm, 'load_course_analytic0');
            load_course_analytic0.entity = client.CourseAnalytic();
            load_course_analytic0.match = (0, utility_1.makeMatch)(dm, transform, {
                "course_id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`",
                "id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ANALYTIC_ENTID.course_analytic01`"
            });
            load_course_analytic0.resdata =
                await load_course_analytic0.entity.load(load_course_analytic0.match, ctrl = (0, utility_1.makeCtrl)(explain));
            if (explain) {
                console.log('load_course_analytic0: ', ctrl.explain);
            }
            (0, utility_1.makeValid)(dm, validate, load_course_analytic0.resdata, {
                "`$OPEN`": true,
                "course_id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`",
                "id": "`dm$=s.load_course_analytic0.match.id`"
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
            "course_analytic": {
                "COURSE_ANALYTIC01": {
                    "students": "s0",
                    "videos": "s1",
                    "learning_units": "s2",
                    "video_time": "s3",
                    "video_viewing_time": "s4",
                    "avg_score_rate": 5,
                    "success_rate": 6,
                    "total_study_time": "s7",
                    "avg_time_to_finish": "s8",
                    "social_interactions": "s9",
                    "certificates_issued": "sa",
                    "id": "COURSE_ANALYTIC01",
                    "course_id": "COURSE01"
                },
                "COURSE_ANALYTIC02": {
                    "students": "s6e",
                    "videos": "s6f",
                    "learning_units": "s70",
                    "video_time": "s71",
                    "video_viewing_time": "s72",
                    "avg_score_rate": 115,
                    "success_rate": 116,
                    "total_study_time": "s75",
                    "avg_time_to_finish": "s76",
                    "social_interactions": "s77",
                    "certificates_issued": "s78",
                    "id": "COURSE_ANALYTIC02"
                },
                "COURSE_ANALYTIC03": {
                    "students": "sdc",
                    "videos": "sdd",
                    "learning_units": "sde",
                    "video_time": "sdf",
                    "video_viewing_time": "se0",
                    "avg_score_rate": 225,
                    "success_rate": 226,
                    "total_study_time": "se3",
                    "avg_time_to_finish": "se4",
                    "social_interactions": "se5",
                    "certificates_issued": "se6",
                    "id": "COURSE_ANALYTIC03"
                }
            }
        }
    };
    const setup = {
        dm: {
            p: (0, utility_1.envOverride)({
                "LEARNWORLDS_TEST_COURSE_ANALYTIC_ENTID": {
                    "course_analytic01": "COURSE_ANALYTIC01",
                    "course_analytic02": "COURSE_ANALYTIC02",
                    "course_analytic03": "COURSE_ANALYTIC03"
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
//# sourceMappingURL=CourseAnalyticEntity.test.js.map