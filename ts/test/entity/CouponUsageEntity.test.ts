
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


describe('CouponUsageEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.CouponUsage()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_coupon_usage0 - load coupon_usage
      const load_coupon_usage0 = makeStepData(dm, 'load_coupon_usage0')
      load_coupon_usage0.entity = client.CouponUsage()
      load_coupon_usage0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_COUPON_USAGE_ENTID.coupon_usage01`"
      })
      load_coupon_usage0.resdata =
        await load_coupon_usage0.entity.load(load_coupon_usage0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_coupon_usage0: ', ctrl.explain) }
      makeValid(dm, validate, load_coupon_usage0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_coupon_usage0.match.id`"
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
    "coupon_usage": {
      "COUPON_USAGE01": {
        "usage": {},
        "payments": [],
        "meta": {},
        "id": "COUPON_USAGE01"
      },
      "COUPON_USAGE02": {
        "usage": {},
        "payments": [],
        "meta": {},
        "id": "COUPON_USAGE02"
      },
      "COUPON_USAGE03": {
        "usage": {},
        "payments": [],
        "meta": {},
        "id": "COUPON_USAGE03"
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_COUPON_USAGE_ENTID": {
        "coupon_usage01": "COUPON_USAGE01",
        "coupon_usage02": "COUPON_USAGE02",
        "coupon_usage03": "COUPON_USAGE03"
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

