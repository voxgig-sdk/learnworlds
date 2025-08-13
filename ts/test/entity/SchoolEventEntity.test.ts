
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


describe('SchoolEventEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.SchoolEvent()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {
 
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
    "school_event": {
      "SCHOOL_EVENT01": {
        "id": "SCHOOL_EVENT01"
      },
      "SCHOOL_EVENT02": {
        "id": "SCHOOL_EVENT02"
      },
      "SCHOOL_EVENT03": {
        "id": "SCHOOL_EVENT03"
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_SCHOOL_EVENT_ENTID": {
        "school_event01": "SCHOOL_EVENT01",
        "school_event02": "SCHOOL_EVENT02",
        "school_event03": "SCHOOL_EVENT03"
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

