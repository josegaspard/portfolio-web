import { Injectable, UnauthorizedException, OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) { }

  async onModuleInit() {
    // Seed admin user if it doesn't exist
    const admin = await this.userRepository.findOneBy({ username: 'admin' });
    if (!admin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const newUser = this.userRepository.create({
        username: 'admin',
        email: 'admin@josegaspard.dev',
        password: hashedPassword,
        role: 'admin',
      });
      await this.userRepository.save(newUser);
      console.log('Seeded admin user');
    }
  }

  async login(username: string, pass: string): Promise<any> {
    // Try to find user by username OR email
    let user = await this.userRepository.findOneBy({ username });
    if (!user) {
      user = await this.userRepository.findOneBy({ email: username });
    }

    if (user && await bcrypt.compare(pass, user.password)) {
      const payload = { username: user.username, sub: user.id, role: user.role };
      return {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      };
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}

