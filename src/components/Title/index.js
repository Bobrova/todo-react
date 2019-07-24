import React, {Component} from 'react';
import './style.css'

class Title extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.props.EditItem(this.props.todolist);
  }

  render() {
    const {todolist} = this.props;
    return (
        <span className="task-list_text" onDoubleClick={this.handleClick}>{todolist.title}</span>
    )
  }
  
}

export default Title