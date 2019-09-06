import React , { useState, useEffect } from 'react';
import DisplayRepoDetail from './RepoList';

const Form = ( ) =>{
    const [ repoList , setRepoList ] = useState([]);
    const [ UserName , setUserName ] = useState('');

    const SearchForRepo = ( event ) => {
        fetch(`https://api.github.com/users/${UserName}/repos`)
        .then(response => response.json())
        .then(data => {
            setRepoList(data);
        });
    }
    const handleUserNameChange = ( event ) =>{
        setUserName( event.target.value)
    }
 return (<form>
            <label for="username">User Name</label>
            <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={handleUserNameChange}
                    value={UserName}>
            </input>
            <button type="button" onClick={SearchForRepo}>Get All Repo</button>
            <DisplayRepoDetail  repository={repoList} username={UserName} />
        </form>);
}
 

export default Form;
