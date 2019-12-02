import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Tasks from './components/tasks/Tasks';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt)

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Tasks/>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;