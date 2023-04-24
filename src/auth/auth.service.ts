import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// Tempat menyimpan bisnis logic
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'I have signup' };
  }
  signin() {
    return { msg: 'I have signin' };
  }
}
