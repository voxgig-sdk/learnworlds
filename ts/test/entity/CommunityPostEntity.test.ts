
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


describe('CommunityPostEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.CommunityPost()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_community_post0 - load community_post
      const load_community_post0 = makeStepData(dm, 'load_community_post0')
      load_community_post0.entity = client.CommunityPost()
      load_community_post0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_COMMUNITY_POST_ENTID.community_post01`"
      })
      load_community_post0.resdata =
        await load_community_post0.entity.load(load_community_post0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_community_post0: ', ctrl.explain) }
      makeValid(dm, validate, load_community_post0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_community_post0.match.id`"
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
    "community_post": {
      "COMMUNITY_POST01": {
        "id": "COMMUNITY_POST01",
        "posted_in": {},
        "user": {},
        "text": "s3",
        "mentions": [],
        "likes": [],
        "upvotes": [],
        "items": [],
        "created": 8
      },
      "COMMUNITY_POST02": {
        "id": "COMMUNITY_POST02",
        "posted_in": {},
        "user": {},
        "text": "s5d",
        "mentions": [],
        "likes": [],
        "upvotes": [],
        "items": [],
        "created": 98
      },
      "COMMUNITY_POST03": {
        "id": "COMMUNITY_POST03",
        "posted_in": {},
        "user": {},
        "text": "sb7",
        "mentions": [],
        "likes": [],
        "upvotes": [],
        "items": [],
        "created": 188
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_COMMUNITY_POST_ENTID": {
        "community_post01": "COMMUNITY_POST01",
        "community_post02": "COMMUNITY_POST02",
        "community_post03": "COMMUNITY_POST03"
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

