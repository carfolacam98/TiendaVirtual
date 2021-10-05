import { Schema } from "mongoose";
import * as mongoose from 'mongoose';
export const productSchema=new mongoose.Schema({
  title:String,
  descripction:String,
  done:Boolean
})
