
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


describe('CommunitySpaceEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.CommunitySpace()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_community_space0 - load community_space
      const load_community_space0 = makeStepData(dm, 'load_community_space0')
      load_community_space0.entity = client.CommunitySpace()
      load_community_space0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID.community_space01`"
      })
      load_community_space0.resdata =
        await load_community_space0.entity.load(load_community_space0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_community_space0: ', ctrl.explain) }
      makeValid(dm, validate, load_community_space0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_community_space0.match.id`"
      })

      // Step: update_community_space1 - update community_space
      const update_community_space1 = makeStepData(dm, 'update_community_space1')
      update_community_space1.entity = load_community_space0.entity
      update_community_space1.reqdata = makeReqdata(dm, transform, {
        "title": "s1-`$WHEN`"
      })
      update_community_space1.resdata =
        await update_community_space1.entity.update(update_community_space1.reqdata, ctrl = makeCtrl(explain))
      if( explain ) { console.log('update_community_space1: ', ctrl.explain) }
      makeValid(dm, validate, update_community_space1.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_community_space0.match.id`",
        "title": "`dm$=s.update_community_space1.reqdata.title`"
      })

      // Step: load_community_space2 - load community_space
      const load_community_space2 = makeStepData(dm, 'load_community_space2')
      load_community_space2.entity = client.CommunitySpace()
      load_community_space2.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID.community_space01`"
      })
      load_community_space2.resdata =
        await load_community_space2.entity.load(load_community_space2.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_community_space2: ', ctrl.explain) }
      makeValid(dm, validate, load_community_space2.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_community_space0.match.id`",
        "title": "`dm$=s.update_community_space1.reqdata.title`"
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
    "community_space": {
      "COMMUNITY_SPACE01": {
        "id": "COMMUNITY_SPACE01",
        "title": "s1",
        "description": "s2",
        "access": "s3",
        "owner": {},
        "usages": [],
        "hidden_from_community": true,
        "is_invitation_required": false,
        "is_members_allowed_to_view_members": true,
        "collectionid": "s9"
      },
      "COMMUNITY_SPACE02": {
        "id": "COMMUNITY_SPACE02",
        "title": "s65",
        "description": "s66",
        "access": "s67",
        "owner": {},
        "usages": [],
        "hidden_from_community": true,
        "is_invitation_required": false,
        "is_members_allowed_to_view_members": true,
        "collectionid": "s6d"
      },
      "COMMUNITY_SPACE03": {
        "id": "COMMUNITY_SPACE03",
        "title": "sc9",
        "description": "sca",
        "access": "scb",
        "owner": {},
        "usages": [],
        "hidden_from_community": true,
        "is_invitation_required": false,
        "is_members_allowed_to_view_members": true,
        "collectionid": "sd1"
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_COMMUNITY_SPACE_ENTID": {
        "community_space01": "COMMUNITY_SPACE01",
        "community_space02": "COMMUNITY_SPACE02",
        "community_space03": "COMMUNITY_SPACE03"
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

