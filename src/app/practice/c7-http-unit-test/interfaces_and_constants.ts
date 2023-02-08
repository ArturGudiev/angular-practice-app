export interface C7BookInterface {
  author: string;
  title: string;
}


export class C7BookTrackerError {

  constructor(public errorNumber: number,
              public message: string,
              public friendlyMessage: string) {
  }
}



export const C7_BOOKS: C7BookInterface[] = [
  {author: 'book', title: 't1'},
  {author: 'a2', title: 't2'}
]
