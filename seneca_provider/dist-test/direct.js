"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const envlocal = node_path_1.default.normalize(__dirname + '/../../.env.local');
require('dotenv').config({ quiet: true, path: [envlocal] });
const seneca_1 = __importDefault(require("seneca"));
const __1 = __importDefault(require(".."));
const useridmap = JSON.parse(process.env.LEARNWORLDS_TEST_USER_ENTID || '{}');
const courseidmap = JSON.parse(process.env.LEARNWORLDS_TEST_COURSE_ENTID || '{}');
const formidmap = JSON.parse(process.env.LEARNWORLDS_TEST_FORM_ENTID || '{}');
const assessmentidmap = JSON.parse(process.env.LEARNWORLDS_TEST_ASSESSMENT_ENTID || '{}');
run();
async function run() {
    try {
        const seneca = (0, seneca_1.default)()
            .test();
        // .test('print')
        seneca
            // .use('promisify')
            .use('entity')
            .use('env', {
            var: {
                LEARNWORLDS_BASE: String,
                $LEARNWORLDS_APIKEY: String,
                $LEARNWORLDS_CLIENTID: String,
            }
        })
            .use('provider', {
            provider: {
                Learnworlds: {
                    keys: {
                        base: { value: '$LEARNWORLDS_BASE' },
                        apikey: { value: '$LEARNWORLDS_APIKEY' },
                        clientid: { value: '$LEARNWORLDS_CLIENTID' },
                    }
                }
            }
        })
            .use(__1.default, {});
        await seneca.ready();
        let userent = seneca.entity('provider/learnworlds/user');
        let u0d = await userent.load$(useridmap.user01);
        console.log('u0d', u0d);
        let c0ld = await seneca.entity('provider/learnworlds/course').list$();
        console.log('c0ld', c0ld.length);
        let e0l = await seneca.entity('provider/learnworlds/enrollment').list$({
            user_id: useridmap.user01
        });
        console.log('e0l', e0l.length);
        let evl = await seneca.entity('provider/learnworlds/event_log').list$({
            page: 0,
            activity: 'follow'
        });
        console.log('evl', evl.length);
    }
    catch (err) {
        console.log(err);
    }
}
//# sourceMappingURL=direct.js.map