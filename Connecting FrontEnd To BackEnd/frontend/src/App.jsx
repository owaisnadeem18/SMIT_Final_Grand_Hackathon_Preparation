import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/quotes").then( async (res) =>  {
      console.log(res)
      setQuotes(res.data)
      await console.log(quotes)
    }).catch((err) => {
      console.log( "The error is = " , err)
    })
  }, [] )

  return (
    <>
      <h1>
        Full Stack SMIT Hackathon Preparation 
      </h1>

      <h3>
        Quotes Length = 
        { quotes.length }
        
      </h3>

      <ul>
        {
          quotes.map((quote , indx) => 
                <li style={{listStyle: "none" , padding: "10px 0"}} key={indx}> {quote.quote} </li>
          )
        }
      </ul>

    </>
  )
}

export default App
