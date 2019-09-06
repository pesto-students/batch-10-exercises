import React , { useState, useEffect } from 'react';

const Repo = ( prop ) =>{
   if(prop.repository.length > 0){
    return (<div>
        <h1>List of all repository of user {prop.username}</h1>
        <ul>
       {prop.repository.map( item =>{
           return (<li key="{item.full_name}"> {item.full_name} </li>);
       })}
       </ul>
    </div>);
   }else{
    return (<div>
        <h1>Please Input GitHub UserName To See Repository List </h1>
    </div>)
   }
 return (<div>
            <h1>List of all repository of user {prop.username}</h1>
            <ul>
           {prop.repository.map( (item , index) =>{
               return (<li key="{item.full_name}-{index}"> {item.full_name} </li>);
           })}
           </ul>
        </div>);
}
 

export default Repo;
