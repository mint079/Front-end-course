import React, { Component } from 'react';
import './App.css';

class TodoTable extends Component {
    constructor(props) {
        super(props);
        }
    render(){
        return(
            <table>
              <tbody>
              <tr><th>Date</th><th>Description</th><th></th></tr>
               {this.props.todos.map((item, index) => <tr key={index}>
               <td>{item.date}</td>
                <td>{item.description}</td>
                <td><button onClick={()=>this.props.deleteEvent(index)}>Delete</button></td>
              </tr>)}
            </tbody>
            </table>
        );
    }
        
}
export default TodoTable;