import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

const { Module } = require("@nestjs/common");

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}