import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

const { Module } = require("@nestjs/common");

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}