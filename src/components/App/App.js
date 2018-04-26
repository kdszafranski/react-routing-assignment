import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList.js'
import About from '../About/About';


class App extends Component {
  constructor() {
    super();
    // Keep track of the student list
    this.state = {
      studentList: [],
    };

    // Give our function access to `this`
    this.addStudent = this.addStudent.bind(this);
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent(newStudent) {
    console.log(newStudent);
    // POST your data here to /students
    axios.post('/students', newStudent)
      .then((response) => {
        console.log('response', response);
        this.getStudents();
      }).catch((error) => {
        console.log(error);
      });
  }
  getStudents() {
    axios.get('/students').then((response) => {
      console.log('GET response', response)
      // SAVE THE STUDENTS
      this.setState({
        studentList: response.data
      });
    }).catch(error => {
      console.log(error)
    });
  }

  handleGetMoreInfo(student) {
    console.log('clicked!', student)
  }

  componentDidMount() {
    // Load our existing info
    this.getStudents();
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">

        <Router>
          <div>
            <header className="App-header">
              <nav>
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to="/about">About this App</Link></ul>
              </nav>
            </header>

            <Route exact path="/" render={props =>
              <div>
                <h1 className="App-title">GitHub Student List</h1>
                <StudentForm addStudent={this.addStudent} />

                <StudentList
                  studentList={this.state.studentList}
                  handleGetMoreInfo={this.handleGetMoreInfo} />

              </div>
            }
            />

            <Route path="/about" component={About} />

          </div>
        </Router>

      </div >

    );
  }
}

export default App;
