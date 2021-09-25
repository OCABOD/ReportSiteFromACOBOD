import React from 'react'
import Card from '../card/Card'
interface IProps {
    nameAndSurname:string;
    topic:string;
}
export default function MiniLetter(props:IProps){
    return(
        <Card class='Letter'><div>{props.nameAndSurname}</div><div>{props.topic}</div></Card>    
    )
}