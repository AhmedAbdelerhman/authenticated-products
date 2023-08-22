import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';


interface JwtPayload {
    email: string;
    // Add any other necessary payload properties
}

@Injectable()
export class AuthService {
    private readonly secretKey = 'your-secret-key'; // Replace with your actual secret key

    async createToken(email: string): Promise<string> {
        const payload: JwtPayload = { email };
        return jwt.sign(payload, this.secretKey, { expiresIn: '90s' }); // Adjust token expiration as needed
    }

    async validateToken(token: string): Promise<JwtPayload | null> {
        try {
            const decoded = jwt.verify(token, this.secretKey) as JwtPayload;
            return decoded;
        } catch (error) {
            return null;
        }
    }
}
