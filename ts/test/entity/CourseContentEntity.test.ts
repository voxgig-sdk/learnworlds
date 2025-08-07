
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


describe('CourseContentEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.CourseContent()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_course_content0 - load course_content
      const load_course_content0 = makeStepData(dm, 'load_course_content0')
      load_course_content0.entity = client.CourseContent()
      load_course_content0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_COURSE_CONTENT_ENTID.course_content01`",
        "course_id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`"
      })
      load_course_content0.resdata =
        await load_course_content0.entity.load(load_course_content0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_course_content0: ', ctrl.explain) }
      makeValid(dm, validate, load_course_content0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_course_content0.match.id`",
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
}

  const setup: any = {
    dm: {
      p: envOverride({
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

