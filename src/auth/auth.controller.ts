import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
// Tempat handling request http
// pemberian auth disini berarti nanti semua endpoint yang diexport dari module ini ada prefix 'auth' didepannya
@Controller('auth')
export class AuthController {
  // gak perlu lagi new object
  constructor(private authService: AuthService) {}

  // handling for /auth/signup
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    /**
     *  bentuk balikannya akan ditentukan oleh nestjs
     *  misalkan seperti
     * return 'I am signup'
     * nanti balkannya akan text
     * kalau misal balikannya begini
     * return {msg: 'i am signup'}
     * balikannya akan object
     */
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  // handling for /auth/signin
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
