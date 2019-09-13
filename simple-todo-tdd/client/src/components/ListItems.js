import React from 'react'
import ReactDOM from 'react-dom'

const ListItems = ( props ) =>{
    return (
        <tr>

          <td> 1. </td>
          <td> Lunch </td>
          <td> 20:00 </td> 
          <td> <a href="#">Edit</a> / <button type="button"> Delete </button> </td>    
        </tr>
    )
}   

export default  ListItems;