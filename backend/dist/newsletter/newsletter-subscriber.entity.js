"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterSubscriber = void 0;
const typeorm_1 = require("typeorm");
let NewsletterSubscriber = class NewsletterSubscriber {
    id;
    email;
    name;
    active;
    source;
    subscribedAt;
};
exports.NewsletterSubscriber = NewsletterSubscriber;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NewsletterSubscriber.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], NewsletterSubscriber.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], NewsletterSubscriber.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], NewsletterSubscriber.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'blog' }),
    __metadata("design:type", String)
], NewsletterSubscriber.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], NewsletterSubscriber.prototype, "subscribedAt", void 0);
exports.NewsletterSubscriber = NewsletterSubscriber = __decorate([
    (0, typeorm_1.Entity)('newsletter_subscriber')
], NewsletterSubscriber);
//# sourceMappingURL=newsletter-subscriber.entity.js.map