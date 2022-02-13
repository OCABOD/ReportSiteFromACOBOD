import {get, post} from './axiosFunctions';

export function Register(newUser){
    return post('http://localhost:8080/register', newUser)
}

export function GetUser(id){
    return get(`http://localhost:8080/getUser/${id}`)
}

export function AllUsers(){
    return get('http://localhost:8080/Allusers')
}

export function Login(login, password){
    return post('http://localhost:8080/Login', {login, password})
}