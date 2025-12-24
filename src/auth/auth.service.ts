import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

    async signInWithGoogle(googleId: string) {
        const user = await this.usersService.findByGoogleId(googleId);
        if (!user) {
            throw new UnauthorizedException('Invalid Google ID');
        }
        const payload = { sub: user.user_id, googleId: user.google_id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
