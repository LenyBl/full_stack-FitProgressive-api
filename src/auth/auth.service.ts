import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

    async signIn(email: string, password_hash: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }
        if (!await bcrypt.compare(password_hash, user.password_hash)) {
            throw new UnauthorizedException('Invalid email or password');
        }
        const payload = { sub: user.user_id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
