import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className='cardsContainer'>
     {/* title
     pubDate
     link 
     guid 
     author 
     thumbnail 
     description 
     content 
     enclosure
     categories  */}
     <h3>{props.title}</h3>
     <div>{props.Date}</div>
     <a href={props.link}>click here for more information</a>
    </div>
  )
}

export default Cards
