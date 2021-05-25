import { Status } from "./status.enum";

export interface Employee {
    id:         number;
    name:       string;
    surname:    string;
    position:   number;
    birthDate:  Date;
    status:     Status;
}