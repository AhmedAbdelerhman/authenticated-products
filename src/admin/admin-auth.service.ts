import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponseMsg } from '@app/libs/errors/api-response-msg';
import { LogInDto } from './dto/login.dto';
import { TypeOrmMethods_Find } from '@app/libs/typeorm/find.orm';

interface JwtPayload {
    id: string
    role:string
}

@Injectable()
export class AuthAdminService {
    private readonly secretKey = process.env.secret_key



    async createAdminToken(user: any, expiresIn: any = process.env.tokenSecondsDuration): Promise<string> {

        const payload:JwtPayload = {  id: user.id  , role:"admin"};
        return jwt.sign(payload, this.secretKey, { expiresIn: expiresIn + "s" }); // Adjust token expiration as needed
    }


    async validateToken(token: string) {
        try {
            const decoded = await jwt.verify(token, this.secretKey) as JwtPayload;
            return decoded;
        } catch (error) {
            return null;
        }
    }
    async adminLogin(loginUserDto: LogInDto) {

        if(process.env.adminUsername !==loginUserDto.username || process.env.adminPassword !==loginUserDto.password)
        {
            return ApiResponseMsg.errorResponse("wrong email or password", 401)

        }

        const token = await this.createAdminToken(loginUserDto, loginUserDto.tokenSecondsDuration)

        return ApiResponseMsg.successResponse('Login successful',
            {
                expires_in: loginUserDto.tokenSecondsDuration? loginUserDto.tokenSecondsDuration+ "s" : process.env.tokenSecondsDuration + "s",
                token
            }, 200);

    }



}
