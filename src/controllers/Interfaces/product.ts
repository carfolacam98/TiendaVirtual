import { Document } from "mongoose";

export interface task extends Document{
  //LAs interfaces se hacen para crear datos de tipo local
  id?:number,
  title:string;
  description:string;
  done:boolean;
}
