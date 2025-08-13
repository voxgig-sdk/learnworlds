// Learnworlds Ts SDK

import { TestFeature } from './feature/test/TestFeature'

import { AffiliateEntity } from './entity/AffiliateEntity'
import { BundleEntity } from './entity/BundleEntity'
import { CertificateEntity } from './entity/CertificateEntity'
import { CommunityCollectionEntity } from './entity/CommunityCollectionEntity'
import { CommunityPostEntity } from './entity/CommunityPostEntity'
import { CommunitySpaceEntity } from './entity/CommunitySpaceEntity'
import { CompleteEntity } from './entity/CompleteEntity'
import { CouponEntity } from './entity/CouponEntity'
import { CouponUsageEntity } from './entity/CouponUsageEntity'
import { CourseEntity } from './entity/CourseEntity'
import { CourseAnalyticEntity } from './entity/CourseAnalyticEntity'
import { CourseContentEntity } from './entity/CourseContentEntity'
import { EnrollmentEntity } from './entity/EnrollmentEntity'
import { EventLogEntity } from './entity/EventLogEntity'
import { GradeEntity } from './entity/GradeEntity'
import { InstallmentEntity } from './entity/InstallmentEntity'
import { InvoiceLinkEntity } from './entity/InvoiceLinkEntity'
import { LeadEntity } from './entity/LeadEntity'
import { PaymentEntity } from './entity/PaymentEntity'
import { PayoutCompletedEntity } from './entity/PayoutCompletedEntity'
import { PayoutDueEntity } from './entity/PayoutDueEntity'
import { PayoutDueUpcomingEntity } from './entity/PayoutDueUpcomingEntity'
import { ProductEntity } from './entity/ProductEntity'
import { PromotionEntity } from './entity/PromotionEntity'
import { ResetEntity } from './entity/ResetEntity'
import { SchoolEventEntity } from './entity/SchoolEventEntity'
import { SeatEntity } from './entity/SeatEntity'
import { SpaceEntity } from './entity/SpaceEntity'
import { SubscriptionPlanEntity } from './entity/SubscriptionPlanEntity'
import { UnitAnalyticEntity } from './entity/UnitAnalyticEntity'
import { UserEntity } from './entity/UserEntity'
import { UserGroupEntity } from './entity/UserGroupEntity'
import { UserProgressEntity } from './entity/UserProgressEntity'
import { UserResponseEntity } from './entity/UserResponseEntity'
import { UserRoleEntity } from './entity/UserRoleEntity'
import { UserSegmentEntity } from './entity/UserSegmentEntity'
import { UserSubscriptionEntity } from './entity/UserSubscriptionEntity'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { Config } from './Config'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'

const utility = new Utility()


class LearnworldsSDK {
  _mode: string = 'live'
  _options: any
  _utility = utility
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.contextify({
      client: this,
      utility: this._utility,
      config: Config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.options(this._rootctx)

    const getpath = this._utility.struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const addfeature = this._utility.addfeature
    const initfeature = this._utility.initfeature

    addfeature(this._rootctx, new TestFeature())

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        addfeature(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      initfeature(this._rootctx, f)
    }

    const featurehook = this._utility.featurehook
    featurehook(this._rootctx, 'PostConstruct')
  }


  options() {
    return { ...this._options }
  }


  utility() {
    return { ...this._utility }
  }



  Affiliate(data?: any) {
    const self = this
    return new AffiliateEntity(self, data)
  }


  Bundle(data?: any) {
    const self = this
    return new BundleEntity(self, data)
  }


  Certificate(data?: any) {
    const self = this
    return new CertificateEntity(self, data)
  }


  CommunityCollection(data?: any) {
    const self = this
    return new CommunityCollectionEntity(self, data)
  }


  CommunityPost(data?: any) {
    const self = this
    return new CommunityPostEntity(self, data)
  }


  CommunitySpace(data?: any) {
    const self = this
    return new CommunitySpaceEntity(self, data)
  }


  Complete(data?: any) {
    const self = this
    return new CompleteEntity(self, data)
  }


  Coupon(data?: any) {
    const self = this
    return new CouponEntity(self, data)
  }


  CouponUsage(data?: any) {
    const self = this
    return new CouponUsageEntity(self, data)
  }


  Course(data?: any) {
    const self = this
    return new CourseEntity(self, data)
  }


  CourseAnalytic(data?: any) {
    const self = this
    return new CourseAnalyticEntity(self, data)
  }


  CourseContent(data?: any) {
    const self = this
    return new CourseContentEntity(self, data)
  }


  Enrollment(data?: any) {
    const self = this
    return new EnrollmentEntity(self, data)
  }


  EventLog(data?: any) {
    const self = this
    return new EventLogEntity(self, data)
  }


  Grade(data?: any) {
    const self = this
    return new GradeEntity(self, data)
  }


  Installment(data?: any) {
    const self = this
    return new InstallmentEntity(self, data)
  }


  InvoiceLink(data?: any) {
    const self = this
    return new InvoiceLinkEntity(self, data)
  }


  Lead(data?: any) {
    const self = this
    return new LeadEntity(self, data)
  }


  Payment(data?: any) {
    const self = this
    return new PaymentEntity(self, data)
  }


  PayoutCompleted(data?: any) {
    const self = this
    return new PayoutCompletedEntity(self, data)
  }


  PayoutDue(data?: any) {
    const self = this
    return new PayoutDueEntity(self, data)
  }


  PayoutDueUpcoming(data?: any) {
    const self = this
    return new PayoutDueUpcomingEntity(self, data)
  }


  Product(data?: any) {
    const self = this
    return new ProductEntity(self, data)
  }


  Promotion(data?: any) {
    const self = this
    return new PromotionEntity(self, data)
  }


  Reset(data?: any) {
    const self = this
    return new ResetEntity(self, data)
  }


  SchoolEvent(data?: any) {
    const self = this
    return new SchoolEventEntity(self, data)
  }


  Seat(data?: any) {
    const self = this
    return new SeatEntity(self, data)
  }


  Space(data?: any) {
    const self = this
    return new SpaceEntity(self, data)
  }


  SubscriptionPlan(data?: any) {
    const self = this
    return new SubscriptionPlanEntity(self, data)
  }


  UnitAnalytic(data?: any) {
    const self = this
    return new UnitAnalyticEntity(self, data)
  }


  User(data?: any) {
    const self = this
    return new UserEntity(self, data)
  }


  UserGroup(data?: any) {
    const self = this
    return new UserGroupEntity(self, data)
  }


  UserProgress(data?: any) {
    const self = this
    return new UserProgressEntity(self, data)
  }


  UserResponse(data?: any) {
    const self = this
    return new UserResponseEntity(self, data)
  }


  UserRole(data?: any) {
    const self = this
    return new UserRoleEntity(self, data)
  }


  UserSegment(data?: any) {
    const self = this
    return new UserSegmentEntity(self, data)
  }


  UserSubscription(data?: any) {
    const self = this
    return new UserSubscriptionEntity(self, data)
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


  toJSON() {
    return { name: 'Learnworlds' }
  }

  toString() {
    return 'Learnworlds ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
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


