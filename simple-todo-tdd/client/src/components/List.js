import React from 'react'
import ReactDOM from 'react-dom'
import ListItems from './ListItems';

const List = ( props ) => {

return (
    <div>
    <h4>List of all planned things for 13-mon-2019 ( Today ) </h4>
    <table>
        <thead>
            <tr>
                <th>Sno.</th>
                <th>Name</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <ListItems  />
        </tbody>
    </table>
    </div>
);

}

export default  List;