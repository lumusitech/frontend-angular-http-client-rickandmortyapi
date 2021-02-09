import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl: string;
  page: number;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api/character';
    this.page = 0;
  }

  getListByPage(page: number): Promise<any> {
    return this.httpClient.get<any[]>(`${this.baseUrl}?page=${page}`).toPromise();
  }
}
