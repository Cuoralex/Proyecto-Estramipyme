import { InMemoryDbService } from "angular-in-memory-web-api";


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Admin User', role: 'admin' },
      { id: 2, name: 'Manager User', role: 'manager' },
      { id: 3, name: 'Client User', role: 'client' }
    ];

    const events = [
      { id: 1, photo: 'url1', date: '2024-07-01', time: '10:00', description: 'Event 1' },
      { id: 2, photo: 'url2', date: '2024-07-02', time: '11:00', description: 'Event 2' }
    ];

    return { users, events };
  }
}

// import { InMemoryDbService } from 'angular-in-memory-web-api';

// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//     const users = [
//       { id: 1, typeOfPerson: 'natural', name: 'John Doe', email: 'john.doe@example.com' },
//       // ... otros usuarios
//     ];
//     return { users };
//   }
// }


