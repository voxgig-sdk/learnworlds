
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


describe('BundleEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Bundle()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_bundle0 - load bundle
      const load_bundle0 = makeStepData(dm, 'load_bundle0')
      load_bundle0.entity = client.Bundle()
      load_bundle0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_BUNDLE_ENTID.bundle01`"
      })
      load_bundle0.resdata =
        await load_bundle0.entity.load(load_bundle0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_bundle0: ', ctrl.explain) }
      makeValid(dm, validate, load_bundle0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_bundle0.match.id`"
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
    "bundle": {
      "BUNDLE01": {
        "id": "BUNDLE01",
        "title": "s1",
        "products": {},
        "image": "s3",
        "description": "s4",
        "access": "s5",
        "created": 6,
        "modified": 7,
        "afterpurchase": {},
        "price": 9,
        "paymentplans": []
      },
      "BUNDLE02": {
        "id": "BUNDLE02",
        "title": "s6f",
        "products": {},
        "image": "s71",
        "description": "s72",
        "access": "s73",
        "created": 116,
        "modified": 117,
        "afterpurchase": {},
        "price": 119,
        "paymentplans": []
      },
      "BUNDLE03": {
        "id": "BUNDLE03",
        "title": "sdd",
        "products": {},
        "image": "sdf",
        "description": "se0",
        "access": "se1",
        "created": 226,
        "modified": 227,
        "afterpurchase": {},
        "price": 229,
        "paymentplans": []
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_BUNDLE_ENTID": {
        "bundle01": "BUNDLE01",
        "bundle02": "BUNDLE02",
        "bundle03": "BUNDLE03"
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

