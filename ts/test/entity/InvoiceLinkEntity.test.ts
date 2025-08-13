
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


describe('InvoiceLinkEntity', async () => {

  test('instance', async () => {
    const testsdk = LearnworldsSDK.test()
    const ent = testsdk.InvoiceLink()
    equal(null !== ent, true)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const { dm, options, client, struct, explain } = setup
    const { validate, transform } = struct
    let ctrl: any = {}

    try {

      // Step: load_invoice_link0 - load invoice_link
      const load_invoice_link0 = makeStepData(dm, 'load_invoice_link0')
      load_invoice_link0.entity = client.InvoiceLink()
      load_invoice_link0.match = makeMatch(dm, transform, {
        "id": "`dm$=p.LEARNWORLDS_TEST_INVOICE_LINK_ENTID.invoice_link01`",
        "payment_id": "`dm$=p.LEARNWORLDS_TEST_PAYMENT_ENTID.payment01`"
      })
      load_invoice_link0.resdata =
        await load_invoice_link0.entity.load(load_invoice_link0.match, ctrl = makeCtrl(explain))
      if( explain ) { console.log('load_invoice_link0: ', ctrl.explain) }
      makeValid(dm, validate, load_invoice_link0.resdata, {
        "`$OPEN`": true,
        "id": "`dm$=s.load_invoice_link0.match.id`",
        "payment_id": "`dm$=p.LEARNWORLDS_TEST_PAYMENT_ENTID.payment01`"
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
    "invoice_link": {
      "INVOICE_LINK01": {
        "invoice": "s0",
        "url": "s1",
        "expires_at": 2,
        "id": "INVOICE_LINK01",
        "payment_id": "PAYMENT01"
      },
      "INVOICE_LINK02": {
        "invoice": "s1e",
        "url": "s1f",
        "expires_at": 32,
        "id": "INVOICE_LINK02"
      },
      "INVOICE_LINK03": {
        "invoice": "s3c",
        "url": "s3d",
        "expires_at": 62,
        "id": "INVOICE_LINK03"
      }
    }
  }
}

  const setup: any = {
    dm: {
      p: envOverride({
      "LEARNWORLDS_TEST_INVOICE_LINK_ENTID": {
        "invoice_link01": "INVOICE_LINK01",
        "invoice_link02": "INVOICE_LINK02",
        "invoice_link03": "INVOICE_LINK03"
      },
      "LEARNWORLDS_TEST_LIVE": "FALSE",
      "LEARNWORLDS_TEST_EXPLAIN": "FALSE",
      "LEARNWORLDS_TEST_PAYMENT_ENTID": {
        "payment01": "PAYMENT01"
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
  setup.explain = 'TRUE' === setup.dm.p.LEARNWORLDS_TEST_EXPLAIN

  return setup
}

