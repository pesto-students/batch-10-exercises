import React from 'react'
import ReactDOM from 'react-dom'


const Form = ( props ) =>{

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
      }

    return (
        <div>
        <h1> Insert New TODO </h1>
        <form onSubmit="handleFormSubmit">
            <lable for="NewTodo">TODO NAME </lable>
            <input type="text" id="NewTodo" name="eventName"/>
            <lable for="NewTodo">TODO Time </lable>
            <input type="text" id="NewTodo" name="time" />
            <button type="submit" > Save </button>
        </form>
        </div>
    )
}
 export default Form;