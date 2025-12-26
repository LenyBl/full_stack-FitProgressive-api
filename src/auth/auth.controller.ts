import { Controller, Body, Post, HttpCode, HttpStatus, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { SignInDto } from './dto/sign-in-with-google.dto';
import { Public } from './skipAuth';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signIn(@Body() signInDto: SignInDto) {
        const { email, password_hash } = signInDto;
        return this.authService.signIn(email, password_hash);
    }
}
