import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getData() {
    return this.data;
  }

  data = [
    { _id: 1, game: { name: 'Rowing', schedule: [{ stadium: 'Asmara', date: '', time: '' }] } },
    { _id: 2, game: { name: 'swimming', schedule: [{ stadium: 'keren', date: '', time: '' }] } },
    { _id: 3, game: { name: 'skatting', schedule: [{ stadium: 'massawa', date: '', time: '' }] } }
  ];


}
