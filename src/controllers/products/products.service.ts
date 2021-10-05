import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../DTO/create-task.dto';
import {task}  from '../Interfaces/product';

//Simula base de datos
@Injectable()
export class ProductsService {

  constructor(@InjectModel('Products') private productmodel:Model<task>){}
async getProducts(){
  return await  this.productmodel.find()
}
async getProduct(id:string){
  return await  this.productmodel.findById(id)
}

async createProduct(product:CreateTaskDto){
  const newTaks= new this.productmodel(product)
  return  await newTaks.save()

}
  // products:task[]=[

//   {
//     id:1,
//     title:'otherstring',
//     description:"testingservice",
//     done:true,

//   },
//   {
//     id:2,
//     title:'otherstring',
//     description:"testingservice",
//     done:true,

//   },
//   {
//     id:3,
//     title:'otherstring',
//     description:"testingservice",
//     done:true,

//   }
// ];
// getProducts():task[]{
//   return this.products
// }
// getProduct(id:number):task{
//   return this.products.find(product=>product.id===id)

// }
}
