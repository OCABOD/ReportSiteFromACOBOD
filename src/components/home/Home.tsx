import React, { useCallback, useEffect, useState } from 'react'
import { getPhrases } from '../../axios/phrases'
import Card from '../card/Card'
import MiniLetter from '../letter/MiniLetter'
import './home.scss'
export default function Home(){
    const [phrases,changephrases]=useState<Iphrase[]>([])
    const [curentPhrases,setcurentPhrases]=useState<Iphrase>({
        quote: "...",
        author: "..."
    })

    const get=useCallback(
        async () => {
          const fetchedphrases=await getPhrases()
          setcurentPhrases(fetchedphrases[0])
          changephrases(fetchedphrases)
          setInterval(()=>{
              const randomPrase:Iphrase=fetchedphrases[Math.round( Math.random()*(fetchedphrases.length -1))]
              setcurentPhrases(randomPrase)
                   },2000)
         },[]
     ) 

    useEffect(()=>{
       get()
       
    },[]) 

    return(<div className='home'>
        <div className='letters_and_graffic'>
           
        <Card class='fixed_component letters_column'>
           <MiniLetter nameAndSurname={'Name Surname'} topic={'topic'}/>
           <MiniLetter nameAndSurname={'Name Surname'} topic={'topic'}/>
           <MiniLetter nameAndSurname={'Name Surname'} topic={'topic'}/>
           <MiniLetter nameAndSurname={'Name Surname'} topic={'topic'}/>
           <MiniLetter nameAndSurname={'Name Surname'} topic={'topic'}/>
        </Card>
        
        
     
        <Card class='max_component'>
            графік
        </Card> 
        
        </div>
        
        <Card class='fixed_component'>
           {curentPhrases.quote}
        </Card>
        
    </div>) 

}