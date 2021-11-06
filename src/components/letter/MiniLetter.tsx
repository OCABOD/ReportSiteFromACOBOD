import React from 'react'
import Card from '../card/Card'
import './MiniLetter.scss'
interface IProps {
    nameAndSurname:string;
    topic:string;
}
export default function MiniLetter(props:IProps){
    return(
        <Card class='Letter'>
            <div className='mainText'>{props.nameAndSurname}</div>
            <div className='secondaryText'>{props.topic}</div>
        </Card>    
    )
}