import React from 'react'
import Card from '../card/Card'
import './home.scss'
export default function Home(){
    return(<div className='home'>
        <div className='letters_and_graffic'>
           
        <Card class='fixed_component'>
            5 листів
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