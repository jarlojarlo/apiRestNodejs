import { User } from "./user";

export interface IUserRepository{
    getUsers(): User[];
}