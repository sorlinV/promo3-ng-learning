import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chien } from '../chien';

@Injectable()
export class ChienService {
  private urlAPI:string = 'http://localhost:3000/chien';
  constructor(private http:HttpClient) { }

  getAllChien():Promise<Chien[]> {
    return this.http.get<Chien[]>(this.urlAPI)
    .toPromise();
  }

  getChien(id):Promise<Chien> {
    return this.http.get<Chien>(this.urlAPI+'/'+id)
    .toPromise();
  }

  addChien(chien:Chien): Promise<Chien> {
    return this.http.post<Chien>(this.urlAPI, chien)
    .toPromise();
  }

  removeChien(id:number): Promise<void> {
    return this.http.delete<void>(this.urlAPI+'/'+id).toPromise();
  }

}
