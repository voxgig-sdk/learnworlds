"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envlocal = __dirname + '/../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const __1 = require("..");
const useridmap = JSON.parse(process.env.LEARNWORLDS_TEST_USER_ENTID || '{}');
const courseidmap = JSON.parse(process.env.LEARNWORLDS_TEST_COURSE_ENTID || '{}');
const formidmap = JSON.parse(process.env.LEARNWORLDS_TEST_FORM_ENTID || '{}');
const assessmentidmap = JSON.parse(process.env.LEARNWORLDS_TEST_ASSESSMENT_ENTID || '{}');
run();
async function run() {
    let explain = {};
    try {
        const opts = {
            base: process.env.LEARNWORLDS_BASE,
            apikey: process.env.LEARNWORLDS_APIKEY,
            headers: {
                'Lw-Client': process.env.LEARNWORLDS_CLIENTID
            },
            allow: {
                method: 'GET'
            }
        };
        // console.log(opts)
        const client = new __1.LearnworldsSDK(opts);
        // console.log(client.options())
        // console.log(await client.Course().list())
        let q = {};
        // // works
        const u0 = client.User();
        q = {
            id: useridmap.user01
        };
        const u0d = await u0.load(q, { explain });
        console.log('u0d', u0d);
        // console.log('EXPLAIN', explain)
        // works
        let c0 = client.Course();
        q = {};
        const clist = await c0.list(q, { explain });
        console.log('EXPLAIN-c0', explain.spec);
        // console.dir(explain, { depth: null })
        let c0ld = clist.map((c) => c.data());
        console.log(c0ld.length);
        // console.log(c0ld.slice(0, 3))
        // fix
        let e0 = client.Enrollment();
        q = {
            user_id: useridmap.user01
        };
        const e0l = await e0.list(q, { explain });
        console.log('EXPLAIN-e0', explain.spec);
        // console.dir(explain, { depth: null })
        let e0ld = e0l.map((c) => c.data());
        console.log(e0ld.length);
        // works
        const cr0 = client.Course();
        q = {
            id: courseidmap.course01
        };
        const cr0d = await cr0.load(q, { explain });
        console.log('EXPLAIN-cr0', explain.spec);
        console.log('cr0d', cr0d);
        // works
        const ev0 = client.EventLog();
        q = {
            page: 1,
            activity: 'login'
        };
        const evlist = await ev0.list(q, { explain });
        console.log('EXPLAIN', explain.spec);
        // // console.dir(explain, { depth: null })
        // console.log(evlist.map((c: any) => c.data()))
        console.log(evlist.length);
        // fix
        /*
        const r0 = client.UserResponse()
        q = {
          form_id: formidmap.form01
        }
        const r0d = await r0.list(q, { explain })
        console.log('EXPLAIN-r0', explain.spec)
        console.log('r0d', r0d)
    
    
    
    // fix
    const ra0 = client.UserResponse()
    q = {
      assessment_id: assessmentidmap.assessment01
    }
    console.log('ra0 q', q)
    const ra0d = await ra0.list(q, { explain })
    console.log('EXPLAIN', explain.spec)
    console.log('ra0d', ra0d)
        */
    }
    catch (err) {
        console.log(err);
        console.log('EXPLAIN-err', explain.spec);
        // console.dir(explain, { depth: null })
    }
}
//# sourceMappingURL=direct.js.map