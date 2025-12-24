import { Controller, Body, Post, HttpCode, HttpStatus, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { SignInWithGoogleDto } from './dto/sign-in-with-google.dto';
import { AuthGuard } from './auth.guard';
import { Public } from './skipAuth';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('google/signin')
    async signInWithGoogle(@Body() signInWithGoogleDto: SignInWithGoogleDto) {
        const { googleId } = signInWithGoogleDto;
        return this.authService.signInWithGoogle(googleId);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
