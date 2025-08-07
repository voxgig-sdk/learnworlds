"use strict";
// Learnworlds Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.LearnworldsSDK = exports.LearnworldsEntity = exports.BaseFeature = exports.utility = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const AffiliateEntity_1 = require("./entity/AffiliateEntity");
const UserEntity_1 = require("./entity/UserEntity");
const PaymentEntity_1 = require("./entity/PaymentEntity");
const PayoutCompletedEntity_1 = require("./entity/PayoutCompletedEntity");
const PayoutDueEntity_1 = require("./entity/PayoutDueEntity");
const PayoutDueUpcomingEntity_1 = require("./entity/PayoutDueUpcomingEntity");
const UserResponseEntity_1 = require("./entity/UserResponseEntity");
const BundleEntity_1 = require("./entity/BundleEntity");
const CertificateEntity_1 = require("./entity/CertificateEntity");
const CommunityCollectionEntity_1 = require("./entity/CommunityCollectionEntity");
const CommunityPostEntity_1 = require("./entity/CommunityPostEntity");
const CommunitySpaceEntity_1 = require("./entity/CommunitySpaceEntity");
const SpaceEntity_1 = require("./entity/SpaceEntity");
const CourseEntity_1 = require("./entity/CourseEntity");
const CourseAnalyticEntity_1 = require("./entity/CourseAnalyticEntity");
const CourseContentEntity_1 = require("./entity/CourseContentEntity");
const GradeEntity_1 = require("./entity/GradeEntity");
const UnitAnalyticEntity_1 = require("./entity/UnitAnalyticEntity");
const EventLogEntity_1 = require("./entity/EventLogEntity");
const InstallmentEntity_1 = require("./entity/InstallmentEntity");
const LeadEntity_1 = require("./entity/LeadEntity");
const InvoiceLinkEntity_1 = require("./entity/InvoiceLinkEntity");
const PromotionEntity_1 = require("./entity/PromotionEntity");
const CouponEntity_1 = require("./entity/CouponEntity");
const CouponUsageEntity_1 = require("./entity/CouponUsageEntity");
const SchoolEventEntity_1 = require("./entity/SchoolEventEntity");
const SeatEntity_1 = require("./entity/SeatEntity");
const SubscriptionPlanEntity_1 = require("./entity/SubscriptionPlanEntity");
const UserRoleEntity_1 = require("./entity/UserRoleEntity");
const UserSubscriptionEntity_1 = require("./entity/UserSubscriptionEntity");
const UserGroupEntity_1 = require("./entity/UserGroupEntity");
const UserSegmentEntity_1 = require("./entity/UserSegmentEntity");
const EnrollmentEntity_1 = require("./entity/EnrollmentEntity");
const CompleteEntity_1 = require("./entity/CompleteEntity");
const UserProgressEntity_1 = require("./entity/UserProgressEntity");
const ResetEntity_1 = require("./entity/ResetEntity");
const ProductEntity_1 = require("./entity/ProductEntity");
const Config_1 = require("./Config");
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const utility = new Utility_1.Utility();
exports.utility = utility;
class LearnworldsSDK {
    #options;
    #utility = utility;
    _features;
    constructor(options) {
        const ctx = this.#utility.contextify({
            client: this,
            utility: this.#utility,
            config: Config_1.Config,
            options,
        });
        this.#options = this.#utility.options(ctx);
        ctx.options = this.#options;
        this._features = [];
        const addfeature = this.#utility.addfeature;
        const initfeature = this.#utility.initfeature;
        addfeature(ctx, new TestFeature_1.TestFeature());
        if (null != this.#options.extend) {
            for (let f of this.#options.extend) {
                addfeature(ctx, f);
            }
        }
        for (let f of this._features) {
            initfeature(ctx, f);
        }
        const featurehook = this.#utility.featurehook;
        featurehook(ctx, 'PostConstruct');
    }
    options() {
        return { ...this.#options };
    }
    utility() {
        return { ...this.#utility };
    }
    Affiliate(data) {
        const self = this;
        return new AffiliateEntity_1.AffiliateEntity(self, data);
    }
    User(data) {
        const self = this;
        return new UserEntity_1.UserEntity(self, data);
    }
    Payment(data) {
        const self = this;
        return new PaymentEntity_1.PaymentEntity(self, data);
    }
    PayoutCompleted(data) {
        const self = this;
        return new PayoutCompletedEntity_1.PayoutCompletedEntity(self, data);
    }
    PayoutDue(data) {
        const self = this;
        return new PayoutDueEntity_1.PayoutDueEntity(self, data);
    }
    PayoutDueUpcoming(data) {
        const self = this;
        return new PayoutDueUpcomingEntity_1.PayoutDueUpcomingEntity(self, data);
    }
    UserResponse(data) {
        const self = this;
        return new UserResponseEntity_1.UserResponseEntity(self, data);
    }
    Bundle(data) {
        const self = this;
        return new BundleEntity_1.BundleEntity(self, data);
    }
    Certificate(data) {
        const self = this;
        return new CertificateEntity_1.CertificateEntity(self, data);
    }
    CommunityCollection(data) {
        const self = this;
        return new CommunityCollectionEntity_1.CommunityCollectionEntity(self, data);
    }
    CommunityPost(data) {
        const self = this;
        return new CommunityPostEntity_1.CommunityPostEntity(self, data);
    }
    CommunitySpace(data) {
        const self = this;
        return new CommunitySpaceEntity_1.CommunitySpaceEntity(self, data);
    }
    Space(data) {
        const self = this;
        return new SpaceEntity_1.SpaceEntity(self, data);
    }
    Course(data) {
        const self = this;
        return new CourseEntity_1.CourseEntity(self, data);
    }
    CourseAnalytic(data) {
        const self = this;
        return new CourseAnalyticEntity_1.CourseAnalyticEntity(self, data);
    }
    CourseContent(data) {
        const self = this;
        return new CourseContentEntity_1.CourseContentEntity(self, data);
    }
    Grade(data) {
        const self = this;
        return new GradeEntity_1.GradeEntity(self, data);
    }
    UnitAnalytic(data) {
        const self = this;
        return new UnitAnalyticEntity_1.UnitAnalyticEntity(self, data);
    }
    EventLog(data) {
        const self = this;
        return new EventLogEntity_1.EventLogEntity(self, data);
    }
    Installment(data) {
        const self = this;
        return new InstallmentEntity_1.InstallmentEntity(self, data);
    }
    Lead(data) {
        const self = this;
        return new LeadEntity_1.LeadEntity(self, data);
    }
    InvoiceLink(data) {
        const self = this;
        return new InvoiceLinkEntity_1.InvoiceLinkEntity(self, data);
    }
    Promotion(data) {
        const self = this;
        return new PromotionEntity_1.PromotionEntity(self, data);
    }
    Coupon(data) {
        const self = this;
        return new CouponEntity_1.CouponEntity(self, data);
    }
    CouponUsage(data) {
        const self = this;
        return new CouponUsageEntity_1.CouponUsageEntity(self, data);
    }
    SchoolEvent(data) {
        const self = this;
        return new SchoolEventEntity_1.SchoolEventEntity(self, data);
    }
    Seat(data) {
        const self = this;
        return new SeatEntity_1.SeatEntity(self, data);
    }
    SubscriptionPlan(data) {
        const self = this;
        return new SubscriptionPlanEntity_1.SubscriptionPlanEntity(self, data);
    }
    UserRole(data) {
        const self = this;
        return new UserRoleEntity_1.UserRoleEntity(self, data);
    }
    UserSubscription(data) {
        const self = this;
        return new UserSubscriptionEntity_1.UserSubscriptionEntity(self, data);
    }
    UserGroup(data) {
        const self = this;
        return new UserGroupEntity_1.UserGroupEntity(self, data);
    }
    UserSegment(data) {
        const self = this;
        return new UserSegmentEntity_1.UserSegmentEntity(self, data);
    }
    Enrollment(data) {
        const self = this;
        return new EnrollmentEntity_1.EnrollmentEntity(self, data);
    }
    Complete(data) {
        const self = this;
        return new CompleteEntity_1.CompleteEntity(self, data);
    }
    UserProgress(data) {
        const self = this;
        return new UserProgressEntity_1.UserProgressEntity(self, data);
    }
    Reset(data) {
        const self = this;
        return new ResetEntity_1.ResetEntity(self, data);
    }
    Product(data) {
        const self = this;
        return new ProductEntity_1.ProductEntity(self, data);
    }
    static test(testopts, sdkopts) {
        const active = null == testopts ? false : null == testopts.active ? true : !!testopts.active;
        testopts = testopts || {};
        testopts.active = active;
        sdkopts = sdkopts || {};
        sdkopts.feature = sdkopts.feature || {};
        sdkopts.feature.test = testopts || {};
        sdkopts.feature.test.active = true;
        return new LearnworldsSDK(sdkopts);
    }
    tester(testopts, sdkopts) {
        return LearnworldsSDK.test(testopts, sdkopts);
    }
}
exports.LearnworldsSDK = LearnworldsSDK;
class LearnworldsEntity {
}
exports.LearnworldsEntity = LearnworldsEntity;
const SDK = LearnworldsSDK;
exports.SDK = SDK;
//# sourceMappingURL=LearnworldsSDK.js.map