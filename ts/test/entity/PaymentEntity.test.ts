
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


describe('PaymentEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.Payment()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_payment0 - load payment
      const load_payment0 = makeStepData(dm, 'load_payment0')
      load_payment0.entity = client.Payment()
      load_payment0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_PAYMENT_ENTID.payment01`"
      })
      load_payment0.resdata =
        await load_payment0.entity.load(load_payment0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_payment0: ', ctrl.explain) }
      makeValid(dm, validate, load_payment0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_payment0.match.id`"
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
    "payment": {
      "PAYMENT01": {
        "id": "PAYMENT01",
        "transaction_id": "s1",
        "type": "s2",
        "product": {},
        "price": 4,
        "discount": 5,
        "refund_at": 6,
        "user_id": "s7",
        "paid_at": 8,
        "invoice": "s9",
        "billing_info": {},
        "coupon": "sb",
        "instructors": [],
        "instructors_total_percentage": 13,
        "tax_amount": 14,
        "tax_percentage": 15,
        "affiliate": {},
        "period": "s11",
        "payment_plan_current_payment": "s12",
        "payment_plan_total_payments": "s13",
        "gateway": "s14",
        "created": 21
      },
      "PAYMENT02": {
        "id": "PAYMENT02",
        "transaction_id": "sdd",
        "type": "sde",
        "product": {},
        "price": 224,
        "discount": 225,
        "refund_at": 226,
        "user_id": "se3",
        "paid_at": 228,
        "invoice": "se5",
        "billing_info": {},
        "coupon": "se7",
        "instructors": [],
        "instructors_total_percentage": 233,
        "tax_amount": 234,
        "tax_percentage": 235,
        "affiliate": {},
        "period": "sed",
        "payment_plan_current_payment": "see",
        "payment_plan_total_payments": "sef",
        "gateway": "sf0",
        "created": 241
      },
      "PAYMENT03": {
        "id": "PAYMENT03",
        "transaction_id": "s1b9",
        "type": "s1ba",
        "product": {},
        "price": 444,
        "discount": 445,
        "refund_at": 446,
        "user_id": "s1bf",
        "paid_at": 448,
        "invoice": "s1c1",
        "billing_info": {},
        "coupon": "s1c3",
        "instructors": [],
        "instructors_total_percentage": 453,
        "tax_amount": 454,
        "tax_percentage": 455,
        "affiliate": {},
        "period": "s1c9",
        "payment_plan_current_payment": "s1ca",
        "payment_plan_total_payments": "s1cb",
        "gateway": "s1cc",
        "created": 461
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_PAYMENT_ENTID": {
        "payment01": "PAYMENT01",
        "payment02": "PAYMENT02",
        "payment03": "PAYMENT03"
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

