"use strict";
// Learnworlds Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.LearnworldsSDK = exports.LearnworldsEntity = exports.BaseFeature = exports.utility = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const AffiliateEntity_1 = require("./entity/AffiliateEntity");
const BundleEntity_1 = require("./entity/BundleEntity");
const CertificateEntity_1 = require("./entity/CertificateEntity");
const CommunityCollectionEntity_1 = require("./entity/CommunityCollectionEntity");
const CommunityPostEntity_1 = require("./entity/CommunityPostEntity");
const CommunitySpaceEntity_1 = require("./entity/CommunitySpaceEntity");
const CompleteEntity_1 = require("./entity/CompleteEntity");
const CouponEntity_1 = require("./entity/CouponEntity");
const CouponUsageEntity_1 = require("./entity/CouponUsageEntity");
const CourseEntity_1 = require("./entity/CourseEntity");
const CourseAnalyticEntity_1 = require("./entity/CourseAnalyticEntity");
const CourseContentEntity_1 = require("./entity/CourseContentEntity");
const EnrollmentEntity_1 = require("./entity/EnrollmentEntity");
const EventLogEntity_1 = require("./entity/EventLogEntity");
const GradeEntity_1 = require("./entity/GradeEntity");
const InstallmentEntity_1 = require("./entity/InstallmentEntity");
const InvoiceLinkEntity_1 = require("./entity/InvoiceLinkEntity");
const LeadEntity_1 = require("./entity/LeadEntity");
const PaymentEntity_1 = require("./entity/PaymentEntity");
const PayoutCompletedEntity_1 = require("./entity/PayoutCompletedEntity");
const PayoutDueEntity_1 = require("./entity/PayoutDueEntity");
const PayoutDueUpcomingEntity_1 = require("./entity/PayoutDueUpcomingEntity");
const ProductEntity_1 = require("./entity/ProductEntity");
const PromotionEntity_1 = require("./entity/PromotionEntity");
const ResetEntity_1 = require("./entity/ResetEntity");
const SchoolEventEntity_1 = require("./entity/SchoolEventEntity");
const SeatEntity_1 = require("./entity/SeatEntity");
const SpaceEntity_1 = require("./entity/SpaceEntity");
const SubscriptionPlanEntity_1 = require("./entity/SubscriptionPlanEntity");
const UnitAnalyticEntity_1 = require("./entity/UnitAnalyticEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserGroupEntity_1 = require("./entity/UserGroupEntity");
const UserProgressEntity_1 = require("./entity/UserProgressEntity");
const UserResponseEntity_1 = require("./entity/UserResponseEntity");
const UserRoleEntity_1 = require("./entity/UserRoleEntity");
const UserSegmentEntity_1 = require("./entity/UserSegmentEntity");
const UserSubscriptionEntity_1 = require("./entity/UserSubscriptionEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const utility = new Utility_1.Utility();
exports.utility = utility;
class LearnworldsSDK {
    _mode = 'live';
    _options;
    _utility = utility;
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.contextify({
            client: this,
            utility: this._utility,
            config: Config_1.Config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.options(this._rootctx);
        const getpath = this._utility.struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const addfeature = this._utility.addfeature;
        const initfeature = this._utility.initfeature;
        addfeature(this._rootctx, new TestFeature_1.TestFeature());
        if (null != this._options.extend) {
            for (let f of this._options.extend) {
                addfeature(this._rootctx, f);
            }
        }
        for (let f of this._features) {
            initfeature(this._rootctx, f);
        }
        const featurehook = this._utility.featurehook;
        featurehook(this._rootctx, 'PostConstruct');
    }
    options() {
        return { ...this._options };
    }
    utility() {
        return { ...this._utility };
    }
    Affiliate(data) {
        const self = this;
        return new AffiliateEntity_1.AffiliateEntity(self, data);
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
    Complete(data) {
        const self = this;
        return new CompleteEntity_1.CompleteEntity(self, data);
    }
    Coupon(data) {
        const self = this;
        return new CouponEntity_1.CouponEntity(self, data);
    }
    CouponUsage(data) {
        const self = this;
        return new CouponUsageEntity_1.CouponUsageEntity(self, data);
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
    Enrollment(data) {
        const self = this;
        return new EnrollmentEntity_1.EnrollmentEntity(self, data);
    }
    EventLog(data) {
        const self = this;
        return new EventLogEntity_1.EventLogEntity(self, data);
    }
    Grade(data) {
        const self = this;
        return new GradeEntity_1.GradeEntity(self, data);
    }
    Installment(data) {
        const self = this;
        return new InstallmentEntity_1.InstallmentEntity(self, data);
    }
    InvoiceLink(data) {
        const self = this;
        return new InvoiceLinkEntity_1.InvoiceLinkEntity(self, data);
    }
    Lead(data) {
        const self = this;
        return new LeadEntity_1.LeadEntity(self, data);
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
    Product(data) {
        const self = this;
        return new ProductEntity_1.ProductEntity(self, data);
    }
    Promotion(data) {
        const self = this;
        return new PromotionEntity_1.PromotionEntity(self, data);
    }
    Reset(data) {
        const self = this;
        return new ResetEntity_1.ResetEntity(self, data);
    }
    SchoolEvent(data) {
        const self = this;
        return new SchoolEventEntity_1.SchoolEventEntity(self, data);
    }
    Seat(data) {
        const self = this;
        return new SeatEntity_1.SeatEntity(self, data);
    }
    Space(data) {
        const self = this;
        return new SpaceEntity_1.SpaceEntity(self, data);
    }
    SubscriptionPlan(data) {
        const self = this;
        return new SubscriptionPlanEntity_1.SubscriptionPlanEntity(self, data);
    }
    UnitAnalytic(data) {
        const self = this;
        return new UnitAnalyticEntity_1.UnitAnalyticEntity(self, data);
    }
    User(data) {
        const self = this;
        return new UserEntity_1.UserEntity(self, data);
    }
    UserGroup(data) {
        const self = this;
        return new UserGroupEntity_1.UserGroupEntity(self, data);
    }
    UserProgress(data) {
        const self = this;
        return new UserProgressEntity_1.UserProgressEntity(self, data);
    }
    UserResponse(data) {
        const self = this;
        return new UserResponseEntity_1.UserResponseEntity(self, data);
    }
    UserRole(data) {
        const self = this;
        return new UserRoleEntity_1.UserRoleEntity(self, data);
    }
    UserSegment(data) {
        const self = this;
        return new UserSegmentEntity_1.UserSegmentEntity(self, data);
    }
    UserSubscription(data) {
        const self = this;
        return new UserSubscriptionEntity_1.UserSubscriptionEntity(self, data);
    }
    static test(testopts, sdkopts) {
        sdkopts = sdkopts || {};
        sdkopts.feature = sdkopts.feature || {};
        sdkopts.feature.test = testopts || {};
        sdkopts.feature.test.active = true;
        const testsdk = new LearnworldsSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return LearnworldsSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Learnworlds' };
    }
    toString() {
        return 'Learnworlds ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.LearnworldsSDK = LearnworldsSDK;
class LearnworldsEntity {
}
exports.LearnworldsEntity = LearnworldsEntity;
const SDK = LearnworldsSDK;
exports.SDK = SDK;
//# sourceMappingURL=LearnworldsSDK.js.map