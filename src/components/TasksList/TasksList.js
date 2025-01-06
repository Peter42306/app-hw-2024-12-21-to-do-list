import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form, Row, Table } from 'react-bootstrap';

class TasksList extends Component {

  handleCheckboxChange = (taskId) => {
    this.props.completeTask(taskId);
  };

  render(){
    const { activeTasks, completedTasks, completeTask } = this.props;
    
    return(
      <Container className='w-100 mt-3'>

        <p>Component TasksList</p>
        <p>Active Tasks</p>        
        <Table hover >
          <Row className="fw-bold border-bottom py-2">
            <Col xs={1} lg={1}>#</Col>
            <Col xs={5} lg={7}>Task</Col>
            <Col xs={3} lg={2}>Created at</Col>
            <Col xs={3} lg={2}>Is Completed</Col>
          </Row>
          {activeTasks.slice().reverse().map((task, index) =>(  
            <Row className="border-bottom py-2">                        
              <Col xs={1} lg={1}>{index + 1}</Col>
              <Col xs={5} lg={7}>{task.text}</Col>
              <Col xs={3} lg={2}>{task.createdAt.toLocaleString()}</Col>
              <Col xs={3} lg={2}>
                <Form.Check
                  type="checkbox"                  
                  checked={task.isCompleted}
                  onChange={() => this.handleCheckboxChange(task.id)}
                ></Form.Check>              
              </Col>            
            </Row>
          ))}
          
          
        </Table>
        <hr className='mt-3'></hr>
        <p>Completed Tasks</p>        
        <Table hover>
          <Row className="fw-bold border-bottom py-2">
            <Col xs={1} lg={1}>#</Col>
            <Col xs={5} lg={7}>Task</Col>
            <Col xs={3} lg={2}>Created At</Col>
            <Col xs={3} lg={2}>Completed At</Col>
          </Row>
          
          {completedTasks.slice().reverse().map((task, index) => (
          <Row key={task.id}  className="border-bottom py-2">            
            <Col xs={1} lg={1}>{index + 1}</Col>
            <Col xs={5} lg={7}>{task.text}</Col>
            <Col xs={3} lg={2}>{task.createdAt.toLocaleString()}</Col>
            <Col xs={3} lg={2}>{task.completedAt.toLocaleString()}</Col>
          </Row>
          ))}          
        </Table>
      </Container>      
    )
  }
};



TasksList.propTypes = {
  
  activeTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,

  completedTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      isCompleted: PropTypes.bool.isRequired,      
      completedAt: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,

  completeTask: PropTypes.func.isRequired,
};

TasksList.defaultProps = {};

export default TasksList;
