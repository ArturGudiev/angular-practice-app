import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class C11Service {

  constructor() { }

  async getPromise(num: number): Promise<any> {
    // await setTimeout(()=> {} , 1000);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num > 0) {
          resolve('Everything is good')
        } else {
          reject("It's bad");
        }
      }, 1000);
    })
  }
}
