export interface BookInterface {
  author: string;
  title: string;
}


export class BookTrackerError {

  constructor(public errorNumber: number,
              public message: string,
              public friendlyMessage: string) {
  }
}
