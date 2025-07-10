import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { TasksService } from './tasks/tasks.service';
import { HelloService } from './hello/hello.service';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule],
  controllers: [HelloController],
  providers:[TasksService, HelloService],
})
export class AppModule {}
