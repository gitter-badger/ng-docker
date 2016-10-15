import { Injectable, Injector } from '@angular/core';

@Injectable()
export class ImageService {
  constructor(private http: Http) { }

  private baseUrl:string = "http://localhost:4243" //temp define base url


  private listImageUrl = "/images/json";
  listImages(){
    
  }
}
