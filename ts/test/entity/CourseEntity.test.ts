
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


describe('CourseEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Course()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_course0 - load course
      const load_course0 = makeStepData(dm, 'load_course0')
      load_course0.entity = client.Course()
      load_course0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`"
      })
      load_course0.resdata =
        await load_course0.entity.load(load_course0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_course0: ', ctrl.explain) }
      makeValid(dm, validate, load_course0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_course0.match.id`"
      })

      // Step: update_course1 - update course
      const update_course1 = makeStepData(dm, 'update_course1')
      update_course1.entity = load_course0.entity
      update_course1.reqdata = makeReqdata(dm, transform, {
        "title": "s1-`$WHEN`"
      })
      update_course1.resdata =
        await update_course1.entity.update(update_course1.reqdata, ctrl = makeCtrl(explain))
      if( explain ) { console.log('update_course1: ', ctrl.explain) }
      makeValid(dm, validate, update_course1.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_course0.match.id`",
        "title": "`dm$=s.update_course1.reqdata.title`"
      })

      // Step: load_course2 - load course
      const load_course2 = makeStepData(dm, 'load_course2')
      load_course2.entity = client.Course()
      load_course2.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`"
      })
      load_course2.resdata =
        await load_course2.entity.load(load_course2.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_course2: ', ctrl.explain) }
      makeValid(dm, validate, load_course2.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_course0.match.id`",
        "title": "`dm$=s.update_course1.reqdata.title`"
      })
 
    }
    catch(err: any) {
      console.dir(dm, {depth: null})
      if( explain ) { console.dir(ctrl.explain, {depth: null}) }
      console.log(err)
      throw err
    }

  })
})



function basicSetup(extra?: any) {
  extra = extra || {}

  const options = {
  "entity": {
    "course": {
      "COURSE01": {
        "id": "COURSE01",
        "title": "s1",
        "expires": "s2",
        "expirestype": "s3",
        "afterpurchase": {},
        "categories": [],
        "description": "s6",
        "label": "s7",
        "author": {},
        "courseimage": "s9",
        "original_price": 10,
        "discount_price": 11,
        "final_price": 12,
        "dripfeed": "sd",
        "identifiers": {},
        "access": "sf",
        "created": 16,
        "modified": 17
      },
      "COURSE02": {
        "id": "COURSE02",
        "title": "sb5",
        "expires": "sb6",
        "expirestype": "sb7",
        "afterpurchase": {},
        "categories": [],
        "description": "sba",
        "label": "sbb",
        "author": {},
        "courseimage": "sbd",
        "original_price": 190,
        "discount_price": 191,
        "final_price": 192,
        "dripfeed": "sc1",
        "identifiers": {},
        "access": "sc3",
        "created": 196,
        "modified": 197
      },
      "COURSE03": {
        "id": "COURSE03",
        "title": "s169",
        "expires": "s16a",
        "expirestype": "s16b",
        "afterpurchase": {},
        "categories": [],
        "description": "s16e",
        "label": "s16f",
        "author": {},
        "courseimage": "s171",
        "original_price": 370,
        "discount_price": 371,
        "final_price": 372,
        "dripfeed": "s175",
        "identifiers": {},
        "access": "s177",
        "created": 376,
        "modified": 377
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_COURSE_ENTID": {
        "course01": "COURSE01",
        "course02": "COURSE02",
        "course03": "COURSE03"
      },
      "LEARNWORLDS_TEST_LIVE": "FALSE",
      "LEARNWORLDS_TEST_EXPLAIN": "FALSE"
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
  setup.explain = 'TRUE' === setup.dm.p.LEARNWORLDS_TEST_EXPLAIN

  return setup
}

