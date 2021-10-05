import { Controller, Get,Param,Query } from '@nestjs/common';
import { AppService } from './app.service';
//se deben recibir primero rutas que no son dinamicos de los que si lo son
//los dinamicos son los que reciben parametros
//en este caso es entre product/filter y product/id
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // Esto es lo que cambia en la url
  @Get('nuevo')
  newEndpoint(){
    return 'Yo soy un nuevo endpoint'
  }




}
