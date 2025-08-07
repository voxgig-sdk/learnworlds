"use strict";
// Learnworlds Seneca Provider
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
/* Copyright © 2025 Seneca Project Contributors, MIT License. */
const package_json_1 = __importDefault(require("../package.json"));
const learnworlds_1 = require("@voxgig-sdk/learnworlds");
function LearnworldsProvider(options) {
    const seneca = this;
    const entityBuilder = this.export('provider/entityBuilder');
    seneca.message('sys:provider,provider:learnworlds,get:info', get_info);
    async function get_info(_msg) {
        return {
            ok: true,
            name: 'learnworlds',
            version: package_json_1.default.version,
            sdk: {
                name: 'learnworlds',
                version: package_json_1.default.peerDependencies['@voxgig-sdk/learnworlds'],
            },
        };
    }
    const entdef = {};
    entdef.affiliate = (0, AffiliateEntity_1.makeAffiliateActions)();
    entdef.user = (0, UserEntity_1.makeUserActions)();
    entdef.payment = (0, PaymentEntity_1.makePaymentActions)();
    entdef.payout_completed = (0, PayoutCompletedEntity_1.makePayoutCompletedActions)();
    entdef.payout_due = (0, PayoutDueEntity_1.makePayoutDueActions)();
    entdef.payout_due_upcoming = (0, PayoutDueUpcomingEntity_1.makePayoutDueUpcomingActions)();
    entdef.user_response = (0, UserResponseEntity_1.makeUserResponseActions)();
    entdef.bundle = (0, BundleEntity_1.makeBundleActions)();
    entdef.certificate = (0, CertificateEntity_1.makeCertificateActions)();
    entdef.community_collection = (0, CommunityCollectionEntity_1.makeCommunityCollectionActions)();
    entdef.community_post = (0, CommunityPostEntity_1.makeCommunityPostActions)();
    entdef.community_space = (0, CommunitySpaceEntity_1.makeCommunitySpaceActions)();
    entdef.space = (0, SpaceEntity_1.makeSpaceActions)();
    entdef.course = (0, CourseEntity_1.makeCourseActions)();
    entdef.course_analytic = (0, CourseAnalyticEntity_1.makeCourseAnalyticActions)();
    entdef.course_content = (0, CourseContentEntity_1.makeCourseContentActions)();
    entdef.grade = (0, GradeEntity_1.makeGradeActions)();
    entdef.unit_analytic = (0, UnitAnalyticEntity_1.makeUnitAnalyticActions)();
    entdef.event_log = (0, EventLogEntity_1.makeEventLogActions)();
    entdef.installment = (0, InstallmentEntity_1.makeInstallmentActions)();
    entdef.lead = (0, LeadEntity_1.makeLeadActions)();
    entdef.invoice_link = (0, InvoiceLinkEntity_1.makeInvoiceLinkActions)();
    entdef.promotion = (0, PromotionEntity_1.makePromotionActions)();
    entdef.coupon = (0, CouponEntity_1.makeCouponActions)();
    entdef.coupon_usage = (0, CouponUsageEntity_1.makeCouponUsageActions)();
    entdef.school_event = (0, SchoolEventEntity_1.makeSchoolEventActions)();
    entdef.seat = (0, SeatEntity_1.makeSeatActions)();
    entdef.subscription_plan = (0, SubscriptionPlanEntity_1.makeSubscriptionPlanActions)();
    entdef.user_role = (0, UserRoleEntity_1.makeUserRoleActions)();
    entdef.user_subscription = (0, UserSubscriptionEntity_1.makeUserSubscriptionActions)();
    entdef.user_group = (0, UserGroupEntity_1.makeUserGroupActions)();
    entdef.user_segment = (0, UserSegmentEntity_1.makeUserSegmentActions)();
    entdef.enrollment = (0, EnrollmentEntity_1.makeEnrollmentActions)();
    entdef.complete = (0, CompleteEntity_1.makeCompleteActions)();
    entdef.user_progress = (0, UserProgressEntity_1.makeUserProgressActions)();
    entdef.reset = (0, ResetEntity_1.makeResetActions)();
    entdef.product = (0, ProductEntity_1.makeProductActions)();
    entityBuilder(this, {
        provider: {
            name: 'learnworlds',
        },
        entity: entdef
    });
    seneca.prepare(async function () {
        let res = await this.post('sys:provider,get:keymap,provider:Learnworlds');
        if (!res.ok) {
            throw new Error('Learnworlds Error: no keymap');
        }
        this.shared.sdk = new learnworlds_1.LearnworldsSDK(this.util.deep({}, options.native || {}, {
            base: res.keymap.base.value,
            apikey: res.keymap.apikey.value,
            headers: {
                'Lw-Client': res.keymap.clientid.value,
            }
        }));
    });
    return {
        exports: {
            sdk: () => this.shared.sdk,
        },
    };
}
// Default options.
const defaults = {
    // TODO: Enable debug logging
    debug: false,
};
Object.assign(LearnworldsProvider, { defaults });
exports.default = LearnworldsProvider;
if ('undefined' !== typeof module) {
    module.exports = LearnworldsProvider;
}
//# sourceMappingURL=LearnworldsProvider.js.map