import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { productSchema } from '../schemas/product.shema';

@Module({
imports:[MongooseModule.forFeature([
 {name:'Products',schema:productSchema }
])],
controllers:[ProductsController],
providers:[ProductsService]


})
export class ProductsModule {}
