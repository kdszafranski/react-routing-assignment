import React, { Component } from 'react';

class StudentListItem extends Component {
  render() {
    return(
      <li key={this.props.student._id}>{this.props.student.github} 
        <button onClick={this.handleClick}>Get More Info</button>
    </li>
    )
  }
}

export default StudentListItem;