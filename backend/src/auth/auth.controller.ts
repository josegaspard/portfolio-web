import { Controller, Post, Body, HttpCode, HttpStatus, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Throttle } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // ============================================
  // SECURITY: Rate Limiting específico para login
  // 5 intentos cada 15 minutos
  // ============================================
  @Throttle({ default: { limit: 5, ttl: 900000 } }) // 15 minutos
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() signInDto: { username?: string; password?: string }) {
    if (!signInDto.username || !signInDto.password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Validación de input básica
    if (signInDto.username.length > 100 || signInDto.password.length > 100) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return this.authService.login(signInDto.username, signInDto.password);
  }
}
