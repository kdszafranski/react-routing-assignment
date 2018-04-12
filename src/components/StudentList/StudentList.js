import React, { Component } from 'react';
import StudentListItem from './StudentListItem/StudentListItem'

class StudentList extends Component {

  handleClick() {
    // this.props.handleGetMoreInfo();
  }
  
  render() {
    let students = this.props.studentList.map( (student) => {
      return (
        <StudentListItem 
          key={student._id} 
          student={student} 
          handleGetMoreInfo={this.props.handleGetMoreInfo} />
      )
    });
    

    return (
      <ul>
          {students}
      </ul>
    )
  }
}

export default StudentList;