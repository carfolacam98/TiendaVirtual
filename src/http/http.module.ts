import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { http_Service } from './http.service';
@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [http_Service],
})
export class http_module {

}


