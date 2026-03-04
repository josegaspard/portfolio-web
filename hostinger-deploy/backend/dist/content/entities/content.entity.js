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
exports.Content = exports.ContentType = exports.ContentStatus = void 0;
const typeorm_1 = require("typeorm");
var ContentStatus;
(function (ContentStatus) {
    ContentStatus["DRAFT"] = "draft";
    ContentStatus["PUBLISHED"] = "published";
    ContentStatus["ARCHIVED"] = "archived";
})(ContentStatus || (exports.ContentStatus = ContentStatus = {}));
var ContentType;
(function (ContentType) {
    ContentType["PAGE"] = "page";
    ContentType["POST"] = "post";
    ContentType["HOME"] = "home";
    ContentType["PORTFOLIO"] = "portfolio";
})(ContentType || (exports.ContentType = ContentType = {}));
let Content = class Content {
    id;
    slug;
    title;
    blocks;
    type;
    status;
    seo;
    coverImage;
    author;
    category;
    tags;
    readingTime;
    layout;
    portfolioData;
    viewCount;
    publishedAt;
    createdAt;
    updatedAt;
};
exports.Content = Content;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Content.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Content.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Content.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Content.prototype, "blocks", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: ContentType,
        default: ContentType.PAGE,
    }),
    __metadata("design:type", String)
], Content.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: ContentStatus,
        default: ContentStatus.DRAFT,
    }),
    __metadata("design:type", String)
], Content.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], Content.prototype, "seo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Content.prototype, "coverImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'José Gaspard' }),
    __metadata("design:type", String)
], Content.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'SEO' }),
    __metadata("design:type", String)
], Content.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], Content.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], Content.prototype, "readingTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '3-column' }),
    __metadata("design:type", String)
], Content.prototype, "layout", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], Content.prototype, "portfolioData", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Content.prototype, "viewCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Content.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Content.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Content.prototype, "updatedAt", void 0);
exports.Content = Content = __decorate([
    (0, typeorm_1.Entity)()
], Content);
//# sourceMappingURL=content.entity.js.map