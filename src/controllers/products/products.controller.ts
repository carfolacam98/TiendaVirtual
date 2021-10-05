import { Controller,Get,Query,Param, Delete, Put, Post, Body } from '@nestjs/common';
import {CreateTaskDto} from "../DTO/create-task.dto";
import { ProductsService } from './products.service';
import { task } from '../Interfaces/product';
@Controller('product')
export class ProductsController {
 constructor(private productService:ProductsService){}
 @Post()
  PostProduct(@Body() task:CreateTaskDto):Promise<task>{

    return this.productService.createProduct(task)

  }
  @Get('filter')
  getProductFilter(): Promise<task[]> {
    return this.productService.getProducts();
  }
  @Get(':taskid')
  getProduct(@Param('taskid')taskid:string) {
    return this.productService.getProduct(taskid);
  }


  //En elednpoint query se ve como asi http://localhost:3000/products?limit=100&offset=50
  //es decir que uno lo asignaaa!!
  //no importa el orden en que los envie ni cuantos datos envie
  @Get()
  getProducts(@Query('limit') limit=100,
  @Query('offset') offset=500,
  @Query('brand') brand:number){

    return `product ${limit} &  ${offset} &  ${brand}`
  }
  // @Get(':id')
  // GETProduct(@Param("id") id:number){
  //   return `product ${id}`
  // }





  @Delete(':id')
  DeleteProduct(@Param("id") id:number){
    return `product ${id}`
  }


  @Put(':id')
  PutProduct(@Body() task:CreateTaskDto,@Param("id") id:number){
    console.log(task)
    return `put product ${task} &${id}`
  }
}
