
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


describe('UserRoleEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.UserRole()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_user_role0 - load user_role
      const load_user_role0 = makeStepData(dm, 'load_user_role0')
      load_user_role0.entity = client.UserRole()
      load_user_role0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_USER_ROLE_ENTID.user_role01`",
        "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
      })
      load_user_role0.resdata =
        await load_user_role0.entity.load(load_user_role0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_user_role0: ', ctrl.explain) }
      makeValid(dm, validate, load_user_role0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user_role0.match.id`",
        "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
      })

      // Step: update_user_role1 - update user_role
      const update_user_role1 = makeStepData(dm, 'update_user_role1')
      update_user_role1.entity = load_user_role0.entity
      update_user_role1.reqdata = makeReqdata(dm, transform, {
        "email": "s1-`$WHEN`"
      })
      update_user_role1.resdata =
        await update_user_role1.entity.update(update_user_role1.reqdata, ctrl = makeCtrl(explain))
      if( explain ) { console.log('update_user_role1: ', ctrl.explain) }
      makeValid(dm, validate, update_user_role1.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user_role0.match.id`",
        "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`",
        "email": "`dm$=s.update_user_role1.reqdata.email`"
      })

      // Step: load_user_role2 - load user_role
      const load_user_role2 = makeStepData(dm, 'load_user_role2')
      load_user_role2.entity = client.UserRole()
      load_user_role2.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_USER_ROLE_ENTID.user_role01`",
        "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
      })
      load_user_role2.resdata =
        await load_user_role2.entity.load(load_user_role2.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_user_role2: ', ctrl.explain) }
      makeValid(dm, validate, load_user_role2.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user_role0.match.id`",
        "user_id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`",
        "email": "`dm$=s.update_user_role1.reqdata.email`"
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
    "user_role": {
      "USER_ROLE01": {
        "id": "USER_ROLE01",
        "email": "s1",
        "username": "s2",
        "role_id": "s3",
        "user_role": {},
        "assigned_courses": [],
        "assigned_seat_offering_ids": [],
        "assigned_user_group_ids": [],
        "assigned_segment_id": "s8",
        "user_id": "USER01"
      },
      "USER_ROLE02": {
        "id": "USER_ROLE02",
        "email": "s5b",
        "username": "s5c",
        "role_id": "s5d",
        "user_role": {},
        "assigned_courses": [],
        "assigned_seat_offering_ids": [],
        "assigned_user_group_ids": [],
        "assigned_segment_id": "s62"
      },
      "USER_ROLE03": {
        "id": "USER_ROLE03",
        "email": "sb5",
        "username": "sb6",
        "role_id": "sb7",
        "user_role": {},
        "assigned_courses": [],
        "assigned_seat_offering_ids": [],
        "assigned_user_group_ids": [],
        "assigned_segment_id": "sbc"
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_USER_ROLE_ENTID": {
        "user_role01": "USER_ROLE01",
        "user_role02": "USER_ROLE02",
        "user_role03": "USER_ROLE03"
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
  setup.explain = 'TRUE' === setup.dm.p.Learnworlds_TEST_EXPLAIN

  return setup
}

