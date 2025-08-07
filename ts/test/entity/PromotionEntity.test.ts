
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


describe('PromotionEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Promotion()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_promotion0 - load promotion
      const load_promotion0 = makeStepData(dm, 'load_promotion0')
      load_promotion0.entity = client.Promotion()
      load_promotion0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_PROMOTION_ENTID.promotion01`"
      })
      load_promotion0.resdata =
        await load_promotion0.entity.load(load_promotion0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_promotion0: ', ctrl.explain) }
      makeValid(dm, validate, load_promotion0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_promotion0.match.id`"
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
    "promotion": {
      "PROMOTION01": {
        "id": "PROMOTION01",
        "name": "s1",
        "coupons": [],
        "applies_to_all": [],
        "products": [],
        "type": "s5",
        "value": 6,
        "created": 7,
        "modified": 8
      },
      "PROMOTION02": {
        "id": "PROMOTION02",
        "name": "s5b",
        "coupons": [],
        "applies_to_all": [],
        "products": [],
        "type": "s5f",
        "value": 96,
        "created": 97,
        "modified": 98
      },
      "PROMOTION03": {
        "id": "PROMOTION03",
        "name": "sb5",
        "coupons": [],
        "applies_to_all": [],
        "products": [],
        "type": "sb9",
        "value": 186,
        "created": 187,
        "modified": 188
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_PROMOTION_ENTID": {
        "promotion01": "PROMOTION01",
        "promotion02": "PROMOTION02",
        "promotion03": "PROMOTION03"
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
  setup.explain = 'TRUE' === setup.dm.p.Learnworlds_TEST_EXPLAIN

  return setup
}

