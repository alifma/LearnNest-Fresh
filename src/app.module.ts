import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';

@Module({
  // Semua module yang dipakai harus diimport di yang main ini
  imports: [ConfigModule.forRoot({
  isGlobal: true}),  AuthModule, UserModule, BookmarkModule, PrismaModule],
  controllers: [UsersController],
})
export class AppModule {}
