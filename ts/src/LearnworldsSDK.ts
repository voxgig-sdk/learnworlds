// Learnworlds Ts SDK

import { TestFeature } from './feature/test/TestFeature'

import { AffiliateEntity } from './entity/AffiliateEntity'
import { UserEntity } from './entity/UserEntity'
import { PaymentEntity } from './entity/PaymentEntity'
import { PayoutCompletedEntity } from './entity/PayoutCompletedEntity'
import { PayoutDueEntity } from './entity/PayoutDueEntity'
import { PayoutDueUpcomingEntity } from './entity/PayoutDueUpcomingEntity'
import { UserResponseEntity } from './entity/UserResponseEntity'
import { BundleEntity } from './entity/BundleEntity'
import { CertificateEntity } from './entity/CertificateEntity'
import { CommunityCollectionEntity } from './entity/CommunityCollectionEntity'
import { CommunityPostEntity } from './entity/CommunityPostEntity'
import { CommunitySpaceEntity } from './entity/CommunitySpaceEntity'
import { SpaceEntity } from './entity/SpaceEntity'
import { CourseEntity } from './entity/CourseEntity'
import { CourseAnalyticEntity } from './entity/CourseAnalyticEntity'
import { CourseContentEntity } from './entity/CourseContentEntity'
import { GradeEntity } from './entity/GradeEntity'
import { UnitAnalyticEntity } from './entity/UnitAnalyticEntity'
import { EventLogEntity } from './entity/EventLogEntity'
import { InstallmentEntity } from './entity/InstallmentEntity'
import { LeadEntity } from './entity/LeadEntity'
import { InvoiceLinkEntity } from './entity/InvoiceLinkEntity'
import { PromotionEntity } from './entity/PromotionEntity'
import { CouponEntity } from './entity/CouponEntity'
import { CouponUsageEntity } from './entity/CouponUsageEntity'
import { SchoolEventEntity } from './entity/SchoolEventEntity'
import { SeatEntity } from './entity/SeatEntity'
import { SubscriptionPlanEntity } from './entity/SubscriptionPlanEntity'
import { UserRoleEntity } from './entity/UserRoleEntity'
import { UserSubscriptionEntity } from './entity/UserSubscriptionEntity'
import { UserGroupEntity } from './entity/UserGroupEntity'
import { UserSegmentEntity } from './entity/UserSegmentEntity'
import { EnrollmentEntity } from './entity/EnrollmentEntity'
import { CompleteEntity } from './entity/CompleteEntity'
import { UserProgressEntity } from './entity/UserProgressEntity'
import { ResetEntity } from './entity/ResetEntity'
import { ProductEntity } from './entity/ProductEntity'


import type { Feature } from './types'

import { Config } from './Config'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'

const utility = new Utility()


class LearnworldsSDK {
  #options: any
  #utility = utility

  _features: Feature[]


