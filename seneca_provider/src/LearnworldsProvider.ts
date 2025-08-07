// Learnworlds Seneca Provider

import { makeAffiliateActions } from './entity/AffiliateEntity'
import { makeUserActions } from './entity/UserEntity'
import { makePaymentActions } from './entity/PaymentEntity'
import { makePayoutCompletedActions } from './entity/PayoutCompletedEntity'
import { makePayoutDueActions } from './entity/PayoutDueEntity'
import { makePayoutDueUpcomingActions } from './entity/PayoutDueUpcomingEntity'
import { makeUserResponseActions } from './entity/UserResponseEntity'
import { makeBundleActions } from './entity/BundleEntity'
import { makeCertificateActions } from './entity/CertificateEntity'
import { makeCommunityCollectionActions } from './entity/CommunityCollectionEntity'
import { makeCommunityPostActions } from './entity/CommunityPostEntity'
import { makeCommunitySpaceActions } from './entity/CommunitySpaceEntity'
import { makeSpaceActions } from './entity/SpaceEntity'
import { makeCourseActions } from './entity/CourseEntity'
import { makeCourseAnalyticActions } from './entity/CourseAnalyticEntity'
import { makeCourseContentActions } from './entity/CourseContentEntity'
import { makeGradeActions } from './entity/GradeEntity'
import { makeUnitAnalyticActions } from './entity/UnitAnalyticEntity'
import { makeEventLogActions } from './entity/EventLogEntity'
import { makeInstallmentActions } from './entity/InstallmentEntity'
import { makeLeadActions } from './entity/LeadEntity'
import { makeInvoiceLinkActions } from './entity/InvoiceLinkEntity'
import { makePromotionActions } from './entity/PromotionEntity'
import { makeCouponActions } from './entity/CouponEntity'
import { makeCouponUsageActions } from './entity/CouponUsageEntity'
import { makeSchoolEventActions } from './entity/SchoolEventEntity'
import { makeSeatActions } from './entity/SeatEntity'
import { makeSubscriptionPlanActions } from './entity/SubscriptionPlanEntity'
import { makeUserRoleActions } from './entity/UserRoleEntity'
import { makeUserSubscriptionActions } from './entity/UserSubscriptionEntity'
import { makeUserGroupActions } from './entity/UserGroupEntity'
import { makeUserSegmentActions } from './entity/UserSegmentEntity'
import { makeEnrollmentActions } from './entity/EnrollmentEntity'
import { makeCompleteActions } from './entity/CompleteEntity'
import { makeUserProgressActions } from './entity/UserProgressEntity'
import { makeResetActions } from './entity/ResetEntity'
import { makeProductActions } from './entity/ProductEntity'

/* Copyright © 2025 Seneca Project Contributors, MIT License. */

import Pkg from '../package.json'

import { LearnworldsSDK } from '@voxgig-sdk/learnworlds'

type LearnworldsProviderOptions = {
  debug: boolean,
  native?: any
}

function LearnworldsProvider(this: any, options: LearnworldsProviderOptions) {
  const seneca: any = this

  const entityBuilder = this.export('provider/entityBuilder')

  seneca.message('sys:provider,provider:learnworlds,get:info', get_info)

  async function get_info(this: any, _msg: any) {
    return {
      ok: true,
      name: 'learnworlds',
      version: Pkg.version,
      sdk: {
        name: 'learnworlds',
        version: (Pkg.peerDependencies as any)['@voxgig-sdk/learnworlds'],
      },
    }
  }

  const entdef: any = {}



  entdef.affiliate = makeAffiliateActions()

  entdef.user = makeUserActions()

  entdef.payment = makePaymentActions()

  entdef.payout_completed = makePayoutCompletedActions()

  entdef.payout_due = makePayoutDueActions()

  entdef.payout_due_upcoming = makePayoutDueUpcomingActions()

  entdef.user_response = makeUserResponseActions()

  entdef.bundle = makeBundleActions()

  entdef.certificate = makeCertificateActions()

  entdef.community_collection = makeCommunityCollectionActions()

  entdef.community_post = makeCommunityPostActions()

  entdef.community_space = makeCommunitySpaceActions()

  entdef.space = makeSpaceActions()

  entdef.course = makeCourseActions()

  entdef.course_analytic = makeCourseAnalyticActions()

  entdef.course_content = makeCourseContentActions()

  entdef.grade = makeGradeActions()

  entdef.unit_analytic = makeUnitAnalyticActions()

  entdef.event_log = makeEventLogActions()

  entdef.installment = makeInstallmentActions()

  entdef.lead = makeLeadActions()

  entdef.invoice_link = makeInvoiceLinkActions()

  entdef.promotion = makePromotionActions()

  entdef.coupon = makeCouponActions()

  entdef.coupon_usage = makeCouponUsageActions()

  entdef.school_event = makeSchoolEventActions()

  entdef.seat = makeSeatActions()

  entdef.subscription_plan = makeSubscriptionPlanActions()

  entdef.user_role = makeUserRoleActions()

  entdef.user_subscription = makeUserSubscriptionActions()

  entdef.user_group = makeUserGroupActions()

  entdef.user_segment = makeUserSegmentActions()

  entdef.enrollment = makeEnrollmentActions()

  entdef.complete = makeCompleteActions()

  entdef.user_progress = makeUserProgressActions()

  entdef.reset = makeResetActions()

  entdef.product = makeProductActions()



  entityBuilder(this, {
    provider: {
      name: 'learnworlds',
    },
    entity: entdef
  })

  seneca.prepare(async function(this: any) {
    let res = await this.post(
      'sys:provider,get:keymap,provider:Learnworlds'
    )

    if (!res.ok) {
      throw new Error('Learnworlds Error: no keymap')
    }

    this.shared.sdk = new LearnworldsSDK(this.util.deep({}, options.native || {}, {
      base: res.keymap.base.value,
      apikey: res.keymap.apikey.value,
      headers: {
        'Lw-Client': res.keymap.clientid.value,
      }
    }))
  })

  return {
    exports: {
      sdk: () => this.shared.sdk,
    },
  }
}

// Default options.
const defaults: LearnworldsProviderOptions = {
  // TODO: Enable debug logging
  debug: false,
}

Object.assign(LearnworldsProvider, { defaults })

export default LearnworldsProvider

if ('undefined' !== typeof module) {
  module.exports = LearnworldsProvider
}


