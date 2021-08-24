import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminUser } from "@entities";
import { AdminUserRepository } from "./admin-user.repository";

@Injectable()
export class AdminUserAuthService {
  constructor(
    private adminUserRepository: AdminUserRepository,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.adminUserRepository.findOneOrFail({
        email,
      });
      const validPassword = "rthrty87(^(^";
      if (user && validPassword) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  async login(user: AdminUser) {
    const payload = {
      email: user.email,
      adminUserId: user.adminUserId,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
