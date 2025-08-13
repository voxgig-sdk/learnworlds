
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


describe('UserProgressEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.UserProgress()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_user_progress0 - load user_progress
      const load_user_progress0 = makeStepData(dm, 'load_user_progress0')
      load_user_progress0.entity = client.UserProgress()
      load_user_progress0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_USER_PROGRESS_ENTID.user_progress01`",
        "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
      })
      load_user_progress0.resdata =
        await load_user_progress0.entity.load(load_user_progress0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_user_progress0: ', ctrl.explain) }
      makeValid(dm, validate, load_user_progress0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user_progress0.match.id`",
        "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
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
    "user_progress": {
      "USER_PROGRESS01": {
        "status": "s0",
        "progress_rate": 1,
        "average_score_rate": 2,
        "time_on_course": "s3",
        "total_units": "s4",
        "completed_units": "s5",
        "completed_at": 6,
        "progress_per_section_unit": [],
        "id": "USER_PROGRESS01",
        "user_id": "USER01"
      },
      "USER_PROGRESS02": {
        "status": "s50",
        "progress_rate": 81,
        "average_score_rate": 82,
        "time_on_course": "s53",
        "total_units": "s54",
        "completed_units": "s55",
        "completed_at": 86,
        "progress_per_section_unit": [],
        "id": "USER_PROGRESS02"
      },
      "USER_PROGRESS03": {
        "status": "sa0",
        "progress_rate": 161,
        "average_score_rate": 162,
        "time_on_course": "sa3",
        "total_units": "sa4",
        "completed_units": "sa5",
        "completed_at": 166,
        "progress_per_section_unit": [],
        "id": "USER_PROGRESS03"
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_USER_PROGRESS_ENTID": {
        "user_progress01": "USER_PROGRESS01",
        "user_progress02": "USER_PROGRESS02",
        "user_progress03": "USER_PROGRESS03"
      },
      "LEARNWORLDS_TEST_LIVE": "FALSE",
      "LEARNWORLDS_TEST_EXPLAIN": "FALSE",
      "LEARNWORLDS_TEST_USER_ENTID": {
        "user01": "USER01"
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
  setup.explain = 'TRUE' === setup.dm.p.LEARNWORLDS_TEST_EXPLAIN

  return setup
}

