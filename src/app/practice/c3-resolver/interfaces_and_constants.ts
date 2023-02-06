export interface C3BookInterface {
  author: string;
  title: string;
}


export class C3BookTrackerError {

  constructor(public errorNumber: number,
              public message: string,
              public friendlyMessage: string) {
  }
}



export const C3_BOOKS: C3BookInterface[] = [
  {author: 'book', title: 't1'},
  {author: 'a2', title: 't2'}
]
