import React from 'react'
import Card from '../card/Card'
import MiniLetter from '../letter/MiniLetter'
import './home.scss'
export default function Home(){
    return(<div className='home'>
        <div className='letters_and_graffic'>
           
        <Card class='fixed_component letters_column'>
           <MiniLetter nameAndSurname={'letter'} topic={'topic'}/>
           <MiniLetter nameAndSurname={'letter'} topic={'topic'}/>
           <MiniLetter nameAndSurname={'letter'} topic={'topic'}/>
           <MiniLetter nameAndSurname={'letter'} topic={'topic'}/>
           <MiniLetter nameAndSurname={'letter'} topic={'topic'}/>
        </Card>
        
        
     
        <Card class='max_component'>
            графік
        </Card>
        
        </div>
        
        <Card class='fixed_component'>
            креатив
        </Card>
        
    </div>) 

}