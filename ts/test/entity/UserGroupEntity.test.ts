
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


describe('UserGroupEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.UserGroup()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_user_group0 - load user_group
      const load_user_group0 = makeStepData(dm, 'load_user_group0')
      load_user_group0.entity = client.UserGroup()
      load_user_group0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_USER_GROUP_ENTID.user_group01`"
      })
      load_user_group0.resdata =
        await load_user_group0.entity.load(load_user_group0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_user_group0: ', ctrl.explain) }
      makeValid(dm, validate, load_user_group0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user_group0.match.id`"
      })

      // Step: update_user_group1 - update user_group
      const update_user_group1 = makeStepData(dm, 'update_user_group1')
      update_user_group1.entity = load_user_group0.entity
      update_user_group1.reqdata = makeReqdata(dm, transform, {
        "title": "s1-`$WHEN`"
      })
      update_user_group1.resdata =
        await update_user_group1.entity.update(update_user_group1.reqdata, ctrl = makeCtrl(explain))
      if( explain ) { console.log('update_user_group1: ', ctrl.explain) }
      makeValid(dm, validate, update_user_group1.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user_group0.match.id`",
        "title": "`dm$=s.update_user_group1.reqdata.title`"
      })

      // Step: load_user_group2 - load user_group
      const load_user_group2 = makeStepData(dm, 'load_user_group2')
      load_user_group2.entity = client.UserGroup()
      load_user_group2.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_USER_GROUP_ENTID.user_group01`"
      })
      load_user_group2.resdata =
        await load_user_group2.entity.load(load_user_group2.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_user_group2: ', ctrl.explain) }
      makeValid(dm, validate, load_user_group2.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user_group0.match.id`",
        "title": "`dm$=s.update_user_group1.reqdata.title`"
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
    "user_group": {
      "USER_GROUP01": {
        "id": "USER_GROUP01",
        "title": "s1",
        "description": "s2",
        "products": {},
        "enroll_users_on_courses": true,
        "group_managers": [],
        "tags": [],
        "created": 7,
        "modified": 8
      },
      "USER_GROUP02": {
        "id": "USER_GROUP02",
        "title": "s5b",
        "description": "s5c",
        "products": {},
        "enroll_users_on_courses": true,
        "group_managers": [],
        "tags": [],
        "created": 97,
        "modified": 98
      },
      "USER_GROUP03": {
        "id": "USER_GROUP03",
        "title": "sb5",
        "description": "sb6",
        "products": {},
        "enroll_users_on_courses": true,
        "group_managers": [],
        "tags": [],
        "created": 187,
        "modified": 188
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_USER_GROUP_ENTID": {
        "user_group01": "USER_GROUP01",
        "user_group02": "USER_GROUP02",
        "user_group03": "USER_GROUP03"
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

