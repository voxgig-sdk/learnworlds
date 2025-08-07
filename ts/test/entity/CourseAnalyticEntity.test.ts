
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })


import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LearnworldsSDK, BaseFeature, utility } from '../..'

import {
  makeStepData,
  makeMatch,
  makeReqdata,
  makeValid,
  makeCtrl,
  envOverride,
} from '../utility'


describe('CourseAnalyticEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.CourseAnalytic()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_course_analytic0 - load course_analytic
      const load_course_analytic0 = makeStepData(dm, 'load_course_analytic0')
      load_course_analytic0.entity = client.CourseAnalytic()
      load_course_analytic0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ANALYTIC_ENTID.course_analytic01`",
        "course_id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`"
      })
      load_course_analytic0.resdata =
        await load_course_analytic0.entity.load(load_course_analytic0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_course_analytic0: ', ctrl.explain) }
      makeValid(dm, validate, load_course_analytic0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_course_analytic0.match.id`",
        "course_id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`"
      })
 
    }
    catch(err: any) {
      console.dir(dm, {depth: null})
      if( explain ) { console.dir(ctrl.explain, {depth: null}) }
      throw err
    }

  })
})



function basicSetup(extra?: any) {
  extra = extra || {}

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
}

  const setup: any = {
    dm: {
      p: envOverride({
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
  }

  const { merge } = utility.struct

  let client = LearnworldsSDK.test(options, extra)
  if ('TRUE' === setup.dm.p.LEARNWORLDS_TEST_LIVE) {
    client = new LearnworldsSDK(merge([
      {
        apikey: process.env.LEARNWORLDS_APIKEY,
      },
      extra])
    )
  }
  
  setup.client = client    
  setup.struct = client.utility().struct
  setup.explain = 'TRUE' === setup.dm.p.Learnworlds_TEST_EXPLAIN

  return setup
}

