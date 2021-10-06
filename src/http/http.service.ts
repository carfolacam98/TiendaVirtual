import { HttpService } from '@nestjs/axios';
import { Injectable, Param, Post } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class http_Service {
  constructor(private httpService: HttpService) {}
  findAll(): Observable<AxiosResponse<[]>> {
    return this.httpService.get('http://localhost:3000/ht');
  }






  }



