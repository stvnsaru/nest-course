import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma'; // Asegúrate de que esta importación sea correcta

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect(); // Ahora $connect debería estar disponible
    }
}