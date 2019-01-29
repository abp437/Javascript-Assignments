import { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChangeHandler = term => {
    this.setState({
      term
    }, () => {
      this.props.onSearchTermChange(this.state.term);
    })
  }

  render() {
    return <input
      className="col-md-12 form-control mb-5"
      type="text"
      onChange={event => this.onInputChangeHandler(event.target.value)}
      placeholder="Enter Term Here"
    />;
  }
};
