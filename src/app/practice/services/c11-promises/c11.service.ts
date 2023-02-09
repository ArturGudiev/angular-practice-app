import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class C11Service {

  constructor() { }

  async getPromise(num: number): Promise<any> {
    await setTimeout(()=> {} , 1000);
    new Promise(async (resolved, rejected) => {
      if (num > 0){
        resolved('Everything is good')
      } else {
        rejected("It's bad");
      }
    })
  }
}
