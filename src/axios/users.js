import {post} from './axiosFunctions';
import {get}  from './axiosFunctions';

export function Register(newUser){
    return post('http://localhost:8080/register', newUser)
}

export function AllUsers(){
    return get('http://localhost:8080/Allusers')
}


  