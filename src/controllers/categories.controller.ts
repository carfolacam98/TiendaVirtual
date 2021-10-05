import { Controller,Get,Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get('categories/:categoryWord/product/:id')
  getCategories(@Param("id") id:number,@Param("categoryWord") categoryWord:string){
    return `product ${id} in category ${categoryWord}`
  }

}
