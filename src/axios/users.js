import {post} from './axiosFunctions';

export function Register(newUser){
    return post('http://localhost:8080/register', newUser)
}