  constructor(options?: any) {

    const ctx = this.#utility.contextify({
      client: this,
      utility: this.#utility,
      config: Config,
      options,
    })

    this.#options = this.#utility.options(ctx)

    ctx.options = this.#options

    this._features = []

    const addfeature = this.#utility.addfeature
    const initfeature = this.#utility.initfeature

    addfeature(ctx, new TestFeature())

    if (null != this.#options.extend) {
      for (let f of this.#options.extend) {
        addfeature(ctx, f)
      }
    }

    for (let f of this._features) {
      initfeature(ctx, f)
    }

    const featurehook = this.#utility.featurehook
    featurehook(ctx, 'PostConstruct')
  }


  options() {
    return { ...this.#options }
  }


  utility() {
    return { ...this.#utility }
  }



  Affiliate(data?: any) {
    const self = this
    return new AffiliateEntity(self,data)
  }


  User(data?: any) {
    const self = this
    return new UserEntity(self,data)
  }


  Payment(data?: any) {
    const self = this
    return new PaymentEntity(self,data)
  }


  PayoutCompleted(data?: any) {
    const self = this
    return new PayoutCompletedEntity(self,data)
  }


  PayoutDue(data?: any) {
    const self = this
    return new PayoutDueEntity(self,data)
  }


  PayoutDueUpcoming(data?: any) {
    const self = this
    return new PayoutDueUpcomingEntity(self,data)
  }


  UserResponse(data?: any) {
    const self = this
    return new UserResponseEntity(self,data)
  }


  Bundle(data?: any) {
    const self = this
    return new BundleEntity(self,data)
  }


  Certificate(data?: any) {
    const self = this
    return new CertificateEntity(self,data)
  }


  CommunityCollection(data?: any) {
    const self = this
    return new CommunityCollectionEntity(self,data)
  }


  CommunityPost(data?: any) {
    const self = this
    return new CommunityPostEntity(self,data)
  }


  CommunitySpace(data?: any) {
    const self = this
    return new CommunitySpaceEntity(self,data)
  }


  Space(data?: any) {
    const self = this
    return new SpaceEntity(self,data)
  }


  Course(data?: any) {
    const self = this
    return new CourseEntity(self,data)
  }


  CourseAnalytic(data?: any) {
    const self = this
    return new CourseAnalyticEntity(self,data)
  }


  CourseContent(data?: any) {
    const self = this
    return new CourseContentEntity(self,data)
  }


  Grade(data?: any) {
    const self = this
    return new GradeEntity(self,data)
  }


  UnitAnalytic(data?: any) {
    const self = this
    return new UnitAnalyticEntity(self,data)
  }


  EventLog(data?: any) {
    const self = this
    return new EventLogEntity(self,data)
  }


  Installment(data?: any) {
    const self = this
    return new InstallmentEntity(self,data)
  }


  Lead(data?: any) {
    const self = this
    return new LeadEntity(self,data)
  }


  InvoiceLink(data?: any) {
    const self = this
    return new InvoiceLinkEntity(self,data)
  }


  Promotion(data?: any) {
    const self = this
    return new PromotionEntity(self,data)
  }


  Coupon(data?: any) {
    const self = this
    return new CouponEntity(self,data)
  }


  CouponUsage(data?: any) {
    const self = this
    return new CouponUsageEntity(self,data)
  }


  SchoolEvent(data?: any) {
    const self = this
    return new SchoolEventEntity(self,data)
  }


  Seat(data?: any) {
    const self = this
    return new SeatEntity(self,data)
  }


  SubscriptionPlan(data?: any) {
    const self = this
    return new SubscriptionPlanEntity(self,data)
  }


  UserRole(data?: any) {
    const self = this
    return new UserRoleEntity(self,data)
  }


  UserSubscription(data?: any) {
    const self = this
    return new UserSubscriptionEntity(self,data)
  }


  UserGroup(data?: any) {
    const self = this
    return new UserGroupEntity(self,data)
  }


  UserSegment(data?: any) {
    const self = this
    return new UserSegmentEntity(self,data)
  }


  Enrollment(data?: any) {
    const self = this
    return new EnrollmentEntity(self,data)
  }


  Complete(data?: any) {
    const self = this
    return new CompleteEntity(self,data)
  }


  UserProgress(data?: any) {
    const self = this
    return new UserProgressEntity(self,data)
  }


  Reset(data?: any) {
    const self = this
    return new ResetEntity(self,data)
  }


  Product(data?: any) {
    const self = this
    return new ProductEntity(self,data)
  }




  static test(testopts?: any, sdkopts?: any) {
    const active = null == testopts ? false : null == testopts.active ? true : !!testopts.active
    testopts = testopts || {}
    testopts.active = active

    sdkopts = sdkopts || {}
    sdkopts.feature = sdkopts.feature || {}
    sdkopts.feature.test = testopts || {}
    sdkopts.feature.test.active = true

    return new LearnworldsSDK(sdkopts)
  }


  tester(testopts?: any, sdkopts?: any) {
    return LearnworldsSDK.test(testopts, sdkopts)
  }

}


class LearnworldsEntity {

}



const SDK = LearnworldsSDK

export {
  utility,

  BaseFeature,
  LearnworldsEntity,

  LearnworldsSDK,
  SDK,
}


