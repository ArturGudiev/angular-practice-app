export interface C2BookInterface {
  author: string;
  title: string;
}


export class C2BookTrackerError {

  constructor(public errorNumber: number,
              public message: string,
              public friendlyMessage: string) {
  }
}
