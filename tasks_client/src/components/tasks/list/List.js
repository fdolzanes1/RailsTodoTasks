import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
  
  async deleteTasks(task) {
    if (window.confirm(`Are you sure you want to delete: "${task.title}"`)) {
      await fetch(`http://localhost:3001/tasks/${task.id}`, {method: 'DELETE'});
      this.props.loadTasks();
    }
  }

  async checkTask(task) {
    let form = {'task': {'done': 'true'}}
    await fetch(`http://localhost:3001/tasks/${task.id}`,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task: { done: true } 
        })
      }
    )
    this.props.loadTasks();
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Table responsive>
              <tbody>
                {this.props.tasks.map((task, index) => {
                  return <tr key={task.id}>
                    <td className="col-md-10">{task.title}</td>
                    <td>
                      { 
                        task.done === false
                        ? <a className="check" href="#" onClick={() => this.checkTask(task)} size="lg">
                            <FontAwesomeIcon icon="check-circle"  />
                          </a> 
                        : null
                      }
                    </td>
                    <td>
                      <a className="delete" href="#" onClick={ () => this.deleteTasks(task) } >
                        <FontAwesomeIcon icon="trash-alt"/>
                      </a>
                    </td>
                  </tr>;
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default List;