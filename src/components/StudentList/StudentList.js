import React, { Component } from 'react';
import StudentListItem from './StudentListItem/StudentListItem'

class StudentList extends Component {

  handleClick() {
    // this.props.handleGetMoreInfo();
  }
  
  render() {
    return (
      <ul>
          {this.props.studentList.map( (student) => {
            return (
              <StudentListItem student={student} />
            )
          })}
      </ul>
    )
  }
}

export default StudentList;