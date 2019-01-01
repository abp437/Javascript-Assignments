import { Component } from 'react';
import PropTypes from 'prop-types';

class ListIterator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.listItems,
    };
    this.sortArrays = this.sortArrays.bind(this);
  }

  sortArrays() {
    const listItems = [...this.props.listItems];
    return listItems.sort((elem1, elem2) => {
      const tempVar1 = elem1.text,
        tempVar2 = elem2.text;
      if (tempVar1 < tempVar2) {
        return -1;
      }
      if (tempVar1 > tempVar2) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    const sortedListItems = this.sortArrays(),
      { deleteItem } = this.props;
    return (
      <ul className="list-group">
        {sortedListItems.map(item => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={item.key}>
            <span>{item.text}</span>
            <button className="btn btn-danger" type="button" onClick={() => deleteItem(item.key)}>x</button>
          </li>
        ))}
      </ul>
    );
  }
}

ListIterator.defaultProps = {
  listItems: [],
  deleteItem: () => { },
};

ListIterator.propTypes = {
  listItems: PropTypes.array,
  deleteItem: PropTypes.func,
};

export default ListIterator;
