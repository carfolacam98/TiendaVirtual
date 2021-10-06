import { Controller,Get,Query,Param, Delete, Put, Post, Body } from '@nestjs/common';

import { http_Service } from './http.service';

@Controller('htt')
export class ProductsController {
 constructor(private http_service:http_Service){}

 @Get()
 gethttpcontroll(){

   return `its working here in http`
 }


 }


