import React,{Component} from 'react';
import {render} from 'react-dom';
import Hello from './Hello.js';
import './style.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    task: '',
    tasks:[]
  }
}
handleChange = (e) => {
  console.log("handle change called", e.target.value)
  this.setState ({
    task:e.target.value
  })
}
addTask = () =>{
  this.setState({
    tasks: [...this.state.tasks,this.state.task]
  })
}
  render (){
    console.log("render called")
    return (
      <div>
      <h1> welcome</h1>
      <input type="text" value={this.state.task} onChange={this.handleChange}/>
      <button onClick={this.addTask}>Add Task</button>
      <ul>
      {
       this.state.tasks.map((t) =>{
         return <li>{t}</li>
       })
      }
      </ul>
      </div>
    );
  }
} 


render(<App />, document.getElementById('root'));