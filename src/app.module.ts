import { Module } from '@nestjs/common';
import { EventModule } from './modules/event/event.module';
import { SponsorModule } from './modules/sponsor/sponsor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendeeModule } from './modules/attendees/attendee.module';
import { UserModule } from "./modules/users/user.module"
//import { AuthModule } from './modules/users/auth/auth.module';


@Module({
  imports: [
    EventModule,
    SponsorModule,    
    MongooseModule.forRoot('mongodb+srv://dbuser:utf123@cluster0.tbjmi.mongodb.net/hashmeet-nest-db?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    }),
    AttendeeModule,
    UserModule,
    //AuthModule
  ],
})
export class AppModule {}
