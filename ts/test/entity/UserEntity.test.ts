
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


describe('UserEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.User()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_user0 - load user
      const load_user0 = makeStepData(dm, 'load_user0')
      load_user0.entity = client.User()
      load_user0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
      })
      load_user0.resdata =
        await load_user0.entity.load(load_user0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_user0: ', ctrl.explain) }
      makeValid(dm, validate, load_user0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user0.match.id`"
      })

      // Step: update_user1 - update user
      const update_user1 = makeStepData(dm, 'update_user1')
      update_user1.entity = load_user0.entity
      update_user1.reqdata = makeReqdata(dm, transform, {
        "email": "s1-`$WHEN`"
      })
      update_user1.resdata =
        await update_user1.entity.update(update_user1.reqdata, ctrl = makeCtrl(explain))
      if( explain ) { console.log('update_user1: ', ctrl.explain) }
      makeValid(dm, validate, update_user1.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user0.match.id`",
        "email": "`dm$=s.update_user1.reqdata.email`"
      })

      // Step: load_user2 - load user
      const load_user2 = makeStepData(dm, 'load_user2')
      load_user2.entity = client.User()
      load_user2.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_USER_ENTID.user01`"
      })
      load_user2.resdata =
        await load_user2.entity.load(load_user2.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_user2: ', ctrl.explain) }
      makeValid(dm, validate, load_user2.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_user0.match.id`",
        "email": "`dm$=s.update_user1.reqdata.email`"
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
    "user": {
      "USER01": {
        "id": "USER01",
        "email": "s1",
        "username": "s2",
        "subscribed_for_marketing_emails": false,
        "eu_customer": true,
        "is_admin": false,
        "is_instructor": true,
        "is_suspended": false,
        "is_reporter": true,
        "role": {},
        "is_affiliate": true,
        "referrer_id": "sb",
        "last_login": 12,
        "signup_approval_status": "sd",
        "created": 14,
        "fields": {},
        "tags": [],
        "utms": {},
        "billing_info": {},
        "nps_score": "s13",
        "nps_comment": "s14"
      },
      "USER02": {
        "id": "USER02",
        "email": "sd3",
        "username": "sd4",
        "subscribed_for_marketing_emails": false,
        "eu_customer": true,
        "is_admin": false,
        "is_instructor": true,
        "is_suspended": false,
        "is_reporter": true,
        "role": {},
        "is_affiliate": true,
        "referrer_id": "sdd",
        "last_login": 222,
        "signup_approval_status": "sdf",
        "created": 224,
        "fields": {},
        "tags": [],
        "utms": {},
        "billing_info": {},
        "nps_score": "se5",
        "nps_comment": "se6"
      },
      "USER03": {
        "id": "USER03",
        "email": "s1a5",
        "username": "s1a6",
        "subscribed_for_marketing_emails": false,
        "eu_customer": true,
        "is_admin": false,
        "is_instructor": true,
        "is_suspended": false,
        "is_reporter": true,
        "role": {},
        "is_affiliate": true,
        "referrer_id": "s1af",
        "last_login": 432,
        "signup_approval_status": "s1b1",
        "created": 434,
        "fields": {},
        "tags": [],
        "utms": {},
        "billing_info": {},
        "nps_score": "s1b7",
        "nps_comment": "s1b8"
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_USER_ENTID": {
        "user01": "USER01",
        "user02": "USER02",
        "user03": "USER03"
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

