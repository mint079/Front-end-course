import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={data: {description:'',date:''},todos:[]}
  }
  inputChanged1 =(event)=>{
    this.setState({data:{...this.state.data, description: event.target.value}});
  }
  inputChanged2 = (event)=>{
    this.setState({data:{...this.state.data, date: event.target.value}});
  }
  buttonPressed = (index) =>{
    this.setState((e)=>{
      return {todos : e.todos.filter((todo, i) => i !== index)}
    });
 
   }
  addTodo =(event) => {
    event.preventDefault();
    this.setState({todos:[...this.state.todos, this.state.data]})
  }
  render() {
    const columns = [{
      Header: 'Date'
      ,
      id: 'date',
      accessor: data=> data.date// String-based value accessors!
      ,
      }, {
      Header: 'Description'
      ,
      id: 'description',
      accessor: data => data.description
      ,
      },{
      id:'delete',
      Cell: row=>(
        <button onClick={()=>this.buttonPressed(row.index)}>Delete</button>
      )
      }]
      
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist exercise 8</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
           Description: <input type="text" onChange={this.inputChanged1} value={this.state.description}/>
           Date :<input type="text" onChange={this.inputChanged2} value={this.state.date}/>
            <input type="submit" value="Add"/>
          </form>
        </div>
        <div><ReactTable data={this.state.todos}
          columns={columns} sortable='true'
          defaultPageSize='10' />
        <h2>Exercises 5-7 </h2>
        <TodoTable todos={this.state.todos} deleteEvent={this.buttonPressed}/>
        </div>          
      </div>    
    );
  }
}

export default App;
