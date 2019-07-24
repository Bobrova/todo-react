import React, {Component} from 'react';
import ItemTaskList from '../ItemTaskList'
import ListFooter from '../ListFooter'
import './style.css'

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      tab: 'All'
    }
  }

  handleGetItemsTab = (tab) => {
    this.setState({
          tab: tab
        });
  }

  render() {
    const {tab} = this.state
    const {todoList} = this.props
    this.getItemsTab = () => {
    switch (tab) {
      case 'All':  
        return todoList
      case 'Active':  
        return todoList.filter(itemList => !itemList.completed)
      case 'Completed':  
        return todoList.filter(itemList => itemList.completed)
      default: 
        break
    }
  }

    const todoListTab = this.getItemsTab()
    const listItem = todoListTab.map(item => 
      <li key={item.id} className="list-item">
        <ItemTaskList 
          todolist={item}
          DeleteItem={this.props.DeleteItem}
          CheckedItem={this.props.CheckedItem}
          EditItem={this.props.EditItem}
          IdEdit={this.props.IdEdit}
        />
      </li>
      )
      

      return (
        <ul className="main__task-list">
          {listItem}
          <ListFooter 
            DeleteCompletedAll={this.props.DeleteCompletedAll}
            countActiveItem={this.props.countActiveItem}
            getItemsTab={this.handleGetItemsTab}
            isCheckedExists={this.props.isCheckedExists}
          />
        </ul>
      )
  }
}


export default TaskList;