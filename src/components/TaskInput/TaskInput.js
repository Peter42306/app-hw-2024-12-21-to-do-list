import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

class TaskInput extends Component {

  constructor(props){

    super(props);

    this.state = {
      newTask: '',      
    };    
  }
  
  // Обработчик изменения текста в поле ввода
  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  // Обработчик отправки формы
  handleSubmit = (event) => {
    event.preventDefault();
    
    if(this.state.newTask.trim()){ 
      this.props.addTask(this.state.newTask); 
      this.setState({ newTask: '' }); 
    }
  };


  render(){
    return(
      <Container className='w-100 mt-3'>        
        <p>app-to-do-list</p>
        <p>Component TasksInput</p>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={7} lg={9}>
              <Form.Control 
                type="text"
                placeholder='Enter task here'
                value={this.state.newTask}
                onChange={this.handleInputChange}
                ></Form.Control>
            </Col>
            <Col xs={5} lg={3}>
              <Button type='submit' className='w-100'>Add task to your To-Do-List</Button>
            </Col>
            <hr className='mt-3'></hr>
          </Row>
        </Form>
      </Container>      
    );
  }
};

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

TaskInput.defaultProps = {};

export default TaskInput;
