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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactMessagesController = void 0;
const common_1 = require("@nestjs/common");
const contact_messages_service_1 = require("./contact-messages.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ContactMessagesController = class ContactMessagesController {
    contactMessagesService;
    constructor(contactMessagesService) {
        this.contactMessagesService = contactMessagesService;
    }
    async create(data) {
        return this.contactMessagesService.create(data);
    }
    async findAll() {
        return this.contactMessagesService.findAll();
    }
    async findOne(id) {
        return this.contactMessagesService.findOne(+id);
    }
    async markAsRead(id) {
        return this.contactMessagesService.markAsRead(+id);
    }
    async reply(id, reply) {
        return this.contactMessagesService.reply(+id, reply);
    }
    async delete(id) {
        return this.contactMessagesService.delete(+id);
    }
};
exports.ContactMessagesController = ContactMessagesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactMessagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactMessagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactMessagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactMessagesController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Post)(':id/reply'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('reply')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ContactMessagesController.prototype, "reply", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactMessagesController.prototype, "delete", null);
exports.ContactMessagesController = ContactMessagesController = __decorate([
    (0, common_1.Controller)('contact-messages'),
    __metadata("design:paramtypes", [contact_messages_service_1.ContactMessagesService])
], ContactMessagesController);
//# sourceMappingURL=contact-messages.controller.js.map