import React, { Component } from 'react';

class StudentListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isShown : false
    }
  }
  
  handleShow = () => {
    console.log('clicked a nope');
    //show the data
    this.setState({
      isShown: true
    })
  }
  
  handleClick = () => {
    //this.props.student
    //this.props.handleGetMoreInfo
    this.props.handleGetMoreInfo(this.props.student)
  }

  render() {
    console.log('State in list Item', this.state)
    let listItem;
    if(this.props.student.github === 'doctorhowser' ||
        this.state.isShown) {
      //render the normal thing
      listItem = (
        <li>{this.props.student.github} 
          <button onClick={this.handleClick}>Get More Info</button>
        </li>
      )
    } else {
      //DONT RENDER THE NORMAL THING
      listItem = (
        <li onClick={this.handleShow} >NOPE!</li>
      )
    }
    return(
      listItem
    )
  }
}

export default StudentListItem;