import { Employee } from "../models/employee.model";

export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'Stephen',
    surname: 'Hawking',
    position: 5,
    birthDate: new Date(1942, 0, 8),
    status: 1
  },
  {
    id: 2,
    name: 'Steve',
    surname: 'Jobs',
    position: 3,
    birthDate: new Date(1955, 1, 24),
    status: 1
  },
  {
    id: 3,
    name: 'Bill',
    surname: 'Gates',
    position: 4,
    birthDate: new Date(1955, 9, 28),
    status: 0
  },
  {
    id: 4,
    name: 'Marie',
    surname: 'Curie',
    position: 4,
    birthDate: new Date(1967, 10, 7),
    status: 0
  }
];
