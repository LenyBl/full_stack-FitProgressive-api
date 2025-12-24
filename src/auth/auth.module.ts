import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { AuthGuard } from './auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, {
    provide: 'APP_GUARD',
    useClass: AuthGuard,
  }],
  imports: [UsersModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60m' },
  })]
})
export class AuthModule {}
