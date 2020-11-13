import { Module } from '@nestjs/common';
import { EventModule } from './modules/event/event.module';
import { SponsorModule } from './modules/sponsor/sponsor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendeeModule } from './modules/attendees/attendee.module';
import { UserModule } from './modules/users/user.module';
import { ConfigModule } from '@nestjs/config';
//import { AuthModule } from './modules/users/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventModule,
    SponsorModule,
    MongooseModule.forRoot('process.env.DATABASE', {
      useNewUrlParser: true,
    }),
    AttendeeModule,
    UserModule,
  ],
})
export class AppModule {}
