
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


describe('UnitAnalyticEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.UnitAnalytic()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_unit_analytic0 - load unit_analytic
      const load_unit_analytic0 = makeStepData(dm, 'load_unit_analytic0')
      load_unit_analytic0.entity = client.UnitAnalytic()
      load_unit_analytic0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_UNIT_ANALYTIC_ENTID.unit_analytic01`",
        "course_id": "`dm$=p.LEARNWORLDS_TEST_COURSE_ENTID.course01`"
      })
      load_unit_analytic0.resdata =
        await load_unit_analytic0.entity.load(load_unit_analytic0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_unit_analytic0: ', ctrl.explain) }
      makeValid(dm, validate, load_unit_analytic0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_unit_analytic0.match.id`",
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
    "unit_analytic": {
      "UNIT_ANALYTIC01": {
        "type": "s0",
        "name": "s1",
        "users_completed": "s2",
        "viewers": "s3",
        "avg_study_time": 4,
        "total_study_time": 5,
        "avg_score_rate": 6,
        "id": "UNIT_ANALYTIC01",
        "course_id": "COURSE01"
      },
      "UNIT_ANALYTIC02": {
        "type": "s46",
        "name": "s47",
        "users_completed": "s48",
        "viewers": "s49",
        "avg_study_time": 74,
        "total_study_time": 75,
        "avg_score_rate": 76,
        "id": "UNIT_ANALYTIC02"
      },
      "UNIT_ANALYTIC03": {
        "type": "s8c",
        "name": "s8d",
        "users_completed": "s8e",
        "viewers": "s8f",
        "avg_study_time": 144,
        "total_study_time": 145,
        "avg_score_rate": 146,
        "id": "UNIT_ANALYTIC03"
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_UNIT_ANALYTIC_ENTID": {
        "unit_analytic01": "UNIT_ANALYTIC01",
        "unit_analytic02": "UNIT_ANALYTIC02",
        "unit_analytic03": "UNIT_ANALYTIC03"
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

