import { Controller, Get,Param,Query } from '@nestjs/common';
import { AppService } from './app.service';

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
  @Get('product/:id')
  getProduct(@Param("id") id:number){
    return `product ${id}`
  }

  //En elednpoint query se ve como asi http://localhost:3000/products?limit=100&offset=50
  //es decir que uno lo asignaaa!!
  @Get('products')
  getProducts(@Query('limit') limit:number,
  @Query('offset') offset:number,
  @Query('brand') brand:number){

    return `product ${limit} &  ${offset} &  ${brand}`
  }
  @Get('categories/:categoryWord/product/:id')
  getCategories(@Param("id") id:number,@Param("categoryWord") categoryWord:string){
    return `product ${id} in category ${categoryWord}`
  }
}
