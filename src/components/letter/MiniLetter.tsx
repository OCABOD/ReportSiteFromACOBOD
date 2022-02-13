import React from 'react'
import Card from '../card/Card'
interface IProps {
    nameAndSurname:string;
    topic:string;
    isselected?:boolean;
}
export default function MiniLetter(props:IProps){
    return(
        <Card class={`Letter ${props.isselected?"selected":""}`}><div>{props.nameAndSurname}</div><div>{props.topic}</div></Card>    
    )
}