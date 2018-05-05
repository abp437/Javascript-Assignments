import { PropTypes, Component } from 'react';
var uniqid = require('uniqid');

export class TaskItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeItem(itemID) {
    this.props.delete(itemID);
  }

  render() {
    return (
      <ul className='d-flex flex-column align-items-center list-unstyled'>
        {
          this.props.taskitem.map((item) => {
            return(
              <li key={item.key} className='taskItem'>
                <span>{item.text}</span>
                <button className='btn btn-danger' onClick={() => this.removeItem(item.key)}>x</button>
              </li>
            )
          })
        }
      </ul>
    );
  }
};
