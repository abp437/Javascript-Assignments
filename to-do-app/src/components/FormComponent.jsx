import { Component } from 'react';
import PropTypes from 'prop-types';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.userInputSubmitted = this.userInputSubmitted.bind(this);
  }

  userInputSubmitted(event) {
    event.preventDefault();
    if (this.state.value !== '') {
      this.props.validateUserInput(this.state.value);
      this.setState({
        value: ''
      });
    } else {
      alert('Blank');
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <form className='form-group d-flex' onSubmit={this.userInputSubmitted}>
        <input className='form-control' type='text' placeholder='Enter Items Here' value={this.state.value} onChange={this.handleChange} />
        <button className='btn btn-primary'>Add</button>
      </form>
    );
  }
}

FormComponent.defaultProps = {
  validateUserInput: () => { }
};

FormComponent.propTypes = {
  validateUserInput: PropTypes.func
};

export default FormComponent;
