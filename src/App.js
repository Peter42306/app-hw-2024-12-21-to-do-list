import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskInput from './components/TaskInput/TaskInput';
import { Component } from 'react';
import TasksList from './components/TasksList/TasksList';

class App extends Component{
  constructor(props){

    super(props);

    this.state = {
      activeTasks: [],
      completedTasks: [],
      nextId: 1,
    };
  }

  // Метод для добавления новой задачи
  addTask = (taskText) => {

    const newTask = {
      id: this.state.nextId,
      text: taskText,
      createdAt: new Date(),
      isCompleted: false,
    }

    this.setState((prevState) => ({
      activeTasks: [...prevState.activeTasks, newTask],
      nextId: prevState.nextId + 1,
    }))
  };

  // Метод для перемещения задачи из активных в выполненные
  completedTasks = (taskId) => {

    this.setState((prevState) => {
      
      const taskToComplete = prevState.activeTasks.find((task) => task.id === taskId);

      if(!taskToComplete){
        return prevState;
      } else {
        // Создаём копию массива выполненных задач
        const updatedCompletedTasks = prevState.completedTasks.slice();
        
        // Добавляем новую задачу с отметкой isCompleted: true
        const completedTask = {
          ...taskToComplete,
          isCompleted: true,
          completedAt: new Date(),
        };
        
        updatedCompletedTasks.push(completedTask);

        return {
          activeTasks: prevState.activeTasks.filter((task) => task.id != taskId),
          completedTasks: updatedCompletedTasks,
        }
      }
    });
  };

  render(){
    return(
      <div>

        <TaskInput         
          addTask={this.addTask}
        ></TaskInput>

        <TasksList
          activeTasks={this.state.activeTasks}
          completedTasks={this.state.completedTasks}
          completeTask={this.completedTasks}
        ></TasksList>

      </div>
    )
  }
}


export default App;
