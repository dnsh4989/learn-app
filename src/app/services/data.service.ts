import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  //variables and functions..
  title = 'LeaRn App';

  getData() {
    return [
      {
        name: 'sruthi',
        age: 29,
      },
      {
        name: 'dinesh',
        age: 32,
      },
      {
        name: 'amma',
        age: 59,
      },
      {
        name: 'nanna',
        age: 62,
      },
    ];
  }
}
